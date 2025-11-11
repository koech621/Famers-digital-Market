
CREATE TABLE UserAccount (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NULL,
    phone VARCHAR(30) NULL,
    role VARCHAR(50) NOT NULL 
);

CREATE TABLE Farmer (p
    farmer_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NULL,
    location VARCHAR(150) NULL,
    farm_name VARCHAR(150) NULL,
    CONSTRAINT FK_Farmer_User FOREIGN KEY (user_id) REFERENCES UserAccount(user_id)
);

CREATE TABLE Market (
    market_id INT IDENTITY(1,1) PRIMARY KEY,
    market_name VARCHAR(150) NOT NULL,
    county VARCHAR(100) NULL,
    contact_info VARCHAR(100) NULL
);


CREATE TABLE Product (
    product_id INT IDENTITY(1,1) PRIMARY KEY,
    farmer_id INT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    category VARCHAR(100) NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    description VARCHAR(MAX) NULL,
    CONSTRAINT FK_Product_Farmer FOREIGN KEY (farmer_id) REFERENCES Farmer(farmer_id)
);


CREATE TABLE OrderTable (
    order_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,       
    product_id INT NOT NULL,
    market_id INT NOT NULL,
    quantity INT NOT NULL,
    total_amount DECIMAL(12,2) NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    CONSTRAINT FK_Order_User FOREIGN KEY (user_id) REFERENCES UserAccount(user_id),
    CONSTRAINT FK_Order_Product FOREIGN KEY (product_id) REFERENCES Product(product_id),
    CONSTRAINT FK_Order_Market FOREIGN KEY (market_id) REFERENCES Market(market_id)
);


CREATE TABLE Payment (
    payment_id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method VARCHAR(50) NULL,
    reference VARCHAR(200) NULL,
    payment_date DATE NULL,
    payment_status VARCHAR(50) NULL,
    CONSTRAINT FK_Payment_Order FOREIGN KEY (order_id) REFERENCES OrderTable(order_id)
);

CREATE TABLE Logistics (
    logistics_id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT NOT NULL,
    delivery_agent_id INT NOT NULL, 
    transport_mode VARCHAR(50) NULL,
    pickup_location VARCHAR(255) NULL,
    dropoff_location VARCHAR(255) NULL,
    delivered BIT NULL,
    delivery_date DATE NULL,
    CONSTRAINT FK_Logistics_Order FOREIGN KEY (order_id) REFERENCES OrderTable(order_id),
    CONSTRAINT FK_Logistics_Agent FOREIGN KEY (delivery_agent_id) REFERENCES UserAccount(user_id)
);


INSERT INTO UserAccount (full_name, email, phone, role) VALUES
('Amina Hassan', 'amina.hassan@example.co.ke', '0711000001', 'Customer'),
('Joseph Kamau', 'joseph.kamau@example.co.ke', '0711000002', 'Customer'),
('Fatuma Odhiambo', 'fatuma.odhiambo@example.co.ke', '0711000003', 'Customer'),
('Daniel Otieno', 'daniel.otieno@example.co.ke', '0711000004', 'Customer'),
('Winnie Njeri', 'winnie.njeri@example.co.ke', '0711000005', 'Customer'),
('Samuel Mwangi', 'samuel.mwangi@example.co.ke', '0711000006', 'Customer'),
('Lilian Karanja', 'lilian.karanja@example.co.ke', '0711000007', 'Customer'),

-- Farmer users (8..14)
('Grace Wanjiku', 'grace.wanjiku@farmmail.co.ke', '0722000001', 'Farmer'),
('Peter Muchiri', 'peter.muchiri@farmmail.co.ke', '0722000002', 'Farmer'),
('Esther Chebet', 'esther.chebet@farmmail.co.ke', '0722000003', 'Farmer'),
('Michael Odhiambo', 'michael.odhiambo@farmmail.co.ke', '0722000004', 'Farmer'),
('Loise Akinyi', 'loise.akinyi@farmmail.co.ke', '0722000005', 'Farmer'),
('Kevin Ouma', 'kevin.ouma@farmmail.co.ke', '0722000006', 'Farmer'),
('Josephine Njeri', 'josephine.njeri@farmmail.co.ke', '0722000007', 'Farmer'),

-- Logistics agents (15..17)
('Peter Mwangi', 'peter.mwangi@logistics.co.ke', '0733000001', 'Logistics'),
('Mercy Wairimu', 'mercy.wairimu@logistics.co.ke', '0733000002', 'Logistics'),
('John Kibet', 'john.kibet@logistics.co.ke', '0733000003', 'Logistics'),

-- Admin (18)
('Admin User', 'admin@agrolink.co.ke', '0700000000', 'Admin');

