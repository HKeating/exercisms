var ETL = function() {};

ETL.prototype.transform = function(data) {
  var dataObj = {};
  Object.keys(data).map(key => {
    for (var i = 0; i < data[key].length; i++) {
      dataObj[(data[key][i]).toLowerCase()] = parseInt(key);
    }
  });
  return dataObj;
};

module.exports = ETL;
