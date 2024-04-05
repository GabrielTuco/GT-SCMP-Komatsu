import { DataSource } from "typeorm";
import { MotivosPar } from "./Models/Motivos_par";
import { Parada } from "./Models/Parada";
import { Orden } from "./Models/Orden";
import { Cliente } from "./Models/Cliente";
import { Componente } from "./Models/Componente";
import { Taller } from "./Models/Taller";

const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "7560",
  database: "scmp-db",
  synchronize: true,
  entities: [MotivosPar, Parada, Orden, Cliente, Componente, Taller],
});

export default dataSource;
