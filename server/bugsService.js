const BugsService = {
  getAllBugs(db) {
    return db.select('*').from('Bug');
  },

  getAllBugsHR(db) {
    return db.raw(`
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

  // inner join eNotes
  // getAllEngineeringNotes(db) {
  //   return db.raw(`
  //   SELECT
  //   "idENote" AS ID,
  //   "noteBody" AS "Notes",
  //   "noteTitle" AS "Note Title",
  //   "submitter"."firstName" AS "Submitted By",
  //   "bugNote"."title" AS "Bug Title",
  //   "bugNote"."idBug" AS "Bug ID"
  //   FROM "EngineeringNote"
  //   INNER JOIN "Bug" bugnote ON "EngineeringNote"."idBug" = "bugnote"."idBug"
  //   INNER JOIN "User" submitter ON "Bug"."userSubmitted" = "submitter"."idUser"
  //   `);
  // },

  //Get ENotes by bug ID
  // getEngineeringNotesByID(db, id) {
  //   return db.raw(`
  //   SELECT
  //   "idENote" AS ID,
  //   "noteBody" AS "Notes",
  //   "noteTitle" AS "Note Title",
  //   "submitter"."firstName" AS "Submitted By",
  //   "bugNote"."title" AS "Bug Title",
  //   "bugNote"."idBug" AS "Bug ID"
  //   FROM "EngineeringNote"
  //   INNER JOIN "Bug" bugnote ON "EngineeringNote"."idBug" = "bugnote"."idBug"
  //   INNER JOIN "User" submitter ON "Bug"."userSubmitted" = "submitter"."idUser"
  //   WHERE "EngineeringNote"."idBug" = ${id}
  //   `);
  // },

  // insertBug(db, newBug) {
  //   return db
  //     .insert(newBug)
  //     .into("Bug")
  //     .returning("*")
  //     .then((rows) => {
  //       return rows[0];
  //     });
  // },

  // getById(db, id) {
  //   return db.from('Bug').select('*').where('id_Bug', id).first();
  // },

  deleteBug(db, id) {
    return db('Bug').where({ id }).delete();
  },

  updateBug(db, id, bugFields) {
    return db('Bug').where({ id }).update(bugFields);
  },
};

module.exports = BugsService;
