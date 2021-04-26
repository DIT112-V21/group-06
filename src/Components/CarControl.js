import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../publisher'

function CarControl() {
  let useColor = '#0e4b25'
  let regularColor = '#39933b'
  let stopUseColor = '#770404'
  let stopColor = 'red'
  let forwardButton = 'W'
  let backwardButton = 'S'
  let leftButton = 'A'
  let rightButton = 'D'
  let stopButton = 'STOP'



  const onKeyDown = (event) => {
    if (event.repeat) { return }
    // eslint-disable-next-line
    switch (event.keyCode) {
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
    switch (event.keyCode) {
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



  //  function imageStream(message) {
  //   let ctx = document.getElementById("img").getContext("2d")
  //   ctx.drawImage(createImageBitmap(message))
  // }
  var mqtt = require('mqtt')
  var client = mqtt.connect('ws://127.0.0.1:9001')


  client.subscribe('/smartcar/camera') //{'test1': {qos: 0}


  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.length)
    imageStream(message)
    //  client.end()
  })

  function imageStream(message) {


    let ctx = document.getElementById("img").getContext("2d")
    let imageData = new ImageData(320,240)
    let messageLenght = message.lenght / 3
    
    for (let ci = 0; ci < messageLenght; ++ci) {
      let a = 255;
      let r = message[3 * ci];
      let g = message[3 * ci + 1];
      let b = message[3 * ci + 2];
      imageData.data[4 * ci] = 190
      imageData.data[4 * ci + 1] = 0
      imageData.data[4 * ci + 2] = 210
      imageData.data[4 * ci + 3] = a

    }
    ctx.putImageData(imageData, 0, 0)
    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.stroke();
  }

  return (
    <div className="CarControl" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>

      <header className="CarControl-header">

        <canvas className="cameraStream" width="320" height="240" id="img"></canvas>
        <p>
          <Button text={forwardButton} color={regularColor} onClick={publisher.forward} className='dirBtn' />
          <br />
          <Button text={leftButton} color={regularColor} onMouseDown={publisher.left} onMouseUp={publisher.stopTurn} className='dirBtn' />
          <Button text={backwardButton} color={regularColor} onClick={publisher.backward} className='dirBtn' />
          <Button text={rightButton} color={regularColor} onMouseDown={publisher.right} onMouseUp={publisher.stopTurn} className='dirBtn' />
          <br />
          <Button text={stopButton} color={stopColor} onClick={publisher.breakSpeed} className='btn' /></p>
        <p>
          Group06 :)))
        </p>
        <p className='helpText'>You can control the car with the onscreen buttons or WASD for control and space for stopping.</p>
      </header>
    </div>
  )
}

export default CarControl;
