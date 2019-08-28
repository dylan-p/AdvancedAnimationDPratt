
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x,y){
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
    this.x = mag.x;
    this.y = mag.y;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
    return Math.sqrt(Math.pow(this.x) + Math.pow(this.y);
 }
// Set the angle (direction) of the vector,

// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
    var mag = this.getMagnitude();
    var x2 = this.getMagnitude() / asin(angle);
    var y2 = this.getMagnitude() / asin(angle);
    this.x = this.x + x2;
    this.y = this.y + y2;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
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
  var new = new JSVector(v1.x + v2.x, v1.y + v2.y);
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
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {

}
