/**
   * The MDN implementation of the Object keys function
   *
   * Returns all the key values found in an object.
   *
   * @param {Number} target The element to locate within the array.
   * @returns {Array}
   */
  Object.keys = Object.keys || function(obj) {
    if (obj !== Object(obj))
      throw new TypeError('Object.keys called on non-object');
    var result = [];
    var property;
    for(property in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, property))
        result.push(property);
    }
    return result;
  };