/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5633:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const input_1 = __importDefault(__nccwpck_require__(4015));
const buildContext_1 = __importDefault(__nccwpck_require__(9484));
class Action {
    static run(action, configurationSupplier) {
        try {
            const configuration = configurationSupplier(new input_1.default(), new buildContext_1.default());
            action(configuration)
                .then((output) => Object.entries(output).forEach(([key, value]) => {
                console.log(`${key}: ${JSON.stringify(value)}`);
                core.setOutput(key, value);
            }))
                .catch(this.handleError);
        }
        catch (err) {
            this.handleError(err);
        }
    }
    static handleError(err) {
        if (err instanceof Error) {
            core.setFailed(err.message);
        }
        else {
            core.setFailed(err);
        }
    }
}
exports["default"] = Action;
//# sourceMappingURL=action.js.map

/***/ }),

/***/ 9484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const github = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/github'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
class BuildContext {
    required(key) {
        if (github.context[key] === undefined) {
            throw new Error('Could not get context value ' + key);
        }
        return github.context[key];
    }
    optional(key) {
        if (github.context[key] === undefined) {
            return null;
        }
        return github.context[key];
    }
}
exports["default"] = BuildContext;
//# sourceMappingURL=buildContext.js.map

/***/ }),

/***/ 4015:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
class Input {
    required(key) {
        if (core.getInput(key) === '') {
            throw new Error('Could not get input ' + key);
        }
        return core.getInput(key);
    }
    optional(key) {
        if (core.getInput(key) === '') {
            return null;
        }
        return core.getInput(key);
    }
}
exports["default"] = Input;
//# sourceMappingURL=input.js.map

/***/ }),

/***/ 8207:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const events_1 = __nccwpck_require__(4434);
const debug_1 = __importDefault(__nccwpck_require__(2830));
const promisify_1 = __importDefault(__nccwpck_require__(8067));
const debug = debug_1.default('agent-base');
function isAgent(v) {
    return Boolean(v) && typeof v.addRequest === 'function';
}
function isSecureEndpoint() {
    const { stack } = new Error();
    if (typeof stack !== 'string')
        return false;
    return stack.split('\n').some(l => l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
}
function createAgent(callback, opts) {
    return new createAgent.Agent(callback, opts);
}
(function (createAgent) {
    /**
     * Base `http.Agent` implementation.
     * No pooling/keep-alive is implemented by default.
     *
     * @param {Function} callback
     * @api public
     */
    class Agent extends events_1.EventEmitter {
        constructor(callback, _opts) {
            super();
            let opts = _opts;
            if (typeof callback === 'function') {
                this.callback = callback;
            }
            else if (callback) {
                opts = callback;
            }
            // Timeout for the socket to be returned from the callback
            this.timeout = null;
            if (opts && typeof opts.timeout === 'number') {
                this.timeout = opts.timeout;
            }
            // These aren't actually used by `agent-base`, but are required
            // for the TypeScript definition files in `@types/node` :/
            this.maxFreeSockets = 1;
            this.maxSockets = 1;
            this.maxTotalSockets = Infinity;
            this.sockets = {};
            this.freeSockets = {};
            this.requests = {};
            this.options = {};
        }
        get defaultPort() {
            if (typeof this.explicitDefaultPort === 'number') {
                return this.explicitDefaultPort;
            }
            return isSecureEndpoint() ? 443 : 80;
        }
        set defaultPort(v) {
            this.explicitDefaultPort = v;
        }
        get protocol() {
            if (typeof this.explicitProtocol === 'string') {
                return this.explicitProtocol;
            }
            return isSecureEndpoint() ? 'https:' : 'http:';
        }
        set protocol(v) {
            this.explicitProtocol = v;
        }
        callback(req, opts, fn) {
            throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
        }
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        addRequest(req, _opts) {
            const opts = Object.assign({}, _opts);
            if (typeof opts.secureEndpoint !== 'boolean') {
                opts.secureEndpoint = isSecureEndpoint();
            }
            if (opts.host == null) {
                opts.host = 'localhost';
            }
            if (opts.port == null) {
                opts.port = opts.secureEndpoint ? 443 : 80;
            }
            if (opts.protocol == null) {
                opts.protocol = opts.secureEndpoint ? 'https:' : 'http:';
            }
            if (opts.host && opts.path) {
                // If both a `host` and `path` are specified then it's most
                // likely the result of a `url.parse()` call... we need to
                // remove the `path` portion so that `net.connect()` doesn't
                // attempt to open that as a unix socket file.
                delete opts.path;
            }
            delete opts.agent;
            delete opts.hostname;
            delete opts._defaultAgent;
            delete opts.defaultPort;
            delete opts.createConnection;
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            req._last = true;
            req.shouldKeepAlive = false;
            let timedOut = false;
            let timeoutId = null;
            const timeoutMs = opts.timeout || this.timeout;
            const onerror = (err) => {
                if (req._hadError)
                    return;
                req.emit('error', err);
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req._hadError = true;
            };
            const ontimeout = () => {
                timeoutId = null;
                timedOut = true;
                const err = new Error(`A "socket" was not created for HTTP request before ${timeoutMs}ms`);
                err.code = 'ETIMEOUT';
                onerror(err);
            };
            const callbackError = (err) => {
                if (timedOut)
                    return;
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                onerror(err);
            };
            const onsocket = (socket) => {
                if (timedOut)
                    return;
                if (timeoutId != null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                if (isAgent(socket)) {
                    // `socket` is actually an `http.Agent` instance, so
                    // relinquish responsibility for this `req` to the Agent
                    // from here on
                    debug('Callback returned another Agent instance %o', socket.constructor.name);
                    socket.addRequest(req, opts);
                    return;
                }
                if (socket) {
                    socket.once('free', () => {
                        this.freeSocket(socket, opts);
                    });
                    req.onSocket(socket);
                    return;
                }
                const err = new Error(`no Duplex stream was returned to agent-base for \`${req.method} ${req.path}\``);
                onerror(err);
            };
            if (typeof this.callback !== 'function') {
                onerror(new Error('`callback` is not defined'));
                return;
            }
            if (!this.promisifiedCallback) {
                if (this.callback.length >= 3) {
                    debug('Converting legacy callback function to promise');
                    this.promisifiedCallback = promisify_1.default(this.callback);
                }
                else {
                    this.promisifiedCallback = this.callback;
                }
            }
            if (typeof timeoutMs === 'number' && timeoutMs > 0) {
                timeoutId = setTimeout(ontimeout, timeoutMs);
            }
            if ('port' in opts && typeof opts.port !== 'number') {
                opts.port = Number(opts.port);
            }
            try {
                debug('Resolving socket for %o request: %o', opts.protocol, `${req.method} ${req.path}`);
                Promise.resolve(this.promisifiedCallback(req, opts)).then(onsocket, callbackError);
            }
            catch (err) {
                Promise.reject(err).catch(callbackError);
            }
        }
        freeSocket(socket, opts) {
            debug('Freeing socket %o %o', socket.constructor.name, opts);
            socket.destroy();
        }
        destroy() {
            debug('Destroying agent %o', this.constructor.name);
        }
    }
    createAgent.Agent = Agent;
    // So that `instanceof` works correctly
    createAgent.prototype = createAgent.Agent.prototype;
})(createAgent || (createAgent = {}));
module.exports = createAgent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8067:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function promisify(fn) {
    return function (req, opts) {
        return new Promise((resolve, reject) => {
            fn.call(this, req, opts, (err, rtn) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rtn);
                }
            });
        });
    };
}
exports["default"] = promisify;
//# sourceMappingURL=promisify.js.map

/***/ }),

/***/ 4777:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __nccwpck_require__(1860);
var Semaphore_1 = __nccwpck_require__(3168);
var Mutex = /** @class */ (function () {
    function Mutex(cancelError) {
        this._semaphore = new Semaphore_1.default(1, cancelError);
    }
    Mutex.prototype.acquire = function () {
        return tslib_1.__awaiter(this, arguments, void 0, function (priority) {
            var _a, releaser;
            if (priority === void 0) { priority = 0; }
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._semaphore.acquire(1, priority)];
                    case 1:
                        _a = _b.sent(), releaser = _a[1];
                        return [2 /*return*/, releaser];
                }
            });
        });
    };
    Mutex.prototype.runExclusive = function (callback, priority) {
        if (priority === void 0) { priority = 0; }
        return this._semaphore.runExclusive(function () { return callback(); }, 1, priority);
    };
    Mutex.prototype.isLocked = function () {
        return this._semaphore.isLocked();
    };
    Mutex.prototype.waitForUnlock = function (priority) {
        if (priority === void 0) { priority = 0; }
        return this._semaphore.waitForUnlock(1, priority);
    };
    Mutex.prototype.release = function () {
        if (this._semaphore.isLocked())
            this._semaphore.release();
    };
    Mutex.prototype.cancel = function () {
        return this._semaphore.cancel();
    };
    return Mutex;
}());
exports["default"] = Mutex;


/***/ }),

/***/ 3168:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __nccwpck_require__(1860);
var errors_1 = __nccwpck_require__(3895);
var Semaphore = /** @class */ (function () {
    function Semaphore(_value, _cancelError) {
        if (_cancelError === void 0) { _cancelError = errors_1.E_CANCELED; }
        this._value = _value;
        this._cancelError = _cancelError;
        this._queue = [];
        this._weightedWaiters = [];
    }
    Semaphore.prototype.acquire = function (weight, priority) {
        var _this = this;
        if (weight === void 0) { weight = 1; }
        if (priority === void 0) { priority = 0; }
        if (weight <= 0)
            throw new Error("invalid weight ".concat(weight, ": must be positive"));
        return new Promise(function (resolve, reject) {
            var task = { resolve: resolve, reject: reject, weight: weight, priority: priority };
            var i = findIndexFromEnd(_this._queue, function (other) { return priority <= other.priority; });
            if (i === -1 && weight <= _this._value) {
                // Needs immediate dispatch, skip the queue
                _this._dispatchItem(task);
            }
            else {
                _this._queue.splice(i + 1, 0, task);
            }
        });
    };
    Semaphore.prototype.runExclusive = function (callback_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function (callback, weight, priority) {
            var _a, value, release;
            if (weight === void 0) { weight = 1; }
            if (priority === void 0) { priority = 0; }
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.acquire(weight, priority)];
                    case 1:
                        _a = _b.sent(), value = _a[0], release = _a[1];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, callback(value)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Semaphore.prototype.waitForUnlock = function (weight, priority) {
        var _this = this;
        if (weight === void 0) { weight = 1; }
        if (priority === void 0) { priority = 0; }
        if (weight <= 0)
            throw new Error("invalid weight ".concat(weight, ": must be positive"));
        if (this._couldLockImmediately(weight, priority)) {
            return Promise.resolve();
        }
        else {
            return new Promise(function (resolve) {
                if (!_this._weightedWaiters[weight - 1])
                    _this._weightedWaiters[weight - 1] = [];
                insertSorted(_this._weightedWaiters[weight - 1], { resolve: resolve, priority: priority });
            });
        }
    };
    Semaphore.prototype.isLocked = function () {
        return this._value <= 0;
    };
    Semaphore.prototype.getValue = function () {
        return this._value;
    };
    Semaphore.prototype.setValue = function (value) {
        this._value = value;
        this._dispatchQueue();
    };
    Semaphore.prototype.release = function (weight) {
        if (weight === void 0) { weight = 1; }
        if (weight <= 0)
            throw new Error("invalid weight ".concat(weight, ": must be positive"));
        this._value += weight;
        this._dispatchQueue();
    };
    Semaphore.prototype.cancel = function () {
        var _this = this;
        this._queue.forEach(function (entry) { return entry.reject(_this._cancelError); });
        this._queue = [];
    };
    Semaphore.prototype._dispatchQueue = function () {
        this._drainUnlockWaiters();
        while (this._queue.length > 0 && this._queue[0].weight <= this._value) {
            this._dispatchItem(this._queue.shift());
            this._drainUnlockWaiters();
        }
    };
    Semaphore.prototype._dispatchItem = function (item) {
        var previousValue = this._value;
        this._value -= item.weight;
        item.resolve([previousValue, this._newReleaser(item.weight)]);
    };
    Semaphore.prototype._newReleaser = function (weight) {
        var _this = this;
        var called = false;
        return function () {
            if (called)
                return;
            called = true;
            _this.release(weight);
        };
    };
    Semaphore.prototype._drainUnlockWaiters = function () {
        if (this._queue.length === 0) {
            for (var weight = this._value; weight > 0; weight--) {
                var waiters = this._weightedWaiters[weight - 1];
                if (!waiters)
                    continue;
                waiters.forEach(function (waiter) { return waiter.resolve(); });
                this._weightedWaiters[weight - 1] = [];
            }
        }
        else {
            var queuedPriority_1 = this._queue[0].priority;
            for (var weight = this._value; weight > 0; weight--) {
                var waiters = this._weightedWaiters[weight - 1];
                if (!waiters)
                    continue;
                var i = waiters.findIndex(function (waiter) { return waiter.priority <= queuedPriority_1; });
                (i === -1 ? waiters : waiters.splice(0, i))
                    .forEach((function (waiter) { return waiter.resolve(); }));
            }
        }
    };
    Semaphore.prototype._couldLockImmediately = function (weight, priority) {
        return (this._queue.length === 0 || this._queue[0].priority < priority) &&
            weight <= this._value;
    };
    return Semaphore;
}());
function insertSorted(a, v) {
    var i = findIndexFromEnd(a, function (other) { return v.priority <= other.priority; });
    a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
    for (var i = a.length - 1; i >= 0; i--) {
        if (predicate(a[i])) {
            return i;
        }
    }
    return -1;
}
exports["default"] = Semaphore;


/***/ }),

/***/ 3895:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.E_CANCELED = exports.E_ALREADY_LOCKED = exports.E_TIMEOUT = void 0;
exports.E_TIMEOUT = new Error('timeout while waiting for mutex to become available');
exports.E_ALREADY_LOCKED = new Error('mutex already locked');
exports.E_CANCELED = new Error('request for lock canceled');


/***/ }),

/***/ 2626:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tryAcquire = exports.withTimeout = exports.Semaphore = exports.Mutex = void 0;
var tslib_1 = __nccwpck_require__(1860);
var Mutex_1 = __nccwpck_require__(4777);
Object.defineProperty(exports, "Mutex", ({ enumerable: true, get: function () { return Mutex_1.default; } }));
var Semaphore_1 = __nccwpck_require__(3168);
Object.defineProperty(exports, "Semaphore", ({ enumerable: true, get: function () { return Semaphore_1.default; } }));
var withTimeout_1 = __nccwpck_require__(5753);
Object.defineProperty(exports, "withTimeout", ({ enumerable: true, get: function () { return withTimeout_1.withTimeout; } }));
var tryAcquire_1 = __nccwpck_require__(6487);
Object.defineProperty(exports, "tryAcquire", ({ enumerable: true, get: function () { return tryAcquire_1.tryAcquire; } }));
tslib_1.__exportStar(__nccwpck_require__(3895), exports);


/***/ }),

/***/ 6487:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tryAcquire = void 0;
var errors_1 = __nccwpck_require__(3895);
var withTimeout_1 = __nccwpck_require__(5753);
// eslint-disable-next-lisne @typescript-eslint/explicit-module-boundary-types
function tryAcquire(sync, alreadyAcquiredError) {
    if (alreadyAcquiredError === void 0) { alreadyAcquiredError = errors_1.E_ALREADY_LOCKED; }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (0, withTimeout_1.withTimeout)(sync, 0, alreadyAcquiredError);
}
exports.tryAcquire = tryAcquire;


/***/ }),

/***/ 5753:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withTimeout = void 0;
var tslib_1 = __nccwpck_require__(1860);
/* eslint-disable @typescript-eslint/no-explicit-any */
var errors_1 = __nccwpck_require__(3895);
function withTimeout(sync, timeout, timeoutError) {
    var _this = this;
    if (timeoutError === void 0) { timeoutError = errors_1.E_TIMEOUT; }
    return {
        acquire: function (weightOrPriority, priority) {
            var weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            }
            else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error("invalid weight ".concat(weight, ": must be positive"));
            }
            return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var isTimeout, handle, ticket, release, e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isTimeout = false;
                            handle = setTimeout(function () {
                                isTimeout = true;
                                reject(timeoutError);
                            }, timeout);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, (isSemaphore(sync)
                                    ? sync.acquire(weight, priority)
                                    : sync.acquire(priority))];
                        case 2:
                            ticket = _a.sent();
                            if (isTimeout) {
                                release = Array.isArray(ticket) ? ticket[1] : ticket;
                                release();
                            }
                            else {
                                clearTimeout(handle);
                                resolve(ticket);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            if (!isTimeout) {
                                clearTimeout(handle);
                                reject(e_1);
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        },
        runExclusive: function (callback, weight, priority) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var release, ticket;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            release = function () { return undefined; };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 7, 8]);
                            return [4 /*yield*/, this.acquire(weight, priority)];
                        case 2:
                            ticket = _a.sent();
                            if (!Array.isArray(ticket)) return [3 /*break*/, 4];
                            release = ticket[1];
                            return [4 /*yield*/, callback(ticket[0])];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            release = ticket;
                            return [4 /*yield*/, callback()];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            release();
                            return [7 /*endfinally*/];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        },
        release: function (weight) {
            sync.release(weight);
        },
        cancel: function () {
            return sync.cancel();
        },
        waitForUnlock: function (weightOrPriority, priority) {
            var weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            }
            else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error("invalid weight ".concat(weight, ": must be positive"));
            }
            return new Promise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(timeoutError); }, timeout);
                (isSemaphore(sync)
                    ? sync.waitForUnlock(weight, priority)
                    : sync.waitForUnlock(priority)).then(function () {
                    clearTimeout(handle);
                    resolve();
                });
            });
        },
        isLocked: function () { return sync.isLocked(); },
        getValue: function () { return sync.getValue(); },
        setValue: function (value) { return sync.setValue(value); },
    };
}
exports.withTimeout = withTimeout;
function isSemaphore(sync) {
    return sync.getValue !== undefined;
}


/***/ }),

/***/ 1324:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports =
{
  parallel      : __nccwpck_require__(3857),
  serial        : __nccwpck_require__(1054),
  serialOrdered : __nccwpck_require__(3961)
};


/***/ }),

/***/ 4818:
/***/ ((module) => {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),

/***/ 8452:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var defer = __nccwpck_require__(9200);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),

/***/ 9200:
/***/ ((module) => {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),

/***/ 4902:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var async = __nccwpck_require__(8452)
  , abort = __nccwpck_require__(4818)
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),

/***/ 1721:
/***/ ((module) => {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),

/***/ 3351:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var abort = __nccwpck_require__(4818)
  , async = __nccwpck_require__(8452)
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),

/***/ 3857:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var iterate    = __nccwpck_require__(4902)
  , initState  = __nccwpck_require__(1721)
  , terminator = __nccwpck_require__(3351)
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),

/***/ 1054:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var serialOrdered = __nccwpck_require__(3961);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ 3961:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var iterate    = __nccwpck_require__(4902)
  , initState  = __nccwpck_require__(1721)
  , terminator = __nccwpck_require__(3351)
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),

/***/ 2639:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var bind = __nccwpck_require__(7564);

var $apply = __nccwpck_require__(3945);
var $call = __nccwpck_require__(8093);
var $reflectApply = __nccwpck_require__(1330);

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);


/***/ }),

/***/ 3945:
/***/ ((module) => {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;


/***/ }),

/***/ 8093:
/***/ ((module) => {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;


/***/ }),

/***/ 8705:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var bind = __nccwpck_require__(7564);
var $TypeError = __nccwpck_require__(3314);

var $call = __nccwpck_require__(8093);
var $actualApply = __nccwpck_require__(2639);

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};


/***/ }),

/***/ 1330:
/***/ ((module) => {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;


/***/ }),

/***/ 5630:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var util = __nccwpck_require__(9023);
var Stream = (__nccwpck_require__(2203).Stream);
var DelayedStream = __nccwpck_require__(2710);

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),

/***/ 6110:
/***/ ((module, exports, __nccwpck_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 897:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nccwpck_require__(744);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 2830:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __nccwpck_require__(6110);
} else {
	module.exports = __nccwpck_require__(5108);
}


/***/ }),

/***/ 5108:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

const tty = __nccwpck_require__(2018);
const util = __nccwpck_require__(9023);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __nccwpck_require__(1450);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 2710:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var Stream = (__nccwpck_require__(2203).Stream);
var util = __nccwpck_require__(9023);

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),

/***/ 6669:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var callBind = __nccwpck_require__(8705);
var gOPD = __nccwpck_require__(3170);

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;


/***/ }),

/***/ 9094:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ }),

/***/ 3056:
/***/ ((module) => {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ }),

/***/ 1620:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ }),

/***/ 4585:
/***/ ((module) => {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ }),

/***/ 6905:
/***/ ((module) => {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ }),

/***/ 105:
/***/ ((module) => {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ }),

/***/ 3314:
/***/ ((module) => {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ }),

/***/ 2578:
/***/ ((module) => {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ }),

/***/ 5399:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
module.exports = Object;


/***/ }),

/***/ 8700:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var GetIntrinsic = __nccwpck_require__(470);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasToStringTag = __nccwpck_require__(5479)();
var hasOwn = __nccwpck_require__(4076);
var $TypeError = __nccwpck_require__(3314);

var toStringTag = hasToStringTag ? Symbol.toStringTag : null;

/** @type {import('.')} */
module.exports = function setToStringTag(object, value) {
	var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
	var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
	if (
		(typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean')
		|| (typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean')
	) {
		throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
	}
	if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
		if ($defineProperty) {
			$defineProperty(object, toStringTag, {
				configurable: !nonConfigurable,
				enumerable: false,
				value: value,
				writable: false
			});
		} else {
			object[toStringTag] = value; // eslint-disable-line no-param-reassign
		}
	}
};


/***/ }),

/***/ 4778:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __nccwpck_require__(2830)("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ 1573:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var url = __nccwpck_require__(7016);
var URL = url.URL;
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var Writable = (__nccwpck_require__(2203).Writable);
var assert = __nccwpck_require__(2613);
var debug = __nccwpck_require__(4778);

// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
  var looksLikeNode = typeof process !== "undefined";
  var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var looksLikeV8 = isFunction(Error.captureStackTrace);
  if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
    console.warn("The follow-redirects package should be excluded from browser builds.");
  }
}());

// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
  assert(new URL(""));
}
catch (error) {
  useNativeURL = error.code === "ERR_INVALID_URL";
}

// HTTP headers to drop across HTTP/HTTPS and domain boundaries
var sensitiveHeaders = [
  "Authorization",
  "Proxy-Authorization",
  "Cookie",
];

// URL fields to preserve in copy operations
var preservedUrlFields = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash",
];

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  RedirectionError
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    try {
      self._processResponse(response);
    }
    catch (cause) {
      self.emit("error", cause instanceof RedirectionError ?
        cause : new RedirectionError({ cause: cause }));
    }
  };

  // Create filter for sensitive HTTP headers
  this._headerFilter = new RegExp("^(?:" +
      sensitiveHeaders.concat(options.sensitiveHeaders).map(escapeRegex).join("|") +
    ")$", "i");

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};

RedirectableRequest.prototype.destroy = function (error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    self.removeListener("close", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }
  if (!isArray(options.sensitiveHeaders)) {
    options.sensitiveHeaders = [];
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    throw new TypeError("Unsupported protocol " + protocol);
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      // istanbul ignore else
      if (request === self._currentRequest) {
        // Report any write errors
        // istanbul ignore if
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          // istanbul ignore else
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  destroyRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    throw new TooManyRedirectsError();
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = parseUrl(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Create the redirected request
  var redirectUrl = resolveUrl(location, currentUrl);
  debug("redirecting to", redirectUrl.href);
  this._isRedirect = true;
  spreadUrlObject(redirectUrl, this._options);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrl.protocol !== currentUrlParts.protocol &&
     redirectUrl.protocol !== "https:" ||
     redirectUrl.host !== currentHost &&
     !isSubdomain(redirectUrl.host, currentHost)) {
    removeMatchingHeaders(this._headerFilter, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    beforeRedirect(this._options, responseDetails, requestDetails);
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  this._performRequest();
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters, ensuring that input is an object
      if (isURL(input)) {
        input = spreadUrlObject(input);
      }
      else if (isString(input)) {
        input = spreadUrlObject(parseUrl(input));
      }
      else {
        callback = options;
        options = validateUrl(input);
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

function noop() { /* empty */ }

function parseUrl(input) {
  var parsed;
  // istanbul ignore else
  if (useNativeURL) {
    parsed = new URL(input);
  }
  else {
    // Ensure the URL is valid and absolute
    parsed = validateUrl(url.parse(input));
    if (!isString(parsed.protocol)) {
      throw new InvalidUrlError({ input });
    }
  }
  return parsed;
}

function resolveUrl(relative, base) {
  // istanbul ignore next
  return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}

function validateUrl(input) {
  if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  return input;
}

function spreadUrlObject(urlObject, target) {
  var spread = target || {};
  for (var key of preservedUrlFields) {
    spread[key] = urlObject[key];
  }

  // Fix IPv6 hostname
  if (spread.hostname.startsWith("[")) {
    spread.hostname = spread.hostname.slice(1, -1);
  }
  // Ensure port is a number
  if (spread.port !== "") {
    spread.port = Number(spread.port);
  }
  // Concatenate path
  spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;

  return spread;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    // istanbul ignore else
    if (isFunction(Error.captureStackTrace)) {
      Error.captureStackTrace(this, this.constructor);
    }
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  Object.defineProperties(CustomError.prototype, {
    constructor: {
      value: CustomError,
      enumerable: false,
    },
    name: {
      value: "Error [" + code + "]",
      enumerable: false,
    },
  });
  return CustomError;
}

function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.destroy(error);
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isArray(value) {
  return value instanceof Array;
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

function isURL(value) {
  return URL && value instanceof URL;
}

function escapeRegex(regex) {
  return regex.replace(/[\]\\/()*+?.$]/g, "\\$&");
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ 6454:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var CombinedStream = __nccwpck_require__(5630);
var util = __nccwpck_require__(9023);
var path = __nccwpck_require__(6928);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var parseUrl = (__nccwpck_require__(7016).parse);
var fs = __nccwpck_require__(9896);
var Stream = (__nccwpck_require__(2203).Stream);
var crypto = __nccwpck_require__(6982);
var mime = __nccwpck_require__(4096);
var asynckit = __nccwpck_require__(1324);
var setToStringTag = __nccwpck_require__(8700);
var hasOwn = __nccwpck_require__(4076);
var populate = __nccwpck_require__(1835);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {}; // eslint-disable-line no-param-reassign
  for (var option in options) { // eslint-disable-line no-restricted-syntax
    this[option] = options[option];
  }
}

// make it a Stream
util.inherits(FormData, CombinedStream);

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function (field, value, options) {
  options = options || {}; // eslint-disable-line no-param-reassign

  // allow filename as single option
  if (typeof options === 'string') {
    options = { filename: options }; // eslint-disable-line no-param-reassign
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value === 'number' || value == null) {
    value = String(value); // eslint-disable-line no-param-reassign
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (Array.isArray(value)) {
    /*
     * Please convert your array into string
     * the way web server expects it
     */
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function (header, value, options) {
  var valueLength = 0;

  /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */
  if (options.knownLength != null) {
    valueLength += Number(options.knownLength);
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || (!value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function (value, callback) {
  if (hasOwn(value, 'fd')) {
    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {
      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return

      // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function (err, stat) {
        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        var fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

    // or http response
  } else if (hasOwn(value, 'httpVersion')) {
    callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return

    // or request stream http://github.com/mikeal/request
  } else if (hasOwn(value, 'httpModule')) {
    // wait till response come back
    value.on('response', function (response) {
      value.pause();
      callback(null, Number(response.headers['content-length']));
    });
    value.resume();

    // something else
  } else {
    callback('Unknown stream'); // eslint-disable-line callback-return
  }
};

FormData.prototype._multiPartHeader = function (field, value, options) {
  /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */
  if (typeof options.header === 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header === 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) { // eslint-disable-line no-restricted-syntax
    if (hasOwn(headers, prop)) {
      header = headers[prop];

      // skip nullish headers.
      if (header == null) {
        continue; // eslint-disable-line no-restricted-syntax, no-continue
      }

      // convert all headers to arrays.
      if (!Array.isArray(header)) {
        header = [header];
      }

      // add non-empty headers.
      if (header.length) {
        contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
      }
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function (value, options) { // eslint-disable-line consistent-return
  var filename;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || (value && (value.name || value.path))) {
    /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */
    filename = path.basename(options.filename || (value && (value.name || value.path)));
  } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    return 'filename="' + filename + '"';
  }
};

FormData.prototype._getContentType = function (value, options) {
  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && value && typeof value === 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function () {
  return function (next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = this._streams.length === 0;
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function () {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function (userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) { // eslint-disable-line no-restricted-syntax
    if (hasOwn(userHeaders, header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.setBoundary = function (boundary) {
  if (typeof boundary !== 'string') {
    throw new TypeError('FormData boundary must be a string');
  }
  this._boundary = boundary;
};

FormData.prototype.getBoundary = function () {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype.getBuffer = function () {
  var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {
      // Add content to the buffer.
      if (Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
      } else {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
        dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData.LINE_BREAK)]);
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
};

FormData.prototype._generateBoundary = function () {
  // This generates a 50 character boundary similar to those used by Firefox.

  // They are optimized for boyer-moore parsing.
  this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function () {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function () {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function (cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function (err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function (length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function (params, cb) {
  var request;
  var options;
  var defaults = { method: 'post' };

  // parse provided url if it's string or treat it as options object
  if (typeof params === 'string') {
    params = parseUrl(params); // eslint-disable-line no-param-reassign
    /* eslint sort-keys: 0 */
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);
  } else { // use custom params
    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol === 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol === 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function (err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function (err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};
setToStringTag(FormData.prototype, 'FormData');

// Public API
module.exports = FormData;


/***/ }),

/***/ 1835:
/***/ ((module) => {

"use strict";


// populates missing values
module.exports = function (dst, src) {
  Object.keys(src).forEach(function (prop) {
    dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
  });

  return dst;
};


/***/ }),

/***/ 9808:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 7564:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var implementation = __nccwpck_require__(9808);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 470:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var undefined;

var $Object = __nccwpck_require__(5399);

var $Error = __nccwpck_require__(1620);
var $EvalError = __nccwpck_require__(3056);
var $RangeError = __nccwpck_require__(4585);
var $ReferenceError = __nccwpck_require__(6905);
var $SyntaxError = __nccwpck_require__(105);
var $TypeError = __nccwpck_require__(3314);
var $URIError = __nccwpck_require__(2578);

var abs = __nccwpck_require__(5641);
var floor = __nccwpck_require__(6171);
var max = __nccwpck_require__(7147);
var min = __nccwpck_require__(1017);
var pow = __nccwpck_require__(6947);
var round = __nccwpck_require__(2621);
var sign = __nccwpck_require__(156);

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = __nccwpck_require__(3170);
var $defineProperty = __nccwpck_require__(9094);

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __nccwpck_require__(3336)();

var getProto = __nccwpck_require__(1967);
var $ObjectGPO = __nccwpck_require__(1311);
var $ReflectGPO = __nccwpck_require__(8681);

var $apply = __nccwpck_require__(3945);
var $call = __nccwpck_require__(8093);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __nccwpck_require__(7564);
var hasOwn = __nccwpck_require__(4076);
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 1311:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var $Object = __nccwpck_require__(5399);

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;


/***/ }),

/***/ 8681:
/***/ ((module) => {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;


/***/ }),

/***/ 1967:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var reflectGetProto = __nccwpck_require__(8681);
var originalGetProto = __nccwpck_require__(1311);

var getDunderProto = __nccwpck_require__(6669);

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;


/***/ }),

/***/ 1174:
/***/ ((module) => {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;


/***/ }),

/***/ 3170:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/** @type {import('.')} */
var $gOPD = __nccwpck_require__(1174);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 3813:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 3336:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __nccwpck_require__(1114);

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 1114:
/***/ ((module) => {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 5479:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var hasSymbols = __nccwpck_require__(1114);

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ 4076:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __nccwpck_require__(7564);

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ }),

/***/ 6904:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const net_1 = __importDefault(__nccwpck_require__(9278));
const tls_1 = __importDefault(__nccwpck_require__(4756));
const url_1 = __importDefault(__nccwpck_require__(7016));
const assert_1 = __importDefault(__nccwpck_require__(2613));
const debug_1 = __importDefault(__nccwpck_require__(2830));
const agent_base_1 = __nccwpck_require__(8207);
const parse_proxy_response_1 = __importDefault(__nccwpck_require__(7943));
const debug = debug_1.default('https-proxy-agent:agent');
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */
class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(_opts) {
        let opts;
        if (typeof _opts === 'string') {
            opts = url_1.default.parse(_opts);
        }
        else {
            opts = _opts;
        }
        if (!opts) {
            throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        }
        debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') {
            proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
            proxy.port = this.secureProxy ? 443 : 80;
        }
        // ALPN is supported by Node.js >= v5.
        // attempt to negotiate http/1.1 for proxy servers that support http/2
        if (this.secureProxy && !('ALPNProtocols' in proxy)) {
            proxy.ALPNProtocols = ['http 1.1'];
        }
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { proxy, secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                debug('Creating `tls.Socket`: %o', proxy);
                socket = tls_1.default.connect(proxy);
            }
            else {
                debug('Creating `net.Socket`: %o', proxy);
                socket = net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) {
                headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            }
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host, port, secureEndpoint } = opts;
            if (!isDefaultPort(port, secureEndpoint)) {
                host += `:${port}`;
            }
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers)) {
                payload += `${name}: ${headers[name]}\r\n`;
            }
            const proxyResponsePromise = parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode, buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return tls_1.default.connect(Object.assign(Object.assign({}, omit(opts, 'host', 'hostname', 'path', 'port')), { socket,
                        servername }));
                }
                return socket;
            }
            // Some other status code that's not 200... need to re-play the HTTP
            // header "data" events onto the socket once the HTTP machinery is
            // attached so that the node core `http` can parse and handle the
            // error status code.
            // Close the original socket, and a new "fake" socket is returned
            // instead, so that the proxy doesn't get the HTTP request
            // written to it (which may contain `Authorization` headers or other
            // sensitive data).
            //
            // See: https://hackerone.com/reports/541502
            socket.destroy();
            const fakeSocket = new net_1.default.Socket({ writable: false });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s) => {
                debug('replaying proxy buffer for failed request');
                assert_1.default(s.listenerCount('data') > 0);
                // Replay the "buffered" Buffer onto the fake `socket`, since at
                // this point the HTTP module machinery has been hooked up for
                // the user.
                s.push(buffered);
                s.push(null);
            });
            return fakeSocket;
        });
    }
}
exports["default"] = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function isDefaultPort(port, secure) {
    return Boolean((!secure && port === 80) || (secure && port === 443));
}
function isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for (key in obj) {
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
//# sourceMappingURL=agent.js.map

/***/ }),

/***/ 3669:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const agent_1 = __importDefault(__nccwpck_require__(6904));
function createHttpsProxyAgent(opts) {
    return new agent_1.default(opts);
}
(function (createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = agent_1.default;
    createHttpsProxyAgent.prototype = agent_1.default.prototype;
})(createHttpsProxyAgent || (createHttpsProxyAgent = {}));
module.exports = createHttpsProxyAgent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7943:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__nccwpck_require__(2830));
const debug = debug_1.default('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject) => {
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b)
                ondata(b);
            else
                socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('close', onclose);
            socket.removeListener('readable', read);
        }
        function onclose(err) {
            debug('onclose had error %o', err);
        }
        function onend() {
            debug('onend');
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const firstLine = buffered.toString('ascii', 0, buffered.indexOf('\r\n'));
            const statusCode = +firstLine.split(' ')[1];
            debug('got proxy server response: %o', firstLine);
            resolve({
                statusCode,
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('close', onclose);
        socket.on('end', onend);
        read();
    });
}
exports["default"] = parseProxyResponse;
//# sourceMappingURL=parse-proxy-response.js.map

/***/ }),

/***/ 178:
/***/ ((module) => {

"use strict";


const denyList = new Set([
	'ENOTFOUND',
	'ENETUNREACH',

	// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
	'UNABLE_TO_GET_ISSUER_CERT',
	'UNABLE_TO_GET_CRL',
	'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
	'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
	'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
	'CERT_SIGNATURE_FAILURE',
	'CRL_SIGNATURE_FAILURE',
	'CERT_NOT_YET_VALID',
	'CERT_HAS_EXPIRED',
	'CRL_NOT_YET_VALID',
	'CRL_HAS_EXPIRED',
	'ERROR_IN_CERT_NOT_BEFORE_FIELD',
	'ERROR_IN_CERT_NOT_AFTER_FIELD',
	'ERROR_IN_CRL_LAST_UPDATE_FIELD',
	'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
	'OUT_OF_MEM',
	'DEPTH_ZERO_SELF_SIGNED_CERT',
	'SELF_SIGNED_CERT_IN_CHAIN',
	'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
	'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
	'CERT_CHAIN_TOO_LONG',
	'CERT_REVOKED',
	'INVALID_CA',
	'PATH_LENGTH_EXCEEDED',
	'INVALID_PURPOSE',
	'CERT_UNTRUSTED',
	'CERT_REJECTED',
	'HOSTNAME_MISMATCH'
]);

// TODO: Use `error?.code` when targeting Node.js 14
module.exports = error => !denyList.has(error && error.code);


/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;


/***/ }),

/***/ 6171:
/***/ ((module) => {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;


/***/ }),

/***/ 7044:
/***/ ((module) => {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;


/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;


/***/ }),

/***/ 6947:
/***/ ((module) => {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;


/***/ }),

/***/ 2621:
/***/ ((module) => {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;


/***/ }),

/***/ 156:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var $isNaN = __nccwpck_require__(7044);

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};


/***/ }),

/***/ 9829:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __nccwpck_require__(1813)


/***/ }),

/***/ 4096:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __nccwpck_require__(9829)
var extname = (__nccwpck_require__(6928).extname)

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ 744:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 1450:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(857);
const tty = __nccwpck_require__(2018);
const hasFlag = __nccwpck_require__(3813);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 1860:
/***/ ((module) => {

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, Symbol, Reflect, Promise, SuppressedError */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
var __addDisposableResource;
var __disposeResources;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };

    __runInitializers = function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };

    __propKey = function (x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
        function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
        function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    __addDisposableResource = function (env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
            var dispose, inner;
            if (async) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
                if (async) inner = dispose;
            }
            if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
            if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    };

    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    __disposeResources = function (env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
});


/***/ }),

