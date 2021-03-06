;(function(window, exports) {
  var C = {};
  
  appendToNamespace("Clusterfoo", "xhr", C);
  
  function appendToNamespace(namespace, elementName, elementValue) {
    if (typeof window[namespace] === "object") {
      window[namespace][elementName] = elementValue;
    }
    var oldNamespaceFunction = function(){};
    if (typeof window[namespace] == "function") {
      oldNamespaceFunction = window[namespace];
    }
    if (typeof window[namespace] !== "object") {
      window[namespace] = function() {
        window[namespace] = {};
        oldNamespaceFunction();
        window[namespace][elementName] = elementValue;
      }
    }
  }

  ////
  // Requests handler.
  //
  // Usage:
  //
  //  XHR = new turboPowerXHRHandler2000("serverURI");
  //  XHR.post(...);
  //  XHR.get(...);

  exports.handler = C.handler = turboPowerXHRHandler2000;
  function turboPowerXHRHandler2000(serverURI) {
    // Instance Methods

    this.get = function(path, fn) { doXHR("GET", path, fn); };
    this.post = function(path, body, fn) { doXHR("POST", path, body, fn); };

    // Private

    // Do an XHR request to the NOAD server.
    //
    // Params:
    //  - method: [string]
    //  - path: [string] ex: "/users"
    //  - body: [object] (optional)
    //  - fn: [function(string, object)] Do something with response object.
    //        String is err, object is response. Err is optional.
    function doXHR(method, path, body, fn) {
      if (typeof body == "function") fn = body;
      if (!!body) body = JSON.stringify(body);

      var req = new XMLHttpRequest();
      req.open(method, serverURI + path, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(body);

      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
          fn(null, req.responseText);
        } else if (req.readyState == 4) {
          var err = req.response;
          fn(err);
        }
      }
    }
  }
})(typeof window !== "undefined" ? window : {},
   typeof exports !== "undefined" ? exports : {});
