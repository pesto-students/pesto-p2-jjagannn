CREATE DATABASE WareHouse;
USE WareHouse;

CREATE TABLE CITIES(CITY CHAR(20), STATE CHAR(20), PRIMARY KEY (CITY));
CREATE TABLE WAREHOUSES(WID INTEGER,WNAME CHAR(30),LOCATION CHAR(20), CITY CHAR(20),EXTRACONTEXT json, PRIMARY KEY (WID), FOREIGN KEY (CITY) REFERENCES CITIES(CITY));
CREATE TABLE STORES(SID INTEGER,STORE_NAME CHAR(20), LOCATION_CITY CHAR(20), WID INTEGER,primary key (SID), FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID));
CREATE TABLE CUSTOMER(CNO INTEGER, CNAME CHAR(50),ADDR VARCHAR(50),CU_CITY CHAR(20), PRIMARY KEY (CNO));
CREATE TABLE ORDERS(ONO INT,ODATE DATE, CNO INTEGER, PRIMARY KEY (ONO), FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO));
CREATE TABLE ITEMS(ITEMNO INTEGER,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2),COST DECIMAL(5,2), PRIMARY KEY (ITEMNO));
CREATE TABLE ORDERSITEMSINTER(ORDER_NUMBER INT, ITEM_NUMBER INTEGER, primary key(ORDER_NUMBER,ITEM_NUMBER), constraint FOREIGN KEY (ORDER_NUMBER) REFERENCES ORDERS(ONO),constraint FOREIGN KEY (ITEM_NUMBER) REFERENCES ITEMS(ITEMNO));
CREATE TABLE STORESITEMSINTER(STORE_ID integer, ITEM_NUMBER integer,primary key(STORE_ID,ITEM_NUMBER), constraint foreign key (STORE_ID) references STORES(SID), constraint foreign key (ITEM_NUMBER) references ITEMS(ITEMNO));

-- INSERT INTO CITIES (CITY, STATE) VALUES ('Chennai', 'Tamilnadu');
-- INSERT INTO CITIES (CITY, STATE) VALUES ('Vellore', 'Tamilnadu');
-- INSERT INTO CITIES (CITY, STATE) VALUES ('Kochi', 'Kerala');
-- INSERT INTO CITIES (CITY, STATE) VALUES ('Bengaluru', 'Karnataka');
-- INSERT INTO CITIES (CITY, STATE) VALUES ('Hyderabad', 'Telangana');
-- INSERT INTO WAREHOUSES(WID, WNAME, LOCATION, CITY, EXTRACONTEXT) VALUES(001, "YardTN01", "1st street, vellore", "Vellore", '{"test":"warehouse data for 01"}');
-- INSERT INTO WAREHOUSES(WID, WNAME, LOCATION, CITY, EXTRACONTEXT) VALUES(002, "YardTN02", "2nd street, chennai", "Chennai", '{"test":"warehouse data for 02"}');
-- INSERT INTO WAREHOUSES(WID, WNAME, LOCATION, CITY, EXTRACONTEXT) VALUES(003, "YardTN03", "3rd street, vellore", "Hyderabad", '{"test":"warehouse data for 03"}');
-- INSERT INTO WAREHOUSES(WID, WNAME, LOCATION, CITY, EXTRACONTEXT) VALUES(004, "YardTN04", "4th street, vellore", "Kochi", '{"test":"warehouse data for 04"}');
-- INSERT INTO WAREHOUSES(WID, WNAME, LOCATION, CITY, EXTRACONTEXT) VALUES(005, "YardTN05", "5th street, vellore", "Bengaluru", '{"test":"warehouse data for 05"}');
-- INSERT INTO STORES(SID,STORE_NAME, LOCATION_CITY, WID) VALUES(111, "Woolworths", "Chennai", 002);
-- INSERT INTO STORES(SID,STORE_NAME, LOCATION_CITY, WID) VALUES(112, "Anugraha", "Vellore", 001);
-- INSERT INTO STORES(SID,STORE_NAME, LOCATION_CITY, WID) VALUES(113, "MoreSupers", "Hyderabad", 003);
-- INSERT INTO STORES(SID,STORE_NAME, LOCATION_CITY, WID) VALUES(114, "Spencers", "Kochi", 004);
-- INSERT INTO STORES(SID,STORE_NAME, LOCATION_CITY, WID) VALUES(115, "GoldsSupers", "Bengaluru", 005);
-- INSERT INTO CUSTOMER(CNO, CNAME,ADDR,CU_CITY) VALUES(995, "Jason", "4th street, mintstreet", "Mumbai");
-- INSERT INTO CUSTOMER(CNO, CNAME,ADDR,CU_CITY) VALUES(996, "John", "5th street, wintstreet", "Vishakapatnam");
-- INSERT INTO CUSTOMER(CNO, CNAME,ADDR,CU_CITY) VALUES(997, "Brad", "6th street, pintstreet", "Goa");
-- INSERT INTO CUSTOMER(CNO, CNAME,ADDR,CU_CITY) VALUES(998, "Leonardo", "7th street, qintstreet", "Pondicherry");
-- INSERT INTO CUSTOMER(CNO, CNAME,ADDR,CU_CITY) VALUES(999, "Samuel", "8th street, zintstreet", "Patna");
-- INSERT INTO ORDERS(ONO,ODATE,CNO) VALUES(11,"2022-06-15", 997);
-- INSERT INTO ORDERS(ONO,ODATE,CNO) VALUES(12,"2022-05-16", 998);
-- INSERT INTO ORDERS(ONO,ODATE,CNO) VALUES(13,"2022-06-21", 997);
-- INSERT INTO ORDERS(ONO,ODATE,CNO) VALUES(14,"2022-01-05", 999);
-- INSERT INTO ORDERS(ONO,ODATE,CNO) VALUES(15,"2022-06-15", 995);
-- INSERT INTO ITEMS(ITEMNO,DESCRIPTION,WEIGHT,COST) VALUES(1,"Meat cut slices", 2.50, 750.00);
-- INSERT INTO ITEMS(ITEMNO,DESCRIPTION,WEIGHT,COST) VALUES(2,"Rice broken", 12.00, 300.00);
-- INSERT INTO ITEMS(ITEMNO,DESCRIPTION,WEIGHT,COST) VALUES(3,"Goat cut slices", 2.00, 600.00);
-- INSERT INTO ITEMS(ITEMNO,DESCRIPTION,WEIGHT,COST) VALUES(4,"Veggies cut", 1.50, 50.00);
-- INSERT INTO ITEMS(ITEMNO,DESCRIPTION,WEIGHT,COST) VALUES(5,"Milk powder", 1.00, 150.00);