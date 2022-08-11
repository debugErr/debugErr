/*
* ==================================================
*   Erase and Recreate Database Structure 
*   (AND Reset Auto Counters)
* ==================================================
*/
ALTER SEQUENCE IF EXISTS BugPlatform_idBugPlatform_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS EngineeringNote_idNote_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS Bug_idBug_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS Platform_idPlatform_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS App_idApp_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS User_idUser_seq RESTART WITH 1;

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
CREATE TYPE role AS ENUM ('EndUser', 'Admin', 'Engineer');

CREATE TABLE "User" (
  "idUser" SERIAL NOT NULL,
  "firstName" varchar(45),
  "lastName" varchar(45),
  "userName" varchar(45) UNIQUE,
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



-- / FROM ELPHANT INSERTS 
INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Jared'
    , 'Veltsos'
    , 'JVel51'
    , 'JV51@gmail.com'
    , 'password123'
    , 'Admin'
    );

INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Moonhee'
    , 'Hur'
    , 'MH51'
    , 'MH51@gmail.com'
    , 'password321'
    , 'Admin'
    );


INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Jim'
    , 'White'
    , 'JW51'
    , 'JW51@gmail.com'
    , '123'
    , 'Admin'
    );


INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Brandon'
    , 'Brighi'
    , 'BB51'
    , 'BB51@gmail.com'
    , 'passwordpassword'
    , 'Admin'
    );

INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Barney'
    , 'Rubble'
    , 'BB51'
    , 'BB51@gmail.com'
    , 'testpassword'
    , 'Engineer'
    );

INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Adam'
    , 'Johnson'
    , 'AJ51'
    , 'AJ51@gmail.com'
    , 'newpass'
    , 'Engineer'
    );

INSERT INTO "User" (
  "firstName"
  ,"lastName"
  ,"userName"
  ,"email"
  ,"hashedPass"
  ,"role"
  ) VALUES (
    'Fred'
    , 'Flintstone'
    , 'FF51'
    , 'FF51@gmail.com'
    , 'pw321'
    , 'EndUser'
    );

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'Galumpher'
  , '1.25'
);

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'Solid Structure'
  , '1.0 BETA'
);

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'SvelteStorm'
  , '4.0'
);

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'Bester Reads'
  , '1.08'
);

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'Fast Form'
  , '1.7'
);

INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'Betterer Reads'
  , '99.8'
);

INSERT INTO "Bug" (
  "userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title"
  ,"status"  
  ,"severity"
  ,"stage" 
  ,"stepsToRecreate"
  ) VALUES (
    3,
    1,
    2,
    'Query Mixup',
    'Assigned',
    'Typo',
    'Testing',
    'Click on enter button on UI and then reload the page'
  );


  INSERT INTO "Bug" (
  "userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title"
  ,"status"  
  ,"severity"
  ,"stage" 
  ,"stepsToRecreate"
  ) VALUES (
    6,
    5,
    3,
    'Server crashing on post request',
    'Reviewed',
    'Critical',
    'Development',
    'Make a post request with addBugg middleware, wait and watch it crash'
  );


INSERT INTO "Bug" (
  "userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title"
  ,"status"  
  ,"severity"
  ,"stage" 
  ,"stepsToRecreate"
  ) VALUES (
    4,
    3,
    4,
    'numbers concatenating',
    'Reproduced',
    'ShowStopper',
    'Development',
    'Check terminal for console.log labled Adding 1&10 and the log returns the string 110 and not 11'
  );

  INSERT INTO "Bug" (
  "userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title"
  ,"status"  
  ,"severity"
  ,"stage" 
  ,"stepsToRecreate"
  ) VALUES (
    2,
    1,
    2,
    'numbers concatenating',
    'Reproduced',
    'Typo',
    'Development',
    'Check terminal for console.log labled Adding 1&10 and the log returns the string 110 and not 11'
  );

  INSERT INTO "Bug" (
  "userSubmitted"
  ,"engineerAssigned" 
  ,"app" 
  ,"title"
  ,"status"  
  ,"severity"
  ,"stage" 
  ,"stepsToRecreate"
  ) VALUES (
    3,
    5,
    1,
    'numbers concatenating',
    'Reproduced',
    'Typo',
    'Development',
    'Check terminal for console.log labled Adding 1&10 and the log returns the string 110 and not 11'
  );

  INSERT INTO "App" (
"appName"
,"appVersion"
) VALUES (
  'SvelteStorm'
  , '8.3'
);

INSERT INTO "Platform" (
  "platformName"
  ,"platformVersion"
) VALUES (
   'Windows',
   11
);

INSERT INTO "Platform" (
  "platformName"
  ,"platformVersion"
) VALUES (
   'MacOS Monterey',
   '12.5'
);

INSERT INTO "Platform" (
  "platformName"
  ,"platformVersion"
) VALUES (
   'Fire Fox',
   '7'
);

INSERT INTO "Platform" (
  "platformName"
  ,"platformVersion"
) VALUES (
   'Google Chrome',
   '103.15.86'
);

INSERT INTO "EngineeringNote" (
  "idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (
   4,
   1,
   'Bug has been assigned to an engineer',
   'Bug #1 Note #1'
);
INSERT INTO "EngineeringNote" (
  "idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (
   5,
   2,
   'Bug has been assigned to an engineer',
   'Bug #2 Note #1'
);

INSERT INTO "EngineeringNote" (
  "idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (
   2,
   3,
   'Bug needs to be reproduced before it can get verified',
   'Bug #3 Note #1'
);

INSERT INTO "EngineeringNote" (
  "idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (
   1,
   3,
   'Bug needs to be reproduced before it can get verified',
   'Bug #3 Note #2'
);

INSERT INTO "EngineeringNote" (
  "idUser"
  ,"idBug"
  ,"noteBody"
  ,"noteTitle"
) VALUES (
   3,
   3,
   'Bug has finished verification stage and can be assigned',
   'Bug #3 note #3'
);

INSERT INTO "BugPlatform" (
  "idPlatform"
  ,"idBug"
) VALUES (
2, 
3
);

INSERT INTO "BugPlatform" (
  "idPlatform"
  ,"idBug"
) VALUES (
3, 
1
);

INSERT INTO "BugPlatform" (
  "idPlatform"
  ,"idBug"
) VALUES (
2, 
1
);

INSERT INTO "BugPlatform" (
  "idPlatform"
  ,"idBug"
) VALUES (
1, 
2
);