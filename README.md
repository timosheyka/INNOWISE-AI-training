# Innowise AI In Development

---

## 1. Web Application: Expense Calculator

**Goal:**  
Develop a web application to calculate key indicators of monthly expenses based on user input.

### Features:
- **Add** new expenses
- **Calculate:**
  - Total expenses
  - Average daily expense
  - Top 3 largest expenses

### Tools:
- CursorAI (for generating HTML/JS code)
- CodePen / JSFiddle (for testing)

### Input Format:
A table of expenses entered by the user:

| Category       | Amount ($) |
|----------------|------------|
| Groceries      | 15,000     |
| Rent           | 40,000     |
| Transportation | 5,000      |
| Entertainment  | 10,000     |
| Communication  | 2,000      |
| Gym            | 3,000      |

### Example Calculations:
- **Total Expenses:** $75,000  
- **Average Daily Expense:** $2,500 (assuming 30 days)  
- **Top 3 Expenses:**  
  1. Rent ($40,000)  
  2. Groceries ($15,000)  
  3. Entertainment ($10,000)

### Expected Output:
Displayed after clicking the **"Calculate"** button:
- Total amount of expenses
- Average daily expense
- Top 3 largest expenses

---

## 2. API Testing: Identifying Defects in Product Data

**Task:**  
Develop automated tests to validate product data from a public API.

### Tools:
- CursorAI / ChatGPT (to generate test scenarios)
- ReqBin (https://reqbin.com) or Postman (for executing API requests)

### API Endpoint:
[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

### Test Objectives:
- Verify HTTP status code is `200 OK`
- Validate each product has:
  - Non-empty `title`
  - Non-negative `price`
  - `rating.rate` not exceeding 5
- Generate a list of products with data defects

---

## 3. SQL Queries: Analyzing a Database Online

**Goal:**  
Write SQL queries to analyze sales data for an online store.

### Tools:
- SQLite Online
- CursorAI / ChatGPT (for generating queries)

### Sample Data Script:
```sql
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
```

### Task:
- Calculate total sales for March 2024
- Identify top-spending customer
- Compute average order value over the past three months
### Expected Results:
- Total sales for March: $27,000
- Top-spending customer: Alice ($20,000)
- Average order value: $6,000
