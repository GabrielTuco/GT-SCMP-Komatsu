import {
  Column,
  Entity,
  EntitySchema,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Orden } from "./Orden";

@Entity({ name: "taller" })
export class Taller {
  @PrimaryGeneratedColumn()
  cod_taller: number;

  @Column({
    type: "varchar",
  })
  descripcion: string;

  @OneToMany(() => Orden, (orden) => orden.taller)
  orden: Orden;
}
