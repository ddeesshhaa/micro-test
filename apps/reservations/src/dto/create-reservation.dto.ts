export class CreateReservationDto {
  name: string;

  startDate: Date;

  endDate: Date;

  userId: string;

  placeId: string;

  invoiceId: string;
}
