const mysql = require('mysql2');
const util = require('util');
const dbConfig = require('../config/database')
const connection = mysql.createConnection({
  host     : dbConfig.host,
  user     : dbConfig.username,
  password : dbConfig.password,
  database : dbConfig.database
});

// node native promisify
const mySQLQuery = util.promisify(connection.query).bind(connection);
async function executeQuery({query}) {
  try {[t]
    const results = await mySQLQuery(query);
    return results;
  } finally {
    connection.end();
  }  
}

// exports
module.exports = Object.freeze({
    executeQuery,
})
 