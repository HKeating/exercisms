var PhoneNumber = function(number) {
  this.input = number;
  this.number = function() {
    var cleaned = this.input.replace(/[-'`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/\s]/gi, '');
    return cleaned.length === 10 ? cleaned : cleaned.length === 11 && cleaned[0] === '1' ? cleaned.substring(1) : '0000000000';
  };

  this.areaCode = function() {
    return this.number().slice(0, 3);
  };

  this.toString = function() {
    return `(${this.areaCode()}) ${this.number().slice(3, 6)}-${this.number().slice(6, 10)}`;
  };
};

module.exports = PhoneNumber;
