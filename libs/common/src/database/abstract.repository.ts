import { Repository } from 'typeorm';

export abstract class AbstractRepository extends Repository {
  public getAll() {}

  public getOneById(id: number) {}

  public deleteById(id: number) {}
}
