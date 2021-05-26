import '../Css/SignUp.css'; 
import Button from './Button' 
import TextField from './TextField'
import { Link } from 'react-router-dom'


 function checkIfEmailExists(email){
  return new Promise((resolve, reject) =>
  fetch(`http://localhost:4000/customers/checkIfEmailExists?email=${email}`)
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
 
 
  function linkToLogIn(email){
    checkIfEmailExists(email).then(function(result) {
      console.log(result) 
      if (result){
         window.location.href = "/LogIn";
         } else {
          alert ("The email you have entered already exists.");
         };
   })
  }

  function onClick(){
   var email = document.getElementById("email").value
   linkToLogIn(email)
  }

function SignUp() {  
let registerButton = 'Register'   
let cancelButton = 'Cancel'     

  return (
    <div className="SignUp" tabIndex="0">

      <header className="SignUp-header">
        <p>
          Sign Up Form
        </p>
        <p className='helpText'>Please enter your personal information on this TRUSTWORTHY site, trust us we will only use it for personal stuff</p>
        <p>
        <p className='inputPrompt'>
            Name
            <TextField  text="name" type = "name" id = "name" />
            Password
            <TextField  text="password" type="password" id = "password" />
            <br/>
            Email adress
            <TextField text="email" type ="email" id= "email"/>
            </p>
            <Link to="/logIn">
            <Button text={cancelButton} id='canBtn'/>
            </Link>
            
            <Button text={registerButton} onClick= {onClick} id='regBtn'/>
            
        </p>
      </header>
    </div>
  )
}


export default SignUp;
