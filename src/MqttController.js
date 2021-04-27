import imageStream from './Components/CarControl'


var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 
//websockets mqtt broker required
//assigned to localhost for now.
client.subscribe('/smartcar/camera') 

client.on('message', function (topic, message) {
  // message is Buffer
  if (topic === '/smartcar/camera'){
  imageStream(message)}
})

export function forward(){
  client.publish('/smartcar/control/throttle', '50')
}

export function backward(){
  client.publish('/smartcar/control/throttle', '-50')
}

export function left(){
  client.publish('/smartcar/control/steering', '-20')
}

export function right(){
  client.publish('/smartcar/control/steering', '20')
}

export function stopTurn(){
  client.publish('/smartcar/control/steering', '0')
}

export function stopSpeed(){
  client.publish('/smartcar/control/throttle', '0')
}

export function breakSpeed(){
  client.publish('/smartcar/control/throttle', '0')
  client.publish('/smartcar/control/steering', '0')
}