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
    var value = response.data.rows.length

   if(value != 1) {
  resolve(false);
    }else{
  resolve(true);

  }
 }).catch(err => {
  reject(false);
 })
 )}
 
 
  function linkToCustomerPage(email, password){
    checkDatabase(email, password).then(function(result) {
      console.log(result) 
      if (result){
         window.location.href = "/WelcomePage";
         } else {
          // code that prompts the user to enter a correct email or password here
         };
   })
  }

  function onClick(){
   var email = document.getElementById("email").value
   var password = document.getElementById("password").value
   linkToCustomerPage(email, password)
  }
 
  return (
    <div className="LogIn" tabIndex="0" >
 
      <header className="LogIn-header">
        <p>
          Worst Car Remote Controller App
        </p>
        <p className='helpText'>Please enter your Log in information</p>
         <p className='inputPrompt'>
            Username
            <TextField text="email" type ="email" id= "email"/>
            Password
            <TextField text="password" type ="password" id= "password" />
            
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
 