INSERT INTO Farmer (user_id, full_name, phone, location, farm_name) VALUES
(8, 'Grace Wanjiku', '0722000001', 'Nyeri', 'Green Harvest Farm'),
(9, 'Peter Muchiri', '0722000002', 'Nakuru', 'Mogotio Valley Farm'),
(10, 'Esther Chebet', '0722000003', 'Uasin Gishu', 'Highland Vegs'),
(11, 'Michael Odhiambo', '0722000004', 'Kisumu', 'Lakeside Produce'),
(12, 'Loise Akinyi', '0722000005', 'Kisii', 'Akinyi Farms'),
(13, 'Kevin Ouma', '0722000006', 'Meru', 'Meru Organic'),
(14, 'Josephine Njeri', '0722000007', 'Machakos', 'Sunrise Farm');


INSERT INTO Market (market_name, county, contact_info) VALUES
('Karatina Market', 'Nyeri', '0712456789'),
('Gikomba Market', 'Nairobi', '0721987001'),
('Kisumu Central Market', 'Kisumu', '0733007002'),
('Eldoret Market', 'Uasin Gishu', '0713007003'),
('Kagumo Market', 'Kirinyaga', '0713007004'),
('Mumias Market', 'Kakamega', '0713007005'),
('Meru Market', 'Meru', '0713007006');


INSERT INTO Product (farmer_id, product_name, category, price, stock_quantity, description) VALUES
(1, 'Tomatoes (20kg crate)', 'Vegetables', 2400.00, 100, 'Fresh tomatoes from Green Harvest Farm, Nyeri'),
(2, 'Irish Potatoes (90kg bag)', 'Tubers', 5000.00, 50, 'Red potatoes from Mogotio Valley Farm, Nakuru'),
(3, 'Kales (Sukuma Wiki) - bundle', 'Vegetables', 40.00, 800, 'Organic sukuma wiki bundles from Highland Vegs'),
(4, 'Onions (50kg bag)', 'Vegetables', 4200.00, 60, 'Red onions, Lakeside Produce, Kisumu'),
(5, 'Avocados (tray 20)', 'Fruits', 3000.00, 200, 'Hass avocados from Akinyi Farms, Kisii'),
(6, 'Maize (90kg bag)', 'Grains', 4200.00, 75, 'Dried maize from Meru Organic'),
(7, 'Green Beans (20kg crate)', 'Vegetables', 3200.00, 120, 'Fresh beans from Sunrise Farm, Machakos');


INSERT INTO Product (farmer_id, product_name, category, price, stock_quantity, description) VALUES
(1, 'Cherry Tomatoes (box)', 'Vegetables', 600.00, 250, 'Small ripe cherry tomatoes'),
(5, 'Passion Fruits (tray 30)', 'Fruits', 1500.00, 180, 'Sundried-manor passion fruits');

INSERT INTO OrderTable (user_id, product_id, market_id, quantity, total_amount, order_date, status) VALUES
-- Order 1: Amina orders Tomatoes -> Karatina
(1, 1, 1, 2, 2 * 2400.00, CAST(GETDATE()-10 AS DATE), 'Delivered'),
-- Order 2: Joseph orders Potatoes -> Eldoret
(2, 2, 4, 1, 1 * 5000.00, CAST(GETDATE()-8 AS DATE), 'Shipped'),
-- Order 3: Fatuma orders Kales -> Gikomba
(3, 3, 2, 20, 20 * 40.00, CAST(GETDATE()-7 AS DATE), 'Delivered'),
-- Order 4: Daniel orders Onions -> Kisumu Central
(4, 4, 3, 1, 1 * 4200.00, CAST(GETDATE()-5 AS DATE), 'Pending'),
-- Order 5: Winnie orders Avocados -> Gikomba
(5, 5, 2, 3, 3 * 3000.00, CAST(GETDATE()-3 AS DATE), 'Confirmed'),
-- Order 6: Samuel orders Maize -> Meru Market
(6, 6, 7, 1, 1 * 4200.00, CAST(GETDATE()-2 AS DATE), 'Cancelled'),
-- Order 7: Lilian orders Green Beans -> Mumias Market
(7, 7, 6, 1, 1 * 3200.00, CAST(GETDATE()-1 AS DATE), 'Shipped'),
-- Order 8: Amina orders Cherry Tomatoes -> Karatina (second order from same customer)
(1, 8, 1, 4, 4 * 600.00, CAST(GETDATE()-1 AS DATE), 'Pending'),
-- Order 9: Joseph orders Passion Fruits -> Meru Market
(2, 9, 7, 2, 2 * 1500.00, CAST(GETDATE()-4 AS DATE), 'Delivered');