/***/ 537:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createClient = createClient;
const axios_1 = __importDefault(__nccwpck_require__(7269));
const axios_retry_1 = __importDefault(__nccwpck_require__(750));
const ionos_space_api_1 = __nccwpck_require__(9037);
function createClient(serviceHost, apiKey) {
    const instance = axios_1.default.create({
        timeout: 10000,
        headers: { Authorization: `API-Key ${apiKey}` },
    });
    (0, axios_retry_1.default)(instance, { retries: 3 });
    return new ionos_space_api_1.AxiosIonosSpaceArtifactApiClient(`https://${serviceHost}`, instance);
}


/***/ }),

/***/ 9037:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.36.1070 on 2022-11-17 09:35:34.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectTypeCount = exports.UserSession = exports.TokenAuthInput = exports.ProjectTypeInput = exports.ProjectType = exports.DeploymentNameValidationRequest = exports.ProjectPatch = exports.UpgradeInformation = exports.ProjectDeleteOperation = exports.Project = exports.ProjectInput = exports.Installation = exports.InstallationInput = exports.FrameworkDefinition = exports.FrameworkDefinitionInput = exports.DetectionInput = exports.TemplateFile = exports.TemplateFileCompletionInput = exports.BuildStep = exports.BuildStepCompletionInput = exports.DeploymentStateInput = exports.DeploymentPatch = exports.PhpMyAdminSession = exports.DirectorySessionToken = exports.Deployment = exports.DeploymentInput = exports.ConnectDomainInput = exports.DeploymentTriggerInput = exports.BranchPatch = exports.BuildLog = exports.Branch = exports.BranchDeleteOperation = exports.ArtifactUpload = exports.ArtifactUploadInput = exports.ArtifactDownload = exports.AccountInfo = exports.ProjectNameValidationRequest = exports.Account = exports.AccountPatch = exports.UpsellInformation = exports.DetailedAccount = exports.DisconnectDomains = exports.FeedbackInput = exports.DeploymentChange = exports.UserCreate = exports.TokenChange = exports.ProjectChange = exports.InstallationChange = exports.ContractChange = exports.BranchChange = void 0;
exports.Webspace = exports.BuildStepLog = exports.GitHubConnection = exports.Token = exports.VisitorStatisticsEnabledPatch = exports.DefaultPhpVersionPatch = exports.ProjectTypePatch = exports.AutomaticDeploymentEnabledPatch = exports.ProjectNamePatch = exports.ProjectOverview = exports.GitRepository = exports.DatabaseSettings = exports.DestinationRepositoryInput = exports.DeployStepInput = exports.TemplateStepInput = exports.BuildStepInput = exports.TemplateFileCompletionDescription = exports.BuildStepDescription = exports.GithubRepository = exports.GithubIdentity = exports.Supported = exports.TemplateFileDefinition = exports.SupportedInput = exports.DeployStepDefinition = exports.BuildStepDefinition = exports.DetectionResult = exports.BuildTool = exports.Runtime = exports.DeploymentNamePatch = exports.DeploymentPhpVersionPatch = exports.DeploymentOverview = exports.DeploymentDomain = exports.DetailedDatabase = exports.DetailedWebspace = exports.DetailedDeploymentState = exports.CronJob = exports.PhpVersionPatch = exports.BranchBuild = exports.BuildJobLog = exports.BranchOverview = exports.BranchDeploymentState = exports.BranchBuildState = exports.CompletedPart = exports.UnusableAccount = exports.FeedbackTileShownPatch = exports.WelcomeShownPatch = exports.Domain = exports.DetailedAccountOverview = exports.Page = exports.SortField = void 0;
exports.WebspaceState = exports.DeploymentState = exports.BranchDeploymentStateType = exports.BuildState = exports.DomainType = exports.AppAccessType = exports.Feature = exports.FrameworkType = exports.DeploymentChangeType = exports.ProviderType = exports.TokenChangeType = exports.ProjectChangeType = exports.InstallationChangeType = exports.ContractChangeType = exports.BranchChangeType = exports.IonosSpaceAccountInfoApiClient = exports.IonosSpaceAccountApiClient = exports.IonosSpaceGithubApiClient = exports.IonosSpaceProjectApiClient = exports.IonosSpaceArtifactApiClient = exports.IonosSpaceDetectionApiClient = exports.IonosSpaceEventsApiClient = exports.IonosSpaceBranchApiClient = exports.IonosSpaceProjectTypesApiClient = exports.IonosSpaceGithubWebhookApiClient = exports.IonosSpaceTokensApiClient = exports.IonosSpaceDeploymentApiClient = exports.IonosSpaceFrameworkApiClient = exports.IonosSpaceMetadataApiClient = exports.IonosSpaceUserSessionApiClient = exports.RemoteCommands = exports.FrameworkIdentifier = exports.DatabaseQuota = exports.WebspaceQuota = exports.DeploymentConfigurationInput = exports.TemplateFileInput = exports.VariableInput = exports.LanguageDetection = exports.FileDetection = exports.FileContentDetection = exports.DependencyDetection = exports.DeploymentConfiguration = exports.Variable = exports.DeployStep = exports.TemplateStep = exports.DetectionBase = exports.GithubRepositoryInput = exports.DatabaseOverview = exports.WebspaceOverview = exports.Database = void 0;
exports.AxiosIonosSpaceAccountInfoApiClient = exports.AxiosIonosSpaceAccountApiClient = exports.AxiosIonosSpaceGithubApiClient = exports.AxiosIonosSpaceProjectApiClient = exports.AxiosIonosSpaceArtifactApiClient = exports.AxiosIonosSpaceDetectionApiClient = exports.AxiosIonosSpaceEventsApiClient = exports.AxiosIonosSpaceBranchApiClient = exports.AxiosIonosSpaceProjectTypesApiClient = exports.AxiosIonosSpaceGithubWebhookApiClient = exports.AxiosIonosSpaceTokensApiClient = exports.AxiosIonosSpaceDeploymentApiClient = exports.AxiosIonosSpaceFrameworkApiClient = exports.AxiosIonosSpaceMetadataApiClient = exports.AxiosIonosSpaceUserSessionApiClient = exports.DetectionBaseType = exports.GithubIdentityType = exports.Type = exports.DatabaseState = void 0;
class BranchChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.branchId = data.branchId;
        this.projectId = data.projectId;
    }
}
exports.BranchChange = BranchChange;
class ContractChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
    }
}
exports.ContractChange = ContractChange;
class InstallationChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.installationId = data.installationId;
    }
}
exports.InstallationChange = InstallationChange;
class ProjectChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.projectId = data.projectId;
    }
}
exports.ProjectChange = ProjectChange;
class TokenChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.providerType = data.providerType;
    }
}
exports.TokenChange = TokenChange;
class UserCreate {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.id = data.id;
        this.expiryDate = data.expiryDate;
        this.username = data.username;
    }
}
exports.UserCreate = UserCreate;
class DeploymentChange {
    constructor(data) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.branchId = data.branchId;
        this.deploymentId = data.deploymentId;
        this.projectId = data.projectId;
    }
}
exports.DeploymentChange = DeploymentChange;
class FeedbackInput {
    constructor(data) {
        this.type = data.type;
        this.errorId = data.errorId;
        this.affectedProjectId = data.affectedProjectId;
        this.supportUserInvited = data.supportUserInvited;
        this.summary = data.summary;
        this.description = data.description;
    }
}
exports.FeedbackInput = FeedbackInput;
class DisconnectDomains {
    constructor(data) {
        this.domains = data.domains;
    }
}
exports.DisconnectDomains = DisconnectDomains;
class DetailedAccount {
    constructor(data) {
        this.id = data.id;
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.market = data.market;
        this.wa3Id = data.wa3Id;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.gitConnections = data.gitConnections;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
        this.projectTypes = data.projectTypes;
    }
}
exports.DetailedAccount = DetailedAccount;
class UpsellInformation {
    constructor(data) {
        this.contractId = data.contractId;
        this.projectTypeShopLinks = data.projectTypeShopLinks;
    }
}
exports.UpsellInformation = UpsellInformation;
class AccountPatch {
    constructor(data) {
        this.welcomeShownPatch = data.welcomeShownPatch;
        this.feedbackTileShownPatch = data.feedbackTileShownPatch;
    }
}
exports.AccountPatch = AccountPatch;
class Account {
    constructor(data) {
        this.gitConnections = data.gitConnections;
        this.showWelcome = data.showWelcome;
        this.showFeedbackTile = data.showFeedbackTile;
        this.projectTypes = data.projectTypes;
    }
}
exports.Account = Account;
class ProjectNameValidationRequest {
    constructor(data) {
        this.projectName = data.projectName;
    }
}
exports.ProjectNameValidationRequest = ProjectNameValidationRequest;
class AccountInfo {
    constructor(data) {
        this.unusableAccounts = data.unusableAccounts;
        this.usableAccount = data.usableAccount;
    }
}
exports.AccountInfo = AccountInfo;
class ArtifactDownload {
    constructor(data) {
        this.url = data.url;
    }
}
exports.ArtifactDownload = ArtifactDownload;
class ArtifactUploadInput {
    constructor(data) {
        this.size = data.size;
    }
}
exports.ArtifactUploadInput = ArtifactUploadInput;
class ArtifactUpload {
    constructor(data) {
        this.urls = data.urls;
    }
}
exports.ArtifactUpload = ArtifactUpload;
class BranchDeleteOperation {
    constructor(data) {
        this.deleteRemoteBranch = data.deleteRemoteBranch;
    }
}
exports.BranchDeleteOperation = BranchDeleteOperation;
class Branch {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.deleted = data.deleted;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
        this.productionBranch = data.productionBranch;
        this.webUrl = data.webUrl;
        this.workflowPresent = data.workflowPresent;
    }
}
exports.Branch = Branch;
class BuildLog {
    constructor(data) {
        this.jobs = data.jobs;
    }
}
exports.BuildLog = BuildLog;
class BranchPatch {
    constructor(data) {
        this.phpVersionPatch = data.phpVersionPatch;
    }
}
exports.BranchPatch = BranchPatch;
class DeploymentTriggerInput {
    constructor(data) {
        this.version = data.version;
        this.onlyFailed = data.onlyFailed;
    }
}
exports.DeploymentTriggerInput = DeploymentTriggerInput;
class ConnectDomainInput {
    constructor(data) {
        this.force = data.force;
        this.domain = data.domain;
    }
}
exports.ConnectDomainInput = ConnectDomainInput;
class DeploymentInput {
    constructor(data) {
        this.name = data.name;
        this.domain = data.domain;
    }
}
exports.DeploymentInput = DeploymentInput;
class Deployment {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.webspace = data.webspace;
        this.database = data.database;
        this.domain = data.domain;
    }
}
exports.Deployment = Deployment;
class DirectorySessionToken {
    constructor(data) {
        this.expireAt = data.expireAt;
        this.sessionId = data.sessionId;
    }
}
exports.DirectorySessionToken = DirectorySessionToken;
class PhpMyAdminSession {
    constructor(data) {
        this.expireAt = data.expireAt;
        this.url = data.url;
    }
}
exports.PhpMyAdminSession = PhpMyAdminSession;
class DeploymentPatch {
    constructor(data) {
        this.phpVersionPatch = data.phpVersionPatch;
        this.namePatch = data.namePatch;
    }
}
exports.DeploymentPatch = DeploymentPatch;
class DeploymentStateInput {
    constructor(data) {
        this.state = data.state;
        this.externalId = data.externalId;
    }
}
exports.DeploymentStateInput = DeploymentStateInput;
class BuildStepCompletionInput {
    constructor(data) {
        this.buildStepName = data.buildStepName;
        this.repository = data.repository;
    }
}
exports.BuildStepCompletionInput = BuildStepCompletionInput;
class BuildStep {
    constructor(data) {
        this.runtime = data.runtime;
        this.name = data.name;
        this.displayName = data.displayName;
        this.commandSuggestions = data.commandSuggestions;
        this.buildTool = data.buildTool;
        this.commands = data.commands;
        this.variables = data.variables;
        this.complete = data.complete;
    }
}
exports.BuildStep = BuildStep;
class TemplateFileCompletionInput {
    constructor(data) {
        this.path = data.path;
        this.templateCompletionType = data.templateCompletionType;
        this.mailEnabled = data.mailEnabled;
        this.databaseEnabled = data.databaseEnabled;
        this.sourceFile = data.sourceFile;
        this.repository = data.repository;
    }
}
exports.TemplateFileCompletionInput = TemplateFileCompletionInput;
class TemplateFile {
    constructor(data) {
        this.content = data.content;
        this.path = data.path;
        this.completionType = data.completionType;
    }
}
exports.TemplateFile = TemplateFile;
class DetectionInput {
    constructor(data) {
        this.frameworkId = data.frameworkId;
        this.repository = data.repository;
    }
}
exports.DetectionInput = DetectionInput;
class FrameworkDefinitionInput {
    constructor(data) {
        this.name = data.name;
        this.type = data.type;
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.logoUrl = data.logoUrl;
        this.detections = data.detections;
        this.templateFiles = data.templateFiles;
        this.requiredFeatures = data.requiredFeatures;
    }
}
exports.FrameworkDefinitionInput = FrameworkDefinitionInput;
class FrameworkDefinition {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.logoUrl = data.logoUrl;
        this.detections = data.detections;
        this.templateFiles = data.templateFiles;
        this.requiredFeatures = data.requiredFeatures;
    }
}
exports.FrameworkDefinition = FrameworkDefinition;
class InstallationInput {
    constructor(data) {
        this.externalId = data.externalId;
        this.code = data.code;
    }
}
exports.InstallationInput = InstallationInput;
class Installation {
    constructor(data) {
        this.id = data.id;
        this.necessaryPermissions = data.necessaryPermissions;
        this.missingPermissions = data.missingPermissions;
        this.suspended = data.suspended;
        this.externalId = data.externalId;
        this.account = data.account;
    }
}
exports.Installation = Installation;
class ProjectInput {
    constructor(data) {
        this.buildSteps = data.buildSteps;
        this.templateStep = data.templateStep;
        this.deployStep = data.deployStep;
        this.sourceRepository = data.sourceRepository;
        this.destinationRepository = data.destinationRepository;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.overwriteWorkflow = data.overwriteWorkflow;
        this.mailAccountEnabled = data.mailAccountEnabled;
        this.defaultPhpVersion = data.defaultPhpVersion;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.databaseEnabled = data.databaseEnabled;
        this.projectName = data.projectName;
        this.projectType = data.projectType;
    }
}
exports.ProjectInput = ProjectInput;
class Project {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
        this.defaultPhpVersion = data.defaultPhpVersion;
        this.productionBranchId = data.productionBranchId;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.maxStagingDeploymentCount = data.maxStagingDeploymentCount;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.databaseSettings = data.databaseSettings;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.spawningEnabled = data.spawningEnabled;
        this.siteUrls = data.siteUrls;
        this.deleted = data.deleted;
        this.lastChangedDate = data.lastChangedDate;
        this.providerType = data.providerType;
        this.domains = data.domains;
        this.projectType = data.projectType;
    }
}
exports.Project = Project;
class ProjectDeleteOperation {
    constructor(data) {
        this.deleteRepository = data.deleteRepository;
    }
}
exports.ProjectDeleteOperation = ProjectDeleteOperation;
class UpgradeInformation {
    constructor(data) {
        this.possibleTargetProjectTypes = data.possibleTargetProjectTypes;
    }
}
exports.UpgradeInformation = UpgradeInformation;
class ProjectPatch {
    constructor(data) {
        this.projectNamePatch = data.projectNamePatch;
        this.automaticDeploymentEnabledPatch = data.automaticDeploymentEnabledPatch;
        this.projectTypePatch = data.projectTypePatch;
        this.defaultPhpVersionPatch = data.defaultPhpVersionPatch;
        this.visitorStatisticsEnabledPatch = data.visitorStatisticsEnabledPatch;
    }
}
exports.ProjectPatch = ProjectPatch;
class DeploymentNameValidationRequest {
    constructor(data) {
        this.deploymentName = data.deploymentName;
    }
}
exports.DeploymentNameValidationRequest = DeploymentNameValidationRequest;
class ProjectType {
    constructor(data) {
        this.name = data.name;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.resourceLevel = data.resourceLevel;
        this.orderable = data.orderable;
        this.availableFeatures = data.availableFeatures;
        this.group = data.group;
    }
}
exports.ProjectType = ProjectType;
class ProjectTypeInput {
    constructor(data) {
        this.name = data.name;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.resourceLevel = data.resourceLevel;
        this.orderable = data.orderable;
        this.availableFeatures = data.availableFeatures;
        this.group = data.group;
    }
}
exports.ProjectTypeInput = ProjectTypeInput;
class TokenAuthInput {
    constructor(data) {
        this.type = data.type;
        this.code = data.code;
    }
}
exports.TokenAuthInput = TokenAuthInput;
class UserSession {
    constructor(data) {
        this.frontendToken = data.frontendToken;
    }
}
exports.UserSession = UserSession;
class ProjectTypeCount {
    constructor(data) {
        this.name = data.name;
        this.used = data.used;
        this.total = data.total;
    }
}
exports.ProjectTypeCount = ProjectTypeCount;
class SortField {
    constructor(data) {
        this.name = data.name;
        this.direction = data.direction;
    }
}
exports.SortField = SortField;
class Page {
    constructor(data) {
        this.pageNumber = data.pageNumber;
        this.pageSize = data.pageSize;
        this.total = data.total;
        this.values = data.values;
    }
}
exports.Page = Page;
class DetailedAccountOverview {
    constructor(data) {
        this.id = data.id;
        this.projectsCount = data.projectsCount;
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.market = data.market;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
    }
}
exports.DetailedAccountOverview = DetailedAccountOverview;
class Domain {
    constructor(data) {
        this.name = data.name;
        this.type = data.type;
        this.inUse = data.inUse;
    }
}
exports.Domain = Domain;
class WelcomeShownPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.WelcomeShownPatch = WelcomeShownPatch;
class FeedbackTileShownPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.FeedbackTileShownPatch = FeedbackTileShownPatch;
class UnusableAccount {
    constructor(data) {
        this.contractToolLink = data.contractToolLink;
    }
}
exports.UnusableAccount = UnusableAccount;
class CompletedPart {
    constructor(data) {
        this.number = data.number;
        this.eTag = data.eTag;
    }
}
exports.CompletedPart = CompletedPart;
class BranchBuildState {
    constructor(data) {
        this.state = data.state;
        this.lastBuildDate = data.lastBuildDate;
        this.url = data.url;
    }
}
exports.BranchBuildState = BranchBuildState;
class BranchDeploymentState {
    constructor(data) {
        this.state = data.state;
        this.lastDeploymentDate = data.lastDeploymentDate;
    }
}
exports.BranchDeploymentState = BranchDeploymentState;
class BranchOverview {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.deleted = data.deleted;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
        this.productionBranch = data.productionBranch;
        this.webUrl = data.webUrl;
        this.workflowPresent = data.workflowPresent;
    }
}
exports.BranchOverview = BranchOverview;
class BuildJobLog {
    constructor(data) {
        this.name = data.name;
        this.steps = data.steps;
    }
}
exports.BuildJobLog = BuildJobLog;
class BranchBuild {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.number = data.number;
        this.createdDate = data.createdDate;
    }
}
exports.BranchBuild = BranchBuild;
class PhpVersionPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.PhpVersionPatch = PhpVersionPatch;
class CronJob {
    constructor(data) {
        this.schedule = data.schedule;
        this.command = data.command;
    }
}
exports.CronJob = CronJob;
class DetailedDeploymentState {
    constructor(data) {
        this.state = data.state;
        this.lastDeployedDate = data.lastDeployedDate;
        this.occurrenceTime = data.occurrenceTime;
        this.externalId = data.externalId;
        this.url = data.url;
    }
}
exports.DetailedDeploymentState = DetailedDeploymentState;
class DetailedWebspace {
    constructor(data) {
        this.state = data.state;
        this.webspace = data.webspace;
    }
}
exports.DetailedWebspace = DetailedWebspace;
class DetailedDatabase {
    constructor(data) {
        this.state = data.state;
        this.database = data.database;
    }
}
exports.DetailedDatabase = DetailedDatabase;
class DeploymentDomain {
    constructor(data) {
        this.name = data.name;
        this.customDomain = data.customDomain;
    }
}
exports.DeploymentDomain = DeploymentDomain;
class DeploymentOverview {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.webspace = data.webspace;
        this.database = data.database;
        this.domain = data.domain;
    }
}
exports.DeploymentOverview = DeploymentOverview;
class DeploymentPhpVersionPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.DeploymentPhpVersionPatch = DeploymentPhpVersionPatch;
class DeploymentNamePatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.DeploymentNamePatch = DeploymentNamePatch;
class Runtime {
    constructor(data) {
        this.name = data.name;
        this.version = data.version;
    }
}
exports.Runtime = Runtime;
class BuildTool {
    constructor(data) {
        this.name = data.name;
        this.version = data.version;
    }
}
exports.BuildTool = BuildTool;
class DetectionResult {
    constructor(data) {
        this.detectionBase = data.detectionBase;
        this.buildSteps = data.buildSteps;
        this.templateStep = data.templateStep;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.requiredFeatures = data.requiredFeatures;
    }
}
exports.DetectionResult = DetectionResult;
class BuildStepDefinition {
    constructor(data) {
        this.name = data.name;
        this.completionHints = data.completionHints;
        this.commands = data.commands;
        this.variables = data.variables;
    }
}
exports.BuildStepDefinition = BuildStepDefinition;
class DeployStepDefinition {
    constructor(data) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}
exports.DeployStepDefinition = DeployStepDefinition;
class SupportedInput {
    constructor(data) {
        this.supported = data.supported;
        this.compensation = data.compensation;
        this.reason = data.reason;
    }
}
exports.SupportedInput = SupportedInput;
class TemplateFileDefinition {
    constructor(data) {
        this.type = data.type;
        this.path = data.path;
    }
}
exports.TemplateFileDefinition = TemplateFileDefinition;
class Supported {
    constructor(data) {
        this.supported = data.supported;
        this.compensation = data.compensation;
        this.reason = data.reason;
    }
}
exports.Supported = Supported;
class GithubIdentity {
    constructor(data) {
        this.name = data.name;
        this.type = data.type;
        this.avatarUrl = data.avatarUrl;
    }
}
exports.GithubIdentity = GithubIdentity;
class GithubRepository {
    constructor(data) {
        this.fullName = data.fullName;
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
        this.defaultBranch = data.defaultBranch;
        this.inUse = data.inUse;
    }
}
exports.GithubRepository = GithubRepository;
class BuildStepDescription {
    constructor(data) {
        this.name = data.name;
        this.displayName = data.displayName;
        this.exampleVariables = data.exampleVariables;
        this.runtimeName = data.runtimeName;
        this.buildToolName = data.buildToolName;
        this.exampleCommands = data.exampleCommands;
        this.description = data.description;
    }
}
exports.BuildStepDescription = BuildStepDescription;
class TemplateFileCompletionDescription {
    constructor(data) {
        this.type = data.type;
        this.displayName = data.displayName;
        this.supportedInputs = data.supportedInputs;
        this.description = data.description;
    }
}
exports.TemplateFileCompletionDescription = TemplateFileCompletionDescription;
class BuildStepInput {
    constructor(data) {
        this.name = data.name;
        this.buildToolVersion = data.buildToolVersion;
        this.runtimeVersion = data.runtimeVersion;
        this.commands = data.commands;
        this.variables = data.variables;
    }
}
exports.BuildStepInput = BuildStepInput;
class TemplateStepInput {
    constructor(data) {
        this.templateFiles = data.templateFiles;
        this.secrets = data.secrets;
    }
}
exports.TemplateStepInput = TemplateStepInput;
class DeployStepInput {
    constructor(data) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}
exports.DeployStepInput = DeployStepInput;
class DestinationRepositoryInput {
    constructor(data) {
        this.privateRepo = data.privateRepo;
        this.repository = data.repository;
    }
}
exports.DestinationRepositoryInput = DestinationRepositoryInput;
class DatabaseSettings {
    constructor(data) {
        this.type = data.type;
        this.version = data.version;
    }
}
exports.DatabaseSettings = DatabaseSettings;
class GitRepository {
    constructor(data) {
        this.fullName = data.fullName;
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
    }
}
exports.GitRepository = GitRepository;
class ProjectOverview {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
        this.productionBranchId = data.productionBranchId;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.spawningEnabled = data.spawningEnabled;
        this.siteUrls = data.siteUrls;
        this.deleted = data.deleted;
        this.lastChangedDate = data.lastChangedDate;
        this.providerType = data.providerType;
        this.domains = data.domains;
        this.projectType = data.projectType;
    }
}
exports.ProjectOverview = ProjectOverview;
class ProjectNamePatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.ProjectNamePatch = ProjectNamePatch;
class AutomaticDeploymentEnabledPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.AutomaticDeploymentEnabledPatch = AutomaticDeploymentEnabledPatch;
class ProjectTypePatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.ProjectTypePatch = ProjectTypePatch;
class DefaultPhpVersionPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.DefaultPhpVersionPatch = DefaultPhpVersionPatch;
class VisitorStatisticsEnabledPatch {
    constructor(data) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}
exports.VisitorStatisticsEnabledPatch = VisitorStatisticsEnabledPatch;
class Token {
    constructor(data) {
        this.type = data.type;
    }
}
exports.Token = Token;
class GitHubConnection {
    constructor(data) {
        this.type = data.type;
        this.installationId = data.installationId;
    }
}
exports.GitHubConnection = GitHubConnection;
class BuildStepLog {
    constructor(data) {
        this.name = data.name;
        this.log = data.log;
    }
}
exports.BuildStepLog = BuildStepLog;
class Webspace {
    constructor(data) {
        this.id = data.id;
        this.sshHost = data.sshHost;
        this.siteUrl = data.siteUrl;
        this.phpVersion = data.phpVersion;
        this.quota = data.quota;
        this.username = data.username;
    }
}
exports.Webspace = Webspace;
class Database {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.host = data.host;
        this.version = data.version;
        this.databaseQuota = data.databaseQuota;
        this.username = data.username;
    }
}
exports.Database = Database;
class WebspaceOverview {
    constructor(data) {
        this.id = data.id;
        this.sshHost = data.sshHost;
        this.siteUrl = data.siteUrl;
        this.phpVersion = data.phpVersion;
    }
}
exports.WebspaceOverview = WebspaceOverview;
class DatabaseOverview {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.host = data.host;
        this.version = data.version;
    }
}
exports.DatabaseOverview = DatabaseOverview;
class GithubRepositoryInput {
    constructor(data) {
        this.type = data.type;
        this.owner = data.owner;
        this.repo = data.repo;
        this.branch = data.branch;
    }
}
exports.GithubRepositoryInput = GithubRepositoryInput;
class DetectionBase {
    constructor(data) {
        this.type = data.type;
        this.framework = data.framework;
    }
}
exports.DetectionBase = DetectionBase;
class TemplateStep {
    constructor(data) {
        this.templateFiles = data.templateFiles;
        this.secrets = data.secrets;
    }
}
exports.TemplateStep = TemplateStep;
class DeployStep {
    constructor(data) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}
