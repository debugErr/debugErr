const express = require('express');
const enotesRouter = express.Router();
const enotesService = require('./engineerNotesService.js');

//get all Engineering Notes
enotesRouter.route('/').get((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  const db = req.app.get('db');
  enotesService.getAllEngineeringNotes(db).then((data) => {
    console.log('ALL ENGINEERING NOTES:', data.rows);
    return res.status(200).send(data.rows);
  });
});

//Get Engineering Notes by ID
enotesRouter.route('/:id').get((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  const db = req.app.get('db');
  const id = req.params.id;
  enotesService.getEngineeringNotesByID(db, id).then((data) => {
    console.log('ALL ENGINEERING NOTES:', data.rows);
    return res.status(200).send(data.rows);
  });
});

module.exports = enotesRouter;
