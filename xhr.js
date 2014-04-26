;(function(window, exports) {
  var C = {};
  if (typeof Clusterfoo === "object") Clusterfoo.xhr = C;

  // Namespace your shit, people.
  //
  // Usage:
  //
  // To initialize this  the user may call the `Clusterfoo()` function,
  // which will make `Clusterfoo.cookies` available globally.
  if (typeof window.Clusterfoo !== "object") {
    window.Clusterfoo = function() {
      window.Clusterfoo = {};
      Clusterfoo.xhr = C;
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
          var resObj = JSON.parse(req.responseText);
          fn(null, resObj);
        } else if (req.readyState == 4) {
          var res = req.response;
          var err = req.response;
          if (isJsonString(res)) err = JSON.parse(res).error;
          fn(err);
        }
      }
    }
  }
})(typeof window !== "undefined" ? window : {},
   typeof exports !== "undefined" ? exports : {});
