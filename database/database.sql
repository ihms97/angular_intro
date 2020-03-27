create database arfamed;
use arfamed;

create table ficha_evaluacion (
	n_evaluacion int primary key,
    anamnesis varchar(600) not null,
    efg varchar(600) not null,
    ev_postural varchar(250),
    ev_funcional varchar(20),
    temp_palpado varchar(20),
    cicatrices varchar(20),
    eq_estatico varchar(50),
    eq_dinamico varchar(50),
    dlr_tiempo varchar(15),
    dlr_localizacion varchar(50),
    dlr_intencidad varchar(100),
    dlr_carac varchar(20),
    ev_motriz_izq varchar(300),
    ev_motriz_der varchar(300),
    ev_muscular_izq varchar(300),
    ev_muscular_der varchar(300),
    perimetro varchar(50),
    sen_superficial varchar(50),
    sen_profunda varchar(50),
    marcha varchar(50),
    propiocepcion varchar(50)
);

create table lesion (
	cod_lesion int primary key,
    detalle_lesion varchar(50),
    n_evaluacion int
);

alter table lesion
add constraint fk_evaluacion
foreign key (n_evaluacion) references ficha_evaluacion (n_evaluacion);

create table prevision (
	cod_prevision int primary key,
    detalle_prev varchar(15)
);

create table cliente (
	rut varchar(10) primary key,
    nombre varchar(32) not null,
    apellido varchar(32) not null,
    sexo char(1) not null,
    nacimiento date not null,
    correo varchar(50),
    celular int,
    direccion varchar(50),
    cod_prevision int
);

alter table cliente
add constraint fk_prevision
foreign key (cod_prevision) references prevision (cod_prevision);

create table especialidad (
	cod_especialidad int primary key,
    detalle_especialidad varchar(50)
);

create table profesional (
	cod_prof int primary key AUTO_INCREMENT,
    nombre_prof varchar(20),
    apellido_prof varchar(20),
    celular_prof int,
    correo_prof varchar(30),
    cod_especialidad int
);

alter table profesional
add constraint fk_especialidad
foreign key (cod_especialidad) references especialidad (cod_especialidad);

create table registro (
	cod_registro int primary key,
    detalle_registro varchar(15)
);

create table ficha_historica (
	cod_ficha int primary key,
    fecha_sesion date not null,
    cod_registro int
);

alter table ficha_historica
add constraint fk_registro
foreign key (cod_registro) references registro (cod_registro);

create table folio (
	n_folio int primary key,
	cliente varchar(10),
    lesion int,
    profesional int,
    historial int
);

alter table folio
add constraint fk_folio_cliente
foreign key (cliente) references cliente (rut);

alter table folio
add constraint fk_folio_lesion
foreign key (lesion) references lesion (cod_lesion);

alter table folio
add constraint fk_folio_profecional
foreign key (profesional) references profesional (cod_prof);

alter table folio
add constraint fk_folio_historial
foreign key (historial) references ficha_historica (cod_ficha);

insert into prevision values (1, 'Fonasa');
insert into prevision values (2, 'Fonasa Plus');
insert into prevision values (3, 'Isapre');

insert into registro values (1, 'Realizada');
insert into registro values (2, 'No Confirmada');
insert into registro values (3, 'Suspendida');
insert into registro values (4, 'Cancelada');

insert into especialidad values (1, 'Traumatología');
insert into especialidad values (2, 'Medicina General');
insert into especialidad values (3, 'Kinesiología');
insert into especialidad values (4, 'Rayos');
insert into especialidad values (5, 'Podología');
insert into especialidad values (6, 'Masoterapia');

insert into profesional values (1, 'Solange Nathalie', 'Saa Pangue', 976137332, 'solangep@arfamed.cl', 3);
insert into profesional values (2, 'Camila Paz', 'González González', 999999999, 'camilag@arfamed.cl', 3);
insert into profesional values (3, 'Fabián Arturo', 'Illanes Olivares', 999999999, 'fabiani@arfamed.cl', 3);
insert into profesional values (4, 'Violeta', 'Díaz Reyes', 999999999, 'violetad@arfamed.cl', 6);
insert into profesional values (5, 'Marcelo Igor', 'Castillo Espinoza', 999999999, 'marceloc@arfamed.cl', 1);
insert into profesional values (6, 'Alexis Leonard', 'Lafont Fernández', 999999999, 'alexisl@arfamed.cl', 1);