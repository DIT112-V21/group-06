import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../publisher'
import { Link } from 'react-router-dom'


function CarControl() {
  let useColor = '#2c8388'
  let regularColor = '#3fc1c9'
  let stopUseColor = '#a13455'
  let stopColor = '#fc5185'
  let forwardButton = 'W'
  let backwardButton = 'S'
  let leftButton = 'A'
  let rightButton = 'D'
  let stopButton = 'STOP'

  const onKeyDown = (event) => {
    if(event.repeat){return}
    // eslint-disable-next-line
    switch(event.keyCode) {
      case 87://W
      publisher.forward()
      document.getElementById(forwardButton).style.backgroundColor = useColor
        break;
      case 83://S
      publisher.backward()
      document.getElementById(backwardButton).style.backgroundColor = useColor
        break;
      case 65://A
      publisher.left()
      document.getElementById(leftButton).style.backgroundColor = useColor
        break;
      case 68://D
      publisher.right()
      document.getElementById(rightButton).style.backgroundColor = useColor
        break;
      case 32://Space
      publisher.breakSpeed()
      document.getElementById(stopButton).style.backgroundColor = stopUseColor
        break;
    }
  }
  const onKeyUp = (event) => {
    // eslint-disable-next-line
    switch(event.keyCode) {
      case 87://W
      publisher.stopSpeed()
      document.getElementById(forwardButton).style.backgroundColor = regularColor
        break;
      case 83://S
      publisher.stopSpeed()
      document.getElementById(backwardButton).style.backgroundColor = regularColor
        break;
      case 65://A
      publisher.stopTurn()
      document.getElementById(leftButton).style.backgroundColor = regularColor
        break;
      case 68://D
      publisher.stopTurn()
      document.getElementById(rightButton).style.backgroundColor = regularColor
        break;
      case 32://Space
      publisher.breakSpeed()
      document.getElementById(stopButton).style.backgroundColor = stopColor
        break;
    }
  }

  return (
    <div className="CarControl" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      
      <header className="CarControl-header">
        <p>
          Group06 :)))
        </p>
        <p className='helpText'>You can control the car with the onscreen buttons or WASD for control and space for stopping.</p>
        <p>
        <Button text={forwardButton} color = {regularColor} onClick={publisher.forward} className='dirBtn' id = {forwardButton}/>
        <br/>
        <Button text={leftButton} color = {regularColor} onMouseDown={publisher.left} onMouseUp={publisher.stopTurn} className='dirBtn' id = {leftButton}/>
        <Button text={backwardButton} color = {regularColor} onClick={publisher.backward} className='dirBtn' id = {backwardButton}/>
        <Button text={rightButton} color = {regularColor} onMouseDown={publisher.right}onMouseUp={publisher.stopTurn} className='dirBtn' id = {rightButton}/>
        <br/>
        <Link to="/logIn">
        <Button text={stopButton} color={stopColor} onClick={publisher.breakSpeed} className='btn' id={stopButton}/>
        </Link>
        </p>
      </header>
    </div>
  )
}

export default CarControl;
