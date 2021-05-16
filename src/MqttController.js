var speed

var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 
//websockets mqtt broker required
//assigned to localhost for now.
client.subscribe('/smartcar/camera') 


client.on('message', function (topic, message) {
  // message is Buffer
  if (topic === '/smartcar/camera'){
    let element = document.getElementById("img")
    if(element !== null){
    let ctx = element.getContext("2d")
    let imageData = ctx.createImageData(320, 240)
    let messageLenght = 320 * 240
    let ci = 0
    for (ci = 0; ci < messageLenght; ++ci) {
      let a = 255;
      let r = message[3 * ci];
      let g = message[3 * ci + 1];
      let b = message[3 * ci + 2];
      imageData.data[4 * ci] = r
      imageData.data[4 * ci + 1] = g
      imageData.data[4 * ci + 2] = b
      imageData.data[4 * ci + 3] = a
    }
    ctx.putImageData(imageData, 0, 0)
  }}
})

export function forward(speed){
  client.publish('/smartcar/control/throttle',"'"+speed+"'")
}

export function backward(speed){
  client.publish('/smartcar/control/throttle',"'"+speed+"'")
}

export function left(speed){
  client.publish('/smartcar/control/steering',"'"+speed+"'")
}

export function right(speed){
  client.publish('/smartcar/control/steering',"'"+speed+"'")
}

export function stopTurn(speed){
  client.publish('/smartcar/control/steering',"'"+speed+"'")
}

export function stopSpeed(speed){
  client.publish('/smartcar/control/throttle',"'"+speed+"'")
}

export function breakSpeed(){
  client.publish('/smartcar/control/throttle', '0')
  client.publish('/smartcar/control/steering', '0')
}