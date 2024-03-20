CREATE DATABASE PersonalWallet;
USE PersonalWallet;

CREATE TABLE User (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Currency (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    symbol VARCHAR(255) NOT NULL,
    usd_value FLOAT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) references User(id)
);

CREATE TABLE Account (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    currency_id INT NOT NULL,
    FOREIGN KEY (currency_id) references Currency(id)
);

CREATE TABLE Category (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE Tag (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    percentage FLOAT NOT NULL,
    user_id INT NOT NULL
);

CREATE TABLE Income (
	id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    category_id INT NOT NULL,
    amount FLOAT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES Account(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Expense (
	id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    category_id INT NOT NULL,
    tag_id INT NOT NULL,
    amount FLOAT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES Account(id),
    FOREIGN KEY (category_id) REFERENCES Category(id),
    FOREIGN KEY (tag_id) REFERENCES Tag(id)
);