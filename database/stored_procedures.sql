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

DELIMITER //
CREATE PROCEDURE CreateCategory(
	IN name VARCHAR(255),
    IN description VARCHAR(255),
    OUT category_id INT
)
BEGIN    
    INSERT INTO Category(name, description)
    VALUES (name, description);
    
    SELECT LAST_INSERT_ID() INTO category_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetCategories()
BEGIN    
    SELECT * FROM Category;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateAccount(
	IN name VARCHAR(255),
    IN currency_id INT,
    OUT account_id INT
)
BEGIN    
    INSERT INTO Account(name, currency_id)
    VALUES (name, currency_id);
    
    SELECT LAST_INSERT_ID() INTO account_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetAccounts(
	IN user_id INT
)
BEGIN    
    SELECT * FROM Account WHERE Account.currency_id IN (
		SELECT id FROM Currency WHERE Currency.user_id = user_id
    );
END //
DELIMITER ;

-- 20-03-2024 

DELIMITER //
CREATE PROCEDURE CreateIncome(
	IN account_id INT,
    IN category_id INT,
    IN amount FLOAT,
    OUT income_id INT
)
BEGIN    
    INSERT INTO Income(account_id, category_id, amount)
    VALUES (account_id, category_id, amount);
    
    SELECT LAST_INSERT_ID() INTO income_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetIncomes(
	IN user_id INT
)
BEGIN    
    SELECT * FROM Income WHERE Income.account_id IN (
		SELECT id FROM Account WHERE Account.currency_id IN (
			SELECT id FROM Currency WHERE Currency.user_id = user_id
        )
    );
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateExpense(
	IN account_id INT,
    IN category_id INT,
    IN tag_id INT,
    IN amount FLOAT,
    OUT expense_id INT
)
BEGIN    
    INSERT INTO Transaction(account_id, category_id, tag_id, amount)
    VALUES (account_id, category_id, tag_id, amount);
    
    SELECT LAST_INSERT_ID() INTO expense_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetExpenses(
	IN user_id INT
)
BEGIN    
    SELECT * FROM Income WHERE Income.tag_id IN (
		SELECT id FROM Tag WHERE Tag.user_id = user_id
    );
END //
DELIMITER ;
