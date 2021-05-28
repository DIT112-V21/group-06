var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 
//websockets mqtt broker required
//assigned to localhost for now.
client.subscribe('/smartcar/camera') 


client.on('message', function (topic, message) {
  // message is Buffer
  if (topic === '/smartcar/camera'){
    let messageLenght = 320 * 240
    onImage(message,messageLenght)
}})

async function onImage(message, messageLenght){
    let element = document.getElementById("img")
    if(element !== null){
    let ctx = element.getContext("2d")
    let imageData = ctx.createImageData(320, 240)
    let videoImage = await imageHandling(message, imageData, messageLenght)
    ctx.putImageData(videoImage, 0, 0)
  }}




function imageHandling(message, imageData, messageLenght){
  
  for (let i = 0; i < messageLenght; ++i) {
    let a = 255;
    let r = message[3 * i];
    let g = message[3 * i + 1];
    let b = message[3 * i + 2];
    imageData.data[4 * i] = r
    imageData.data[4 * i + 1] = g
    imageData.data[4 * i + 2] = b
    imageData.data[4 * i + 3] = a
  }
  return imageData
}

export function forward(speed){
  client.publish('/smartcar/control/throttle',speed.toString())
}

export function backward(speed){
  client.publish('/smartcar/control/throttle',speed.toString())
}

export function left(speed){
  client.publish('/smartcar/control/steering',speed.toString())
}

export function right(speed){
  client.publish('/smartcar/control/steering',speed.toString())
}

export function stopTurn(speed){
  client.publish('/smartcar/control/steering',speed.toString())
}

export function stopSpeed(speed){
  client.publish('/smartcar/control/throttle',speed.toString())
}

export function breakSpeed(){
  client.publish('/smartcar/control/throttle', '0')
  client.publish('/smartcar/control/steering', '0')
}
function roundSpeed(speed){
  speed = (speed / 2) / 10
  speed = Math.round(speed)
  speed = (speed * 2) * 10
  return speed
}


let lastY = 0
let lastX = 0

export function movey(speed){
  speed = roundSpeed(speed)
  if(speed !== lastY){
  client.publish('/smartcar/control/throttle',speed.toString())
  lastY = speed
  }
}


export function movex(speed){
  speed = roundSpeed(speed)
  if(speed !== lastX){
  client.publish('/smartcar/control/steering',speed.toString())
  lastX = speed
  }
}