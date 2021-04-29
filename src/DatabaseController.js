var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://tlifeerj:JxvQP_5LdXUAQd5reuIWuK2WbmlnB74B@hattie.db.elephantsql.com:5432/tlifeerj" //Can be found in the Details page
var client = new pg.Client(conString);


function createUserAccount(name, password, date, email){
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
     
        var query =  "INSERT INTO customer_account (name, password, birth_date, email) VALUES ("+"'"+name+"'"+", "+"'"+password+"'"+", "+"'"+date+"'"+", "+"'"+email+"'"+");"
        console.log(query)
        client.query(query, function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }else{
             return console.log ('Successfuly inserted query')
          }
          client.end();
        });
      });
}
module.exports = {createUserAccount};