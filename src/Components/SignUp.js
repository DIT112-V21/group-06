import '../Css/SignUp.css'; 
import Button from './Button' 
import TextField from './TextField'
import { Link } from 'react-router-dom'


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
            <TextField text="" />
            Password
            <TextField text="" type="password" />
            <br/>
            Email adress
            <TextField text="" type="email" />
            </p>
            <Link to="/logIn">
            <Button text={cancelButton} id='canBtn'/>
            </Link>
            <Link to="/logIn">
            <Button text={registerButton} id='regBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}

export default SignUp;
