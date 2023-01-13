//Javascript
//Function prototype ---vanilla javascript way
//Classes out of the box  --- ES2015 class keyword

class Rack {
  constructor(balls = []) {
    this.balls = balls;
  }
  showBalls() {
    console.log(this.balls);
  }

  add(ball) {
    //add the ball into balls array in ascending order
    /*
                []                 
        20 --> [20]
        

    
    */
  }
}

const rack = new Rack([2, 3]);
rack.showBalls();
