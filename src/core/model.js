/*!
 * 
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

(function(window){
  var Model = function() {
    return Model.Base.create(arguments[0]);
  };
  var Model_TYPE_ALL = '1';
  var Model_TYPE_PROPERTY = '2';
  var Model_TYPE_METHOD = '3';

  
  

  /**
   * Checks if a value is of the type supplied.
   * Throws a TypeError exception if value is not of the type supplied.
   *
   * @param {Object} value The object to type-check.
   * @param {String} type The type to check against.
   * @returns {Void}
   */
  function typeCheck(value, type) {
    if(typeof value != type) {
      throw new TypeError('Invalid type');
    }
  }

  /**
   * Returns the base class of Model objects
   * Throws a TypeError exception if value is not of the type supplied.
   
   * @returns {Object}
   */
  function getModelBase() {
    return {
      extend: {},
      init : function () {}
    };
  }

  /**
   * Checks is an object has a property defined
   *
   * @returns {Boolean}
   */
  function hasOwnProperty(obj, prop){
    return (typeof(obj[prop]) !== 'undefined');
  }

  /**
   * Applies the proprties of one object to another
   *
   *
   * @param {Object} destination The destination object to which the properties will be applied to.
   * @param {Object} source The source object to which the properties will be applied from.
   * @returns {Object} The destination with the new properties.
   */
  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  Model.Base = (function(){
    function factory() {
      return function() {
        this.init.apply(this, arguments);
      };
    }

    /**
     * Creates a model using 'arguments'.
     *
     * @returns {Object} The new model
     */
    function create() {
      protoType = arguments[0];
      var object = factory();
      object.prototype = {};
      object.prototype.constructor = object;
      if( !Model.Type.isSet(protoType.init) ) {
        protoType.init = function(){};
      }
      if( Model.Type.isSet(protoType.extend) ) {
        object.prototype.$super = protoType.extend.prototype;
        extend(object.prototype, protoType.extend.prototype, Model_TYPE_ALL);
      } else {
        object.prototype.$super = getModelBase();
        extend(object.prototype, object.prototype.$super, Model_TYPE_ALL);
      }
      extend(object.prototype, protoType, Model_TYPE_ALL);
      return object;
    }

    /**
     * Clones a model using the deep copy technique.
     *
     * @param {Object} context The object that this will be referenced to.
     * @returns {Object} The cloned model
     */
    function clone(context) {
      var object = context || this;
      if(typeof(object) != 'object')
        return object;
      var temp = {}; 
      for(var key in object) {
        temp[key] = clone(object[key]);
      }
      return temp;
    }

    /**
     * Extend a model properties from a list of arguments.
     *
     * @param {Object} object object to extend arguments to.
     * @param {Array} args arguments to add to object.
     * @param {String} type The of properties to extend ie. (Function, mehod, all).
     * @returns {Object} The extended model.
     */
    function extend(object, args, type) {
      for (var method in args) {
        if(method != 'constructor' && method != '$super' && method != 'extend') {
          if(type == Model_TYPE_ALL) {
            object[method] = args[method];
          }
          else if(type == Model_TYPE_METHOD && (typeof args[method] == 'function')) {
            object[method] = args[method];
          }
          else if(type == Model_TYPE_PROPERTY && (typeof args[method] != 'function')) {
            object[method] = args[method];
          }
        }
      }
      return object.prototype;
    }

    function _properties() {
      //TODO: Implement
    }

    function _methods() {
      //TODO: Implement
    }

    return {
      create: create
    };
  })();

  Model.Enumerable = (function(){
    function toArray(args) {
      var length = args.length;
      var result = new Array(length);
      for( var i = 0; i < length; i++ ) {
        result[i] = args[i];
      }
      return result;
    }

    function map(enumerable, callback) {
      if(!isArray(enumerable)) {
        throw new TypeError();
      }
      for(var i = 0; i < enumerable.length; i++) {
        enumerable[i] = callback(enumerable[i]);
      }
      return enumerable;
    }

    function isArray(object) {
      return Array.isArray(object);
    }

    return {
      toArray:  toArray,
      map:      map,
      isArray:  isArray
    };
  })();

  Model.Type = (function(){
    function isSet(object) {
       return typeof object !== "undefined" && object !== null;
    }

    function typeName(object) {
      return typeof object;
    }

    function isNumeric(object) {
      return !!(!isNaN(object));
    }

    extend(Model, {
      isSet:      isSet,
      typeName:   typeName,
      isNumeric:  isNumeric
    });

    return {
      isSet:      isSet,
      typeName:   typeName,
      isNumeric:  isNumeric
    };
  })();

  Model.Func = (function(){
    function clone(object) {
      if(typeof(object) != 'object' || typeof(object) != 'function' || Array.isArray(object))
        return object;
      var temp = {}; 
      for(var key in object) {
        temp[key] = clone(object[key]);
      }
      return temp;
    }

    extend(Model, {
      clone: clone
    });
    return {
    clone: clone
    };
  })();

  Model.Event = (function() {
    var DOMReadyCallbacks = [];
    var events = {};

    function _domLoadedListner() {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', _domLoadedListner, false);
        _ready();
      } else {
        if (document.readyState === 'complete') {
          document.detachEvent('onreadystatechange', _domLoadedListner);
          _ready();
        }
      }
    }

    function _ready() {
      for (var i = 0; i < DOMReadyCallbacks.length; i++) {
        DOMReadyCallbacks[i]();
      }
      DOMReadyCallbacks.clear();
    }

    function _initReady() {
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', _domLoadedListner, false);
      } else {
        document.onreadystatechange = _domLoadedListner;
        window.onload = _ready;
      }
    }

    function _setHandler(element, callback){
      return function(){
        callback.call(element, window.event);
      };
    }

    function _stop(event) {
      event.preventDefault(event);
      event.stopPropagation(event);
    }

    events = {
      ready: function(callback) {
        _initReady();
        DOMReadyCallbacks.push(callback);
      },

      fire: function(element, event) {
        if (document.createEventObject) {
          var eventObject = document.createEventObject();
          return element.fireEvent('on' + event, eventObject);
        } else {
          var eventObject = document.createEvent('HTMLEvents');
          eventObject.initEvent(event, true, true );
          return !element.dispatchEvent(eventObject);
        }
      },

      add: function(element, event, callback, useCapture) {
        useCapture = useCapture || false;
        if(element.attachEvent) {
          element[event + callback] = _setHandler(element, callback);
          element.attachEvent('on' + event, element[event + callback]);
        } else {
          element.addEventListener(event, callback, useCapture);
        }
      },

      remove: function(element, event, callback, useCapture) {
        useCapture = useCapture || false;
        if(element.detachEvent) {
          element.detachEvent('on' + event, element[event + callback]);
          element[event + callback] = null;
        } else {
          element.removeEventListener(event, callback, useCapture);
        }
      }
    };

    elements = {
      fire: function(event) {
        events.fire(this, event);
      },

      add: function(event, callback, useCapture) {
        events.add(this, event, callback, useCapture);
      },

      remove: function(event, callback, useCapture) {
        events.remove(this, event, callback, useCapture);
      }
    };

    extend(Element.prototype, {
      fire:         elements.fire,
      oberve:       elements.add,
      stopOberving: elements.remove});

    return {
      ready:        events.ready,
      fire:         events.fire,
      oberve:       events.add,
      stopOberving: events.remove
    };

  })();

  if(!window.$model || !window.Model){window.$model=Model;window.Model=Model;}
})(window);