exports.DeployStep = DeployStep;
class Variable {
    constructor(data) {
        this.value = data.value;
        this.secret = data.secret;
    }
}
exports.Variable = Variable;
class DeploymentConfiguration {
    constructor(data) {
        this.remoteCommands = data.remoteCommands;
        this.excludes = data.excludes;
    }
}
exports.DeploymentConfiguration = DeploymentConfiguration;
class DependencyDetection {
    constructor(data) {
        this.type = data.type;
        this.filename = data.filename;
        this.patterns = data.patterns;
    }
}
exports.DependencyDetection = DependencyDetection;
class FileContentDetection {
    constructor(data) {
        this.type = data.type;
        this.filename = data.filename;
        this.patterns = data.patterns;
    }
}
exports.FileContentDetection = FileContentDetection;
class FileDetection {
    constructor(data) {
        this.type = data.type;
        this.filename = data.filename;
    }
}
exports.FileDetection = FileDetection;
class LanguageDetection {
    constructor(data) {
        this.type = data.type;
        this.language = data.language;
    }
}
exports.LanguageDetection = LanguageDetection;
class VariableInput {
    constructor(data) {
        this.value = data.value;
        this.secret = data.secret;
    }
}
exports.VariableInput = VariableInput;
class TemplateFileInput {
    constructor(data) {
        this.content = data.content;
        this.path = data.path;
    }
}
exports.TemplateFileInput = TemplateFileInput;
class DeploymentConfigurationInput {
    constructor(data) {
        this.remoteCommands = data.remoteCommands;
        this.excludes = data.excludes;
    }
}
exports.DeploymentConfigurationInput = DeploymentConfigurationInput;
class WebspaceQuota {
    constructor(data) {
        this.storageQuota = data.storageQuota;
        this.storageUsage = data.storageUsage;
        this.fileQuota = data.fileQuota;
        this.fileUsage = data.fileUsage;
    }
}
exports.WebspaceQuota = WebspaceQuota;
class DatabaseQuota {
    constructor(data) {
        this.tableSpaceQuota = data.tableSpaceQuota;
        this.tableSpaceUsage = data.tableSpaceUsage;
    }
}
exports.DatabaseQuota = DatabaseQuota;
class FrameworkIdentifier {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
    }
}
exports.FrameworkIdentifier = FrameworkIdentifier;
class RemoteCommands {
    constructor(data) {
        this.preDeployment = data.preDeployment;
        this.postDeployment = data.postDeployment;
    }
}
exports.RemoteCommands = RemoteCommands;
class IonosSpaceUserSessionApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/user-session
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceUserSessionApi.createUserSession
     */
    createUserSession(options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/user-session`, options: options });
    }
}
exports.IonosSpaceUserSessionApiClient = IonosSpaceUserSessionApiClient;
class IonosSpaceMetadataApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/metadata/build-step-descriptions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getBuildStepDescriptions
     */
    getBuildStepDescriptions(options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/metadata/build-step-descriptions`, options: options });
    }
    /**
     * HTTP GET /v4/metadata/template-file-descriptions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getTemplateFileCompletionDescriptions
     */
    getTemplateFileCompletionDescriptions(options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/metadata/template-file-descriptions`, options: options });
    }
    /**
     * HTTP GET /v4/metadata/versions/{toolName}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getAvailableVersions
     */
    getAvailableVersions(toolName, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/metadata/versions/${toolName}`, options: options });
    }
}
exports.IonosSpaceMetadataApiClient = IonosSpaceMetadataApiClient;
class IonosSpaceFrameworkApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/frameworks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.createFramework
     */
    createFramework(frameworkDefinition, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/frameworks`, data: frameworkDefinition, options: options });
    }
    /**
     * HTTP GET /v4/frameworks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.getFrameworks
     */
    getFrameworks(queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/frameworks`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP DELETE /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.deleteFramework
     */
    deleteFramework(frameworkId, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/frameworks/${frameworkId}`, options: options });
    }
    /**
     * HTTP GET /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.getFramework
     */
    getFramework(frameworkId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/frameworks/${frameworkId}`, options: options });
    }
    /**
     * HTTP PUT /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.updateFramework
     */
    updateFramework(frameworkId, frameworkDefinition, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/frameworks/${frameworkId}`, data: frameworkDefinition, options: options });
    }
}
exports.IonosSpaceFrameworkApiClient = IonosSpaceFrameworkApiClient;
class IonosSpaceDeploymentApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createDeployment
     */
    createDeployment(accountId, projectId, branchId, deployment, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments`, data: deployment, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.getDeployments
     */
    getDeployments(accountId, projectId, branchId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.deleteDeployment
     */
    deleteDeployment(accountId, projectId, branchId, deploymentId, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.getDeployment
     */
    getDeployment(accountId, projectId, branchId, deploymentId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, options: options });
    }
    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.patchDeployment
     */
    patchDeployment(accountId, projectId, branchId, deploymentId, deploymentPatch, options) {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, data: deploymentPatch, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/connect-domain
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.connectDomain
     */
    connectDomain(accountId, projectId, branchId, deploymentId, connectDomain, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/connect-domain`, data: connectDomain, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/databases/{databaseId}/phpmyadmin-sessions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createPhpMyAdminSession
     */
    createPhpMyAdminSession(accountId, projectId, branchId, deploymentId, databaseId, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/databases/${databaseId}/phpmyadmin-sessions`, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/disconnect-domain
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.disconnectDomain
     */
    disconnectDomain(accountId, projectId, branchId, deploymentId, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/disconnect-domain`, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/state
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.updateDeploymentState
     */
    updateDeploymentState(accountId, projectId, branchId, deploymentId, deploymentState, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/state`, data: deploymentState, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/webspaces/{webspaceId}/cron-jobs
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.configureCronJobs
     */
    configureCronJobs(accountId, projectId, branchId, deploymentId, webspaceId, cronJobs, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/webspaces/${webspaceId}/cron-jobs`, data: cronJobs, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/webspaces/{webspaceId}/directory-sessions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createDirectorySession
     */
    createDirectorySession(accountId, projectId, branchId, deploymentId, webspaceId, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/webspaces/${webspaceId}/directory-sessions`, options: options });
    }
}
exports.IonosSpaceDeploymentApiClient = IonosSpaceDeploymentApiClient;
class IonosSpaceTokensApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/tokens
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.createToken
     */
    createToken(accountId, tokenAuth, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/tokens`, data: tokenAuth, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/tokens
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.getTokens
     */
    getTokens(accountId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/tokens`, options: options });
    }
    /**
     * HTTP DELETE /v4/accounts/{accountId}/tokens/{type}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.deleteToken
     */
    deleteToken(accountId, type, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/accounts/${accountId}/tokens/${type}`, options: options });
    }
}
exports.IonosSpaceTokensApiClient = IonosSpaceTokensApiClient;
class IonosSpaceGithubWebhookApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/github-hooks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubWebhookApi.onHook
     */
    onHook(payload, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/github-hooks`, data: payload, options: options });
    }
}
exports.IonosSpaceGithubWebhookApiClient = IonosSpaceGithubWebhookApiClient;
class IonosSpaceProjectTypesApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/project-types
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.getProjectTypes
     */
    getProjectTypes(queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/project-types`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP POST /v4/project-types
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.save
     */
    save(projectType, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/project-types`, data: projectType, options: options });
    }
    /**
     * HTTP GET /v4/project-types/{name}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.getProjectType
     */
    getProjectType(name, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/project-types/${name}`, options: options });
    }
}
exports.IonosSpaceProjectTypesApiClient = IonosSpaceProjectTypesApiClient;
class IonosSpaceBranchApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBranches
     */
    getBranches(accountId, projectId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.deleteBranch
     */
    deleteBranch(accountId, projectId, branchId, branchDeleteOperation, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, data: branchDeleteOperation, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBranch
     */
    getBranch(accountId, projectId, branchId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, options: options });
    }
    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.patchBranch
     */
    patchBranch(accountId, projectId, branchId, branchPatch, options) {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, data: branchPatch, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/builds
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBuilds
     */
    getBuilds(accountId, projectId, branchId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/builds`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/builds/{buildId}/logs
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBuildLogs
     */
    getBuildLogs(accountId, projectId, branchId, buildId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/builds/${buildId}/logs`, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/finish-deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.finishDeployments
     */
    finishDeployments(accountId, projectId, branchId, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/finish-deployments`, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/trigger-deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.triggerDeployments
     */
    triggerDeployments(accountId, projectId, branchId, input, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/trigger-deployments`, data: input, options: options });
    }
}
exports.IonosSpaceBranchApiClient = IonosSpaceBranchApiClient;
class IonosSpaceEventsApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/events
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceEventsApi.receiveAndRegister
     */
    receiveAndRegister(accountId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/events`, queryParams: queryParams, options: options });
    }
}
exports.IonosSpaceEventsApiClient = IonosSpaceEventsApiClient;
class IonosSpaceDetectionApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/complete-build-step
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.completeBuildStep
     */
    completeBuildStep(accountId, completionInput, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/complete-build-step`, data: completionInput, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/complete-template-file
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.completeTemplateFile
     */
    completeTemplateFile(accountId, completionInput, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/complete-template-file`, data: completionInput, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/detect-steps
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.detectWorkflow
     */
    detectWorkflow(accountId, detection, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/detect-steps`, data: detection, options: options });
    }
}
exports.IonosSpaceDetectionApiClient = IonosSpaceDetectionApiClient;
class IonosSpaceArtifactApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.getArtifact
     */
    getArtifact(accountId, projectId, branchId, version, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}`, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}/complete
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.completeUpload
     */
    completeUpload(accountId, projectId, branchId, version, input, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}/complete`, data: input, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}/prepare
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.prepareUpload
     */
    prepareUpload(accountId, projectId, branchId, version, input, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}/prepare`, data: input, options: options });
    }
}
exports.IonosSpaceArtifactApiClient = IonosSpaceArtifactApiClient;
class IonosSpaceProjectApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.createProject
     */
    createProject(accountId, project, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects`, data: project, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getProjects
     */
    getProjects(accountId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.deleteProject
     */
    deleteProject(accountId, projectId, projectDeleteOperation, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}`, data: projectDeleteOperation, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getProject
     */
    getProject(accountId, projectId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}`, options: options });
    }
    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.patchProject
     */
    patchProject(accountId, projectId, projectPatch, options) {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}`, data: projectPatch, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/create-workflow-migration-pull-request
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.createWorkflowMigrationPullRequest
     */
    createWorkflowMigrationPullRequest(accountId, projectId, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/create-workflow-migration-pull-request`, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/lock
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.lockProject
     */
    lockProject(accountId, projectId, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/lock`, options: options });
    }
    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/lock
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.unlockProject
     */
    unlockProject(accountId, projectId, options) {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/lock`, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/possible-upgrades
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getUpgrades
     */
    getUpgrades(accountId, projectId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/possible-upgrades`, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/validate-deployment-name
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.validateDeploymentName
     */
    validateDeploymentName(accountId, projectId, deploymentNameValidationRequest, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/projects/${projectId}/validate-deployment-name`, data: deploymentNameValidationRequest, options: options });
    }
}
exports.IonosSpaceProjectApiClient = IonosSpaceProjectApiClient;
class IonosSpaceGithubApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/github-installations
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.createInstallation
     */
    createInstallation(accountId, installation, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/github-installations`, data: installation, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getInstallation
     */
    getInstallation(accountId, installationId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/github-installations/${installationId}`, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}/repositories
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getRepositories
     */
    getRepositories(accountId, installationId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/github-installations/${installationId}/repositories`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP HEAD /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.existsGithubRepository
     */
    existsGithubRepository(accountId, installationId, owner, repo, options) {
        return this.httpClient.request({ method: "HEAD", url: uriEncoding `v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}`, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}/branches
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getBranches
     */
    getBranches(accountId, installationId, owner, repo, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}/branches`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP HEAD /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}/branches/{branchName}/workflows
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.existsIonosSpaceWorkflow
     */
    existsIonosSpaceWorkflow(accountId, installationId, owner, repo, branchName, options) {
        return this.httpClient.request({ method: "HEAD", url: uriEncoding `v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}/branches/${branchName}/workflows`, options: options });
    }
}
exports.IonosSpaceGithubApiClient = IonosSpaceGithubApiClient;
class IonosSpaceAccountApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/accounts
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getAccounts
     */
    getAccounts(queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getAccount
     */
    getAccount(accountId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}`, options: options });
    }
    /**
     * HTTP PATCH /v4/accounts/{accountId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.patchAccount
     */
    patchAccount(accountId, accountPatch, options) {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding `v4/accounts/${accountId}`, data: accountPatch, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/disconnect-domains
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.disconnectDomains
     */
    disconnectDomains(accountId, input, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/disconnect-domains`, data: input, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/domains
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getDomains
     */
    getDomains(accountId, queryParams, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/domains`, queryParams: queryParams, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/feedbacks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.createFeedback
     */
    createFeedback(accountId, feedback, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/feedbacks`, data: feedback, options: options });
    }
    /**
     * HTTP PUT /v4/accounts/{accountId}/reset
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.resetAccount
     */
    resetAccount(accountId, options) {
        return this.httpClient.request({ method: "PUT", url: uriEncoding `v4/accounts/${accountId}/reset`, options: options });
    }
    /**
     * HTTP GET /v4/accounts/{accountId}/upsell-information
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getUpsellInformation
     */
    getUpsellInformation(accountId, options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/accounts/${accountId}/upsell-information`, options: options });
    }
    /**
     * HTTP POST /v4/accounts/{accountId}/validate-project-name
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.validateProjectName
     */
    validateProjectName(accountId, projectNameValidationRequest, options) {
        return this.httpClient.request({ method: "POST", url: uriEncoding `v4/accounts/${accountId}/validate-project-name`, data: projectNameValidationRequest, options: options });
    }
}
exports.IonosSpaceAccountApiClient = IonosSpaceAccountApiClient;
class IonosSpaceAccountInfoApiClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * HTTP GET /v4/account-info
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountInfoApi.getAccountInfo
     */
    getAccountInfo(options) {
        return this.httpClient.request({ method: "GET", url: uriEncoding `v4/account-info`, options: options });
    }
}
exports.IonosSpaceAccountInfoApiClient = IonosSpaceAccountInfoApiClient;
var BranchChangeType;
(function (BranchChangeType) {
    BranchChangeType["CREATE"] = "CREATE";
    BranchChangeType["DELETE"] = "DELETE";
    BranchChangeType["PURGE"] = "PURGE";
    BranchChangeType["UN_DELETE"] = "UN_DELETE";
    BranchChangeType["BUILD_STATE"] = "BUILD_STATE";
    BranchChangeType["WORKFLOW_PRESENT"] = "WORKFLOW_PRESENT";
    BranchChangeType["DEPLOYMENT_STATE"] = "DEPLOYMENT_STATE";
})(BranchChangeType || (exports.BranchChangeType = BranchChangeType = {}));
var ContractChangeType;
(function (ContractChangeType) {
    ContractChangeType["LOCK"] = "LOCK";
    ContractChangeType["UNLOCK"] = "UNLOCK";
    ContractChangeType["PROJECT_TYPES"] = "PROJECT_TYPES";
    ContractChangeType["GITHUB_CONNECTION"] = "GITHUB_CONNECTION";
})(ContractChangeType || (exports.ContractChangeType = ContractChangeType = {}));
var InstallationChangeType;
(function (InstallationChangeType) {
    InstallationChangeType["SUSPEND"] = "SUSPEND";
    InstallationChangeType["UNSUSPEND"] = "UNSUSPEND";
    InstallationChangeType["DELETE"] = "DELETE";
})(InstallationChangeType || (exports.InstallationChangeType = InstallationChangeType = {}));
var ProjectChangeType;
(function (ProjectChangeType) {
    ProjectChangeType["CREATE"] = "CREATE";
    ProjectChangeType["DELETE"] = "DELETE";
    ProjectChangeType["PURGE"] = "PURGE";
    ProjectChangeType["REPO_RENAME"] = "REPO_RENAME";
    ProjectChangeType["PROJECT_TYPE"] = "PROJECT_TYPE";
    ProjectChangeType["LOCK"] = "LOCK";
    ProjectChangeType["UNLOCK"] = "UNLOCK";
    ProjectChangeType["AUTOMATIC_DEPLOYMENT"] = "AUTOMATIC_DEPLOYMENT";
    ProjectChangeType["LOSE_PERMISSION"] = "LOSE_PERMISSION";
    ProjectChangeType["RESTORE_PERMISSION"] = "RESTORE_PERMISSION";
    ProjectChangeType["NAME"] = "NAME";
})(ProjectChangeType || (exports.ProjectChangeType = ProjectChangeType = {}));
var TokenChangeType;
(function (TokenChangeType) {
    TokenChangeType["REVOKE"] = "REVOKE";
})(TokenChangeType || (exports.TokenChangeType = TokenChangeType = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["GITHUB"] = "GITHUB";
})(ProviderType || (exports.ProviderType = ProviderType = {}));
var DeploymentChangeType;
(function (DeploymentChangeType) {
    DeploymentChangeType["CREATE"] = "CREATE";
    DeploymentChangeType["DELETE"] = "DELETE";
    DeploymentChangeType["DEPLOYMENT_STATE"] = "DEPLOYMENT_STATE";
    DeploymentChangeType["WEBSPACE"] = "WEBSPACE";
    DeploymentChangeType["DATABASE"] = "DATABASE";
    DeploymentChangeType["DOMAIN_CONNECT"] = "DOMAIN_CONNECT";
    DeploymentChangeType["DOMAIN_DISCONNECT"] = "DOMAIN_DISCONNECT";
    DeploymentChangeType["NAME"] = "NAME";
})(DeploymentChangeType || (exports.DeploymentChangeType = DeploymentChangeType = {}));
var FrameworkType;
(function (FrameworkType) {
    FrameworkType["SSR"] = "SSR";
    FrameworkType["SSG"] = "SSG";
    FrameworkType["SPA"] = "SPA";
    FrameworkType["PLAIN"] = "PLAIN";
})(FrameworkType || (exports.FrameworkType = FrameworkType = {}));
var Feature;
(function (Feature) {
    Feature["PHP"] = "PHP";
    Feature["MAIL"] = "MAIL";
    Feature["DB"] = "DB";
})(Feature || (exports.Feature = Feature = {}));
var AppAccessType;
(function (AppAccessType) {
    AppAccessType["READ"] = "READ";
    AppAccessType["WRITE"] = "WRITE";
})(AppAccessType || (exports.AppAccessType = AppAccessType = {}));
var DomainType;
(function (DomainType) {
    DomainType["MAIN"] = "MAIN";
    DomainType["SUBDOMAIN"] = "SUBDOMAIN";
    DomainType["XDOMAIN"] = "XDOMAIN";
})(DomainType || (exports.DomainType = DomainType = {}));
var BuildState;
(function (BuildState) {
    BuildState["AWAITING_BUILD"] = "AWAITING_BUILD";
    BuildState["SUCCESS"] = "SUCCESS";
    BuildState["RUNNING"] = "RUNNING";
    BuildState["FAILED"] = "FAILED";
    BuildState["UNKNOWN"] = "UNKNOWN";
})(BuildState || (exports.BuildState = BuildState = {}));
var BranchDeploymentStateType;
(function (BranchDeploymentStateType) {
    BranchDeploymentStateType["RUNNING"] = "RUNNING";
    BranchDeploymentStateType["SUCCESS"] = "SUCCESS";
    BranchDeploymentStateType["FAILED"] = "FAILED";
    BranchDeploymentStateType["PARTLY_FAILED"] = "PARTLY_FAILED";
})(BranchDeploymentStateType || (exports.BranchDeploymentStateType = BranchDeploymentStateType = {}));
var DeploymentState;
(function (DeploymentState) {
    DeploymentState["IN_CREATION"] = "IN_CREATION";
    DeploymentState["CREATED"] = "CREATED";
    DeploymentState["QUEUED"] = "QUEUED";
    DeploymentState["RUNNING"] = "RUNNING";
    DeploymentState["SUCCESS"] = "SUCCESS";
    DeploymentState["FAILED"] = "FAILED";
})(DeploymentState || (exports.DeploymentState = DeploymentState = {}));
var WebspaceState;
(function (WebspaceState) {
    WebspaceState["IN_CREATION"] = "IN_CREATION";
    WebspaceState["CREATED"] = "CREATED";
    WebspaceState["DELETED"] = "DELETED";
})(WebspaceState || (exports.WebspaceState = WebspaceState = {}));
var DatabaseState;
(function (DatabaseState) {
    DatabaseState["IN_CREATION"] = "IN_CREATION";
    DatabaseState["CREATED"] = "CREATED";
    DatabaseState["DELETED"] = "DELETED";
})(DatabaseState || (exports.DatabaseState = DatabaseState = {}));
var Type;
(function (Type) {
    Type["DEPENDENCY"] = "DEPENDENCY";
    Type["FILE_CONTENT"] = "FILE_CONTENT";
    Type["FILE"] = "FILE";
    Type["LANGUAGE"] = "LANGUAGE";
})(Type || (exports.Type = Type = {}));
var GithubIdentityType;
(function (GithubIdentityType) {
    GithubIdentityType["USER"] = "USER";
    GithubIdentityType["ORGANIZATION"] = "ORGANIZATION";
})(GithubIdentityType || (exports.GithubIdentityType = GithubIdentityType = {}));
var DetectionBaseType;
(function (DetectionBaseType) {
    DetectionBaseType["FRAMEWORK"] = "FRAMEWORK";
    DetectionBaseType["IONOS_YAML"] = "IONOS_YAML";
})(DetectionBaseType || (exports.DetectionBaseType = DetectionBaseType = {}));
function uriEncoding(template, ...substitutions) {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
// Added by 'AxiosClientExtension' extension
const axios_1 = __importDefault(__nccwpck_require__(7269));
class AxiosHttpClient {
    constructor(axios) {
        this.axios = axios;
    }
    request(requestConfig) {
        function assign(target, source) {
            if (source != undefined) {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }
        const config = {};
        config.method = requestConfig.method; // `string` in axios 0.16.0, `Method` in axios 0.19.0
        config.url = requestConfig.url;
        config.params = requestConfig.queryParams;
        config.data = requestConfig.data;
        assign(config, requestConfig.options);
        const copyFn = requestConfig.copyFn;
        const axiosResponse = this.axios.request(config);
        return axiosResponse.then(axiosResponse => {
            if (copyFn && axiosResponse.data) {
                axiosResponse.originalData = axiosResponse.data;
                axiosResponse.data = copyFn(axiosResponse.data);
            }
            return axiosResponse;
        });
    }
}
class AxiosIonosSpaceUserSessionApiClient extends IonosSpaceUserSessionApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceUserSessionApiClient = AxiosIonosSpaceUserSessionApiClient;
class AxiosIonosSpaceMetadataApiClient extends IonosSpaceMetadataApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceMetadataApiClient = AxiosIonosSpaceMetadataApiClient;
class AxiosIonosSpaceFrameworkApiClient extends IonosSpaceFrameworkApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceFrameworkApiClient = AxiosIonosSpaceFrameworkApiClient;
class AxiosIonosSpaceDeploymentApiClient extends IonosSpaceDeploymentApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceDeploymentApiClient = AxiosIonosSpaceDeploymentApiClient;
class AxiosIonosSpaceTokensApiClient extends IonosSpaceTokensApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceTokensApiClient = AxiosIonosSpaceTokensApiClient;
class AxiosIonosSpaceGithubWebhookApiClient extends IonosSpaceGithubWebhookApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceGithubWebhookApiClient = AxiosIonosSpaceGithubWebhookApiClient;
class AxiosIonosSpaceProjectTypesApiClient extends IonosSpaceProjectTypesApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceProjectTypesApiClient = AxiosIonosSpaceProjectTypesApiClient;
class AxiosIonosSpaceBranchApiClient extends IonosSpaceBranchApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceBranchApiClient = AxiosIonosSpaceBranchApiClient;
class AxiosIonosSpaceEventsApiClient extends IonosSpaceEventsApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceEventsApiClient = AxiosIonosSpaceEventsApiClient;
class AxiosIonosSpaceDetectionApiClient extends IonosSpaceDetectionApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceDetectionApiClient = AxiosIonosSpaceDetectionApiClient;
class AxiosIonosSpaceArtifactApiClient extends IonosSpaceArtifactApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceArtifactApiClient = AxiosIonosSpaceArtifactApiClient;
class AxiosIonosSpaceProjectApiClient extends IonosSpaceProjectApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceProjectApiClient = AxiosIonosSpaceProjectApiClient;
class AxiosIonosSpaceGithubApiClient extends IonosSpaceGithubApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceGithubApiClient = AxiosIonosSpaceGithubApiClient;
class AxiosIonosSpaceAccountApiClient extends IonosSpaceAccountApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceAccountApiClient = AxiosIonosSpaceAccountApiClient;
class AxiosIonosSpaceAccountInfoApiClient extends IonosSpaceAccountInfoApiClient {
    constructor(baseURL, axiosInstance = axios_1.default.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
exports.AxiosIonosSpaceAccountInfoApiClient = AxiosIonosSpaceAccountInfoApiClient;


/***/ }),

/***/ 734:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.downloadArtifact = downloadArtifact;
const axios_1 = __nccwpck_require__(537);
const https = __importStar(__nccwpck_require__(5692));
const path_1 = __nccwpck_require__(6928);
const fs = __importStar(__nccwpck_require__(9896));
const core_1 = __nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const tar = __importStar(__nccwpck_require__(5942));
const util_1 = __nccwpck_require__(7790);
function downloadArtifact(configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolvedPath = (0, path_1.resolve)(configuration.folder);
        if (!fs.existsSync(resolvedPath)) {
            try {
                fs.mkdirSync(resolvedPath);
            }
            catch (error) {
                throw new Error('Failed to create target folder for download of stored deployment: ' + (0, util_1.getErrorMessage)(error));
            }
        }
        const client = (0, axios_1.createClient)(configuration.serviceHost, configuration.apiKey);
        const response = yield client
            .getArtifact('me', configuration.projectId, configuration.branchId, configuration.version)
            .catch((error) => {
            throw new Error('Failed to get download url for stored deployment: ' + (0, util_1.getErrorMessage)(error));
        });
        yield https
            .get(response.data.url, (res) => {
            res.pipe(tar.x({ C: resolvedPath }));
        })
            .on('error', (err) => {
            throw new Error('Failed to download stored deployment: ' + err.message);
        });
        (0, core_1.info)('Artifact downloaded');
    });
}


/***/ }),

/***/ 4016:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runAction = runAction;
const upload_1 = __nccwpck_require__(4831);
const download_1 = __nccwpck_require__(734);
const core_1 = __nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function runAction(configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        if (configuration.action === 'upload') {
            yield (0, upload_1.uploadArtifact)(configuration);
            return {};
        }
        else if (configuration.action === 'download') {
            yield (0, download_1.downloadArtifact)(configuration);
            return {};
        }
        else {
            (0, core_1.error)(`Action ${configuration.action} is not supported`);
            return {};
        }
    });
}


/***/ }),

/***/ 4831:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uploadArtifact = uploadArtifact;
const p_limit_1 = __importDefault(__nccwpck_require__(370));
const path = __importStar(__nccwpck_require__(6928));
const fs = __importStar(__nccwpck_require__(9896));
const axios_1 = __importDefault(__nccwpck_require__(7269));
const ionos_space_api_1 = __nccwpck_require__(9037);
const axios_2 = __nccwpck_require__(537);
const axios_retry_1 = __importDefault(__nccwpck_require__(750));
const core_1 = __nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const async_mutex_1 = __nccwpck_require__(2626);
const tar = __importStar(__nccwpck_require__(5942));
const zlib_1 = __nccwpck_require__(3106);
const stream_1 = __nccwpck_require__(2203);
const util_1 = __nccwpck_require__(9023);
const util_2 = __nccwpck_require__(7790);
const FILE_CHUNK_SIZE = 10000000;
const limit = (0, p_limit_1.default)(20);
function uploadArtifact(configuration) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolvedPath = fs.realpathSync(configuration.folder);
        if (!fs.existsSync(resolvedPath) || !fs.lstatSync(resolvedPath).isDirectory()) {
            throw new Error(`${configuration.folder} doesn't exist`);
        }
        (0, core_1.info)('Compress deployment');
        yield tar.c({
            file: 'deployment.tar',
            C: resolvedPath,
            prefix: 'deployment/',
            filter: (filePath) => path.basename(filePath) !== 'deployment.tar',
        }, ['.']);
        if (configuration.configFile && fs.existsSync(configuration.configFile)) {
            fs.copyFileSync(configuration.configFile, '.deploy-now/config.yaml');
            yield tar.u({ file: 'deployment.tar' }, ['.deploy-now/config.yaml']);
        }
        const pipe = (0, util_1.promisify)(stream_1.pipeline);
        yield pipe(fs.createReadStream('deployment.tar'), (0, zlib_1.createGzip)(), fs.createWriteStream('deployment.tar.gz'));
        (0, core_1.info)('Deployment compressed');
        const file = fs.readFileSync('deployment.tar.gz');
        const client = (0, axios_2.createClient)(configuration.serviceHost, configuration.apiKey);
        (0, core_1.info)('Initiate upload');
        const response = yield client
            .prepareUpload('me', configuration.projectId, configuration.branchId, configuration.version, new ionos_space_api_1.ArtifactUploadInput({ size: file.length }))
            .catch((error) => {
            throw new Error('Failed to initialize upload of deployment: ' + (0, util_2.getErrorMessage)(error));
        });
        const urls = response.data.urls;
        const axios = axios_1.default.create();
        (0, axios_retry_1.default)(axios, {
            retries: 3,
            retryDelay: (retryCount) => Math.pow(1.2, retryCount) * 1000,
        });
        delete axios.defaults.headers.put['Content-Type'];
        const parts = [];
        const mutex = new async_mutex_1.Mutex();
        let finished = 0;
        urls.forEach((url, index) => {
            const start = index * FILE_CHUNK_SIZE;
            const end = (index + 1) * FILE_CHUNK_SIZE;
            const blob = index < urls.length ? file.subarray(start, end) : file.subarray(start);
            parts.push({ url: url, blob: blob });
        });
        const resParts = yield Promise.all(parts.map((part, index) => limit(() => {
            const result = axios.put(part.url, part.blob).catch((error) => {
                throw new Error(`Failed to upload part ${index} of deployment: ` + (0, util_2.getErrorMessage)(error));
            });
            mutex.acquire().then((release) => __awaiter(this, void 0, void 0, function* () {
                try {
                    finished++;
                    (0, core_1.info)(`Uploaded ${(finished / parts.length) * 100}%`);
                }
                finally {
                    release();
                }
            }));
            return result;
        })));
        const completedParts = resParts.map((part, index) => new ionos_space_api_1.CompletedPart({
            number: index + 1,
            eTag: part.headers.etag,
        }));
        yield client
            .completeUpload('me', configuration.projectId, configuration.branchId, configuration.version, completedParts)
            .catch((error) => {
            throw new Error('Failed to inform Deploy Now of finished deployment upload: ' + (0, util_2.getErrorMessage)(error));
        });
        (0, core_1.info)('Completed upload');
    });
}


/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getErrorMessage = getErrorMessage;
function getErrorMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }
    return error;
}


/***/ }),

/***/ 2825:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const actions_core_1 = __importDefault(__nccwpck_require__(5633));
const action_1 = __nccwpck_require__(4016);
actions_core_1.default.run(action_1.runAction, (input) => ({
    serviceHost: input.required('service-host'),
    apiKey: input.required('api-key'),
    projectId: input.required('project-id'),
    branchId: input.required('branch-id'),
    version: input.required('version'),
    folder: input.required('folder'),
    action: input.required('action'),
    configFile: input.optional('config-file'),
}));


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 181:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5675:
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";
module.exports = require("node:assert");

/***/ }),

/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 3024:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 1455:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 6760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 7075:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 6193:
/***/ ((module) => {

"use strict";
module.exports = require("node:string_decoder");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 2018:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7016:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 3106:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 750:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_OPTIONS = exports.linearDelay = exports.exponentialDelay = exports.retryAfter = exports.isNetworkOrIdempotentRequestError = exports.isIdempotentRequestError = exports.isSafeRequestError = exports.isRetryableError = exports.isNetworkError = exports.namespace = void 0;
const is_retry_allowed_1 = __importDefault(__nccwpck_require__(178));
exports.namespace = 'axios-retry';
function isNetworkError(error) {
    const CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
    if (error.response) {
        return false;
    }
    if (!error.code) {
        return false;
    }
    // Prevents retrying timed out & cancelled requests
    if (CODE_EXCLUDE_LIST.includes(error.code)) {
        return false;
    }
    // Prevents retrying unsafe errors
    return (0, is_retry_allowed_1.default)(error);
}
exports.isNetworkError = isNetworkError;
const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
function isRetryableError(error) {
    return (error.code !== 'ECONNABORTED' &&
        (!error.response ||
            error.response.status === 429 ||
            (error.response.status >= 500 && error.response.status <= 599)));
}
exports.isRetryableError = isRetryableError;
function isSafeRequestError(error) {
    var _a;
    if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
        // Cannot determine if the request can be retried
        return false;
    }
    return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isSafeRequestError = isSafeRequestError;
function isIdempotentRequestError(error) {
    var _a;
    if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
        // Cannot determine if the request can be retried
        return false;
    }
    return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isIdempotentRequestError = isIdempotentRequestError;
function isNetworkOrIdempotentRequestError(error) {
    return isNetworkError(error) || isIdempotentRequestError(error);
}
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
function retryAfter(error = undefined) {
    var _a;
    const retryAfterHeader = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.headers['retry-after'];
    if (!retryAfterHeader) {
        return 0;
    }
    // if the retry after header is a number, convert it to milliseconds
    let retryAfterMs = (Number(retryAfterHeader) || 0) * 1000;
    // If the retry after header is a date, get the number of milliseconds until that date
    if (retryAfterMs === 0) {
        retryAfterMs = (new Date(retryAfterHeader).valueOf() || 0) - Date.now();
    }
    return Math.max(0, retryAfterMs);
}
exports.retryAfter = retryAfter;
function noDelay(_retryNumber = 0, error = undefined) {
    return Math.max(0, retryAfter(error));
}
function exponentialDelay(retryNumber = 0, error = undefined, delayFactor = 100) {
    const calculatedDelay = Math.pow(2, retryNumber) * delayFactor;
    const delay = Math.max(calculatedDelay, retryAfter(error));
    const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
    return delay + randomSum;
}
exports.exponentialDelay = exponentialDelay;
/**
 * Linear delay
 * @param {number | undefined} delayFactor - delay factor in milliseconds (default: 100)
 * @returns {function} (retryNumber: number, error: AxiosError | undefined) => number
 */
function linearDelay(delayFactor = 100) {
    return (retryNumber = 0, error = undefined) => {
        const delay = retryNumber * delayFactor;
        return Math.max(delay, retryAfter(error));
    };
}
exports.linearDelay = linearDelay;
exports.DEFAULT_OPTIONS = {
    retries: 3,
    retryCondition: isNetworkOrIdempotentRequestError,
    retryDelay: noDelay,
    shouldResetTimeout: false,
    onRetry: () => { },
    onMaxRetryTimesExceeded: () => { },
    validateResponse: null
};
function getRequestOptions(config, defaultOptions) {
    return Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_OPTIONS), defaultOptions), config[exports.namespace]);
}
function setCurrentState(config, defaultOptions, resetLastRequestTime = false) {
    const currentState = getRequestOptions(config, defaultOptions || {});
    currentState.retryCount = currentState.retryCount || 0;
    if (!currentState.lastRequestTime || resetLastRequestTime) {
        currentState.lastRequestTime = Date.now();
    }
    config[exports.namespace] = currentState;
    return currentState;
}
function fixConfig(axiosInstance, config) {
    // @ts-ignore
    if (axiosInstance.defaults.agent === config.agent) {
        // @ts-ignore
        delete config.agent;
    }
    if (axiosInstance.defaults.httpAgent === config.httpAgent) {
        delete config.httpAgent;
    }
    if (axiosInstance.defaults.httpsAgent === config.httpsAgent) {
        delete config.httpsAgent;
    }
}
function shouldRetry(currentState, error) {
    return __awaiter(this, void 0, void 0, function* () {
        const { retries, retryCondition } = currentState;
        const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
        // This could be a promise
        if (typeof shouldRetryOrPromise === 'object') {
            try {
                const shouldRetryPromiseResult = yield shouldRetryOrPromise;
                // keep return true unless shouldRetryPromiseResult return false for compatibility
                return shouldRetryPromiseResult !== false;
            }
            catch (_err) {
                return false;
            }
        }
        return shouldRetryOrPromise;
    });
}
function handleRetry(axiosInstance, currentState, error, config) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        currentState.retryCount += 1;
        const { retryDelay, shouldResetTimeout, onRetry } = currentState;
        const delay = retryDelay(currentState.retryCount, error);
        // Axios fails merging this configuration to the default configuration because it has an issue
        // with circular structures: https://github.com/mzabriskie/axios/issues/370
        fixConfig(axiosInstance, config);
        if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
            const lastRequestDuration = Date.now() - currentState.lastRequestTime;
            const timeout = config.timeout - lastRequestDuration - delay;
            if (timeout <= 0) {
                return Promise.reject(error);
            }
            config.timeout = timeout;
        }
        config.transformRequest = [(data) => data];
        yield onRetry(currentState.retryCount, error, config);
        if ((_a = config.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
            return Promise.resolve(axiosInstance(config));
        }
        return new Promise((resolve) => {
            var _a;
            const abortListener = () => {
                clearTimeout(timeout);
                resolve(axiosInstance(config));
            };
            const timeout = setTimeout(() => {
                var _a;
                resolve(axiosInstance(config));
                if ((_a = config.signal) === null || _a === void 0 ? void 0 : _a.removeEventListener) {
                    config.signal.removeEventListener('abort', abortListener);
                }
            }, delay);
            if ((_a = config.signal) === null || _a === void 0 ? void 0 : _a.addEventListener) {
                config.signal.addEventListener('abort', abortListener, { once: true });
            }
        });
    });
}
function handleMaxRetryTimesExceeded(currentState, error) {
    return __awaiter(this, void 0, void 0, function* () {
        if (currentState.retryCount >= currentState.retries)
            yield currentState.onMaxRetryTimesExceeded(error, currentState.retryCount);
    });
}
const axiosRetry = (axiosInstance, defaultOptions) => {
    const requestInterceptorId = axiosInstance.interceptors.request.use((config) => {
        var _a;
        setCurrentState(config, defaultOptions, true);
        if ((_a = config[exports.namespace]) === null || _a === void 0 ? void 0 : _a.validateResponse) {
            // by setting this, all HTTP responses will be go through the error interceptor first
            config.validateStatus = () => false;
        }
        return config;
    });
    const responseInterceptorId = axiosInstance.interceptors.response.use(null, (error) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { config } = error;
        // If we have no information to retry the request
        if (!config) {
            return Promise.reject(error);
        }
        const currentState = setCurrentState(config, defaultOptions);
        if (error.response && ((_a = currentState.validateResponse) === null || _a === void 0 ? void 0 : _a.call(currentState, error.response))) {
            // no issue with response
            return error.response;
        }
        if (yield shouldRetry(currentState, error)) {
            return handleRetry(axiosInstance, currentState, error, config);
        }
        yield handleMaxRetryTimesExceeded(currentState, error);
        return Promise.reject(error);
    }));
    return { requestInterceptorId, responseInterceptorId };
};
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.linearDelay = linearDelay;
axiosRetry.isRetryableError = isRetryableError;
exports["default"] = axiosRetry;


/***/ }),

