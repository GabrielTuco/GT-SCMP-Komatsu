import {
  Column,
  Entity,
  EntitySchema,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Orden } from "./Orden";

@Entity({ name: "componente" })
export class Componente {
  @PrimaryGeneratedColumn()
  cod_cli: number;

  @Column({
    type: "varchar",
  })
  descripcion: string;

  @OneToMany(() => Orden, (orden) => orden.componente)
  orden: Orden;
}
