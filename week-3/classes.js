class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }

  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    console.log(Object.getPrototypeOf(this));
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status: ', this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    console.log('Lights are 100% operational');
  }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train { color: 'red', lightsOn: false }
var mysecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
var train4 = new Train('red', false);
train4.toggleLights();  // undefined
train4.lightStatus(); // Lights on? true
train4.getSelf(); // Train { color: 'red', lightsOn: true }
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train ('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); // undefined
train5.lightStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights are 100% operational