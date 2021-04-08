var mqtt = require('mqtt')
var client  = mqtt.connect('tcp://aerostun.dev:1883')
  
function forward(){
  client.publish('/smartcar/control/throttle', '50')
}

function backward(){
  client.publish('/smartcar/control/throttle', '-100')
}

function left(){
  client.publish('/smartcar/control/steering', '-20')
}

function right(){
  client.publish('/smartcar/control/steering', '20')
}

function breakSpeed(){
  client.publish('/smartcar/control/throttle', '0')
  client.publish('/smartcar/control/steering', '0')


}

breakSpeed()
backward()
right()
