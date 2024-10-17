enable=all
source-path=SCRIPTDIR
disable=SC2154
disable=SC1090
disable=SC1091
"use strict";

module.exports = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                    sortAttrs: true,
                    removeOffCanvasPaths: true
                }
            }
        }
    ]
};
TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {$
  var self = this;$
  var placeholder = {};$
  self.sockets.push(placeholder);$
$
  var connectOptions = mergeOptions({}, self.proxyOptions, {$
    method: 'CONNECT',$
    path: options.host + ':' + options.port,$
    agent: false,$
    headers: {$
      host: options.host + ':' + options.port$
    }$
  });$
  if (options.localAddress) {$
    connectOptions.localAddress = options.localAddress;$
  }$
  if (connectOptions.proxyAuth) {$
    connectOptions.headers = connectOptions.headers || {};$
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +$
        new Buffer(connectOptions.proxyAuth).toString('base64');$
  }$
$
  debug('making CONNECT request');$
  var connectReq = self.request(connectOptions);$
  connectReq.useChunkedEncodingByDefault = false; // for v0.6$
  connectReq.once('response', onResponse); // for v0.6$
  connectReq.once('upgrade', onUpgrade);   // for v0.6$
  connectReq.once('connect', onConnect);   // for v0.7 or later$
  connectReq.once('error', onError);$
  connectReq.end();$
$
  function onResponse(res) {$
    // Very hacky. This is necessary to avoid http-parser leaks.$
    res.upgrade = true;$
  }$
$
  function onUpgrade(res, socket, head) {$
    // Hacky.$
    process.nextTick(function() {$
      onConnect(res, socket, head);$
    });$
  }$
$
  function onConnect(res, socket, head) {$
    connectReq.removeAllListeners();$
    socket.removeAllListeners();$
$
    if (res.statusCode !== 200) {$
      debug('tunneling socket could not be established, statusCode=%d',$
        res.statusCode);$
      socket.destroy();$
      var error = new Error('tunneling socket could not be established, ' +$
        'statusCode=' + res.statusCode);$
      error.code = 'ECONNRESET';$
      options.request.emit('error', error);$
      self.removeSocket(placeholder);$
      return;$
    }$
    if (head.length > 0) {$
      debug('got illegal response body from proxy');$
      socket.destroy();$
      var error = new Error('got illegal response body from proxy');$
      error.code = 'ECONNRESET';$
      options.request.emit('error', error);$
      self.removeSocket(placeholder);$
      return;$
    }$
    debug('tunneling connection has established');$
    self.sockets[self.sockets.indexOf(placeholder)] = socket;$
    return cb(socket);$
  }$
$
  function onError(cause) {$
    connectReq.removeAllListeners();$
$
    debug('tunneling socket could not be established, cause=%s\n',$
          cause.message, cause.stack);$
    var error = new Error('tunneling socket could not be established, ' +$
                          'cause=' + cause.message);$
    error.code = 'ECONNRESET';$
    options.request.emit('error', error);$
    self.removeSocket(placeholder);$
  }$
};$
$
TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {$
  var pos = this.sockets.indexOf(socket)$
  if (pos === -1) {$
    return;$
  }$
  this.sockets.splice(pos, 1);$
$
  var pending = this.requests.shift();$
  if (pending) {$
    // If we have pending requests and a socket gets closed a new one$
    // needs to be created to take over in the pool for the one that closed.$
    this.createSocket(pending, function(socket) {$
      pending.request.onSocket(socket);$
    });$
  }$
};$
$
function createSecureSocket(options, cb) {$
  var self = this;$
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {$
    var hostHeader = options.request.getHeader('host');$
    var tlsOptions = mergeOptions({}, self.options, {$
      socket: socket,$
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host$
    });$
$
    // 0 is dummy port for v0.6$
    var secureSocket = tls.connect(0, tlsOptions);$
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;$
    cb(secureSocket);$
  });$
}$
$
$
function toOptions(host, port, localAddress) {$
  if (typeof host === 'string') { // since v0.10$
    return {$
      host: host,$
      port: port,$
      localAddress: localAddress$
    };$
  }$
  return host; // for v0.11 or later$
}$
$
function mergeOptions(target) {$
  for (var i = 1, len = arguments.length; i < len; ++i) {$
    var overrides = arguments[i];$
    if (typeof overrides === 'object') {$
      var keys = Object.keys(overrides);$
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {$
        var k = keys[j];$
        if (overrides[k] !== undefined) {$
          target[k] = overrides[k];$
        }$
      }$
    }$
  }$
  return target;$
}$
$
$
var debug;$
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {$
  debug = function() {$
    var args = Array.prototype.slice.call(arguments);$
    if (typeof args[0] === 'string') {$
      args[0] = 'TUNNEL: ' + args[0];$
    } else {$
      args.unshift('TUNNEL:');$
    }$
    console.error.apply(console, args);$
  }$
} else {$
  debug = function() {};$
}$
exports.debug = debug; // for test$
$
$
/***/ }),$
$
/***/ 5840:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
Object.defineProperty(exports, "v1", ({$
  enumerable: true,$
  get: function () {$
    return _v.default;$
  }$
}));$
Object.defineProperty(exports, "v3", ({$
  enumerable: true,$
  get: function () {$
    return _v2.default;$
  }$
}));$
Object.defineProperty(exports, "v4", ({$
  enumerable: true,$
  get: function () {$
    return _v3.default;$
  }$
}));$
Object.defineProperty(exports, "v5", ({$
  enumerable: true,$
  get: function () {$
    return _v4.default;$
  }$
}));$
Object.defineProperty(exports, "NIL", ({$
  enumerable: true,$
  get: function () {$
    return _nil.default;$
  }$
}));$
Object.defineProperty(exports, "version", ({$
  enumerable: true,$
  get: function () {$
    return _version.default;$
  }$
}));$
Object.defineProperty(exports, "validate", ({$
  enumerable: true,$
  get: function () {$
    return _validate.default;$
  }$
}));$
Object.defineProperty(exports, "stringify", ({$
  enumerable: true,$
  get: function () {$
    return _stringify.default;$
  }$
}));$
Object.defineProperty(exports, "parse", ({$
  enumerable: true,$
  get: function () {$
    return _parse.default;$
  }$
}));$
$
var _v = _interopRequireDefault(__nccwpck_require__(8628));$
$
var _v2 = _interopRequireDefault(__nccwpck_require__(6409));$
$
var _v3 = _interopRequireDefault(__nccwpck_require__(5122));$
$
var _v4 = _interopRequireDefault(__nccwpck_require__(9120));$
$
var _nil = _interopRequireDefault(__nccwpck_require__(5332));$
$
var _version = _interopRequireDefault(__nccwpck_require__(1595));$
$
var _validate = _interopRequireDefault(__nccwpck_require__(6900));$
$
var _stringify = _interopRequireDefault(__nccwpck_require__(8950));$
$
var _parse = _interopRequireDefault(__nccwpck_require__(2746));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
/***/ }),$
$
/***/ 4569:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _crypto = _interopRequireDefault(__nccwpck_require__(6113));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function md5(bytes) {$
  if (Array.isArray(bytes)) {$
    bytes = Buffer.from(bytes);$
  } else if (typeof bytes === 'string') {$
    bytes = Buffer.from(bytes, 'utf8');$
  }$
$
  return _crypto.default.createHash('md5').update(bytes).digest();$
}$
$
var _default = md5;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 5332:$
/***/ ((__unused_webpack_module, exports) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
var _default = '00000000-0000-0000-0000-000000000000';$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 2746:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _validate = _interopRequireDefault(__nccwpck_require__(6900));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function parse(uuid) {$
  if (!(0, _validate.default)(uuid)) {$
    throw TypeError('Invalid UUID');$
  }$
$
  let v;$
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............$
$
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;$
  arr[1] = v >>> 16 & 0xff;$
  arr[2] = v >>> 8 & 0xff;$
  arr[3] = v & 0xff; // Parse ........-####-....-....-............$
$
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;$
  arr[5] = v & 0xff; // Parse ........-....-####-....-............$
$
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;$
  arr[7] = v & 0xff; // Parse ........-....-....-####-............$
$
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;$
  arr[9] = v & 0xff; // Parse ........-....-....-....-############$
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)$
$
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;$
  arr[11] = v / 0x100000000 & 0xff;$
  arr[12] = v >>> 24 & 0xff;$
  arr[13] = v >>> 16 & 0xff;$
  arr[14] = v >>> 8 & 0xff;$
  arr[15] = v & 0xff;$
  return arr;$
}$
$
var _default = parse;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 814:$
/***/ ((__unused_webpack_module, exports) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 807:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = rng;$
$
var _crypto = _interopRequireDefault(__nccwpck_require__(6113));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate$
$
let poolPtr = rnds8Pool.length;$
$
function rng() {$
  if (poolPtr > rnds8Pool.length - 16) {$
    _crypto.default.randomFillSync(rnds8Pool);$
$
    poolPtr = 0;$
  }$
$
  return rnds8Pool.slice(poolPtr, poolPtr += 16);$
}$
$
/***/ }),$
$
/***/ 5274:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _crypto = _interopRequireDefault(__nccwpck_require__(6113));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function sha1(bytes) {$
  if (Array.isArray(bytes)) {$
    bytes = Buffer.from(bytes);$
  } else if (typeof bytes === 'string') {$
    bytes = Buffer.from(bytes, 'utf8');$
  }$
$
  return _crypto.default.createHash('sha1').update(bytes).digest();$
}$
$
var _default = sha1;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 8950:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _validate = _interopRequireDefault(__nccwpck_require__(6900));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
/**$
 * Convert array of 16 byte values to UUID string format of the form:$
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX$
 */$
