import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../publisher'



function CarControl() {
  const onKeyDown = (event) => {
    if(event.repeat){return}
    switch(event.keyCode) {
      case 87://W
      publisher.forward()
        break;
      case 83://S
      publisher.backward()
        break;
      case 65://A
      publisher.left()
        break;
      case 68://D
      publisher.right()
        break;
      case 32://Space
      publisher.breakSpeed()
        break;
    }
  }
  const onKeyUp = (event) => {
    switch(event.keyCode) {
      case 87://W
      publisher.stopSpeed()
        break;
      case 83://S
      publisher.stopSpeed()
        break;
      case 65://A
      publisher.stopTurn()
        break;
      case 68://D
      publisher.stopTurn()
        break;
      case 32://Space
      publisher.breakSpeed()
        break;
    }
  }

  return (
    <div className="CarControl" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      
      <header className="CarControl-header">
        <p>
          Group06 :)))

        </p>
        <p>
        <Button text='W' onClick={publisher.forward} className='dirBtn'/>
        <br/>
        <Button text='A' onMouseDown={publisher.left} onMouseUp={publisher.stopTurn} className='dirBtn'/>
        <Button text='S' onClick={publisher.backward} className='dirBtn'/>
        <Button text='D' onMouseDown={publisher.right}onMouseUp={publisher.stopTurn} className='dirBtn'/>
        <br/>
        <Button text='STOP' color='red' onClick={publisher.breakSpeed} className='btn'/></p>
      </header>
    </div>
  )
}

export default CarControl;
