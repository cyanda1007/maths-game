create table user_app (
	id serial not null primary key,
	ursename text not null,
	current_score int not null

);

-- create table GameResult (
-- 	id serial not null primary key,
--     user_id text not null,
--     score_id int not null,
--     duration timestamp DEFAULT NOW(),
--     foreign key (user_id) references user_app(id),
--     foreign key (score_id) references user_app(id)

-- );

-- create table questionsResult (
-- 	id serial not null primary key,
--     user_id text not null,
--     correct_answers int not null,
--     user_answers int not null,
--     foreign key (user_id) references user_app(id)
--     );
-- create table Entry (
-- 	id serial not null primary key,
-- 	age int not null,
-- 	gender VARCHAR(9)
-- );



insert into user_app (ursename,current_score) values ('Mbali','40');
insert into user_app (ursename,current_score) values ('Mxo','30');
insert into user_app (ursename,current_score) values ('Walter','50');

-- insert into user_app (ursename) values ('Khanya');



-- insert into user_app (ursename) values ('Mxo');
-- insert into user_app (ursename) values ('Sya');
-- insert into user_app (ursename) values ('Walter');
-- insert into user_app (ursename) values ('Khanya');
-- insert into client(first_name,last_name,phone_number) values('Mxolisi','Tshezi','0763112245');