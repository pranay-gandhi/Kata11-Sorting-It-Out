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

        add(5) = [2, 3, 5]
        for each in the current array, take away the new number from i, so
        2 - 5 = -3,
        3 - 5, -2.
        The smallest result indicates the closest position?

    */
  }
}

const rack = new Rack([2, 3]);
rack.showBalls();