/***/ 5942:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
var d=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var We=d(C=>{"use strict";var yo=C&&C.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(C,"__esModule",{value:!0});C.Minipass=C.isWritable=C.isReadable=C.isStream=void 0;var Br=typeof process=="object"&&process?process:{stdout:null,stderr:null},es=__nccwpck_require__(8474),xr=yo(__nccwpck_require__(7075)),Eo=__nccwpck_require__(6193),bo=s=>!!s&&typeof s=="object"&&(s instanceof Wt||s instanceof xr.default||(0,C.isReadable)(s)||(0,C.isWritable)(s));C.isStream=bo;var So=s=>!!s&&typeof s=="object"&&s instanceof es.EventEmitter&&typeof s.pipe=="function"&&s.pipe!==xr.default.Writable.prototype.pipe;C.isReadable=So;var go=s=>!!s&&typeof s=="object"&&s instanceof es.EventEmitter&&typeof s.write=="function"&&typeof s.end=="function";C.isWritable=go;var le=Symbol("EOF"),ue=Symbol("maybeEmitEnd"),_e=Symbol("emittedEnd"),zt=Symbol("emittingEnd"),ft=Symbol("emittedError"),kt=Symbol("closed"),zr=Symbol("read"),jt=Symbol("flush"),kr=Symbol("flushChunk"),K=Symbol("encoding"),Ue=Symbol("decoder"),R=Symbol("flowing"),dt=Symbol("paused"),qe=Symbol("resume"),O=Symbol("buffer"),I=Symbol("pipes"),v=Symbol("bufferLength"),Ki=Symbol("bufferPush"),xt=Symbol("bufferShift"),N=Symbol("objectMode"),y=Symbol("destroyed"),Vi=Symbol("error"),$i=Symbol("emitData"),jr=Symbol("emitEnd"),Xi=Symbol("emitEnd2"),J=Symbol("async"),Qi=Symbol("abort"),Ut=Symbol("aborted"),mt=Symbol("signal"),Pe=Symbol("dataListeners"),k=Symbol("discarded"),pt=s=>Promise.resolve().then(s),Ro=s=>s(),Oo=s=>s==="end"||s==="finish"||s==="prefinish",vo=s=>s instanceof ArrayBuffer||!!s&&typeof s=="object"&&s.constructor&&s.constructor.name==="ArrayBuffer"&&s.byteLength>=0,To=s=>!Buffer.isBuffer(s)&&ArrayBuffer.isView(s),qt=class{src;dest;opts;ondrain;constructor(e,t,i){this.src=e,this.dest=t,this.opts=i,this.ondrain=()=>e[qe](),this.dest.on("drain",this.ondrain)}unpipe(){this.dest.removeListener("drain",this.ondrain)}proxyErrors(e){}end(){this.unpipe(),this.opts.end&&this.dest.end()}},Ji=class extends qt{unpipe(){this.src.removeListener("error",this.proxyErrors),super.unpipe()}constructor(e,t,i){super(e,t,i),this.proxyErrors=r=>this.dest.emit("error",r),e.on("error",this.proxyErrors)}},Do=s=>!!s.objectMode,Po=s=>!s.objectMode&&!!s.encoding&&s.encoding!=="buffer",Wt=class extends es.EventEmitter{[R]=!1;[dt]=!1;[I]=[];[O]=[];[N];[K];[J];[Ue];[le]=!1;[_e]=!1;[zt]=!1;[kt]=!1;[ft]=null;[v]=0;[y]=!1;[mt];[Ut]=!1;[Pe]=0;[k]=!1;writable=!0;readable=!0;constructor(...e){let t=e[0]||{};if(super(),t.objectMode&&typeof t.encoding=="string")throw new TypeError("Encoding and objectMode may not be used together");Do(t)?(this[N]=!0,this[K]=null):Po(t)?(this[K]=t.encoding,this[N]=!1):(this[N]=!1,this[K]=null),this[J]=!!t.async,this[Ue]=this[K]?new Eo.StringDecoder(this[K]):null,t&&t.debugExposeBuffer===!0&&Object.defineProperty(this,"buffer",{get:()=>this[O]}),t&&t.debugExposePipes===!0&&Object.defineProperty(this,"pipes",{get:()=>this[I]});let{signal:i}=t;i&&(this[mt]=i,i.aborted?this[Qi]():i.addEventListener("abort",()=>this[Qi]()))}get bufferLength(){return this[v]}get encoding(){return this[K]}set encoding(e){throw new Error("Encoding must be set at instantiation time")}setEncoding(e){throw new Error("Encoding must be set at instantiation time")}get objectMode(){return this[N]}set objectMode(e){throw new Error("objectMode must be set at instantiation time")}get async(){return this[J]}set async(e){this[J]=this[J]||!!e}[Qi](){this[Ut]=!0,this.emit("abort",this[mt]?.reason),this.destroy(this[mt]?.reason)}get aborted(){return this[Ut]}set aborted(e){}write(e,t,i){if(this[Ut])return!1;if(this[le])throw new Error("write after end");if(this[y])return this.emit("error",Object.assign(new Error("Cannot call write after a stream was destroyed"),{code:"ERR_STREAM_DESTROYED"})),!0;typeof t=="function"&&(i=t,t="utf8"),t||(t="utf8");let r=this[J]?pt:Ro;if(!this[N]&&!Buffer.isBuffer(e)){if(To(e))e=Buffer.from(e.buffer,e.byteOffset,e.byteLength);else if(vo(e))e=Buffer.from(e);else if(typeof e!="string")throw new Error("Non-contiguous data written to non-objectMode stream")}return this[N]?(this[R]&&this[v]!==0&&this[jt](!0),this[R]?this.emit("data",e):this[Ki](e),this[v]!==0&&this.emit("readable"),i&&r(i),this[R]):e.length?(typeof e=="string"&&!(t===this[K]&&!this[Ue]?.lastNeed)&&(e=Buffer.from(e,t)),Buffer.isBuffer(e)&&this[K]&&(e=this[Ue].write(e)),this[R]&&this[v]!==0&&this[jt](!0),this[R]?this.emit("data",e):this[Ki](e),this[v]!==0&&this.emit("readable"),i&&r(i),this[R]):(this[v]!==0&&this.emit("readable"),i&&r(i),this[R])}read(e){if(this[y])return null;if(this[k]=!1,this[v]===0||e===0||e&&e>this[v])return this[ue](),null;this[N]&&(e=null),this[O].length>1&&!this[N]&&(this[O]=[this[K]?this[O].join(""):Buffer.concat(this[O],this[v])]);let t=this[zr](e||null,this[O][0]);return this[ue](),t}[zr](e,t){if(this[N])this[xt]();else{let i=t;e===i.length||e===null?this[xt]():typeof i=="string"?(this[O][0]=i.slice(e),t=i.slice(0,e),this[v]-=e):(this[O][0]=i.subarray(e),t=i.subarray(0,e),this[v]-=e)}return this.emit("data",t),!this[O].length&&!this[le]&&this.emit("drain"),t}end(e,t,i){return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t="utf8"),e!==void 0&&this.write(e,t),i&&this.once("end",i),this[le]=!0,this.writable=!1,(this[R]||!this[dt])&&this[ue](),this}[qe](){this[y]||(!this[Pe]&&!this[I].length&&(this[k]=!0),this[dt]=!1,this[R]=!0,this.emit("resume"),this[O].length?this[jt]():this[le]?this[ue]():this.emit("drain"))}resume(){return this[qe]()}pause(){this[R]=!1,this[dt]=!0,this[k]=!1}get destroyed(){return this[y]}get flowing(){return this[R]}get paused(){return this[dt]}[Ki](e){this[N]?this[v]+=1:this[v]+=e.length,this[O].push(e)}[xt](){return this[N]?this[v]-=1:this[v]-=this[O][0].length,this[O].shift()}[jt](e=!1){do;while(this[kr](this[xt]())&&this[O].length);!e&&!this[O].length&&!this[le]&&this.emit("drain")}[kr](e){return this.emit("data",e),this[R]}pipe(e,t){if(this[y])return e;this[k]=!1;let i=this[_e];return t=t||{},e===Br.stdout||e===Br.stderr?t.end=!1:t.end=t.end!==!1,t.proxyErrors=!!t.proxyErrors,i?t.end&&e.end():(this[I].push(t.proxyErrors?new Ji(this,e,t):new qt(this,e,t)),this[J]?pt(()=>this[qe]()):this[qe]()),e}unpipe(e){let t=this[I].find(i=>i.dest===e);t&&(this[I].length===1?(this[R]&&this[Pe]===0&&(this[R]=!1),this[I]=[]):this[I].splice(this[I].indexOf(t),1),t.unpipe())}addListener(e,t){return this.on(e,t)}on(e,t){let i=super.on(e,t);if(e==="data")this[k]=!1,this[Pe]++,!this[I].length&&!this[R]&&this[qe]();else if(e==="readable"&&this[v]!==0)super.emit("readable");else if(Oo(e)&&this[_e])super.emit(e),this.removeAllListeners(e);else if(e==="error"&&this[ft]){let r=t;this[J]?pt(()=>r.call(this,this[ft])):r.call(this,this[ft])}return i}removeListener(e,t){return this.off(e,t)}off(e,t){let i=super.off(e,t);return e==="data"&&(this[Pe]=this.listeners("data").length,this[Pe]===0&&!this[k]&&!this[I].length&&(this[R]=!1)),i}removeAllListeners(e){let t=super.removeAllListeners(e);return(e==="data"||e===void 0)&&(this[Pe]=0,!this[k]&&!this[I].length&&(this[R]=!1)),t}get emittedEnd(){return this[_e]}[ue](){!this[zt]&&!this[_e]&&!this[y]&&this[O].length===0&&this[le]&&(this[zt]=!0,this.emit("end"),this.emit("prefinish"),this.emit("finish"),this[kt]&&this.emit("close"),this[zt]=!1)}emit(e,...t){let i=t[0];if(e!=="error"&&e!=="close"&&e!==y&&this[y])return!1;if(e==="data")return!this[N]&&!i?!1:this[J]?(pt(()=>this[$i](i)),!0):this[$i](i);if(e==="end")return this[jr]();if(e==="close"){if(this[kt]=!0,!this[_e]&&!this[y])return!1;let n=super.emit("close");return this.removeAllListeners("close"),n}else if(e==="error"){this[ft]=i,super.emit(Vi,i);let n=!this[mt]||this.listeners("error").length?super.emit("error",i):!1;return this[ue](),n}else if(e==="resume"){let n=super.emit("resume");return this[ue](),n}else if(e==="finish"||e==="prefinish"){let n=super.emit(e);return this.removeAllListeners(e),n}let r=super.emit(e,...t);return this[ue](),r}[$i](e){for(let i of this[I])i.dest.write(e)===!1&&this.pause();let t=this[k]?!1:super.emit("data",e);return this[ue](),t}[jr](){return this[_e]?!1:(this[_e]=!0,this.readable=!1,this[J]?(pt(()=>this[Xi]()),!0):this[Xi]())}[Xi](){if(this[Ue]){let t=this[Ue].end();if(t){for(let i of this[I])i.dest.write(t);this[k]||super.emit("data",t)}}for(let t of this[I])t.end();let e=super.emit("end");return this.removeAllListeners("end"),e}async collect(){let e=Object.assign([],{dataLength:0});this[N]||(e.dataLength=0);let t=this.promise();return this.on("data",i=>{e.push(i),this[N]||(e.dataLength+=i.length)}),await t,e}async concat(){if(this[N])throw new Error("cannot concat in objectMode");let e=await this.collect();return this[K]?e.join(""):Buffer.concat(e,e.dataLength)}async promise(){return new Promise((e,t)=>{this.on(y,()=>t(new Error("stream destroyed"))),this.on("error",i=>t(i)),this.on("end",()=>e())})}[Symbol.asyncIterator](){this[k]=!1;let e=!1,t=async()=>(this.pause(),e=!0,{value:void 0,done:!0});return{next:()=>{if(e)return t();let r=this.read();if(r!==null)return Promise.resolve({done:!1,value:r});if(this[le])return t();let n,o,a=c=>{this.off("data",h),this.off("end",l),this.off(y,u),t(),o(c)},h=c=>{this.off("error",a),this.off("end",l),this.off(y,u),this.pause(),n({value:c,done:!!this[le]})},l=()=>{this.off("error",a),this.off("data",h),this.off(y,u),t(),n({done:!0,value:void 0})},u=()=>a(new Error("stream destroyed"));return new Promise((c,E)=>{o=E,n=c,this.once(y,u),this.once("error",a),this.once("end",l),this.once("data",h)})},throw:t,return:t,[Symbol.asyncIterator](){return this},[Symbol.asyncDispose]:async()=>{}}}[Symbol.iterator](){this[k]=!1;let e=!1,t=()=>(this.pause(),this.off(Vi,t),this.off(y,t),this.off("end",t),e=!0,{done:!0,value:void 0}),i=()=>{if(e)return t();let r=this.read();return r===null?t():{done:!1,value:r}};return this.once("end",t),this.once(Vi,t),this.once(y,t),{next:i,throw:t,return:t,[Symbol.iterator](){return this},[Symbol.dispose]:()=>{}}}destroy(e){if(this[y])return e?this.emit("error",e):this.emit(y),this;this[y]=!0,this[k]=!0,this[O].length=0,this[v]=0;let t=this;return typeof t.close=="function"&&!this[kt]&&t.close(),e?this.emit("error",e):this.emit(y),this}static get isStream(){return C.isStream}};C.Minipass=Wt});var Ke=d(W=>{"use strict";var Ur=W&&W.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(W,"__esModule",{value:!0});W.WriteStreamSync=W.WriteStream=W.ReadStreamSync=W.ReadStream=void 0;var No=Ur(__nccwpck_require__(4434)),B=Ur(__nccwpck_require__(9896)),Mo=We(),Lo=B.default.writev,ye=Symbol("_autoClose"),$=Symbol("_close"),_t=Symbol("_ended"),p=Symbol("_fd"),ts=Symbol("_finished"),fe=Symbol("_flags"),is=Symbol("_flush"),os=Symbol("_handleChunk"),as=Symbol("_makeBuf"),yt=Symbol("_mode"),Ht=Symbol("_needDrain"),Ge=Symbol("_onerror"),Ye=Symbol("_onopen"),ss=Symbol("_onread"),He=Symbol("_onwrite"),Ee=Symbol("_open"),V=Symbol("_path"),we=Symbol("_pos"),ee=Symbol("_queue"),Ze=Symbol("_read"),rs=Symbol("_readSize"),ce=Symbol("_reading"),wt=Symbol("_remain"),ns=Symbol("_size"),Zt=Symbol("_write"),Ne=Symbol("_writing"),Gt=Symbol("_defaultFlag"),Me=Symbol("_errored"),Yt=class extends Mo.Minipass{[Me]=!1;[p];[V];[rs];[ce]=!1;[ns];[wt];[ye];constructor(e,t){if(t=t||{},super(t),this.readable=!0,this.writable=!1,typeof e!="string")throw new TypeError("path must be a string");this[Me]=!1,this[p]=typeof t.fd=="number"?t.fd:void 0,this[V]=e,this[rs]=t.readSize||16*1024*1024,this[ce]=!1,this[ns]=typeof t.size=="number"?t.size:1/0,this[wt]=this[ns],this[ye]=typeof t.autoClose=="boolean"?t.autoClose:!0,typeof this[p]=="number"?this[Ze]():this[Ee]()}get fd(){return this[p]}get path(){return this[V]}write(){throw new TypeError("this is a readable stream")}end(){throw new TypeError("this is a readable stream")}[Ee](){B.default.open(this[V],"r",(e,t)=>this[Ye](e,t))}[Ye](e,t){e?this[Ge](e):(this[p]=t,this.emit("open",t),this[Ze]())}[as](){return Buffer.allocUnsafe(Math.min(this[rs],this[wt]))}[Ze](){if(!this[ce]){this[ce]=!0;let e=this[as]();if(e.length===0)return process.nextTick(()=>this[ss](null,0,e));B.default.read(this[p],e,0,e.length,null,(t,i,r)=>this[ss](t,i,r))}}[ss](e,t,i){this[ce]=!1,e?this[Ge](e):this[os](t,i)&&this[Ze]()}[$](){if(this[ye]&&typeof this[p]=="number"){let e=this[p];this[p]=void 0,B.default.close(e,t=>t?this.emit("error",t):this.emit("close"))}}[Ge](e){this[ce]=!0,this[$](),this.emit("error",e)}[os](e,t){let i=!1;return this[wt]-=e,e>0&&(i=super.write(e<t.length?t.subarray(0,e):t)),(e===0||this[wt]<=0)&&(i=!1,this[$](),super.end()),i}emit(e,...t){switch(e){case"prefinish":case"finish":return!1;case"drain":return typeof this[p]=="number"&&this[Ze](),!1;case"error":return this[Me]?!1:(this[Me]=!0,super.emit(e,...t));default:return super.emit(e,...t)}}};W.ReadStream=Yt;var hs=class extends Yt{[Ee](){let e=!0;try{this[Ye](null,B.default.openSync(this[V],"r")),e=!1}finally{e&&this[$]()}}[Ze](){let e=!0;try{if(!this[ce]){this[ce]=!0;do{let t=this[as](),i=t.length===0?0:B.default.readSync(this[p],t,0,t.length,null);if(!this[os](i,t))break}while(!0);this[ce]=!1}e=!1}finally{e&&this[$]()}}[$](){if(this[ye]&&typeof this[p]=="number"){let e=this[p];this[p]=void 0,B.default.closeSync(e),this.emit("close")}}};W.ReadStreamSync=hs;var Kt=class extends No.default{readable=!1;writable=!0;[Me]=!1;[Ne]=!1;[_t]=!1;[ee]=[];[Ht]=!1;[V];[yt];[ye];[p];[Gt];[fe];[ts]=!1;[we];constructor(e,t){t=t||{},super(t),this[V]=e,this[p]=typeof t.fd=="number"?t.fd:void 0,this[yt]=t.mode===void 0?438:t.mode,this[we]=typeof t.start=="number"?t.start:void 0,this[ye]=typeof t.autoClose=="boolean"?t.autoClose:!0;let i=this[we]!==void 0?"r+":"w";this[Gt]=t.flags===void 0,this[fe]=t.flags===void 0?i:t.flags,this[p]===void 0&&this[Ee]()}emit(e,...t){if(e==="error"){if(this[Me])return!1;this[Me]=!0}return super.emit(e,...t)}get fd(){return this[p]}get path(){return this[V]}[Ge](e){this[$](),this[Ne]=!0,this.emit("error",e)}[Ee](){B.default.open(this[V],this[fe],this[yt],(e,t)=>this[Ye](e,t))}[Ye](e,t){this[Gt]&&this[fe]==="r+"&&e&&e.code==="ENOENT"?(this[fe]="w",this[Ee]()):e?this[Ge](e):(this[p]=t,this.emit("open",t),this[Ne]||this[is]())}end(e,t){return e&&this.write(e,t),this[_t]=!0,!this[Ne]&&!this[ee].length&&typeof this[p]=="number"&&this[He](null,0),this}write(e,t){return typeof e=="string"&&(e=Buffer.from(e,t)),this[_t]?(this.emit("error",new Error("write() after end()")),!1):this[p]===void 0||this[Ne]||this[ee].length?(this[ee].push(e),this[Ht]=!0,!1):(this[Ne]=!0,this[Zt](e),!0)}[Zt](e){B.default.write(this[p],e,0,e.length,this[we],(t,i)=>this[He](t,i))}[He](e,t){e?this[Ge](e):(this[we]!==void 0&&typeof t=="number"&&(this[we]+=t),this[ee].length?this[is]():(this[Ne]=!1,this[_t]&&!this[ts]?(this[ts]=!0,this[$](),this.emit("finish")):this[Ht]&&(this[Ht]=!1,this.emit("drain"))))}[is](){if(this[ee].length===0)this[_t]&&this[He](null,0);else if(this[ee].length===1)this[Zt](this[ee].pop());else{let e=this[ee];this[ee]=[],Lo(this[p],e,this[we],(t,i)=>this[He](t,i))}}[$](){if(this[ye]&&typeof this[p]=="number"){let e=this[p];this[p]=void 0,B.default.close(e,t=>t?this.emit("error",t):this.emit("close"))}}};W.WriteStream=Kt;var ls=class extends Kt{[Ee](){let e;if(this[Gt]&&this[fe]==="r+")try{e=B.default.openSync(this[V],this[fe],this[yt])}catch(t){if(t?.code==="ENOENT")return this[fe]="w",this[Ee]();throw t}else e=B.default.openSync(this[V],this[fe],this[yt]);this[Ye](null,e)}[$](){if(this[ye]&&typeof this[p]=="number"){let e=this[p];this[p]=void 0,B.default.closeSync(e),this.emit("close")}}[Zt](e){let t=!0;try{this[He](null,B.default.writeSync(this[p],e,0,e.length,this[we])),t=!1}finally{if(t)try{this[$]()}catch{}}}};W.WriteStreamSync=ls});var Vt=d(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.dealias=b.isNoFile=b.isFile=b.isAsync=b.isSync=b.isAsyncNoFile=b.isSyncNoFile=b.isAsyncFile=b.isSyncFile=void 0;var Ao=new Map([["C","cwd"],["f","file"],["z","gzip"],["P","preservePaths"],["U","unlink"],["strip-components","strip"],["stripComponents","strip"],["keep-newer","newer"],["keepNewer","newer"],["keep-newer-files","newer"],["keepNewerFiles","newer"],["k","keep"],["keep-existing","keep"],["keepExisting","keep"],["m","noMtime"],["no-mtime","noMtime"],["p","preserveOwner"],["L","follow"],["h","follow"],["onentry","onReadEntry"]]),Io=s=>!!s.sync&&!!s.file;b.isSyncFile=Io;var Co=s=>!s.sync&&!!s.file;b.isAsyncFile=Co;var Fo=s=>!!s.sync&&!s.file;b.isSyncNoFile=Fo;var Bo=s=>!s.sync&&!s.file;b.isAsyncNoFile=Bo;var zo=s=>!!s.sync;b.isSync=zo;var ko=s=>!s.sync;b.isAsync=ko;var jo=s=>!!s.file;b.isFile=jo;var xo=s=>!s.file;b.isNoFile=xo;var Uo=s=>{let e=Ao.get(s);return e||s},qo=(s={})=>{if(!s)return{};let e={};for(let[t,i]of Object.entries(s)){let r=Uo(t);e[r]=i}return e.chmod===void 0&&e.noChmod===!1&&(e.chmod=!0),delete e.noChmod,e};b.dealias=qo});var Ve=d($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.makeCommand=void 0;var Et=Vt(),Wo=(s,e,t,i,r)=>Object.assign((n=[],o,a)=>{Array.isArray(n)&&(o=n,n={}),typeof o=="function"&&(a=o,o=void 0),o?o=Array.from(o):o=[];let h=(0,Et.dealias)(n);if(r?.(h,o),(0,Et.isSyncFile)(h)){if(typeof a=="function")throw new TypeError("callback not supported for sync tar functions");return s(h,o)}else if((0,Et.isAsyncFile)(h)){let l=e(h,o),u=a||void 0;return u?l.then(()=>u(),u):l}else if((0,Et.isSyncNoFile)(h)){if(typeof a=="function")throw new TypeError("callback not supported for sync tar functions");return t(h,o)}else if((0,Et.isAsyncNoFile)(h)){if(typeof a=="function")throw new TypeError("callback only supported with file option");return i(h,o)}else throw new Error("impossible options??")},{syncFile:s,asyncFile:e,syncNoFile:t,asyncNoFile:i,validate:r});$t.makeCommand=Wo});var us=d($e=>{"use strict";var Ho=$e&&$e.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty($e,"__esModule",{value:!0});$e.constants=void 0;var Zo=Ho(__nccwpck_require__(3106)),Go=Zo.default.constants||{ZLIB_VERNUM:4736};$e.constants=Object.freeze(Object.assign(Object.create(null),{Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_VERSION_ERROR:-6,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,DEFLATE:1,INFLATE:2,GZIP:3,GUNZIP:4,DEFLATERAW:5,INFLATERAW:6,UNZIP:7,BROTLI_DECODE:8,BROTLI_ENCODE:9,Z_MIN_WINDOWBITS:8,Z_MAX_WINDOWBITS:15,Z_DEFAULT_WINDOWBITS:15,Z_MIN_CHUNK:64,Z_MAX_CHUNK:1/0,Z_DEFAULT_CHUNK:16384,Z_MIN_MEMLEVEL:1,Z_MAX_MEMLEVEL:9,Z_DEFAULT_MEMLEVEL:8,Z_MIN_LEVEL:-1,Z_MAX_LEVEL:9,Z_DEFAULT_LEVEL:-1,BROTLI_OPERATION_PROCESS:0,BROTLI_OPERATION_FLUSH:1,BROTLI_OPERATION_FINISH:2,BROTLI_OPERATION_EMIT_METADATA:3,BROTLI_MODE_GENERIC:0,BROTLI_MODE_TEXT:1,BROTLI_MODE_FONT:2,BROTLI_DEFAULT_MODE:0,BROTLI_MIN_QUALITY:0,BROTLI_MAX_QUALITY:11,BROTLI_DEFAULT_QUALITY:11,BROTLI_MIN_WINDOW_BITS:10,BROTLI_MAX_WINDOW_BITS:24,BROTLI_LARGE_MAX_WINDOW_BITS:30,BROTLI_DEFAULT_WINDOW:22,BROTLI_MIN_INPUT_BLOCK_BITS:16,BROTLI_MAX_INPUT_BLOCK_BITS:24,BROTLI_PARAM_MODE:0,BROTLI_PARAM_QUALITY:1,BROTLI_PARAM_LGWIN:2,BROTLI_PARAM_LGBLOCK:3,BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING:4,BROTLI_PARAM_SIZE_HINT:5,BROTLI_PARAM_LARGE_WINDOW:6,BROTLI_PARAM_NPOSTFIX:7,BROTLI_PARAM_NDIRECT:8,BROTLI_DECODER_RESULT_ERROR:0,BROTLI_DECODER_RESULT_SUCCESS:1,BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT:2,BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT:3,BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION:0,BROTLI_DECODER_PARAM_LARGE_WINDOW:1,BROTLI_DECODER_NO_ERROR:0,BROTLI_DECODER_SUCCESS:1,BROTLI_DECODER_NEEDS_MORE_INPUT:2,BROTLI_DECODER_NEEDS_MORE_OUTPUT:3,BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE:-1,BROTLI_DECODER_ERROR_FORMAT_RESERVED:-2,BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE:-3,BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET:-4,BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME:-5,BROTLI_DECODER_ERROR_FORMAT_CL_SPACE:-6,BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE:-7,BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT:-8,BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1:-9,BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2:-10,BROTLI_DECODER_ERROR_FORMAT_TRANSFORM:-11,BROTLI_DECODER_ERROR_FORMAT_DICTIONARY:-12,BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS:-13,BROTLI_DECODER_ERROR_FORMAT_PADDING_1:-14,BROTLI_DECODER_ERROR_FORMAT_PADDING_2:-15,BROTLI_DECODER_ERROR_FORMAT_DISTANCE:-16,BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET:-19,BROTLI_DECODER_ERROR_INVALID_ARGUMENTS:-20,BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES:-21,BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS:-22,BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP:-25,BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1:-26,BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2:-27,BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES:-30,BROTLI_DECODER_ERROR_UNREACHABLE:-31},Go))});var vs=d(f=>{"use strict";var Yo=f&&f.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),Ko=f&&f.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),Vo=f&&f.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&Yo(t,e,i[r]);return Ko(t,e),t}})(),$o=f&&f.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(f,"__esModule",{value:!0});f.ZstdDecompress=f.ZstdCompress=f.BrotliDecompress=f.BrotliCompress=f.Unzip=f.InflateRaw=f.DeflateRaw=f.Gunzip=f.Gzip=f.Inflate=f.Deflate=f.Zlib=f.ZlibError=f.constants=void 0;var ds=$o(__nccwpck_require__(2613)),Le=__nccwpck_require__(181),Xo=We(),qr=Vo(__nccwpck_require__(3106)),te=us(),Qo=us();Object.defineProperty(f,"constants",{enumerable:!0,get:function(){return Qo.constants}});var Jo=Le.Buffer.concat,Wr=Object.getOwnPropertyDescriptor(Le.Buffer,"concat"),ea=s=>s,cs=Wr?.writable===!0||Wr?.set!==void 0?s=>{Le.Buffer.concat=s?ea:Jo}:s=>{},Ae=Symbol("_superWrite"),Ie=class extends Error{code;errno;constructor(e,t){super("zlib: "+e.message,{cause:e}),this.code=e.code,this.errno=e.errno,this.code||(this.code="ZLIB_ERROR"),this.message="zlib: "+e.message,Error.captureStackTrace(this,t??this.constructor)}get name(){return"ZlibError"}};f.ZlibError=Ie;var fs=Symbol("flushFlag"),bt=class extends Xo.Minipass{#e=!1;#i=!1;#s;#n;#r;#t;#o;get sawError(){return this.#e}get handle(){return this.#t}get flushFlag(){return this.#s}constructor(e,t){if(!e||typeof e!="object")throw new TypeError("invalid options for ZlibBase constructor");if(super(e),this.#s=e.flush??0,this.#n=e.finishFlush??0,this.#r=e.fullFlushFlag??0,typeof qr[t]!="function")throw new TypeError("Compression method not supported: "+t);try{this.#t=new qr[t](e)}catch(i){throw new Ie(i,this.constructor)}this.#o=i=>{this.#e||(this.#e=!0,this.close(),this.emit("error",i))},this.#t?.on("error",i=>this.#o(new Ie(i))),this.once("end",()=>this.close)}close(){this.#t&&(this.#t.close(),this.#t=void 0,this.emit("close"))}reset(){if(!this.#e)return(0,ds.default)(this.#t,"zlib binding closed"),this.#t.reset?.()}flush(e){this.ended||(typeof e!="number"&&(e=this.#r),this.write(Object.assign(Le.Buffer.alloc(0),{[fs]:e})))}end(e,t,i){return typeof e=="function"&&(i=e,t=void 0,e=void 0),typeof t=="function"&&(i=t,t=void 0),e&&(t?this.write(e,t):this.write(e)),this.flush(this.#n),this.#i=!0,super.end(i)}get ended(){return this.#i}[Ae](e){return super.write(e)}write(e,t,i){if(typeof t=="function"&&(i=t,t="utf8"),typeof e=="string"&&(e=Le.Buffer.from(e,t)),this.#e)return;(0,ds.default)(this.#t,"zlib binding closed");let r=this.#t._handle,n=r.close;r.close=()=>{};let o=this.#t.close;this.#t.close=()=>{},cs(!0);let a;try{let l=typeof e[fs]=="number"?e[fs]:this.#s;a=this.#t._processChunk(e,l),cs(!1)}catch(l){cs(!1),this.#o(new Ie(l,this.write))}finally{this.#t&&(this.#t._handle=r,r.close=n,this.#t.close=o,this.#t.removeAllListeners("error"))}this.#t&&this.#t.on("error",l=>this.#o(new Ie(l,this.write)));let h;if(a)if(Array.isArray(a)&&a.length>0){let l=a[0];h=this[Ae](Le.Buffer.from(l));for(let u=1;u<a.length;u++)h=this[Ae](a[u])}else h=this[Ae](Le.Buffer.from(a));return i&&i(),h}},ie=class extends bt{#e;#i;constructor(e,t){e=e||{},e.flush=e.flush||te.constants.Z_NO_FLUSH,e.finishFlush=e.finishFlush||te.constants.Z_FINISH,e.fullFlushFlag=te.constants.Z_FULL_FLUSH,super(e,t),this.#e=e.level,this.#i=e.strategy}params(e,t){if(!this.sawError){if(!this.handle)throw new Error("cannot switch params when binding is closed");if(!this.handle.params)throw new Error("not supported in this implementation");if(this.#e!==e||this.#i!==t){this.flush(te.constants.Z_SYNC_FLUSH),(0,ds.default)(this.handle,"zlib binding closed");let i=this.handle.flush;this.handle.flush=(r,n)=>{typeof r=="function"&&(n=r,r=this.flushFlag),this.flush(r),n?.()};try{this.handle.params(e,t)}finally{this.handle.flush=i}this.handle&&(this.#e=e,this.#i=t)}}}};f.Zlib=ie;var ms=class extends ie{constructor(e){super(e,"Deflate")}};f.Deflate=ms;var ps=class extends ie{constructor(e){super(e,"Inflate")}};f.Inflate=ps;var _s=class extends ie{#e;constructor(e){super(e,"Gzip"),this.#e=e&&!!e.portable}[Ae](e){return this.#e?(this.#e=!1,e[9]=255,super[Ae](e)):super[Ae](e)}};f.Gzip=_s;var ws=class extends ie{constructor(e){super(e,"Gunzip")}};f.Gunzip=ws;var ys=class extends ie{constructor(e){super(e,"DeflateRaw")}};f.DeflateRaw=ys;var Es=class extends ie{constructor(e){super(e,"InflateRaw")}};f.InflateRaw=Es;var bs=class extends ie{constructor(e){super(e,"Unzip")}};f.Unzip=bs;var Xt=class extends bt{constructor(e,t){e=e||{},e.flush=e.flush||te.constants.BROTLI_OPERATION_PROCESS,e.finishFlush=e.finishFlush||te.constants.BROTLI_OPERATION_FINISH,e.fullFlushFlag=te.constants.BROTLI_OPERATION_FLUSH,super(e,t)}},Ss=class extends Xt{constructor(e){super(e,"BrotliCompress")}};f.BrotliCompress=Ss;var gs=class extends Xt{constructor(e){super(e,"BrotliDecompress")}};f.BrotliDecompress=gs;var Qt=class extends bt{constructor(e,t){e=e||{},e.flush=e.flush||te.constants.ZSTD_e_continue,e.finishFlush=e.finishFlush||te.constants.ZSTD_e_end,e.fullFlushFlag=te.constants.ZSTD_e_flush,super(e,t)}},Rs=class extends Qt{constructor(e){super(e,"ZstdCompress")}};f.ZstdCompress=Rs;var Os=class extends Qt{constructor(e){super(e,"ZstdDecompress")}};f.ZstdDecompress=Os});var Gr=d(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});Xe.parse=Xe.encode=void 0;var ta=(s,e)=>{if(Number.isSafeInteger(s))s<0?sa(s,e):ia(s,e);else throw Error("cannot encode number outside of javascript safe integer range");return e};Xe.encode=ta;var ia=(s,e)=>{e[0]=128;for(var t=e.length;t>1;t--)e[t-1]=s&255,s=Math.floor(s/256)},sa=(s,e)=>{e[0]=255;var t=!1;s=s*-1;for(var i=e.length;i>1;i--){var r=s&255;s=Math.floor(s/256),t?e[i-1]=Hr(r):r===0?e[i-1]=0:(t=!0,e[i-1]=Zr(r))}},ra=s=>{let e=s[0],t=e===128?oa(s.subarray(1,s.length)):e===255?na(s):null;if(t===null)throw Error("invalid base256 encoding");if(!Number.isSafeInteger(t))throw Error("parsed number outside of javascript safe integer range");return t};Xe.parse=ra;var na=s=>{for(var e=s.length,t=0,i=!1,r=e-1;r>-1;r--){var n=Number(s[r]),o;i?o=Hr(n):n===0?o=n:(i=!0,o=Zr(n)),o!==0&&(t-=o*Math.pow(256,e-r-1))}return t},oa=s=>{for(var e=s.length,t=0,i=e-1;i>-1;i--){var r=Number(s[i]);r!==0&&(t+=r*Math.pow(256,e-i-1))}return t},Hr=s=>(255^s)&255,Zr=s=>(255^s)+1&255});var Ts=d(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.code=j.name=j.isName=j.isCode=void 0;var aa=s=>j.name.has(s);j.isCode=aa;var ha=s=>j.code.has(s);j.isName=ha;j.name=new Map([["0","File"],["","OldFile"],["1","Link"],["2","SymbolicLink"],["3","CharacterDevice"],["4","BlockDevice"],["5","Directory"],["6","FIFO"],["7","ContiguousFile"],["g","GlobalExtendedHeader"],["x","ExtendedHeader"],["A","SolarisACL"],["D","GNUDumpDir"],["I","Inode"],["K","NextFileHasLongLinkpath"],["L","NextFileHasLongPath"],["M","ContinuationFile"],["N","OldGnuLongPath"],["S","SparseFile"],["V","TapeVolumeHeader"],["X","OldExtendedHeader"]]);j.code=new Map(Array.from(j.name).map(s=>[s[1],s[0]]))});var Je=d(se=>{"use strict";var la=se&&se.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),ua=se&&se.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),Yr=se&&se.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&la(t,e,i[r]);return ua(t,e),t}})();Object.defineProperty(se,"__esModule",{value:!0});se.Header=void 0;var Qe=__nccwpck_require__(6760),Kr=Yr(Gr()),St=Yr(Ts()),Ns=class{cksumValid=!1;needPax=!1;nullBlock=!1;block;path;mode;uid;gid;size;cksum;#e="Unsupported";linkpath;uname;gname;devmaj=0;devmin=0;atime;ctime;mtime;charset;comment;constructor(e,t=0,i,r){Buffer.isBuffer(e)?this.decode(e,t||0,i,r):e&&this.#i(e)}decode(e,t,i,r){if(t||(t=0),!e||!(e.length>=t+512))throw new Error("need 512 bytes for header");this.path=i?.path??Ce(e,t,100),this.mode=i?.mode??r?.mode??be(e,t+100,8),this.uid=i?.uid??r?.uid??be(e,t+108,8),this.gid=i?.gid??r?.gid??be(e,t+116,8),this.size=i?.size??r?.size??be(e,t+124,12),this.mtime=i?.mtime??r?.mtime??Ds(e,t+136,12),this.cksum=be(e,t+148,12),r&&this.#i(r,!0),i&&this.#i(i);let n=Ce(e,t+156,1);if(St.isCode(n)&&(this.#e=n||"0"),this.#e==="0"&&this.path.slice(-1)==="/"&&(this.#e="5"),this.#e==="5"&&(this.size=0),this.linkpath=Ce(e,t+157,100),e.subarray(t+257,t+265).toString()==="ustar\x0000")if(this.uname=i?.uname??r?.uname??Ce(e,t+265,32),this.gname=i?.gname??r?.gname??Ce(e,t+297,32),this.devmaj=i?.devmaj??r?.devmaj??be(e,t+329,8)??0,this.devmin=i?.devmin??r?.devmin??be(e,t+337,8)??0,e[t+475]!==0){let a=Ce(e,t+345,155);this.path=a+"/"+this.path}else{let a=Ce(e,t+345,130);a&&(this.path=a+"/"+this.path),this.atime=i?.atime??r?.atime??Ds(e,t+476,12),this.ctime=i?.ctime??r?.ctime??Ds(e,t+488,12)}let o=256;for(let a=t;a<t+148;a++)o+=e[a];for(let a=t+156;a<t+512;a++)o+=e[a];this.cksumValid=o===this.cksum,this.cksum===void 0&&o===256&&(this.nullBlock=!0)}#i(e,t=!1){Object.assign(this,Object.fromEntries(Object.entries(e).filter(([i,r])=>!(r==null||i==="path"&&t||i==="linkpath"&&t||i==="global"))))}encode(e,t=0){if(e||(e=this.block=Buffer.alloc(512)),this.#e==="Unsupported"&&(this.#e="0"),!(e.length>=t+512))throw new Error("need 512 bytes for header");let i=this.ctime||this.atime?130:155,r=ca(this.path||"",i),n=r[0],o=r[1];this.needPax=!!r[2],this.needPax=Fe(e,t,100,n)||this.needPax,this.needPax=Se(e,t+100,8,this.mode)||this.needPax,this.needPax=Se(e,t+108,8,this.uid)||this.needPax,this.needPax=Se(e,t+116,8,this.gid)||this.needPax,this.needPax=Se(e,t+124,12,this.size)||this.needPax,this.needPax=Ps(e,t+136,12,this.mtime)||this.needPax,e[t+156]=this.#e.charCodeAt(0),this.needPax=Fe(e,t+157,100,this.linkpath)||this.needPax,e.write("ustar\x0000",t+257,8),this.needPax=Fe(e,t+265,32,this.uname)||this.needPax,this.needPax=Fe(e,t+297,32,this.gname)||this.needPax,this.needPax=Se(e,t+329,8,this.devmaj)||this.needPax,this.needPax=Se(e,t+337,8,this.devmin)||this.needPax,this.needPax=Fe(e,t+345,i,o)||this.needPax,e[t+475]!==0?this.needPax=Fe(e,t+345,155,o)||this.needPax:(this.needPax=Fe(e,t+345,130,o)||this.needPax,this.needPax=Ps(e,t+476,12,this.atime)||this.needPax,this.needPax=Ps(e,t+488,12,this.ctime)||this.needPax);let a=256;for(let h=t;h<t+148;h++)a+=e[h];for(let h=t+156;h<t+512;h++)a+=e[h];return this.cksum=a,Se(e,t+148,8,this.cksum),this.cksumValid=!0,this.needPax}get type(){return this.#e==="Unsupported"?this.#e:St.name.get(this.#e)}get typeKey(){return this.#e}set type(e){let t=String(St.code.get(e));if(St.isCode(t)||t==="Unsupported")this.#e=t;else if(St.isCode(e))this.#e=e;else throw new TypeError("invalid entry type: "+e)}};se.Header=Ns;var ca=(s,e)=>{let i=s,r="",n,o=Qe.posix.parse(s).root||".";if(Buffer.byteLength(i)<100)n=[i,r,!1];else{r=Qe.posix.dirname(i),i=Qe.posix.basename(i);do Buffer.byteLength(i)<=100&&Buffer.byteLength(r)<=e?n=[i,r,!1]:Buffer.byteLength(i)>100&&Buffer.byteLength(r)<=e?n=[i.slice(0,99),r,!0]:(i=Qe.posix.join(Qe.posix.basename(r),i),r=Qe.posix.dirname(r));while(r!==o&&n===void 0);n||(n=[s.slice(0,99),"",!0])}return n},Ce=(s,e,t)=>s.subarray(e,e+t).toString("utf8").replace(/\0.*/,""),Ds=(s,e,t)=>fa(be(s,e,t)),fa=s=>s===void 0?void 0:new Date(s*1e3),be=(s,e,t)=>Number(s[e])&128?Kr.parse(s.subarray(e,e+t)):ma(s,e,t),da=s=>isNaN(s)?void 0:s,ma=(s,e,t)=>da(parseInt(s.subarray(e,e+t).toString("utf8").replace(/\0.*$/,"").trim(),8)),pa={12:8589934591,8:2097151},Se=(s,e,t,i)=>i===void 0?!1:i>pa[t]||i<0?(Kr.encode(i,s.subarray(e,e+t)),!0):(_a(s,e,t,i),!1),_a=(s,e,t,i)=>s.write(wa(i,t),e,t,"ascii"),wa=(s,e)=>ya(Math.floor(s).toString(8),e),ya=(s,e)=>(s.length===e-1?s:new Array(e-s.length-1).join("0")+s+" ")+"\0",Ps=(s,e,t,i)=>i===void 0?!1:Se(s,e,t,i.getTime()/1e3),Ea=new Array(156).join("\0"),Fe=(s,e,t,i)=>i===void 0?!1:(s.write(i+Ea,e,t,"utf8"),i.length!==Buffer.byteLength(i)||i.length>t)});var ei=d(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.Pax=void 0;var ba=__nccwpck_require__(6760),Sa=Je(),Ms=class s{atime;mtime;ctime;charset;comment;gid;uid;gname;uname;linkpath;dev;ino;nlink;path;size;mode;global;constructor(e,t=!1){this.atime=e.atime,this.charset=e.charset,this.comment=e.comment,this.ctime=e.ctime,this.dev=e.dev,this.gid=e.gid,this.global=t,this.gname=e.gname,this.ino=e.ino,this.linkpath=e.linkpath,this.mtime=e.mtime,this.nlink=e.nlink,this.path=e.path,this.size=e.size,this.uid=e.uid,this.uname=e.uname}encode(){let e=this.encodeBody();if(e==="")return Buffer.allocUnsafe(0);let t=Buffer.byteLength(e),i=512*Math.ceil(1+t/512),r=Buffer.allocUnsafe(i);for(let n=0;n<512;n++)r[n]=0;new Sa.Header({path:("PaxHeader/"+(0,ba.basename)(this.path??"")).slice(0,99),mode:this.mode||420,uid:this.uid,gid:this.gid,size:t,mtime:this.mtime,type:this.global?"GlobalExtendedHeader":"ExtendedHeader",linkpath:"",uname:this.uname||"",gname:this.gname||"",devmaj:0,devmin:0,atime:this.atime,ctime:this.ctime}).encode(r),r.write(e,512,t,"utf8");for(let n=t+512;n<r.length;n++)r[n]=0;return r}encodeBody(){return this.encodeField("path")+this.encodeField("ctime")+this.encodeField("atime")+this.encodeField("dev")+this.encodeField("ino")+this.encodeField("nlink")+this.encodeField("charset")+this.encodeField("comment")+this.encodeField("gid")+this.encodeField("gname")+this.encodeField("linkpath")+this.encodeField("mtime")+this.encodeField("size")+this.encodeField("uid")+this.encodeField("uname")}encodeField(e){if(this[e]===void 0)return"";let t=this[e],i=t instanceof Date?t.getTime()/1e3:t,r=" "+(e==="dev"||e==="ino"||e==="nlink"?"SCHILY.":"")+e+"="+i+`
`,n=Buffer.byteLength(r),o=Math.floor(Math.log(n)/Math.log(10))+1;return n+o>=Math.pow(10,o)&&(o+=1),o+n+r}static parse(e,t,i=!1){return new s(ga(Ra(e),t),i)}};Jt.Pax=Ms;var ga=(s,e)=>e?Object.assign({},e,s):s,Ra=s=>s.replace(/\n$/,"").split(`
`).reduce(Oa,Object.create(null)),Oa=(s,e)=>{let t=parseInt(e,10);if(t!==Buffer.byteLength(e)+1)return s;e=e.slice((t+" ").length);let i=e.split("="),r=i.shift();if(!r)return s;let n=r.replace(/^SCHILY\.(dev|ino|nlink)/,"$1"),o=i.join("=");return s[n]=/^([A-Z]+\.)?([mac]|birth|creation)time$/.test(n)?new Date(Number(o)*1e3):/^[0-9]+$/.test(o)?+o:o,s}});var et=d(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.normalizeWindowsPath=void 0;var va=process.env.TESTING_TAR_FAKE_PLATFORM||process.platform;ti.normalizeWindowsPath=va!=="win32"?s=>s:s=>s&&s.replace(/\\/g,"/")});var ri=d(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.ReadEntry=void 0;var Ta=We(),ii=et(),Ls=class extends Ta.Minipass{extended;globalExtended;header;startBlockSize;blockRemain;remain;type;meta=!1;ignore=!1;path;mode;uid;gid;uname;gname;size=0;mtime;atime;ctime;linkpath;dev;ino;nlink;invalid=!1;absolute;unsupported=!1;constructor(e,t,i){switch(super({}),this.pause(),this.extended=t,this.globalExtended=i,this.header=e,this.remain=e.size??0,this.startBlockSize=512*Math.ceil(this.remain/512),this.blockRemain=this.startBlockSize,this.type=e.type,this.type){case"File":case"OldFile":case"Link":case"SymbolicLink":case"CharacterDevice":case"BlockDevice":case"Directory":case"FIFO":case"ContiguousFile":case"GNUDumpDir":break;case"NextFileHasLongLinkpath":case"NextFileHasLongPath":case"OldGnuLongPath":case"GlobalExtendedHeader":case"ExtendedHeader":case"OldExtendedHeader":this.meta=!0;break;default:this.ignore=!0}if(!e.path)throw new Error("no path provided for tar.ReadEntry");this.path=(0,ii.normalizeWindowsPath)(e.path),this.mode=e.mode,this.mode&&(this.mode=this.mode&4095),this.uid=e.uid,this.gid=e.gid,this.uname=e.uname,this.gname=e.gname,this.size=this.remain,this.mtime=e.mtime,this.atime=e.atime,this.ctime=e.ctime,this.linkpath=e.linkpath?(0,ii.normalizeWindowsPath)(e.linkpath):void 0,this.uname=e.uname,this.gname=e.gname,t&&this.#e(t),i&&this.#e(i,!0)}write(e){let t=e.length;if(t>this.blockRemain)throw new Error("writing more to entry than is appropriate");let i=this.remain,r=this.blockRemain;return this.remain=Math.max(0,i-t),this.blockRemain=Math.max(0,r-t),this.ignore?!0:i>=t?super.write(e):super.write(e.subarray(0,i))}#e(e,t=!1){e.path&&(e.path=(0,ii.normalizeWindowsPath)(e.path)),e.linkpath&&(e.linkpath=(0,ii.normalizeWindowsPath)(e.linkpath)),Object.assign(this,Object.fromEntries(Object.entries(e).filter(([i,r])=>!(r==null||i==="path"&&t))))}};si.ReadEntry=Ls});var oi=d(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.warnMethod=void 0;var Da=(s,e,t,i={})=>{s.file&&(i.file=s.file),s.cwd&&(i.cwd=s.cwd),i.code=t instanceof Error&&t.code||e,i.tarCode=e,!s.strict&&i.recoverable!==!1?(t instanceof Error&&(i=Object.assign(t,i),t=t.message),s.emit("warn",e,t,i)):t instanceof Error?s.emit("error",Object.assign(t,i)):s.emit("error",Object.assign(new Error(`${e}: ${t}`),i))};ni.warnMethod=Da});var mi=d(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.Parser=void 0;var Pa=__nccwpck_require__(4434),As=vs(),Vr=Je(),$r=ei(),Na=ri(),Ma=oi(),La=1024*1024,zs=Buffer.from([31,139]),ks=Buffer.from([40,181,47,253]),Aa=Math.max(zs.length,ks.length),H=Symbol("state"),Be=Symbol("writeEntry"),de=Symbol("readEntry"),Is=Symbol("nextEntry"),Xr=Symbol("processEntry"),re=Symbol("extendedHeader"),gt=Symbol("globalExtendedHeader"),ge=Symbol("meta"),Qr=Symbol("emitMeta"),_=Symbol("buffer"),me=Symbol("queue"),Re=Symbol("ended"),Cs=Symbol("emittedEnd"),ze=Symbol("emit"),S=Symbol("unzip"),ai=Symbol("consumeChunk"),hi=Symbol("consumeChunkSub"),Fs=Symbol("consumeBody"),Jr=Symbol("consumeMeta"),en=Symbol("consumeHeader"),Rt=Symbol("consuming"),Bs=Symbol("bufferConcat"),li=Symbol("maybeEnd"),tt=Symbol("writing"),Oe=Symbol("aborted"),ui=Symbol("onDone"),ke=Symbol("sawValidEntry"),ci=Symbol("sawNullBlock"),fi=Symbol("sawEOF"),tn=Symbol("closeStream"),Ia=()=>!0,js=class extends Pa.EventEmitter{file;strict;maxMetaEntrySize;filter;brotli;zstd;writable=!0;readable=!1;[me]=[];[_];[de];[Be];[H]="begin";[ge]="";[re];[gt];[Re]=!1;[S];[Oe]=!1;[ke];[ci]=!1;[fi]=!1;[tt]=!1;[Rt]=!1;[Cs]=!1;constructor(e={}){super(),this.file=e.file||"",this.on(ui,()=>{(this[H]==="begin"||this[ke]===!1)&&this.warn("TAR_BAD_ARCHIVE","Unrecognized archive format")}),e.ondone?this.on(ui,e.ondone):this.on(ui,()=>{this.emit("prefinish"),this.emit("finish"),this.emit("end")}),this.strict=!!e.strict,this.maxMetaEntrySize=e.maxMetaEntrySize||La,this.filter=typeof e.filter=="function"?e.filter:Ia;let t=e.file&&(e.file.endsWith(".tar.br")||e.file.endsWith(".tbr"));this.brotli=!(e.gzip||e.zstd)&&e.brotli!==void 0?e.brotli:t?void 0:!1;let i=e.file&&(e.file.endsWith(".tar.zst")||e.file.endsWith(".tzst"));this.zstd=!(e.gzip||e.brotli)&&e.zstd!==void 0?e.zstd:i?!0:void 0,this.on("end",()=>this[tn]()),typeof e.onwarn=="function"&&this.on("warn",e.onwarn),typeof e.onReadEntry=="function"&&this.on("entry",e.onReadEntry)}warn(e,t,i={}){(0,Ma.warnMethod)(this,e,t,i)}[en](e,t){this[ke]===void 0&&(this[ke]=!1);let i;try{i=new Vr.Header(e,t,this[re],this[gt])}catch(r){return this.warn("TAR_ENTRY_INVALID",r)}if(i.nullBlock)this[ci]?(this[fi]=!0,this[H]==="begin"&&(this[H]="header"),this[ze]("eof")):(this[ci]=!0,this[ze]("nullBlock"));else if(this[ci]=!1,!i.cksumValid)this.warn("TAR_ENTRY_INVALID","checksum failure",{header:i});else if(!i.path)this.warn("TAR_ENTRY_INVALID","path is required",{header:i});else{let r=i.type;if(/^(Symbolic)?Link$/.test(r)&&!i.linkpath)this.warn("TAR_ENTRY_INVALID","linkpath required",{header:i});else if(!/^(Symbolic)?Link$/.test(r)&&!/^(Global)?ExtendedHeader$/.test(r)&&i.linkpath)this.warn("TAR_ENTRY_INVALID","linkpath forbidden",{header:i});else{let n=this[Be]=new Na.ReadEntry(i,this[re],this[gt]);if(!this[ke])if(n.remain){let o=()=>{n.invalid||(this[ke]=!0)};n.on("end",o)}else this[ke]=!0;n.meta?n.size>this.maxMetaEntrySize?(n.ignore=!0,this[ze]("ignoredEntry",n),this[H]="ignore",n.resume()):n.size>0&&(this[ge]="",n.on("data",o=>this[ge]+=o),this[H]="meta"):(this[re]=void 0,n.ignore=n.ignore||!this.filter(n.path,n),n.ignore?(this[ze]("ignoredEntry",n),this[H]=n.remain?"ignore":"header",n.resume()):(n.remain?this[H]="body":(this[H]="header",n.end()),this[de]?this[me].push(n):(this[me].push(n),this[Is]())))}}}[tn](){queueMicrotask(()=>this.emit("close"))}[Xr](e){let t=!0;if(!e)this[de]=void 0,t=!1;else if(Array.isArray(e)){let[i,...r]=e;this.emit(i,...r)}else this[de]=e,this.emit("entry",e),e.emittedEnd||(e.on("end",()=>this[Is]()),t=!1);return t}[Is](){do;while(this[Xr](this[me].shift()));if(!this[me].length){let e=this[de];!e||e.flowing||e.size===e.remain?this[tt]||this.emit("drain"):e.once("drain",()=>this.emit("drain"))}}[Fs](e,t){let i=this[Be];if(!i)throw new Error("attempt to consume body without entry??");let r=i.blockRemain??0,n=r>=e.length&&t===0?e:e.subarray(t,t+r);return i.write(n),i.blockRemain||(this[H]="header",this[Be]=void 0,i.end()),n.length}[Jr](e,t){let i=this[Be],r=this[Fs](e,t);return!this[Be]&&i&&this[Qr](i),r}[ze](e,t,i){!this[me].length&&!this[de]?this.emit(e,t,i):this[me].push([e,t,i])}[Qr](e){switch(this[ze]("meta",this[ge]),e.type){case"ExtendedHeader":case"OldExtendedHeader":this[re]=$r.Pax.parse(this[ge],this[re],!1);break;case"GlobalExtendedHeader":this[gt]=$r.Pax.parse(this[ge],this[gt],!0);break;case"NextFileHasLongPath":case"OldGnuLongPath":{let t=this[re]??Object.create(null);this[re]=t,t.path=this[ge].replace(/\0.*/,"");break}case"NextFileHasLongLinkpath":{let t=this[re]||Object.create(null);this[re]=t,t.linkpath=this[ge].replace(/\0.*/,"");break}default:throw new Error("unknown meta: "+e.type)}}abort(e){this[Oe]=!0,this.emit("abort",e),this.warn("TAR_ABORT",e,{recoverable:!1})}write(e,t,i){if(typeof t=="function"&&(i=t,t=void 0),typeof e=="string"&&(e=Buffer.from(e,typeof t=="string"?t:"utf8")),this[Oe])return i?.(),!1;if((this[S]===void 0||this.brotli===void 0&&this[S]===!1)&&e){if(this[_]&&(e=Buffer.concat([this[_],e]),this[_]=void 0),e.length<Aa)return this[_]=e,i?.(),!0;for(let h=0;this[S]===void 0&&h<zs.length;h++)e[h]!==zs[h]&&(this[S]=!1);let o=!1;if(this[S]===!1&&this.zstd!==!1){o=!0;for(let h=0;h<ks.length;h++)if(e[h]!==ks[h]){o=!1;break}}let a=this.brotli===void 0&&!o;if(this[S]===!1&&a)if(e.length<512)if(this[Re])this.brotli=!0;else return this[_]=e,i?.(),!0;else try{new Vr.Header(e.subarray(0,512)),this.brotli=!1}catch{this.brotli=!0}if(this[S]===void 0||this[S]===!1&&(this.brotli||o)){let h=this[Re];this[Re]=!1,this[S]=this[S]===void 0?new As.Unzip({}):o?new As.ZstdDecompress({}):new As.BrotliDecompress({}),this[S].on("data",u=>this[ai](u)),this[S].on("error",u=>this.abort(u)),this[S].on("end",()=>{this[Re]=!0,this[ai]()}),this[tt]=!0;let l=!!this[S][h?"end":"write"](e);return this[tt]=!1,i?.(),l}}this[tt]=!0,this[S]?this[S].write(e):this[ai](e),this[tt]=!1;let n=this[me].length?!1:this[de]?this[de].flowing:!0;return!n&&!this[me].length&&this[de]?.once("drain",()=>this.emit("drain")),i?.(),n}[Bs](e){e&&!this[Oe]&&(this[_]=this[_]?Buffer.concat([this[_],e]):e)}[li](){if(this[Re]&&!this[Cs]&&!this[Oe]&&!this[Rt]){this[Cs]=!0;let e=this[Be];if(e&&e.blockRemain){let t=this[_]?this[_].length:0;this.warn("TAR_BAD_ARCHIVE",`Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,{entry:e}),this[_]&&e.write(this[_]),e.end()}this[ze](ui)}}[ai](e){if(this[Rt]&&e)this[Bs](e);else if(!e&&!this[_])this[li]();else if(e){if(this[Rt]=!0,this[_]){this[Bs](e);let t=this[_];this[_]=void 0,this[hi](t)}else this[hi](e);for(;this[_]&&this[_]?.length>=512&&!this[Oe]&&!this[fi];){let t=this[_];this[_]=void 0,this[hi](t)}this[Rt]=!1}(!this[_]||this[Re])&&this[li]()}[hi](e){let t=0,i=e.length;for(;t+512<=i&&!this[Oe]&&!this[fi];)switch(this[H]){case"begin":case"header":this[en](e,t),t+=512;break;case"ignore":case"body":t+=this[Fs](e,t);break;case"meta":t+=this[Jr](e,t);break;default:throw new Error("invalid state: "+this[H])}t<i&&(this[_]?this[_]=Buffer.concat([e.subarray(t),this[_]]):this[_]=e.subarray(t))}end(e,t,i){return typeof e=="function"&&(i=e,t=void 0,e=void 0),typeof t=="function"&&(i=t,t=void 0),typeof e=="string"&&(e=Buffer.from(e,t)),i&&this.once("finish",i),this[Oe]||(this[S]?(e&&this[S].write(e),this[S].end()):(this[Re]=!0,(this.brotli===void 0||this.zstd===void 0)&&(e=e||Buffer.alloc(0)),e&&this.write(e),this[li]())),this}};di.Parser=js});var _i=d(pi=>{"use strict";Object.defineProperty(pi,"__esModule",{value:!0});pi.stripTrailingSlashes=void 0;var Ca=s=>{let e=s.length-1,t=-1;for(;e>-1&&s.charAt(e)==="/";)t=e,e--;return t===-1?s:s.slice(0,t)};pi.stripTrailingSlashes=Ca});var st=d(F=>{"use strict";var Fa=F&&F.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),Ba=F&&F.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),za=F&&F.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&Fa(t,e,i[r]);return Ba(t,e),t}})(),ka=F&&F.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(F,"__esModule",{value:!0});F.list=F.filesFilter=void 0;var ja=za(Ke()),it=ka(__nccwpck_require__(3024)),sn=__nccwpck_require__(6928),xa=Ve(),wi=mi(),xs=_i(),Ua=s=>{let e=s.onReadEntry;s.onReadEntry=e?t=>{e(t),t.resume()}:t=>t.resume()},qa=(s,e)=>{let t=new Map(e.map(n=>[(0,xs.stripTrailingSlashes)(n),!0])),i=s.filter,r=(n,o="")=>{let a=o||(0,sn.parse)(n).root||".",h;if(n===a)h=!1;else{let l=t.get(n);l!==void 0?h=l:h=r((0,sn.dirname)(n),a)}return t.set(n,h),h};s.filter=i?(n,o)=>i(n,o)&&r((0,xs.stripTrailingSlashes)(n)):n=>r((0,xs.stripTrailingSlashes)(n))};F.filesFilter=qa;var Wa=s=>{let e=new wi.Parser(s),t=s.file,i;try{i=it.default.openSync(t,"r");let r=it.default.fstatSync(i),n=s.maxReadSize||16*1024*1024;if(r.size<n){let o=Buffer.allocUnsafe(r.size),a=it.default.readSync(i,o,0,r.size,0);e.end(a===o.byteLength?o:o.subarray(0,a))}else{let o=0,a=Buffer.allocUnsafe(n);for(;o<r.size;){let h=it.default.readSync(i,a,0,n,o);if(h===0)break;o+=h,e.write(a.subarray(0,h))}e.end()}}finally{if(typeof i=="number")try{it.default.closeSync(i)}catch{}}},Ha=(s,e)=>{let t=new wi.Parser(s),i=s.maxReadSize||16*1024*1024,r=s.file;return new Promise((o,a)=>{t.on("error",a),t.on("end",o),it.default.stat(r,(h,l)=>{if(h)a(h);else{let u=new ja.ReadStream(r,{readSize:i,size:l.size});u.on("error",a),u.pipe(t)}})})};F.list=(0,xa.makeCommand)(Wa,Ha,s=>new wi.Parser(s),s=>new wi.Parser(s),(s,e)=>{e?.length&&(0,F.filesFilter)(s,e),s.noResume||Ua(s)})});var rn=d(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.modeFix=void 0;var Za=(s,e,t)=>(s&=4095,t&&(s=(s|384)&-19),e&&(s&256&&(s|=64),s&32&&(s|=8),s&4&&(s|=1)),s);yi.modeFix=Za});var Us=d(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.stripAbsolutePath=void 0;var Ga=__nccwpck_require__(6760),{isAbsolute:Ya,parse:nn}=Ga.win32,Ka=s=>{let e="",t=nn(s);for(;Ya(s)||t.root;){let i=s.charAt(0)==="/"&&s.slice(0,4)!=="//?/"?"/":t.root;s=s.slice(i.length),e+=i,t=nn(s)}return[e,s]};Ei.stripAbsolutePath=Ka});var Ws=d(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.decode=rt.encode=void 0;var bi=["|","<",">","?",":"],qs=bi.map(s=>String.fromCharCode(61440+s.charCodeAt(0))),Va=new Map(bi.map((s,e)=>[s,qs[e]])),$a=new Map(qs.map((s,e)=>[s,bi[e]])),Xa=s=>bi.reduce((e,t)=>e.split(t).join(Va.get(t)),s);rt.encode=Xa;var Qa=s=>qs.reduce((e,t)=>e.split(t).join($a.get(t)),s);rt.decode=Qa});var er=d(M=>{"use strict";var Ja=M&&M.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),eh=M&&M.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),th=M&&M.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&Ja(t,e,i[r]);return eh(t,e),t}})(),cn=M&&M.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(M,"__esModule",{value:!0});M.WriteEntryTar=M.WriteEntrySync=M.WriteEntry=void 0;var oe=cn(__nccwpck_require__(9896)),fn=We(),on=cn(__nccwpck_require__(6928)),dn=Je(),mn=rn(),ne=et(),pn=Vt(),_n=ei(),wn=Us(),ih=_i(),yn=oi(),sh=th(Ws()),En=(s,e)=>e?(s=(0,ne.normalizeWindowsPath)(s).replace(/^\.(\/|$)/,""),(0,ih.stripTrailingSlashes)(e)+"/"+s):(0,ne.normalizeWindowsPath)(s),rh=16*1024*1024,an=Symbol("process"),hn=Symbol("file"),ln=Symbol("directory"),Zs=Symbol("symlink"),un=Symbol("hardlink"),Ot=Symbol("header"),Si=Symbol("read"),Gs=Symbol("lstat"),gi=Symbol("onlstat"),Ys=Symbol("onread"),Ks=Symbol("onreadlink"),Vs=Symbol("openfile"),$s=Symbol("onopenfile"),ve=Symbol("close"),Ri=Symbol("mode"),Xs=Symbol("awaitDrain"),Hs=Symbol("ondrain"),ae=Symbol("prefix"),Oi=class extends fn.Minipass{path;portable;myuid=process.getuid&&process.getuid()||0;myuser=process.env.USER||"";maxReadSize;linkCache;statCache;preservePaths;cwd;strict;mtime;noPax;noMtime;prefix;fd;blockLen=0;blockRemain=0;buf;pos=0;remain=0;length=0;offset=0;win32;absolute;header;type;linkpath;stat;onWriteEntry;#e=!1;constructor(e,t={}){let i=(0,pn.dealias)(t);super(),this.path=(0,ne.normalizeWindowsPath)(e),this.portable=!!i.portable,this.maxReadSize=i.maxReadSize||rh,this.linkCache=i.linkCache||new Map,this.statCache=i.statCache||new Map,this.preservePaths=!!i.preservePaths,this.cwd=(0,ne.normalizeWindowsPath)(i.cwd||process.cwd()),this.strict=!!i.strict,this.noPax=!!i.noPax,this.noMtime=!!i.noMtime,this.mtime=i.mtime,this.prefix=i.prefix?(0,ne.normalizeWindowsPath)(i.prefix):void 0,this.onWriteEntry=i.onWriteEntry,typeof i.onwarn=="function"&&this.on("warn",i.onwarn);let r=!1;if(!this.preservePaths){let[o,a]=(0,wn.stripAbsolutePath)(this.path);o&&typeof a=="string"&&(this.path=a,r=o)}this.win32=!!i.win32||process.platform==="win32",this.win32&&(this.path=sh.decode(this.path.replace(/\\/g,"/")),e=e.replace(/\\/g,"/")),this.absolute=(0,ne.normalizeWindowsPath)(i.absolute||on.default.resolve(this.cwd,e)),this.path===""&&(this.path="./"),r&&this.warn("TAR_ENTRY_INFO",`stripping ${r} from absolute path`,{entry:this,path:r+this.path});let n=this.statCache.get(this.absolute);n?this[gi](n):this[Gs]()}warn(e,t,i={}){return(0,yn.warnMethod)(this,e,t,i)}emit(e,...t){return e==="error"&&(this.#e=!0),super.emit(e,...t)}[Gs](){oe.default.lstat(this.absolute,(e,t)=>{if(e)return this.emit("error",e);this[gi](t)})}[gi](e){this.statCache.set(this.absolute,e),this.stat=e,e.isFile()||(e.size=0),this.type=nh(e),this.emit("stat",e),this[an]()}[an](){switch(this.type){case"File":return this[hn]();case"Directory":return this[ln]();case"SymbolicLink":return this[Zs]();default:return this.end()}}[Ri](e){return(0,mn.modeFix)(e,this.type==="Directory",this.portable)}[ae](e){return En(e,this.prefix)}[Ot](){if(!this.stat)throw new Error("cannot write header before stat");this.type==="Directory"&&this.portable&&(this.noMtime=!0),this.onWriteEntry?.(this),this.header=new dn.Header({path:this[ae](this.path),linkpath:this.type==="Link"&&this.linkpath!==void 0?this[ae](this.linkpath):this.linkpath,mode:this[Ri](this.stat.mode),uid:this.portable?void 0:this.stat.uid,gid:this.portable?void 0:this.stat.gid,size:this.stat.size,mtime:this.noMtime?void 0:this.mtime||this.stat.mtime,type:this.type==="Unsupported"?void 0:this.type,uname:this.portable?void 0:this.stat.uid===this.myuid?this.myuser:"",atime:this.portable?void 0:this.stat.atime,ctime:this.portable?void 0:this.stat.ctime}),this.header.encode()&&!this.noPax&&super.write(new _n.Pax({atime:this.portable?void 0:this.header.atime,ctime:this.portable?void 0:this.header.ctime,gid:this.portable?void 0:this.header.gid,mtime:this.noMtime?void 0:this.mtime||this.header.mtime,path:this[ae](this.path),linkpath:this.type==="Link"&&this.linkpath!==void 0?this[ae](this.linkpath):this.linkpath,size:this.header.size,uid:this.portable?void 0:this.header.uid,uname:this.portable?void 0:this.header.uname,dev:this.portable?void 0:this.stat.dev,ino:this.portable?void 0:this.stat.ino,nlink:this.portable?void 0:this.stat.nlink}).encode());let e=this.header?.block;if(!e)throw new Error("failed to encode header");super.write(e)}[ln](){if(!this.stat)throw new Error("cannot create directory entry without stat");this.path.slice(-1)!=="/"&&(this.path+="/"),this.stat.size=0,this[Ot](),this.end()}[Zs](){oe.default.readlink(this.absolute,(e,t)=>{if(e)return this.emit("error",e);this[Ks](t)})}[Ks](e){this.linkpath=(0,ne.normalizeWindowsPath)(e),this[Ot](),this.end()}[un](e){if(!this.stat)throw new Error("cannot create link entry without stat");this.type="Link",this.linkpath=(0,ne.normalizeWindowsPath)(on.default.relative(this.cwd,e)),this.stat.size=0,this[Ot](),this.end()}[hn](){if(!this.stat)throw new Error("cannot create file entry without stat");if(this.stat.nlink>1){let e=`${this.stat.dev}:${this.stat.ino}`,t=this.linkCache.get(e);if(t?.indexOf(this.cwd)===0)return this[un](t);this.linkCache.set(e,this.absolute)}if(this[Ot](),this.stat.size===0)return this.end();this[Vs]()}[Vs](){oe.default.open(this.absolute,"r",(e,t)=>{if(e)return this.emit("error",e);this[$s](t)})}[$s](e){if(this.fd=e,this.#e)return this[ve]();if(!this.stat)throw new Error("should stat before calling onopenfile");this.blockLen=512*Math.ceil(this.stat.size/512),this.blockRemain=this.blockLen;let t=Math.min(this.blockLen,this.maxReadSize);this.buf=Buffer.allocUnsafe(t),this.offset=0,this.pos=0,this.remain=this.stat.size,this.length=this.buf.length,this[Si]()}[Si](){let{fd:e,buf:t,offset:i,length:r,pos:n}=this;if(e===void 0||t===void 0)throw new Error("cannot read file without first opening");oe.default.read(e,t,i,r,n,(o,a)=>{if(o)return this[ve](()=>this.emit("error",o));this[Ys](a)})}[ve](e=()=>{}){this.fd!==void 0&&oe.default.close(this.fd,e)}[Ys](e){if(e<=0&&this.remain>0){let r=Object.assign(new Error("encountered unexpected EOF"),{path:this.absolute,syscall:"read",code:"EOF"});return this[ve](()=>this.emit("error",r))}if(e>this.remain){let r=Object.assign(new Error("did not encounter expected EOF"),{path:this.absolute,syscall:"read",code:"EOF"});return this[ve](()=>this.emit("error",r))}if(!this.buf)throw new Error("should have created buffer prior to reading");if(e===this.remain)for(let r=e;r<this.length&&e<this.blockRemain;r++)this.buf[r+this.offset]=0,e++,this.remain++;let t=this.offset===0&&e===this.buf.length?this.buf:this.buf.subarray(this.offset,this.offset+e);this.write(t)?this[Hs]():this[Xs](()=>this[Hs]())}[Xs](e){this.once("drain",e)}write(e,t,i){if(typeof t=="function"&&(i=t,t=void 0),typeof e=="string"&&(e=Buffer.from(e,typeof t=="string"?t:"utf8")),this.blockRemain<e.length){let r=Object.assign(new Error("writing more data than expected"),{path:this.absolute});return this.emit("error",r)}return this.remain-=e.length,this.blockRemain-=e.length,this.pos+=e.length,this.offset+=e.length,super.write(e,null,i)}[Hs](){if(!this.remain)return this.blockRemain&&super.write(Buffer.alloc(this.blockRemain)),this[ve](e=>e?this.emit("error",e):this.end());if(!this.buf)throw new Error("buffer lost somehow in ONDRAIN");this.offset>=this.length&&(this.buf=Buffer.allocUnsafe(Math.min(this.blockRemain,this.buf.length)),this.offset=0),this.length=this.buf.length-this.offset,this[Si]()}};M.WriteEntry=Oi;var Qs=class extends Oi{sync=!0;[Gs](){this[gi](oe.default.lstatSync(this.absolute))}[Zs](){this[Ks](oe.default.readlinkSync(this.absolute))}[Vs](){this[$s](oe.default.openSync(this.absolute,"r"))}[Si](){let e=!0;try{let{fd:t,buf:i,offset:r,length:n,pos:o}=this;if(t===void 0||i===void 0)throw new Error("fd and buf must be set in READ method");let a=oe.default.readSync(t,i,r,n,o);this[Ys](a),e=!1}finally{if(e)try{this[ve](()=>{})}catch{}}}[Xs](e){e()}[ve](e=()=>{}){this.fd!==void 0&&oe.default.closeSync(this.fd),e()}};M.WriteEntrySync=Qs;var Js=class extends fn.Minipass{blockLen=0;blockRemain=0;buf=0;pos=0;remain=0;length=0;preservePaths;portable;strict;noPax;noMtime;readEntry;type;prefix;path;mode;uid;gid;uname;gname;header;mtime;atime;ctime;linkpath;size;onWriteEntry;warn(e,t,i={}){return(0,yn.warnMethod)(this,e,t,i)}constructor(e,t={}){let i=(0,pn.dealias)(t);super(),this.preservePaths=!!i.preservePaths,this.portable=!!i.portable,this.strict=!!i.strict,this.noPax=!!i.noPax,this.noMtime=!!i.noMtime,this.onWriteEntry=i.onWriteEntry,this.readEntry=e;let{type:r}=e;if(r==="Unsupported")throw new Error("writing entry that should be ignored");this.type=r,this.type==="Directory"&&this.portable&&(this.noMtime=!0),this.prefix=i.prefix,this.path=(0,ne.normalizeWindowsPath)(e.path),this.mode=e.mode!==void 0?this[Ri](e.mode):void 0,this.uid=this.portable?void 0:e.uid,this.gid=this.portable?void 0:e.gid,this.uname=this.portable?void 0:e.uname,this.gname=this.portable?void 0:e.gname,this.size=e.size,this.mtime=this.noMtime?void 0:i.mtime||e.mtime,this.atime=this.portable?void 0:e.atime,this.ctime=this.portable?void 0:e.ctime,this.linkpath=e.linkpath!==void 0?(0,ne.normalizeWindowsPath)(e.linkpath):void 0,typeof i.onwarn=="function"&&this.on("warn",i.onwarn);let n=!1;if(!this.preservePaths){let[a,h]=(0,wn.stripAbsolutePath)(this.path);a&&typeof h=="string"&&(this.path=h,n=a)}this.remain=e.size,this.blockRemain=e.startBlockSize,this.onWriteEntry?.(this),this.header=new dn.Header({path:this[ae](this.path),linkpath:this.type==="Link"&&this.linkpath!==void 0?this[ae](this.linkpath):this.linkpath,mode:this.mode,uid:this.portable?void 0:this.uid,gid:this.portable?void 0:this.gid,size:this.size,mtime:this.noMtime?void 0:this.mtime,type:this.type,uname:this.portable?void 0:this.uname,atime:this.portable?void 0:this.atime,ctime:this.portable?void 0:this.ctime}),n&&this.warn("TAR_ENTRY_INFO",`stripping ${n} from absolute path`,{entry:this,path:n+this.path}),this.header.encode()&&!this.noPax&&super.write(new _n.Pax({atime:this.portable?void 0:this.atime,ctime:this.portable?void 0:this.ctime,gid:this.portable?void 0:this.gid,mtime:this.noMtime?void 0:this.mtime,path:this[ae](this.path),linkpath:this.type==="Link"&&this.linkpath!==void 0?this[ae](this.linkpath):this.linkpath,size:this.size,uid:this.portable?void 0:this.uid,uname:this.portable?void 0:this.uname,dev:this.portable?void 0:this.readEntry.dev,ino:this.portable?void 0:this.readEntry.ino,nlink:this.portable?void 0:this.readEntry.nlink}).encode());let o=this.header?.block;if(!o)throw new Error("failed to encode header");super.write(o),e.pipe(this)}[ae](e){return En(e,this.prefix)}[Ri](e){return(0,mn.modeFix)(e,this.type==="Directory",this.portable)}write(e,t,i){typeof t=="function"&&(i=t,t=void 0),typeof e=="string"&&(e=Buffer.from(e,typeof t=="string"?t:"utf8"));let r=e.length;if(r>this.blockRemain)throw new Error("writing more to entry than is appropriate");return this.blockRemain-=r,super.write(e,i)}end(e,t,i){return this.blockRemain&&super.write(Buffer.alloc(this.blockRemain)),typeof e=="function"&&(i=e,t=void 0,e=void 0),typeof t=="function"&&(i=t,t=void 0),typeof e=="string"&&(e=Buffer.from(e,t??"utf8")),i&&this.once("finish",i),e?super.end(e,i):super.end(i),this}};M.WriteEntryTar=Js;var nh=s=>s.isFile()?"File":s.isDirectory()?"Directory":s.isSymbolicLink()?"SymbolicLink":"Unsupported"});var bn=d(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.Node=ot.Yallist=void 0;var tr=class s{tail;head;length=0;static create(e=[]){return new s(e)}constructor(e=[]){for(let t of e)this.push(t)}*[Symbol.iterator](){for(let e=this.head;e;e=e.next)yield e.value}removeNode(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");let t=e.next,i=e.prev;return t&&(t.prev=i),i&&(i.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=i),this.length--,e.next=void 0,e.prev=void 0,e.list=void 0,t}unshiftNode(e){if(e===this.head)return;e.list&&e.list.removeNode(e);let t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}pushNode(e){if(e===this.tail)return;e.list&&e.list.removeNode(e);let t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}push(...e){for(let t=0,i=e.length;t<i;t++)ah(this,e[t]);return this.length}unshift(...e){for(var t=0,i=e.length;t<i;t++)hh(this,e[t]);return this.length}pop(){if(!this.tail)return;let e=this.tail.value,t=this.tail;return this.tail=this.tail.prev,this.tail?this.tail.next=void 0:this.head=void 0,t.list=void 0,this.length--,e}shift(){if(!this.head)return;let e=this.head.value,t=this.head;return this.head=this.head.next,this.head?this.head.prev=void 0:this.tail=void 0,t.list=void 0,this.length--,e}forEach(e,t){t=t||this;for(let i=this.head,r=0;i;r++)e.call(t,i.value,r,this),i=i.next}forEachReverse(e,t){t=t||this;for(let i=this.tail,r=this.length-1;i;r--)e.call(t,i.value,r,this),i=i.prev}get(e){let t=0,i=this.head;for(;i&&t<e;t++)i=i.next;if(t===e&&i)return i.value}getReverse(e){let t=0,i=this.tail;for(;i&&t<e;t++)i=i.prev;if(t===e&&i)return i.value}map(e,t){t=t||this;let i=new s;for(let r=this.head;r;)i.push(e.call(t,r.value,this)),r=r.next;return i}mapReverse(e,t){t=t||this;var i=new s;for(let r=this.tail;r;)i.push(e.call(t,r.value,this)),r=r.prev;return i}reduce(e,t){let i,r=this.head;if(arguments.length>1)i=t;else if(this.head)r=this.head.next,i=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var n=0;r;n++)i=e(i,r.value,n),r=r.next;return i}reduceReverse(e,t){let i,r=this.tail;if(arguments.length>1)i=t;else if(this.tail)r=this.tail.prev,i=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(let n=this.length-1;r;n--)i=e(i,r.value,n),r=r.prev;return i}toArray(){let e=new Array(this.length);for(let t=0,i=this.head;i;t++)e[t]=i.value,i=i.next;return e}toArrayReverse(){let e=new Array(this.length);for(let t=0,i=this.tail;i;t++)e[t]=i.value,i=i.prev;return e}slice(e=0,t=this.length){t<0&&(t+=this.length),e<0&&(e+=this.length);let i=new s;if(t<e||t<0)return i;e<0&&(e=0),t>this.length&&(t=this.length);let r=this.head,n=0;for(n=0;r&&n<e;n++)r=r.next;for(;r&&n<t;n++,r=r.next)i.push(r.value);return i}sliceReverse(e=0,t=this.length){t<0&&(t+=this.length),e<0&&(e+=this.length);let i=new s;if(t<e||t<0)return i;e<0&&(e=0),t>this.length&&(t=this.length);let r=this.length,n=this.tail;for(;n&&r>t;r--)n=n.prev;for(;n&&r>e;r--,n=n.prev)i.push(n.value);return i}splice(e,t=0,...i){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);let r=this.head;for(let o=0;r&&o<e;o++)r=r.next;let n=[];for(let o=0;r&&o<t;o++)n.push(r.value),r=this.removeNode(r);r?r!==this.tail&&(r=r.prev):r=this.tail;for(let o of i)r=oh(this,r,o);return n}reverse(){let e=this.head,t=this.tail;for(let i=e;i;i=i.prev){let r=i.prev;i.prev=i.next,i.next=r}return this.head=t,this.tail=e,this}};ot.Yallist=tr;function oh(s,e,t){let i=e,r=e?e.next:s.head,n=new nt(t,i,r,s);return n.next===void 0&&(s.tail=n),n.prev===void 0&&(s.head=n),s.length++,n}function ah(s,e){s.tail=new nt(e,s.tail,void 0,s),s.head||(s.head=s.tail),s.length++}function hh(s,e){s.head=new nt(e,void 0,s.head,s),s.tail||(s.tail=s.head),s.length++}var nt=class{list;next;prev;value;constructor(e,t,i,r){this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=void 0,i?(i.prev=this,this.next=i):this.next=void 0}};ot.Node=nt});var Ai=d(L=>{"use strict";var lh=L&&L.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),uh=L&&L.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),ch=L&&L.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&lh(t,e,i[r]);return uh(t,e),t}})(),vn=L&&L.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(L,"__esModule",{value:!0});L.PackSync=L.Pack=L.PackJob=void 0;var Mi=vn(__nccwpck_require__(9896)),hr=er(),Dt=class{path;absolute;entry;stat;readdir;pending=!1;ignore=!1;piped=!1;constructor(e,t){this.path=e||"./",this.absolute=t}};L.PackJob=Dt;var fh=We(),ir=ch(vs()),dh=bn(),mh=ri(),ph=oi(),Sn=Buffer.alloc(1024),vi=Symbol("onStat"),vt=Symbol("ended"),X=Symbol("queue"),je=Symbol("current"),xe=Symbol("process"),Tt=Symbol("processing"),sr=Symbol("processJob"),Q=Symbol("jobs"),rr=Symbol("jobDone"),Ti=Symbol("addFSEntry"),gn=Symbol("addTarEntry"),lr=Symbol("stat"),ur=Symbol("readdir"),Di=Symbol("onreaddir"),Pi=Symbol("pipe"),Rn=Symbol("entry"),nr=Symbol("entryOpt"),Ni=Symbol("writeEntryClass"),Tn=Symbol("write"),or=Symbol("ondrain"),On=vn(__nccwpck_require__(6928)),ar=et(),Li=class extends fh.Minipass{sync=!1;opt;cwd;maxReadSize;preservePaths;strict;noPax;prefix;linkCache;statCache;file;portable;zip;readdirCache;noDirRecurse;follow;noMtime;mtime;filter;jobs;[Ni];onWriteEntry;[X];[Q]=0;[Tt]=!1;[vt]=!1;constructor(e={}){if(super(),this.opt=e,this.file=e.file||"",this.cwd=e.cwd||process.cwd(),this.maxReadSize=e.maxReadSize,this.preservePaths=!!e.preservePaths,this.strict=!!e.strict,this.noPax=!!e.noPax,this.prefix=(0,ar.normalizeWindowsPath)(e.prefix||""),this.linkCache=e.linkCache||new Map,this.statCache=e.statCache||new Map,this.readdirCache=e.readdirCache||new Map,this.onWriteEntry=e.onWriteEntry,this[Ni]=hr.WriteEntry,typeof e.onwarn=="function"&&this.on("warn",e.onwarn),this.portable=!!e.portable,e.gzip||e.brotli||e.zstd){if((e.gzip?1:0)+(e.brotli?1:0)+(e.zstd?1:0)>1)throw new TypeError("gzip, brotli, zstd are mutually exclusive");if(e.gzip&&(typeof e.gzip!="object"&&(e.gzip={}),this.portable&&(e.gzip.portable=!0),this.zip=new ir.Gzip(e.gzip)),e.brotli&&(typeof e.brotli!="object"&&(e.brotli={}),this.zip=new ir.BrotliCompress(e.brotli)),e.zstd&&(typeof e.zstd!="object"&&(e.zstd={}),this.zip=new ir.ZstdCompress(e.zstd)),!this.zip)throw new Error("impossible");let t=this.zip;t.on("data",i=>super.write(i)),t.on("end",()=>super.end()),t.on("drain",()=>this[or]()),this.on("resume",()=>t.resume())}else this.on("drain",this[or]);this.noDirRecurse=!!e.noDirRecurse,this.follow=!!e.follow,this.noMtime=!!e.noMtime,e.mtime&&(this.mtime=e.mtime),this.filter=typeof e.filter=="function"?e.filter:()=>!0,this[X]=new dh.Yallist,this[Q]=0,this.jobs=Number(e.jobs)||4,this[Tt]=!1,this[vt]=!1}[Tn](e){return super.write(e)}add(e){return this.write(e),this}end(e,t,i){return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e&&this.add(e),this[vt]=!0,this[xe](),i&&i(),this}write(e){if(this[vt])throw new Error("write after end");return e instanceof mh.ReadEntry?this[gn](e):this[Ti](e),this.flowing}[gn](e){let t=(0,ar.normalizeWindowsPath)(On.default.resolve(this.cwd,e.path));if(!this.filter(e.path,e))e.resume();else{let i=new Dt(e.path,t);i.entry=new hr.WriteEntryTar(e,this[nr](i)),i.entry.on("end",()=>this[rr](i)),this[Q]+=1,this[X].push(i)}this[xe]()}[Ti](e){let t=(0,ar.normalizeWindowsPath)(On.default.resolve(this.cwd,e));this[X].push(new Dt(e,t)),this[xe]()}[lr](e){e.pending=!0,this[Q]+=1;let t=this.follow?"stat":"lstat";Mi.default[t](e.absolute,(i,r)=>{e.pending=!1,this[Q]-=1,i?this.emit("error",i):this[vi](e,r)})}[vi](e,t){this.statCache.set(e.absolute,t),e.stat=t,this.filter(e.path,t)?t.isFile()&&t.nlink>1&&e===this[je]&&!this.linkCache.get(`${t.dev}:${t.ino}`)&&!this.sync&&this[sr](e):e.ignore=!0,this[xe]()}[ur](e){e.pending=!0,this[Q]+=1,Mi.default.readdir(e.absolute,(t,i)=>{if(e.pending=!1,this[Q]-=1,t)return this.emit("error",t);this[Di](e,i)})}[Di](e,t){this.readdirCache.set(e.absolute,t),e.readdir=t,this[xe]()}[xe](){if(!this[Tt]){this[Tt]=!0;for(let e=this[X].head;e&&this[Q]<this.jobs;e=e.next)if(this[sr](e.value),e.value.ignore){let t=e.next;this[X].removeNode(e),e.next=t}this[Tt]=!1,this[vt]&&!this[X].length&&this[Q]===0&&(this.zip?this.zip.end(Sn):(super.write(Sn),super.end()))}}get[je](){return this[X]&&this[X].head&&this[X].head.value}[rr](e){this[X].shift(),this[Q]-=1,this[xe]()}[sr](e){if(!e.pending){if(e.entry){e===this[je]&&!e.piped&&this[Pi](e);return}if(!e.stat){let t=this.statCache.get(e.absolute);t?this[vi](e,t):this[lr](e)}if(e.stat&&!e.ignore){if(!this.noDirRecurse&&e.stat.isDirectory()&&!e.readdir){let t=this.readdirCache.get(e.absolute);if(t?this[Di](e,t):this[ur](e),!e.readdir)return}if(e.entry=this[Rn](e),!e.entry){e.ignore=!0;return}e===this[je]&&!e.piped&&this[Pi](e)}}}[nr](e){return{onwarn:(t,i,r)=>this.warn(t,i,r),noPax:this.noPax,cwd:this.cwd,absolute:e.absolute,preservePaths:this.preservePaths,maxReadSize:this.maxReadSize,strict:this.strict,portable:this.portable,linkCache:this.linkCache,statCache:this.statCache,noMtime:this.noMtime,mtime:this.mtime,prefix:this.prefix,onWriteEntry:this.onWriteEntry}}[Rn](e){this[Q]+=1;try{return new this[Ni](e.path,this[nr](e)).on("end",()=>this[rr](e)).on("error",i=>this.emit("error",i))}catch(t){this.emit("error",t)}}[or](){this[je]&&this[je].entry&&this[je].entry.resume()}[Pi](e){e.piped=!0,e.readdir&&e.readdir.forEach(r=>{let n=e.path,o=n==="./"?"":n.replace(/\/*$/,"/");this[Ti](o+r)});let t=e.entry,i=this.zip;if(!t)throw new Error("cannot pipe without source");i?t.on("data",r=>{i.write(r)||t.pause()}):t.on("data",r=>{super.write(r)||t.pause()})}pause(){return this.zip&&this.zip.pause(),super.pause()}warn(e,t,i={}){(0,ph.warnMethod)(this,e,t,i)}};L.Pack=Li;var cr=class extends Li{sync=!0;constructor(e){super(e),this[Ni]=hr.WriteEntrySync}pause(){}resume(){}[lr](e){let t=this.follow?"statSync":"lstatSync";this[vi](e,Mi.default[t](e.absolute))}[ur](e){this[Di](e,Mi.default.readdirSync(e.absolute))}[Pi](e){let t=e.entry,i=this.zip;if(e.readdir&&e.readdir.forEach(r=>{let n=e.path,o=n==="./"?"":n.replace(/\/*$/,"/");this[Ti](o+r)}),!t)throw new Error("Cannot pipe without source");i?t.on("data",r=>{i.write(r)}):t.on("data",r=>{super[Tn](r)})}};L.PackSync=cr});var fr=d(at=>{"use strict";var _h=at&&at.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(at,"__esModule",{value:!0});at.create=void 0;var Dn=Ke(),Pn=_h(__nccwpck_require__(6760)),Nn=st(),wh=Ve(),Ii=Ai(),yh=(s,e)=>{let t=new Ii.PackSync(s),i=new Dn.WriteStreamSync(s.file,{mode:s.mode||438});t.pipe(i),Mn(t,e)},Eh=(s,e)=>{let t=new Ii.Pack(s),i=new Dn.WriteStream(s.file,{mode:s.mode||438});t.pipe(i);let r=new Promise((n,o)=>{i.on("error",o),i.on("close",n),t.on("error",o)});return Ln(t,e),r},Mn=(s,e)=>{e.forEach(t=>{t.charAt(0)==="@"?(0,Nn.list)({file:Pn.default.resolve(s.cwd,t.slice(1)),sync:!0,noResume:!0,onReadEntry:i=>s.add(i)}):s.add(t)}),s.end()},Ln=async(s,e)=>{for(let t=0;t<e.length;t++){let i=String(e[t]);i.charAt(0)==="@"?await(0,Nn.list)({file:Pn.default.resolve(String(s.cwd),i.slice(1)),noResume:!0,onReadEntry:r=>{s.add(r)}}):s.add(i)}s.end()},bh=(s,e)=>{let t=new Ii.PackSync(s);return Mn(t,e),t},Sh=(s,e)=>{let t=new Ii.Pack(s);return Ln(t,e),t};at.create=(0,wh.makeCommand)(yh,Eh,bh,Sh,(s,e)=>{if(!e?.length)throw new TypeError("no paths specified to add to archive")})});var Cn=d(ht=>{"use strict";var gh=ht&&ht.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ht,"__esModule",{value:!0});ht.getWriteFlag=void 0;var An=gh(__nccwpck_require__(9896)),Rh=process.env.__FAKE_PLATFORM__||process.platform,Oh=Rh==="win32",{O_CREAT:vh,O_TRUNC:Th,O_WRONLY:Dh}=An.default.constants,In=Number(process.env.__FAKE_FS_O_FILENAME__)||An.default.constants.UV_FS_O_FILEMAP||0,Ph=Oh&&!!In,Nh=512*1024,Mh=In|Th|vh|Dh;ht.getWriteFlag=Ph?s=>s<Nh?Mh:"w":()=>"w"});var Bn=d(he=>{"use strict";var Fn=he&&he.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(he,"__esModule",{value:!0});he.chownrSync=he.chownr=void 0;var Fi=Fn(__nccwpck_require__(3024)),Pt=Fn(__nccwpck_require__(6760)),dr=(s,e,t)=>{try{return Fi.default.lchownSync(s,e,t)}catch(i){if(i?.code!=="ENOENT")throw i}},Ci=(s,e,t,i)=>{Fi.default.lchown(s,e,t,r=>{i(r&&r?.code!=="ENOENT"?r:null)})},Lh=(s,e,t,i,r)=>{if(e.isDirectory())(0,he.chownr)(Pt.default.resolve(s,e.name),t,i,n=>{if(n)return r(n);let o=Pt.default.resolve(s,e.name);Ci(o,t,i,r)});else{let n=Pt.default.resolve(s,e.name);Ci(n,t,i,r)}},Ah=(s,e,t,i)=>{Fi.default.readdir(s,{withFileTypes:!0},(r,n)=>{if(r){if(r.code==="ENOENT")return i();if(r.code!=="ENOTDIR"&&r.code!=="ENOTSUP")return i(r)}if(r||!n.length)return Ci(s,e,t,i);let o=n.length,a=null,h=l=>{if(!a){if(l)return i(a=l);if(--o===0)return Ci(s,e,t,i)}};for(let l of n)Lh(s,l,e,t,h)})};he.chownr=Ah;var Ih=(s,e,t,i)=>{e.isDirectory()&&(0,he.chownrSync)(Pt.default.resolve(s,e.name),t,i),dr(Pt.default.resolve(s,e.name),t,i)},Ch=(s,e,t)=>{let i;try{i=Fi.default.readdirSync(s,{withFileTypes:!0})}catch(r){let n=r;if(n?.code==="ENOENT")return;if(n?.code==="ENOTDIR"||n?.code==="ENOTSUP")return dr(s,e,t);throw n}for(let r of i)Ih(s,r,e,t);return dr(s,e,t)};he.chownrSync=Ch});var zn=d(Bi=>{"use strict";Object.defineProperty(Bi,"__esModule",{value:!0});Bi.CwdError=void 0;var mr=class extends Error{path;code;syscall="chdir";constructor(e,t){super(`${t}: Cannot cd into '${e}'`),this.path=e,this.code=t}get name(){return"CwdError"}};Bi.CwdError=mr});var _r=d(zi=>{"use strict";Object.defineProperty(zi,"__esModule",{value:!0});zi.SymlinkError=void 0;var pr=class extends Error{path;symlink;syscall="symlink";code="TAR_SYMLINK_ERROR";constructor(e,t){super("TAR_SYMLINK_ERROR: Cannot extract through symbolic link"),this.symlink=e,this.path=t}get name(){return"SymlinkError"}};zi.SymlinkError=pr});var qn=d(Te=>{"use strict";var yr=Te&&Te.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Te,"__esModule",{value:!0});Te.mkdirSync=Te.mkdir=void 0;var kn=Bn(),x=yr(__nccwpck_require__(3024)),Fh=yr(__nccwpck_require__(1455)),ki=yr(__nccwpck_require__(6760)),jn=zn(),pe=et(),xn=_r(),Bh=(s,e)=>{x.default.stat(s,(t,i)=>{(t||!i.isDirectory())&&(t=new jn.CwdError(s,t?.code||"ENOTDIR")),e(t)})},zh=(s,e,t)=>{s=(0,pe.normalizeWindowsPath)(s);let i=e.umask??18,r=e.mode|448,n=(r&i)!==0,o=e.uid,a=e.gid,h=typeof o=="number"&&typeof a=="number"&&(o!==e.processUid||a!==e.processGid),l=e.preserve,u=e.unlink,c=(0,pe.normalizeWindowsPath)(e.cwd),E=(w,P)=>{w?t(w):P&&h?(0,kn.chownr)(P,o,a,Cr=>E(Cr)):n?x.default.chmod(s,r,t):t()};if(s===c)return Bh(s,E);if(l)return Fh.default.mkdir(s,{mode:r,recursive:!0}).then(w=>E(null,w??void 0),E);let A=(0,pe.normalizeWindowsPath)(ki.default.relative(c,s)).split("/");wr(c,A,r,u,c,void 0,E)};Te.mkdir=zh;var wr=(s,e,t,i,r,n,o)=>{if(!e.length)return o(null,n);let a=e.shift(),h=(0,pe.normalizeWindowsPath)(ki.default.resolve(s+"/"+a));x.default.mkdir(h,t,Un(h,e,t,i,r,n,o))},Un=(s,e,t,i,r,n,o)=>a=>{a?x.default.lstat(s,(h,l)=>{if(h)h.path=h.path&&(0,pe.normalizeWindowsPath)(h.path),o(h);else if(l.isDirectory())wr(s,e,t,i,r,n,o);else if(i)x.default.unlink(s,u=>{if(u)return o(u);x.default.mkdir(s,t,Un(s,e,t,i,r,n,o))});else{if(l.isSymbolicLink())return o(new xn.SymlinkError(s,s+"/"+e.join("/")));o(a)}}):(n=n||s,wr(s,e,t,i,r,n,o))},kh=s=>{let e=!1,t;try{e=x.default.statSync(s).isDirectory()}catch(i){t=i?.code}finally{if(!e)throw new jn.CwdError(s,t??"ENOTDIR")}},jh=(s,e)=>{s=(0,pe.normalizeWindowsPath)(s);let t=e.umask??18,i=e.mode|448,r=(i&t)!==0,n=e.uid,o=e.gid,a=typeof n=="number"&&typeof o=="number"&&(n!==e.processUid||o!==e.processGid),h=e.preserve,l=e.unlink,u=(0,pe.normalizeWindowsPath)(e.cwd),c=w=>{w&&a&&(0,kn.chownrSync)(w,n,o),r&&x.default.chmodSync(s,i)};if(s===u)return kh(u),c();if(h)return c(x.default.mkdirSync(s,{mode:i,recursive:!0})??void 0);let D=(0,pe.normalizeWindowsPath)(ki.default.relative(u,s)).split("/"),A;for(let w=D.shift(),P=u;w&&(P+="/"+w);w=D.shift()){P=(0,pe.normalizeWindowsPath)(ki.default.resolve(P));try{x.default.mkdirSync(P,i),A=A||P}catch{let Fr=x.default.lstatSync(P);if(Fr.isDirectory())continue;if(l){x.default.unlinkSync(P),x.default.mkdirSync(P,i),A=A||P;continue}else if(Fr.isSymbolicLink())return new xn.SymlinkError(P,P+"/"+D.join("/"))}}return c(A)};Te.mkdirSync=jh});var Hn=d(ji=>{"use strict";Object.defineProperty(ji,"__esModule",{value:!0});ji.normalizeUnicode=void 0;var Er=Object.create(null),Wn=1e4,lt=new Set,xh=s=>{lt.has(s)?lt.delete(s):Er[s]=s.normalize("NFD").toLocaleLowerCase("en").toLocaleUpperCase("en"),lt.add(s);let e=Er[s],t=lt.size-Wn;if(t>Wn/10){for(let i of lt)if(lt.delete(i),delete Er[i],--t<=0)break}return e};ji.normalizeUnicode=xh});var Gn=d(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.PathReservations=void 0;var Zn=__nccwpck_require__(6760),Uh=Hn(),qh=_i(),Wh=process.env.TESTING_TAR_FAKE_PLATFORM||process.platform,Hh=Wh==="win32",Zh=s=>s.split("/").slice(0,-1).reduce((t,i)=>{let r=t[t.length-1];return r!==void 0&&(i=(0,Zn.join)(r,i)),t.push(i||"/"),t},[]),br=class{#e=new Map;#i=new Map;#s=new Set;reserve(e,t){e=Hh?["win32 parallelization disabled"]:e.map(r=>(0,qh.stripTrailingSlashes)((0,Zn.join)((0,Uh.normalizeUnicode)(r))));let i=new Set(e.map(r=>Zh(r)).reduce((r,n)=>r.concat(n)));this.#i.set(t,{dirs:i,paths:e});for(let r of e){let n=this.#e.get(r);n?n.push(t):this.#e.set(r,[t])}for(let r of i){let n=this.#e.get(r);if(!n)this.#e.set(r,[new Set([t])]);else{let o=n[n.length-1];o instanceof Set?o.add(t):n.push(new Set([t]))}}return this.#r(t)}#n(e){let t=this.#i.get(e);if(!t)throw new Error("function does not have any path reservations");return{paths:t.paths.map(i=>this.#e.get(i)),dirs:[...t.dirs].map(i=>this.#e.get(i))}}check(e){let{paths:t,dirs:i}=this.#n(e);return t.every(r=>r&&r[0]===e)&&i.every(r=>r&&r[0]instanceof Set&&r[0].has(e))}#r(e){return this.#s.has(e)||!this.check(e)?!1:(this.#s.add(e),e(()=>this.#t(e)),!0)}#t(e){if(!this.#s.has(e))return!1;let t=this.#i.get(e);if(!t)throw new Error("invalid reservation");let{paths:i,dirs:r}=t,n=new Set;for(let o of i){let a=this.#e.get(o);if(!a||a?.[0]!==e)continue;let h=a[1];if(!h){this.#e.delete(o);continue}if(a.shift(),typeof h=="function")n.add(h);else for(let l of h)n.add(l)}for(let o of r){let a=this.#e.get(o),h=a?.[0];if(!(!a||!(h instanceof Set)))if(h.size===1&&a.length===1){this.#e.delete(o);continue}else if(h.size===1){a.shift();let l=a[0];typeof l=="function"&&n.add(l)}else h.delete(e)}return this.#s.delete(e),n.forEach(o=>this.#r(o)),!0}};xi.PathReservations=br});var Yn=d(Ui=>{"use strict";Object.defineProperty(Ui,"__esModule",{value:!0});Ui.umask=void 0;var Gh=()=>process.umask();Ui.umask=Gh});var Lr=d(z=>{"use strict";var Yh=z&&z.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),Kh=z&&z.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),so=z&&z.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&Yh(t,e,i[r]);return Kh(t,e),t}})(),Mr=z&&z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(z,"__esModule",{value:!0});z.UnpackSync=z.Unpack=void 0;var Vh=so(Ke()),$h=Mr(__nccwpck_require__(4589)),ro=__nccwpck_require__(7598),m=Mr(__nccwpck_require__(3024)),g=Mr(__nccwpck_require__(6760)),no=Cn(),oo=qn(),U=et(),Xh=mi(),Qh=Us(),Kn=so(Ws()),Jh=Gn(),ao=_r(),el=Yn(),Vn=Symbol("onEntry"),Or=Symbol("checkFs"),$n=Symbol("checkFs2"),vr=Symbol("isReusable"),Z=Symbol("makeFs"),Tr=Symbol("file"),Dr=Symbol("directory"),Wi=Symbol("link"),Xn=Symbol("symlink"),Qn=Symbol("hardlink"),Mt=Symbol("ensureNoSymlink"),Jn=Symbol("unsupported"),eo=Symbol("checkPath"),Sr=Symbol("stripAbsolutePath"),De=Symbol("mkdir"),T=Symbol("onError"),qi=Symbol("pending"),to=Symbol("pend"),ut=Symbol("unpend"),gr=Symbol("ended"),Rr=Symbol("maybeClose"),Pr=Symbol("skip"),Lt=Symbol("doChown"),At=Symbol("uid"),It=Symbol("gid"),Ct=Symbol("checkedCwd"),tl=process.env.TESTING_TAR_FAKE_PLATFORM||process.platform,Ft=tl==="win32",il=1024,sl=(s,e)=>{if(!Ft)return m.default.unlink(s,e);let t=s+".DELETE."+(0,ro.randomBytes)(16).toString("hex");m.default.rename(s,t,i=>{if(i)return e(i);m.default.unlink(t,e)})},rl=s=>{if(!Ft)return m.default.unlinkSync(s);let e=s+".DELETE."+(0,ro.randomBytes)(16).toString("hex");m.default.renameSync(s,e),m.default.unlinkSync(e)},io=(s,e,t)=>s!==void 0&&s===s>>>0?s:e!==void 0&&e===e>>>0?e:t,Hi=class extends Xh.Parser{[gr]=!1;[Ct]=!1;[qi]=0;reservations=new Jh.PathReservations;transform;writable=!0;readable=!1;uid;gid;setOwner;preserveOwner;processGid;processUid;maxDepth;forceChown;win32;newer;keep;noMtime;preservePaths;unlink;cwd;strip;processUmask;umask;dmode;fmode;chmod;constructor(e={}){if(e.ondone=()=>{this[gr]=!0,this[Rr]()},super(e),this.transform=e.transform,this.chmod=!!e.chmod,typeof e.uid=="number"||typeof e.gid=="number"){if(typeof e.uid!="number"||typeof e.gid!="number")throw new TypeError("cannot set owner without number uid and gid");if(e.preserveOwner)throw new TypeError("cannot preserve owner in archive and also set owner explicitly");this.uid=e.uid,this.gid=e.gid,this.setOwner=!0}else this.uid=void 0,this.gid=void 0,this.setOwner=!1;e.preserveOwner===void 0&&typeof e.uid!="number"?this.preserveOwner=!!(process.getuid&&process.getuid()===0):this.preserveOwner=!!e.preserveOwner,this.processUid=(this.preserveOwner||this.setOwner)&&process.getuid?process.getuid():void 0,this.processGid=(this.preserveOwner||this.setOwner)&&process.getgid?process.getgid():void 0,this.maxDepth=typeof e.maxDepth=="number"?e.maxDepth:il,this.forceChown=e.forceChown===!0,this.win32=!!e.win32||Ft,this.newer=!!e.newer,this.keep=!!e.keep,this.noMtime=!!e.noMtime,this.preservePaths=!!e.preservePaths,this.unlink=!!e.unlink,this.cwd=(0,U.normalizeWindowsPath)(g.default.resolve(e.cwd||process.cwd())),this.strip=Number(e.strip)||0,this.processUmask=this.chmod?typeof e.processUmask=="number"?e.processUmask:(0,el.umask)():0,this.umask=typeof e.umask=="number"?e.umask:this.processUmask,this.dmode=e.dmode||511&~this.umask,this.fmode=e.fmode||438&~this.umask,this.on("entry",t=>this[Vn](t))}warn(e,t,i={}){return(e==="TAR_BAD_ARCHIVE"||e==="TAR_ABORT")&&(i.recoverable=!1),super.warn(e,t,i)}[Rr](){this[gr]&&this[qi]===0&&(this.emit("prefinish"),this.emit("finish"),this.emit("end"))}[Sr](e,t){let i=e[t],{type:r}=e;if(!i||this.preservePaths)return!0;let[n,o]=(0,Qh.stripAbsolutePath)(i),a=o.replace(/\\/g,"/").split("/");if(a.includes("..")||Ft&&/^[a-z]:\.\.$/i.test(a[0]??"")){if(t==="path"||r==="Link")return this.warn("TAR_ENTRY_ERROR",`${t} contains '..'`,{entry:e,[t]:i}),!1;{let h=g.default.posix.dirname(e.path),l=g.default.posix.normalize(g.default.posix.join(h,a.join("/")));if(l.startsWith("../")||l==="..")return this.warn("TAR_ENTRY_ERROR",`${t} escapes extraction directory`,{entry:e,[t]:i}),!1}}return n&&(e[t]=String(o),this.warn("TAR_ENTRY_INFO",`stripping ${n} from absolute ${t}`,{entry:e,[t]:i})),!0}[eo](e){let t=(0,U.normalizeWindowsPath)(e.path),i=t.split("/");if(this.strip){if(i.length<this.strip)return!1;if(e.type==="Link"){let r=(0,U.normalizeWindowsPath)(String(e.linkpath)).split("/");if(r.length>=this.strip)e.linkpath=r.slice(this.strip).join("/");else return!1}i.splice(0,this.strip),e.path=i.join("/")}if(isFinite(this.maxDepth)&&i.length>this.maxDepth)return this.warn("TAR_ENTRY_ERROR","path excessively deep",{entry:e,path:t,depth:i.length,maxDepth:this.maxDepth}),!1;if(!this[Sr](e,"path")||!this[Sr](e,"linkpath"))return!1;if(g.default.isAbsolute(e.path)?e.absolute=(0,U.normalizeWindowsPath)(g.default.resolve(e.path)):e.absolute=(0,U.normalizeWindowsPath)(g.default.resolve(this.cwd,e.path)),!this.preservePaths&&typeof e.absolute=="string"&&e.absolute.indexOf(this.cwd+"/")!==0&&e.absolute!==this.cwd)return this.warn("TAR_ENTRY_ERROR","path escaped extraction target",{entry:e,path:(0,U.normalizeWindowsPath)(e.path),resolvedPath:e.absolute,cwd:this.cwd}),!1;if(e.absolute===this.cwd&&e.type!=="Directory"&&e.type!=="GNUDumpDir")return!1;if(this.win32){let{root:r}=g.default.win32.parse(String(e.absolute));e.absolute=r+Kn.encode(String(e.absolute).slice(r.length));let{root:n}=g.default.win32.parse(e.path);e.path=n+Kn.encode(e.path.slice(n.length))}return!0}[Vn](e){if(!this[eo](e))return e.resume();switch($h.default.equal(typeof e.absolute,"string"),e.type){case"Directory":case"GNUDumpDir":e.mode&&(e.mode=e.mode|448);case"File":case"OldFile":case"ContiguousFile":case"Link":case"SymbolicLink":return this[Or](e);default:return this[Jn](e)}}[T](e,t){e.name==="CwdError"?this.emit("error",e):(this.warn("TAR_ENTRY_ERROR",e,{entry:t}),this[ut](),t.resume())}[De](e,t,i){(0,oo.mkdir)((0,U.normalizeWindowsPath)(e),{uid:this.uid,gid:this.gid,processUid:this.processUid,processGid:this.processGid,umask:this.processUmask,preserve:this.preservePaths,unlink:this.unlink,cwd:this.cwd,mode:t},i)}[Lt](e){return this.forceChown||this.preserveOwner&&(typeof e.uid=="number"&&e.uid!==this.processUid||typeof e.gid=="number"&&e.gid!==this.processGid)||typeof this.uid=="number"&&this.uid!==this.processUid||typeof this.gid=="number"&&this.gid!==this.processGid}[At](e){return io(this.uid,e.uid,this.processUid)}[It](e){return io(this.gid,e.gid,this.processGid)}[Tr](e,t){let i=typeof e.mode=="number"?e.mode&4095:this.fmode,r=new Vh.WriteStream(String(e.absolute),{flags:(0,no.getWriteFlag)(e.size),mode:i,autoClose:!1});r.on("error",h=>{r.fd&&m.default.close(r.fd,()=>{}),r.write=()=>!0,this[T](h,e),t()});let n=1,o=h=>{if(h){r.fd&&m.default.close(r.fd,()=>{}),this[T](h,e),t();return}--n===0&&r.fd!==void 0&&m.default.close(r.fd,l=>{l?this[T](l,e):this[ut](),t()})};r.on("finish",()=>{let h=String(e.absolute),l=r.fd;if(typeof l=="number"&&e.mtime&&!this.noMtime){n++;let u=e.atime||new Date,c=e.mtime;m.default.futimes(l,u,c,E=>E?m.default.utimes(h,u,c,D=>o(D&&E)):o())}if(typeof l=="number"&&this[Lt](e)){n++;let u=this[At](e),c=this[It](e);typeof u=="number"&&typeof c=="number"&&m.default.fchown(l,u,c,E=>E?m.default.chown(h,u,c,D=>o(D&&E)):o())}o()});let a=this.transform&&this.transform(e)||e;a!==e&&(a.on("error",h=>{this[T](h,e),t()}),e.pipe(a)),a.pipe(r)}[Dr](e,t){let i=typeof e.mode=="number"?e.mode&4095:this.dmode;this[De](String(e.absolute),i,r=>{if(r){this[T](r,e),t();return}let n=1,o=()=>{--n===0&&(t(),this[ut](),e.resume())};e.mtime&&!this.noMtime&&(n++,m.default.utimes(String(e.absolute),e.atime||new Date,e.mtime,o)),this[Lt](e)&&(n++,m.default.chown(String(e.absolute),Number(this[At](e)),Number(this[It](e)),o)),o()})}[Jn](e){e.unsupported=!0,this.warn("TAR_ENTRY_UNSUPPORTED",`unsupported entry type: ${e.type}`,{entry:e}),e.resume()}[Xn](e,t){let i=(0,U.normalizeWindowsPath)(g.default.relative(this.cwd,g.default.resolve(g.default.dirname(String(e.absolute)),String(e.linkpath)))).split("/");this[Mt](e,this.cwd,i,()=>this[Wi](e,String(e.linkpath),"symlink",t),r=>{this[T](r,e),t()})}[Qn](e,t){let i=(0,U.normalizeWindowsPath)(g.default.resolve(this.cwd,String(e.linkpath))),r=(0,U.normalizeWindowsPath)(String(e.linkpath)).split("/");this[Mt](e,this.cwd,r,()=>this[Wi](e,i,"link",t),n=>{this[T](n,e),t()})}[Mt](e,t,i,r,n){let o=i.shift();if(this.preservePaths||o===void 0)return r();let a=g.default.resolve(t,o);m.default.lstat(a,(h,l)=>{if(h)return r();if(l?.isSymbolicLink())return n(new ao.SymlinkError(a,g.default.resolve(a,i.join("/"))));this[Mt](e,a,i,r,n)})}[to](){this[qi]++}[ut](){this[qi]--,this[Rr]()}[Pr](e){this[ut](),e.resume()}[vr](e,t){return e.type==="File"&&!this.unlink&&t.isFile()&&t.nlink<=1&&!Ft}[Or](e){this[to]();let t=[e.path];e.linkpath&&t.push(e.linkpath),this.reservations.reserve(t,i=>this[$n](e,i))}[$n](e,t){let i=a=>{t(a)},r=()=>{this[De](this.cwd,this.dmode,a=>{if(a){this[T](a,e),i();return}this[Ct]=!0,n()})},n=()=>{if(e.absolute!==this.cwd){let a=(0,U.normalizeWindowsPath)(g.default.dirname(String(e.absolute)));if(a!==this.cwd)return this[De](a,this.dmode,h=>{if(h){this[T](h,e),i();return}o()})}o()},o=()=>{m.default.lstat(String(e.absolute),(a,h)=>{if(h&&(this.keep||this.newer&&h.mtime>(e.mtime??h.mtime))){this[Pr](e),i();return}if(a||this[vr](e,h))return this[Z](null,e,i);if(h.isDirectory()){if(e.type==="Directory"){let l=this.chmod&&e.mode&&(h.mode&4095)!==e.mode,u=c=>this[Z](c??null,e,i);return l?m.default.chmod(String(e.absolute),Number(e.mode),u):u()}if(e.absolute!==this.cwd)return m.default.rmdir(String(e.absolute),l=>this[Z](l??null,e,i))}if(e.absolute===this.cwd)return this[Z](null,e,i);sl(String(e.absolute),l=>this[Z](l??null,e,i))})};this[Ct]?n():r()}[Z](e,t,i){if(e){this[T](e,t),i();return}switch(t.type){case"File":case"OldFile":case"ContiguousFile":return this[Tr](t,i);case"Link":return this[Qn](t,i);case"SymbolicLink":return this[Xn](t,i);case"Directory":case"GNUDumpDir":return this[Dr](t,i)}}[Wi](e,t,i,r){m.default[i](t,String(e.absolute),n=>{n?this[T](n,e):(this[ut](),e.resume()),r()})}};z.Unpack=Hi;var Nt=s=>{try{return[null,s()]}catch(e){return[e,null]}},Nr=class extends Hi{sync=!0;[Z](e,t){return super[Z](e,t,()=>{})}[Or](e){if(!this[Ct]){let n=this[De](this.cwd,this.dmode);if(n)return this[T](n,e);this[Ct]=!0}if(e.absolute!==this.cwd){let n=(0,U.normalizeWindowsPath)(g.default.dirname(String(e.absolute)));if(n!==this.cwd){let o=this[De](n,this.dmode);if(o)return this[T](o,e)}}let[t,i]=Nt(()=>m.default.lstatSync(String(e.absolute)));if(i&&(this.keep||this.newer&&i.mtime>(e.mtime??i.mtime)))return this[Pr](e);if(t||this[vr](e,i))return this[Z](null,e);if(i.isDirectory()){if(e.type==="Directory"){let o=this.chmod&&e.mode&&(i.mode&4095)!==e.mode,[a]=o?Nt(()=>{m.default.chmodSync(String(e.absolute),Number(e.mode))}):[];return this[Z](a,e)}let[n]=Nt(()=>m.default.rmdirSync(String(e.absolute)));this[Z](n,e)}let[r]=e.absolute===this.cwd?[]:Nt(()=>rl(String(e.absolute)));this[Z](r,e)}[Tr](e,t){let i=typeof e.mode=="number"?e.mode&4095:this.fmode,r=a=>{let h;try{m.default.closeSync(n)}catch(l){h=l}(a||h)&&this[T](a||h,e),t()},n;try{n=m.default.openSync(String(e.absolute),(0,no.getWriteFlag)(e.size),i)}catch(a){return r(a)}let o=this.transform&&this.transform(e)||e;o!==e&&(o.on("error",a=>this[T](a,e)),e.pipe(o)),o.on("data",a=>{try{m.default.writeSync(n,a,0,a.length)}catch(h){r(h)}}),o.on("end",()=>{let a=null;if(e.mtime&&!this.noMtime){let h=e.atime||new Date,l=e.mtime;try{m.default.futimesSync(n,h,l)}catch(u){try{m.default.utimesSync(String(e.absolute),h,l)}catch{a=u}}}if(this[Lt](e)){let h=this[At](e),l=this[It](e);try{m.default.fchownSync(n,Number(h),Number(l))}catch(u){try{m.default.chownSync(String(e.absolute),Number(h),Number(l))}catch{a=a||u}}}r(a)})}[Dr](e,t){let i=typeof e.mode=="number"?e.mode&4095:this.dmode,r=this[De](String(e.absolute),i);if(r){this[T](r,e),t();return}if(e.mtime&&!this.noMtime)try{m.default.utimesSync(String(e.absolute),e.atime||new Date,e.mtime)}catch{}if(this[Lt](e))try{m.default.chownSync(String(e.absolute),Number(this[At](e)),Number(this[It](e)))}catch{}t(),e.resume()}[De](e,t){try{return(0,oo.mkdirSync)((0,U.normalizeWindowsPath)(e),{uid:this.uid,gid:this.gid,processUid:this.processUid,processGid:this.processGid,umask:this.processUmask,preserve:this.preservePaths,unlink:this.unlink,cwd:this.cwd,mode:t})}catch(i){return i}}[Mt](e,t,i,r,n){if(this.preservePaths||!i.length)return r();let o=t;for(let a of i){o=g.default.resolve(o,a);let[h,l]=Nt(()=>m.default.lstatSync(o));if(h)return r();if(l.isSymbolicLink())return n(new ao.SymlinkError(o,g.default.resolve(t,i.join("/"))))}r()}[Wi](e,t,i,r){let n=`${i}Sync`;try{m.default[n](t,String(e.absolute)),r(),e.resume()}catch(o){return this[T](o,e)}}};z.UnpackSync=Nr});var Ar=d(G=>{"use strict";var nl=G&&G.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),ol=G&&G.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),al=G&&G.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&nl(t,e,i[r]);return ol(t,e),t}})(),hl=G&&G.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(G,"__esModule",{value:!0});G.extract=void 0;var ho=al(Ke()),lo=hl(__nccwpck_require__(3024)),ll=st(),ul=Ve(),Zi=Lr(),cl=s=>{let e=new Zi.UnpackSync(s),t=s.file,i=lo.default.statSync(t),r=s.maxReadSize||16*1024*1024;new ho.ReadStreamSync(t,{readSize:r,size:i.size}).pipe(e)},fl=(s,e)=>{let t=new Zi.Unpack(s),i=s.maxReadSize||16*1024*1024,r=s.file;return new Promise((o,a)=>{t.on("error",a),t.on("close",o),lo.default.stat(r,(h,l)=>{if(h)a(h);else{let u=new ho.ReadStream(r,{readSize:i,size:l.size});u.on("error",a),u.pipe(t)}})})};G.extract=(0,ul.makeCommand)(cl,fl,s=>new Zi.UnpackSync(s),s=>new Zi.Unpack(s),(s,e)=>{e?.length&&(0,ll.filesFilter)(s,e)})});var Gi=d(ct=>{"use strict";var uo=ct&&ct.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ct,"__esModule",{value:!0});ct.replace=void 0;var co=Ke(),q=uo(__nccwpck_require__(3024)),fo=uo(__nccwpck_require__(6760)),mo=Je(),po=st(),dl=Ve(),ml=Vt(),_o=Ai(),pl=(s,e)=>{let t=new _o.PackSync(s),i=!0,r,n;try{try{r=q.default.openSync(s.file,"r+")}catch(h){if(h?.code==="ENOENT")r=q.default.openSync(s.file,"w+");else throw h}let o=q.default.fstatSync(r),a=Buffer.alloc(512);e:for(n=0;n<o.size;n+=512){for(let u=0,c=0;u<512;u+=c){if(c=q.default.readSync(r,a,u,a.length-u,n+u),n===0&&a[0]===31&&a[1]===139)throw new Error("cannot append to compressed archives");if(!c)break e}let h=new mo.Header(a);if(!h.cksumValid)break;let l=512*Math.ceil((h.size||0)/512);if(n+l+512>o.size)break;n+=l,s.mtimeCache&&h.mtime&&s.mtimeCache.set(String(h.path),h.mtime)}i=!1,_l(s,t,n,r,e)}finally{if(i)try{q.default.closeSync(r)}catch{}}},_l=(s,e,t,i,r)=>{let n=new co.WriteStreamSync(s.file,{fd:i,start:t});e.pipe(n),yl(e,r)},wl=(s,e)=>{e=Array.from(e);let t=new _o.Pack(s),i=(n,o,a)=>{let h=(D,A)=>{D?q.default.close(n,w=>a(D)):a(null,A)},l=0;if(o===0)return h(null,0);let u=0,c=Buffer.alloc(512),E=(D,A)=>{if(D||typeof A>"u")return h(D);if(u+=A,u<512&&A)return q.default.read(n,c,u,c.length-u,l+u,E);if(l===0&&c[0]===31&&c[1]===139)return h(new Error("cannot append to compressed archives"));if(u<512)return h(null,l);let w=new mo.Header(c);if(!w.cksumValid)return h(null,l);let P=512*Math.ceil((w.size??0)/512);if(l+P+512>o||(l+=P+512,l>=o))return h(null,l);s.mtimeCache&&w.mtime&&s.mtimeCache.set(String(w.path),w.mtime),u=0,q.default.read(n,c,0,512,l,E)};q.default.read(n,c,0,512,l,E)};return new Promise((n,o)=>{t.on("error",o);let a="r+",h=(l,u)=>{if(l&&l.code==="ENOENT"&&a==="r+")return a="w+",q.default.open(s.file,a,h);if(l||!u)return o(l);q.default.fstat(u,(c,E)=>{if(c)return q.default.close(u,()=>o(c));i(u,E.size,(D,A)=>{if(D)return o(D);let w=new co.WriteStream(s.file,{fd:u,start:A});t.pipe(w),w.on("error",o),w.on("close",n),El(t,e)})})};q.default.open(s.file,a,h)})},yl=(s,e)=>{e.forEach(t=>{t.charAt(0)==="@"?(0,po.list)({file:fo.default.resolve(s.cwd,t.slice(1)),sync:!0,noResume:!0,onReadEntry:i=>s.add(i)}):s.add(t)}),s.end()},El=async(s,e)=>{for(let t=0;t<e.length;t++){let i=String(e[t]);i.charAt(0)==="@"?await(0,po.list)({file:fo.default.resolve(String(s.cwd),i.slice(1)),noResume:!0,onReadEntry:r=>s.add(r)}):s.add(i)}s.end()};ct.replace=(0,dl.makeCommand)(pl,wl,()=>{throw new TypeError("file is required")},()=>{throw new TypeError("file is required")},(s,e)=>{if(!(0,ml.isFile)(s))throw new TypeError("file is required");if(s.gzip||s.brotli||s.zstd||s.file.endsWith(".br")||s.file.endsWith(".tbr"))throw new TypeError("cannot append to compressed archives");if(!e?.length)throw new TypeError("no paths specified to add/replace")})});var Ir=d(Yi=>{"use strict";Object.defineProperty(Yi,"__esModule",{value:!0});Yi.update=void 0;var bl=Ve(),Bt=Gi();Yi.update=(0,bl.makeCommand)(Bt.replace.syncFile,Bt.replace.asyncFile,Bt.replace.syncNoFile,Bt.replace.asyncNoFile,(s,e=[])=>{Bt.replace.validate?.(s,e),Sl(s)});var Sl=s=>{let e=s.filter;s.mtimeCache||(s.mtimeCache=new Map),s.filter=e?(t,i)=>e(t,i)&&!((s.mtimeCache?.get(t)??i.mtime??0)>(i.mtime??0)):(t,i)=>!((s.mtimeCache?.get(t)??i.mtime??0)>(i.mtime??0))}});var wo=exports&&exports.__createBinding||(Object.create?(function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}):(function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]})),gl=exports&&exports.__setModuleDefault||(Object.create?(function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}):function(s,e){s.default=e}),Y=exports&&exports.__exportStar||function(s,e){for(var t in s)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&wo(e,s,t)},Rl=exports&&exports.__importStar||(function(){var s=function(e){return s=Object.getOwnPropertyNames||function(t){var i=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[i.length]=r);return i},s(e)};return function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var i=s(e),r=0;r<i.length;r++)i[r]!=="default"&&wo(t,e,i[r]);return gl(t,e),t}})();Object.defineProperty(exports, "__esModule", ({value:!0}));exports.u=exports.types=exports.r=exports.t=exports.x=exports.c=void 0;Y(fr(),exports);var Ol=fr();Object.defineProperty(exports, "c", ({enumerable:!0,get:function(){return Ol.create}}));Y(Ar(),exports);var vl=Ar();Object.defineProperty(exports, "x", ({enumerable:!0,get:function(){return vl.extract}}));Y(Je(),exports);Y(st(),exports);var Tl=st();Object.defineProperty(exports, "t", ({enumerable:!0,get:function(){return Tl.list}}));Y(Ai(),exports);Y(mi(),exports);Y(ei(),exports);Y(ri(),exports);Y(Gi(),exports);var Dl=Gi();Object.defineProperty(exports, "r", ({enumerable:!0,get:function(){return Dl.replace}}));exports.types=Rl(Ts());Y(Lr(),exports);Y(Ir(),exports);var Pl=Ir();Object.defineProperty(exports, "u", ({enumerable:!0,get:function(){return Pl.update}}));Y(er(),exports);
//# sourceMappingURL=index.min.js.map


/***/ }),

