const enoteService = {
  // inner join eNotes
  getAllEngineeringNotes(db) {
    return db.raw(`
    SELECT
    "idENote" AS ID,
    "noteBody" AS "Notes",
    "noteTitle" AS "Note Title",
    "submitter"."firstName" AS "Submitted By",
    "bugnote"."title" AS "Bug Title",
    "bugnote"."idBug" AS "Bug ID"
    FROM "EngineeringNote"
    INNER JOIN "Bug" bugnote ON "EngineeringNote"."idBug" = "bugnote"."idBug"
    INNER JOIN "User" submitter ON "EngineeringNote"."idUser" = "submitter"."idUser"
    `);
  },

  //Get ENotes by bug ID
  getEngineeringNotesByID(db, id) {
    return db.raw(`
    SELECT
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
    `);
  },
};

module.exports = enoteService;
