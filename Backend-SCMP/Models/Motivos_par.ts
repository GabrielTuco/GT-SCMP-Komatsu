import { Column, Entity, EntitySchema, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "motivos_par"})
export class MotivosPar{

  @PrimaryGeneratedColumn()
  cod_mot_par: number;

  @Column({
    type: "varchar",
  })
  descripcion: string;

  @Column({
    type: "bool",
  })
  tipo!: boolean;

}

