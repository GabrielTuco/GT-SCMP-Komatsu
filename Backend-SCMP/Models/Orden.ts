import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MotivosPar } from "./Motivos_par";
import { Cliente } from "./Cliente";
import { Taller } from "./Taller";
import { Componente } from "./Componente";
import { Parada } from "./Parada";

@Entity({ name: "orden" })
export class Orden {
  @PrimaryGeneratedColumn()
  cod_ord: number;

  @Column({
    type: "varchar",
  })
  descripcion: string;

  @Column({
    type: "varchar",
  })
  fecha_inicio: string;

  @Column({
    type: "varchar",
  })
  fecha_fin: string;

  @Column({
    type: "varchar",
  })
  estado: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.orden)
  cliente: Cliente;

  @ManyToOne(() => Taller, (taller) => taller.orden)
  taller: Taller;

  @ManyToOne(() => Componente, (componente) => componente.orden)
  componente: Componente;

  @OneToMany(() => Parada, (parada) => parada.orden)
  parada: Parada;
}
