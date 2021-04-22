#include <MQTT.h>
#include <WiFi.h>
#include <Smartcar.h>

#ifndef __SMCE__
WiFiClient net;
#endif
MQTTClient mqtt;

ArduinoRuntime arduinoRuntime;
BrushedMotor leftMotor(arduinoRuntime, smartcarlib::pins::v2::leftMotorPins);
BrushedMotor rightMotor(arduinoRuntime, smartcarlib::pins::v2::rightMotorPins);
DifferentialControl control(leftMotor, rightMotor);

SimpleCar car(control);


const int backPin = 3;
GP2Y0A02 sideBackIR(arduinoRuntime,
                    backPin); 

const auto triggerPin = 6;
const auto echoPin = 7;
const auto maxDistance = 2000;
SR04 front(arduinoRuntime, triggerPin, echoPin, maxDistance);

bool x = true;

void setup() {
  
  Serial.begin(9600);
#ifdef __SMCE__
  
  mqtt.begin("127.0.0.1", 1883, WiFi);
  // mqtt.begin(WiFi); // Will connect to localhost
#else
  mqtt.begin(net);
#endif
  if (mqtt.connect("arduino", "public", "public")) {
    mqtt.subscribe("/smartcar/control/#", 1);
    mqtt.onMessage([](String topic, String message) {
      if (topic == "/smartcar/control/throttle") {
        car.setSpeed(message.toInt());
      } else if (topic == "/smartcar/control/steering") {
        car.setAngle(message.toInt());
      } else {
        Serial.println(topic + " " + message);
      }
    });
  }

  
}

void loop() {
  car.setSpeed(0);
  if (mqtt.connected()) { //the car is stupid and drives when starting
    mqtt.loop();
    // const auto currentTime = millis();
  }
  autoStop();
  delay(35);

}

void autoStop(){
  
  if(front.getDistance() < 120 && front.getDistance() > 0){ 
    car.setSpeed(-50);
    delay(3000);
    car.setSpeed(0);
                
  }
  Serial.println(front.getDistance());
  
  if(sideBackIR.getDistance() < 120 && sideBackIR.getDistance() > 0){ 
    car.setSpeed(50);
    delay(3000);
    car.setSpeed(0);
                
  }
}
