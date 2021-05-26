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

 function userCreate(name, password, email){
  return new Promise((resolve, reject) =>
  fetch(`http://localhost:4000/customers/add?name=${name}&password=${password}&email=${email}&is_customer=true`)
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
 
 function checkValue(){
  var name = document.getElementById("name").value
  var password = document.getElementById("password").value
  var email = document.getElementById("email").value
  if(email!==null){
    onClick()
    if(password!==null&&name!==null){
      onClickTwo()
    }
  }
 }

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

  function createUser(name, password, email){
    userCreate(name, password, email).then(function(result) {
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

  function onClickTwo(){
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value
    createUser(name, password, email)
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
            
            <Button text={registerButton} onClick= {checkValue}  id='regBtn'/>

            
        </p>
      </header>
    </div>
  )
}


export default SignUp;
