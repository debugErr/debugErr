const express = require('express');
const loginRouter = express.Router();
const LoginService = require('./loginService.js');

loginRouter.route('/').post((req, res, next) => {
console.log('🔴🟠🟡🟢🔵🟣 | file: loginRouter.js | line 6 | loginRouter.route | req.body', req.body);
  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  const db = req.app.get('db');
  const { username, password } = req.body;
  LoginService.verifyCradentials(db, username).then((data) => {
    if (!data.rows[0]) return res.status(401).send('Invalid Login Cradentials - UN');
    if (data.rows[0].hashedPass === password) {
      //* Passwords Match
      return res.status(200).send(data.rows[0]);
    }
    return res.status(401).send('Invalid Login Cradentials - PW');
  });
});

//get bug with specific id (now working)
loginRouter.route('/:id').get((req, res, next) => {
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

module.exports = loginRouter;
