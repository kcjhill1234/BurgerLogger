create database burgers_db

use burgers_db

create table burgers (
    id integer not null auto increment primary key (id),
    burger_name varchar (250),
    devoured boolean 
)

