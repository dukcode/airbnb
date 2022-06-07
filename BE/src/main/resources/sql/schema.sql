SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id       BIGINT NOT NULL AUTO_INCREMENT,
    email         VARCHAR(255),
    github_id     VARCHAR(255),
    name          VARCHAR(255),
    profile_image VARCHAR(255),
    PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS room;
CREATE TABLE room
(
    room_id               BIGINT NOT NULL AUTO_INCREMENT,
    description           VARCHAR(800),
    image_url             VARCHAR(255),
    latitude              DOUBLE PRECISION,
    longitude             DOUBLE PRECISION,
    name                  VARCHAR(255),
    count                 INTEGER,
    rate                  DOUBLE PRECISION,
    cleaning_fee          INTEGER,
    room_charge           INTEGER,
    weekly_discount_ratio DOUBLE PRECISION,
    max_num_of_guests     INTEGER,
    num_of_baths          INTEGER,
    num_of_bedrooms       INTEGER,
    num_of_beds           INTEGER,
    room_type             VARCHAR(255),
    space_type            VARCHAR(255),
    host_id               BIGINT,
    PRIMARY KEY (room_id),
    FOREIGN KEY (host_id) REFERENCES users (user_id)
);

DROP TABLE IF EXISTS amenity;

CREATE TABLE amenity
(
    amenity_id BIGINT NOT NULL AUTO_INCREMENT,
    name       VARCHAR(255),
    PRIMARY KEY (amenity_id)
);

DROP TABLE IF EXISTS booking;

CREATE TABLE booking
(
    booking_id      BIGINT NOT NULL AUTO_INCREMENT,
    num_of_adults   INTEGER,
    num_of_children INTEGER,
    num_of_infants  INTEGER,
    status          VARCHAR(255),
    check_in_date   DATE,
    check_out_date  DATE,
    room_id         BIGINT,
    user_id         BIGINT,
    PRIMARY KEY (booking_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

DROP TABLE IF EXISTS review;

CREATE TABLE review
(
    review_id BIGINT NOT NULL AUTO_INCREMENT,
    content   VARCHAR(255),
    rate      INTEGER,
    room_id   BIGINT,
    user_id   BIGINT,
    PRIMARY KEY (review_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

DROP TABLE IF EXISTS room_amenity;

CREATE TABLE room_amenity
(
    room_amenity_id BIGINT NOT NULL AUTO_INCREMENT,
    amenity_id      BIGINT,
    room_id         BIGINT,
    PRIMARY KEY (room_amenity_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

DROP TABLE IF EXISTS room_image;

CREATE TABLE room_image
(
    image_id BIGINT NOT NULL AUTO_INCREMENT,
    sequence INTEGER,
    url      VARCHAR(255),
    room_id  BIGINT,
    PRIMARY KEY (image_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id)
);

DROP TABLE IF EXISTS wish;

CREATE TABLE wish
(
    wish_id BIGINT NOT NULL AUTO_INCREMENT,
    room_id BIGINT,
    user_id BIGINT,
    PRIMARY KEY (wish_id),
    FOREIGN KEY (room_id) REFERENCES room (room_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

SET FOREIGN_KEY_CHECKS = 1;
