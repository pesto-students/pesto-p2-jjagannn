--Q1. Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- Q2. Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES WHERE CITY="Hyderabad";

-- Q3. Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM ITEMS WHERE ITEMNO IN (SELECT ITEM_NUMBER FROM ORDERSITEMSINTER WHERE ORDER_NUMBER IN (SELECT ONO FROM ORDERS WHERE CNO=997));

-- Q4. Find a Warehouse which has maximum stores.

-- Q5. Find an item which is ordered for a minimum number of times.

-- Q6. Find the detailed orders given by each customer.