/***/ 7269:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*! Axios v1.17.0 Copyright (c) 2026 Matt Zabriskie and contributors */


var FormData$1 = __nccwpck_require__(6454);
var crypto = __nccwpck_require__(6982);
var url = __nccwpck_require__(7016);
var HttpsProxyAgent = __nccwpck_require__(3669);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var http2 = __nccwpck_require__(5675);
var util = __nccwpck_require__(9023);
var path = __nccwpck_require__(6928);
var followRedirects = __nccwpck_require__(1573);
var zlib = __nccwpck_require__(3106);
var stream = __nccwpck_require__(2203);
var events = __nccwpck_require__(4434);

/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const {
  iterator,
  toStringTag
} = Symbol;
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = val => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = value => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = formData => formData && typeof formData.getParts !== 'undefined';

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a FileList, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  return {};
}
const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;
const isFormData = thing => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction$1(thing.append)) return false;
  const kind = kindOf(thing);
  return kind === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]';
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer(obj)) {
      return;
    }

    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(...objs) {
  const {
    caseless,
    skipUndefined
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    // findKey lowercases the key, so caseless lookup only applies to strings —
    // symbol keys are identity-matched.
    const targetKey = caseless && typeof key === 'string' && findKey(result, key) || key;
    // Read via own-prop only — a bare `result[targetKey]` walks the prototype
    // chain, so a polluted Object.prototype value could surface here and get
    // copied into the merged result.
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }
    forEach(source, assignValue);
    if (typeof source !== 'object' || isArray(source)) {
      continue;
    }
    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      Object.defineProperty(a, key, {
        // Null-proto descriptor so a polluted Object.prototype.get cannot
        // hijack defineProperty's accessor-vs-data resolution.
        __proto__: null,
        value: bind(val, thisArg),
        writable: true,
        enumerable: true,
        configurable: true
      });
    } else {
      Object.defineProperty(a, key, {
        __proto__: null,
        value: val,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, 'constructor', {
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, 'super', {
    __proto__: null,
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
const {
  propertyIsEnumerable
} = Object.prototype;

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = obj => {
  const visited = new WeakSet();
  const visit = source => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }
      if (!('toJSON' in source)) {
        // add-on descent / delete-on-ascent: preserves path semantics, so DAG nodes serialise at every occurrence (see #7230).
        visited.add(source);
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        visited.delete(source);
        return target;
      }
    }
    return source;
  };
  return visit(obj);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = thing => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener('message', ({
      source,
      data
    }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return cb => {
      callbacks.push(cb);
      _global.postMessage(token, '*');
    };
  })(`axios@${Math.random()}`, []) : cb => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction$1(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;

// *********************

const isIterable = thing => thing != null && isFunction$1(thing[iterator]);
var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};

function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;
  while (start < end) {
    const code = str.charCodeAt(start);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = str.charCodeAt(end - 1);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === str.length ? str : str.slice(start, end);
}

// The control-code ranges are intentional: header sanitization strips C0/DEL bytes.
// eslint-disable-next-line no-control-regex
const INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g');
// eslint-disable-next-line no-control-regex
const INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');
function sanitizeValue(value, invalidChars) {
  if (utils$1.isArray(value)) {
    return value.map(item => sanitizeValue(item, invalidChars));
  }
  return trimSPorHTAB(String(value).replace(invalidChars, ''));
}
const sanitizeHeaderValue = value => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
const sanitizeByteStringHeaderValue = value => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
function toByteStringHeaderObject(headers) {
  const byteStringHeaders = Object.create(null);
  utils$1.forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });
  return byteStringHeaders;
}

const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        return;
      }
      const key = utils$1.findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {},
        dest,
        key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw new TypeError('Object iterator must return a key-value pair');
        }
        obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);

