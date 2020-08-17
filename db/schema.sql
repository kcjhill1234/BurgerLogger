DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;

USE burgers_db;

create table burger (
    id integer primary key,
    burger_name varchar (250),
    devoured boolean 
)
