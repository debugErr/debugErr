/*
* ==================================================
*   Erase and Recreate Database Structure 
*   (AND Reset Auto Counters)
* ==================================================
*/
ALTER SEQUENCE BugPlatform_idBugPlatform_seq RESTART WITH 1
ALTER SEQUENCE EngineeringNote_idNote_seq RESTART WITH 1
ALTER SEQUENCE Bug_idBug_seq RESTART WITH 1
ALTER SEQUENCE Platform_idPlatform_seq RESTART WITH 1
ALTER SEQUENCE App_idApp_seq RESTART WITH 1
ALTER SEQUENCE User_idUser_seq RESTART WITH 1

DROP TABLE IF EXISTS "BugPlatform";
DROP TABLE IF EXISTS "EngineeringNote";
DROP TABLE IF EXISTS "Bug";
DROP TABLE IF EXISTS "Platform";
DROP TABLE IF EXISTS "App";
DROP TABLE IF EXISTS "User";

DROP TYPE IF EXISTS "status";
DROP TYPE IF EXISTS "stage";
DROP TYPE IF EXISTS "severity";
DROP TYPE IF EXISTS "role";

CREATE TYPE status AS ENUM ('Submitted', 'Reviewed', 'Duplicate', 'Reproduced', 'Assigned', 'Resolved');
CREATE TYPE stage AS ENUM ('Review', 'Verified', 'NonVerified', 'Development', 'Testing', 'Released');
CREATE TYPE severity AS ENUM ('Typo', 'Low', 'Serious', 'Critical', 'ShowStopper');
CREATE TYPE role AS ENUM ('EndeUser', 'Admin', 'Engineer');

CREATE TABLE "User" (
  "idUser" SERIAL NOT NULL,
  "firstName" varchar(45),
  "lastName" varchar(45),
  "userName" varchar(45),
  "email" varchar(45),
  "hashedPass" varchar(60),
  "role" role,
  "createdAt" timestamp DEFAULT NOW(),
  "modifiedAt" timestamp,
  PRIMARY KEY ("idUser")
);

CREATE TABLE "App" (
  "idApp" SERIAL NOT NULL,
  "appName" varchar(45),
  "appVersion" varchar(15),
  "createdAt" timestamp DEFAULT NOW(),
  "modifedAt" timestamp,
  PRIMARY KEY ("idApp")
);

CREATE TABLE "Platform" (
  "idPlatform" SERIAL NOT NULL,
  "platformName" varchar(15),
  "platformVersion" varchar(15),
  "createdAt" timestamp DEFAULT NOW(),
  "modifiedAt" timestamp,
  PRIMARY KEY ("idPlatform")
);

CREATE TABLE "Bug" (
  "idBug" SERIAL NOT NULL,
  "userSubmitted" int NOT NULL,
  "engineerAssigned" int,
  "app" int NOT NULL,
  "title" varchar(65),
  "status" status NOT NULL,
  "severity" severity,
  "stage" stage NOT NULL,
  "stepsToRecreate" text,
  "resolutionStatement" text,
  "createdAt" timestamp DEFAULT NOW(),
  "modifiedAt" timestamp,
  PRIMARY KEY ("idBug"),
  CONSTRAINT "FK_Bug.engineerAssigned"
    FOREIGN KEY ("engineerAssigned")
      REFERENCES "User"("idUser"),
  CONSTRAINT "FK_Bug.app"
    FOREIGN KEY ("app")
      REFERENCES "App"("idApp"),
  CONSTRAINT "FK_Bug.userSubmitted"
    FOREIGN KEY ("userSubmitted")
      REFERENCES "User"("idUser")
);

CREATE TABLE "EngineeringNote" (
  "idENote" SERIAL NOT NULL,
  "idUser" int,
  "idBug" int,
  "noteBody" text,
  "noteTitle" varchar(60),
  "createdAt" timestamp DEFAULT NOW(),
  "modifiedAt" timestamp,
  PRIMARY KEY ("idENote"),
  CONSTRAINT "FK_EngineeringNote.idUser"
    FOREIGN KEY ("idUser")
      REFERENCES "User"("idUser"),
  CONSTRAINT "FK_EngineeringNote.idBug"
    FOREIGN KEY ("idBug")
      REFERENCES "Bug"("idBug")
);

CREATE TABLE "BugPlatform" (
  "idBugPlatform" SERIAL NOT NULL,
  "idPlatform" int,
  "idBug" int,
  "createdAt" timestamp DEFAULT NOW(),
  "modifiedAt" timestamp,
  PRIMARY KEY ("idBugPlatform"),
  CONSTRAINT "FK_BugPlatform.idPlatform"
    FOREIGN KEY ("idPlatform")
      REFERENCES "Platform" ( "idPlatform" ),
  CONSTRAINT "FK_BugPlatform.idBug"
    FOREIGN KEY ("idBug")
      REFERENCES "Bug"("idBug")
);




/*
* ==================================================
*   Dummy Table Inserts
* ==================================================
*/
INSERT INTO "User" (
  ,"firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Jimbo'
    );


INSERT INTO "App" (
,"appName"
,"appVersion"
) VALUES (
  
);


INSERT INTO "Platform" (
  ,"platformName"
  ,"platformVersion"
) VALUES (

);


INSERT INTO "Bug" (
  ,"userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title" 
  ,"status" 
  ,"severity" 
  ,"stage" 
  ,"stepsToRecreate" 
  ,"resolutionStatement" 
  ) VALUES (
    
  );


INSERT INTO "EngineeringNote" (
  ,"idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (

);


INSERT INTO "BugPlatform" (
  "idPlatform"
  ,"idBug"
) VALUES (

);




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
