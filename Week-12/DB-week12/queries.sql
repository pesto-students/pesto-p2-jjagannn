--Q1. Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- Q2. Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES WHERE CITY="Hyderabad";

-- Q3. Find the details of items ordered by a customer “Mr. Patil”.
SELECT ordinter.ITEM_NUMBER FROM ORDERS ord 
INNER JOIN ORDERSITEMSINTER ordinter
ON ord.ONO = ordinter.ORDER_NUMBER
WHERE ord.CNO = 997;

-- Q4. Find a Warehouse which has maximum stores.
SELECT WID, COUNT(SID) FROM STORES GROUP BY WID ORDER BY 2 DESC LIMIT 1;

-- Q5. Find an item which is ordered for a minimum number of times.
SELECT ITEM_NUMBER, COUNT(ORDER_NUMBER) FROM ORDERSITEMSINTER GROUP BY ITEM_NUMBER ORDER BY 2 LIMIT 1;

-- Q6. Find the detailed orders given by each customer.
SELECT * FROM ORDERS WHERE CNO IN (SELECT CNO FROM CUSTOMER);