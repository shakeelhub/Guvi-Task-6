//Question 1
//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    
        
    }
}

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.  

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        const getPG = (movieArray) => {
            return movieArray.filter(movie => movie.rating === "PG");
        }
    }
}

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

//Question 2
// Convert the UML diagram to Javascript class. - use number for double
// Circle 
// -radius:double = 1.0
// -color: String="red"
// +Circle()
// +Circle(radius:double)
// +Circle(radius:double, color:String)
// +getRadius(): double
// +setRadius (radius:double):void
// +getColor(): String
// +setColor(color:String):void
// +toString(): String
// +getArea(): double
// +getCircumference():double
// "Circle[radius=?,color=?]"

class Circle {
    constructor(radius = 1.0, color= "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius(){
      return this.radius;
    }
  
    setRadius(radius){
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color){
      this.color = color;
    }
  
    getArea(){
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference(){
      return 2 * Math.PI * this.radius;
    }
  
    toString(){
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  }
  
  //Example case
  const circle1 = new Circle(2.5, "blue");
  console.log(`Radius: ${circle1.getRadius()}`); // Output: Radius: 2.5
  console.log(`Color: ${circle1.getColor()}`);   // Output: Color: blue




//Question 3
//Write a “person” class to hold all the details.

class Person {
    constructor(first_name, last_name, age, gender, email, phone_number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone_number = phone_number;
    }
}


//Question 4
//write a class to calculate the uber price.
class UberPriceCalculator {
    constructor(distanceInMiles, timeInMinutes) {
        this.distanceInMiles = distanceInMiles;
        this.timeInMinutes = timeInMinutes;
    }

    calculateFare() {
        const BASE_FARE = 2.0;
        const PER_MINUTE_RATE = 0.15;
        const PER_MILE_RATE = 0.75;

        const fare = BASE_FARE + (PER_MINUTE_RATE * this.timeInMinutes) + (PER_MILE_RATE * this.distanceInMiles);
        return fare;
    }
}

//Using this class 
const distance = 5.3;   // in miles
const time = 15;        // in minutes

const ride = new UberPriceCalculator(distance, time);
const totalFare = ride.calculateFare();
console.log(`Uber fare for ${distance} miles in ${time} minutes: $${totalFare.toFixed(2)}`);