const byteToHex = [];$
$
for (let i = 0; i < 256; ++i) {$
  byteToHex.push((i + 0x100).toString(16).substr(1));$
}$
$
function stringify(arr, offset = 0) {$
  // Note: Be careful editing this code!  It's been tuned for performance$
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434$
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one$
  // of the following:$
  // - One or more input array values don't map to a hex octet (leading to$
  // "undefined" in the uuid)$
  // - Invalid input values for the RFC `version` or `variant` fields$
$
  if (!(0, _validate.default)(uuid)) {$
    throw TypeError('Stringified UUID is invalid');$
  }$
$
  return uuid;$
}$
$
var _default = stringify;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 8628:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _rng = _interopRequireDefault(__nccwpck_require__(807));$
$
var _stringify = _interopRequireDefault(__nccwpck_require__(8950));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
// **`v1()` - Generate time-based UUID**$
//$
// Inspired by https://github.com/LiosK/UUID.js$
// and http://docs.python.org/library/uuid.html$
let _nodeId;$
$
let _clockseq; // Previous uuid creation time$
$
$
let _lastMSecs = 0;$
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details$
$
function v1(options, buf, offset) {$
  let i = buf && offset || 0;$
  const b = buf || new Array(16);$
  options = options || {};$
  let node = options.node || _nodeId;$
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not$
  // specified.  We do this lazily to minimize issues related to insufficient$
  // system entropy.  See #189$
$
  if (node == null || clockseq == null) {$
    const seedBytes = options.random || (options.rng || _rng.default)();$
$
    if (node == null) {$
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)$
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];$
    }$
