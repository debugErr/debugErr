const pg = require('knex')({
  client: 'pg',
  connection: {
    host : '3.94.184.53',
    port : 5432,
    user : 'ejzsjucx',
    password : 'qQXTksHRPGEy5pZg9X_Zu-TvwHWtekCd',
    database : 'ejzsjucx'
  },
});

function getAllBugs() {
  return pg.select("*").from("Bugs");
}
// pg.select()
//   .from('Bugs')


// {
//   "label": "bugTracker",
//   "host": "3.94.184.53",
//   "user": "ejzsjucx",
//   "port": 5432,
//   "ssl": false,
//   "database": "ejzsjucx",
//   "password": "qQXTksHRPGEy5pZg9X_Zu-TvwHWtekCd"
// }

const daBugs = getAllBugs().then((data) => {

  console.log('🔴🟠🟡🟢🔵🟣 | file: connectionTest.js | line 29 | data', data);
});

