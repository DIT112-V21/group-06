import '../Css/CarControl.css';
import Button from './Button'
import * as publisher from '../MqttController'
import { Link } from 'react-router-dom'

import { Joystick } from 'react-joystick-component';
import { BrowserView } from 'react-device-detect'
import React, { useEffect, useState } from "react"
import Nav from './Nav'



function CarControl() {
  let useColor = 'blue'
  let regularColor = 'lightblue'
  let stopUseColor = 'darkpink'
  let stopColor = 'pink'
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
        publisher.forward(50)
        document.getElementById(forwardButton).style.backgroundColor = useColor
        break;
      case 83://S
        publisher.backward(-50)
        document.getElementById(backwardButton).style.backgroundColor = useColor
        break;
      case 65://A
        publisher.left(30)
        document.getElementById(leftButton).style.backgroundColor = useColor
        break;
      case 68://D
        publisher.right(-30)
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
        publisher.stopSpeed(0)
        document.getElementById(forwardButton).style.backgroundColor = regularColor
        break;
      case 83://S
        publisher.stopSpeed(0)
        document.getElementById(backwardButton).style.backgroundColor = regularColor
        break;
      case 65://A
        publisher.stopTurn(0)
        document.getElementById(leftButton).style.backgroundColor = regularColor
        break;
      case 68://D
        publisher.stopTurn(0)
        document.getElementById(rightButton).style.backgroundColor = regularColor
        break;
      case 32://Space
        publisher.breakSpeed()
        document.getElementById(stopButton).style.backgroundColor = stopColor
        break;
    }
  }

  function handleMove(event) {
    publisher.movex(event.x)
    publisher.movey(event.y)
  }


  useEffect(() => {
    getOrdersByEmail('')
    let tmp = []

    for (let i = 0; i <= 20; i++) {
      if (localStorage.getItem('order' + i) !== null) {
        let word = localStorage.getItem('order' + i)

        let array = word.split(';')
        array.push('order' + i)
        tmp.push(array)

      }
    }
    setItems(tmp)
  }, [])


  const doneBtn = (id) => {


    fetch(`http://localhost:4000/orders/delivered?orderid=${id}`)
    .then()
		.catch(err => {
		
	   })

     getOrdersByEmail('')

  

  }

  const [items, setItems] = useState([])

  async function getOrdersByEmail(email){
   let response = await fetch('http://localhost:4000/orders/open') 
   let json = await response.json()
   let array = await json.data.rows
   let array2 = Array.from(array)
   setItems(array2)
   }

  
  return (
    <div className="CarControl" tabIndex="0" onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
    <Nav />
      <div className="order-list">
        <h1>Orders:</h1>

        {items.map(item => (
          <div className="single-order">

            <p>Pickup: {item.address_from}</p>
            <p>End point: {item.address_to}</p>
            <button onClick={ () => doneBtn(item.orderid)}>Done</button>
          </div>
        ))}
 


      </div>

      <header className="CarControl-header">

        <canvas className="cameraStream" width="320" height="240" id="img"></canvas>
        <p>
          KRAN remote control
        </p>
        <p className='helpText'>You can control the car with the onscreen buttons or WASD for control and space for stopping.</p>
        <p>
          <Joystick size={140} baseColor="pink" stickColor="lightblue" throttle={200} move={handleMove} stop={publisher.breakSpeed}></Joystick>
          <br />
          <BrowserView>
            <Button text={forwardButton} color={regularColor} onClick={publisher.forward} className='dirBtn' id={forwardButton} />
            <br />
            <Button text={leftButton} color={regularColor} onMouseDown={publisher.left} onMouseUp={publisher.stopTurn} className='dirBtn' id={leftButton} />
            <Button text={backwardButton} color={regularColor} onClick={publisher.backward} className='dirBtn' id={backwardButton} />
            <Button text={rightButton} color={regularColor} onMouseDown={publisher.right} onMouseUp={publisher.stopTurn} className='dirBtn' id={rightButton} />
          </BrowserView>
          <br />
          <Link to="/logIn">
            <Button text={stopButton} color={stopColor} onClick={publisher.breakSpeed} className='btn' id={stopButton} />
          </Link>
        </p>
      </header>
    </div>
  )
}




export default CarControl;
