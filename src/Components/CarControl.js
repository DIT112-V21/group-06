import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../publisher'


function CarControl() {

  return (
    <div className="CarControl">
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
