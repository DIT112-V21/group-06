#include <Smartcar.h>

ArduinoRuntime arduinoRuntime;
BrushedMotor leftMotor(arduinoRuntime, smartcarlib::pins::v2::leftMotorPins);
BrushedMotor rightMotor(arduinoRuntime, smartcarlib::pins::v2::rightMotorPins);
DifferentialControl control(leftMotor, rightMotor);

// const int frontPin = 0;
// GP2Y0A02 sideFrontIR(arduinoRuntime,
//                     frontPin); 

const int backPin = 3;
GP2Y0A02 sideBackIR(arduinoRuntime,
                    backPin); 

const int TRIGGER_PIN           = 6; // D6
const int ECHO_PIN              = 7; // D7
const unsigned int MAX_DISTANCE = 2000;
SR04 front(arduinoRuntime, TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);


SimpleCar car(control);

void setup()
{
    Serial.begin(9600);
    Serial.setTimeout(200);
}

void loop()
{
    handleInput();
    autoStop();
    delay(100);
   
}

void handleInput()
{
    // handle serial input if there is any
    if (Serial.available())
    {
        String input = Serial.readStringUntil('\n');
        if (input.startsWith("m"))
        {
            int throttle = input.substring(1).toInt(); 
            car.setSpeed(throttle);
        }
        else if (input.startsWith("t"))
        {
            int deg = input.substring(1).toInt();
            car.setAngle(deg);
        }
        
        
    }
   
}

void autoStop(){
  
  if(front.getDistance() < 1000 && front.getDistance() > 0){ 
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
