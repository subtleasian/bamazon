DROP DATABASE IF EXISTS productsDB;

CREATE DATABASE productsDB;

USE productsDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff1", "department1", 100, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff2", "department1", 50, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff3", "department1", 75, 800);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff4", "department2", 285, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff5", "department2", 310, 70000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff6", "department2", 50, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff7", "department3", 10, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff8", "department3", 1000, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff9", "department3", 800, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuff10", "department4", 650, 10);