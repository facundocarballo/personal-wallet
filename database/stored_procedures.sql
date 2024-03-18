DELIMITER //
CREATE PROCEDURE CreateUser(
	IN name VARCHAR(255),
    IN last_name VARCHAR(255),
    IN email VARCHAR(255),
    IN password VARCHAR(255),
    OUT user_id INT
)
BEGIN    
    INSERT INTO User(name, last_name, email, password)
    VALUES (name, last_name, email, password);
    
    SELECT LAST_INSERT_ID() INTO user_id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE GetUser(
	IN id INT
)
BEGIN
	SELECT * FROM User WHERE User.id = id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE CreateCurrency(
	IN name VARCHAR(255),
    IN symbol VARCHAR(3),
    IN usd_value INT,
    IN user_id INT,
    OUT currency_id INT
)
BEGIN    
    INSERT INTO Currency(name, symbol, usd_value, user_id)
    VALUES (name, symbol, usd_value, user_id);
    
    SELECT LAST_INSERT_ID() INTO currency_id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE GetCurrencies(
	IN user_id INT
)
BEGIN
	SELECT * FROM Currency WHERE Currency.user_id = user_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateTag(
	IN name VARCHAR(255),
    IN percentage FLOAT,
    IN user_id INT,
    OUT tag_id INT
)
BEGIN    
    INSERT INTO Tag(name, percentage, user_id)
    VALUES (name, percentage, user_id);
    
    SELECT LAST_INSERT_ID() INTO tag_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetTags(
    IN user_id INT
)
BEGIN    
    SELECT * FROM Tag WHERE Tag.user_id = user_id;
END //
DELIMITER ;