const LoginService = {
  getAllBugs(db) {
    return db.select('*').from('Bug');
  },

  verifyCradentials(db, userName) {
    return db.raw(`
        SELECT  
          "idUser" AS ID,
          "userName" AS "User Name",
          "hashedPass",
          "firstName" AS "First Name",
          "lastName" AS "Last Name",
          "role" AS "Role"
        FROM "User"
        WHERE "userName" = '${userName}'
      `);
  },

  //create new Bug

  getSingleBug(db, id) {
    return db.raw(
      `
  SELECT 
    "idBug" as ID,
    "title" as Title,
    "apptable"."appName"  as "Application",
    "apptable"."appVersion"  as "Version",
    "status" as "Status",
    "stage" as "Stage",
    "severity" as "Severity",
    "stepsToRecreate" as "Steps To Recreate",
    "resolutionStatement" as "Resolution Statement",
    "submitter"."firstName" AS "Submitted By",
    "engineer"."firstName" AS "Assigned To"
  FROM "Bug"
  INNER JOIN "User" submitter ON "Bug"."userSubmitted" = "submitter"."idUser"
  INNER JOIN "User" engineer ON "Bug"."engineerAssigned" = "engineer"."idUser"
  INNER JOIN "App" apptable ON "Bug"."app" = "apptable"."idApp"
  WHERE "idBug" = ${id}
`
    );
  },

  getBugENotes(db, id) {
    return db.raw(
      `SELECT
        "idENote" AS ID,
        "noteBody" AS "Notes",
        "noteTitle" AS "Note Title",
        "submitter"."firstName" AS "Submitted By",
        "bugnote"."title" AS "Bug Title",
        "bugnote"."idBug" AS "Bug ID"
        FROM "EngineeringNote"
        INNER JOIN "Bug" bugnote ON "EngineeringNote"."idBug" = "bugnote"."idBug"
        INNER JOIN "User" submitter ON "EngineeringNote"."idUser" = "submitter"."idUser"
        WHERE "EngineeringNote"."idBug" = ${id}
      `
    );
  },


  deleteBug(db, id) {
    return db('Bug').where({ id }).delete();
  },

  updateBug(db, id, bugFields) {
    return db('Bug').where({ id }).update(bugFields);
  },
};

module.exports = LoginService;
