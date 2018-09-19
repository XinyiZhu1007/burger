create table if not exists burgers (
	id int primary key auto_increment,
	burger_name varchar(50) not null,
	devoured boolean not null default false
);