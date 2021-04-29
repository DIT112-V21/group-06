import '../Css/CarControl.css'; 
import Button from './Button'
import * as publisher from '../publisher'   

function Register() {   let cancelUseColor = '#bd3a62'   
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
        <p className='helpText'>Please enter your personal information.</p>
        <p>
        <br/>
        <Button text={forwardButton} color = {regularColor} onClick={publisher.backward} className='regBtn'/>
        <Button text={backwardButton} color = {regularColor} onClick={publisher.forward} className='canBtn'/>
        <br/>
        </p>
      </header>
    </div>
  )
}

export default SignUp;
