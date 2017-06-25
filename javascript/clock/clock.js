var at = function(hrs, mins) {

  var date = new Date();
  date = new Date(date.setHours(hrs,mins || 0,0,0));
  var hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  var minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

  return hours + ':' + minutes;
};

String.prototype.plus = function(minutes) {
  var hrs = parseInt(this.split(':')[0]);
  var mins = parseInt(this.split(':')[1]);
  return at(hrs, (mins + minutes));
};
String.prototype.minus = function(minutes) {
  var hrs = parseInt(this.split(':')[0]);
  var mins = parseInt(this.split(':')[1]);
  return at(hrs, (mins - minutes));
};
String.prototype.equals = function(comp) {
  return this.toString() === comp;
};

module.exports = { at };
