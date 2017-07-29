var List = function(arr) {
  this.list = arr;
};

List.prototype.compare = function(list2) {
  if (!this.list && !list2.list) {
    return 'EQUAL';
  } else if (!this.list && list2.list) {
    return 'SUBLIST';
  } else if (this.list && !list2.list) {
    return 'SUPERLIST';
  } else if (this.list.length === list2.list.length) {
    return checkEquality(this.list, list2.list) ? 'EQUAL': 'UNEQUAL';
  } else if (this.list.length < list2.list.length) {
    return checkSublist(this.list, list2.list) ? 'SUBLIST': 'UNEQUAL';
  } else if (this.list.length > list2.list.length) {
    return checkSublist(list2.list, this.list) ? 'SUPERLIST': 'UNEQUAL';
  }
};

var checkEquality = function(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

var checkSublist = function (arr1, arr2) {
  const testLength = arr1.length;
  for (var i = 0; i < arr2.length - (testLength-1); i++) {
    const testArr = [];
    for (var j = 0; j < testLength; j++) {
      testArr.push(arr2[i+j]);
    }
    if (checkEquality(arr1, testArr)) return true;
  }
};

module.exports = List;
