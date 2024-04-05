insert into cliente (descripcion) values ("cliente 1");
insert into taller (descripcion) values ("taller 1");
insert into componente (descripcion) values ("motor 1");

insert into motivos_par (descripcion, tipo) values ("Falta de base", false);
insert into motivos_par (descripcion, tipo) values ("Maquina no disponible", false);

insert into motivos_par (descripcion, tipo) values ("Ispenccion ultrasonido", true);
insert into motivos_par (descripcion, tipo) values ("Extraccion de machon", true);


insert into orden (descripcion, fecha_inicio, fecha_fin, clienteCodCli, tallerCodTaller, componenteCodCli, estado) 
values ("Order servicio 1", "05-04-2024","",1,1,1,"todo");

insert into orden (descripcion, fecha_inicio, fecha_fin, clienteCodCli, tallerCodTaller, componenteCodCli, estado) 
values ("Order servicio 2", "05-04-2024","",1,1,1,"todo");

insert into orden (descripcion, fecha_inicio, fecha_fin, clienteCodCli, tallerCodTaller, componenteCodCli, estado) 
values ("Order servicio 3", "05-04-2024","",1,1,1,"todo");

insert into orden (descripcion, fecha_inicio, fecha_fin, clienteCodCli, tallerCodTaller, componenteCodCli, estado) 
values ("Order servicio 4", "05-04-2024","",1,1,1,"inprocess");


insert into orden (descripcion, fecha_inicio, fecha_fin, clienteCodCli, tallerCodTaller, componenteCodCli, estado) 
values ("Order servicio 5", "05-04-2024","",1,1,1,"inprocess");

