import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common';

@Entity('Reservations')
export class ReservationEntity extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  placeId: string;

  @Column()
  invoiceId: string;
}
