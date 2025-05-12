CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);

INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');


-- 1 - Query to calculate total sales volume for March 2024
SELECT SUM(amount) AS total_sales_volume
FROM orders
WHERE order_date LIKE '2024-03%';


-- 2 - Find the customer who spent the most overall.
SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- 3 - Calculate the average order value for the last three months
SELECT AVG(amount) AS average_order_value
FROM orders
WHERE order_date >= DATE('2024-01-01') AND order_date <= DATE('2024-03-31');