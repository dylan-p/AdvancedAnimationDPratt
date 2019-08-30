
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x,y){
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
    var x2 = mag * cos(this.getMagnitude())
    var y2 = mag * sin(this.getMagnitude())
    this.x = mag.x + x2;
    this.y = mag.y + y2;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2);
 }
// Set the angle (direction) of the vector,

// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
    var direction - this.getDirection();
    this.x = mag * Math.cos(direction);
    this.y = mag * Math.sin(direction);
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
    return Math.atan2(this.y, this.x);
}

//same thing but with degrees
JSVector.prototype.getDirectionDegrees = function(){
    var angle = Math.atan2(this.y, this.x);
    var degrees = 180*angle/Math.PI;
    return (360+Math.round(degrees))%360;
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
    this.x = this.x + v2.x;
    this.y = this.y + v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
    this.x = this.x - v2.x;
    this.y = this.y - v2.x;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  var jabberwocky = new JSVector(v1.x + v2.x, v1.y + v2.y);
  return jabberwocky;
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  v1.x = v1.x - v2.x;
  v1.y = v1.x - v2.x;
  return v1;
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
    this.x = this.x * scalar.x;
    this.y = this.x * scalar.y;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
    this.x = this.x / scalar.x;
    this.y = this.x / scalar.y;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
    var placeHolder = this.getMagnitude();
    this.x = this.x/placeHolder;
    this.y = this.y/placeHolder;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
    if(this.getMagnitude() > lim){
      this.x = lim.x;
      this.y = lim.y;
    }
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
    var a = v1.x - v2.x;
    var b = v1.y - v2.y;
    var c = Math.sqrt( a*a + b*b );
    return c;
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  var a = v1.x - v2.x;
  var b = v1.y - v2.y;
  return a*a + b*b;
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {
  var rotate = this.getDirection(angle) + angle;
  this.setDirection(rotate);
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
    return this.getDirection() - v2.getDirection();
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
    var new = new JSVector(v1.x, v1.y);
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
    return "The x is" + this.x + ", the y is" + this.y + ", the magnitude is " + this.getMag();
}
