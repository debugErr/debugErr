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

  let combinedReturn = { bug: [], eNotes: [] };
  BugsService.getSingleBug(db, id).then((data) => {
    console.log('Single BUG:', data.rows);
    combinedReturn.bug = data.rows;
    console.log(
      '🔴🟠🟡🟢🔵🟣 | file: bugRouter.js | line 29 | BugsService.getSingleBug | combinedReturn',
      combinedReturn
    );
  });
  BugsService.getBugENotes(db, id).then((data) => {
    console.log('ENotes:', data.rows);
    combinedReturn.eNotes = data.rows;
    console.log(
      '🔴🟠🟡🟢🔵🟣 | file: bugRouter.js | line 37 | BugsService.getBugENotes | combinedReturn',
      combinedReturn
    );
    return res.status(200).json(combinedReturn);
  });
});
// bugRouter.route('/:id').get((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   const db = req.app.get('db');
//   const id = req.params.id;
//   BugsService.getSingleBug(db, id).then((data) => {
//     console.log('Single BUG:', data.rows);
//     return res.status(200).json(data.rows);
//   });
// });

module.exports = bugRouter;