$
    if (clockseq == null) {$
      // Per 4.2.2, randomize (14 bit) clockseq$
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;$
    }$
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,$
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so$
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'$
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.$
$
$
  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock$
  // cycle to simulate higher resolution clock$
$
  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)$
$
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression$
$
  if (dt < 0 && options.clockseq === undefined) {$
    clockseq = clockseq + 1 & 0x3fff;$
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new$
  // time interval$
$
$
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {$
    nsecs = 0;$
  } // Per 4.2.1.2 Throw error if too many uuids are requested$
$
$
  if (nsecs >= 10000) {$
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");$
  }$
$
  _lastMSecs = msecs;$
  _lastNSecs = nsecs;$
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch$
$
  msecs += 12219292800000; // `time_low`$
$
  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;$
  b[i++] = tl >>> 24 & 0xff;$
  b[i++] = tl >>> 16 & 0xff;$
  b[i++] = tl >>> 8 & 0xff;$
  b[i++] = tl & 0xff; // `time_mid`$
$
  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;$
  b[i++] = tmh >>> 8 & 0xff;$
  b[i++] = tmh & 0xff; // `time_high_and_version`$
$
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version$
$
  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)$
$
  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`$
$
  b[i++] = clockseq & 0xff; // `node`$
$
  for (let n = 0; n < 6; ++n) {$
    b[i + n] = node[n];$
  }$
$
  return buf || (0, _stringify.default)(b);$
}$
$
var _default = v1;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 6409:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _v = _interopRequireDefault(__nccwpck_require__(5998));$
$
var _md = _interopRequireDefault(__nccwpck_require__(4569));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
const v3 = (0, _v.default)('v3', 0x30, _md.default);$
var _default = v3;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 5998:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = _default;$
exports.URL = exports.DNS = void 0;$
$
var _stringify = _interopRequireDefault(__nccwpck_require__(8950));$
$
var _parse = _interopRequireDefault(__nccwpck_require__(2746));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function stringToBytes(str) {$
  str = unescape(encodeURIComponent(str)); // UTF8 escape$
$
  const bytes = [];$
$
  for (let i = 0; i < str.length; ++i) {$
    bytes.push(str.charCodeAt(i));$
  }$
$
  return bytes;$
}$
$
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';$
exports.DNS = DNS;$
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';$
exports.URL = URL;$
$
function _default(name, version, hashfunc) {$
  function generateUUID(value, namespace, buf, offset) {$
    if (typeof value === 'string') {$
      value = stringToBytes(value);$
    }$
$
    if (typeof namespace === 'string') {$
      namespace = (0, _parse.default)(namespace);$
    }$
$
    if (namespace.length !== 16) {$
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');$
    } // Compute hash of namespace and value, Per 4.3$
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =$
    // hashfunc([...namespace, ... value])`$