const REDACTED = '[REDACTED ****]';
function hasOwnOrPrototypeToJSON(source) {
  if (utils$1.hasOwnProp(source, 'toJSON')) {
    return true;
  }
  let prototype = Object.getPrototypeOf(source);
  while (prototype && prototype !== Object.prototype) {
    if (utils$1.hasOwnProp(prototype, 'toJSON')) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
}

// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map(k => String(k).toLowerCase()));
  const seen = [];
  const visit = source => {
    if (source === null || typeof source !== 'object') return source;
    if (utils$1.isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return undefined;
    if (source instanceof AxiosHeaders) {
      source = source.toJSON();
    }
    seen.push(source);
    let result;
    if (utils$1.isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!utils$1.isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }
      result = Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!utils$1.isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }
    seen.pop();
    return result;
  };
  return visit(config);
}
class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);

    // Make message enumerable to maintain backward compatibility
    // The native Error constructor sets message as non-enumerable,
    // but axios < v1.13.3 had it as enumerable
    Object.defineProperty(this, 'message', {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = 'AxiosError';
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    // Opt-in redaction: when the request config carries a `redact` array, the
    // value of any matching key (case-insensitive, at any depth) is replaced
    // with REDACTED in the serialized snapshot. Undefined or empty leaves the
    // existing serialization behavior unchanged.
    const config = this.config;
    const redactKeys = config && utils$1.hasOwnProp(config, 'redact') ? config.redact : undefined;
    const serializedConfig = utils$1.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils$1.toJSONObject(config);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: serializedConfig,
      code: this.code,
      status: this.status
    };
  }
}

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ECONNREFUSED = 'ECONNREFUSED';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData$1 || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const maxDepth = options.maxDepth === undefined ? 100 : options.maxDepth;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path, depth = 0) {
    if (utils$1.isUndefined(value)) return;
    if (depth > maxDepth) {
      throw new AxiosError('Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth, AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED);
    }
    if (stack.indexOf(value) !== -1) {
      throw new Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;
  const serializeFn = _options && _options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false
};

var URLSearchParams = url.URLSearchParams;

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  const randomValues = new Uint32Array(size);
  crypto.randomFillSync(randomValues);
  for (let i = 0; i < size; i++) {
    str += alphabet[randomValues[i] % length];
  }
  return str;
};
var platform$1 = {
  isNode: true,
  classes: {
    URLSearchParams,
    FormData: FormData$1,
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  ALPHABET,
  generateString,
  protocols: ['http', 'https', 'file', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

const own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : undefined;

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = utils$1.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      const formSerializer = own(this, 'formSerializer');
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, formSerializer).toString();
      }
      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const env = own(this, 'env');
        const _FormData = env && env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = own(this, 'transitional') || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const responseType = own(this, 'responseType');
    const JSONRequested = responseType === 'json';
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data, own(this, 'parseReviver'));
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, own(this, 'response'));
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query'], method => {
  defaults.headers[method] = {};
});

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

