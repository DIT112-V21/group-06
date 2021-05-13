import '../Css/LogIn.css'; 
import Button from './Button'
import TextField from './TextField'
import { Link } from 'react-router-dom'


function LogIn() {    
let registerButton = 'Log In'   
let cancelButton = 'Sign Up'     


  return (
    <div className="LogIn" tabIndex="0" >

      <header className="LogIn-header">
        <p>
          Welcome to KRAN your online delivery service
        </p>
        <p className='helpText'>
          Please enter your Log in information
          </p>
        <p>
        <p className='inputPrompt'>
            Username
            <TextField text="" />
            Password
            <TextField text="" type="password" />
            </p>
       <p className='helpText'>
          If you don't have an account, sign up here!
            </p>
            <Link to="/signUp">
            <Button text={cancelButton} id='signBtn'/>
            </Link>
            <Link to="/carControl">
            <Button text={registerButton} id='logBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}

export default LogIn;
