var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://tlifeerj:JxvQP_5LdXUAQd5reuIWuK2WbmlnB74B@hattie.db.elephantsql.com:5432/tlifeerj" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("INSERT INTO customer_account (name, password, birth_date, email) VALUES ('Felix', 'Mertala', '1997-02-01', 'Felix@gmail.com');", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    //console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});