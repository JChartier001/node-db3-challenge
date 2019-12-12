-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName from Product as p
join  Category as c on p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [order].id, shipper.CompanyName, [order].OrderDate from [order] 
join Shipper on  [order].ShipVia = shipper.id
where [order].OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, od.Quantity from [OrderDetail] as od
join Product as p on od.productId = p.id
join [order] as o on od.OrderId = o.id
where o.id = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select o.id, c.CompanyName, e.LastName from [order] as o
join Customer as c on o.CustomerId = c.id
join Employee as e on o.EmployeeId = e.id;

--Stretch Problems
--In SQL Try Editor at W3Schools.com:
--Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT Categories.CategoryName, COUNT(products.categoryID) AS NumberOfProducts FROM Products
LEFT JOIN Categories
ON Categories.CategoryID=Products.CategoryID
GROUP BY CategoryName;

--Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT OrderDetails.OrderID,COUNT(OrderDetails.ProductID) AS NumberOfItems FROM OrderDetails
LEFT JOIN Orders
ON Orders.OrderID=OrderDetails.OrderID
GROUP BY Orders.OrderID;