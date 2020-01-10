DROP DATABASE IF EXISTS great_bay;

CREATE DATABASE great_bay;

USE great_bay;

CREATE TABLE post_item (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE item_bids (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT(10) NOT NULL,
  bidding_price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO post_item (item, price) values ('Laptop', 800.99);
INSERT INTO item_bids (item_id, bidding_price) values (1, 900.00);