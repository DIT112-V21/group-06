import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Client } = pkg;
var conString = "postgres://tlifeerj:JxvQP_5LdXUAQd5reuIWuK2WbmlnB74B@hattie.db.elephantsql.com:5432/tlifeerj" //Can be found in the Details page
var client = new Client(conString);

const app = express(); //

const SELECT_ALL_QUERY = 'Select * from customer_account where email = \'felix\''


client.connect(err =>{
    if(err) {
        return err;
    }
});




app.use(cors());

app.get('/', (req, res) => {
  res.send('go to /customers to see customers')
});

app.get('/customers', (req, res) =>{
    client.query(SELECT_ALL_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data: results
            })
        }})
});

app.get('/customers/checkEmail', (req, res) =>{
    const  {password, email} = req.query;
    const CHECK_EMAIL_QUERY = `SELECT * from customer_account where email = '${email}' and password = '${password}'`
    client.query(CHECK_EMAIL_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data: results
            })
        }})
});

app.get('/customers/add', (req, res) =>{
    const  {name, password, email, is_customer} = req.query;
    const INSERT_CUSTOMER = `INSERT INTO customer_account (name, password, email, is_customer) VALUES ('${name}','${password}','${email}',${is_customer})`
    client.query(INSERT_CUSTOMER, (results => {
    
    return res.send('successfuly added customer')
}
))
})

app.listen(4000, () =>{
    console.log('Server listening on port 4000')
})