-- 3.6 Payments: one payment per order (9 payments). Mix of statuses: Completed, Pending, Failed
INSERT INTO Payment (order_id, payment_method, reference, payment_date, payment_status) VALUES
-- For order_id mapping: earlier inserts will have order_ids 1..9 in order
(1, 'Cash', 'CASH-INV-0001', CAST(GETDATE()-9 AS DATE), 'Completed'),
(2, 'M-Pesa', 'MPESA TXN ABC12345', CAST(GETDATE()-7 AS DATE), 'Completed'),
(3, 'Card', 'Visa **** 2345', CAST(GETDATE()-6 AS DATE), 'Completed'),
(4, 'M-Pesa', 'MPESA TXN DEF67890', NULL, 'Pending'),
(5, 'Card', 'Mastercard **** 9876', CAST(GETDATE()-2 AS DATE), 'Completed'),
(6, 'M-Pesa', 'MPESA TXN GHI11122', CAST(GETDATE()-1 AS DATE), 'Failed'),
(7, 'Cash', 'CASH-INV-0007', CAST(GETDATE()-1 AS DATE), 'Completed'),
(8, 'M-Pesa', 'MPESA TXN JKL33344', NULL, 'Pending'),
(9, 'Card', 'Visa **** 5566', CAST(GETDATE()-3 AS DATE), 'Completed');
GO

-- 3.7 Logistics: each order has an associated logistics row (use delivery_agent_id = 15..17)
-- We'll map:
--  order 1 -> agent 15 (Peter Mwangi)
--  order 2 -> agent 16 (Mercy Wairimu)
--  order 3 -> agent 17 (John Kibet)
--  order 4 -> 15
--  order 5 -> 16
--  order 6 -> 17
--  order 7 -> 15
--  order 8 -> 16
--  order 9 -> 17
INSERT INTO Logistics (order_id, delivery_agent_id, transport_mode, pickup_location, dropoff_location, delivered, delivery_date) VALUES
(1, 15, 'Motorbike', 'Green Harvest Farm, Nyeri', 'Karatina Market', 1, CAST(GETDATE()-9 AS DATE)),
(2, 16, 'Pickup', 'Mogotio Valley Farm, Nakuru', 'Eldoret Market', 1, CAST(GETDATE()-6 AS DATE)),
(3, 17, 'Motorbike', 'Highland Vegs, Uasin Gishu', 'Gikomba Market, Nairobi', 1, CAST(GETDATE()-5 AS DATE)),
(4, 15, 'Pickup', 'Lakeside Produce, Kisumu', 'Kisumu Central Market', 0, NULL),
(5, 16, 'Motorbike', 'Akinyi Farms, Kisii', 'Gikomba Market, Nairobi', 0, NULL),
(6, 17, 'Truck', 'Meru Organic, Meru', 'Meru Market', 0, NULL),
(7, 15, 'Motorbike', 'Sunrise Farm, Machakos', 'Mumias Market, Kakamega', 1, CAST(GETDATE()-1 AS DATE)),
(8, 16, 'Motorbike', 'Green Harvest Farm, Nyeri', 'Karatina Market', 0, NULL),
(9, 17, 'Pickup', 'Akinyi Farms, Kisii', 'Meru Market', 1, CAST(GETDATE()-2 AS DATE));
GO

-- 4) Quick verification queries (optional)
-- Uncomment to check sample rows

-- SELECT * FROM UserAccount;
-- SELECT * FROM Farmer;
-- SELECT * FROM Market;
-- SELECT * FROM Product;
-- SELECT * FROM OrderTable;
-- SELECT * FROM Payment;
-- SELECT * FROM Logistics;

-- 5) Extra: Helpful view to see the story of orders joining across tables
IF OBJECT_ID('dbo.vw_OrderStory', 'V') IS NOT NULL
    DROP VIEW dbo.vw_OrderStory;
    GO
CREATE VIEW dbo.vw_OrderStory AS
SELECT
    o.order_id,
    o.order_date,
    cu.user_id AS customer_user_id,
    cu.full_name AS customer_name,
    p.product_id,
    p.product_name,
    f.farmer_id,
    f.farm_name,
    m.market_id,
    m.market_name,
    o.quantity,
    o.total_amount,
    o.status AS order_status,
    pay.payment_id,
    pay.payment_method,
    pay.payment_status,
    lg.logistics_id,
    la.user_id AS delivery_agent_user_id,
    la.full_name AS delivery_agent_name,
    lg.transport_mode,
    lg.pickup_location,
    lg.dropoff_location,
    lg.delivered,
    lg.delivery_date
FROM OrderTable o
JOIN UserAccount cu ON o.user_id = cu.user_id
JOIN Product p ON o.product_id = p.product_id
JOIN Farmer f ON p.farmer_id = f.farmer_id
JOIN Market m ON o.market_id = m.market_id
LEFT JOIN Payment pay ON pay.order_id = o.order_id
LEFT JOIN Logistics lg ON lg.order_id = o.order_id
LEFT JOIN UserAccount la ON la.user_id = lg.delivery_agent_id;