class CanceledError extends AxiosError {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
}

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, response.status >= 400 && response.status < 500 ? AxiosError.ERR_BAD_REQUEST : AxiosError.ERR_BAD_RESPONSE, response.config, response.request, response));
  }
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  if (typeof url !== 'string') {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var DEFAULT_PORTS$1 = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function parseUrl(urlString) {
  try {
    return new URL(urlString);
  } catch {
    return null;
  }
}

/**
 * @param {string|object|URL} url - The URL as a string or URL instance, or a
 *   compatible object (such as the result from legacy url.parse).
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = (typeof url === 'string' ? parseUrl(url) : url) || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return ''; // Don't proxy URLs without a valid scheme or host.
  }
  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS$1[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return ''; // Don't proxy URLs that match NO_PROXY.
  }
  var proxy = getEnv(proto + '_proxy') || getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY = getEnv('no_proxy').toLowerCase();
  if (!NO_PROXY) {
    return true; // Always proxy if NO_PROXY is not set.
  }
  if (NO_PROXY === '*') {
    return false; // Never proxy if wildcard is set.
  }
  return NO_PROXY.split(/[,\s]/).every(function (proxy) {
    if (!proxy) {
      return true; // Skip zero-length hosts.
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true; // Skip if ports don't match.
    }
    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }
    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !hostname.endsWith(parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}

const VERSION = "1.17.0";

function parseProtocol(url) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
  return match && match[1] || '';
}

// RFC 2397: data:[<mediatype>][;base64],<data>
// mediatype = type/subtype followed by optional ;name=value parameters
const DATA_URL_PATTERN = /^([^,;]+\/[^,;]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }
  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
    }
    const type = match[1];
    const params = match[2];
    const encoding = match[3] ? 'base64' : 'utf8';
    const body = match[4];

    // RFC 2397 section 3: default mediatype is text/plain;charset=US-ASCII
    // Bare `data:,` leaves mime undefined; Blob normalises that to "" per spec.
    let mime;
    if (type) {
      mime = params ? type + params : type;
    } else if (params) {
      mime = 'text/plain' + params;
    }
    const buffer = Buffer.from(decodeURIComponent(body), encoding);
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], {
        type: mime
      });
    }
    return buffer;
  }
  throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
}

const kInternals = Symbol('internals');
class AxiosTransformStream extends stream.Transform {
  constructor(options) {
    options = utils$1.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils$1.isUndefined(source[prop]);
    });
    super({
      readableHighWaterMark: options.chunkSize
    });
    const internals = this[kInternals] = {
      timeWindow: options.timeWindow,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1000 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    const pushChunk = (_chunk, _callback) => {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      internals.isCaptured && this.emit('progress', internals.bytesSeen);
      if (this.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    };
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
}

const {
  asyncIterator
} = Symbol;
const readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};

const BOUNDARY_ALPHABET = platform.ALPHABET.ALPHA_DIGIT + '-_';
const textEncoder = typeof TextEncoder === 'function' ? new TextEncoder() : new util.TextEncoder();
const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;
class FormDataPart {
  constructor(name, value) {
    const {
      escapeName
    } = this.constructor;
    const isStringValue = utils$1.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      const safeType = String(value.type || 'application/octet-stream').replace(/[\r\n]/g, '');
      headers += `Content-Type: ${safeType}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  async *encode() {
    yield this.headers;
    const {
      value
    } = this;
    if (utils$1.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob(value);
    }
    yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, match => ({
      '\r': '%0D',
      '\n': '%0A',
      '"': '%22'
    })[match]);
  }
}
const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + platform.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils$1.isFormData(form)) {
    throw new TypeError('FormData instance required');
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw new Error('boundary must be 1-70 characters long');
  }
  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils$1.toFiniteNumber(contentLength);
  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return stream.Readable.from(async function* () {
    for (const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }
    yield footerBytes;
  }());
};

class ZlibHeaderTransformStream extends stream.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) {
        // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
}

class Http2Sessions {
  constructor() {
    this.sessions = Object.create(null);
  }
  getSession(authority, options) {
    options = Object.assign({
      sessionTimeout: 1000
    }, options);
    let authoritySessions = this.sessions[authority];
    if (authoritySessions) {
      let len = authoritySessions.length;
      for (let i = 0; i < len; i++) {
        const [sessionHandle, sessionOptions] = authoritySessions[i];
        if (!sessionHandle.destroyed && !sessionHandle.closed && util.isDeepStrictEqual(sessionOptions, options)) {
          return sessionHandle;
        }
      }
    }
    const session = http2.connect(authority, options);
    let removed;
    let timer;
    const removeSession = () => {
      if (removed) {
        return;
      }
      removed = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      let entries = authoritySessions,
        len = entries.length,
        i = len;
      while (i--) {
        if (entries[i][0] === session) {
          if (len === 1) {
            delete this.sessions[authority];
          } else {
            entries.splice(i, 1);
          }
          if (!session.closed) {
            session.close();
          }
          return;
        }
      }
    };
    const originalRequestFn = session.request;
    const {
      sessionTimeout
    } = options;
    if (sessionTimeout != null) {
      let streamsCount = 0;
      session.request = function () {
        const stream = originalRequestFn.apply(this, arguments);
        streamsCount++;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        stream.once('close', () => {
          if (! --streamsCount) {
            timer = setTimeout(() => {
              timer = null;
              removeSession();
            }, sessionTimeout);
          }
        });
        return stream;
      };
    }
    session.once('close', removeSession);
    let entry = [session, options];
    authoritySessions ? authoritySessions.push(entry) : authoritySessions = this.sessions[authority] = [entry];
    return session;
  }
}

const callbackify = (fn, reducer) => {
  return utils$1.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then(value => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};

const LOOPBACK_HOSTNAMES = new Set(['localhost']);
const isIPv4Loopback = host => {
  const parts = host.split('.');
  if (parts.length !== 4) return false;
  if (parts[0] !== '127') return false;
  return parts.every(p => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255);
};
const isIPv6Loopback = host => {
  // Collapse all-zero groups: any form of ::1 / 0:0:...:0:1
  // First, strip any leading "::" by normalising with Set lookup of common forms,
  // then fall back to structural check.
  if (host === '::1') return true;

  // Check IPv4-mapped IPv6 loopback: ::ffff:<v4-loopback> or ::ffff:<hex-v4-loopback>
  // Node's URL parser normalises ::ffff:127.0.0.1 → ::ffff:7f00:1
  const v4MappedDotted = host.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (v4MappedDotted) return isIPv4Loopback(v4MappedDotted[1]);
  const v4MappedHex = host.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (v4MappedHex) {
    const high = parseInt(v4MappedHex[1], 16);
    // High 16 bits must start with 127 (0x7f) — i.e. 0x7f00..0x7fff
    return high >= 0x7f00 && high <= 0x7fff;
  }

  // Full-form ::1 variants: any number of zero groups followed by trailing 1
  // e.g. 0:0:0:0:0:0:0:1, 0000:...:0001
  const groups = host.split(':');
  if (groups.length === 8) {
    for (let i = 0; i < 7; i++) {
      if (!/^0+$/.test(groups[i])) return false;
    }
    return /^0*1$/.test(groups[7]);
  }
  return false;
};
const isLoopback = host => {
  if (!host) return false;
  if (LOOPBACK_HOSTNAMES.has(host)) return true;
  if (isIPv4Loopback(host)) return true;
  return isIPv6Loopback(host);
};
const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
};
const parseNoProxyEntry = entry => {
  let entryHost = entry;
  let entryPort = 0;
  if (entryHost.charAt(0) === '[') {
    const bracketIndex = entryHost.indexOf(']');
    if (bracketIndex !== -1) {
      const host = entryHost.slice(1, bracketIndex);
      const rest = entryHost.slice(bracketIndex + 1);
      if (rest.charAt(0) === ':' && /^\d+$/.test(rest.slice(1))) {
        entryPort = Number.parseInt(rest.slice(1), 10);
      }
      return [host, entryPort];
    }
  }
  const firstColon = entryHost.indexOf(':');
  const lastColon = entryHost.lastIndexOf(':');
  if (firstColon !== -1 && firstColon === lastColon && /^\d+$/.test(entryHost.slice(lastColon + 1))) {
    entryPort = Number.parseInt(entryHost.slice(lastColon + 1), 10);
    entryHost = entryHost.slice(0, lastColon);
  }
  return [entryHost, entryPort];
};

// Convert IPv4-mapped IPv6 (::ffff:0:0/96 prefix) to IPv4 dotted form so both
// sides of a NO_PROXY comparison see the same canonical address. Without this,
// `NO_PROXY=192.168.1.5` would not match a request to `http://[::ffff:192.168.1.5]/`
// (Node's URL parser normalises that to `[::ffff:c0a8:105]`), and vice-versa,
// allowing the proxy-bypass policy to be circumvented by using the alternate
// representation. Returns the input unchanged when not IPv4-mapped.
const IPV4_MAPPED_DOTTED_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i;
const IPV4_MAPPED_HEX_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const unmapIPv4MappedIPv6 = host => {
  if (typeof host !== 'string' || host.indexOf(':') === -1) return host;
  const dotted = host.match(IPV4_MAPPED_DOTTED_RE);
  if (dotted) return dotted[1];
  const hex = host.match(IPV4_MAPPED_HEX_RE);
  if (hex) {
    const high = parseInt(hex[1], 16);
    const low = parseInt(hex[2], 16);
    return `${high >> 8}.${high & 0xff}.${low >> 8}.${low & 0xff}`;
  }
  return host;
};
const normalizeNoProxyHost = hostname => {
  if (!hostname) {
    return hostname;
  }
  if (hostname.charAt(0) === '[' && hostname.charAt(hostname.length - 1) === ']') {
    hostname = hostname.slice(1, -1);
  }
  return unmapIPv4MappedIPv6(hostname.replace(/\.+$/, ''));
};
function shouldBypassProxy(location) {
  let parsed;
  try {
    parsed = new URL(location);
  } catch (_err) {
    return false;
  }
  const noProxy = (process.env.no_proxy || process.env.NO_PROXY || '').toLowerCase();
  if (!noProxy) {
    return false;
  }
  if (noProxy === '*') {
    return true;
  }
  const port = Number.parseInt(parsed.port, 10) || DEFAULT_PORTS[parsed.protocol.split(':', 1)[0]] || 0;
  const hostname = normalizeNoProxyHost(parsed.hostname.toLowerCase());
  return noProxy.split(/[\s,]+/).some(entry => {
    if (!entry) {
      return false;
    }
    let [entryHost, entryPort] = parseNoProxyEntry(entry);
    entryHost = normalizeNoProxyHost(entryHost);
    if (!entryHost) {
      return false;
    }
    if (entryPort && entryPort !== port) {
      return false;
    }
    if (entryHost.charAt(0) === '*') {
      entryHost = entryHost.slice(1);
    }
    if (entryHost.charAt(0) === '.') {
      return hostname.endsWith(entryHost);
    }
    return hostname === entryHost || isLoopback(hostname) && isLoopback(entryHost);
  });
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle(e => {
    if (!e || typeof e.loaded !== 'number') {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);
    bytesNotified = Math.max(bytesNotified, loaded);
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [loaded => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = fn => (...args) => utils$1.asap(() => fn(...args));

/**
 * Estimate decoded byte length of a data:// URL *without* allocating large buffers.
 * - For base64: compute exact decoded size using length and padding;
 *               handle %XX at the character-count level (no string allocation).
 * - For non-base64: use UTF-8 byteLength of the encoded body as a safe upper bound.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLDecodedBytes(url) {
  if (!url || typeof url !== 'string') return 0;
  if (!url.startsWith('data:')) return 0;
  const comma = url.indexOf(',');
  if (comma < 0) return 0;
  const meta = url.slice(5, comma);
  const body = url.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);
  if (isBase64) {
    let effectiveLen = body.length;
    const len = body.length; // cache length

    for (let i = 0; i < len; i++) {
      if (body.charCodeAt(i) === 37 /* '%' */ && i + 2 < len) {
        const a = body.charCodeAt(i + 1);
        const b = body.charCodeAt(i + 2);
        const isHex = (a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102) && (b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102);
        if (isHex) {
          effectiveLen -= 2;
          i += 2;
        }
      }
    }
    let pad = 0;
    let idx = len - 1;
    const tailIsPct3D = j => j >= 2 && body.charCodeAt(j - 2) === 37 &&
    // '%'
    body.charCodeAt(j - 1) === 51 && (
    // '3'
    body.charCodeAt(j) === 68 || body.charCodeAt(j) === 100); // 'D' or 'd'

    if (idx >= 0) {
      if (body.charCodeAt(idx) === 61 /* '=' */) {
        pad++;
        idx--;
      } else if (tailIsPct3D(idx)) {
        pad++;
        idx -= 3;
      }
    }
    if (pad === 1 && idx >= 0) {
      if (body.charCodeAt(idx) === 61 /* '=' */) {
        pad++;
      } else if (tailIsPct3D(idx)) {
        pad++;
      }
    }
    const groups = Math.floor(effectiveLen / 4);
    const bytes = groups * 3 - (pad || 0);
    return bytes > 0 ? bytes : 0;
  }
  if (typeof Buffer !== 'undefined' && typeof Buffer.byteLength === 'function') {
    return Buffer.byteLength(body, 'utf8');
  }

  // Compute UTF-8 byte length directly from UTF-16 code units without allocating
  // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
  // Using body.length here would undercount non-ASCII (e.g. '€' is 1 code unit
  // but 3 UTF-8 bytes).
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c < 0x80) {
      bytes += 1;
    } else if (c < 0x800) {
      bytes += 2;
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
}

const zlibOptions = {
  flush: zlib.constants.Z_SYNC_FLUSH,
  finishFlush: zlib.constants.Z_SYNC_FLUSH
};
const brotliOptions = {
  flush: zlib.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
};
const zstdOptions = {
  flush: zlib.constants.ZSTD_e_flush,
  finishFlush: zlib.constants.ZSTD_e_flush
};
const isBrotliSupported = utils$1.isFunction(zlib.createBrotliDecompress);
const isZstdSupported = utils$1.isFunction(zlib.createZstdDecompress);
const ACCEPT_ENCODING = 'gzip, compress, deflate' + (isBrotliSupported ? ', br' : '');
const ACCEPT_ENCODING_WITH_ZSTD = ACCEPT_ENCODING + (isZstdSupported ? ', zstd' : '');
const {
  http: httpFollow,
  https: httpsFollow
} = followRedirects;
const isHttps = /https:?/;
const FORM_DATA_CONTENT_HEADERS$1 = ['content-type', 'content-length'];
function setFormDataHeaders$1(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }
  Object.entries(formHeaders).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS$1.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}

// Symbols used to bind a single 'error' listener to a pooled socket and track
// the request currently owning that socket across keep-alive reuse (issue #10780).
const kAxiosSocketListener = Symbol('axios.http.socketListener');
const kAxiosCurrentReq = Symbol('axios.http.currentReq');

// Tags HttpsProxyAgent instances installed by setProxy() so the redirect path
// can strip them without clobbering a user-supplied agent that happens to be
// an HttpsProxyAgent.
const kAxiosInstalledTunnel = Symbol('axios.http.installedTunnel');

