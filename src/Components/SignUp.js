import '../Css/SignUp.css'; 
import Button from './Button'
import * as publisher from '../publisher'   
import TextField from './TextField'
import { Link } from 'react-router-dom'


function SignUp() {   
let cancelUseColor = '#bd3a62'   
let cancelColor = '#fc5185'   
let registerUseColor = '#2c898f'   
let regColor = '#3fc1c9'   
let registerButton = 'Register'   
let cancelButton = 'Cancel'     



const onKeyDown = (event) => {     
    if(event.repeat){return}     
    // eslint-disable-next-line     
    switch(event.keyCode) {       
        case 87: //register       
        publisher.backward()       
        document.getElementById(registerButton).style.backgroundColor = registerUseColor         
        break;       
        case 83://cancel       
        publisher.forward()       
        document.getElementById(cancelButton).style.backgroundColor = cancelUseColor         
        break;         }   }   
        
        
        
        
        
    const onKeyUp = (event) => {     
    // eslint-disable-next-line     
    switch(event.keyCode) {       
        case 87://register       
        publisher.stopSpeed()       
        document.getElementById(registerButton).style.backgroundColor = regColor         
        break;
        case 83://cancel
        publisher.stopSpeed()
        document.getElementById(cancelButton).style.backgroundColor = cancelColor
        break;

    }
  }


  return (
    <div className="SignUp" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>

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
            <Button text={cancelButton}  onClick={publisher.forward} id='canBtn'/>
            </Link>
            <Link to="/logIn">
            <Button text={registerButton}  onClick={publisher.backward} id='regBtn'/>
            </Link>
        </p>
      </header>
    </div>
  )
}

export default SignUp;
