var connection = require("./config/connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ?;";
    connection.query(queryString, table, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, burger, cb) {
    var queryString = "INSERT INTO ? (burger_name, devoured) VALUES (?,false);";

    connection.query(queryString, [table, burger], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, id, cb) {
    var queryString = "UPDATE ? SET devoured=true WHERE id=?;";
    connection.query(queryString, [table, id], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
