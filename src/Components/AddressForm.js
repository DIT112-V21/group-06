import '../Css/AddressForm.css'; 
import Button from './Button' 
import TextField from './TextField'
import { Link } from 'react-router-dom'


function checkIfAddressExists(email){
    return new Promise((resolve, reject) =>
    fetch(`http://localhost:4000/customers/checkIfAddressExists?email=${email}`)
    .then(response => response.json())
    .then((response) => {
      var value = response.data.rows.length
  
     if(value !== 1) {
    resolve(true);
      }else{
    resolve(false);
  
    }
   }).catch(err => {
    reject(false);
   })
   )}
  
   function storeAddress(customer_email, address){
    return new Promise((resolve, reject) =>
    fetch(`http://localhost:4000/customers/storeAddress?customer_email=${customer_email}&address=${address}`)
    .then(response => response.json())
    .then((response) => {
      var value = response.data.rows.length
  
     if(value !== 1) {
    resolve(true);
      }else{
    resolve(false);
  
    }
   }).catch(err => {
    reject(false);
   })
   )}
   
   function checkAddress(){
    var address = document.getElementById("address").value
    var postalcode = document.getElementById("postal code").value
    var city = document.getElementById("city").value
    if(){
      
      }
    }
   }

   function linkToLogIn(email){
    checkIfAddressExists(email).then(function(result) {
      console.log(result) 
      if (result){
         window.location.href = "/OrderInterface";
         } else {
          alert ("There is an address connected to this account");
         };
   })
  }

  function addAddress(customer_email, address){
    storeAddress(customer_email, address).then(function(result) {
      console.log(result) 
      if (result){
         window.location.href = "/OrderInterface";
         } else {
          alert ("You have alreay added an address");
         };
   })
  }



function AdressForm() {  
let registerButton = 'Register'   
let cancelButton = 'Cancel'     



  return (
    <div className="DeliveryAdress" tabIndex="0">

      <header className="Adress-header">
        <p>
          Adress form.
        </p>
        <p className='helpText'>Please add your delivery information, so we know where to deliver your food.</p>
        <p>
        <p className='inputPrompt'>
            Adress
            <TextField   text=" adress " type = "adress" />
            Postal Code
            <TextField   text=" postal code " type="postalcode" />
            <br/>
            City
            <TextField  text=" city " type="city" />
            </p>
            <Link to="/OrderInterface">
            <Button text={cancelButton} id='canBtn'/>
            </Link>
            <Link to="/OrderInterface">
            <Button text={registerButton} id='regBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}


export default AddressForm;
