import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { MotivosPar } from "./Motivos_par";
import { Orden } from "./Orden";

@Entity({ name: "parada" })
export class Parada {
  @PrimaryGeneratedColumn()
  cod_par: number;

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
    type: "int",
  })
  cod_ord: number;

  @ManyToOne(() => Orden, (orden) => orden.parada)
  orden: Orden;

  @OneToOne(() => MotivosPar)
  @JoinColumn({ name: "codigo_motivo" })
  codigo_motivo: MotivosPar;
}
