import '../Css/LogIn.css'; 
import Button from './Button'
import * as publisher from '../publisher'   
import TextField from './TextField'
import { Link } from 'react-router-dom'


function LogIn() {   
let cancelUseColor = '#bd3a62'   
let cancelColor = '#fc5185'   
let registerUseColor = '#2c898f'   
let regColor = '#3fc1c9'   
let registerButton = 'Log In'   
let cancelButton = 'Sign Up'     


  return (
    <div className="LogIn" tabIndex="0" >

      <header className="LogIn-header">
        <p>
          Worst Car Remote Controler App
        </p>
        <p className='helpText'>Please enter your Log in information to access this crapy application</p>
        <p>
        <p className='inputPrompt'>
            Username
            <TextField text="" />
            Password
            <TextField text="" type="password" />
            </p>
            <Link to="/signUp">
            <Button text={cancelButton}  onClick={publisher.forward} id='signBtn'/>
            </Link>
            <Link to="/carControl">
            <Button text={registerButton}  onClick={publisher.backward} id='logBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}

export default LogIn;
