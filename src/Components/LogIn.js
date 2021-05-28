import '../Css/LogIn.css'; 
import Button from './Button'
import TextField from './TextField'
import { Link } from 'react-router-dom'
 
 
function LogIn() {    
let registerButton = 'Log In'   
let cancelButton = 'Sign Up'     
 
function checkDatabase(email, password){
  return new Promise((resolve, reject) =>
  fetch(`http://localhost:4000/customers/checkEmail?email=${email}&password=${password}`)
  .then(response => response.json())
  .then((response) => {
    let value = response.data.rows

   if(value.length !== 1) {
  resolve("false");
    }else{
      if (value[0].is_customer){resolve("customer")}
      else{resolve("operator")}
    }
 }).catch(err => {
  reject(false);
 })
 )}
 
 
  function linkToCustomerPage(email, password){
    checkDatabase(email, password).then(function(result) {
      console.log(result) 
      if (result === "customer"){
         window.location.href = "/WelcomePage"
         } 
      else if (result==="operator") {
          window.location.href = "/carControl"
          
         }
      else {
        alert("The email you have entered does not exist or the email and password does not match.")
      }
   })
  }

  function onClick(){
   var email = document.getElementById("email").value
   localStorage.setItem('email', email)
   var password = document.getElementById("password").value
   linkToCustomerPage(email, password)

   
  }
 
  return (
    <div className="LogIn" tabIndex="0" >
 
      <header className="LogIn-header">
        <p>
          KRAN your online delivery service!
        </p>
        <p className='helpText'>Please enter your Log in information</p>
         <p className='inputPrompt'>
            Email
            <TextField text="email" type ="email" id= "email"/>
            Password
            <TextField text="password" type ="password" id= "password" />
            <p className='helpText'>If you don't have an account, sign up here!</p>
            <Link to="/signUp">
            <Button text={cancelButton} id='signBtn'/>
            </Link>
            
            <Button text={registerButton} onClick= {onClick} id='logBtn'/>
            
        </p>
      </header>
    </div>
  )
}
 
export default LogIn;
 
