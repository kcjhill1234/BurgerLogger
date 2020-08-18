create  database if not exists burgers_db;

USE burgers_db;

create table if not exists burger (
    id integer auto_increment primary key,
    burger_name varchar (250),
    devoured boolean default false
)
