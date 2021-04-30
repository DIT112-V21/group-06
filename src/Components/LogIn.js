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
          Worst Car Remote Controller App
        </p>
        <p className='helpText'>Please enter your Log in information</p>
        <p>
        <p className='inputPrompt'>
            Username
            <TextField text="" />
            Password
            <TextField text="" type="password" />
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
