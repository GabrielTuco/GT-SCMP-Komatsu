import {
  Column,
  Entity,
  EntitySchema,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Orden } from "./Orden";

@Entity({ name: "cliente" })
export class Cliente {
  @PrimaryGeneratedColumn()
  cod_cli: number;

  @Column({
    type: "varchar",
  })
  descripcion: string;

  @OneToMany(() => Orden, (orden) => orden.cliente)
  orden: Orden;
}