$
$
    let bytes = new Uint8Array(16 + value.length);$
    bytes.set(namespace);$
    bytes.set(value, namespace.length);$
    bytes = hashfunc(bytes);$
    bytes[6] = bytes[6] & 0x0f | version;$
    bytes[8] = bytes[8] & 0x3f | 0x80;$
$
    if (buf) {$
      offset = offset || 0;$
$
      for (let i = 0; i < 16; ++i) {$
        buf[offset + i] = bytes[i];$
      }$
$
      return buf;$
    }$
$
    return (0, _stringify.default)(bytes);$
  } // Function#name is not settable on some platforms (#270)$
$
$
  try {$
    generateUUID.name = name; // eslint-disable-next-line no-empty$
  } catch (err) {} // For CommonJS default export support$
$
$
  generateUUID.DNS = DNS;$
  generateUUID.URL = URL;$
  return generateUUID;$
}$
$
/***/ }),$
$
/***/ 5122:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _rng = _interopRequireDefault(__nccwpck_require__(807));$
$
var _stringify = _interopRequireDefault(__nccwpck_require__(8950));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function v4(options, buf, offset) {$
  options = options || {};$
$
  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`$
$
$
  rnds[6] = rnds[6] & 0x0f | 0x40;$
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided$
$
  if (buf) {$
    offset = offset || 0;$
$
    for (let i = 0; i < 16; ++i) {$
      buf[offset + i] = rnds[i];$
    }$
$
    return buf;$
  }$
$
  return (0, _stringify.default)(rnds);$
}$
$
var _default = v4;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 9120:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _v = _interopRequireDefault(__nccwpck_require__(5998));$
$
var _sha = _interopRequireDefault(__nccwpck_require__(5274));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
const v5 = (0, _v.default)('v5', 0x50, _sha.default);$
var _default = v5;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 6900:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _regex = _interopRequireDefault(__nccwpck_require__(814));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function validate(uuid) {$
  return typeof uuid === 'string' && _regex.default.test(uuid);$
}$
$
var _default = validate;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 1595:$
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {$
$
"use strict";$
$
$
Object.defineProperty(exports, "__esModule", ({$
  value: true$
}));$
exports["default"] = void 0;$
$
var _validate = _interopRequireDefault(__nccwpck_require__(6900));$
$
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }$
$
function version(uuid) {$
  if (!(0, _validate.default)(uuid)) {$
    throw TypeError('Invalid UUID');$
  }$
$
  return parseInt(uuid.substr(14, 1), 16);$
}$
$
var _default = version;$
exports["default"] = _default;$
$
/***/ }),$
$
/***/ 9491:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("assert");$
$
/***/ }),$
$
/***/ 6113:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("crypto");$
$
/***/ }),$
$
/***/ 2361:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("events");$
$
/***/ }),$
$
/***/ 7147:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("fs");$
$
/***/ }),$
$
/***/ 3685:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("http");$
$
/***/ }),$
$
/***/ 5687:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("https");$
$
/***/ }),$
$
/***/ 1808:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("net");$
$
/***/ }),$
$
/***/ 2037:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("os");$
$
/***/ }),$
$
/***/ 1017:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("path");$
$
/***/ }),$
$
/***/ 2781:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("stream");$
$
/***/ }),$
$
/***/ 4404:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("tls");$
$
/***/ }),$
$
/***/ 3837:$
/***/ ((module) => {$
$
"use strict";$
module.exports = require("util");$
$
/***/ })$
$
/******/ ^I});$
/************************************************************************/$
/******/ ^I// The module cache$
/******/ ^Ivar __webpack_module_cache__ = {};$
/******/ ^I$
/******/ ^I// The require function$
/******/ ^Ifunction __nccwpck_require__(moduleId) {$
/******/ ^I^I// Check if module is in cache$
/**
 * @fileoverview Main CLI that is run via the eslint command.
 * @author Nicholas C. Zakas
 */

/* eslint no-console:off -- CLI */

"use strict";

// must do this initialization *before* other requires in order to work
if (process.argv.includes("--debug")) {
    require("debug").enable("eslint:*,-eslint:code-path,eslintrc:*");
}

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Read data from stdin til the end.
 *
 * Note: See
 * - https://github.com/nodejs/node/blob/master/doc/api/process.md#processstdin
 * - https://github.com/nodejs/node/blob/master/doc/api/process.md#a-note-on-process-io
 * - https://lists.gnu.org/archive/html/bug-gnu-emacs/2016-01/msg00419.html
 * - https://github.com/nodejs/node/issues/7439 (historical)
 *
 * On Windows using `fs.readFileSync(STDIN_FILE_DESCRIPTOR, "utf8")` seems
 * to read 4096 bytes before blocking and never drains to read further data.
 *
 * The investigation on the Emacs thread indicates:
 *
 * > Emacs on MS-Windows uses pipes to communicate with subprocesses; a
 * > pipe on Windows has a 4K buffer. So as soon as Emacs writes more than
 * > 4096 bytes to the pipe, the pipe becomes full, and Emacs then waits for
 * > the subprocess to read its end of the pipe, at which time Emacs will
 * > write the rest of the stuff.
 * @returns {Promise<string>} The read text.
 */
function readStdin() {
    return new Promise((resolve, reject) => {
        let content = "";
        let chunk = "";

        process.stdin
            .setEncoding("utf8")
            .on("readable", () => {
                while ((chunk = process.stdin.read()) !== null) {
                    content += chunk;
                }
            })
            .on("end", () => resolve(content))
            .on("error", reject);
    });
}

/**
 * Get the error message of a given value.
 * @param {any} error The value to get.
 * @returns {string} The error message.
 */
function getErrorMessage(error) {

    // Lazy loading because this is used only if an error happened.
    const util = require("node:util");

    // Foolproof -- third-party module might throw non-object.
    if (typeof error !== "object" || error === null) {
        return String(error);
    }

    // Use templates if `error.messageTemplate` is present.
    if (typeof error.messageTemplate === "string") {
        try {
            const template = require(`../messages/${error.messageTemplate}.js`);

            return template(error.messageData || {});
        } catch {

            // Ignore template error then fallback to use `error.stack`.
        }
    }

    // Use the stacktrace if it's an error object.
    if (typeof error.stack === "string") {
        return error.stack;
    }

    // Otherwise, dump the object.
    return util.format("%o", error);
}

/**
 * Tracks error messages that are shown to the user so we only ever show the
 * same message once.
 * @type {Set<string>}
 */
const displayedErrors = new Set();

/**
 * Tracks whether an unexpected error was caught
 * @type {boolean}
 */
let hadFatalError = false;

/**
 * Catch and report unexpected error.
 * @param {any} error The thrown error object.
 * @returns {void}
 */
function onFatalError(error) {
    process.exitCode = 2;
    hadFatalError = true;

    const { version } = require("../package.json");
    const message = `
Oops! Something went wrong! :(

ESLint: ${version}

${getErrorMessage(error)}`;

    if (!displayedErrors.has(message)) {
        console.error(message);
        displayedErrors.add(message);
    }
}

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

(async function main() {
    process.on("uncaughtException", onFatalError);
    process.on("unhandledRejection", onFatalError);

    // Call the config initializer if `--init` is present.
    if (process.argv.includes("--init")) {

        // `eslint --init` has been moved to `@eslint/create-config`
        console.warn("You can also run this command directly using 'npm init @eslint/config@latest'.");

        const spawn = require("cross-spawn");

        spawn.sync("npm", ["init", "@eslint/config@latest"], { encoding: "utf8", stdio: "inherit" });
        return;
    }

    // Otherwise, call the CLI.
    const cli = require("../lib/cli");
    const exitCode = await cli.execute(
        process.argv,
        process.argv.includes("--stdin") ? await readStdin() : null,
        true
    );

    /*
     * If an uncaught exception or unhandled rejection was detected in the meantime,
     * keep the fatal exit code 2 that is already assigned to `process.exitCode`.
     * Without this condition, exit code 2 (unsuccessful execution) could be overwritten with
     * 1 (successful execution, lint problems found) or even 0 (successful execution, no lint problems found).
     * This ensures that unexpected errors that seemingly don't affect the success
     * of the execution will still cause a non-zero exit code, as it's a common
     * practice and the default behavior of Node.js to exit with non-zero
     * in case of an uncaught exception or unhandled rejection.
     *
     * Otherwise, assign the exit code returned from CLI.
     */
    if (!hadFatalError) {
        process.exitCode = exitCode;
    }
}()).catch(onFatalError);
