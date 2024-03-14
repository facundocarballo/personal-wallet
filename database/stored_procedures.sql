DELIMITER //
CREATE PROCEDURE CreateUser(
	IN name VARCHAR(255),
    IN last_name VARCHAR(255),
    IN email VARCHAR(255),
    IN password VARCHAR(255),
    OUT user_id INT
)
BEGIN
	DECLARE v_user_id INT;
    
    INSERT INTO User(name, last_name, email, password)
    VALUES (name, last_name, email, password);
    
    SELECT LAST_INSERT_ID() INTO user_id;
END //
DELIMITER ;
