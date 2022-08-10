const express = require('express');
const bugRouter = express.Router();
const BugsService = require('./bugsService.js');

bugRouter.route('/').get((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  const db = req.app.get('db');
  BugsService.getAllBugsHR(db).then((data) => {
    console.log(
      '🔴🟠🟡🟢🔵🟣 | file: expense.js | line 10 | ExpenseService.getAllExpenses | data[rows]',
      data.rows
    );
    return res.status(200).send(data.rows);
  });
});

//get bug with specific id (now working)
bugRouter.route('/:id').get((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  const db = req.app.get('db');
  const id = req.params.id;
  BugsService.getSingleBug(db, id).then((data) => {
    console.log('Single BUG:', data.rows[0]);
    return res.status(200).json(data.rows[0]);
  });
});

module.exports = bugRouter;
