

/*
* ==================================================
*   Create row in ONE table with foreign keys 
*   (ids need to be looked up) in one insert
!   NOTE: NO COMMA BEFORE INSERT!!
* ==================================================
*/
WITH
submittedBy_key AS
    (SELECT "idUser" FROM "User" WHERE "firstName" = 'Fred'),
app_key AS
    (SELECT "idApp" FROM "App" WHERE "appName" = 'Product C')
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage", "severity")
   VALUES ((SELECT "idUser" FROM submittedBy_key), (SELECT "idApp" FROM app_key), 'Submitted', 'Review', "");



/*
* ==================================================
*   Create row in ONE table with existing foreign 
*   keys (already known ids) in one insert
* ==================================================
*/
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage")
   VALUES (5, 4, 'Submitted', 'Review');




/*
* ==================================================
*   Create rows in MULTIPLE tables with foreign keys
*   in one insert
!   NOTE: NO COMMA BEFORE INSERT!!
* ==================================================
*/
WITH
submittedBy_key AS
    (INSERT INTO "User" ("firstName") VALUES ('Brandon') RETURNING "idUser"),
app_key AS
    (INSERT INTO "App" ("appName", "appVersion") VALUES ('Product D', '1.1') RETURNING "idApp")
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage")
   VALUES ((SELECT "idUser" FROM submittedBy_key), (SELECT "idApp" FROM app_key), 'Submitted', 'Review');

-- MORE DATA

/*
* ==================================================
*   Create row in ONE table with foreign keys 
*   (ids need to be looked up) in one insert
!   NOTE: NO COMMA BEFORE INSERT!!
* ==================================================
*/
WITH
submittedBy_key AS
    (SELECT "idUser" FROM "User" WHERE "firstName" = 'Fred'),
app_key AS
    (SELECT "idApp" FROM "App" WHERE "appName" = 'Product C')
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage")
   VALUES ((SELECT "idUser" FROM submittedBy_key), (SELECT "idApp" FROM app_key), 'Submitted', 'Review');



/*
* ==================================================
*   Create row in ONE table with existing foreign 
*   keys (already known ids) in one insert
* ==================================================
*/
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage")
   VALUES (5, 4, 'Submitted', 'Review');


INSERT INTO "App" ()

/*
* ==================================================
*   Create rows in MULTIPLE tables with foreign keys
*   in one insert
!   NOTE: NO COMMA BEFORE INSERT!!
* ==================================================
*/
WITH
submittedBy_key AS
    (INSERT INTO "User" ("firstName") VALUES ('Brandon') RETURNING "idUser"),
app_key AS
    (INSERT INTO "App" ("appName", "appVersion") VALUES ('SolidStructur', '1.1') RETURNING "idApp")
INSERT INTO "Bug" ("userSubmitted", "app", "status", "stage", "severity")
   VALUES ((SELECT "idUser" FROM submittedBy_key), (SELECT "idApp" FROM app_key), 'Submitted', 'Review', 'Critical');





SELECT ("status", "stage", "submitter.firstName", "engineer.firstName")  
FROM "Bug" AS p  
LEFT JOIN "User" AS submitter  
ON "Bug.userSubmitted"="User.idUser" 
LEFT JOIN "User" AS engineer  
ON "Bug.engineerAssigned"="User.idUser"  





SELECT  product_description.name AS name,
        product_description.author AS author,
        product.model AS model,
        `order`.`order_id` AS `order_id`
FROM product_description
INNER JOIN product ON product_description.product_id=product.product_id
INNER JOIN order_product ON order_product.product_id=product.product_id
INNER JOIN `order` ON `order`.order_id=order_product.order_id
WHERE `order`.order_status_id=1


SELECT  "Bug"."status" AS status,
        "Bug"."stage" AS stage,
        "User"."firstName" AS submitter
FROM "Bug"
INNER JOIN "User" ON "Bug"."userSubmitted"="User"."idUser"


SELECT  
        "Bug"."idBug" AS ID,
        "Bug"."status" AS status,
        "Bug"."stage" AS stage,
        "Bug"."userSubmitted" AS stage,
        "User"."firstName" AS submitter
FROM "Bug"
INNER JOIN "User" ON "Bug"."userSubmitted"="User"."idUser"








/*
* ==================================================
*   Works as raw SQL
* ==================================================
*/
SELECT  
        "idBug" AS ID,
        "title" AS title,
        "appRef"."appName" AS app,
        "appRef"."appVersion" AS version,
        "status" AS status,
        "stage" AS stage,
        "userSubmitted" AS submitterID,
        "submitter"."idUser" AS submitterUserID,
        "submitter"."firstName" AS submitterName,
        "engineer"."idUser" AS engineerID,
        "engineer"."firstName" AS engineerName
FROM "Bug"
INNER JOIN "User" submitter ON "Bug"."userSubmitted" = "submitter"."idUser"
INNER JOIN "User" engineer ON "Bug"."engineerAssigned" = "engineer"."idUser"
INNER JOIN "App" appRef ON "Bug"."app" = "appRef"."idApp";




SELECT  
        "idBug" AS ID,
        "title" AS "Bug Title",
        "apptable"."appName" AS "Application",
        "apptable"."appVersion" AS "Version",
        "status" AS "Status",
        "stage" AS "Stage",
        "submitter"."firstName" AS "Submitted By",
        "engineer"."firstName" AS "Assigned To"
FROM "Bug"
INNER JOIN "User" submitter ON "Bug"."userSubmitted" = "submitter"."idUser"
INNER JOIN "User" engineer ON "Bug"."engineerAssigned" = "engineer"."idUser"
INNER JOIN "App" apptable ON "Bug"."app" = "apptable"."idApp";