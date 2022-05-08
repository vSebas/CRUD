CREATE DATABASE testdb;

CREATE TABLE Customers (
     Id INT NOT NULL AUTO_INCREMENT,
     Name CHAR(80) NOT NULL,
     Phone CHAR(15),
     Address CHAR(50) NOT NULL,
     Email CHAR(50),
     DateOfBirth DATE NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE Users (
     Id INT NOT NULL AUTO_INCREMENT,
     userName CHAR(30) NOT NULL,
     password CHAR(30) NOT NULL,
     name CHAR(80) NOT NULL,
     profile CHAR(15),
     PRIMARY KEY (id)
);

INSERT INTO Customers(Name,Phone,Address,Email,DateOfBirth)
VALUES('Fancisco Corral','8115112233','Calle 12. Monterrey','FcoCorral@hotmail.com','1999-09-14'),
('Ernesto Flores','8115998877','Privada 1. San Pedro','ErnestoF@outlook.com','1996-05-02');

INSERT INTO Users(userName,password,name,profile)
VALUES('admin','admin','Administrator','admin'),
('user','user','Normal User','user');

select * from Customers;
select * from Users;

/*Si sale el siguiente mensaje de error "Client does not support authentication 
protocol requested by server; consider upgrading MySQL client" ejecute las 
siguientes dos instruccones*/

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'itesm2022';

flush privileges;
/*fuente "https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server"*/