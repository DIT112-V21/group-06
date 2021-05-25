import '../Css/SignUp.css'; 
import Button from './Button' 
import TextField from './TextField'
import { Link } from 'react-router-dom'
/*import * as database from '../DatabaseController'


 var username
 var password
 var email*/


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
            Username
            <TextField   text="" type = 'username' />
            Password
            <TextField   text="" type="password" />
            <br/>
            Email adress
            <TextField  text="" type="email" />
            </p>
            <Link to="/logIn">
            <Button text={cancelButton} id='canBtn'/>
            </Link>
            <Link to="/WelcomePage">
            <Button text={registerButton} id='regBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}
/*username = this.refs.username.getValue();
password = this.refs.password.getValue();
email = this.refs.email.getValue();

database.createUserAccount(username, password, email, true)*/

export default SignUp;