// Cache of CONNECT-tunneling agents keyed by proxy config so repeat requests
// through the same proxy reuse a single agent (and its socket pool). The
// keyspace is bounded by the set of distinct proxy configs the process uses,
// so unbounded growth is not a concern in practice.
const tunnelingAgentCache = new Map();
const tunnelingAgentCacheUser = new WeakMap();
function getTunnelingAgent(agentOptions, userHttpsAgent) {
  const key = agentOptions.protocol + '//' + agentOptions.hostname + ':' + (agentOptions.port || '') + '#' + (agentOptions.auth || '');
  const cache = userHttpsAgent ? tunnelingAgentCacheUser.get(userHttpsAgent) || tunnelingAgentCacheUser.set(userHttpsAgent, new Map()).get(userHttpsAgent) : tunnelingAgentCache;
  let agent = cache.get(key);
  if (agent) return agent;
  // Forward the user's TLS options (custom CA, rejectUnauthorized, client cert,
  // etc.) into the tunneling agent so they apply to the origin TLS upgrade
  // performed after CONNECT. Our proxy fields take precedence on conflict.
  const merged = userHttpsAgent && userHttpsAgent.options ? {
    ...userHttpsAgent.options,
    ...agentOptions
  } : agentOptions;
  agent = new HttpsProxyAgent(merged);
  if (userHttpsAgent && userHttpsAgent.options) {
    const originTLSOptions = {
      ...userHttpsAgent.options
    };
    const callback = agent.callback;
    agent.callback = function axiosTunnelingAgentCallback(req, opts) {
      // HttpsProxyAgent v5 reads callback opts for the post-CONNECT origin TLS upgrade.
      return callback.call(this, req, {
        ...originTLSOptions,
        ...opts
      });
    };
  }
  agent[kAxiosInstalledTunnel] = true;
  cache.set(key, agent);
  return agent;
}
const supportedProtocols = platform.protocols.map(protocol => {
  return protocol + ':';
});

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe$1 = value => {
  if (!utils$1.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
const flushOnFinish = (stream, [throttled, flush]) => {
  stream.on('end', flush).on('error', flush);
  return throttled;
};
const http2Sessions = new Http2Sessions();

/**
 * If the proxy, auth, or config beforeRedirects functions are defined, call them
 * with the options object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options, responseDetails, requestDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.auth) {
    options.beforeRedirects.auth(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails, requestDetails);
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */
function setProxy(options, configProxy, location, isRedirect, configHttpsAgent) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = getProxyForUrl(location);
    if (proxyUrl) {
      if (!shouldBypassProxy(location)) {
        proxy = new URL(proxyUrl);
      }
    }
  }
  // On redirect re-invocation, strip any stale Proxy-Authorization header carried
  // over from the prior request (e.g. new target no longer uses a proxy, or uses
  // a different proxy). Skip on the initial request so user-supplied headers are
  // preserved. Header names are case-insensitive, so remove every case variant.
  if (isRedirect && options.headers) {
    for (const name of Object.keys(options.headers)) {
      if (name.toLowerCase() === 'proxy-authorization') {
        delete options.headers[name];
      }
    }
  }
  // Strip any tunneling agent we installed for the previous hop so a redirect
  // that drops the proxy or crosses an HTTPS↔HTTP boundary doesn't reuse a
  // stale one. Match on our Symbol marker so a user-supplied HttpsProxyAgent
  // (which won't carry the marker) is left alone.
  if (isRedirect && options.agent && options.agent[kAxiosInstalledTunnel]) {
    options.agent = undefined;
  }
  if (proxy) {
    // Read proxy fields without traversing the prototype chain. URL instances expose
    // username/password/hostname/host/port/protocol via getters on URL.prototype (so
    // direct reads are shielded), but plain object proxies — and the `auth` field
    // (which URL does not expose) — must be guarded so a polluted Object.prototype
    // (e.g. Object.prototype.auth = { username, password }) cannot inject
    // attacker-controlled credentials into the Proxy-Authorization header or
    // redirect proxying to an attacker-controlled host.
    const isProxyURL = proxy instanceof URL;
    const readProxyField = key => isProxyURL || utils$1.hasOwnProp(proxy, key) ? proxy[key] : undefined;
    const proxyUsername = readProxyField('username');
    const proxyPassword = readProxyField('password');
    let proxyAuth = utils$1.hasOwnProp(proxy, 'auth') ? proxy.auth : undefined;

    // Basic proxy authorization
    if (proxyUsername) {
      proxyAuth = (proxyUsername || '') + ':' + (proxyPassword || '');
    }
    if (proxyAuth) {
      // Support proxy auth object form. Read sub-fields via own-prop checks so a
      // plain object inheriting from polluted Object.prototype cannot leak creds.
      const authIsObject = typeof proxyAuth === 'object';
      const authUsername = authIsObject && utils$1.hasOwnProp(proxyAuth, 'username') ? proxyAuth.username : undefined;
      const authPassword = authIsObject && utils$1.hasOwnProp(proxyAuth, 'password') ? proxyAuth.password : undefined;
      const validProxyAuth = Boolean(authUsername || authPassword);
      if (validProxyAuth) {
        proxyAuth = (authUsername || '') + ':' + (authPassword || '');
      } else if (authIsObject) {
        throw new AxiosError('Invalid proxy authorization', AxiosError.ERR_BAD_OPTION, {
          proxy
        });
      }
    }
    const targetIsHttps = isHttps.test(options.protocol);
    if (targetIsHttps) {
      // CONNECT-tunneling path for HTTPS targets. Preserves end-to-end TLS to
      // the origin so the proxy cannot inspect the URL, headers, or body — the
      // behavior already promised by THREATMODEL.md (T-R9). HttpsProxyAgent
      // sends Proxy-Authorization on the CONNECT request only, never on the
      // wrapped TLS request, which is why we don't stamp it onto
      // options.headers here. If the user already supplied an HttpsProxyAgent,
      // they own tunneling end-to-end and we leave them alone; otherwise we
      // install our own tunneling agent and forward their TLS options (if any)
      // so a custom httpsAgent for cert pinning / rejectUnauthorized still
      // applies to the origin TLS upgrade.
      if (!(configHttpsAgent instanceof HttpsProxyAgent)) {
        const proxyHost = readProxyField('hostname') || readProxyField('host');
        const proxyPort = readProxyField('port');
        const rawProxyProtocol = readProxyField('protocol');
        const normalizedProtocol = rawProxyProtocol ? rawProxyProtocol.includes(':') ? rawProxyProtocol : `${rawProxyProtocol}:` : 'http:';
        // Bracket IPv6 literals for URL parsing; URL.hostname strips the
        // brackets again on read so the agent receives the raw form.
        const proxyHostForURL = proxyHost && proxyHost.includes(':') && !proxyHost.startsWith('[') ? `[${proxyHost}]` : proxyHost;
        const proxyURL = new URL(`${normalizedProtocol}//${proxyHostForURL}${proxyPort ? ':' + proxyPort : ''}`);
        const agentOptions = {
          protocol: proxyURL.protocol,
          hostname: proxyURL.hostname.replace(/^\[|\]$/g, ''),
          port: proxyURL.port,
          auth: proxyAuth && typeof proxyAuth === 'string' ? proxyAuth : undefined
        };
        if (proxyURL.protocol === 'https:') {
          agentOptions.ALPNProtocols = ['http/1.1'];
        }
        const tunnelingAgent = getTunnelingAgent(agentOptions, configHttpsAgent);
        // Set both: `options.agent` is consumed by the native https.request path
        // (config.maxRedirects === 0); `options.agents.https` is consumed by
        // follow-redirects, which ignores `options.agent` when `options.agents`
        // is present.
        options.agent = tunnelingAgent;
        if (options.agents) {
          options.agents.https = tunnelingAgent;
        }
      }
    } else {
      // Forward-proxy mode for plaintext HTTP targets. The request line carries
      // the absolute URL and the proxy sees everything — acceptable for plain
      // HTTP since the wire was already plaintext.
      if (proxyAuth) {
        const base64 = Buffer.from(proxyAuth, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }

      // Preserve a user-supplied Host header (case-insensitive) so callers can override
      // the value forwarded to the proxy; otherwise default to the request URL's host.
      let hasUserHostHeader = false;
      for (const name of Object.keys(options.headers)) {
        if (name.toLowerCase() === 'host') {
          hasUserHostHeader = true;
          break;
        }
      }
      if (!hasUserHostHeader) {
        options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
      }
      const proxyHost = readProxyField('hostname') || readProxyField('host');
      options.hostname = proxyHost;
      // Replace 'host' since options is not a URL object
      options.host = proxyHost;
      options.port = readProxyField('port');
      options.path = location;
      const proxyProtocol = readProxyField('protocol');
      if (proxyProtocol) {
        options.protocol = proxyProtocol.includes(':') ? proxyProtocol : `${proxyProtocol}:`;
      }
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href, true, configHttpsAgent);
  };
}
const isHttpAdapterSupported = typeof process !== 'undefined' && utils$1.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = asyncExecutor => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = value => {
      done(value);
      resolve(value);
    };
    const _reject = reason => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, onDoneHandler => onDone = onDoneHandler).catch(_reject);
  });
};
const resolveFamily = ({
  address,
  family
}) => {
  if (!utils$1.isString(address)) {
    throw TypeError('address must be a string');
  }
  return {
    address,
    family: family || (address.indexOf('.') < 0 ? 6 : 4)
  };
};
const buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {
  address,
  family
});
const http2Transport = {
  request(options, cb) {
    const authority = options.protocol + '//' + options.hostname + ':' + (options.port || (options.protocol === 'https:' ? 443 : 80));
    const {
      http2Options,
      headers
    } = options;
    const session = http2Sessions.getSession(authority, http2Options);
    const {
      HTTP2_HEADER_SCHEME,
      HTTP2_HEADER_METHOD,
      HTTP2_HEADER_PATH,
      HTTP2_HEADER_STATUS
    } = http2.constants;
    const http2Headers = {
      [HTTP2_HEADER_SCHEME]: options.protocol.replace(':', ''),
      [HTTP2_HEADER_METHOD]: options.method,
      [HTTP2_HEADER_PATH]: options.path
    };
    utils$1.forEach(headers, (header, name) => {
      name.charAt(0) !== ':' && (http2Headers[name] = header);
    });
    const req = session.request(http2Headers);
    req.once('response', responseHeaders => {
      const response = req; //duplex

      responseHeaders = Object.assign({}, responseHeaders);
      const status = responseHeaders[HTTP2_HEADER_STATUS];
      delete responseHeaders[HTTP2_HEADER_STATUS];
      response.headers = responseHeaders;
      response.statusCode = +status;
      cb(response);
    });
    return req;
  }
};

/*eslint consistent-return:0*/
var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    const own = key => utils$1.hasOwnProp(config, key) ? config[key] : undefined;
    const transitional = own('transitional') || transitionalDefaults;
    let data = own('data');
    let lookup = own('lookup');
    let family = own('family');
    let httpVersion = own('httpVersion');
    if (httpVersion === undefined) httpVersion = 1;
    let http2Options = own('http2Options');
    const responseType = own('responseType');
    const responseEncoding = own('responseEncoding');
    const method = config.method.toUpperCase();
    let isDone;
    let rejected = false;
    let req;
    let connectPhaseTimer;
    httpVersion = +httpVersion;
    if (Number.isNaN(httpVersion)) {
      throw TypeError(`Invalid protocol version: '${config.httpVersion}' is not a number`);
    }
    if (httpVersion !== 1 && httpVersion !== 2) {
      throw TypeError(`Unsupported protocol version '${httpVersion}'`);
    }
    const isHttp2 = httpVersion === 2;
    if (lookup) {
      const _lookup = callbackify(lookup, value => utils$1.isArray(value) ? value : [value]);
      // hotfix to support opt.all option which is required for node 20.x
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          if (err) {
            return cb(err);
          }
          const addresses = utils$1.isArray(arg0) ? arg0.map(addr => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }
    const abortEmitter = new events.EventEmitter();
    function abort(reason) {
      try {
        abortEmitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
      } catch (err) {
        // ignore emit errors
      }
    }
    function clearConnectPhaseTimer() {
      if (connectPhaseTimer) {
        clearTimeout(connectPhaseTimer);
        connectPhaseTimer = null;
      }
    }
    function createTimeoutError() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      return new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req);
    }
    abortEmitter.once('abort', reject);
    const onFinished = () => {
      clearConnectPhaseTimer();
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', abort);
      }
      abortEmitter.removeAllListeners();
    };
    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
      }
    }
    onDone((response, isRejected) => {
      isDone = true;
      clearConnectPhaseTimer();
      if (isRejected) {
        rejected = true;
        onFinished();
        return;
      }
      const {
        data
      } = response;
      if (data instanceof stream.Readable || data instanceof stream.Duplex) {
        const offListeners = stream.finished(data, () => {
          offListeners();
          onFinished();
        });
      } else {
        onFinished();
      }
    });

    // Parse url
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    const parsed = new URL(fullPath, platform.hasBrowserEnv ? platform.origin : undefined);
    const protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === 'data:') {
      // Apply the same semantics as HTTP: only enforce if a finite, non-negative cap is set.
      if (config.maxContentLength > -1) {
        // Use the exact string passed to fromDataURI (config.url); fall back to fullPath if needed.
        const dataUrl = String(config.url || fullPath || '');
        const estimated = estimateDataURLDecodedBytes(dataUrl);
        if (estimated > config.maxContentLength) {
          return reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config));
        }
      }
      let convertedData;
      if (method !== 'GET') {
        return settle(resolve, reject, {
          status: 405,
          statusText: 'method not allowed',
          headers: {},
          config
        });
      }
      try {
        convertedData = fromDataURI(config.url, responseType === 'blob', {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
      }
      if (responseType === 'text') {
        convertedData = convertedData.toString(responseEncoding);
        if (!responseEncoding || responseEncoding === 'utf8') {
          convertedData = utils$1.stripBOM(convertedData);
        }
      } else if (responseType === 'stream') {
        convertedData = stream.Readable.from(convertedData);
      }
      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: 'OK',
        headers: new AxiosHeaders(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
    }
    const headers = AxiosHeaders.from(config.headers).normalize();

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    // User-Agent is specified; handle case where no UA header is desired
    // Only set header if it hasn't been set in config
    headers.set('User-Agent', 'axios/' + VERSION, false);
    const {
      onUploadProgress,
      onDownloadProgress
    } = config;
    const maxRate = config.maxRate;
    let maxUploadRate = undefined;
    let maxDownloadRate = undefined;

    // support for spec compliant FormData objects
    if (utils$1.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream(data, formHeaders => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || undefined
      });
      // support for https://www.npmjs.com/package/form-data api
    } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders) && data.getHeaders !== Object.prototype.getHeaders) {
      setFormDataHeaders$1(headers, data.getHeaders(), own('formDataHeaderPolicy'));
      if (!headers.hasContentLength()) {
        try {
          const knownLength = await util.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          /*eslint no-empty:0*/
        } catch (e) {}
      }
    } else if (utils$1.isBlob(data) || utils$1.isFile(data)) {
      data.size && headers.setContentType(data.type || 'application/octet-stream');
      headers.setContentLength(data.size || 0);
      data = stream.Readable.from(readBlob(data));
    } else if (data && !utils$1.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$1.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$1.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new AxiosError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', AxiosError.ERR_BAD_REQUEST, config));
      }

      // Add Content-Length header if data exists
      headers.setContentLength(data.length, false);
      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config));
      }
    }
    const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
    if (utils$1.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }
    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils$1.isStream(data)) {
        data = stream.Readable.from(data, {
          objectMode: false
        });
      }
      data = stream.pipeline([data, new AxiosTransformStream({
        maxRate: utils$1.toFiniteNumber(maxUploadRate)
      })], utils$1.noop);
      onUploadProgress && data.on('progress', flushOnFinish(data, progressEventDecorator(contentLength, progressEventReducer(asyncDecorator(onUploadProgress), false, 3))));
    }

    // HTTP basic authentication
    let auth = undefined;
    const configAuth = own('auth');
    if (configAuth) {
      const username = configAuth.username || '';
      const password = configAuth.password || '';
      auth = username + ':' + password;
    }
    if (!auth && (parsed.username || parsed.password)) {
      const urlUsername = decodeURIComponentSafe$1(parsed.username);
      const urlPassword = decodeURIComponentSafe$1(parsed.password);
      auth = urlUsername + ':' + urlPassword;
    }
    auth && headers.delete('authorization');
    let path$1;
    try {
      path$1 = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, '');
    } catch (err) {
      const customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      return reject(customErr);
    }
    headers.set('Accept-Encoding', utils$1.hasOwnProp(transitional, 'advertiseZstdAcceptEncoding') && transitional.advertiseZstdAcceptEncoding === true ? ACCEPT_ENCODING_WITH_ZSTD : ACCEPT_ENCODING, false);

    // Null-prototype to block prototype pollution gadgets on properties read
    // directly by Node's http.request (e.g. insecureHTTPParser, lookup).
    const options = Object.assign(Object.create(null), {
      path: path$1,
      method: method,
      headers: toByteStringHeaderObject(headers),
      agents: {
        http: config.httpAgent,
        https: config.httpsAgent
      },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: Object.create(null),
      http2Options
    });

    // cacheable-lookup integration hotfix
    !utils$1.isUndefined(lookup) && (options.lookup = lookup);
    const socketPath = own('socketPath');
    if (socketPath) {
      if (typeof socketPath !== 'string') {
        return reject(new AxiosError('socketPath must be a string', AxiosError.ERR_BAD_OPTION_VALUE, config));
      }
      const allowedSocketPaths = own('allowedSocketPaths');
      if (allowedSocketPaths != null) {
        const allowed = Array.isArray(allowedSocketPaths) ? allowedSocketPaths : [allowedSocketPaths];
        const resolvedSocket = path.resolve(socketPath);
        const isAllowed = allowed.some(entry => typeof entry === 'string' && path.resolve(entry) === resolvedSocket);
        if (!isAllowed) {
          return reject(new AxiosError(`socketPath "${socketPath}" is not permitted by allowedSocketPaths`, AxiosError.ERR_BAD_OPTION_VALUE, config));
        }
      }
      options.socketPath = socketPath;
    } else {
      options.hostname = parsed.hostname.startsWith('[') ? parsed.hostname.slice(1, -1) : parsed.hostname;
      options.port = parsed.port;
      setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path, false, config.httpsAgent);
    }
    let transport;
    let isNativeTransport = false;
    const isHttpsRequest = isHttps.test(options.protocol);
    // Don't clobber a CONNECT-tunneling agent installed by setProxy() for an
    // HTTPS target.
    if (options.agent == null) {
      options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    }
    if (isHttp2) {
      transport = http2Transport;
    } else {
      const configTransport = own('transport');
      if (configTransport) {
        transport = configTransport;
      } else if (config.maxRedirects === 0) {
        transport = isHttpsRequest ? https : http;
        isNativeTransport = true;
      } else {
        if (config.maxRedirects) {
          options.maxRedirects = config.maxRedirects;
        }
        const configBeforeRedirect = own('beforeRedirect');
        if (configBeforeRedirect) {
          options.beforeRedirects.config = configBeforeRedirect;
        }
        if (auth) {
          // Restore HTTP Basic credentials on same-origin redirects only.
          // follow-redirects >= 1.15.8 strips Authorization on every redirect (see #6929);
          // cross-origin stripping is the documented mitigation for T-R2 in THREATMODEL.md
          // and is preserved by deliberately not restoring on origin change.
          const requestOrigin = parsed.origin;
          const authToRestore = auth;
          options.beforeRedirects.auth = function beforeRedirectAuth(redirectOptions) {
            try {
              if (new URL(redirectOptions.href).origin === requestOrigin) {
                redirectOptions.auth = authToRestore;
              }
            } catch (e) {
              // ignore malformed URL: leaving auth stripped is fail-safe
            }
          };
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
    }
    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    } else {
      // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
      options.maxBodyLength = Infinity;
    }

    // Always set an explicit own value so a polluted
    // Object.prototype.insecureHTTPParser cannot enable the lenient parser
    // through Node's internal options copy
    options.insecureHTTPParser = Boolean(own('insecureHTTPParser'));

    // Create the request
    req = transport.request(options, function handleResponse(res) {
      clearConnectPhaseTimer();
      if (req.destroyed) return;
      const streams = [res];
      const responseLength = utils$1.toFiniteNumber(res.headers['content-length']);
      if (onDownloadProgress || maxDownloadRate) {
        const transformStream = new AxiosTransformStream({
          maxRate: utils$1.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on('progress', flushOnFinish(transformStream, progressEventDecorator(responseLength, progressEventReducer(asyncDecorator(onDownloadProgress), true, 3))));
        streams.push(transformStream);
      }

      // decompress the response body transparently if required
      let responseStream = res;

      // return the last request in case of redirects
      const lastRequest = res.req || req;

      // if decompress disabled we should not decompress
      if (config.decompress !== false && res.headers['content-encoding']) {
        // if no content, but headers still say that it is encoded,
        // remove the header not confuse downstream operations
        if (method === 'HEAD' || res.statusCode === 204) {
          delete res.headers['content-encoding'];
        }
        switch ((res.headers['content-encoding'] || '').toLowerCase()) {
          /*eslint default-case:0*/
          case 'gzip':
          case 'x-gzip':
          case 'compress':
          case 'x-compress':
            // add the unzipper to the body stream processing pipeline
            streams.push(zlib.createUnzip(zlibOptions));

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
          case 'deflate':
            streams.push(new ZlibHeaderTransformStream());

            // add the unzipper to the body stream processing pipeline
            streams.push(zlib.createUnzip(zlibOptions));

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
          case 'br':
            if (isBrotliSupported) {
              streams.push(zlib.createBrotliDecompress(brotliOptions));
              delete res.headers['content-encoding'];
            }
            break;
          case 'zstd':
            if (isZstdSupported) {
              streams.push(zlib.createZstdDecompress(zstdOptions));
              delete res.headers['content-encoding'];
            }
            break;
        }
      }
      responseStream = streams.length > 1 ? stream.pipeline(streams, utils$1.noop) : streams[0];
      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === 'stream') {
        // Enforce maxContentLength on streamed responses; previously this
        // was applied only to buffered responses.
        if (config.maxContentLength > -1) {
          const limit = config.maxContentLength;
          const source = responseStream;
          async function* enforceMaxContentLength() {
            let totalResponseBytes = 0;
            for await (const chunk of source) {
              totalResponseBytes += chunk.length;
              if (totalResponseBytes > limit) {
                throw new AxiosError('maxContentLength size of ' + limit + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
              }
              yield chunk;
            }
          }
          responseStream = stream.Readable.from(enforceMaxContentLength(), {
            objectMode: false
          });
        }
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;
        responseStream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destroy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            responseStream.destroy();
            abort(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });
        responseStream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          const err = new AxiosError('stream has been aborted', AxiosError.ERR_BAD_RESPONSE, config, lastRequest, response);
          responseStream.destroy(err);
          reject(err);
        });
        responseStream.on('error', function handleStreamError(err) {
          if (rejected) return;
          reject(AxiosError.from(err, null, config, lastRequest, response));
        });
        responseStream.on('end', function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== 'arraybuffer') {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === 'utf8') {
                responseData = utils$1.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      abortEmitter.once('abort', err => {
        if (!responseStream.destroyed) {
          responseStream.emit('error', err);
          responseStream.destroy();
        }
      });
    });
    abortEmitter.once('abort', err => {
      if (req.close) {
        req.close();
      } else {
        req.destroy(err);
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      reject(AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    // Track every socket bound to this outer RedirectableRequest so a single
    // 'close' listener can release ownership on all of them. follow-redirects
    // re-emits the 'socket' event for each hop's native request onto the same
    // outer request, so attaching per-request listeners inside this handler
    // would accumulate across hops and trigger MaxListenersExceededWarning at
    // >= 11 redirects. Clearing only the last-bound socket would leave stale
    // kAxiosCurrentReq refs on earlier hop sockets returned to the keep-alive
    // pool, causing an idle-pool 'error' to be attributed to a closed req.
    const boundSockets = new Set();
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);

      // Install a single 'error' listener per socket (not per request) to avoid
      // accumulating listeners on pooled keep-alive sockets that get reassigned
      // to new requests before the previous request's 'close' fires (issue #10780).
      // The listener is bound to the socket's currently-active request via a
      // symbol, which is swapped as the socket is reassigned.
      if (!socket[kAxiosSocketListener]) {
        socket.on('error', function handleSocketError(err) {
          const current = socket[kAxiosCurrentReq];
          if (current && !current.destroyed) {
            current.destroy(err);
          }
        });
        socket[kAxiosSocketListener] = true;
      }
      socket[kAxiosCurrentReq] = req;
      boundSockets.add(socket);
    });
    req.once('close', function clearCurrentReq() {
      clearConnectPhaseTimer();
      for (const socket of boundSockets) {
        if (socket[kAxiosCurrentReq] === req) {
          socket[kAxiosCurrentReq] = null;
        }
      }
      boundSockets.clear();
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      const timeout = parseInt(config.timeout, 10);
      if (Number.isNaN(timeout)) {
        abort(new AxiosError('error trying to parse `config.timeout` to int', AxiosError.ERR_BAD_OPTION_VALUE, config, req));
        return;
      }
      const handleTimeout = function handleTimeout() {
        if (isDone) return;
        abort(createTimeoutError());
      };
      if (isNativeTransport && timeout > 0) {
        // Native ClientRequest#setTimeout starts from the socket lifecycle and
        // may not fire while TCP connect is still pending. Mirror the
        // follow-redirects wall-clock timer for the maxRedirects === 0 path.
        connectPhaseTimer = setTimeout(handleTimeout, timeout);
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devouring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, handleTimeout);
    } else {
      // explicitly reset the socket timeout value for a possible `keep-alive` request
      req.setTimeout(0);
    }

    // Send the request
    if (utils$1.isStream(data)) {
      let ended = false;
      let errored = false;
      data.on('end', () => {
        ended = true;
      });
      data.once('error', err => {
        errored = true;
        req.destroy(err);
      });
      data.on('close', () => {
        if (!ended && !errored) {
          abort(new CanceledError('Request stream has been aborted', config, req));
        }
      });

      // Enforce maxBodyLength for streamed uploads on the native http/https
      // transport (maxRedirects === 0); follow-redirects enforces it on the
      // other path.
      let uploadStream = data;
      if (config.maxBodyLength > -1 && config.maxRedirects === 0) {
        const limit = config.maxBodyLength;
        let bytesSent = 0;
        uploadStream = stream.pipeline([data, new stream.Transform({
          transform(chunk, _enc, cb) {
            bytesSent += chunk.length;
            if (bytesSent > limit) {
              return cb(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config, req));
            }
            cb(null, chunk);
          }
        })], utils$1.noop);
        uploadStream.on('error', err => {
          if (!req.destroyed) req.destroy(err);
        });
      }
      uploadStream.pipe(req);
    } else {
      data && req.write(data);
      req.end();
    }
  });
};

var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => url => {
  url = new URL(url, platform.origin);
  return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
})(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : () => true;

var cookies = platform.hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write(name, value, expires, path, domain, secure, sameSite) {
    if (typeof document === 'undefined') return;
    const cookie = [`${name}=${encodeURIComponent(value)}`];
    if (utils$1.isNumber(expires)) {
      cookie.push(`expires=${new Date(expires).toUTCString()}`);
    }
    if (utils$1.isString(path)) {
      cookie.push(`path=${path}`);
    }
    if (utils$1.isString(domain)) {
      cookie.push(`domain=${domain}`);
    }
    if (secure === true) {
      cookie.push('secure');
    }
    if (utils$1.isString(sameSite)) {
      cookie.push(`SameSite=${sameSite}`);
    }
    document.cookie = cookie.join('; ');
  },
  read(name) {
    if (typeof document === 'undefined') return null;
    // Match name=value by splitting on the semicolon separator instead of building a
    // RegExp from `name` — interpolating an unescaped string into a RegExp would let
    // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
    // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
    // "; ", so ignore optional whitespace before each cookie name.
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].replace(/^\s+/, '');
      const eq = cookie.indexOf('=');
      if (eq !== -1 && cookie.slice(0, eq) === name) {
        return decodeURIComponent(cookie.slice(eq + 1));
      }
    }
    return null;
  },
  remove(name) {
    this.write(name, '', Date.now() - 86400000, '/');
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write() {},
  read() {
    return null;
  },
  remove() {}
};

const headersToObject = thing => thing instanceof AxiosHeaders ? {
  ...thing
} : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};

  // Use a null-prototype object so that downstream reads such as `config.auth`
  // or `config.baseURL` cannot inherit polluted values from Object.prototype.
  // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
  // ergonomics for user code that relies on it.
  const config = Object.create(null);
  Object.defineProperty(config, 'hasOwnProperty', {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true
  });
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({
        caseless
      }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (utils$1.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils$1.hasOwnProp(config1, prop)) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils$1.forEach(Object.keys({
    ...config1,
    ...config2
  }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : undefined;
    const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : undefined;
    const configValue = merge(a, b, prop);
    utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

const FORM_DATA_CONTENT_HEADERS = ['content-type', 'content-length'];
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }
  Object.entries(formHeaders).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8$1 = str => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
function resolveConfig(config) {
  const newConfig = mergeConfig({}, config);

  // Read only own properties to prevent prototype pollution gadgets
  // (e.g. Object.prototype.baseURL = 'https://evil.com').
  const own = key => utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : undefined;
  const data = own('data');
  let withXSRFToken = own('withXSRFToken');
  const xsrfHeaderName = own('xsrfHeaderName');
  const xsrfCookieName = own('xsrfCookieName');
  let headers = own('headers');
  const auth = own('auth');
  const baseURL = own('baseURL');
  const allowAbsoluteUrls = own('allowAbsoluteUrls');
  const url = own('url');
  newConfig.headers = headers = AxiosHeaders.from(headers);
  newConfig.url = buildURL(buildFullPath(baseURL, url, allowAbsoluteUrls), own('params'), own('paramsSerializer'));

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? encodeUTF8$1(auth.password) : '')));
  }
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv || utils$1.isReactNative(data)) {
      headers.setContentType(undefined); // browser/web worker/RN handles it
    } else if (utils$1.isFunction(data.getHeaders)) {
      // Node.js FormData (like form-data package)
      setFormDataHeaders(headers, data.getHeaders(), own('formDataHeaderPolicy'));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    if (utils$1.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }

    // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
    // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
    // the XSRF token cross-origin.
    const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url);
    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
    let {
      responseType,
      onUploadProgress,
      onDownloadProgress
    } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith('file:'))) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
      done();

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError(event) {
      // Browsers deliver a ProgressEvent in XHR onerror
      // (message may be empty; when present, surface it)
      // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
      const msg = event && event.message ? event.message : 'Network Error';
      const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
      // attach the underlying event for consumers who want details
      err.event = event || null;
      reject(err);
      done();
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
      done();

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener('progress', uploadThrottled);
      request.upload.addEventListener('loadend', flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        done();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && !platform.protocols.includes(protocol)) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];
  if (!timeout && !signals.length) {
    return;
  }
  const controller = new AbortController();
  let aborted = false;
  const onabort = function (reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
    }
  };
  let timer = timeout && setTimeout(() => {
    timer = null;
    onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
  }, timeout);
  const unsubscribe = () => {
    if (!signals) {
      return;
    }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach(signal => {
      signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
    });
    signals = null;
  };
  signals.forEach(signal => signal.addEventListener('abort', onabort));
  const {
    signal
  } = controller;
  signal.unsubscribe = () => utils$1.asap(unsubscribe);
  return signal;
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;;) {
      const {
        done,
        value
      } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = e => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const {
          done,
          value
        } = await iterator.next();
        if (done) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

const DEFAULT_CHUNK_SIZE = 64 * 1024;
const {
  isFunction
} = utils$1;

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = str => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe = value => {
  if (!utils$1.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const maybeWithAuthCredentials = url => {
  const protocolIndex = url.indexOf('://');
  let urlToCheck = url;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes('@') || urlToCheck.includes(':');
};
const factory = env => {
  const globalObject = utils$1.global !== undefined && utils$1.global !== null ? utils$1.global : globalThis;
  const {
    ReadableStream,
    TextEncoder
  } = globalObject;
  env = utils$1.merge.call({
    skipUndefined: true
  }, {
    Request: globalObject.Request,
    Response: globalObject.Response
  }, env);
  const {
    fetch: envFetch,
    Request,
    Response
  } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
  const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : async str => new Uint8Array(await new Request(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const request = new Request(platform.origin, {
      body: new ReadableStream(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      }
    });
    const hasContentType = request.headers.has('Content-Type');
    if (request.body != null) {
      request.body.cancel();
    }
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response('').body));
  const resolvers = {
    stream: supportsResponseStream && (res => res.body)
  };
  isFetchSupported && (() => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  })();
  const getBodyLength = async body => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + '';
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async config => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
      maxContentLength,
      maxBodyLength
    } = resolveConfig(config);
    const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
    const own = key => utils$1.hasOwnProp(config, key) ? config[key] : undefined;
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + '').toLowerCase() : 'text';
    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      // HTTP basic authentication
      let auth = undefined;
      const configAuth = own('auth');
      if (configAuth) {
        const username = configAuth.username || '';
        const password = configAuth.password || '';
        auth = {
          username,
          password
        };
      }
      if (maybeWithAuthCredentials(url)) {
        const parsedURL = new URL(url, platform.origin);
        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe(parsedURL.username);
          const urlPassword = decodeURIComponentSafe(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword
          };
        }
        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = '';
          parsedURL.password = '';
          url = parsedURL.href;
        }
      }
      if (auth) {
        headers.delete('authorization');
        headers.set('Authorization', 'Basic ' + btoa(encodeUTF8((auth.username || '') + ':' + (auth.password || ''))));
      }

      // Enforce maxContentLength for data: URLs up-front so we never materialize
      // an oversized payload. The HTTP adapter applies the same check (see http.js
      // "if (protocol === 'data:')" branch).
      if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
        const estimated = estimateDataURLDecodedBytes(url);
        if (estimated > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }

      // Enforce maxBodyLength against the outbound request body before dispatch.
      // Mirrors http.js behavior (ERR_BAD_REQUEST / 'Request body larger than
      // maxBodyLength limit'). Skip when the body length cannot be determined
      // (e.g. a live ReadableStream supplied by the caller).
      if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
        const outboundLength = await resolveBodyLength(headers, data);
        if (typeof outboundLength === 'number' && isFinite(outboundLength) && outboundLength > maxBodyLength) {
          throw new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config, request);
        }
      }
      if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: 'POST',
          body: data,
          duplex: 'half'
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      // If data is FormData and Content-Type is multipart/form-data without boundary,
      // delete it so fetch can set it correctly with the boundary
      if (utils$1.isFormData(data)) {
        const contentType = headers.getContentType();
        if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
          headers.delete('content-type');
        }
      }

      // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
      headers.set('User-Agent', 'axios/' + VERSION, false);
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: toByteStringHeaderObject(headers.normalize()),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined
      };
      request = isRequestSupported && new Request(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));

      // Cheap pre-check: if the server honestly declares a content-length that
      // already exceeds the cap, reject before we start streaming.
      if (hasMaxContentLength) {
        const declaredLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }
      const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
      if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
        const options = {};
        ['status', 'statusText', 'headers'].forEach(prop => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
        let bytesRead = 0;
        const onChunkProgress = loadedBytes => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
            }
          }
          onProgress && onProgress(loadedBytes);
        };
        response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }), options);
      }
      responseType = responseType || 'text';
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

      // Fallback enforcement for environments without ReadableStream support
      // (legacy runtimes). Detect materialized size from typed output; skip
      // streams/Response passthrough since the user will read those themselves.
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === 'number') {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === 'number') {
            materializedSize = responseData.size;
          } else if (typeof responseData === 'string') {
            materializedSize = typeof TextEncoder === 'function' ? new TextEncoder().encode(responseData).byteLength : responseData.length;
          }
        }
        if (typeof materializedSize === 'number' && materializedSize > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      // Safari can surface fetch aborts as a DOMException-like object whose
      // branded getters throw. Prefer our composed signal reason before reading
      // the caught error, preserving timeout vs cancellation semantics.
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        err !== canceledError && (canceledError.cause = err);
        throw canceledError;
      }
      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, err && err.response), {
          cause: err.cause || err
        });
      }
      throw AxiosError.from(err, err && err.code, config, request, err && err.response);
    }
  };
};
const seedCache = new Map();
const getFetch = config => {
  let env = config && config.env || {};
  const {
    fetch,
    Request,
    Response
  } = env;
  const seeds = [Request, Response, fetch];
  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === undefined && map.set(seed, target = i ? new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();

/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      // Null-proto descriptors so a polluted Object.prototype.get cannot turn
      // these data descriptors into accessor descriptors on the way in.
      Object.defineProperty(fn, 'name', {
        __proto__: null,
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      __proto__: null,
      value
    });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */
const renderReason = reason => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = adapter => utils$1.isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter(adapters, config) {
  adapters = utils$1.isArray(adapters) ? adapters : [adapters];
  const {
    length
  } = adapters;
  let nameOrAdapter;
  let adapter;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;
    adapter = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter === undefined) {
        throw new AxiosError(`Unknown adapter '${id}'`);
      }
    }
    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }
    rejectedReasons[id || '#' + i] = adapter;
  }
  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
    let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
    throw new AxiosError(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
  }
  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
var adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Expose the current response on config so that transformResponse can
    // attach it to any AxiosError it throws (e.g. on JSON parse failure).
    // We clean it up afterwards to avoid polluting the config object.
    config.response = response;
    try {
      response.data = transformData.call(config, config.transformResponse, response);
    } finally {
      delete config.response;
    }
    response.headers = AxiosHeaders.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        config.response = reason.response;
        try {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        } finally {
          delete config.response;
        }
        reason.response.headers = AxiosHeaders.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
    // a non-function validator and cause a TypeError.
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();

        // slice off the Error: ... line
        const stack = (() => {
          if (!dummy.stack) {
            return '';
          }
          const firstNewlineIndex = dummy.stack.indexOf('\n');
          return firstNewlineIndex === -1 ? '' : dummy.stack.slice(firstNewlineIndex + 1);
        })();
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);
            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean),
        legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
        advertiseZstdAcceptEncoding: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
    headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query', 'common'], method => {
      delete headers[method];
    });
    config.headers = AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional && transitional.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch', 'query'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();

  // QUERY is a safe/idempotent read method; multipart form bodies don't fit
  // its semantics, so no queryForm shorthand is generated.
  if (method !== 'query') {
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
});

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = err => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  utils$1.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders;
axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode;
axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ 370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pLimit)
});

;// CONCATENATED MODULE: ./node_modules/yocto-queue/index.js
/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

;// CONCATENATED MODULE: ./node_modules/p-limit/index.js


function pLimit(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (fn, resolve, args) => {
		activeCount++;

		const result = (async () => fn(...args))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (fn, resolve, args) => {
		queue.enqueue(run.bind(undefined, fn, resolve, args));

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
			}
		})();
	};

	const generator = (fn, ...args) => new Promise(resolve => {
		enqueue(fn, resolve, args);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value: () => {
				queue.clear();
			},
		},
	});

	return generator;
}


/***/ }),

/***/ 1813:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(2825);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;