var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.match(/^\s*$/)) {
    return 'Fine. Be that way!';
  } else if (input === input.toUpperCase() && input.match(/[a-z]/gi)) {
    return 'Whoa, chill out!';
  } else if (input.match(/\?$/g)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
