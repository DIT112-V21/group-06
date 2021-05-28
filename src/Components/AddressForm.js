import '../Css/AddressForm.css'; 
import Button from './Button' 
import TextField from './TextField'
import { Link } from 'react-router-dom'

var currentUser = localStorage.getItem('email')
console.log(currentUser)

function checkIfAddressExists(currentUser){
    return new Promise((resolve, reject) =>
    fetch(`http://localhost:4000/customers/checkIfAddressExists?email=${currentUser}`)
    .then(response => response.json())
    .then((response) => {
      var value = response.data.rows.length
  
     if(value > 0) {
    resolve(false);
      }else{
    resolve(true);
  
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
    var fullAddress = address + ", " + postalcode + ", " + city
    if(checkIfAddressExists(currentUser)){
      storeAddress(currentUser, fullAddress)
    }else{
      alert ("There is an address connected to this account");
    }
   }

  


function AddressForm() {  
let registerButton = 'Register'   
let cancelButton = 'Cancel'     



  return (
    <div className="DeliveryAddress" tabIndex="0">

      <header className="Address-header">
        <p>
          Address form.
        </p>
        <p className='helpText'>Please add your delivery information, so we know where to deliver your food.</p>
        <p>
        <p className='inputPrompt'>
            Address
            <TextField   text=" address " type = "address" id= "address"/>
            Postal Code
            <TextField   text=" postal code " type="postal code" id="postal code" />
            <br/>
            City
            <TextField  text=" city " type="city" id="city" />
            </p>
            <Link to="/OrderInterface">
            <Button text={cancelButton} id='canBtn'/>
            </Link>
            <Link to="/OrderInterface">
            <Button text={registerButton} onClick={checkAddress} id='regBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}


export default AddressForm;
