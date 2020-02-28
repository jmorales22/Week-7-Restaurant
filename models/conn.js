const host = "localhost",
  database = "restaurant2";

  const options = {
      host: host,
      database: database
  };
//we are making a wrapper so we do not have to call this everytime
const pgp = require("pg-promise")({
    query: function(e) {
        console.log('Query:', e.query);
    }
});

const db = pgp(options);

module.exports = db;