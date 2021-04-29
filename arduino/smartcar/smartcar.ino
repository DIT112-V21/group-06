#include <MQTT.h>
#include <WiFi.h>
#include <Smartcar.h>
#include <vector> 

#ifdef __SMCE__
#include <OV767X.h>
#endif

#ifndef __SMCE__
WiFiClient net;
#endif
MQTTClient mqtt;

ArduinoRuntime arduinoRuntime;
BrushedMotor leftMotor(arduinoRuntime, smartcarlib::pins::v2::leftMotorPins);
BrushedMotor rightMotor(arduinoRuntime, smartcarlib::pins::v2::rightMotorPins);
DifferentialControl control(leftMotor, rightMotor);

SimpleCar car(control);

std::vector<char> frameBuffer; 

const int backPin = 3;
GP2Y0A02 sideBackIR(arduinoRuntime,
                    backPin); 

const auto triggerPin = 6;
const auto echoPin = 7;
const auto maxDistance = 2000;
SR04 front(arduinoRuntime, triggerPin, echoPin, maxDistance);

bool canDriveForward = true;
bool canDriveBackwards = true;

void setup() {
  Serial.begin(9600);

 

#ifdef __SMCE__

  Camera.begin(QVGA, RGB888, 0); //qvga is a format 320 X 240, QVGA, RGB888, 0
  frameBuffer.resize(Camera.width() * Camera.height() * Camera.bytesPerPixel());
  mqtt.begin("127.0.0.1", 1883, WiFi);
  // mqtt.begin(WiFi); // Will connect to localhost
#else
  mqtt.begin(net);
#endif
  if (mqtt.connect("arduino", "public", "public")) {
    mqtt.subscribe("/smartcar/control/#", 1);
    mqtt.onMessage([](String topic, String message) {
      if (topic == "/smartcar/control/throttle") {
        if (canDriveForward && message.toInt() >= 0){
          car.setSpeed(message.toInt());
          } 
          
        if (canDriveBackwards && message.toInt() <= 0){
            car.setSpeed(message.toInt());
            }
        
            
      } else if (topic == "/smartcar/control/steering") {
        car.setAngle(message.toInt());
      } else {
        Serial.println(topic + " " + message);
      }
    });
  }

  
}

void loop() {
  
  if (mqtt.connected()) { //the car is stupid and drives when starting
    mqtt.loop();
    // const auto currentTime = millis();
    #ifdef __SMCE__
    const auto currentTime = millis();
    static auto previousFrame = 0UL;
    if (currentTime - previousFrame >= 65) {
      previousFrame = currentTime;
      Camera.readFrame(frameBuffer.data());
      mqtt.publish("/smartcar/camera", frameBuffer.data(), frameBuffer.size(),
                   false, 0);
    }
    #endif
  }
  autoStop();
  delay(35);

}

void autoStop(){
  int distance = front.getDistance();
  if(distance < 120 && distance > 0){ 
           if(canDriveForward){
                car.setSpeed(0);   
                canDriveForward = false;
                Serial.println("cannot drive frontward");
           }       
        }else{
           canDriveForward = true;
           Serial.println("can drive frontward");
          }
        Serial.println(front.getDistance());
  
  int backDistance = sideBackIR.getDistance();
  if(backDistance < 120 && backDistance > 0){ 
              if(canDriveBackwards){
                car.setSpeed(0);   
                canDriveBackwards = false;
                Serial.println("cannot drive backwards");
           }       
        }else{
           canDriveBackwards = true;
           Serial.println("can drive backwards");
          }
                
        }

