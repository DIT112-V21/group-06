var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 


client.subscribe('/smartcar/camera') //{'test1': {qos: 0}


client.on('message', function (topic, message) { 
    // message is Buffer
    console.log(message.toString())
    document.getElementsByClassName('camera').text = 'bb'
    return message

    // client.end()
  })