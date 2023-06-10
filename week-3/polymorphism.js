class Bird {
  useWings() {
    console.log('Flying!');
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log('Flying like an eagle');
  }
}

class Penguin extends Bird {
  useWings() {
    console.log('Swimming');
  }
}

var eagle = new Eagle();
var penguin = new Penguin();
eagle.useWings(); // Flying! Flying like an eagle
penguin.useWings(); // Swimming