const MongoClient = require('mongodb').MongoClient
 
// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
// const PROD_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>"
const MKTG_URI = "mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd"
 
function connect(url) {
  return MongoClient.connect(url).then(client => client.db())
}
 
module.exports = async function() {
  let databases = await Promise.all([connect(MKTG_URI)])
 
  return {
    marketing: databases[1]
  }
}