const BugsService = {
  getAllBugs(db) {
    return db.select("*").from("Bug");
  },


  getAllBugsHR(db) {
    return db
      .raw(`
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
      `)
  },



  insertBug(db, newBug) {
    return db
      .insert(newBug)
      .into("Bug")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },

  getById(db, id) {
    return db.from("Bug").select("*").where("id_Bug", id).first();
  },

  deleteBug(db, id) {
    return db("Bug").where({ id }).delete();
  },

  updateBug(db, id, bugFields) {
    return db("Bug").where({ id }).update(bugFields);
  },
  
};

module.exports = BugsService;
