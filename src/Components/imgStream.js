// var mqtt = require('mqtt')
// var client  = mqtt.connect('ws://127.0.0.1:9001') 


// client.subscribe('/smartcar/camera') //{'test1': {qos: 0}


// client.on('message', function (topic, message) { 
//     // message is Buffer
//     console.log(message.length)
//     imageStream(message)
//     //  client.end()
//   })

//   function imageStream(message) {
//     let ctx = document.getElementById("img").getContext("2d")
//     let imageData = ctx.createImageData(320,240)
//     let messageLenght = message.lenght/3

//     for (let ci = 0; ci < messageLenght; ++ci) {
//         let a = 255;
//         let r = message[3 * ci];
//         let g = message[3 * ci + 1];
//         let b = message[3 * ci + 2];
//         imageData.data[4*ci] = 190
//         imageData.data[4*ci+1] = 0
//         imageData.data[4*ci+2] = 210
//         imageData.data[4*ci+3] = a

//     }
//     ctx.putImageData(imageData,10,10)
    
//   }