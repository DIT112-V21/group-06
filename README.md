# group-06

## Demo Video
Here is our demo video showcasing our project, its possibilities and its features.
[Group-06 Demo Video](https://www.youtube.com/watch?v=GzjEKr8GAPo)

## Running The Application
To run the application you must have node.js installed.
https://nodejs.org/


### Starting the web app


1. Navigate to the project in two separate terminal windows.
2. Run the command npm install to install dependencies(first time only).
3. Run the command npm run frontend in one of the terminal windows.
4. And then run the command npm run backend in the other terminal.(OSX and Linux users might be able to launch by just using npm start in a single terminal but this is a more safe method)
5. Navigate to http://localhost:3000/ in a browser window.


### Starting SMCE
To connect with SMCE you should compile the sketch smartcar.ino which is in the folder arduino/smartcar/ in the project directory.
For further instruction visit the [SMCE repos wiki](https://github.com/ItJustWorksTM/smce-gd/wiki)

### Connecting SMCE with the web app
If you are running a local MQTT broker you should be ready to control the car as long as websockets are enabled on the broker.

otherwise you can add an address to a remote MQTT broker by changing from 127.0.0.1 in smartcar.ino and mqttcontroller.js

## What

We aim to deliver a remote delivery system that removes the need for person to person interaction during deliveries but also provides private deliveries between different persons for an acceptable price. The system would also open up for night time deliveries without much increased prices.

The goal is to be able to deliver all regularly delivered goods from packages to food.

## Why

During covid social distancing is important but there has also been an increase in online orders which equals more packages delivered which often leads to interactions with people that could have been avoided.

But other than the covid safety aspect it could help with lowering delivery costs by lowering the needed personnel to make deliveries.

Another aspect would be transports between people. Let's say that you forgot your phone charger while visiting a friend, now you would just be able to order a cheap delivery and have it delivered within a small amount of time.


Makes delivery faster, safer and more accessible for a wide range of different delivery situations. It could be food in the form of a normal lunch delivery or even medical supplies to a wounded truper on a battlefield.


## How

We are going to base the project on a web app, storing all data in a secure database.
The cars are going to be controlled by personnel on a remote location and in case of a disconnection the cars will fall back onto sensors to avoid collision while connection is regained.


Built with React, Javascript and C++.
With a PostgreSQL database and MQTT for communicating with the car.

## Project Structure

The sketch for the car resides in arduino\smartcar from the base of the project
and the yaml files for the CI are in .github\workflows.

The rest of the project resides in the src folder which we have split up in several folders;

\Backend contains the backend part of our project which is were we connect to our database 


\Components contains the GUI, the pages of the application and its smaller components.

\Css contains CSS belonging to the different components

The base of the src folder contains some business logic such as the MqttController which enables us to connect to the SMART car.






