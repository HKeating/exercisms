var parse = function(str) {
  if (str.split(':').length > 1) {
    return str.split(':')[0];
  } else {
    var words = str.split(/(?=[A-Z])|\s|-/);
    var acronym = '';
    words.map(word => {
      acronym += word[0].toUpperCase();
    });
    return acronym;
  }
};

module.exports = {parse};
