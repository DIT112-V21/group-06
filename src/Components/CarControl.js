import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../publisher'



function CarControl() {
  const onKeyDown = (event) => {
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

  return (
    <div className="CarControl" tabIndex="0" onKeyDown={(e) => onKeyDown(e)}>
      
      <header className="CarControl-header">
        <p>
          Group06 :)))

        </p>
        <p>
        <Button text='W' onClick={publisher.forward} className='dirBtn'/>
        <br/>
        <Button text='A' onClick={publisher.left} className='dirBtn'/>
        <Button text='S' onClick={publisher.backward} className='dirBtn'/>
        <Button text='D' onClick={publisher.right} className='dirBtn'/>
        <br/>
        <Button text='STOP' color='red' onClick={publisher.breakSpeed} className='btn'/></p>
      </header>
    </div>
  )
}

export default CarControl;
