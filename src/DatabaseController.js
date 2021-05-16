var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://tlifeerj:JxvQP_5LdXUAQd5reuIWuK2WbmlnB74B@hattie.db.elephantsql.com:5432/tlifeerj" //Can be found in the Details page
var client = new pg.Client(conString);



function createUserAccount(name, password, email, is_customer){
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
     
        var query =  "INSERT INTO customer_account (name, password, email, is_customer) VALUES ("+"'"+name+"'"+", "+"'"+password+"'"+", "+"'"+email+"'"+", "+"'"+is_customer+"'"+");"
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

function checkPassword(email, password){ // checks if email exists and if password matches given email
  return new Promise((resolve, reject) =>
  client.connect(function(err) {
          if (err) {
              console.error('could not connect to postgres');
              return reject(err);
          }
        
              var query =  "Select * from customer_account where email ="+"'"+email+"'"+" and password ="+"'"+password+"'"+";"
              console.log(query)
              client.query(query, function(err, result) {
              
                if (err) {
                  return reject(err);
              }

               if(result.rowCount != 1) {
              console.error('error running query', err)
               resolve(false);
                }else{
              console.log ('user exists in database')
              resolve(true);
              }
              client.end();
          });
      })
  )}

function checkIfOperator(email){ // checks if email exists and if password matches given email
  return new Promise((resolve, reject) =>
  client.connect(function(err) {
          if (err) {
              console.error('could not connect to postgres');
              return reject(err);
          }
        
              var query =  "Select * from customer_account where email ="+"'"+email+"'"+" and is_customer ="+"'"+false+"'"+";"
              console.log(query)
              client.query(query, function(err, result) {
              
                if (err) {
                  return reject(err);
              }

               if(result.rowCount != 1) {
               console.error('error running query', err)
               resolve(false);
                }else{
                console.log ('user exists in database')
              resolve(true);
              }
              client.end();
          });
      })
  )}

function checkIfEmailExists(email){ // checks if username is already taken when signing up
  return new Promise((resolve, reject) =>
  client.connect(function(err) {
          if (err) {
              console.error('could not connect to postgres');
              return reject(err);
          }
        
              var query =  "Select * from customer_account where email ="+"'"+email+"'"+";"
              console.log(query)
              client.query(query, function(err, result) {
              
                if (err) {
                  return reject(err);
              }

               if(result.rowCount != 1) {
              console.error('error running query', err)
               resolve(false);
                }else{
              console.log ('user exists in database')
              resolve(true);
              }
              client.end();
          });
      })
  )}
  
    /*checkPassword("operator@hotmail.com", "password")
    .then(valid => console.log(valid))
    .catch(err => console.error(err));*/

module.exports = {createUserAccount, checkIfEmailExists, checkPassword, checkIfOperator};