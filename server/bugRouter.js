const express = require('express');
const bugRouter = express.Router();
const BugsService = require('./bugsService.js');

bugRouter.route('/')
  .get((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  const db = req.app.get('db');
  BugsService.getAllBugsHR(db).then((data) => {
      console.log('🔴🟠🟡🟢🔵🟣 | file: expense.js | line 10 | ExpenseService.getAllExpenses | data[rows]', data.rows);
      return res.status(200).send(data.rows);
    });
  })

module.exports = bugRouter;
