import { Repository } from 'typeorm';
import { ReservationEntity } from './entities/reservation.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservationsRepository {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}

  async getOne(filter: object): Promise<ReservationEntity> {
    const reservation = await this.reservationRepository.findOne({
      where: filter,
    });
    if (!reservation) throw new NotFoundException('Reservation not found');
    return reservation;
  }

  async getAll(filter: object): Promise<ReservationEntity[]> {
    return await this.reservationRepository.find({ where: filter });
  }

  async addOne(reservation: CreateReservationDto): Promise<ReservationEntity> {
    await this.reservationRepository.create(reservation);
    return await this.reservationRepository.save(reservation);
  }
}
