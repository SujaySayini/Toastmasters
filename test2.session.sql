
--@block
INSERT INTO users (email, bio, country)
VALUES ('hello3@world.com','i love strangers','US'), ('hello2@world.com','i love strangers also','US');

--@block
SELECT * from users 
WHERE country = 'US' and id > 1 or email like 'h%'
ORDER BY id ASC
LIMIT 2;

--@block 
CREATE INDEX email_index on users(email);

--@block
SELECT * from users

--@block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT, 
    country VARCHAR(2)
);

--@block
CREATE TABLE rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id), 
    Foreign KEY (owner_id) REFERENCES users(id)

);

--@block
INSERT INTO rooms (owner_id, street)
VALUES (1, 'first street'), (1, 'second street'), (1, 'third street'),(1, 'fourth street');

--@block
SELECT * from rooms

--@block
SELECT * FROM users
INNER JOIN rooms
on rooms.owner_id = users.id;

--@block
SELECT * FROM users
LEFT JOIN rooms
on rooms.owner_id = users.id;

--@block
SELECT users.id as user_id,
    rooms.id as room_id,
    email,
    street
FROM users
INNER JOIN rooms
on rooms.owner_id = users.id;

--@block
CREATE TABLE bookings(
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id), 
    FOREIGN KEY (guest_id) REFERENCES users(id),
    FOREIGN KEY (room_id) REFERENCES rooms(id)

);

--@block Rooms a user has booked
SELECT guest_id, street, check_in
FROM bookings
INNER JOIN rooms on rooms.owner_id = guest_id
WHERE guest_id = 1;

--@block Guest who stayed in a room
SELECT room_id, guest_id, email, bio
FROM bookings
INNER JOIN users on users.id = guest_id
WHERE room_id = 2;


-- --@block 
-- DROP TABLE users;
-- DROP DATABASE airbnb;
