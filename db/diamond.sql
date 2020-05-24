DROP DATABASE IF EXISTS diamond_db;

CREATE DATABASE diamond_db;

USE diamond_db;

CREATE TABLE department (
department_id INT AUTO_INCREMENT NOT NULL,
department VARCHAR(30) NOT NULL,
PRIMARY KEY(department_id)
);

CREATE TABLE role (
role_id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(role_id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id)
);