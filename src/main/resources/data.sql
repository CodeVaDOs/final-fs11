insert into users (
    email ,
    role, password ) values (
    'admin@mm.crm',
    'ADMIN',
    '$2y$12$NyGl3e9ep/dQEaplJfIXg.eIYix1Lf.WxJU39nHXKJ.ki05V1OnNe');
insert into users (
    email ,
    role, password ) values (
    'user@ukr.net',
    'USER',
    '$2y$12$.LcVK48pL9ssl.LlRT9yuuLrARcW7YBqJZrXT6shVP81IanFXdfy6');
insert into users (
    email ,
    role, password ) values (
    'admin@ukr.net',
    'ADMIN',
    '$2y$12$HWJo8b.NOzMIzwM7AyWZsOZx2dIVeWSCV.v8KEpKxtVI8AfpmiXoq');
insert into users (
    email ,
    role, password ) values (
    'manager@ukr.net',
    'MANAGER',
    '$2y$12$v8iSQU5dd9g6kEBrsWxZme950DVfzMZAq4TG1vBlBbjc8xRW/Zs8i');
insert into contacts (
    phone, type, user_id) values (
    '0673334433',
    'ADDITIONAL',
    1);
insert into contacts (
    phone, type, user_id) values (
    '0502221122',
    'MAIN',
    1);
insert into house_types (
    name) values (
    'modern');
insert into house_types (
    name) values (
    'old_fashion');
insert into house_types (
    name) values (
    'classic');
insert into house_models (
    name, house_type_id) values (
    'Gatsby', 2);
insert into house_models (
    name, house_type_id) values (
    'Al Capone', 2);
insert into house_models (
    name, house_type_id) values (
    'Stradivari', 3);
insert into house_models (
    name, house_type_id) values (
    'Elon Musk', 1);