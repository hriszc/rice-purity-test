var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop() {
    }
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    var Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render2) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render: render2 };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.2.3";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.js"(exports) {
    "use strict";
    var React5 = require_react();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function noop() {
    }
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error(formatProdErrorMessage(522));
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    };
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var ReactSharedInternals = React5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    exports.preconnect = function(href, options) {
      "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
      if ("string" === typeof href && options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    };
    exports.preinitModule = function(href, options) {
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as) {
            var crossOrigin = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function(href, options) {
      if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
          imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports.preloadModule = function(href, options) {
      if ("string" === typeof href)
        if (options) {
          var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    exports.version = "19.2.3";
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.production.js
var require_react_dom_server_legacy_node_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.production.js"(exports) {
    "use strict";
    var React5 = require_react();
    var ReactDOM = require_react_dom();
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_SCOPE_TYPE = /* @__PURE__ */ Symbol.for("react.scope");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var REACT_LEGACY_HIDDEN_TYPE = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
    var REACT_MEMO_CACHE_SENTINEL = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel");
    var REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var isArrayImpl = Array.isArray;
    function murmurhash3_32_gc(key, seed) {
      var remainder = key.length & 3;
      var bytes = key.length - remainder;
      var h1 = seed;
      for (seed = 0; seed < bytes; ) {
        var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
        ++seed;
        k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
      }
      k1 = 0;
      switch (remainder) {
        case 3:
          k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
        case 2:
          k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
        case 1:
          k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
      }
      h1 ^= key.length;
      h1 ^= h1 >>> 16;
      h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
      h1 ^= h1 >>> 13;
      h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
      return (h1 ^ h1 >>> 16) >>> 0;
    }
    var assign = Object.assign;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    );
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]);
    var matchHtmlRegExp = /["'&<>]/;
    function escapeTextForBrowser(text) {
      if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text)
        return "" + text;
      text = "" + text;
      var match = matchHtmlRegExp.exec(text);
      if (match) {
        var html = "", index, lastIndex = 0;
        for (index = match.index; index < text.length; index++) {
          switch (text.charCodeAt(index)) {
            case 34:
              match = "&quot;";
              break;
            case 38:
              match = "&amp;";
              break;
            case 39:
              match = "&#x27;";
              break;
            case 60:
              match = "&lt;";
              break;
            case 62:
              match = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html += text.slice(lastIndex, index));
          lastIndex = index + 1;
          html += match;
        }
        text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
      }
      return text;
    }
    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    var ReactSharedInternals = React5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    };
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: previousDispatcher.f,
      r: previousDispatcher.r,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    var PRELOAD_NO_CREDS = [];
    var currentlyFlushingRenderState = null;
    var scriptRegex = /(<\/|<)(s)(cript)/gi;
    function scriptReplacer(match, prefix2, s, suffix2) {
      return "" + prefix2 + ("s" === s ? "\\u0073" : "\\u0053") + suffix2;
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
      return {
        idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent,
        bootstrapScripts,
        bootstrapModules,
        instructions: 0,
        hasBody: false,
        hasHtml: false,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope, viewTransition) {
      return {
        insertionMode,
        selectedValue,
        tagScope,
        viewTransition
      };
    }
    function getChildFormatContext(parentContext, type, props) {
      var subtreeScope = parentContext.tagScope & -25;
      switch (type) {
        case "noscript":
          return createFormatContext(2, null, subtreeScope | 1, null);
        case "select":
          return createFormatContext(
            2,
            null != props.value ? props.value : props.defaultValue,
            subtreeScope,
            null
          );
        case "svg":
          return createFormatContext(4, null, subtreeScope, null);
        case "picture":
          return createFormatContext(2, null, subtreeScope | 2, null);
        case "math":
          return createFormatContext(5, null, subtreeScope, null);
        case "foreignObject":
          return createFormatContext(2, null, subtreeScope, null);
        case "table":
          return createFormatContext(6, null, subtreeScope, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return createFormatContext(7, null, subtreeScope, null);
        case "colgroup":
          return createFormatContext(9, null, subtreeScope, null);
        case "tr":
          return createFormatContext(8, null, subtreeScope, null);
        case "head":
          if (2 > parentContext.insertionMode)
            return createFormatContext(3, null, subtreeScope, null);
          break;
        case "html":
          if (0 === parentContext.insertionMode)
            return createFormatContext(1, null, subtreeScope, null);
      }
      return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode ? createFormatContext(2, null, subtreeScope, null) : parentContext.tagScope !== subtreeScope ? createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        subtreeScope,
        null
      ) : parentContext;
    }
    function getSuspenseViewTransition(parentViewTransition) {
      return null === parentViewTransition ? null : {
        update: parentViewTransition.update,
        enter: "none",
        exit: "none",
        share: parentViewTransition.update,
        name: parentViewTransition.autoName,
        autoName: parentViewTransition.autoName,
        nameIdx: 0
      };
    }
    function getSuspenseFallbackFormatContext(resumableState, parentContext) {
      parentContext.tagScope & 32 && (resumableState.instructions |= 128);
      return createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        parentContext.tagScope | 12,
        getSuspenseViewTransition(parentContext.viewTransition)
      );
    }
    function getSuspenseContentFormatContext(resumableState, parentContext) {
      resumableState = getSuspenseViewTransition(parentContext.viewTransition);
      var subtreeScope = parentContext.tagScope | 16;
      null !== resumableState && "none" !== resumableState.share && (subtreeScope |= 64);
      return createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        subtreeScope,
        resumableState
      );
    }
    var styleNameCache = /* @__PURE__ */ new Map();
    function pushStyleAttribute(target, style) {
      if ("object" !== typeof style)
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var isFirst = true, styleName;
      for (styleName in style)
        if (hasOwnProperty.call(style, styleName)) {
          var styleValue = style[styleName];
          if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
            if (0 === styleName.indexOf("--")) {
              var nameChunk = escapeTextForBrowser(styleName);
              styleValue = escapeTextForBrowser(("" + styleValue).trim());
            } else
              nameChunk = styleNameCache.get(styleName), void 0 === nameChunk && (nameChunk = escapeTextForBrowser(
                styleName.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")
              ), styleNameCache.set(styleName, nameChunk)), styleValue = "number" === typeof styleValue ? 0 === styleValue || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : escapeTextForBrowser(("" + styleValue).trim());
            isFirst ? (isFirst = false, target.push(' style="', nameChunk, ":", styleValue)) : target.push(";", nameChunk, ":", styleValue);
          }
        }
      isFirst || target.push('"');
    }
    function pushBooleanAttribute(target, name, value) {
      value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, '=""');
    }
    function pushStringAttribute(target, name, value) {
      "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(" ", name, '="', escapeTextForBrowser(value), '"');
    }
    var actionJavaScriptURL = escapeTextForBrowser(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    );
    function pushAdditionalFormField(value, key) {
      this.push('<input type="hidden"');
      validateAdditionalFormField(value);
      pushStringAttribute(this, "name", key);
      pushStringAttribute(this, "value", value);
      this.push("/>");
    }
    function validateAdditionalFormField(value) {
      if ("string" !== typeof value)
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function getCustomFormFields(resumableState, formAction) {
      if ("function" === typeof formAction.$$FORM_ACTION) {
        var id = resumableState.nextFormID++;
        resumableState = resumableState.idPrefix + id;
        try {
          var customFields = formAction.$$FORM_ACTION(resumableState);
          if (customFields) {
            var formData = customFields.data;
            null != formData && formData.forEach(validateAdditionalFormField);
          }
          return customFields;
        } catch (x) {
          if ("object" === typeof x && null !== x && "function" === typeof x.then)
            throw x;
        }
      }
      return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
      var formData = null;
      if ("function" === typeof formAction) {
        var customFields = getCustomFormFields(resumableState, formAction);
        null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(" ", "formAction", '="', actionJavaScriptURL, '"'), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
      }
      null != name && pushAttribute(target, "name", name);
      null != formAction && pushAttribute(target, "formAction", formAction);
      null != formEncType && pushAttribute(target, "formEncType", formEncType);
      null != formMethod && pushAttribute(target, "formMethod", formMethod);
      null != formTarget && pushAttribute(target, "formTarget", formTarget);
      return formData;
    }
    function pushAttribute(target, name, value) {
      switch (name) {
        case "className":
          pushStringAttribute(target, "class", value);
          break;
        case "tabIndex":
          pushStringAttribute(target, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          pushStringAttribute(target, name, value);
          break;
        case "style":
          pushStyleAttribute(target, value);
          break;
        case "src":
        case "href":
          if ("" === value) break;
        case "action":
        case "formAction":
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value)
            break;
          value = sanitizeURL("" + value);
          target.push(" ", name, '="', escapeTextForBrowser(value), '"');
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          pushBooleanAttribute(target, name.toLowerCase(), value);
          break;
        case "xlinkHref":
          if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value)
            break;
          value = sanitizeURL("" + value);
          target.push(" ", "xlink:href", '="', escapeTextForBrowser(value), '"');
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, '="', escapeTextForBrowser(value), '"');
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, '=""');
          break;
        case "capture":
        case "download":
          true === value ? target.push(" ", name, '=""') : false !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(" ", name, '="', escapeTextForBrowser(value), '"');
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(" ", name, '="', escapeTextForBrowser(value), '"');
          break;
        case "rowSpan":
        case "start":
          "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(" ", name, '="', escapeTextForBrowser(value), '"');
          break;
        case "xlinkActuate":
          pushStringAttribute(target, "xlink:actuate", value);
          break;
        case "xlinkArcrole":
          pushStringAttribute(target, "xlink:arcrole", value);
          break;
        case "xlinkRole":
          pushStringAttribute(target, "xlink:role", value);
          break;
        case "xlinkShow":
          pushStringAttribute(target, "xlink:show", value);
          break;
        case "xlinkTitle":
          pushStringAttribute(target, "xlink:title", value);
          break;
        case "xlinkType":
          pushStringAttribute(target, "xlink:type", value);
          break;
        case "xmlBase":
          pushStringAttribute(target, "xml:base", value);
          break;
        case "xmlLang":
          pushStringAttribute(target, "xml:lang", value);
          break;
        case "xmlSpace":
          pushStringAttribute(target, "xml:space", value);
          break;
        default:
          if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
            if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
              switch (typeof value) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  var prefix$8 = name.toLowerCase().slice(0, 5);
                  if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
              }
              target.push(" ", name, '="', escapeTextForBrowser(value), '"');
            }
          }
      }
    }
    function pushInnerHTML(target, innerHTML, children) {
      if (null != innerHTML) {
        if (null != children)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if ("object" !== typeof innerHTML || !("__html" in innerHTML))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        innerHTML = innerHTML.__html;
        null !== innerHTML && void 0 !== innerHTML && target.push("" + innerHTML);
      }
    }
    function flattenOptionChildren(children) {
      var content = "";
      React5.Children.forEach(children, function(child) {
        null != child && (content += child);
      });
      return content;
    }
    function injectFormReplayingRuntime(resumableState, renderState) {
      if (0 === (resumableState.instructions & 16)) {
        resumableState.instructions |= 16;
        var preamble = renderState.preamble, bootstrapChunks = renderState.bootstrapChunks;
        (preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length ? (bootstrapChunks.push(renderState.startInlineScript), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(
          ">",
          `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
          "</script>"
        )) : bootstrapChunks.unshift(
          renderState.startInlineScript,
          ">",
          `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
          "</script>"
        );
      }
    }
    function pushLinkImpl(target, props) {
      target.push(startChunkForTag("link"));
      for (var propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push("/>");
      return null;
    }
    var styleRegex = /(<\/|<)(s)(tyle)/gi;
    function styleReplacer(match, prefix2, s, suffix2) {
      return "" + prefix2 + ("s" === s ? "\\73 " : "\\53 ") + suffix2;
    }
    function pushSelfClosing(target, props, tag) {
      target.push(startChunkForTag(tag));
      for (var propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push("/>");
      return null;
    }
    function pushTitleImpl(target, props) {
      target.push(startChunkForTag("title"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(">");
      props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
      "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(escapeTextForBrowser("" + props));
      pushInnerHTML(target, innerHTML, children);
      target.push(endChunkForTag("title"));
      return null;
    }
    function pushScriptImpl(target, props) {
      target.push(startChunkForTag("script"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(">");
      pushInnerHTML(target, innerHTML, children);
      "string" === typeof children && target.push(("" + children).replace(scriptRegex, scriptReplacer));
      target.push(endChunkForTag("script"));
      return null;
    }
    function pushStartSingletonElement(target, props, tag) {
      target.push(startChunkForTag(tag));
      var innerHTML = tag = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                tag = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(">");
      pushInnerHTML(target, innerHTML, tag);
      return tag;
    }
    function pushStartGenericElement(target, props, tag) {
      target.push(startChunkForTag(tag));
      var innerHTML = tag = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                tag = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(">");
      pushInnerHTML(target, innerHTML, tag);
      return "string" === typeof tag ? (target.push(escapeTextForBrowser(tag)), null) : tag;
    }
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = /* @__PURE__ */ new Map();
    function startChunkForTag(tag) {
      var tagStartChunk = validatedTagCache.get(tag);
      if (void 0 === tagStartChunk) {
        if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
        tagStartChunk = "<" + tag;
        validatedTagCache.set(tag, tagStartChunk);
      }
      return tagStartChunk;
    }
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded) {
      switch (type) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          target$jscomp$0.push(startChunkForTag("a"));
          var children = null, innerHTML = null, propKey;
          for (propKey in props)
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "children":
                    children = propValue;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                  case "href":
                    "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                    break;
                  default:
                    pushAttribute(target$jscomp$0, propKey, propValue);
                }
            }
          target$jscomp$0.push(">");
          pushInnerHTML(target$jscomp$0, innerHTML, children);
          if ("string" === typeof children) {
            target$jscomp$0.push(escapeTextForBrowser(children));
            var JSCompiler_inline_result = null;
          } else JSCompiler_inline_result = children;
          return JSCompiler_inline_result;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          target$jscomp$0.push(startChunkForTag("select"));
          var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
          for (propKey$jscomp$0 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$0)) {
              var propValue$jscomp$0 = props[propKey$jscomp$0];
              if (null != propValue$jscomp$0)
                switch (propKey$jscomp$0) {
                  case "children":
                    children$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$0,
                      propValue$jscomp$0
                    );
                }
            }
          target$jscomp$0.push(">");
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
          return children$jscomp$0;
        case "option":
          var selectedValue = formatContext.selectedValue;
          target$jscomp$0.push(startChunkForTag("option"));
          var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
          for (propKey$jscomp$1 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$1)) {
              var propValue$jscomp$1 = props[propKey$jscomp$1];
              if (null != propValue$jscomp$1)
                switch (propKey$jscomp$1) {
                  case "children":
                    children$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "selected":
                    selected = propValue$jscomp$1;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "value":
                    value = propValue$jscomp$1;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$1,
                      propValue$jscomp$1
                    );
                }
            }
          if (null != selectedValue) {
            var stringValue = null !== value ? "" + value : flattenOptionChildren(children$jscomp$1);
            if (isArrayImpl(selectedValue))
              for (var i = 0; i < selectedValue.length; i++) {
                if ("" + selectedValue[i] === stringValue) {
                  target$jscomp$0.push(' selected=""');
                  break;
                }
              }
            else
              "" + selectedValue === stringValue && target$jscomp$0.push(' selected=""');
          } else selected && target$jscomp$0.push(' selected=""');
          target$jscomp$0.push(">");
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
          return children$jscomp$1;
        case "textarea":
          target$jscomp$0.push(startChunkForTag("textarea"));
          var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
          for (propKey$jscomp$2 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$2)) {
              var propValue$jscomp$2 = props[propKey$jscomp$2];
              if (null != propValue$jscomp$2)
                switch (propKey$jscomp$2) {
                  case "children":
                    children$jscomp$2 = propValue$jscomp$2;
                    break;
                  case "value":
                    value$jscomp$0 = propValue$jscomp$2;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$jscomp$2;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$2,
                      propValue$jscomp$2
                    );
                }
            }
          null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
          target$jscomp$0.push(">");
          if (null != children$jscomp$2) {
            if (null != value$jscomp$0)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (isArrayImpl(children$jscomp$2)) {
              if (1 < children$jscomp$2.length)
                throw Error("<textarea> can only have at most one child.");
              value$jscomp$0 = "" + children$jscomp$2[0];
            }
            value$jscomp$0 = "" + children$jscomp$2;
          }
          "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push("\n");
          null !== value$jscomp$0 && target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0));
          return null;
        case "input":
          target$jscomp$0.push(startChunkForTag("input"));
          var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
          for (propKey$jscomp$3 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$3)) {
              var propValue$jscomp$3 = props[propKey$jscomp$3];
              if (null != propValue$jscomp$3)
                switch (propKey$jscomp$3) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    name = propValue$jscomp$3;
                    break;
                  case "formAction":
                    formAction = propValue$jscomp$3;
                    break;
                  case "formEncType":
                    formEncType = propValue$jscomp$3;
                    break;
                  case "formMethod":
                    formMethod = propValue$jscomp$3;
                    break;
                  case "formTarget":
                    formTarget = propValue$jscomp$3;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$jscomp$3;
                    break;
                  case "defaultValue":
                    defaultValue$jscomp$0 = propValue$jscomp$3;
                    break;
                  case "checked":
                    checked = propValue$jscomp$3;
                    break;
                  case "value":
                    value$jscomp$1 = propValue$jscomp$3;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$3,
                      propValue$jscomp$3
                    );
                }
            }
          var formData = pushFormActionAttribute(
            target$jscomp$0,
            resumableState,
            renderState,
            formAction,
            formEncType,
            formMethod,
            formTarget,
            name
          );
          null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
          null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
          target$jscomp$0.push("/>");
          null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
          return null;
        case "button":
          target$jscomp$0.push(startChunkForTag("button"));
          var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
          for (propKey$jscomp$4 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$4)) {
              var propValue$jscomp$4 = props[propKey$jscomp$4];
              if (null != propValue$jscomp$4)
                switch (propKey$jscomp$4) {
                  case "children":
                    children$jscomp$3 = propValue$jscomp$4;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$2 = propValue$jscomp$4;
                    break;
                  case "name":
                    name$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formAction":
                    formAction$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formEncType":
                    formEncType$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formMethod":
                    formMethod$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formTarget":
                    formTarget$jscomp$0 = propValue$jscomp$4;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$4,
                      propValue$jscomp$4
                    );
                }
            }
          var formData$jscomp$0 = pushFormActionAttribute(
            target$jscomp$0,
            resumableState,
            renderState,
            formAction$jscomp$0,
            formEncType$jscomp$0,
            formMethod$jscomp$0,
            formTarget$jscomp$0,
            name$jscomp$0
          );
          target$jscomp$0.push(">");
          null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
          if ("string" === typeof children$jscomp$3) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
            var JSCompiler_inline_result$jscomp$0 = null;
          } else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
          return JSCompiler_inline_result$jscomp$0;
        case "form":
          target$jscomp$0.push(startChunkForTag("form"));
          var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
          for (propKey$jscomp$5 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$5)) {
              var propValue$jscomp$5 = props[propKey$jscomp$5];
              if (null != propValue$jscomp$5)
                switch (propKey$jscomp$5) {
                  case "children":
                    children$jscomp$4 = propValue$jscomp$5;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$3 = propValue$jscomp$5;
                    break;
                  case "action":
                    formAction$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "encType":
                    formEncType$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "method":
                    formMethod$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "target":
                    formTarget$jscomp$1 = propValue$jscomp$5;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$5,
                      propValue$jscomp$5
                    );
                }
            }
          var formData$jscomp$1 = null, formActionName = null;
          if ("function" === typeof formAction$jscomp$1) {
            var customFields = getCustomFormFields(
              resumableState,
              formAction$jscomp$1
            );
            null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(
              " ",
              "action",
              '="',
              actionJavaScriptURL,
              '"'
            ), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
          }
          null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
          null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
          null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
          null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
          target$jscomp$0.push(">");
          null !== formActionName && (target$jscomp$0.push('<input type="hidden"'), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push("/>"), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
          if ("string" === typeof children$jscomp$4) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
            var JSCompiler_inline_result$jscomp$1 = null;
          } else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
          return JSCompiler_inline_result$jscomp$1;
        case "menuitem":
          target$jscomp$0.push(startChunkForTag("menuitem"));
          for (var propKey$jscomp$6 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$6)) {
              var propValue$jscomp$6 = props[propKey$jscomp$6];
              if (null != propValue$jscomp$6)
                switch (propKey$jscomp$6) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$6,
                      propValue$jscomp$6
                    );
                }
            }
          target$jscomp$0.push(">");
          return null;
        case "object":
          target$jscomp$0.push(startChunkForTag("object"));
          var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
          for (propKey$jscomp$7 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$7)) {
              var propValue$jscomp$7 = props[propKey$jscomp$7];
              if (null != propValue$jscomp$7)
                switch (propKey$jscomp$7) {
                  case "children":
                    children$jscomp$5 = propValue$jscomp$7;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$4 = propValue$jscomp$7;
                    break;
                  case "data":
                    var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                    if ("" === sanitizedValue) break;
                    target$jscomp$0.push(
                      " ",
                      "data",
                      '="',
                      escapeTextForBrowser(sanitizedValue),
                      '"'
                    );
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$7,
                      propValue$jscomp$7
                    );
                }
            }
          target$jscomp$0.push(">");
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
          if ("string" === typeof children$jscomp$5) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
            var JSCompiler_inline_result$jscomp$2 = null;
          } else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
          return JSCompiler_inline_result$jscomp$2;
        case "title":
          var noscriptTagInScope = formatContext.tagScope & 1, isFallback = formatContext.tagScope & 4;
          if (4 === formatContext.insertionMode || noscriptTagInScope || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(
              target$jscomp$0,
              props
            );
          else
            isFallback ? JSCompiler_inline_result$jscomp$3 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$3 = void 0);
          return JSCompiler_inline_result$jscomp$3;
        case "link":
          var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1, isFallback$jscomp$0 = formatContext.tagScope & 4, rel = props.rel, href = props.href, precedence = props.precedence;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
            pushLinkImpl(target$jscomp$0, props);
            var JSCompiler_inline_result$jscomp$4 = null;
          } else if ("stylesheet" === props.rel)
            if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError)
              JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
                target$jscomp$0,
                props
              );
            else {
              var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
              if (null !== resourceState) {
                resumableState.styleResources[href] = null;
                styleQueue || (styleQueue = {
                  precedence: escapeTextForBrowser(precedence),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, renderState.styles.set(precedence, styleQueue));
                var resource = {
                  state: 0,
                  props: assign({}, props, {
                    "data-precedence": props.precedence,
                    precedence: null
                  })
                };
                if (resourceState) {
                  2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                  var preloadResource = renderState.preloads.stylesheets.get(href);
                  preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = 1;
                }
                styleQueue.sheets.set(href, resource);
                hoistableState && hoistableState.stylesheets.add(resource);
              } else if (styleQueue) {
                var resource$9 = styleQueue.sheets.get(href);
                resource$9 && hoistableState && hoistableState.stylesheets.add(resource$9);
              }
              textEmbedded && target$jscomp$0.push("<!-- -->");
              JSCompiler_inline_result$jscomp$4 = null;
            }
          else
            props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
              target$jscomp$0,
              props
            ) : (textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0 ? null : pushLinkImpl(renderState.hoistableChunks, props));
          return JSCompiler_inline_result$jscomp$4;
        case "script":
          var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1, asyncProp = props.async;
          if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || 4 === formatContext.insertionMode || noscriptTagInScope$jscomp$1 || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(
              target$jscomp$0,
              props
            );
          else {
            var key = props.src;
            if ("module" === props.type) {
              var resources = resumableState.moduleScriptResources;
              var preloads = renderState.preloads.moduleScripts;
            } else
              resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
            var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
            if (null !== resourceState$jscomp$0) {
              resources[key] = null;
              var scriptProps = props;
              if (resourceState$jscomp$0) {
                2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                var preloadResource$jscomp$0 = preloads.get(key);
                preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
              }
              var resource$jscomp$0 = [];
              renderState.scripts.add(resource$jscomp$0);
              pushScriptImpl(resource$jscomp$0, scriptProps);
            }
            textEmbedded && target$jscomp$0.push("<!-- -->");
            JSCompiler_inline_result$jscomp$5 = null;
          }
          return JSCompiler_inline_result$jscomp$5;
        case "style":
          var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1, precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href, nonce = props.nonce;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$2 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
            target$jscomp$0.push(startChunkForTag("style"));
            var children$jscomp$6 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
            for (propKey$jscomp$8 in props)
              if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                var propValue$jscomp$8 = props[propKey$jscomp$8];
                if (null != propValue$jscomp$8)
                  switch (propKey$jscomp$8) {
                    case "children":
                      children$jscomp$6 = propValue$jscomp$8;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$5 = propValue$jscomp$8;
                      break;
                    default:
                      pushAttribute(
                        target$jscomp$0,
                        propKey$jscomp$8,
                        propValue$jscomp$8
                      );
                  }
              }
            target$jscomp$0.push(">");
            var child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
            "function" !== typeof child && "symbol" !== typeof child && null !== child && void 0 !== child && target$jscomp$0.push(("" + child).replace(styleRegex, styleReplacer));
            pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
            target$jscomp$0.push(endChunkForTag("style"));
            var JSCompiler_inline_result$jscomp$6 = null;
          } else {
            var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
            if (null !== (resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0)) {
              resumableState.styleResources[href$jscomp$0] = null;
              styleQueue$jscomp$0 || (styleQueue$jscomp$0 = {
                precedence: escapeTextForBrowser(precedence$jscomp$0),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
              var nonceStyle = renderState.nonce.style;
              if (!nonceStyle || nonceStyle === nonce) {
                styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0));
                var target = styleQueue$jscomp$0.rules, children$jscomp$7 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                for (propKey$jscomp$9 in props)
                  if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                    var propValue$jscomp$9 = props[propKey$jscomp$9];
                    if (null != propValue$jscomp$9)
                      switch (propKey$jscomp$9) {
                        case "children":
                          children$jscomp$7 = propValue$jscomp$9;
                          break;
                        case "dangerouslySetInnerHTML":
                          innerHTML$jscomp$6 = propValue$jscomp$9;
                      }
                  }
                var child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                "function" !== typeof child$jscomp$0 && "symbol" !== typeof child$jscomp$0 && null !== child$jscomp$0 && void 0 !== child$jscomp$0 && target.push(
                  ("" + child$jscomp$0).replace(styleRegex, styleReplacer)
                );
                pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
              }
            }
            styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
            textEmbedded && target$jscomp$0.push("<!-- -->");
            JSCompiler_inline_result$jscomp$6 = void 0;
          }
          return JSCompiler_inline_result$jscomp$6;
        case "meta":
          var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1, isFallback$jscomp$1 = formatContext.tagScope & 4;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$3 || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(
              target$jscomp$0,
              props,
              "meta"
            );
          else
            textEmbedded && target$jscomp$0.push("<!-- -->"), JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1 ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
          return JSCompiler_inline_result$jscomp$7;
        case "listing":
        case "pre":
          target$jscomp$0.push(startChunkForTag(type));
          var children$jscomp$8 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
          for (propKey$jscomp$10 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$10)) {
              var propValue$jscomp$10 = props[propKey$jscomp$10];
              if (null != propValue$jscomp$10)
                switch (propKey$jscomp$10) {
                  case "children":
                    children$jscomp$8 = propValue$jscomp$10;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$7 = propValue$jscomp$10;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$10,
                      propValue$jscomp$10
                    );
                }
            }
          target$jscomp$0.push(">");
          if (null != innerHTML$jscomp$7) {
            if (null != children$jscomp$8)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var html = innerHTML$jscomp$7.__html;
            null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push("\n", html) : target$jscomp$0.push("" + html));
          }
          "string" === typeof children$jscomp$8 && "\n" === children$jscomp$8[0] && target$jscomp$0.push("\n");
          return children$jscomp$8;
        case "img":
          var pictureOrNoScriptTagInScope = formatContext.tagScope & 3, src = props.src, srcSet = props.srcSet;
          if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || pictureOrNoScriptTagInScope) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
            null !== hoistableState && formatContext.tagScope & 64 && (hoistableState.suspenseyImages = true);
            var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
            if (resource$jscomp$1) {
              if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size)
                promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
            } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
              resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
              var input = props.crossOrigin;
              var JSCompiler_inline_result$jscomp$8 = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
              var headers = renderState.headers, header;
              headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                imageSrcSet: props.srcSet,
                imageSizes: props.sizes,
                crossOrigin: JSCompiler_inline_result$jscomp$8,
                integrity: props.integrity,
                nonce: props.nonce,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.refererPolicy
              }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                rel: "preload",
                as: "image",
                href: srcSet ? void 0 : src,
                imageSrcSet: srcSet,
                imageSizes: sizes,
                crossOrigin: JSCompiler_inline_result$jscomp$8,
                integrity: props.integrity,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.referrerPolicy
              }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
            }
          }
          return pushSelfClosing(target$jscomp$0, props, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return pushSelfClosing(target$jscomp$0, props, type);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (2 > formatContext.insertionMode) {
            var preamble = preambleState || renderState.preamble;
            if (preamble.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push("<!--head-->");
            preamble.headChunks = [];
            var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(
              preamble.headChunks,
              props,
              "head"
            );
          } else
            JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "head"
            );
          return JSCompiler_inline_result$jscomp$9;
        case "body":
          if (2 > formatContext.insertionMode) {
            var preamble$jscomp$0 = preambleState || renderState.preamble;
            if (preamble$jscomp$0.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push("<!--body-->");
            preamble$jscomp$0.bodyChunks = [];
            var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(
              preamble$jscomp$0.bodyChunks,
              props,
              "body"
            );
          } else
            JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "body"
            );
          return JSCompiler_inline_result$jscomp$10;
        case "html":
          if (0 === formatContext.insertionMode) {
            var preamble$jscomp$1 = preambleState || renderState.preamble;
            if (preamble$jscomp$1.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push("<!--html-->");
            preamble$jscomp$1.htmlChunks = [""];
            var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(
              preamble$jscomp$1.htmlChunks,
              props,
              "html"
            );
          } else
            JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "html"
            );
          return JSCompiler_inline_result$jscomp$11;
        default:
          if (-1 !== type.indexOf("-")) {
            target$jscomp$0.push(startChunkForTag(type));
            var children$jscomp$9 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
            for (propKey$jscomp$11 in props)
              if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                var propValue$jscomp$11 = props[propKey$jscomp$11];
                if (null != propValue$jscomp$11) {
                  var attributeName = propKey$jscomp$11;
                  switch (propKey$jscomp$11) {
                    case "children":
                      children$jscomp$9 = propValue$jscomp$11;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$8 = propValue$jscomp$11;
                      break;
                    case "style":
                      pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      attributeName = "class";
                    default:
                      if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && false !== propValue$jscomp$11) {
                        if (true === propValue$jscomp$11) propValue$jscomp$11 = "";
                        else if ("object" === typeof propValue$jscomp$11) continue;
                        target$jscomp$0.push(
                          " ",
                          attributeName,
                          '="',
                          escapeTextForBrowser(propValue$jscomp$11),
                          '"'
                        );
                      }
                  }
                }
              }
            target$jscomp$0.push(">");
            pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
            return children$jscomp$9;
          }
      }
      return pushStartGenericElement(target$jscomp$0, props, type);
    }
    var endTagCache = /* @__PURE__ */ new Map();
    function endChunkForTag(tag) {
      var chunk = endTagCache.get(tag);
      void 0 === chunk && (chunk = "</" + tag + ">", endTagCache.set(tag, chunk));
      return chunk;
    }
    function hoistPreambleState(renderState, preambleState) {
      renderState = renderState.preamble;
      null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks);
      null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks);
      null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks);
    }
    function writeBootstrap(destination, renderState) {
      renderState = renderState.bootstrapChunks;
      for (var i = 0; i < renderState.length - 1; i++)
        destination.push(renderState[i]);
      return i < renderState.length ? (i = renderState[i], renderState.length = 0, destination.push(i)) : true;
    }
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
      destination.push('<!--$?--><template id="');
      if (null === id)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      destination.push(renderState.boundaryPrefix);
      renderState = id.toString(16);
      destination.push(renderState);
      return destination.push('"></template>');
    }
    function writeStartSegment(destination, renderState, formatContext, id) {
      switch (formatContext.insertionMode) {
        case 0:
        case 1:
        case 3:
        case 2:
          return destination.push('<div hidden id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 4:
          return destination.push('<svg aria-hidden="true" style="display:none" id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 5:
          return destination.push('<math aria-hidden="true" style="display:none" id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 6:
          return destination.push('<table hidden id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 7:
          return destination.push('<table hidden><tbody id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 8:
          return destination.push('<table hidden><tr id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        case 9:
          return destination.push('<table hidden><colgroup id="'), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function writeEndSegment(destination, formatContext) {
      switch (formatContext.insertionMode) {
        case 0:
        case 1:
        case 3:
        case 2:
          return destination.push("</div>");
        case 4:
          return destination.push("</svg>");
        case 5:
          return destination.push("</math>");
        case 6:
          return destination.push("</table>");
        case 7:
          return destination.push("</tbody></table>");
        case 8:
          return destination.push("</tr></table>");
        case 9:
          return destination.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
    function escapeJSStringsForInstructionScripts(input) {
      return JSON.stringify(input).replace(
        regexForJSStringsInInstructionScripts,
        function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
    function escapeJSObjectForInstructionScripts(input) {
      return JSON.stringify(input).replace(
        regexForJSStringsInScripts,
        function(match) {
          switch (match) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    var currentlyRenderingBoundaryHasStylesToHoist = false;
    var destinationHasCapacity = true;
    function flushStyleTagsLateForBoundary(styleQueue) {
      var rules = styleQueue.rules, hrefs = styleQueue.hrefs, i = 0;
      if (hrefs.length) {
        this.push(currentlyFlushingRenderState.startInlineStyle);
        this.push(' media="not all" data-precedence="');
        this.push(styleQueue.precedence);
        for (this.push('" data-href="'); i < hrefs.length - 1; i++)
          this.push(hrefs[i]), this.push(" ");
        this.push(hrefs[i]);
        this.push('">');
        for (i = 0; i < rules.length; i++) this.push(rules[i]);
        destinationHasCapacity = this.push("</style>");
        currentlyRenderingBoundaryHasStylesToHoist = true;
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function hasStylesToHoist(stylesheet) {
      return 2 !== stylesheet.state ? currentlyRenderingBoundaryHasStylesToHoist = true : false;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
      currentlyRenderingBoundaryHasStylesToHoist = false;
      destinationHasCapacity = true;
      currentlyFlushingRenderState = renderState;
      hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
      currentlyFlushingRenderState = null;
      hoistableState.stylesheets.forEach(hasStylesToHoist);
      currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = true);
      return destinationHasCapacity;
    }
    function flushResource(resource) {
      for (var i = 0; i < resource.length; i++) this.push(resource[i]);
      resource.length = 0;
    }
    var stylesheetFlushingQueue = [];
    function flushStyleInPreamble(stylesheet) {
      pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
      for (var i = 0; i < stylesheetFlushingQueue.length; i++)
        this.push(stylesheetFlushingQueue[i]);
      stylesheetFlushingQueue.length = 0;
      stylesheet.state = 2;
    }
    function flushStylesInPreamble(styleQueue) {
      var hasStylesheets = 0 < styleQueue.sheets.size;
      styleQueue.sheets.forEach(flushStyleInPreamble, this);
      styleQueue.sheets.clear();
      var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
      if (!hasStylesheets || hrefs.length) {
        this.push(currentlyFlushingRenderState.startInlineStyle);
        this.push(' data-precedence="');
        this.push(styleQueue.precedence);
        styleQueue = 0;
        if (hrefs.length) {
          for (this.push('" data-href="'); styleQueue < hrefs.length - 1; styleQueue++)
            this.push(hrefs[styleQueue]), this.push(" ");
          this.push(hrefs[styleQueue]);
        }
        this.push('">');
        for (styleQueue = 0; styleQueue < rules.length; styleQueue++)
          this.push(rules[styleQueue]);
        this.push("</style>");
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function preloadLateStyle(stylesheet) {
      if (0 === stylesheet.state) {
        stylesheet.state = 1;
        var props = stylesheet.props;
        pushLinkImpl(stylesheetFlushingQueue, {
          rel: "preload",
          as: "style",
          href: stylesheet.props.href,
          crossOrigin: props.crossOrigin,
          fetchPriority: props.fetchPriority,
          integrity: props.integrity,
          media: props.media,
          hrefLang: props.hrefLang,
          referrerPolicy: props.referrerPolicy
        });
        for (stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)
          this.push(stylesheetFlushingQueue[stylesheet]);
        stylesheetFlushingQueue.length = 0;
      }
    }
    function preloadLateStyles(styleQueue) {
      styleQueue.sheets.forEach(preloadLateStyle, this);
      styleQueue.sheets.clear();
    }
    function pushCompletedShellIdAttribute(target, resumableState) {
      0 === (resumableState.instructions & 32) && (resumableState.instructions |= 32, target.push(
        ' id="',
        escapeTextForBrowser("_" + resumableState.idPrefix + "R_"),
        '"'
      ));
    }
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
      destination.push("[");
      var nextArrayOpenBrackChunk = "[";
      hoistableState.stylesheets.forEach(function(resource) {
        if (2 !== resource.state)
          if (3 === resource.state)
            destination.push(nextArrayOpenBrackChunk), resource = escapeJSObjectForInstructionScripts(
              "" + resource.props.href
            ), destination.push(resource), destination.push("]"), nextArrayOpenBrackChunk = ",[";
          else {
            destination.push(nextArrayOpenBrackChunk);
            var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
            coercedHref = escapeJSObjectForInstructionScripts(coercedHref);
            destination.push(coercedHref);
            precedence = "" + precedence;
            destination.push(",");
            precedence = escapeJSObjectForInstructionScripts(precedence);
            destination.push(precedence);
            for (var propKey in props)
              if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence))
                switch (propKey) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    writeStyleResourceAttributeInJS(
                      destination,
                      propKey,
                      precedence
                    );
                }
            destination.push("]");
            nextArrayOpenBrackChunk = ",[";
            resource.state = 3;
          }
      });
      destination.push("]");
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
      var attributeName = name.toLowerCase();
      switch (typeof value) {
        case "function":
        case "symbol":
          return;
      }
      switch (name) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          attributeName = "class";
          name = "" + value;
          break;
        case "hidden":
          if (false === value) return;
          name = "";
          break;
        case "src":
        case "href":
          value = sanitizeURL(value);
          name = "" + value;
          break;
        default:
          if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name))
            return;
          name = "" + value;
      }
      destination.push(",");
      attributeName = escapeJSObjectForInstructionScripts(attributeName);
      destination.push(attributeName);
      destination.push(",");
      attributeName = escapeJSObjectForInstructionScripts(name);
      destination.push(attributeName);
    }
    function createHoistableState() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: false };
    }
    function prefetchDNS(href) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if ("string" === typeof href && href) {
          if (!resumableState.dnsResources.hasOwnProperty(href)) {
            resumableState.dnsResources[href] = null;
            resumableState = renderState.headers;
            var header, JSCompiler_temp;
            if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity)
              JSCompiler_temp = (header = "<" + ("" + href).replace(
                regexForHrefInLinkHeaderURLContext,
                escapeHrefForLinkHeaderURLContextReplacer
              ) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
            JSCompiler_temp ? (renderState.resets.dns[href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, { href, rel: "dns-prefetch" }), renderState.preconnects.add(header));
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.D(href);
    }
    function preconnect(href, crossOrigin) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if ("string" === typeof href && href) {
          var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
          if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
            resumableState.connectResources[bucket][href] = null;
            resumableState = renderState.headers;
            var header, JSCompiler_temp;
            if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
              JSCompiler_temp = "<" + ("" + href).replace(
                regexForHrefInLinkHeaderURLContext,
                escapeHrefForLinkHeaderURLContextReplacer
              ) + ">; rel=preconnect";
              if ("string" === typeof crossOrigin) {
                var escapedCrossOrigin = ("" + crossOrigin).replace(
                  regexForLinkHeaderQuotedParamValueContext,
                  escapeStringForLinkHeaderQuotedParamValueContextReplacer
                );
                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
              }
              JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
            }
            JSCompiler_temp ? (renderState.resets.connect[bucket][href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
              rel: "preconnect",
              href,
              crossOrigin
            }), renderState.preconnects.add(bucket));
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.C(href, crossOrigin);
    }
    function preload(href, as, options) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (as && href) {
          switch (as) {
            case "image":
              if (options) {
                var imageSrcSet = options.imageSrcSet;
                var imageSizes = options.imageSizes;
                var fetchPriority = options.fetchPriority;
              }
              var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
              if (resumableState.imageResources.hasOwnProperty(key)) return;
              resumableState.imageResources[key] = PRELOAD_NO_CREDS;
              resumableState = renderState.headers;
              var header;
              resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(
                resumableState,
                assign(
                  { rel: "preload", href: imageSrcSet ? void 0 : href, as },
                  options
                )
              ), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
              break;
            case "style":
              if (resumableState.styleResources.hasOwnProperty(href)) return;
              imageSrcSet = [];
              pushLinkImpl(
                imageSrcSet,
                assign({ rel: "preload", href, as }, options)
              );
              resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              renderState.preloads.stylesheets.set(href, imageSrcSet);
              renderState.bulkPreloads.add(imageSrcSet);
              break;
            case "script":
              if (resumableState.scriptResources.hasOwnProperty(href)) return;
              imageSrcSet = [];
              renderState.preloads.scripts.set(href, imageSrcSet);
              renderState.bulkPreloads.add(imageSrcSet);
              pushLinkImpl(
                imageSrcSet,
                assign({ rel: "preload", href, as }, options)
              );
              resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              break;
            default:
              if (resumableState.unknownResources.hasOwnProperty(as)) {
                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href))
                  return;
              } else
                imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
              imageSrcSet[href] = PRELOAD_NO_CREDS;
              if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2)))
                renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
              else
                switch (resumableState = [], href = assign({ rel: "preload", href, as }, options), pushLinkImpl(resumableState, href), as) {
                  case "font":
                    renderState.fontPreloads.add(resumableState);
                    break;
                  default:
                    renderState.bulkPreloads.add(resumableState);
                }
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.L(href, as, options);
    }
    function preloadModule(href, options) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (href) {
          var as = options && "string" === typeof options.as ? options.as : "script";
          switch (as) {
            case "script":
              if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
              as = [];
              resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              renderState.preloads.moduleScripts.set(href, as);
              break;
            default:
              if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                var resources = resumableState.unknownResources[as];
                if (resources.hasOwnProperty(href)) return;
              } else
                resources = {}, resumableState.moduleUnknownResources[as] = resources;
              as = [];
              resources[href] = PRELOAD_NO_CREDS;
          }
          pushLinkImpl(as, assign({ rel: "modulepreload", href }, options));
          renderState.bulkPreloads.add(as);
          enqueueFlush(request);
        }
      } else previousDispatcher.m(href, options);
    }
    function preinitStyle(href, precedence, options) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (href) {
          precedence = precedence || "default";
          var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
          null !== resourceState && (resumableState.styleResources[href] = null, styleQueue || (styleQueue = {
            precedence: escapeTextForBrowser(precedence),
            rules: [],
            hrefs: [],
            sheets: /* @__PURE__ */ new Map()
          }, renderState.styles.set(precedence, styleQueue)), precedence = {
            state: 0,
            props: assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options
            )
          }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = 1), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
        }
      } else previousDispatcher.S(href, precedence, options);
    }
    function preinitScript(src, options) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (src) {
          var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
          null !== resourceState && (resumableState.scriptResources[src] = null, options = assign({ src, async: true }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
        }
      } else previousDispatcher.X(src, options);
    }
    function preinitModuleScript(src, options) {
      var request = currentRequest ? currentRequest : null;
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (src) {
          var resourceState = resumableState.moduleScriptResources.hasOwnProperty(
            src
          ) ? resumableState.moduleScriptResources[src] : void 0;
          null !== resourceState && (resumableState.moduleScriptResources[src] = null, options = assign({ src, type: "module", async: true }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
        }
      } else previousDispatcher.M(src, options);
    }
    function adoptPreloadCredentials(target, preloadState) {
      null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
      null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
      href = ("" + href).replace(
        regexForHrefInLinkHeaderURLContext,
        escapeHrefForLinkHeaderURLContextReplacer
      );
      as = ("" + as).replace(
        regexForLinkHeaderQuotedParamValueContext,
        escapeStringForLinkHeaderQuotedParamValueContextReplacer
      );
      as = "<" + href + '>; rel=preload; as="' + as + '"';
      for (var paramName in params)
        hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + ("" + href).replace(
          regexForLinkHeaderQuotedParamValueContext,
          escapeStringForLinkHeaderQuotedParamValueContextReplacer
        ) + '"'));
      return as;
    }
    var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
      switch (match) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case "\n":
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
      switch (match) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case "\n":
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function hoistStyleQueueDependency(styleQueue) {
      this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
      this.stylesheets.add(stylesheet);
    }
    function hoistHoistables(parentState, childState) {
      childState.styles.forEach(hoistStyleQueueDependency, parentState);
      childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
      childState.suspenseyImages && (parentState.suspenseyImages = true);
    }
    function createRenderState(resumableState, generateStaticMarkup) {
      var idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
      void 0 !== bootstrapScriptContent && (bootstrapChunks.push("<script"), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(
        ">",
        ("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer),
        "</script>"
      ));
      bootstrapScriptContent = idPrefix + "P:";
      var JSCompiler_object_inline_segmentPrefix_1673 = idPrefix + "S:";
      idPrefix += "B:";
      var JSCompiler_object_inline_preconnects_1687 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_fontPreloads_1688 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_highImagePreloads_1689 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_styles_1690 = /* @__PURE__ */ new Map(), JSCompiler_object_inline_bootstrapScripts_1691 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_scripts_1692 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_bulkPreloads_1693 = /* @__PURE__ */ new Set(), JSCompiler_object_inline_preloads_1694 = {
        images: /* @__PURE__ */ new Map(),
        stylesheets: /* @__PURE__ */ new Map(),
        scripts: /* @__PURE__ */ new Map(),
        moduleScripts: /* @__PURE__ */ new Map()
      };
      if (void 0 !== bootstrapScripts)
        for (var i = 0; i < bootstrapScripts.length; i++) {
          var scriptConfig = bootstrapScripts[i], src, crossOrigin = void 0, integrity = void 0, props = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: void 0
          };
          "string" === typeof scriptConfig ? props.href = src = scriptConfig : (props.href = src = scriptConfig.src, props.integrity = integrity = "string" === typeof scriptConfig.integrity ? scriptConfig.integrity : void 0, props.crossOrigin = crossOrigin = "string" === typeof scriptConfig || null == scriptConfig.crossOrigin ? void 0 : "use-credentials" === scriptConfig.crossOrigin ? "use-credentials" : "");
          scriptConfig = resumableState;
          var href = src;
          scriptConfig.scriptResources[href] = null;
          scriptConfig.moduleScriptResources[href] = null;
          scriptConfig = [];
          pushLinkImpl(scriptConfig, props);
          JSCompiler_object_inline_bootstrapScripts_1691.add(scriptConfig);
          bootstrapChunks.push('<script src="', escapeTextForBrowser(src), '"');
          "string" === typeof integrity && bootstrapChunks.push(
            ' integrity="',
            escapeTextForBrowser(integrity),
            '"'
          );
          "string" === typeof crossOrigin && bootstrapChunks.push(
            ' crossorigin="',
            escapeTextForBrowser(crossOrigin),
            '"'
          );
          pushCompletedShellIdAttribute(bootstrapChunks, resumableState);
          bootstrapChunks.push(' async=""></script>');
        }
      if (void 0 !== bootstrapModules)
        for (bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++)
          props = bootstrapModules[bootstrapScripts], crossOrigin = src = void 0, integrity = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
          }, "string" === typeof props ? integrity.href = i = props : (integrity.href = i = props.src, integrity.integrity = crossOrigin = "string" === typeof props.integrity ? props.integrity : void 0, integrity.crossOrigin = src = "string" === typeof props || null == props.crossOrigin ? void 0 : "use-credentials" === props.crossOrigin ? "use-credentials" : ""), props = resumableState, scriptConfig = i, props.scriptResources[scriptConfig] = null, props.moduleScriptResources[scriptConfig] = null, props = [], pushLinkImpl(props, integrity), JSCompiler_object_inline_bootstrapScripts_1691.add(props), bootstrapChunks.push(
            '<script type="module" src="',
            escapeTextForBrowser(i),
            '"'
          ), "string" === typeof crossOrigin && bootstrapChunks.push(
            ' integrity="',
            escapeTextForBrowser(crossOrigin),
            '"'
          ), "string" === typeof src && bootstrapChunks.push(
            ' crossorigin="',
            escapeTextForBrowser(src),
            '"'
          ), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(' async=""></script>');
      return {
        placeholderPrefix: bootstrapScriptContent,
        segmentPrefix: JSCompiler_object_inline_segmentPrefix_1673,
        boundaryPrefix: idPrefix,
        startInlineScript: "<script",
        startInlineStyle: "<style",
        preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
        externalRuntimeScript: null,
        bootstrapChunks,
        importMapChunks: [],
        onHeaders: void 0,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: JSCompiler_object_inline_preconnects_1687,
        fontPreloads: JSCompiler_object_inline_fontPreloads_1688,
        highImagePreloads: JSCompiler_object_inline_highImagePreloads_1689,
        styles: JSCompiler_object_inline_styles_1690,
        bootstrapScripts: JSCompiler_object_inline_bootstrapScripts_1691,
        scripts: JSCompiler_object_inline_scripts_1692,
        bulkPreloads: JSCompiler_object_inline_bulkPreloads_1693,
        preloads: JSCompiler_object_inline_preloads_1694,
        nonce: { script: void 0, style: void 0 },
        stylesToHoist: false,
        generateStaticMarkup
      };
    }
    function pushTextInstance(target, text, renderState, textEmbedded) {
      if (renderState.generateStaticMarkup)
        return target.push(escapeTextForBrowser(text)), false;
      "" === text ? target = textEmbedded : (textEmbedded && target.push("<!-- -->"), target.push(escapeTextForBrowser(text)), target = true);
      return target;
    }
    function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
      renderState.generateStaticMarkup || lastPushedText && textEmbedded && target.push("<!-- -->");
    }
    var bind = Function.prototype.bind;
    var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    var emptyContextObject = {};
    var currentActiveSnapshot = null;
    function popToNearestCommonAncestor(prev, next) {
      if (prev !== next) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        var parentNext = next.parent;
        if (null === prev) {
          if (null !== parentNext)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (null === parentNext)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          popToNearestCommonAncestor(prev, parentNext);
        }
        next.context._currentValue2 = next.value;
      }
    }
    function popAllPrevious(prev) {
      prev.context._currentValue2 = prev.parentValue;
      prev = prev.parent;
      null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
      var parentNext = next.parent;
      null !== parentNext && pushAllNext(parentNext);
      next.context._currentValue2 = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
      prev.context._currentValue2 = prev.parentValue;
      prev = prev.parent;
      if (null === prev)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
      var parentNext = next.parent;
      if (null === parentNext)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
      next.context._currentValue2 = next.value;
    }
    function switchContext(newSnapshot) {
      var prev = currentActiveSnapshot;
      prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    var classComponentUpdater = {
      enqueueSetState: function(inst, payload) {
        inst = inst._reactInternals;
        null !== inst.queue && inst.queue.push(payload);
      },
      enqueueReplaceState: function(inst, payload) {
        inst = inst._reactInternals;
        inst.replace = true;
        inst.queue = [payload];
      },
      enqueueForceUpdate: function() {
      }
    };
    var emptyTreeContext = { id: 1, overflow: "" };
    function pushTreeContext(baseContext, totalChildren, index) {
      var baseIdWithLeadingBit = baseContext.id;
      baseContext = baseContext.overflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        return {
          id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
          overflow: length + baseContext
        };
      }
      return {
        id: 1 << length | index << baseLength | baseIdWithLeadingBit,
        overflow: baseContext
      };
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(x) {
      x >>>= 0;
      return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop() {
    }
    var SuspenseException = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    );
    function trackUsedThenable(thenableState2, thenable, index) {
      index = thenableState2[index];
      void 0 === index ? thenableState2.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          "string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState2 = thenable, thenableState2.status = "pending", thenableState2.then(
            function(fulfilledValue) {
              if ("pending" === thenable.status) {
                var fulfilledThenable = thenable;
                fulfilledThenable.status = "fulfilled";
                fulfilledThenable.value = fulfilledValue;
              }
            },
            function(error) {
              if ("pending" === thenable.status) {
                var rejectedThenable = thenable;
                rejectedThenable.status = "rejected";
                rejectedThenable.reason = error;
              }
            }
          ));
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var currentlyRenderingComponent = null;
    var currentlyRenderingTask = null;
    var currentlyRenderingRequest = null;
    var currentlyRenderingKeyPath = null;
    var firstWorkInProgressHook = null;
    var workInProgressHook = null;
    var isReRender = false;
    var didScheduleRenderPhaseUpdate = false;
    var localIdCounter = 0;
    var actionStateCounter = 0;
    var actionStateMatchingIndex = -1;
    var thenableIndexCounter = 0;
    var thenableState = null;
    var renderPhaseUpdates = null;
    var numberOfReRenders = 0;
    function resolveCurrentlyRenderingComponent() {
      if (null === currentlyRenderingComponent)
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return currentlyRenderingComponent;
    }
    function createHook() {
      if (0 < numberOfReRenders)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function createWorkInProgressHook() {
      null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = false, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = true, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = false, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = true, workInProgressHook = workInProgressHook.next);
      return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
      var state = thenableState;
      thenableState = null;
      return state;
    }
    function resetHooksState() {
      currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
      didScheduleRenderPhaseUpdate = false;
      firstWorkInProgressHook = null;
      numberOfReRenders = 0;
      workInProgressHook = renderPhaseUpdates = null;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      if (isReRender) {
        var queue = workInProgressHook.queue;
        initialArg = queue.dispatch;
        if (null !== renderPhaseUpdates && (init = renderPhaseUpdates.get(queue), void 0 !== init)) {
          renderPhaseUpdates.delete(queue);
          queue = workInProgressHook.memoizedState;
          do
            queue = reducer(queue, init.action), init = init.next;
          while (null !== init);
          workInProgressHook.memoizedState = queue;
          return [queue, initialArg];
        }
        return [workInProgressHook.memoizedState, initialArg];
      }
      reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
      workInProgressHook.memoizedState = reducer;
      reducer = workInProgressHook.queue = { last: null, dispatch: null };
      reducer = reducer.dispatch = dispatchAction.bind(
        null,
        currentlyRenderingComponent,
        reducer
      );
      return [workInProgressHook.memoizedState, reducer];
    }
    function useMemo2(nextCreate, deps) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      if (null !== workInProgressHook) {
        var prevState = workInProgressHook.memoizedState;
        if (null !== prevState && null !== deps) {
          var prevDeps = prevState[1];
          a: if (null === prevDeps) prevDeps = false;
          else {
            for (var i = 0; i < prevDeps.length && i < deps.length; i++)
              if (!objectIs(deps[i], prevDeps[i])) {
                prevDeps = false;
                break a;
              }
            prevDeps = true;
          }
          if (prevDeps) return prevState[0];
        }
      }
      nextCreate = nextCreate();
      workInProgressHook.memoizedState = [nextCreate, deps];
      return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
      if (25 <= numberOfReRenders)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (componentIdentity === currentlyRenderingComponent)
        if (didScheduleRenderPhaseUpdate = true, componentIdentity = { action, next: null }, null === renderPhaseUpdates && (renderPhaseUpdates = /* @__PURE__ */ new Map()), action = renderPhaseUpdates.get(queue), void 0 === action)
          renderPhaseUpdates.set(queue, componentIdentity);
        else {
          for (queue = action; null !== queue.next; ) queue = queue.next;
          queue.next = componentIdentity;
        }
    }
    function throwOnUseEffectEventCall() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function unsupportedStartTransition() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState(action, initialState, permalink) {
      resolveCurrentlyRenderingComponent();
      var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
      if ("function" === typeof action.$$FORM_ACTION) {
        var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
        request = request.formState;
        var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
        if (null !== request && "function" === typeof isSignatureEqual) {
          var postbackKey = request[1];
          isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(
            JSON.stringify([componentKeyPath, null, actionStateHookIndex]),
            0
          ), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
        }
        var boundAction = action.bind(null, initialState);
        action = function(payload) {
          boundAction(payload);
        };
        "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix2) {
          prefix2 = boundAction.$$FORM_ACTION(prefix2);
          void 0 !== permalink && (permalink += "", prefix2.action = permalink);
          var formData = prefix2.data;
          formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(
            JSON.stringify([
              componentKeyPath,
              null,
              actionStateHookIndex
            ]),
            0
          )), formData.append("$ACTION_KEY", nextPostbackStateKey));
          return prefix2;
        });
        return [initialState, action, false];
      }
      var boundAction$22 = action.bind(null, initialState);
      return [
        initialState,
        function(payload) {
          boundAction$22(payload);
        },
        false
      ];
    }
    function unwrapThenable(thenable) {
      var index = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    var HooksDispatcher = {
      readContext: function(context) {
        return context._currentValue2;
      },
      use: function(usable) {
        if (null !== usable && "object" === typeof usable) {
          if ("function" === typeof usable.then) return unwrapThenable(usable);
          if (usable.$$typeof === REACT_CONTEXT_TYPE)
            return usable._currentValue2;
        }
        throw Error("An unsupported type was passed to use(): " + String(usable));
      },
      useContext: function(context) {
        resolveCurrentlyRenderingComponent();
        return context._currentValue2;
      },
      useMemo: useMemo2,
      useReducer,
      useRef: function(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        return null === previousRef ? (initialValue = { current: initialValue }, workInProgressHook.memoizedState = initialValue) : previousRef;
      },
      useState: function(initialState) {
        return useReducer(basicStateReducer, initialState);
      },
      useInsertionEffect: noop,
      useLayoutEffect: noop,
      useCallback: function(callback, deps) {
        return useMemo2(function() {
          return callback;
        }, deps);
      },
      useImperativeHandle: noop,
      useEffect: noop,
      useDebugValue: noop,
      useDeferredValue: function(value, initialValue) {
        resolveCurrentlyRenderingComponent();
        return void 0 !== initialValue ? initialValue : value;
      },
      useTransition: function() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      },
      useId: function() {
        var JSCompiler_inline_result = currentlyRenderingTask.treeContext;
        var overflow = JSCompiler_inline_result.overflow;
        JSCompiler_inline_result = JSCompiler_inline_result.id;
        JSCompiler_inline_result = (JSCompiler_inline_result & ~(1 << 32 - clz32(JSCompiler_inline_result) - 1)).toString(32) + overflow;
        var resumableState = currentResumableState;
        if (null === resumableState)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        overflow = localIdCounter++;
        JSCompiler_inline_result = "_" + resumableState.idPrefix + "R_" + JSCompiler_inline_result;
        0 < overflow && (JSCompiler_inline_result += "H" + overflow.toString(32));
        return JSCompiler_inline_result + "_";
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        if (void 0 === getServerSnapshot)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return getServerSnapshot();
      },
      useOptimistic: function(passthrough) {
        resolveCurrentlyRenderingComponent();
        return [passthrough, unsupportedSetOptimisticState];
      },
      useActionState,
      useFormState: useActionState,
      useHostTransitionStatus: function() {
        resolveCurrentlyRenderingComponent();
        return sharedNotPendingObject;
      },
      useMemoCache: function(size) {
        for (var data = Array(size), i = 0; i < size; i++)
          data[i] = REACT_MEMO_CACHE_SENTINEL;
        return data;
      },
      useCacheRefresh: function() {
        return unsupportedRefresh;
      },
      useEffectEvent: function() {
        return throwOnUseEffectEventCall;
      }
    };
    var currentResumableState = null;
    var DefaultAsyncDispatcher = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      }
    };
    var prefix;
    var suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$24) {
                    control = x$24;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$25) {
                  control = x$25;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeComponentStackByType(type) {
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      if ("function" === typeof type)
        return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, true) : describeNativeComponentFrame(type, false);
      if ("object" === typeof type && null !== type) {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeNativeComponentFrame(type.render, false);
          case REACT_MEMO_TYPE:
            return describeNativeComponentFrame(type.type, false);
          case REACT_LAZY_TYPE:
            var lazyComponent = type, payload = lazyComponent._payload;
            lazyComponent = lazyComponent._init;
            try {
              type = lazyComponent(payload);
            } catch (x) {
              return describeBuiltInComponentFrame("Lazy");
            }
            return describeComponentStackByType(type);
        }
        if ("string" === typeof type.name) {
          a: {
            payload = type.name;
            lazyComponent = type.env;
            var location = type.debugLocation;
            if (null != location && (type = Error.prepareStackTrace, Error.prepareStackTrace = void 0, location = location.stack, Error.prepareStackTrace = type, location.startsWith("Error: react-stack-top-frame\n") && (location = location.slice(29)), type = location.indexOf("\n"), -1 !== type && (location = location.slice(type + 1)), type = location.indexOf("react_stack_bottom_frame"), -1 !== type && (type = location.lastIndexOf("\n", type)), type = -1 !== type ? location = location.slice(0, type) : "", location = type.lastIndexOf("\n"), type = -1 === location ? type : type.slice(location + 1), -1 !== type.indexOf(payload))) {
              payload = "\n" + type;
              break a;
            }
            payload = describeBuiltInComponentFrame(
              payload + (lazyComponent ? " [" + lazyComponent + "]" : "")
            );
          }
          return payload;
        }
      }
      switch (type) {
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
      }
      return "";
    }
    function isEligibleForOutlining(request, boundary) {
      return (500 < boundary.byteSize || false) && null === boundary.contentPreamble;
    }
    function defaultErrorHandler(error) {
      if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
        var JSCompiler_inline_result = error.environmentName;
        error = [error].slice(0);
        "string" === typeof error[0] ? error.splice(
          0,
          1,
          "[%s] " + error[0],
          " " + JSCompiler_inline_result + " "
        ) : error.splice(0, 0, "[%s]", " " + JSCompiler_inline_result + " ");
        error.unshift(console);
        JSCompiler_inline_result = bind.apply(console.error, error);
        JSCompiler_inline_result();
      } else console.error(error);
      return null;
    }
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      var abortSet = /* @__PURE__ */ new Set();
      this.destination = null;
      this.flushScheduled = false;
      this.resumableState = resumableState;
      this.renderState = renderState;
      this.rootFormatContext = rootFormatContext;
      this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
      this.status = 10;
      this.fatalError = null;
      this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
      this.completedPreambleSegments = this.completedRootSegment = null;
      this.byteSize = 0;
      this.abortableTasks = abortSet;
      this.pingedTasks = [];
      this.clientRenderedBoundaries = [];
      this.completedBoundaries = [];
      this.partialBoundaries = [];
      this.trackedPostpones = null;
      this.onError = void 0 === onError2 ? defaultErrorHandler : onError2;
      this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
      this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
      this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
      this.onShellError = void 0 === onShellError ? noop : onShellError;
      this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
      this.formState = void 0 === formState ? null : formState;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      resumableState = new RequestInstance(
        resumableState,
        renderState,
        rootFormatContext,
        progressiveChunkSize,
        onError2,
        onAllReady,
        onShellReady,
        onShellError,
        onFatalError,
        onPostpone,
        formState
      );
      renderState = createPendingSegment(
        resumableState,
        0,
        null,
        rootFormatContext,
        false,
        false
      );
      renderState.parentFlushed = true;
      children = createRenderTask(
        resumableState,
        null,
        children,
        -1,
        null,
        renderState,
        null,
        null,
        resumableState.abortableTasks,
        null,
        rootFormatContext,
        null,
        emptyTreeContext,
        null,
        null
      );
      pushComponentStack(children);
      resumableState.pingedTasks.push(children);
      return resumableState;
    }
    var currentRequest = null;
    function pingTask(request, task) {
      request.pingedTasks.push(task);
      1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, performWork(request));
    }
    function createSuspenseBoundary(request, row, fallbackAbortableTasks, contentPreamble, fallbackPreamble) {
      fallbackAbortableTasks = {
        status: 0,
        rootSegmentID: -1,
        parentFlushed: false,
        pendingTasks: 0,
        row,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks,
        errorDigest: null,
        contentState: createHoistableState(),
        fallbackState: createHoistableState(),
        contentPreamble,
        fallbackPreamble,
        trackedContentKeyPath: null,
        trackedFallbackNode: null
      };
      null !== row && (row.pendingTasks++, contentPreamble = row.boundaries, null !== contentPreamble && (request.allPendingTasks++, fallbackAbortableTasks.pendingTasks++, contentPreamble.push(fallbackAbortableTasks)), request = row.inheritedHoistables, null !== request && hoistHoistables(fallbackAbortableTasks.contentState, request));
      return fallbackAbortableTasks;
    }
    function createRenderTask(request, thenableState2, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
      request.allPendingTasks++;
      null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      null !== row && row.pendingTasks++;
      var task = {
        replay: null,
        node,
        childIndex,
        ping: function() {
          return pingTask(request, task);
        },
        blockedBoundary,
        blockedSegment,
        blockedPreamble,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        row,
        componentStack,
        thenableState: thenableState2
      };
      abortSet.add(task);
      return task;
    }
    function createReplayTask(request, thenableState2, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
      request.allPendingTasks++;
      null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      null !== row && row.pendingTasks++;
      replay.pendingTasks++;
      var task = {
        replay,
        node,
        childIndex,
        ping: function() {
          return pingTask(request, task);
        },
        blockedBoundary,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        row,
        componentStack,
        thenableState: thenableState2
      };
      abortSet.add(task);
      return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
      return {
        status: 0,
        parentFlushed: false,
        id: -1,
        index,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext,
        boundary,
        lastPushedText,
        textEmbedded
      };
    }
    function pushComponentStack(task) {
      var node = task.node;
      if ("object" === typeof node && null !== node)
        switch (node.$$typeof) {
          case REACT_ELEMENT_TYPE:
            task.componentStack = { parent: task.componentStack, type: node.type };
        }
    }
    function replaceSuspenseComponentStackWithSuspenseFallbackStack(componentStack) {
      return null === componentStack ? null : { parent: componentStack.parent, type: "Suspense Fallback" };
    }
    function getThrownInfo(node$jscomp$0) {
      var errorInfo = {};
      node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
        configurable: true,
        enumerable: true,
        get: function() {
          try {
            var info = "", node = node$jscomp$0;
            do
              info += describeComponentStackByType(node.type), node = node.parent;
            while (node);
            var JSCompiler_inline_result = info;
          } catch (x) {
            JSCompiler_inline_result = "\nError generating stack: " + x.message + "\n" + x.stack;
          }
          Object.defineProperty(errorInfo, "componentStack", {
            value: JSCompiler_inline_result
          });
          return JSCompiler_inline_result;
        }
      });
      return errorInfo;
    }
    function logRecoverableError(request, error, errorInfo) {
      request = request.onError;
      error = request(error, errorInfo);
      if (null == error || "string" === typeof error) return error;
    }
    function fatalError(request, error) {
      var onShellError = request.onShellError, onFatalError = request.onFatalError;
      onShellError(error);
      onFatalError(error);
      null !== request.destination ? (request.status = 14, request.destination.destroy(error)) : (request.status = 13, request.fatalError = error);
    }
    function finishSuspenseListRow(request, row) {
      unblockSuspenseListRow(request, row.next, row.hoistables);
    }
    function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
      for (; null !== unblockedRow; ) {
        null !== inheritedHoistables && (hoistHoistables(unblockedRow.hoistables, inheritedHoistables), unblockedRow.inheritedHoistables = inheritedHoistables);
        var unblockedBoundaries = unblockedRow.boundaries;
        if (null !== unblockedBoundaries) {
          unblockedRow.boundaries = null;
          for (var i = 0; i < unblockedBoundaries.length; i++) {
            var unblockedBoundary = unblockedBoundaries[i];
            null !== inheritedHoistables && hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
            finishedTask(request, unblockedBoundary, null, null);
          }
        }
        unblockedRow.pendingTasks--;
        if (0 < unblockedRow.pendingTasks) break;
        inheritedHoistables = unblockedRow.hoistables;
        unblockedRow = unblockedRow.next;
      }
    }
    function tryToResolveTogetherRow(request, togetherRow) {
      var boundaries = togetherRow.boundaries;
      if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
        for (var allCompleteAndInlinable = true, i = 0; i < boundaries.length; i++) {
          var rowBoundary = boundaries[i];
          if (1 !== rowBoundary.pendingTasks || rowBoundary.parentFlushed || isEligibleForOutlining(request, rowBoundary)) {
            allCompleteAndInlinable = false;
            break;
          }
        }
        allCompleteAndInlinable && unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
      }
    }
    function createSuspenseListRow(previousRow) {
      var newRow = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: createHoistableState(),
        inheritedHoistables: null,
        together: false,
        next: null
      };
      null !== previousRow && 0 < previousRow.pendingTasks && (newRow.pendingTasks++, newRow.boundaries = [], previousRow.next = newRow);
      return newRow;
    }
    function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
      var prevKeyPath = task.keyPath, prevTreeContext = task.treeContext, prevRow = task.row;
      task.keyPath = keyPath;
      keyPath = rows.length;
      var previousSuspenseListRow = null;
      if (null !== task.replay) {
        var resumeSlots = task.replay.slots;
        if (null !== resumeSlots && "object" === typeof resumeSlots)
          for (var n = 0; n < keyPath; n++) {
            var i = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? n : keyPath - 1 - n, node = rows[i];
            task.row = previousSuspenseListRow = createSuspenseListRow(
              previousSuspenseListRow
            );
            task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
            var resumeSegmentID = resumeSlots[i];
            "number" === typeof resumeSegmentID ? (resumeNode(request, task, resumeSegmentID, node, i), delete resumeSlots[i]) : renderNode(request, task, node, i);
            0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
          }
        else
          for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++)
            n = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? resumeSlots : keyPath - 1 - resumeSlots, i = rows[n], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, n), renderNode(request, task, i, n), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
      } else if ("backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder)
        for (revealOrder = 0; revealOrder < keyPath; revealOrder++)
          resumeSlots = rows[revealOrder], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(
            prevTreeContext,
            keyPath,
            revealOrder
          ), renderNode(request, task, resumeSlots, revealOrder), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
      else {
        revealOrder = task.blockedSegment;
        resumeSlots = revealOrder.children.length;
        n = revealOrder.chunks.length;
        for (i = keyPath - 1; 0 <= i; i--) {
          node = rows[i];
          task.row = previousSuspenseListRow = createSuspenseListRow(
            previousSuspenseListRow
          );
          task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
          resumeSegmentID = createPendingSegment(
            request,
            n,
            null,
            task.formatContext,
            0 === i ? revealOrder.lastPushedText : true,
            true
          );
          revealOrder.children.splice(resumeSlots, 0, resumeSegmentID);
          task.blockedSegment = resumeSegmentID;
          try {
            renderNode(request, task, node, i), pushSegmentFinale(
              resumeSegmentID.chunks,
              request.renderState,
              resumeSegmentID.lastPushedText,
              resumeSegmentID.textEmbedded
            ), resumeSegmentID.status = 1, 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
          } catch (thrownValue) {
            throw resumeSegmentID.status = 12 === request.status ? 3 : 4, thrownValue;
          }
        }
        task.blockedSegment = revealOrder;
        revealOrder.lastPushedText = false;
      }
      null !== prevRow && null !== previousSuspenseListRow && 0 < previousSuspenseListRow.pendingTasks && (prevRow.pendingTasks++, previousSuspenseListRow.next = prevRow);
      task.treeContext = prevTreeContext;
      task.row = prevRow;
      task.keyPath = prevKeyPath;
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
      var prevThenableState = task.thenableState;
      task.thenableState = null;
      currentlyRenderingComponent = {};
      currentlyRenderingTask = task;
      currentlyRenderingRequest = request;
      currentlyRenderingKeyPath = keyPath;
      actionStateCounter = localIdCounter = 0;
      actionStateMatchingIndex = -1;
      thenableIndexCounter = 0;
      thenableState = prevThenableState;
      for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate; )
        didScheduleRenderPhaseUpdate = false, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
      resetHooksState();
      return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex2) {
      var didEmitActionStateMarkers = false;
      if (0 !== actionStateCount && null !== request.formState) {
        var segment = task.blockedSegment;
        if (null !== segment) {
          didEmitActionStateMarkers = true;
          segment = segment.chunks;
          for (var i = 0; i < actionStateCount; i++)
            i === actionStateMatchingIndex2 ? segment.push("<!--F!-->") : segment.push("<!--F-->");
        }
      }
      actionStateCount = task.keyPath;
      task.keyPath = keyPath;
      hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
      task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
      if ("function" === typeof type)
        if (type.prototype && type.prototype.isReactComponent) {
          var newProps = props;
          if ("ref" in props) {
            newProps = {};
            for (var propName in props)
              "ref" !== propName && (newProps[propName] = props[propName]);
          }
          var defaultProps = type.defaultProps;
          if (defaultProps) {
            newProps === props && (newProps = assign({}, newProps, props));
            for (var propName$43 in defaultProps)
              void 0 === newProps[propName$43] && (newProps[propName$43] = defaultProps[propName$43]);
          }
          props = newProps;
          newProps = emptyContextObject;
          defaultProps = type.contextType;
          "object" === typeof defaultProps && null !== defaultProps && (newProps = defaultProps._currentValue2);
          newProps = new type(props, newProps);
          var initialState = void 0 !== newProps.state ? newProps.state : null;
          newProps.updater = classComponentUpdater;
          newProps.props = props;
          newProps.state = initialState;
          defaultProps = { queue: [], replace: false };
          newProps._reactInternals = defaultProps;
          ref = type.contextType;
          newProps.context = "object" === typeof ref && null !== ref ? ref._currentValue2 : emptyContextObject;
          ref = type.getDerivedStateFromProps;
          "function" === typeof ref && (ref = ref(props, initialState), initialState = null === ref || void 0 === ref ? initialState : assign({}, initialState, ref), newProps.state = initialState);
          if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof newProps.getSnapshotBeforeUpdate && ("function" === typeof newProps.UNSAFE_componentWillMount || "function" === typeof newProps.componentWillMount))
            if (type = newProps.state, "function" === typeof newProps.componentWillMount && newProps.componentWillMount(), "function" === typeof newProps.UNSAFE_componentWillMount && newProps.UNSAFE_componentWillMount(), type !== newProps.state && classComponentUpdater.enqueueReplaceState(
              newProps,
              newProps.state,
              null
            ), null !== defaultProps.queue && 0 < defaultProps.queue.length)
              if (type = defaultProps.queue, ref = defaultProps.replace, defaultProps.queue = null, defaultProps.replace = false, ref && 1 === type.length)
                newProps.state = type[0];
              else {
                defaultProps = ref ? type[0] : newProps.state;
                initialState = true;
                for (ref = ref ? 1 : 0; ref < type.length; ref++)
                  propName$43 = type[ref], propName$43 = "function" === typeof propName$43 ? propName$43.call(newProps, defaultProps, props, void 0) : propName$43, null != propName$43 && (initialState ? (initialState = false, defaultProps = assign({}, defaultProps, propName$43)) : assign(defaultProps, propName$43));
                newProps.state = defaultProps;
              }
            else defaultProps.queue = null;
          type = newProps.render();
          if (12 === request.status) throw null;
          props = task.keyPath;
          task.keyPath = keyPath;
          renderNodeDestructive(request, task, type, -1);
          task.keyPath = props;
        } else {
          type = renderWithHooks(request, task, keyPath, type, props, void 0);
          if (12 === request.status) throw null;
          finishFunctionComponent(
            request,
            task,
            keyPath,
            type,
            0 !== localIdCounter,
            actionStateCounter,
            actionStateMatchingIndex
          );
        }
      else if ("string" === typeof type)
        if (newProps = task.blockedSegment, null === newProps)
          newProps = props.children, defaultProps = task.formatContext, initialState = task.keyPath, task.formatContext = getChildFormatContext(defaultProps, type, props), task.keyPath = keyPath, renderNode(request, task, newProps, -1), task.formatContext = defaultProps, task.keyPath = initialState;
        else {
          initialState = pushStartInstance(
            newProps.chunks,
            type,
            props,
            request.resumableState,
            request.renderState,
            task.blockedPreamble,
            task.hoistableState,
            task.formatContext,
            newProps.lastPushedText
          );
          newProps.lastPushedText = false;
          defaultProps = task.formatContext;
          ref = task.keyPath;
          task.keyPath = keyPath;
          if (3 === (task.formatContext = getChildFormatContext(defaultProps, type, props)).insertionMode) {
            keyPath = createPendingSegment(
              request,
              0,
              null,
              task.formatContext,
              false,
              false
            );
            newProps.preambleChildren.push(keyPath);
            task.blockedSegment = keyPath;
            try {
              keyPath.status = 6, renderNode(request, task, initialState, -1), pushSegmentFinale(
                keyPath.chunks,
                request.renderState,
                keyPath.lastPushedText,
                keyPath.textEmbedded
              ), keyPath.status = 1;
            } finally {
              task.blockedSegment = newProps;
            }
          } else renderNode(request, task, initialState, -1);
          task.formatContext = defaultProps;
          task.keyPath = ref;
          a: {
            task = newProps.chunks;
            request = request.resumableState;
            switch (type) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break a;
              case "body":
                if (1 >= defaultProps.insertionMode) {
                  request.hasBody = true;
                  break a;
                }
                break;
              case "html":
                if (0 === defaultProps.insertionMode) {
                  request.hasHtml = true;
                  break a;
                }
                break;
              case "head":
                if (1 >= defaultProps.insertionMode) break a;
            }
            task.push(endChunkForTag(type));
          }
          newProps.lastPushedText = false;
        }
      else {
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE:
            type = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive(request, task, props.children, -1);
            task.keyPath = type;
            return;
          case REACT_ACTIVITY_TYPE:
            type = task.blockedSegment;
            null === type ? "hidden" !== props.mode && (type = task.keyPath, task.keyPath = keyPath, renderNode(request, task, props.children, -1), task.keyPath = type) : "hidden" !== props.mode && (request.renderState.generateStaticMarkup || type.chunks.push("<!--&-->"), type.lastPushedText = false, newProps = task.keyPath, task.keyPath = keyPath, renderNode(request, task, props.children, -1), task.keyPath = newProps, request.renderState.generateStaticMarkup || type.chunks.push("<!--/&-->"), type.lastPushedText = false);
            return;
          case REACT_SUSPENSE_LIST_TYPE:
            a: {
              type = props.children;
              props = props.revealOrder;
              if ("forwards" === props || "backwards" === props || "unstable_legacy-backwards" === props) {
                if (isArrayImpl(type)) {
                  renderSuspenseListRows(request, task, keyPath, type, props);
                  break a;
                }
                if (newProps = getIteratorFn(type)) {
                  if (newProps = newProps.call(type)) {
                    defaultProps = newProps.next();
                    if (!defaultProps.done) {
                      do
                        defaultProps = newProps.next();
                      while (!defaultProps.done);
                      renderSuspenseListRows(request, task, keyPath, type, props);
                    }
                    break a;
                  }
                }
              }
              "together" === props ? (props = task.keyPath, newProps = task.row, defaultProps = task.row = createSuspenseListRow(null), defaultProps.boundaries = [], defaultProps.together = true, task.keyPath = keyPath, renderNodeDestructive(request, task, type, -1), 0 === --defaultProps.pendingTasks && finishSuspenseListRow(request, defaultProps), task.keyPath = props, task.row = newProps, null !== newProps && 0 < defaultProps.pendingTasks && (newProps.pendingTasks++, defaultProps.next = newProps)) : (props = task.keyPath, task.keyPath = keyPath, renderNodeDestructive(request, task, type, -1), task.keyPath = props);
            }
            return;
          case REACT_VIEW_TRANSITION_TYPE:
          case REACT_SCOPE_TYPE:
            throw Error("ReactDOMServer does not yet support scope components.");
          case REACT_SUSPENSE_TYPE:
            a: if (null !== task.replay) {
              type = task.keyPath;
              newProps = task.formatContext;
              defaultProps = task.row;
              task.keyPath = keyPath;
              task.formatContext = getSuspenseContentFormatContext(
                request.resumableState,
                newProps
              );
              task.row = null;
              keyPath = props.children;
              try {
                renderNode(request, task, keyPath, -1);
              } finally {
                task.keyPath = type, task.formatContext = newProps, task.row = defaultProps;
              }
            } else {
              type = task.keyPath;
              ref = task.formatContext;
              var prevRow = task.row, parentBoundary = task.blockedBoundary;
              propName$43 = task.blockedPreamble;
              var parentHoistableState = task.hoistableState;
              propName = task.blockedSegment;
              var fallback = props.fallback;
              props = props.children;
              var fallbackAbortSet = /* @__PURE__ */ new Set();
              var newBoundary = createSuspenseBoundary(
                request,
                task.row,
                fallbackAbortSet,
                null,
                null
              );
              null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
              var boundarySegment = createPendingSegment(
                request,
                propName.chunks.length,
                newBoundary,
                task.formatContext,
                false,
                false
              );
              propName.children.push(boundarySegment);
              propName.lastPushedText = false;
              var contentRootSegment = createPendingSegment(
                request,
                0,
                null,
                task.formatContext,
                false,
                false
              );
              contentRootSegment.parentFlushed = true;
              if (null !== request.trackedPostpones) {
                newProps = task.componentStack;
                defaultProps = [keyPath[0], "Suspense Fallback", keyPath[2]];
                initialState = [defaultProps[1], defaultProps[2], [], null];
                request.trackedPostpones.workingMap.set(defaultProps, initialState);
                newBoundary.trackedFallbackNode = initialState;
                task.blockedSegment = boundarySegment;
                task.blockedPreamble = newBoundary.fallbackPreamble;
                task.keyPath = defaultProps;
                task.formatContext = getSuspenseFallbackFormatContext(
                  request.resumableState,
                  ref
                );
                task.componentStack = replaceSuspenseComponentStackWithSuspenseFallbackStack(newProps);
                boundarySegment.status = 6;
                try {
                  renderNode(request, task, fallback, -1), pushSegmentFinale(
                    boundarySegment.chunks,
                    request.renderState,
                    boundarySegment.lastPushedText,
                    boundarySegment.textEmbedded
                  ), boundarySegment.status = 1;
                } catch (thrownValue) {
                  throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                } finally {
                  task.blockedSegment = propName, task.blockedPreamble = propName$43, task.keyPath = type, task.formatContext = ref;
                }
                task = createRenderTask(
                  request,
                  null,
                  props,
                  -1,
                  newBoundary,
                  contentRootSegment,
                  newBoundary.contentPreamble,
                  newBoundary.contentState,
                  task.abortSet,
                  keyPath,
                  getSuspenseContentFormatContext(
                    request.resumableState,
                    task.formatContext
                  ),
                  task.context,
                  task.treeContext,
                  null,
                  newProps
                );
                pushComponentStack(task);
                request.pingedTasks.push(task);
              } else {
                task.blockedBoundary = newBoundary;
                task.blockedPreamble = newBoundary.contentPreamble;
                task.hoistableState = newBoundary.contentState;
                task.blockedSegment = contentRootSegment;
                task.keyPath = keyPath;
                task.formatContext = getSuspenseContentFormatContext(
                  request.resumableState,
                  ref
                );
                task.row = null;
                contentRootSegment.status = 6;
                try {
                  if (renderNode(request, task, props, -1), pushSegmentFinale(
                    contentRootSegment.chunks,
                    request.renderState,
                    contentRootSegment.lastPushedText,
                    contentRootSegment.textEmbedded
                  ), contentRootSegment.status = 1, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && 0 === newBoundary.status) {
                    if (newBoundary.status = 1, !isEligibleForOutlining(request, newBoundary)) {
                      null !== prevRow && 0 === --prevRow.pendingTasks && finishSuspenseListRow(request, prevRow);
                      0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
                      break a;
                    }
                  } else
                    null !== prevRow && prevRow.together && tryToResolveTogetherRow(request, prevRow);
                } catch (thrownValue$30) {
                  newBoundary.status = 4, 12 === request.status ? (contentRootSegment.status = 3, newProps = request.fatalError) : (contentRootSegment.status = 4, newProps = thrownValue$30), defaultProps = getThrownInfo(task.componentStack), initialState = logRecoverableError(
                    request,
                    newProps,
                    defaultProps
                  ), newBoundary.errorDigest = initialState, untrackBoundary(request, newBoundary);
                } finally {
                  task.blockedBoundary = parentBoundary, task.blockedPreamble = propName$43, task.hoistableState = parentHoistableState, task.blockedSegment = propName, task.keyPath = type, task.formatContext = ref, task.row = prevRow;
                }
                task = createRenderTask(
                  request,
                  null,
                  fallback,
                  -1,
                  parentBoundary,
                  boundarySegment,
                  newBoundary.fallbackPreamble,
                  newBoundary.fallbackState,
                  fallbackAbortSet,
                  [keyPath[0], "Suspense Fallback", keyPath[2]],
                  getSuspenseFallbackFormatContext(
                    request.resumableState,
                    task.formatContext
                  ),
                  task.context,
                  task.treeContext,
                  task.row,
                  replaceSuspenseComponentStackWithSuspenseFallbackStack(
                    task.componentStack
                  )
                );
                pushComponentStack(task);
                request.pingedTasks.push(task);
              }
            }
            return;
        }
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              if ("ref" in props)
                for (fallback in newProps = {}, props)
                  "ref" !== fallback && (newProps[fallback] = props[fallback]);
              else newProps = props;
              type = renderWithHooks(
                request,
                task,
                keyPath,
                type.render,
                newProps,
                ref
              );
              finishFunctionComponent(
                request,
                task,
                keyPath,
                type,
                0 !== localIdCounter,
                actionStateCounter,
                actionStateMatchingIndex
              );
              return;
            case REACT_MEMO_TYPE:
              renderElement(request, task, keyPath, type.type, props, ref);
              return;
            case REACT_CONTEXT_TYPE:
              defaultProps = props.children;
              newProps = task.keyPath;
              props = props.value;
              initialState = type._currentValue2;
              type._currentValue2 = props;
              ref = currentActiveSnapshot;
              currentActiveSnapshot = type = {
                parent: ref,
                depth: null === ref ? 0 : ref.depth + 1,
                context: type,
                parentValue: initialState,
                value: props
              };
              task.context = type;
              task.keyPath = keyPath;
              renderNodeDestructive(request, task, defaultProps, -1);
              request = currentActiveSnapshot;
              if (null === request)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              request.context._currentValue2 = request.parentValue;
              request = currentActiveSnapshot = request.parent;
              task.context = request;
              task.keyPath = newProps;
              return;
            case REACT_CONSUMER_TYPE:
              props = props.children;
              type = props(type._context._currentValue2);
              props = task.keyPath;
              task.keyPath = keyPath;
              renderNodeDestructive(request, task, type, -1);
              task.keyPath = props;
              return;
            case REACT_LAZY_TYPE:
              newProps = type._init;
              type = newProps(type._payload);
              if (12 === request.status) throw null;
              renderElement(request, task, keyPath, type, props, ref);
              return;
          }
        throw Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + ".")
        );
      }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
      var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(
        request,
        0,
        null,
        task.formatContext,
        false,
        false
      );
      resumedSegment.id = segmentId;
      resumedSegment.parentFlushed = true;
      try {
        task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = 1, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
      } finally {
        task.replay = prevReplay, task.blockedSegment = null;
      }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
      null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
    }
    function retryNode(request, task) {
      var node = task.node, childIndex = task.childIndex;
      if (null !== node) {
        if ("object" === typeof node) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = node.type, key = node.key, props = node.props;
              node = props.ref;
              var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key ? -1 === childIndex ? 0 : childIndex : key;
              key = [task.keyPath, name, keyOrIndex];
              if (null !== task.replay)
                a: {
                  var replay = task.replay;
                  childIndex = replay.nodes;
                  for (node = 0; node < childIndex.length; node++) {
                    var node$jscomp$0 = childIndex[node];
                    if (keyOrIndex === node$jscomp$0[1]) {
                      if (4 === node$jscomp$0.length) {
                        if (null !== name && name !== node$jscomp$0[0])
                          throw Error(
                            "Expected the resume to render <" + node$jscomp$0[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering."
                          );
                        var childNodes = node$jscomp$0[2];
                        name = node$jscomp$0[3];
                        keyOrIndex = task.node;
                        task.replay = {
                          nodes: childNodes,
                          slots: name,
                          pendingTasks: 1
                        };
                        try {
                          renderElement(request, task, key, type, props, ref);
                          if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                            throw Error(
                              "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                            );
                          task.replay.pendingTasks--;
                        } catch (x) {
                          if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then))
                            throw task.node === keyOrIndex ? task.replay = replay : childIndex.splice(node, 1), x;
                          task.replay.pendingTasks--;
                          props = getThrownInfo(task.componentStack);
                          key = request;
                          request = task.blockedBoundary;
                          type = x;
                          props = logRecoverableError(key, type, props);
                          abortRemainingReplayNodes(
                            key,
                            request,
                            childNodes,
                            name,
                            type,
                            props
                          );
                        }
                        task.replay = replay;
                      } else {
                        if (type !== REACT_SUSPENSE_TYPE)
                          throw Error(
                            "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
                          );
                        b: {
                          replay = void 0;
                          type = node$jscomp$0[5];
                          ref = node$jscomp$0[2];
                          name = node$jscomp$0[3];
                          keyOrIndex = null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
                          node$jscomp$0 = null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
                          var prevKeyPath = task.keyPath, prevContext = task.formatContext, prevRow = task.row, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children, fallback = props.fallback, fallbackAbortSet = /* @__PURE__ */ new Set();
                          props = createSuspenseBoundary(
                            request,
                            task.row,
                            fallbackAbortSet,
                            null,
                            null
                          );
                          props.parentFlushed = true;
                          props.rootSegmentID = type;
                          task.blockedBoundary = props;
                          task.hoistableState = props.contentState;
                          task.keyPath = key;
                          task.formatContext = getSuspenseContentFormatContext(
                            request.resumableState,
                            prevContext
                          );
                          task.row = null;
                          task.replay = {
                            nodes: ref,
                            slots: name,
                            pendingTasks: 1
                          };
                          try {
                            renderNode(request, task, content, -1);
                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                              throw Error(
                                "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                              );
                            task.replay.pendingTasks--;
                            if (0 === props.pendingTasks && 0 === props.status) {
                              props.status = 1;
                              request.completedBoundaries.push(props);
                              break b;
                            }
                          } catch (error) {
                            props.status = 4, childNodes = getThrownInfo(task.componentStack), replay = logRecoverableError(
                              request,
                              error,
                              childNodes
                            ), props.errorDigest = replay, task.replay.pendingTasks--, request.clientRenderedBoundaries.push(props);
                          } finally {
                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath, task.formatContext = prevContext, task.row = prevRow;
                          }
                          childNodes = createReplayTask(
                            request,
                            null,
                            {
                              nodes: keyOrIndex,
                              slots: node$jscomp$0,
                              pendingTasks: 0
                            },
                            fallback,
                            -1,
                            parentBoundary,
                            props.fallbackState,
                            fallbackAbortSet,
                            [key[0], "Suspense Fallback", key[2]],
                            getSuspenseFallbackFormatContext(
                              request.resumableState,
                              task.formatContext
                            ),
                            task.context,
                            task.treeContext,
                            task.row,
                            replaceSuspenseComponentStackWithSuspenseFallbackStack(
                              task.componentStack
                            )
                          );
                          pushComponentStack(childNodes);
                          request.pingedTasks.push(childNodes);
                        }
                      }
                      childIndex.splice(node, 1);
                      break a;
                    }
                  }
                }
              else renderElement(request, task, key, type, props, ref);
              return;
            case REACT_PORTAL_TYPE:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case REACT_LAZY_TYPE:
              childNodes = node._init;
              node = childNodes(node._payload);
              if (12 === request.status) throw null;
              renderNodeDestructive(request, task, node, childIndex);
              return;
          }
          if (isArrayImpl(node)) {
            renderChildrenArray(request, task, node, childIndex);
            return;
          }
          if (childNodes = getIteratorFn(node)) {
            if (childNodes = childNodes.call(node)) {
              node = childNodes.next();
              if (!node.done) {
                props = [];
                do
                  props.push(node.value), node = childNodes.next();
                while (!node.done);
                renderChildrenArray(request, task, props, childIndex);
              }
              return;
            }
          }
          if ("function" === typeof node.then)
            return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
          if (node.$$typeof === REACT_CONTEXT_TYPE)
            return renderNodeDestructive(
              request,
              task,
              node._currentValue2,
              childIndex
            );
          childIndex = Object.prototype.toString.call(node);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        if ("string" === typeof node)
          childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(
            childIndex.chunks,
            node,
            request.renderState,
            childIndex.lastPushedText
          ));
        else if ("number" === typeof node || "bigint" === typeof node)
          childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(
            childIndex.chunks,
            "" + node,
            request.renderState,
            childIndex.lastPushedText
          ));
      }
    }
    function renderChildrenArray(request, task, children, childIndex) {
      var prevKeyPath = task.keyPath;
      if (-1 !== childIndex && (task.keyPath = [task.keyPath, "Fragment", childIndex], null !== task.replay)) {
        for (var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++) {
          var node = replayNodes[j];
          if (node[1] === childIndex) {
            childIndex = node[2];
            node = node[3];
            task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
            try {
              renderChildrenArray(request, task, children, -1);
              if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              task.replay.pendingTasks--;
            } catch (x) {
              if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then))
                throw x;
              task.replay.pendingTasks--;
              children = getThrownInfo(task.componentStack);
              var boundary = task.blockedBoundary, error = x;
              children = logRecoverableError(request, error, children);
              abortRemainingReplayNodes(
                request,
                boundary,
                childIndex,
                node,
                error,
                children
              );
            }
            task.replay = replay;
            replayNodes.splice(j, 1);
            break;
          }
        }
        task.keyPath = prevKeyPath;
        return;
      }
      replay = task.treeContext;
      replayNodes = children.length;
      if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
        for (childIndex = 0; childIndex < replayNodes; childIndex++)
          node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), boundary = j[childIndex], "number" === typeof boundary ? (resumeNode(request, task, boundary, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        return;
      }
      for (j = 0; j < replayNodes; j++)
        childIndex = children[j], task.treeContext = pushTreeContext(replay, replayNodes, j), renderNode(request, task, childIndex, j);
      task.treeContext = replay;
      task.keyPath = prevKeyPath;
    }
    function trackPostponedBoundary(request, trackedPostpones, boundary) {
      boundary.status = 5;
      boundary.rootSegmentID = request.nextSegmentId++;
      request = boundary.trackedContentKeyPath;
      if (null === request)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var fallbackReplayNode = boundary.trackedFallbackNode, children = [], boundaryNode = trackedPostpones.workingMap.get(request);
      if (void 0 === boundaryNode)
        return boundary = [
          request[1],
          request[2],
          children,
          null,
          fallbackReplayNode,
          boundary.rootSegmentID
        ], trackedPostpones.workingMap.set(request, boundary), addToReplayParent(boundary, request[0], trackedPostpones), boundary;
      boundaryNode[4] = fallbackReplayNode;
      boundaryNode[5] = boundary.rootSegmentID;
      return boundaryNode;
    }
    function trackPostpone(request, trackedPostpones, task, segment) {
      segment.status = 5;
      var keyPath = task.keyPath, boundary = task.blockedBoundary;
      if (null === boundary)
        segment.id = request.nextSegmentId++, trackedPostpones.rootSlots = segment.id, null !== request.completedRootSegment && (request.completedRootSegment.status = 5);
      else {
        if (null !== boundary && 0 === boundary.status) {
          var boundaryNode = trackPostponedBoundary(
            request,
            trackedPostpones,
            boundary
          );
          if (boundary.trackedContentKeyPath === keyPath && -1 === task.childIndex) {
            -1 === segment.id && (segment.id = segment.parentFlushed ? boundary.rootSegmentID : request.nextSegmentId++);
            boundaryNode[3] = segment.id;
            return;
          }
        }
        -1 === segment.id && (segment.id = segment.parentFlushed && null !== boundary ? boundary.rootSegmentID : request.nextSegmentId++);
        if (-1 === task.childIndex)
          null === keyPath ? trackedPostpones.rootSlots = segment.id : (task = trackedPostpones.workingMap.get(keyPath), void 0 === task ? (task = [keyPath[1], keyPath[2], [], segment.id], addToReplayParent(task, keyPath[0], trackedPostpones)) : task[3] = segment.id);
        else {
          if (null === keyPath)
            if (request = trackedPostpones.rootSlots, null === request)
              request = trackedPostpones.rootSlots = {};
            else {
              if ("number" === typeof request)
                throw Error(
                  "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
                );
            }
          else if (boundary = trackedPostpones.workingMap, boundaryNode = boundary.get(keyPath), void 0 === boundaryNode)
            request = {}, boundaryNode = [keyPath[1], keyPath[2], [], request], boundary.set(keyPath, boundaryNode), addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
          else if (request = boundaryNode[3], null === request)
            request = boundaryNode[3] = {};
          else if ("number" === typeof request)
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          request[task.childIndex] = segment.id;
        }
      }
    }
    function untrackBoundary(request, boundary) {
      request = request.trackedPostpones;
      null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState2) {
      return createReplayTask(
        request,
        thenableState2,
        task.replay,
        task.node,
        task.childIndex,
        task.blockedBoundary,
        task.hoistableState,
        task.abortSet,
        task.keyPath,
        task.formatContext,
        task.context,
        task.treeContext,
        task.row,
        task.componentStack
      );
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState2) {
      var segment = task.blockedSegment, newSegment = createPendingSegment(
        request,
        segment.chunks.length,
        null,
        task.formatContext,
        segment.lastPushedText,
        true
      );
      segment.children.push(newSegment);
      segment.lastPushedText = false;
      return createRenderTask(
        request,
        thenableState2,
        task.node,
        task.childIndex,
        task.blockedBoundary,
        newSegment,
        task.blockedPreamble,
        task.hoistableState,
        task.abortSet,
        task.keyPath,
        task.formatContext,
        task.context,
        task.treeContext,
        task.row,
        task.componentStack
      );
    }
    function renderNode(request, task, node, childIndex) {
      var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
      if (null === segment) {
        segment = task.replay;
        try {
          return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
          if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, 12 !== request.status && "object" === typeof node && null !== node) {
            if ("function" === typeof node.then) {
              childIndex = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
              request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
              node.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              task.replay = segment;
              switchContext(previousContext);
              return;
            }
            if ("Maximum call stack size exceeded" === node.message) {
              node = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
              node = spawnNewSuspendedReplayTask(request, task, node);
              request.pingedTasks.push(node);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              task.replay = segment;
              switchContext(previousContext);
              return;
            }
          }
        }
      } else {
        var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
        try {
          return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue$62) {
          if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$62 === SuspenseException ? getSuspendedThenable() : thrownValue$62, 12 !== request.status && "object" === typeof node && null !== node) {
            if ("function" === typeof node.then) {
              segment = node;
              node = thrownValue$62 === SuspenseException ? getThenableStateAfterSuspending() : null;
              request = spawnNewSuspendedRenderTask(request, task, node).ping;
              segment.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext(previousContext);
              return;
            }
            if ("Maximum call stack size exceeded" === node.message) {
              segment = thrownValue$62 === SuspenseException ? getThenableStateAfterSuspending() : null;
              segment = spawnNewSuspendedRenderTask(request, task, segment);
              request.pingedTasks.push(segment);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext(previousContext);
              return;
            }
          }
        }
      }
      task.formatContext = previousFormatContext;
      task.context = previousContext;
      task.keyPath = previousKeyPath;
      task.treeContext = previousTreeContext;
      switchContext(previousContext);
      throw node;
    }
    function abortTaskSoft(task) {
      var boundary = task.blockedBoundary, segment = task.blockedSegment;
      null !== segment && (segment.status = 3, finishedTask(this, boundary, task.row, segment));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error, errorDigest$jscomp$0) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (4 === node.length)
          abortRemainingReplayNodes(
            request$jscomp$0,
            boundary,
            node[2],
            node[3],
            error,
            errorDigest$jscomp$0
          );
        else {
          node = node[5];
          var request = request$jscomp$0, errorDigest = errorDigest$jscomp$0, resumedBoundary = createSuspenseBoundary(
            request,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          resumedBoundary.parentFlushed = true;
          resumedBoundary.rootSegmentID = node;
          resumedBoundary.status = 4;
          resumedBoundary.errorDigest = errorDigest;
          resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
        }
      }
      nodes.length = 0;
      if (null !== slots) {
        if (null === boundary)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        4 !== boundary.status && (boundary.status = 4, boundary.errorDigest = errorDigest$jscomp$0, boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
        if ("object" === typeof slots) for (var index in slots) delete slots[index];
      }
    }
    function abortTask(task, request, error) {
      var boundary = task.blockedBoundary, segment = task.blockedSegment;
      if (null !== segment) {
        if (6 === segment.status) return;
        segment.status = 3;
      }
      var errorInfo = getThrownInfo(task.componentStack);
      if (null === boundary) {
        if (13 !== request.status && 14 !== request.status) {
          boundary = task.replay;
          if (null === boundary) {
            null !== request.trackedPostpones && null !== segment ? (boundary = request.trackedPostpones, logRecoverableError(request, error, errorInfo), trackPostpone(request, boundary, task, segment), finishedTask(request, null, task.row, segment)) : (logRecoverableError(request, error, errorInfo), fatalError(request, error));
            return;
          }
          boundary.pendingTasks--;
          0 === boundary.pendingTasks && 0 < boundary.nodes.length && (segment = logRecoverableError(request, error, errorInfo), abortRemainingReplayNodes(
            request,
            null,
            boundary.nodes,
            boundary.slots,
            error,
            segment
          ));
          request.pendingRootTasks--;
          0 === request.pendingRootTasks && completeShell(request);
        }
      } else {
        var trackedPostpones$63 = request.trackedPostpones;
        if (4 !== boundary.status) {
          if (null !== trackedPostpones$63 && null !== segment)
            return logRecoverableError(request, error, errorInfo), trackPostpone(request, trackedPostpones$63, task, segment), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, error);
            }), boundary.fallbackAbortableTasks.clear(), finishedTask(request, boundary, task.row, segment);
          boundary.status = 4;
          segment = logRecoverableError(request, error, errorInfo);
          boundary.status = 4;
          boundary.errorDigest = segment;
          untrackBoundary(request, boundary);
          boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
        }
        boundary.pendingTasks--;
        segment = boundary.row;
        null !== segment && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
        boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
          return abortTask(fallbackTask, request, error);
        });
        boundary.fallbackAbortableTasks.clear();
      }
      task = task.row;
      null !== task && 0 === --task.pendingTasks && finishSuspenseListRow(request, task);
      request.allPendingTasks--;
      0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
      try {
        var renderState = request.renderState, onHeaders = renderState.onHeaders;
        if (onHeaders) {
          var headers = renderState.headers;
          if (headers) {
            renderState.headers = null;
            var linkHeader = headers.preconnects;
            headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
            headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
            if (!shellComplete) {
              var queueIter = renderState.styles.values(), queueStep = queueIter.next();
              b: for (; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())
                for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
                  var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props, header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                    crossOrigin: props$jscomp$0.crossOrigin,
                    integrity: props$jscomp$0.integrity,
                    nonce: props$jscomp$0.nonce,
                    type: props$jscomp$0.type,
                    fetchPriority: props$jscomp$0.fetchPriority,
                    referrerPolicy: props$jscomp$0.referrerPolicy,
                    media: props$jscomp$0.media
                  });
                  if (0 <= (headers.remainingCapacity -= header.length + 2))
                    renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS;
                  else break b;
                }
            }
            linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
          }
        }
      } catch (error) {
        logRecoverableError(request, error, {});
      }
    }
    function completeShell(request) {
      null === request.trackedPostpones && safelyEmitEarlyPreloads(request, true);
      null === request.trackedPostpones && preparePreamble(request);
      request.onShellError = noop;
      request = request.onShellReady;
      request();
    }
    function completeAll(request) {
      safelyEmitEarlyPreloads(
        request,
        null === request.trackedPostpones ? true : null === request.completedRootSegment || 5 !== request.completedRootSegment.status
      );
      preparePreamble(request);
      request = request.onAllReady;
      request();
    }
    function queueCompletedSegment(boundary, segment) {
      if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
        var childSegment = segment.children[0];
        childSegment.id = segment.id;
        childSegment.parentFlushed = true;
        1 !== childSegment.status && 3 !== childSegment.status && 4 !== childSegment.status || queueCompletedSegment(boundary, childSegment);
      } else boundary.completedSegments.push(segment);
    }
    function finishedTask(request, boundary, row, segment) {
      null !== row && (0 === --row.pendingTasks ? finishSuspenseListRow(request, row) : row.together && tryToResolveTogetherRow(request, row));
      request.allPendingTasks--;
      if (null === boundary) {
        if (null !== segment && segment.parentFlushed) {
          if (null !== request.completedRootSegment)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          request.completedRootSegment = segment;
        }
        request.pendingRootTasks--;
        0 === request.pendingRootTasks && completeShell(request);
      } else if (boundary.pendingTasks--, 4 !== boundary.status)
        if (0 === boundary.pendingTasks)
          if (0 === boundary.status && (boundary.status = 1), null !== segment && segment.parentFlushed && (1 === segment.status || 3 === segment.status) && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), 1 === boundary.status)
            row = boundary.row, null !== row && hoistHoistables(row.hoistables, boundary.contentState), isEligibleForOutlining(request, boundary) || (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row)), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.contentPreamble && preparePreamble(request);
          else {
            if (5 === boundary.status && (boundary = boundary.row, null !== boundary)) {
              if (null !== request.trackedPostpones) {
                row = request.trackedPostpones;
                var postponedRow = boundary.next;
                if (null !== postponedRow && (segment = postponedRow.boundaries, null !== segment))
                  for (postponedRow.boundaries = null, postponedRow = 0; postponedRow < segment.length; postponedRow++) {
                    var postponedBoundary = segment[postponedRow];
                    trackPostponedBoundary(request, row, postponedBoundary);
                    finishedTask(request, postponedBoundary, null, null);
                  }
              }
              0 === --boundary.pendingTasks && finishSuspenseListRow(request, boundary);
            }
          }
        else
          null === segment || !segment.parentFlushed || 1 !== segment.status && 3 !== segment.status || (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)), boundary = boundary.row, null !== boundary && boundary.together && tryToResolveTogetherRow(request, boundary);
      0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$2) {
      if (14 !== request$jscomp$2.status && 13 !== request$jscomp$2.status) {
        var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = HooksDispatcher;
        var prevAsyncDispatcher = ReactSharedInternals.A;
        ReactSharedInternals.A = DefaultAsyncDispatcher;
        var prevRequest = currentRequest;
        currentRequest = request$jscomp$2;
        var prevResumableState = currentResumableState;
        currentResumableState = request$jscomp$2.resumableState;
        try {
          var pingedTasks = request$jscomp$2.pingedTasks, i;
          for (i = 0; i < pingedTasks.length; i++) {
            var task = pingedTasks[i], request = request$jscomp$2, segment = task.blockedSegment;
            if (null === segment) {
              var request$jscomp$0 = request;
              if (0 !== task.replay.pendingTasks) {
                switchContext(task.context);
                try {
                  "number" === typeof task.replay.slots ? resumeNode(
                    request$jscomp$0,
                    task,
                    task.replay.slots,
                    task.node,
                    task.childIndex
                  ) : retryNode(request$jscomp$0, task);
                  if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  task.replay.pendingTasks--;
                  task.abortSet.delete(task);
                  finishedTask(
                    request$jscomp$0,
                    task.blockedBoundary,
                    task.row,
                    null
                  );
                } catch (thrownValue) {
                  resetHooksState();
                  var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                  if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                    var ping = task.ping;
                    x.then(ping, ping);
                    task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
                  } else {
                    task.replay.pendingTasks--;
                    task.abortSet.delete(task);
                    var errorInfo = getThrownInfo(task.componentStack);
                    request = void 0;
                    var request$jscomp$1 = request$jscomp$0, boundary = task.blockedBoundary, error$jscomp$0 = 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, replayNodes = task.replay.nodes, resumeSlots = task.replay.slots;
                    request = logRecoverableError(
                      request$jscomp$1,
                      error$jscomp$0,
                      errorInfo
                    );
                    abortRemainingReplayNodes(
                      request$jscomp$1,
                      boundary,
                      replayNodes,
                      resumeSlots,
                      error$jscomp$0,
                      request
                    );
                    request$jscomp$0.pendingRootTasks--;
                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                    request$jscomp$0.allPendingTasks--;
                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                  }
                } finally {
                }
              }
            } else if (request$jscomp$0 = void 0, request$jscomp$1 = segment, 0 === request$jscomp$1.status) {
              request$jscomp$1.status = 6;
              switchContext(task.context);
              var childrenLength = request$jscomp$1.children.length, chunkLength = request$jscomp$1.chunks.length;
              try {
                retryNode(request, task), pushSegmentFinale(
                  request$jscomp$1.chunks,
                  request.renderState,
                  request$jscomp$1.lastPushedText,
                  request$jscomp$1.textEmbedded
                ), task.abortSet.delete(task), request$jscomp$1.status = 1, finishedTask(
                  request,
                  task.blockedBoundary,
                  task.row,
                  request$jscomp$1
                );
              } catch (thrownValue) {
                resetHooksState();
                request$jscomp$1.children.length = childrenLength;
                request$jscomp$1.chunks.length = chunkLength;
                var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                if (12 === request.status && null !== request.trackedPostpones) {
                  var trackedPostpones = request.trackedPostpones, thrownInfo = getThrownInfo(task.componentStack);
                  task.abortSet.delete(task);
                  logRecoverableError(request, x$jscomp$0, thrownInfo);
                  trackPostpone(request, trackedPostpones, task, request$jscomp$1);
                  finishedTask(
                    request,
                    task.blockedBoundary,
                    task.row,
                    request$jscomp$1
                  );
                } else if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                  request$jscomp$1.status = 0;
                  task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
                  var ping$jscomp$0 = task.ping;
                  x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                } else {
                  var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
                  task.abortSet.delete(task);
                  request$jscomp$1.status = 4;
                  var boundary$jscomp$0 = task.blockedBoundary, row = task.row;
                  null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
                  request.allPendingTasks--;
                  request$jscomp$0 = logRecoverableError(
                    request,
                    x$jscomp$0,
                    errorInfo$jscomp$0
                  );
                  if (null === boundary$jscomp$0) fatalError(request, x$jscomp$0);
                  else if (boundary$jscomp$0.pendingTasks--, 4 !== boundary$jscomp$0.status) {
                    boundary$jscomp$0.status = 4;
                    boundary$jscomp$0.errorDigest = request$jscomp$0;
                    untrackBoundary(request, boundary$jscomp$0);
                    var boundaryRow = boundary$jscomp$0.row;
                    null !== boundaryRow && 0 === --boundaryRow.pendingTasks && finishSuspenseListRow(request, boundaryRow);
                    boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0);
                    0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.contentPreamble && preparePreamble(request);
                  }
                  0 === request.allPendingTasks && completeAll(request);
                }
              } finally {
              }
            }
          }
          pingedTasks.splice(0, i);
          null !== request$jscomp$2.destination && flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
        } catch (error) {
          logRecoverableError(request$jscomp$2, error, {}), fatalError(request$jscomp$2, error);
        } finally {
          currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
        }
      }
    }
    function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
      segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
      for (var pendingPreambles = false, i = 0; i < segment.children.length; i++)
        pendingPreambles = preparePreambleFromSegment(
          request,
          segment.children[i],
          collectedPreambleSegments
        ) || pendingPreambles;
      return pendingPreambles;
    }
    function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
      var boundary = segment.boundary;
      if (null === boundary)
        return preparePreambleFromSubtree(
          request,
          segment,
          collectedPreambleSegments
        );
      var preamble = boundary.contentPreamble, fallbackPreamble = boundary.fallbackPreamble;
      if (null === preamble || null === fallbackPreamble) return false;
      switch (boundary.status) {
        case 1:
          hoistPreambleState(request.renderState, preamble);
          request.byteSize += boundary.byteSize;
          segment = boundary.completedSegments[0];
          if (!segment)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return preparePreambleFromSubtree(
            request,
            segment,
            collectedPreambleSegments
          );
        case 5:
          if (null !== request.trackedPostpones) return true;
        case 4:
          if (1 === segment.status)
            return hoistPreambleState(request.renderState, fallbackPreamble), preparePreambleFromSubtree(
              request,
              segment,
              collectedPreambleSegments
            );
        default:
          return true;
      }
    }
    function preparePreamble(request) {
      if (request.completedRootSegment && null === request.completedPreambleSegments) {
        var collectedPreambleSegments = [], originalRequestByteSize = request.byteSize, hasPendingPreambles = preparePreambleFromSegment(
          request,
          request.completedRootSegment,
          collectedPreambleSegments
        ), preamble = request.renderState.preamble;
        false === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks ? request.completedPreambleSegments = collectedPreambleSegments : request.byteSize = originalRequestByteSize;
      }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
      segment.parentFlushed = true;
      switch (segment.status) {
        case 0:
          segment.id = request.nextSegmentId++;
        case 5:
          return hoistableState = segment.id, segment.lastPushedText = false, segment.textEmbedded = false, request = request.renderState, destination.push('<template id="'), destination.push(request.placeholderPrefix), request = hoistableState.toString(16), destination.push(request), destination.push('"></template>');
        case 1:
          segment.status = 2;
          var r = true, chunks = segment.chunks, chunkIdx = 0;
          segment = segment.children;
          for (var childIdx = 0; childIdx < segment.length; childIdx++) {
            for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)
              destination.push(chunks[chunkIdx]);
            r = flushSegment(request, destination, r, hoistableState);
          }
          for (; chunkIdx < chunks.length - 1; chunkIdx++)
            destination.push(chunks[chunkIdx]);
          chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
          return r;
        case 3:
          return true;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    var flushedByteSize = 0;
    function flushSegment(request, destination, segment, hoistableState) {
      var boundary = segment.boundary;
      if (null === boundary)
        return flushSubtree(request, destination, segment, hoistableState);
      boundary.parentFlushed = true;
      if (4 === boundary.status) {
        var row = boundary.row;
        null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
        request.renderState.generateStaticMarkup || (boundary = boundary.errorDigest, destination.push("<!--$!-->"), destination.push("<template"), boundary && (destination.push(' data-dgst="'), boundary = escapeTextForBrowser(boundary), destination.push(boundary), destination.push('"')), destination.push("></template>"));
        flushSubtree(request, destination, segment, hoistableState);
        request = request.renderState.generateStaticMarkup ? true : destination.push("<!--/$-->");
        return request;
      }
      if (1 !== boundary.status)
        return 0 === boundary.status && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(
          destination,
          request.renderState,
          boundary.rootSegmentID
        ), hoistableState && hoistHoistables(hoistableState, boundary.fallbackState), flushSubtree(request, destination, segment, hoistableState), destination.push("<!--/$-->");
      if (!flushingPartialBoundaries && isEligibleForOutlining(request, boundary) && flushedByteSize + boundary.byteSize > request.progressiveChunkSize)
        return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(
          destination,
          request.renderState,
          boundary.rootSegmentID
        ), flushSubtree(request, destination, segment, hoistableState), destination.push("<!--/$-->");
      flushedByteSize += boundary.byteSize;
      hoistableState && hoistHoistables(hoistableState, boundary.contentState);
      segment = boundary.row;
      null !== segment && isEligibleForOutlining(request, boundary) && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
      request.renderState.generateStaticMarkup || destination.push("<!--$-->");
      segment = boundary.completedSegments;
      if (1 !== segment.length)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      flushSegment(request, destination, segment[0], hoistableState);
      request = request.renderState.generateStaticMarkup ? true : destination.push("<!--/$-->");
      return request;
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
      writeStartSegment(
        destination,
        request.renderState,
        segment.parentFormatContext,
        segment.id
      );
      flushSegment(request, destination, segment, hoistableState);
      return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
      flushedByteSize = boundary.byteSize;
      for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)
        flushPartiallyCompletedSegment(
          request,
          destination,
          boundary,
          completedSegments[i]
        );
      completedSegments.length = 0;
      completedSegments = boundary.row;
      null !== completedSegments && isEligibleForOutlining(request, boundary) && 0 === --completedSegments.pendingTasks && finishSuspenseListRow(request, completedSegments);
      writeHoistablesForBoundary(
        destination,
        boundary.contentState,
        request.renderState
      );
      completedSegments = request.resumableState;
      request = request.renderState;
      i = boundary.rootSegmentID;
      boundary = boundary.contentState;
      var requiresStyleInsertion = request.stylesToHoist;
      request.stylesToHoist = false;
      destination.push(request.startInlineScript);
      destination.push(">");
      requiresStyleInsertion ? (0 === (completedSegments.instructions & 4) && (completedSegments.instructions |= 4, destination.push(
        '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
      )), 0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, destination.push(
        '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
      )), 0 === (completedSegments.instructions & 8) ? (completedSegments.instructions |= 8, destination.push(
        '$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("'
      )) : destination.push('$RR("')) : (0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, destination.push(
        '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
      )), destination.push('$RC("'));
      completedSegments = i.toString(16);
      destination.push(request.boundaryPrefix);
      destination.push(completedSegments);
      destination.push('","');
      destination.push(request.segmentPrefix);
      destination.push(completedSegments);
      requiresStyleInsertion ? (destination.push('",'), writeStyleResourceDependenciesInJS(destination, boundary)) : destination.push('"');
      boundary = destination.push(")</script>");
      return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
      if (2 === segment.status) return true;
      var hoistableState = boundary.contentState, segmentID = segment.id;
      if (-1 === segmentID) {
        if (-1 === (segment.id = boundary.rootSegmentID))
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return flushSegmentContainer(request, destination, segment, hoistableState);
      }
      if (segmentID === boundary.rootSegmentID)
        return flushSegmentContainer(request, destination, segment, hoistableState);
      flushSegmentContainer(request, destination, segment, hoistableState);
      boundary = request.resumableState;
      request = request.renderState;
      destination.push(request.startInlineScript);
      destination.push(">");
      0 === (boundary.instructions & 1) ? (boundary.instructions |= 1, destination.push(
        '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
      )) : destination.push('$RS("');
      destination.push(request.segmentPrefix);
      segmentID = segmentID.toString(16);
      destination.push(segmentID);
      destination.push('","');
      destination.push(request.placeholderPrefix);
      destination.push(segmentID);
      destination = destination.push('")</script>');
      return destination;
    }
    var flushingPartialBoundaries = false;
    function flushCompletedQueues(request, destination) {
      try {
        if (!(0 < request.pendingRootTasks)) {
          var i, completedRootSegment = request.completedRootSegment;
          if (null !== completedRootSegment) {
            if (5 === completedRootSegment.status) return;
            var completedPreambleSegments = request.completedPreambleSegments;
            if (null === completedPreambleSegments) return;
            flushedByteSize = request.byteSize;
            var resumableState = request.resumableState, renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
            if (htmlChunks) {
              for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
                destination.push(htmlChunks[i$jscomp$0]);
              if (headChunks)
                for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
                  destination.push(headChunks[i$jscomp$0]);
              else {
                var chunk = startChunkForTag("head");
                destination.push(chunk);
                destination.push(">");
              }
            } else if (headChunks)
              for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
                destination.push(headChunks[i$jscomp$0]);
            var charsetChunks = renderState.charsetChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
              destination.push(charsetChunks[i$jscomp$0]);
            charsetChunks.length = 0;
            renderState.preconnects.forEach(flushResource, destination);
            renderState.preconnects.clear();
            var viewportChunks = renderState.viewportChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
              destination.push(viewportChunks[i$jscomp$0]);
            viewportChunks.length = 0;
            renderState.fontPreloads.forEach(flushResource, destination);
            renderState.fontPreloads.clear();
            renderState.highImagePreloads.forEach(flushResource, destination);
            renderState.highImagePreloads.clear();
            currentlyFlushingRenderState = renderState;
            renderState.styles.forEach(flushStylesInPreamble, destination);
            currentlyFlushingRenderState = null;
            var importMapChunks = renderState.importMapChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
              destination.push(importMapChunks[i$jscomp$0]);
            importMapChunks.length = 0;
            renderState.bootstrapScripts.forEach(flushResource, destination);
            renderState.scripts.forEach(flushResource, destination);
            renderState.scripts.clear();
            renderState.bulkPreloads.forEach(flushResource, destination);
            renderState.bulkPreloads.clear();
            resumableState.instructions |= 32;
            var hoistableChunks = renderState.hoistableChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
              destination.push(hoistableChunks[i$jscomp$0]);
            for (resumableState = hoistableChunks.length = 0; resumableState < completedPreambleSegments.length; resumableState++) {
              var segments = completedPreambleSegments[resumableState];
              for (renderState = 0; renderState < segments.length; renderState++)
                flushSegment(request, destination, segments[renderState], null);
            }
            var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
            if (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) {
              var chunk$jscomp$0 = endChunkForTag("head");
              destination.push(chunk$jscomp$0);
            }
            var bodyChunks = preamble$jscomp$0.bodyChunks;
            if (bodyChunks)
              for (completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++)
                destination.push(bodyChunks[completedPreambleSegments]);
            flushSegment(request, destination, completedRootSegment, null);
            request.completedRootSegment = null;
            var renderState$jscomp$0 = request.renderState;
            if (0 !== request.allPendingTasks || 0 !== request.clientRenderedBoundaries.length || 0 !== request.completedBoundaries.length || null !== request.trackedPostpones && (0 !== request.trackedPostpones.rootNodes.length || null !== request.trackedPostpones.rootSlots)) {
              var resumableState$jscomp$0 = request.resumableState;
              if (0 === (resumableState$jscomp$0.instructions & 64)) {
                resumableState$jscomp$0.instructions |= 64;
                destination.push(renderState$jscomp$0.startInlineScript);
                if (0 === (resumableState$jscomp$0.instructions & 32)) {
                  resumableState$jscomp$0.instructions |= 32;
                  var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
                  destination.push(' id="');
                  var chunk$jscomp$1 = escapeTextForBrowser(shellId);
                  destination.push(chunk$jscomp$1);
                  destination.push('"');
                }
                destination.push(">");
                destination.push(
                  "requestAnimationFrame(function(){$RT=performance.now()});"
                );
                destination.push("</script>");
              }
            }
            writeBootstrap(destination, renderState$jscomp$0);
          }
          var renderState$jscomp$1 = request.renderState;
          completedRootSegment = 0;
          var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
          for (completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)
            destination.push(viewportChunks$jscomp$0[completedRootSegment]);
          viewportChunks$jscomp$0.length = 0;
          renderState$jscomp$1.preconnects.forEach(flushResource, destination);
          renderState$jscomp$1.preconnects.clear();
          renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
          renderState$jscomp$1.fontPreloads.clear();
          renderState$jscomp$1.highImagePreloads.forEach(
            flushResource,
            destination
          );
          renderState$jscomp$1.highImagePreloads.clear();
          renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
          renderState$jscomp$1.scripts.forEach(flushResource, destination);
          renderState$jscomp$1.scripts.clear();
          renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
          renderState$jscomp$1.bulkPreloads.clear();
          var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
          for (completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)
            destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
          hoistableChunks$jscomp$0.length = 0;
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            renderState$jscomp$1 = destination;
            var resumableState$jscomp$1 = request.resumableState, renderState$jscomp$2 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest;
            renderState$jscomp$1.push(renderState$jscomp$2.startInlineScript);
            renderState$jscomp$1.push(">");
            0 === (resumableState$jscomp$1.instructions & 4) ? (resumableState$jscomp$1.instructions |= 4, renderState$jscomp$1.push(
              '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
            )) : renderState$jscomp$1.push('$RX("');
            renderState$jscomp$1.push(renderState$jscomp$2.boundaryPrefix);
            var chunk$jscomp$2 = id.toString(16);
            renderState$jscomp$1.push(chunk$jscomp$2);
            renderState$jscomp$1.push('"');
            if (errorDigest) {
              renderState$jscomp$1.push(",");
              var chunk$jscomp$3 = escapeJSStringsForInstructionScripts(
                errorDigest || ""
              );
              renderState$jscomp$1.push(chunk$jscomp$3);
            }
            var JSCompiler_inline_result = renderState$jscomp$1.push(")</script>");
            if (!JSCompiler_inline_result) {
              request.destination = null;
              i++;
              clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++)
            if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
              request.destination = null;
              i++;
              completedBoundaries.splice(0, i);
              return;
            }
          completedBoundaries.splice(0, i);
          flushingPartialBoundaries = true;
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var boundary$69 = partialBoundaries[i];
            a: {
              clientRenderedBoundaries = request;
              boundary = destination;
              flushedByteSize = boundary$69.byteSize;
              var completedSegments = boundary$69.completedSegments;
              for (JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)
                if (!flushPartiallyCompletedSegment(
                  clientRenderedBoundaries,
                  boundary,
                  boundary$69,
                  completedSegments[JSCompiler_inline_result]
                )) {
                  JSCompiler_inline_result++;
                  completedSegments.splice(0, JSCompiler_inline_result);
                  var JSCompiler_inline_result$jscomp$0 = false;
                  break a;
                }
              completedSegments.splice(0, JSCompiler_inline_result);
              var row = boundary$69.row;
              null !== row && row.together && 1 === boundary$69.pendingTasks && (1 === row.pendingTasks ? unblockSuspenseListRow(
                clientRenderedBoundaries,
                row,
                row.hoistables
              ) : row.pendingTasks--);
              JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(
                boundary,
                boundary$69.contentState,
                clientRenderedBoundaries.renderState
              );
            }
            if (!JSCompiler_inline_result$jscomp$0) {
              request.destination = null;
              i++;
              partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          flushingPartialBoundaries = false;
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++)
            if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
              request.destination = null;
              i++;
              largeBoundaries.splice(0, i);
              return;
            }
          largeBoundaries.splice(0, i);
        }
      } finally {
        flushingPartialBoundaries = false, 0 === request.allPendingTasks && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length && (request.flushScheduled = false, i = request.resumableState, i.hasBody && (partialBoundaries = endChunkForTag("body"), destination.push(partialBoundaries)), i.hasHtml && (i = endChunkForTag("html"), destination.push(i)), request.status = 14, destination.push(null), request.destination = null);
      }
    }
    function enqueueFlush(request) {
      if (false === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination) {
        request.flushScheduled = true;
        var destination = request.destination;
        destination ? flushCompletedQueues(request, destination) : request.flushScheduled = false;
      }
    }
    function startFlowing(request, destination) {
      if (13 === request.status)
        request.status = 14, destination.destroy(request.fatalError);
      else if (14 !== request.status && null === request.destination) {
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error) {
          logRecoverableError(request, error, {}), fatalError(request, error);
        }
      }
    }
    function abort(request, reason) {
      if (11 === request.status || 10 === request.status) request.status = 12;
      try {
        var abortableTasks = request.abortableTasks;
        if (0 < abortableTasks.size) {
          var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
          request.fatalError = error;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, error);
          });
          abortableTasks.clear();
        }
        null !== request.destination && flushCompletedQueues(request, request.destination);
      } catch (error$71) {
        logRecoverableError(request, error$71, {}), fatalError(request, error$71);
      }
    }
    function addToReplayParent(node, parentKeyPath, trackedPostpones) {
      if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
      else {
        var workingMap = trackedPostpones.workingMap, parentNode = workingMap.get(parentKeyPath);
        void 0 === parentNode && (parentNode = [parentKeyPath[1], parentKeyPath[2], [], null], workingMap.set(parentKeyPath, parentNode), addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
        parentNode[2].push(node);
      }
    }
    function onError() {
    }
    function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
      var didFatal = false, fatalError2 = null, result = "", readyToStream = false;
      options = createResumableState(options ? options.identifierPrefix : void 0);
      children = createRequest(
        children,
        options,
        createRenderState(options, generateStaticMarkup),
        createFormatContext(0, null, 0, null),
        Infinity,
        onError,
        void 0,
        function() {
          readyToStream = true;
        },
        void 0,
        void 0,
        void 0
      );
      children.flushScheduled = null !== children.destination;
      performWork(children);
      10 === children.status && (children.status = 11);
      null === children.trackedPostpones && safelyEmitEarlyPreloads(children, 0 === children.pendingRootTasks);
      abort(children, abortReason);
      startFlowing(children, {
        push: function(chunk) {
          null !== chunk && (result += chunk);
          return true;
        },
        destroy: function(error) {
          didFatal = true;
          fatalError2 = error;
        }
      });
      if (didFatal && fatalError2 !== abortReason) throw fatalError2;
      if (!readyToStream)
        throw Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
      return result;
    }
    exports.renderToStaticMarkup = function(children, options) {
      return renderToStringImpl(
        children,
        options,
        true,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
      );
    };
    exports.renderToString = function(children, options) {
      return renderToStringImpl(
        children,
        options,
        false,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
      );
    };
    exports.version = "19.2.3";
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.js
var require_react_dom_server_node_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.production.js"(exports) {
    "use strict";
    var util = __require("util");
    var crypto = __require("crypto");
    var async_hooks = __require("async_hooks");
    var React5 = require_react();
    var ReactDOM = require_react_dom();
    var stream = __require("stream");
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_SCOPE_TYPE = /* @__PURE__ */ Symbol.for("react.scope");
    var REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity");
    var REACT_LEGACY_HIDDEN_TYPE = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
    var REACT_MEMO_CACHE_SENTINEL = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel");
    var REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var isArrayImpl = Array.isArray;
    var scheduleMicrotask = queueMicrotask;
    function flushBuffered(destination) {
      "function" === typeof destination.flush && destination.flush();
    }
    var currentView = null;
    var writtenBytes = 0;
    var destinationHasCapacity$1 = true;
    function writeChunk(destination, chunk) {
      if ("string" === typeof chunk) {
        if (0 !== chunk.length)
          if (2048 < 3 * chunk.length)
            0 < writtenBytes && (writeToDestination(
              destination,
              currentView.subarray(0, writtenBytes)
            ), currentView = new Uint8Array(2048), writtenBytes = 0), writeToDestination(destination, chunk);
          else {
            var target = currentView;
            0 < writtenBytes && (target = currentView.subarray(writtenBytes));
            target = textEncoder.encodeInto(chunk, target);
            var read = target.read;
            writtenBytes += target.written;
            read < chunk.length && (writeToDestination(
              destination,
              currentView.subarray(0, writtenBytes)
            ), currentView = new Uint8Array(2048), writtenBytes = textEncoder.encodeInto(
              chunk.slice(read),
              currentView
            ).written);
            2048 === writtenBytes && (writeToDestination(destination, currentView), currentView = new Uint8Array(2048), writtenBytes = 0);
          }
      } else
        0 !== chunk.byteLength && (2048 < chunk.byteLength ? (0 < writtenBytes && (writeToDestination(
          destination,
          currentView.subarray(0, writtenBytes)
        ), currentView = new Uint8Array(2048), writtenBytes = 0), writeToDestination(destination, chunk)) : (target = currentView.length - writtenBytes, target < chunk.byteLength && (0 === target ? writeToDestination(destination, currentView) : (currentView.set(chunk.subarray(0, target), writtenBytes), writtenBytes += target, writeToDestination(destination, currentView), chunk = chunk.subarray(target)), currentView = new Uint8Array(2048), writtenBytes = 0), currentView.set(chunk, writtenBytes), writtenBytes += chunk.byteLength, 2048 === writtenBytes && (writeToDestination(destination, currentView), currentView = new Uint8Array(2048), writtenBytes = 0)));
    }
    function writeToDestination(destination, view) {
      destination = destination.write(view);
      destinationHasCapacity$1 = destinationHasCapacity$1 && destination;
    }
    function writeChunkAndReturn(destination, chunk) {
      writeChunk(destination, chunk);
      return destinationHasCapacity$1;
    }
    function completeWriting(destination) {
      currentView && 0 < writtenBytes && destination.write(currentView.subarray(0, writtenBytes));
      currentView = null;
      writtenBytes = 0;
      destinationHasCapacity$1 = true;
    }
    var textEncoder = new util.TextEncoder();
    function stringToPrecomputedChunk(content) {
      return textEncoder.encode(content);
    }
    function byteLengthOfChunk(chunk) {
      return "string" === typeof chunk ? Buffer.byteLength(chunk, "utf8") : chunk.byteLength;
    }
    var assign = Object.assign;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    );
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]);
    var matchHtmlRegExp = /["'&<>]/;
    function escapeTextForBrowser(text) {
      if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text)
        return "" + text;
      text = "" + text;
      var match = matchHtmlRegExp.exec(text);
      if (match) {
        var html = "", index, lastIndex = 0;
        for (index = match.index; index < text.length; index++) {
          switch (text.charCodeAt(index)) {
            case 34:
              match = "&quot;";
              break;
            case 38:
              match = "&amp;";
              break;
            case 39:
              match = "&#x27;";
              break;
            case 60:
              match = "&lt;";
              break;
            case 62:
              match = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html += text.slice(lastIndex, index));
          lastIndex = index + 1;
          html += match;
        }
        text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
      }
      return text;
    }
    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    var ReactSharedInternals = React5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    var sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    };
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: previousDispatcher.f,
      r: previousDispatcher.r,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    var PRELOAD_NO_CREDS = [];
    var currentlyFlushingRenderState = null;
    stringToPrecomputedChunk('"></template>');
    var startInlineScript = stringToPrecomputedChunk("<script");
    var endInlineScript = stringToPrecomputedChunk("</script>");
    var startScriptSrc = stringToPrecomputedChunk('<script src="');
    var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
    var scriptNonce = stringToPrecomputedChunk(' nonce="');
    var scriptIntegirty = stringToPrecomputedChunk(' integrity="');
    var scriptCrossOrigin = stringToPrecomputedChunk(' crossorigin="');
    var endAsyncScript = stringToPrecomputedChunk(' async=""></script>');
    var startInlineStyle = stringToPrecomputedChunk("<style");
    var scriptRegex = /(<\/|<)(s)(cript)/gi;
    function scriptReplacer(match, prefix2, s, suffix2) {
      return "" + prefix2 + ("s" === s ? "\\u0073" : "\\u0053") + suffix2;
    }
    var importMapScriptStart = stringToPrecomputedChunk(
      '<script type="importmap">'
    );
    var importMapScriptEnd = stringToPrecomputedChunk("</script>");
    function createRenderState(resumableState, nonce, externalRuntimeConfig, importMap, onHeaders, maxHeadersLength) {
      externalRuntimeConfig = "string" === typeof nonce ? nonce : nonce && nonce.script;
      var inlineScriptWithNonce = void 0 === externalRuntimeConfig ? startInlineScript : stringToPrecomputedChunk(
        '<script nonce="' + escapeTextForBrowser(externalRuntimeConfig) + '"'
      ), nonceStyle = "string" === typeof nonce ? void 0 : nonce && nonce.style, inlineStyleWithNonce = void 0 === nonceStyle ? startInlineStyle : stringToPrecomputedChunk(
        '<style nonce="' + escapeTextForBrowser(nonceStyle) + '"'
      ), idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
      void 0 !== bootstrapScriptContent && (bootstrapChunks.push(inlineScriptWithNonce), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(
        endOfStartTag,
        ("" + bootstrapScriptContent).replace(scriptRegex, scriptReplacer),
        endInlineScript
      ));
      bootstrapScriptContent = [];
      void 0 !== importMap && (bootstrapScriptContent.push(importMapScriptStart), bootstrapScriptContent.push(
        ("" + JSON.stringify(importMap)).replace(scriptRegex, scriptReplacer)
      ), bootstrapScriptContent.push(importMapScriptEnd));
      importMap = onHeaders ? {
        preconnects: "",
        fontPreloads: "",
        highImagePreloads: "",
        remainingCapacity: 2 + ("number" === typeof maxHeadersLength ? maxHeadersLength : 2e3)
      } : null;
      onHeaders = {
        placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
        segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
        boundaryPrefix: stringToPrecomputedChunk(idPrefix + "B:"),
        startInlineScript: inlineScriptWithNonce,
        startInlineStyle: inlineStyleWithNonce,
        preamble: createPreambleState(),
        externalRuntimeScript: null,
        bootstrapChunks,
        importMapChunks: bootstrapScriptContent,
        onHeaders,
        headers: importMap,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: { script: externalRuntimeConfig, style: nonceStyle },
        hoistableState: null,
        stylesToHoist: false
      };
      if (void 0 !== bootstrapScripts)
        for (importMap = 0; importMap < bootstrapScripts.length; importMap++)
          idPrefix = bootstrapScripts[importMap], nonceStyle = inlineScriptWithNonce = void 0, inlineStyleWithNonce = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce
          }, "string" === typeof idPrefix ? inlineStyleWithNonce.href = maxHeadersLength = idPrefix : (inlineStyleWithNonce.href = maxHeadersLength = idPrefix.src, inlineStyleWithNonce.integrity = nonceStyle = "string" === typeof idPrefix.integrity ? idPrefix.integrity : void 0, inlineStyleWithNonce.crossOrigin = inlineScriptWithNonce = "string" === typeof idPrefix || null == idPrefix.crossOrigin ? void 0 : "use-credentials" === idPrefix.crossOrigin ? "use-credentials" : ""), idPrefix = resumableState, bootstrapScriptContent = maxHeadersLength, idPrefix.scriptResources[bootstrapScriptContent] = null, idPrefix.moduleScriptResources[bootstrapScriptContent] = null, idPrefix = [], pushLinkImpl(idPrefix, inlineStyleWithNonce), onHeaders.bootstrapScripts.add(idPrefix), bootstrapChunks.push(
            startScriptSrc,
            escapeTextForBrowser(maxHeadersLength),
            attributeEnd
          ), externalRuntimeConfig && bootstrapChunks.push(
            scriptNonce,
            escapeTextForBrowser(externalRuntimeConfig),
            attributeEnd
          ), "string" === typeof nonceStyle && bootstrapChunks.push(
            scriptIntegirty,
            escapeTextForBrowser(nonceStyle),
            attributeEnd
          ), "string" === typeof inlineScriptWithNonce && bootstrapChunks.push(
            scriptCrossOrigin,
            escapeTextForBrowser(inlineScriptWithNonce),
            attributeEnd
          ), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endAsyncScript);
      if (void 0 !== bootstrapModules)
        for (nonce = 0; nonce < bootstrapModules.length; nonce++)
          nonceStyle = bootstrapModules[nonce], maxHeadersLength = importMap = void 0, inlineScriptWithNonce = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: externalRuntimeConfig
          }, "string" === typeof nonceStyle ? inlineScriptWithNonce.href = bootstrapScripts = nonceStyle : (inlineScriptWithNonce.href = bootstrapScripts = nonceStyle.src, inlineScriptWithNonce.integrity = maxHeadersLength = "string" === typeof nonceStyle.integrity ? nonceStyle.integrity : void 0, inlineScriptWithNonce.crossOrigin = importMap = "string" === typeof nonceStyle || null == nonceStyle.crossOrigin ? void 0 : "use-credentials" === nonceStyle.crossOrigin ? "use-credentials" : ""), nonceStyle = resumableState, inlineStyleWithNonce = bootstrapScripts, nonceStyle.scriptResources[inlineStyleWithNonce] = null, nonceStyle.moduleScriptResources[inlineStyleWithNonce] = null, nonceStyle = [], pushLinkImpl(nonceStyle, inlineScriptWithNonce), onHeaders.bootstrapScripts.add(nonceStyle), bootstrapChunks.push(
            startModuleSrc,
            escapeTextForBrowser(bootstrapScripts),
            attributeEnd
          ), externalRuntimeConfig && bootstrapChunks.push(
            scriptNonce,
            escapeTextForBrowser(externalRuntimeConfig),
            attributeEnd
          ), "string" === typeof maxHeadersLength && bootstrapChunks.push(
            scriptIntegirty,
            escapeTextForBrowser(maxHeadersLength),
            attributeEnd
          ), "string" === typeof importMap && bootstrapChunks.push(
            scriptCrossOrigin,
            escapeTextForBrowser(importMap),
            attributeEnd
          ), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(endAsyncScript);
      return onHeaders;
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
      return {
        idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent,
        bootstrapScripts,
        bootstrapModules,
        instructions: 0,
        hasBody: false,
        hasHtml: false,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function createPreambleState() {
      return { htmlChunks: null, headChunks: null, bodyChunks: null };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope, viewTransition) {
      return {
        insertionMode,
        selectedValue,
        tagScope,
        viewTransition
      };
    }
    function createRootFormatContext(namespaceURI) {
      return createFormatContext(
        "http://www.w3.org/2000/svg" === namespaceURI ? 4 : "http://www.w3.org/1998/Math/MathML" === namespaceURI ? 5 : 0,
        null,
        0,
        null
      );
    }
    function getChildFormatContext(parentContext, type, props) {
      var subtreeScope = parentContext.tagScope & -25;
      switch (type) {
        case "noscript":
          return createFormatContext(2, null, subtreeScope | 1, null);
        case "select":
          return createFormatContext(
            2,
            null != props.value ? props.value : props.defaultValue,
            subtreeScope,
            null
          );
        case "svg":
          return createFormatContext(4, null, subtreeScope, null);
        case "picture":
          return createFormatContext(2, null, subtreeScope | 2, null);
        case "math":
          return createFormatContext(5, null, subtreeScope, null);
        case "foreignObject":
          return createFormatContext(2, null, subtreeScope, null);
        case "table":
          return createFormatContext(6, null, subtreeScope, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return createFormatContext(7, null, subtreeScope, null);
        case "colgroup":
          return createFormatContext(9, null, subtreeScope, null);
        case "tr":
          return createFormatContext(8, null, subtreeScope, null);
        case "head":
          if (2 > parentContext.insertionMode)
            return createFormatContext(3, null, subtreeScope, null);
          break;
        case "html":
          if (0 === parentContext.insertionMode)
            return createFormatContext(1, null, subtreeScope, null);
      }
      return 6 <= parentContext.insertionMode || 2 > parentContext.insertionMode ? createFormatContext(2, null, subtreeScope, null) : parentContext.tagScope !== subtreeScope ? createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        subtreeScope,
        null
      ) : parentContext;
    }
    function getSuspenseViewTransition(parentViewTransition) {
      return null === parentViewTransition ? null : {
        update: parentViewTransition.update,
        enter: "none",
        exit: "none",
        share: parentViewTransition.update,
        name: parentViewTransition.autoName,
        autoName: parentViewTransition.autoName,
        nameIdx: 0
      };
    }
    function getSuspenseFallbackFormatContext(resumableState, parentContext) {
      parentContext.tagScope & 32 && (resumableState.instructions |= 128);
      return createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        parentContext.tagScope | 12,
        getSuspenseViewTransition(parentContext.viewTransition)
      );
    }
    function getSuspenseContentFormatContext(resumableState, parentContext) {
      resumableState = getSuspenseViewTransition(parentContext.viewTransition);
      var subtreeScope = parentContext.tagScope | 16;
      null !== resumableState && "none" !== resumableState.share && (subtreeScope |= 64);
      return createFormatContext(
        parentContext.insertionMode,
        parentContext.selectedValue,
        subtreeScope,
        resumableState
      );
    }
    var textSeparator = stringToPrecomputedChunk("<!-- -->");
    function pushTextInstance(target, text, renderState, textEmbedded) {
      if ("" === text) return textEmbedded;
      textEmbedded && target.push(textSeparator);
      target.push(escapeTextForBrowser(text));
      return true;
    }
    var styleNameCache = /* @__PURE__ */ new Map();
    var styleAttributeStart = stringToPrecomputedChunk(' style="');
    var styleAssign = stringToPrecomputedChunk(":");
    var styleSeparator = stringToPrecomputedChunk(";");
    function pushStyleAttribute(target, style) {
      if ("object" !== typeof style)
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var isFirst = true, styleName;
      for (styleName in style)
        if (hasOwnProperty.call(style, styleName)) {
          var styleValue = style[styleName];
          if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
            if (0 === styleName.indexOf("--")) {
              var nameChunk = escapeTextForBrowser(styleName);
              styleValue = escapeTextForBrowser(("" + styleValue).trim());
            } else
              nameChunk = styleNameCache.get(styleName), void 0 === nameChunk && (nameChunk = stringToPrecomputedChunk(
                escapeTextForBrowser(
                  styleName.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")
                )
              ), styleNameCache.set(styleName, nameChunk)), styleValue = "number" === typeof styleValue ? 0 === styleValue || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : escapeTextForBrowser(("" + styleValue).trim());
            isFirst ? (isFirst = false, target.push(
              styleAttributeStart,
              nameChunk,
              styleAssign,
              styleValue
            )) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
          }
        }
      isFirst || target.push(attributeEnd);
    }
    var attributeSeparator = stringToPrecomputedChunk(" ");
    var attributeAssign = stringToPrecomputedChunk('="');
    var attributeEnd = stringToPrecomputedChunk('"');
    var attributeEmptyString = stringToPrecomputedChunk('=""');
    function pushBooleanAttribute(target, name, value) {
      value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
    }
    function pushStringAttribute(target, name, value) {
      "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(
        attributeSeparator,
        name,
        attributeAssign,
        escapeTextForBrowser(value),
        attributeEnd
      );
    }
    var actionJavaScriptURL = stringToPrecomputedChunk(
      escapeTextForBrowser(
        "javascript:throw new Error('React form unexpectedly submitted.')"
      )
    );
    var startHiddenInputChunk = stringToPrecomputedChunk('<input type="hidden"');
    function pushAdditionalFormField(value, key) {
      this.push(startHiddenInputChunk);
      validateAdditionalFormField(value);
      pushStringAttribute(this, "name", key);
      pushStringAttribute(this, "value", value);
      this.push(endOfStartTagSelfClosing);
    }
    function validateAdditionalFormField(value) {
      if ("string" !== typeof value)
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function getCustomFormFields(resumableState, formAction) {
      if ("function" === typeof formAction.$$FORM_ACTION) {
        var id = resumableState.nextFormID++;
        resumableState = resumableState.idPrefix + id;
        try {
          var customFields = formAction.$$FORM_ACTION(resumableState);
          if (customFields) {
            var formData = customFields.data;
            null != formData && formData.forEach(validateAdditionalFormField);
          }
          return customFields;
        } catch (x) {
          if ("object" === typeof x && null !== x && "function" === typeof x.then)
            throw x;
        }
      }
      return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
      var formData = null;
      if ("function" === typeof formAction) {
        var customFields = getCustomFormFields(resumableState, formAction);
        null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(
          attributeSeparator,
          "formAction",
          attributeAssign,
          actionJavaScriptURL,
          attributeEnd
        ), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
      }
      null != name && pushAttribute(target, "name", name);
      null != formAction && pushAttribute(target, "formAction", formAction);
      null != formEncType && pushAttribute(target, "formEncType", formEncType);
      null != formMethod && pushAttribute(target, "formMethod", formMethod);
      null != formTarget && pushAttribute(target, "formTarget", formTarget);
      return formData;
    }
    function pushAttribute(target, name, value) {
      switch (name) {
        case "className":
          pushStringAttribute(target, "class", value);
          break;
        case "tabIndex":
          pushStringAttribute(target, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          pushStringAttribute(target, name, value);
          break;
        case "style":
          pushStyleAttribute(target, value);
          break;
        case "src":
        case "href":
          if ("" === value) break;
        case "action":
        case "formAction":
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value)
            break;
          value = sanitizeURL("" + value);
          target.push(
            attributeSeparator,
            name,
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          pushBooleanAttribute(target, name.toLowerCase(), value);
          break;
        case "xlinkHref":
          if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value)
            break;
          value = sanitizeURL("" + value);
          target.push(
            attributeSeparator,
            "xlink:href",
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          "function" !== typeof value && "symbol" !== typeof value && target.push(
            attributeSeparator,
            name,
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
          break;
        case "capture":
        case "download":
          true === value ? target.push(attributeSeparator, name, attributeEmptyString) : false !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(
            attributeSeparator,
            name,
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(
            attributeSeparator,
            name,
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "rowSpan":
        case "start":
          "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(
            attributeSeparator,
            name,
            attributeAssign,
            escapeTextForBrowser(value),
            attributeEnd
          );
          break;
        case "xlinkActuate":
          pushStringAttribute(target, "xlink:actuate", value);
          break;
        case "xlinkArcrole":
          pushStringAttribute(target, "xlink:arcrole", value);
          break;
        case "xlinkRole":
          pushStringAttribute(target, "xlink:role", value);
          break;
        case "xlinkShow":
          pushStringAttribute(target, "xlink:show", value);
          break;
        case "xlinkTitle":
          pushStringAttribute(target, "xlink:title", value);
          break;
        case "xlinkType":
          pushStringAttribute(target, "xlink:type", value);
          break;
        case "xmlBase":
          pushStringAttribute(target, "xml:base", value);
          break;
        case "xmlLang":
          pushStringAttribute(target, "xml:lang", value);
          break;
        case "xmlSpace":
          pushStringAttribute(target, "xml:space", value);
          break;
        default:
          if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
            if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
              switch (typeof value) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  var prefix$8 = name.toLowerCase().slice(0, 5);
                  if ("data-" !== prefix$8 && "aria-" !== prefix$8) return;
              }
              target.push(
                attributeSeparator,
                name,
                attributeAssign,
                escapeTextForBrowser(value),
                attributeEnd
              );
            }
          }
      }
    }
    var endOfStartTag = stringToPrecomputedChunk(">");
    var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
    function pushInnerHTML(target, innerHTML, children) {
      if (null != innerHTML) {
        if (null != children)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if ("object" !== typeof innerHTML || !("__html" in innerHTML))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        innerHTML = innerHTML.__html;
        null !== innerHTML && void 0 !== innerHTML && target.push("" + innerHTML);
      }
    }
    function flattenOptionChildren(children) {
      var content = "";
      React5.Children.forEach(children, function(child) {
        null != child && (content += child);
      });
      return content;
    }
    var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
    var formReplayingRuntimeScript = stringToPrecomputedChunk(
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
    );
    function injectFormReplayingRuntime(resumableState, renderState) {
      if (0 === (resumableState.instructions & 16)) {
        resumableState.instructions |= 16;
        var preamble = renderState.preamble, bootstrapChunks = renderState.bootstrapChunks;
        (preamble.htmlChunks || preamble.headChunks) && 0 === bootstrapChunks.length ? (bootstrapChunks.push(renderState.startInlineScript), pushCompletedShellIdAttribute(bootstrapChunks, resumableState), bootstrapChunks.push(
          endOfStartTag,
          formReplayingRuntimeScript,
          endInlineScript
        )) : bootstrapChunks.unshift(
          renderState.startInlineScript,
          endOfStartTag,
          formReplayingRuntimeScript,
          endInlineScript
        );
      }
    }
    var formStateMarkerIsMatching = stringToPrecomputedChunk("<!--F!-->");
    var formStateMarkerIsNotMatching = stringToPrecomputedChunk("<!--F-->");
    function pushLinkImpl(target, props) {
      target.push(startChunkForTag("link"));
      for (var propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTagSelfClosing);
      return null;
    }
    var styleRegex = /(<\/|<)(s)(tyle)/gi;
    function styleReplacer(match, prefix2, s, suffix2) {
      return "" + prefix2 + ("s" === s ? "\\73 " : "\\53 ") + suffix2;
    }
    function pushSelfClosing(target, props, tag) {
      target.push(startChunkForTag(tag));
      for (var propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTagSelfClosing);
      return null;
    }
    function pushTitleImpl(target, props) {
      target.push(startChunkForTag("title"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag);
      props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
      "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(escapeTextForBrowser("" + props));
      pushInnerHTML(target, innerHTML, children);
      target.push(endChunkForTag("title"));
      return null;
    }
    var headPreambleContributionChunk = stringToPrecomputedChunk("<!--head-->");
    var bodyPreambleContributionChunk = stringToPrecomputedChunk("<!--body-->");
    var htmlPreambleContributionChunk = stringToPrecomputedChunk("<!--html-->");
    function pushScriptImpl(target, props) {
      target.push(startChunkForTag("script"));
      var children = null, innerHTML = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag);
      pushInnerHTML(target, innerHTML, children);
      "string" === typeof children && target.push(("" + children).replace(scriptRegex, scriptReplacer));
      target.push(endChunkForTag("script"));
      return null;
    }
    function pushStartSingletonElement(target, props, tag) {
      target.push(startChunkForTag(tag));
      var innerHTML = tag = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                tag = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag);
      pushInnerHTML(target, innerHTML, tag);
      return tag;
    }
    function pushStartGenericElement(target, props, tag) {
      target.push(startChunkForTag(tag));
      var innerHTML = tag = null, propKey;
      for (propKey in props)
        if (hasOwnProperty.call(props, propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "children":
                tag = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, propKey, propValue);
            }
        }
      target.push(endOfStartTag);
      pushInnerHTML(target, innerHTML, tag);
      return "string" === typeof tag ? (target.push(escapeTextForBrowser(tag)), null) : tag;
    }
    var leadingNewline = stringToPrecomputedChunk("\n");
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = /* @__PURE__ */ new Map();
    function startChunkForTag(tag) {
      var tagStartChunk = validatedTagCache.get(tag);
      if (void 0 === tagStartChunk) {
        if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
        tagStartChunk = stringToPrecomputedChunk("<" + tag);
        validatedTagCache.set(tag, tagStartChunk);
      }
      return tagStartChunk;
    }
    var doctypeChunk = stringToPrecomputedChunk("<!DOCTYPE html>");
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded) {
      switch (type) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          target$jscomp$0.push(startChunkForTag("a"));
          var children = null, innerHTML = null, propKey;
          for (propKey in props)
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "children":
                    children = propValue;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                  case "href":
                    "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                    break;
                  default:
                    pushAttribute(target$jscomp$0, propKey, propValue);
                }
            }
          target$jscomp$0.push(endOfStartTag);
          pushInnerHTML(target$jscomp$0, innerHTML, children);
          if ("string" === typeof children) {
            target$jscomp$0.push(escapeTextForBrowser(children));
            var JSCompiler_inline_result = null;
          } else JSCompiler_inline_result = children;
          return JSCompiler_inline_result;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          target$jscomp$0.push(startChunkForTag("select"));
          var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
          for (propKey$jscomp$0 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$0)) {
              var propValue$jscomp$0 = props[propKey$jscomp$0];
              if (null != propValue$jscomp$0)
                switch (propKey$jscomp$0) {
                  case "children":
                    children$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$0 = propValue$jscomp$0;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$0,
                      propValue$jscomp$0
                    );
                }
            }
          target$jscomp$0.push(endOfStartTag);
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
          return children$jscomp$0;
        case "option":
          var selectedValue = formatContext.selectedValue;
          target$jscomp$0.push(startChunkForTag("option"));
          var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
          for (propKey$jscomp$1 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$1)) {
              var propValue$jscomp$1 = props[propKey$jscomp$1];
              if (null != propValue$jscomp$1)
                switch (propKey$jscomp$1) {
                  case "children":
                    children$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "selected":
                    selected = propValue$jscomp$1;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$1 = propValue$jscomp$1;
                    break;
                  case "value":
                    value = propValue$jscomp$1;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$1,
                      propValue$jscomp$1
                    );
                }
            }
          if (null != selectedValue) {
            var stringValue = null !== value ? "" + value : flattenOptionChildren(children$jscomp$1);
            if (isArrayImpl(selectedValue))
              for (var i = 0; i < selectedValue.length; i++) {
                if ("" + selectedValue[i] === stringValue) {
                  target$jscomp$0.push(selectedMarkerAttribute);
                  break;
                }
              }
            else
              "" + selectedValue === stringValue && target$jscomp$0.push(selectedMarkerAttribute);
          } else selected && target$jscomp$0.push(selectedMarkerAttribute);
          target$jscomp$0.push(endOfStartTag);
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
          return children$jscomp$1;
        case "textarea":
          target$jscomp$0.push(startChunkForTag("textarea"));
          var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
          for (propKey$jscomp$2 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$2)) {
              var propValue$jscomp$2 = props[propKey$jscomp$2];
              if (null != propValue$jscomp$2)
                switch (propKey$jscomp$2) {
                  case "children":
                    children$jscomp$2 = propValue$jscomp$2;
                    break;
                  case "value":
                    value$jscomp$0 = propValue$jscomp$2;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$jscomp$2;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$2,
                      propValue$jscomp$2
                    );
                }
            }
          null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
          target$jscomp$0.push(endOfStartTag);
          if (null != children$jscomp$2) {
            if (null != value$jscomp$0)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (isArrayImpl(children$jscomp$2)) {
              if (1 < children$jscomp$2.length)
                throw Error("<textarea> can only have at most one child.");
              value$jscomp$0 = "" + children$jscomp$2[0];
            }
            value$jscomp$0 = "" + children$jscomp$2;
          }
          "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
          null !== value$jscomp$0 && target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0));
          return null;
        case "input":
          target$jscomp$0.push(startChunkForTag("input"));
          var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
          for (propKey$jscomp$3 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$3)) {
              var propValue$jscomp$3 = props[propKey$jscomp$3];
              if (null != propValue$jscomp$3)
                switch (propKey$jscomp$3) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    name = propValue$jscomp$3;
                    break;
                  case "formAction":
                    formAction = propValue$jscomp$3;
                    break;
                  case "formEncType":
                    formEncType = propValue$jscomp$3;
                    break;
                  case "formMethod":
                    formMethod = propValue$jscomp$3;
                    break;
                  case "formTarget":
                    formTarget = propValue$jscomp$3;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$jscomp$3;
                    break;
                  case "defaultValue":
                    defaultValue$jscomp$0 = propValue$jscomp$3;
                    break;
                  case "checked":
                    checked = propValue$jscomp$3;
                    break;
                  case "value":
                    value$jscomp$1 = propValue$jscomp$3;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$3,
                      propValue$jscomp$3
                    );
                }
            }
          var formData = pushFormActionAttribute(
            target$jscomp$0,
            resumableState,
            renderState,
            formAction,
            formEncType,
            formMethod,
            formTarget,
            name
          );
          null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
          null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
          target$jscomp$0.push(endOfStartTagSelfClosing);
          null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
          return null;
        case "button":
          target$jscomp$0.push(startChunkForTag("button"));
          var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
          for (propKey$jscomp$4 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$4)) {
              var propValue$jscomp$4 = props[propKey$jscomp$4];
              if (null != propValue$jscomp$4)
                switch (propKey$jscomp$4) {
                  case "children":
                    children$jscomp$3 = propValue$jscomp$4;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$2 = propValue$jscomp$4;
                    break;
                  case "name":
                    name$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formAction":
                    formAction$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formEncType":
                    formEncType$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formMethod":
                    formMethod$jscomp$0 = propValue$jscomp$4;
                    break;
                  case "formTarget":
                    formTarget$jscomp$0 = propValue$jscomp$4;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$4,
                      propValue$jscomp$4
                    );
                }
            }
          var formData$jscomp$0 = pushFormActionAttribute(
            target$jscomp$0,
            resumableState,
            renderState,
            formAction$jscomp$0,
            formEncType$jscomp$0,
            formMethod$jscomp$0,
            formTarget$jscomp$0,
            name$jscomp$0
          );
          target$jscomp$0.push(endOfStartTag);
          null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
          if ("string" === typeof children$jscomp$3) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
            var JSCompiler_inline_result$jscomp$0 = null;
          } else JSCompiler_inline_result$jscomp$0 = children$jscomp$3;
          return JSCompiler_inline_result$jscomp$0;
        case "form":
          target$jscomp$0.push(startChunkForTag("form"));
          var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
          for (propKey$jscomp$5 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$5)) {
              var propValue$jscomp$5 = props[propKey$jscomp$5];
              if (null != propValue$jscomp$5)
                switch (propKey$jscomp$5) {
                  case "children":
                    children$jscomp$4 = propValue$jscomp$5;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$3 = propValue$jscomp$5;
                    break;
                  case "action":
                    formAction$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "encType":
                    formEncType$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "method":
                    formMethod$jscomp$1 = propValue$jscomp$5;
                    break;
                  case "target":
                    formTarget$jscomp$1 = propValue$jscomp$5;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$5,
                      propValue$jscomp$5
                    );
                }
            }
          var formData$jscomp$1 = null, formActionName = null;
          if ("function" === typeof formAction$jscomp$1) {
            var customFields = getCustomFormFields(
              resumableState,
              formAction$jscomp$1
            );
            null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(
              attributeSeparator,
              "action",
              attributeAssign,
              actionJavaScriptURL,
              attributeEnd
            ), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
          }
          null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
          null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
          null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
          null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
          target$jscomp$0.push(endOfStartTag);
          null !== formActionName && (target$jscomp$0.push(startHiddenInputChunk), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
          if ("string" === typeof children$jscomp$4) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
            var JSCompiler_inline_result$jscomp$1 = null;
          } else JSCompiler_inline_result$jscomp$1 = children$jscomp$4;
          return JSCompiler_inline_result$jscomp$1;
        case "menuitem":
          target$jscomp$0.push(startChunkForTag("menuitem"));
          for (var propKey$jscomp$6 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$6)) {
              var propValue$jscomp$6 = props[propKey$jscomp$6];
              if (null != propValue$jscomp$6)
                switch (propKey$jscomp$6) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$6,
                      propValue$jscomp$6
                    );
                }
            }
          target$jscomp$0.push(endOfStartTag);
          return null;
        case "object":
          target$jscomp$0.push(startChunkForTag("object"));
          var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
          for (propKey$jscomp$7 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$7)) {
              var propValue$jscomp$7 = props[propKey$jscomp$7];
              if (null != propValue$jscomp$7)
                switch (propKey$jscomp$7) {
                  case "children":
                    children$jscomp$5 = propValue$jscomp$7;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$4 = propValue$jscomp$7;
                    break;
                  case "data":
                    var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                    if ("" === sanitizedValue) break;
                    target$jscomp$0.push(
                      attributeSeparator,
                      "data",
                      attributeAssign,
                      escapeTextForBrowser(sanitizedValue),
                      attributeEnd
                    );
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$7,
                      propValue$jscomp$7
                    );
                }
            }
          target$jscomp$0.push(endOfStartTag);
          pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
          if ("string" === typeof children$jscomp$5) {
            target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
            var JSCompiler_inline_result$jscomp$2 = null;
          } else JSCompiler_inline_result$jscomp$2 = children$jscomp$5;
          return JSCompiler_inline_result$jscomp$2;
        case "title":
          var noscriptTagInScope = formatContext.tagScope & 1, isFallback = formatContext.tagScope & 4;
          if (4 === formatContext.insertionMode || noscriptTagInScope || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$3 = pushTitleImpl(
              target$jscomp$0,
              props
            );
          else
            isFallback ? JSCompiler_inline_result$jscomp$3 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$3 = void 0);
          return JSCompiler_inline_result$jscomp$3;
        case "link":
          var noscriptTagInScope$jscomp$0 = formatContext.tagScope & 1, isFallback$jscomp$0 = formatContext.tagScope & 4, rel = props.rel, href = props.href, precedence = props.precedence;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
            pushLinkImpl(target$jscomp$0, props);
            var JSCompiler_inline_result$jscomp$4 = null;
          } else if ("stylesheet" === props.rel)
            if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError)
              JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
                target$jscomp$0,
                props
              );
            else {
              var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
              if (null !== resourceState) {
                resumableState.styleResources[href] = null;
                styleQueue || (styleQueue = {
                  precedence: escapeTextForBrowser(precedence),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, renderState.styles.set(precedence, styleQueue));
                var resource = {
                  state: 0,
                  props: assign({}, props, {
                    "data-precedence": props.precedence,
                    precedence: null
                  })
                };
                if (resourceState) {
                  2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                  var preloadResource = renderState.preloads.stylesheets.get(href);
                  preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = 1;
                }
                styleQueue.sheets.set(href, resource);
                hoistableState && hoistableState.stylesheets.add(resource);
              } else if (styleQueue) {
                var resource$9 = styleQueue.sheets.get(href);
                resource$9 && hoistableState && hoistableState.stylesheets.add(resource$9);
              }
              textEmbedded && target$jscomp$0.push(textSeparator);
              JSCompiler_inline_result$jscomp$4 = null;
            }
          else
            props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$4 = pushLinkImpl(
              target$jscomp$0,
              props
            ) : (textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$4 = isFallback$jscomp$0 ? null : pushLinkImpl(renderState.hoistableChunks, props));
          return JSCompiler_inline_result$jscomp$4;
        case "script":
          var noscriptTagInScope$jscomp$1 = formatContext.tagScope & 1, asyncProp = props.async;
          if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || 4 === formatContext.insertionMode || noscriptTagInScope$jscomp$1 || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$5 = pushScriptImpl(
              target$jscomp$0,
              props
            );
          else {
            var key = props.src;
            if ("module" === props.type) {
              var resources = resumableState.moduleScriptResources;
              var preloads = renderState.preloads.moduleScripts;
            } else
              resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
            var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
            if (null !== resourceState$jscomp$0) {
              resources[key] = null;
              var scriptProps = props;
              if (resourceState$jscomp$0) {
                2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                var preloadResource$jscomp$0 = preloads.get(key);
                preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
              }
              var resource$jscomp$0 = [];
              renderState.scripts.add(resource$jscomp$0);
              pushScriptImpl(resource$jscomp$0, scriptProps);
            }
            textEmbedded && target$jscomp$0.push(textSeparator);
            JSCompiler_inline_result$jscomp$5 = null;
          }
          return JSCompiler_inline_result$jscomp$5;
        case "style":
          var noscriptTagInScope$jscomp$2 = formatContext.tagScope & 1, precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href, nonce = props.nonce;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$2 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
            target$jscomp$0.push(startChunkForTag("style"));
            var children$jscomp$6 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
            for (propKey$jscomp$8 in props)
              if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                var propValue$jscomp$8 = props[propKey$jscomp$8];
                if (null != propValue$jscomp$8)
                  switch (propKey$jscomp$8) {
                    case "children":
                      children$jscomp$6 = propValue$jscomp$8;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$5 = propValue$jscomp$8;
                      break;
                    default:
                      pushAttribute(
                        target$jscomp$0,
                        propKey$jscomp$8,
                        propValue$jscomp$8
                      );
                  }
              }
            target$jscomp$0.push(endOfStartTag);
            var child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
            "function" !== typeof child && "symbol" !== typeof child && null !== child && void 0 !== child && target$jscomp$0.push(("" + child).replace(styleRegex, styleReplacer));
            pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$6);
            target$jscomp$0.push(endChunkForTag("style"));
            var JSCompiler_inline_result$jscomp$6 = null;
          } else {
            var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0);
            if (null !== (resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0)) {
              resumableState.styleResources[href$jscomp$0] = null;
              styleQueue$jscomp$0 || (styleQueue$jscomp$0 = {
                precedence: escapeTextForBrowser(precedence$jscomp$0),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
              var nonceStyle = renderState.nonce.style;
              if (!nonceStyle || nonceStyle === nonce) {
                styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0));
                var target = styleQueue$jscomp$0.rules, children$jscomp$7 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                for (propKey$jscomp$9 in props)
                  if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                    var propValue$jscomp$9 = props[propKey$jscomp$9];
                    if (null != propValue$jscomp$9)
                      switch (propKey$jscomp$9) {
                        case "children":
                          children$jscomp$7 = propValue$jscomp$9;
                          break;
                        case "dangerouslySetInnerHTML":
                          innerHTML$jscomp$6 = propValue$jscomp$9;
                      }
                  }
                var child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                "function" !== typeof child$jscomp$0 && "symbol" !== typeof child$jscomp$0 && null !== child$jscomp$0 && void 0 !== child$jscomp$0 && target.push(
                  ("" + child$jscomp$0).replace(styleRegex, styleReplacer)
                );
                pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$7);
              }
            }
            styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
            textEmbedded && target$jscomp$0.push(textSeparator);
            JSCompiler_inline_result$jscomp$6 = void 0;
          }
          return JSCompiler_inline_result$jscomp$6;
        case "meta":
          var noscriptTagInScope$jscomp$3 = formatContext.tagScope & 1, isFallback$jscomp$1 = formatContext.tagScope & 4;
          if (4 === formatContext.insertionMode || noscriptTagInScope$jscomp$3 || null != props.itemProp)
            var JSCompiler_inline_result$jscomp$7 = pushSelfClosing(
              target$jscomp$0,
              props,
              "meta"
            );
          else
            textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$7 = isFallback$jscomp$1 ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
          return JSCompiler_inline_result$jscomp$7;
        case "listing":
        case "pre":
          target$jscomp$0.push(startChunkForTag(type));
          var children$jscomp$8 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
          for (propKey$jscomp$10 in props)
            if (hasOwnProperty.call(props, propKey$jscomp$10)) {
              var propValue$jscomp$10 = props[propKey$jscomp$10];
              if (null != propValue$jscomp$10)
                switch (propKey$jscomp$10) {
                  case "children":
                    children$jscomp$8 = propValue$jscomp$10;
                    break;
                  case "dangerouslySetInnerHTML":
                    innerHTML$jscomp$7 = propValue$jscomp$10;
                    break;
                  default:
                    pushAttribute(
                      target$jscomp$0,
                      propKey$jscomp$10,
                      propValue$jscomp$10
                    );
                }
            }
          target$jscomp$0.push(endOfStartTag);
          if (null != innerHTML$jscomp$7) {
            if (null != children$jscomp$8)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var html = innerHTML$jscomp$7.__html;
            null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, html) : target$jscomp$0.push("" + html));
          }
          "string" === typeof children$jscomp$8 && "\n" === children$jscomp$8[0] && target$jscomp$0.push(leadingNewline);
          return children$jscomp$8;
        case "img":
          var pictureOrNoScriptTagInScope = formatContext.tagScope & 3, src = props.src, srcSet = props.srcSet;
          if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || pictureOrNoScriptTagInScope) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
            null !== hoistableState && formatContext.tagScope & 64 && (hoistableState.suspenseyImages = true);
            var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
            if (resource$jscomp$1) {
              if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size)
                promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
            } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
              resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
              var input = props.crossOrigin;
              var JSCompiler_inline_result$jscomp$8 = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
              var headers = renderState.headers, header;
              headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                imageSrcSet: props.srcSet,
                imageSizes: props.sizes,
                crossOrigin: JSCompiler_inline_result$jscomp$8,
                integrity: props.integrity,
                nonce: props.nonce,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.refererPolicy
              }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                rel: "preload",
                as: "image",
                href: srcSet ? void 0 : src,
                imageSrcSet: srcSet,
                imageSizes: sizes,
                crossOrigin: JSCompiler_inline_result$jscomp$8,
                integrity: props.integrity,
                type: props.type,
                fetchPriority: props.fetchPriority,
                referrerPolicy: props.referrerPolicy
              }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
            }
          }
          return pushSelfClosing(target$jscomp$0, props, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return pushSelfClosing(target$jscomp$0, props, type);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (2 > formatContext.insertionMode) {
            var preamble = preambleState || renderState.preamble;
            if (preamble.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push(headPreambleContributionChunk);
            preamble.headChunks = [];
            var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(
              preamble.headChunks,
              props,
              "head"
            );
          } else
            JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "head"
            );
          return JSCompiler_inline_result$jscomp$9;
        case "body":
          if (2 > formatContext.insertionMode) {
            var preamble$jscomp$0 = preambleState || renderState.preamble;
            if (preamble$jscomp$0.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push(bodyPreambleContributionChunk);
            preamble$jscomp$0.bodyChunks = [];
            var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(
              preamble$jscomp$0.bodyChunks,
              props,
              "body"
            );
          } else
            JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "body"
            );
          return JSCompiler_inline_result$jscomp$10;
        case "html":
          if (0 === formatContext.insertionMode) {
            var preamble$jscomp$1 = preambleState || renderState.preamble;
            if (preamble$jscomp$1.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            null !== preambleState && target$jscomp$0.push(htmlPreambleContributionChunk);
            preamble$jscomp$1.htmlChunks = [doctypeChunk];
            var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(
              preamble$jscomp$1.htmlChunks,
              props,
              "html"
            );
          } else
            JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(
              target$jscomp$0,
              props,
              "html"
            );
          return JSCompiler_inline_result$jscomp$11;
        default:
          if (-1 !== type.indexOf("-")) {
            target$jscomp$0.push(startChunkForTag(type));
            var children$jscomp$9 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
            for (propKey$jscomp$11 in props)
              if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                var propValue$jscomp$11 = props[propKey$jscomp$11];
                if (null != propValue$jscomp$11) {
                  var attributeName = propKey$jscomp$11;
                  switch (propKey$jscomp$11) {
                    case "children":
                      children$jscomp$9 = propValue$jscomp$11;
                      break;
                    case "dangerouslySetInnerHTML":
                      innerHTML$jscomp$8 = propValue$jscomp$11;
                      break;
                    case "style":
                      pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      attributeName = "class";
                    default:
                      if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && false !== propValue$jscomp$11) {
                        if (true === propValue$jscomp$11) propValue$jscomp$11 = "";
                        else if ("object" === typeof propValue$jscomp$11) continue;
                        target$jscomp$0.push(
                          attributeSeparator,
                          attributeName,
                          attributeAssign,
                          escapeTextForBrowser(propValue$jscomp$11),
                          attributeEnd
                        );
                      }
                  }
                }
              }
            target$jscomp$0.push(endOfStartTag);
            pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$9);
            return children$jscomp$9;
          }
      }
      return pushStartGenericElement(target$jscomp$0, props, type);
    }
    var endTagCache = /* @__PURE__ */ new Map();
    function endChunkForTag(tag) {
      var chunk = endTagCache.get(tag);
      void 0 === chunk && (chunk = stringToPrecomputedChunk("</" + tag + ">"), endTagCache.set(tag, chunk));
      return chunk;
    }
    function hoistPreambleState(renderState, preambleState) {
      renderState = renderState.preamble;
      null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks);
      null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks);
      null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks);
    }
    function writeBootstrap(destination, renderState) {
      renderState = renderState.bootstrapChunks;
      for (var i = 0; i < renderState.length - 1; i++)
        writeChunk(destination, renderState[i]);
      return i < renderState.length ? (i = renderState[i], renderState.length = 0, writeChunkAndReturn(destination, i)) : true;
    }
    var shellTimeRuntimeScript = stringToPrecomputedChunk(
      "requestAnimationFrame(function(){$RT=performance.now()});"
    );
    var placeholder1 = stringToPrecomputedChunk('<template id="');
    var placeholder2 = stringToPrecomputedChunk('"></template>');
    var startActivityBoundary = stringToPrecomputedChunk("<!--&-->");
    var endActivityBoundary = stringToPrecomputedChunk("<!--/&-->");
    var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
    var startPendingSuspenseBoundary1 = stringToPrecomputedChunk(
      '<!--$?--><template id="'
    );
    var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
    var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
    var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
    var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
    var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
    var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
    stringToPrecomputedChunk(' data-msg="');
    stringToPrecomputedChunk(' data-stck="');
    stringToPrecomputedChunk(' data-cstck="');
    var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
      writeChunk(destination, startPendingSuspenseBoundary1);
      if (null === id)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      writeChunk(destination, renderState.boundaryPrefix);
      writeChunk(destination, id.toString(16));
      return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
    }
    var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
    var startSegmentHTML2 = stringToPrecomputedChunk('">');
    var endSegmentHTML = stringToPrecomputedChunk("</div>");
    var startSegmentSVG = stringToPrecomputedChunk(
      '<svg aria-hidden="true" style="display:none" id="'
    );
    var startSegmentSVG2 = stringToPrecomputedChunk('">');
    var endSegmentSVG = stringToPrecomputedChunk("</svg>");
    var startSegmentMathML = stringToPrecomputedChunk(
      '<math aria-hidden="true" style="display:none" id="'
    );
    var startSegmentMathML2 = stringToPrecomputedChunk('">');
    var endSegmentMathML = stringToPrecomputedChunk("</math>");
    var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
    var startSegmentTable2 = stringToPrecomputedChunk('">');
    var endSegmentTable = stringToPrecomputedChunk("</table>");
    var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
    var startSegmentTableBody2 = stringToPrecomputedChunk('">');
    var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
    var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
    var startSegmentTableRow2 = stringToPrecomputedChunk('">');
    var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
    var startSegmentColGroup = stringToPrecomputedChunk(
      '<table hidden><colgroup id="'
    );
    var startSegmentColGroup2 = stringToPrecomputedChunk('">');
    var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
    function writeStartSegment(destination, renderState, formatContext, id) {
      switch (formatContext.insertionMode) {
        case 0:
        case 1:
        case 3:
        case 2:
          return writeChunk(destination, startSegmentHTML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentHTML2);
        case 4:
          return writeChunk(destination, startSegmentSVG), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentSVG2);
        case 5:
          return writeChunk(destination, startSegmentMathML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentMathML2);
        case 6:
          return writeChunk(destination, startSegmentTable), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTable2);
        case 7:
          return writeChunk(destination, startSegmentTableBody), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTableBody2);
        case 8:
          return writeChunk(destination, startSegmentTableRow), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentTableRow2);
        case 9:
          return writeChunk(destination, startSegmentColGroup), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, id.toString(16)), writeChunkAndReturn(destination, startSegmentColGroup2);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function writeEndSegment(destination, formatContext) {
      switch (formatContext.insertionMode) {
        case 0:
        case 1:
        case 3:
        case 2:
          return writeChunkAndReturn(destination, endSegmentHTML);
        case 4:
          return writeChunkAndReturn(destination, endSegmentSVG);
        case 5:
          return writeChunkAndReturn(destination, endSegmentMathML);
        case 6:
          return writeChunkAndReturn(destination, endSegmentTable);
        case 7:
          return writeChunkAndReturn(destination, endSegmentTableBody);
        case 8:
          return writeChunkAndReturn(destination, endSegmentTableRow);
        case 9:
          return writeChunkAndReturn(destination, endSegmentColGroup);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var completeSegmentScript1Full = stringToPrecomputedChunk(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    );
    var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
    var completeSegmentScript2 = stringToPrecomputedChunk('","');
    var completeSegmentScriptEnd = stringToPrecomputedChunk('")</script>');
    stringToPrecomputedChunk('<template data-rsi="" data-sid="');
    stringToPrecomputedChunk('" data-pid="');
    var completeBoundaryScriptFunctionOnly = stringToPrecomputedChunk(
      '$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};'
    );
    var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
    var completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk(
      '$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("'
    );
    var completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("');
    var completeBoundaryScript2 = stringToPrecomputedChunk('","');
    var completeBoundaryScript3a = stringToPrecomputedChunk('",');
    var completeBoundaryScript3b = stringToPrecomputedChunk('"');
    var completeBoundaryScriptEnd = stringToPrecomputedChunk(")</script>");
    stringToPrecomputedChunk('<template data-rci="" data-bid="');
    stringToPrecomputedChunk('<template data-rri="" data-bid="');
    stringToPrecomputedChunk('" data-sid="');
    stringToPrecomputedChunk('" data-sty="');
    var clientRenderScriptFunctionOnly = stringToPrecomputedChunk(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
    );
    var clientRenderScript1Full = stringToPrecomputedChunk(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
    );
    var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
    var clientRenderScript1A = stringToPrecomputedChunk('"');
    var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
    var clientRenderScriptEnd = stringToPrecomputedChunk(")</script>");
    stringToPrecomputedChunk('<template data-rxi="" data-bid="');
    stringToPrecomputedChunk('" data-dgst="');
    stringToPrecomputedChunk('" data-msg="');
    stringToPrecomputedChunk('" data-stck="');
    stringToPrecomputedChunk('" data-cstck="');
    var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
    function escapeJSStringsForInstructionScripts(input) {
      return JSON.stringify(input).replace(
        regexForJSStringsInInstructionScripts,
        function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
    function escapeJSObjectForInstructionScripts(input) {
      return JSON.stringify(input).replace(
        regexForJSStringsInScripts,
        function(match) {
          switch (match) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    var lateStyleTagResourceOpen1 = stringToPrecomputedChunk(
      ' media="not all" data-precedence="'
    );
    var lateStyleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="');
    var lateStyleTagResourceOpen3 = stringToPrecomputedChunk('">');
    var lateStyleTagTemplateClose = stringToPrecomputedChunk("</style>");
    var currentlyRenderingBoundaryHasStylesToHoist = false;
    var destinationHasCapacity = true;
    function flushStyleTagsLateForBoundary(styleQueue) {
      var rules = styleQueue.rules, hrefs = styleQueue.hrefs, i = 0;
      if (hrefs.length) {
        writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
        writeChunk(this, lateStyleTagResourceOpen1);
        writeChunk(this, styleQueue.precedence);
        for (writeChunk(this, lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)
          writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
        writeChunk(this, hrefs[i]);
        writeChunk(this, lateStyleTagResourceOpen3);
        for (i = 0; i < rules.length; i++) writeChunk(this, rules[i]);
        destinationHasCapacity = writeChunkAndReturn(
          this,
          lateStyleTagTemplateClose
        );
        currentlyRenderingBoundaryHasStylesToHoist = true;
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function hasStylesToHoist(stylesheet) {
      return 2 !== stylesheet.state ? currentlyRenderingBoundaryHasStylesToHoist = true : false;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
      currentlyRenderingBoundaryHasStylesToHoist = false;
      destinationHasCapacity = true;
      currentlyFlushingRenderState = renderState;
      hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
      currentlyFlushingRenderState = null;
      hoistableState.stylesheets.forEach(hasStylesToHoist);
      currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = true);
      return destinationHasCapacity;
    }
    function flushResource(resource) {
      for (var i = 0; i < resource.length; i++) writeChunk(this, resource[i]);
      resource.length = 0;
    }
    var stylesheetFlushingQueue = [];
    function flushStyleInPreamble(stylesheet) {
      pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
      for (var i = 0; i < stylesheetFlushingQueue.length; i++)
        writeChunk(this, stylesheetFlushingQueue[i]);
      stylesheetFlushingQueue.length = 0;
      stylesheet.state = 2;
    }
    var styleTagResourceOpen1 = stringToPrecomputedChunk(' data-precedence="');
    var styleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="');
    var spaceSeparator = stringToPrecomputedChunk(" ");
    var styleTagResourceOpen3 = stringToPrecomputedChunk('">');
    var styleTagResourceClose = stringToPrecomputedChunk("</style>");
    function flushStylesInPreamble(styleQueue) {
      var hasStylesheets = 0 < styleQueue.sheets.size;
      styleQueue.sheets.forEach(flushStyleInPreamble, this);
      styleQueue.sheets.clear();
      var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
      if (!hasStylesheets || hrefs.length) {
        writeChunk(this, currentlyFlushingRenderState.startInlineStyle);
        writeChunk(this, styleTagResourceOpen1);
        writeChunk(this, styleQueue.precedence);
        styleQueue = 0;
        if (hrefs.length) {
          for (writeChunk(this, styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++)
            writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
          writeChunk(this, hrefs[styleQueue]);
        }
        writeChunk(this, styleTagResourceOpen3);
        for (styleQueue = 0; styleQueue < rules.length; styleQueue++)
          writeChunk(this, rules[styleQueue]);
        writeChunk(this, styleTagResourceClose);
        rules.length = 0;
        hrefs.length = 0;
      }
    }
    function preloadLateStyle(stylesheet) {
      if (0 === stylesheet.state) {
        stylesheet.state = 1;
        var props = stylesheet.props;
        pushLinkImpl(stylesheetFlushingQueue, {
          rel: "preload",
          as: "style",
          href: stylesheet.props.href,
          crossOrigin: props.crossOrigin,
          fetchPriority: props.fetchPriority,
          integrity: props.integrity,
          media: props.media,
          hrefLang: props.hrefLang,
          referrerPolicy: props.referrerPolicy
        });
        for (stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)
          writeChunk(this, stylesheetFlushingQueue[stylesheet]);
        stylesheetFlushingQueue.length = 0;
      }
    }
    function preloadLateStyles(styleQueue) {
      styleQueue.sheets.forEach(preloadLateStyle, this);
      styleQueue.sheets.clear();
    }
    stringToPrecomputedChunk('<link rel="expect" href="#');
    stringToPrecomputedChunk('" blocking="render"/>');
    var completedShellIdAttributeStart = stringToPrecomputedChunk(' id="');
    function pushCompletedShellIdAttribute(target, resumableState) {
      0 === (resumableState.instructions & 32) && (resumableState.instructions |= 32, target.push(
        completedShellIdAttributeStart,
        escapeTextForBrowser("_" + resumableState.idPrefix + "R_"),
        attributeEnd
      ));
    }
    var arrayFirstOpenBracket = stringToPrecomputedChunk("[");
    var arraySubsequentOpenBracket = stringToPrecomputedChunk(",[");
    var arrayInterstitial = stringToPrecomputedChunk(",");
    var arrayCloseBracket = stringToPrecomputedChunk("]");
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
      writeChunk(destination, arrayFirstOpenBracket);
      var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
      hoistableState.stylesheets.forEach(function(resource) {
        if (2 !== resource.state)
          if (3 === resource.state)
            writeChunk(destination, nextArrayOpenBrackChunk), writeChunk(
              destination,
              escapeJSObjectForInstructionScripts("" + resource.props.href)
            ), writeChunk(destination, arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
          else {
            writeChunk(destination, nextArrayOpenBrackChunk);
            var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
            writeChunk(
              destination,
              escapeJSObjectForInstructionScripts(coercedHref)
            );
            precedence = "" + precedence;
            writeChunk(destination, arrayInterstitial);
            writeChunk(
              destination,
              escapeJSObjectForInstructionScripts(precedence)
            );
            for (var propKey in props)
              if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence))
                switch (propKey) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    writeStyleResourceAttributeInJS(
                      destination,
                      propKey,
                      precedence
                    );
                }
            writeChunk(destination, arrayCloseBracket);
            nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
            resource.state = 3;
          }
      });
      writeChunk(destination, arrayCloseBracket);
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
      var attributeName = name.toLowerCase();
      switch (typeof value) {
        case "function":
        case "symbol":
          return;
      }
      switch (name) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          attributeName = "class";
          name = "" + value;
          break;
        case "hidden":
          if (false === value) return;
          name = "";
          break;
        case "src":
        case "href":
          value = sanitizeURL(value);
          name = "" + value;
          break;
        default:
          if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name))
            return;
          name = "" + value;
      }
      writeChunk(destination, arrayInterstitial);
      writeChunk(destination, escapeJSObjectForInstructionScripts(attributeName));
      writeChunk(destination, arrayInterstitial);
      writeChunk(destination, escapeJSObjectForInstructionScripts(name));
    }
    function createHoistableState() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: false };
    }
    function prefetchDNS(href) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if ("string" === typeof href && href) {
          if (!resumableState.dnsResources.hasOwnProperty(href)) {
            resumableState.dnsResources[href] = null;
            resumableState = renderState.headers;
            var header, JSCompiler_temp;
            if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity)
              JSCompiler_temp = (header = "<" + ("" + href).replace(
                regexForHrefInLinkHeaderURLContext,
                escapeHrefForLinkHeaderURLContextReplacer
              ) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
            JSCompiler_temp ? (renderState.resets.dns[href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, { href, rel: "dns-prefetch" }), renderState.preconnects.add(header));
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.D(href);
    }
    function preconnect(href, crossOrigin) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if ("string" === typeof href && href) {
          var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
          if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
            resumableState.connectResources[bucket][href] = null;
            resumableState = renderState.headers;
            var header, JSCompiler_temp;
            if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
              JSCompiler_temp = "<" + ("" + href).replace(
                regexForHrefInLinkHeaderURLContext,
                escapeHrefForLinkHeaderURLContextReplacer
              ) + ">; rel=preconnect";
              if ("string" === typeof crossOrigin) {
                var escapedCrossOrigin = ("" + crossOrigin).replace(
                  regexForLinkHeaderQuotedParamValueContext,
                  escapeStringForLinkHeaderQuotedParamValueContextReplacer
                );
                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
              }
              JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
            }
            JSCompiler_temp ? (renderState.resets.connect[bucket][href] = null, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
              rel: "preconnect",
              href,
              crossOrigin
            }), renderState.preconnects.add(bucket));
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.C(href, crossOrigin);
    }
    function preload(href, as, options) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (as && href) {
          switch (as) {
            case "image":
              if (options) {
                var imageSrcSet = options.imageSrcSet;
                var imageSizes = options.imageSizes;
                var fetchPriority = options.fetchPriority;
              }
              var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
              if (resumableState.imageResources.hasOwnProperty(key)) return;
              resumableState.imageResources[key] = PRELOAD_NO_CREDS;
              resumableState = renderState.headers;
              var header;
              resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(
                resumableState,
                assign(
                  { rel: "preload", href: imageSrcSet ? void 0 : href, as },
                  options
                )
              ), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
              break;
            case "style":
              if (resumableState.styleResources.hasOwnProperty(href)) return;
              imageSrcSet = [];
              pushLinkImpl(
                imageSrcSet,
                assign({ rel: "preload", href, as }, options)
              );
              resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              renderState.preloads.stylesheets.set(href, imageSrcSet);
              renderState.bulkPreloads.add(imageSrcSet);
              break;
            case "script":
              if (resumableState.scriptResources.hasOwnProperty(href)) return;
              imageSrcSet = [];
              renderState.preloads.scripts.set(href, imageSrcSet);
              renderState.bulkPreloads.add(imageSrcSet);
              pushLinkImpl(
                imageSrcSet,
                assign({ rel: "preload", href, as }, options)
              );
              resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              break;
            default:
              if (resumableState.unknownResources.hasOwnProperty(as)) {
                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href))
                  return;
              } else
                imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
              imageSrcSet[href] = PRELOAD_NO_CREDS;
              if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2)))
                renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
              else
                switch (resumableState = [], href = assign({ rel: "preload", href, as }, options), pushLinkImpl(resumableState, href), as) {
                  case "font":
                    renderState.fontPreloads.add(resumableState);
                    break;
                  default:
                    renderState.bulkPreloads.add(resumableState);
                }
          }
          enqueueFlush(request);
        }
      } else previousDispatcher.L(href, as, options);
    }
    function preloadModule(href, options) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (href) {
          var as = options && "string" === typeof options.as ? options.as : "script";
          switch (as) {
            case "script":
              if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
              as = [];
              resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [options.crossOrigin, options.integrity];
              renderState.preloads.moduleScripts.set(href, as);
              break;
            default:
              if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                var resources = resumableState.unknownResources[as];
                if (resources.hasOwnProperty(href)) return;
              } else
                resources = {}, resumableState.moduleUnknownResources[as] = resources;
              as = [];
              resources[href] = PRELOAD_NO_CREDS;
          }
          pushLinkImpl(as, assign({ rel: "modulepreload", href }, options));
          renderState.bulkPreloads.add(as);
          enqueueFlush(request);
        }
      } else previousDispatcher.m(href, options);
    }
    function preinitStyle(href, precedence, options) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (href) {
          precedence = precedence || "default";
          var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
          null !== resourceState && (resumableState.styleResources[href] = null, styleQueue || (styleQueue = {
            precedence: escapeTextForBrowser(precedence),
            rules: [],
            hrefs: [],
            sheets: /* @__PURE__ */ new Map()
          }, renderState.styles.set(precedence, styleQueue)), precedence = {
            state: 0,
            props: assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options
            )
          }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = 1), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
        }
      } else previousDispatcher.S(href, precedence, options);
    }
    function preinitScript(src, options) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (src) {
          var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
          null !== resourceState && (resumableState.scriptResources[src] = null, options = assign({ src, async: true }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
        }
      } else previousDispatcher.X(src, options);
    }
    function preinitModuleScript(src, options) {
      var request = resolveRequest();
      if (request) {
        var resumableState = request.resumableState, renderState = request.renderState;
        if (src) {
          var resourceState = resumableState.moduleScriptResources.hasOwnProperty(
            src
          ) ? resumableState.moduleScriptResources[src] : void 0;
          null !== resourceState && (resumableState.moduleScriptResources[src] = null, options = assign({ src, type: "module", async: true }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
        }
      } else previousDispatcher.M(src, options);
    }
    function adoptPreloadCredentials(target, preloadState) {
      null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
      null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
      href = ("" + href).replace(
        regexForHrefInLinkHeaderURLContext,
        escapeHrefForLinkHeaderURLContextReplacer
      );
      as = ("" + as).replace(
        regexForLinkHeaderQuotedParamValueContext,
        escapeStringForLinkHeaderQuotedParamValueContextReplacer
      );
      as = "<" + href + '>; rel=preload; as="' + as + '"';
      for (var paramName in params)
        hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + ("" + href).replace(
          regexForLinkHeaderQuotedParamValueContext,
          escapeStringForLinkHeaderQuotedParamValueContextReplacer
        ) + '"'));
      return as;
    }
    var regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g;
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
      switch (match) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case "\n":
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    var regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g;
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
      switch (match) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case "\n":
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function hoistStyleQueueDependency(styleQueue) {
      this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
      this.stylesheets.add(stylesheet);
    }
    function hoistHoistables(parentState, childState) {
      childState.styles.forEach(hoistStyleQueueDependency, parentState);
      childState.stylesheets.forEach(hoistStylesheetDependency, parentState);
      childState.suspenseyImages && (parentState.suspenseyImages = true);
    }
    function hasSuspenseyContent(hoistableState) {
      return 0 < hoistableState.stylesheets.size || hoistableState.suspenseyImages;
    }
    var bind = Function.prototype.bind;
    var requestStorage = new async_hooks.AsyncLocalStorage();
    var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    var emptyContextObject = {};
    var currentActiveSnapshot = null;
    function popToNearestCommonAncestor(prev, next) {
      if (prev !== next) {
        prev.context._currentValue = prev.parentValue;
        prev = prev.parent;
        var parentNext = next.parent;
        if (null === prev) {
          if (null !== parentNext)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (null === parentNext)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          popToNearestCommonAncestor(prev, parentNext);
        }
        next.context._currentValue = next.value;
      }
    }
    function popAllPrevious(prev) {
      prev.context._currentValue = prev.parentValue;
      prev = prev.parent;
      null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
      var parentNext = next.parent;
      null !== parentNext && pushAllNext(parentNext);
      next.context._currentValue = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
      prev.context._currentValue = prev.parentValue;
      prev = prev.parent;
      if (null === prev)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
      var parentNext = next.parent;
      if (null === parentNext)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
      next.context._currentValue = next.value;
    }
    function switchContext(newSnapshot) {
      var prev = currentActiveSnapshot;
      prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    var classComponentUpdater = {
      enqueueSetState: function(inst, payload) {
        inst = inst._reactInternals;
        null !== inst.queue && inst.queue.push(payload);
      },
      enqueueReplaceState: function(inst, payload) {
        inst = inst._reactInternals;
        inst.replace = true;
        inst.queue = [payload];
      },
      enqueueForceUpdate: function() {
      }
    };
    var emptyTreeContext = { id: 1, overflow: "" };
    function pushTreeContext(baseContext, totalChildren, index) {
      var baseIdWithLeadingBit = baseContext.id;
      baseContext = baseContext.overflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        return {
          id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
          overflow: length + baseContext
        };
      }
      return {
        id: 1 << length | index << baseLength | baseIdWithLeadingBit,
        overflow: baseContext
      };
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(x) {
      x >>>= 0;
      return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop() {
    }
    var SuspenseException = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    );
    function trackUsedThenable(thenableState2, thenable, index) {
      index = thenableState2[index];
      void 0 === index ? thenableState2.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          "string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState2 = thenable, thenableState2.status = "pending", thenableState2.then(
            function(fulfilledValue) {
              if ("pending" === thenable.status) {
                var fulfilledThenable = thenable;
                fulfilledThenable.status = "fulfilled";
                fulfilledThenable.value = fulfilledValue;
              }
            },
            function(error) {
              if ("pending" === thenable.status) {
                var rejectedThenable = thenable;
                rejectedThenable.status = "rejected";
                rejectedThenable.reason = error;
              }
            }
          ));
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var currentlyRenderingComponent = null;
    var currentlyRenderingTask = null;
    var currentlyRenderingRequest = null;
    var currentlyRenderingKeyPath = null;
    var firstWorkInProgressHook = null;
    var workInProgressHook = null;
    var isReRender = false;
    var didScheduleRenderPhaseUpdate = false;
    var localIdCounter = 0;
    var actionStateCounter = 0;
    var actionStateMatchingIndex = -1;
    var thenableIndexCounter = 0;
    var thenableState = null;
    var renderPhaseUpdates = null;
    var numberOfReRenders = 0;
    function resolveCurrentlyRenderingComponent() {
      if (null === currentlyRenderingComponent)
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return currentlyRenderingComponent;
    }
    function createHook() {
      if (0 < numberOfReRenders)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function createWorkInProgressHook() {
      null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = false, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = true, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = false, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = true, workInProgressHook = workInProgressHook.next);
      return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
      var state = thenableState;
      thenableState = null;
      return state;
    }
    function resetHooksState() {
      currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
      didScheduleRenderPhaseUpdate = false;
      firstWorkInProgressHook = null;
      numberOfReRenders = 0;
      workInProgressHook = renderPhaseUpdates = null;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      if (isReRender) {
        var queue = workInProgressHook.queue;
        initialArg = queue.dispatch;
        if (null !== renderPhaseUpdates && (init = renderPhaseUpdates.get(queue), void 0 !== init)) {
          renderPhaseUpdates.delete(queue);
          queue = workInProgressHook.memoizedState;
          do
            queue = reducer(queue, init.action), init = init.next;
          while (null !== init);
          workInProgressHook.memoizedState = queue;
          return [queue, initialArg];
        }
        return [workInProgressHook.memoizedState, initialArg];
      }
      reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
      workInProgressHook.memoizedState = reducer;
      reducer = workInProgressHook.queue = { last: null, dispatch: null };
      reducer = reducer.dispatch = dispatchAction.bind(
        null,
        currentlyRenderingComponent,
        reducer
      );
      return [workInProgressHook.memoizedState, reducer];
    }
    function useMemo2(nextCreate, deps) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      if (null !== workInProgressHook) {
        var prevState = workInProgressHook.memoizedState;
        if (null !== prevState && null !== deps) {
          var prevDeps = prevState[1];
          a: if (null === prevDeps) prevDeps = false;
          else {
            for (var i = 0; i < prevDeps.length && i < deps.length; i++)
              if (!objectIs(deps[i], prevDeps[i])) {
                prevDeps = false;
                break a;
              }
            prevDeps = true;
          }
          if (prevDeps) return prevState[0];
        }
      }
      nextCreate = nextCreate();
      workInProgressHook.memoizedState = [nextCreate, deps];
      return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
      if (25 <= numberOfReRenders)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (componentIdentity === currentlyRenderingComponent)
        if (didScheduleRenderPhaseUpdate = true, componentIdentity = { action, next: null }, null === renderPhaseUpdates && (renderPhaseUpdates = /* @__PURE__ */ new Map()), action = renderPhaseUpdates.get(queue), void 0 === action)
          renderPhaseUpdates.set(queue, componentIdentity);
        else {
          for (queue = action; null !== queue.next; ) queue = queue.next;
          queue.next = componentIdentity;
        }
    }
    function throwOnUseEffectEventCall() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function unsupportedStartTransition() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function createPostbackActionStateKey(permalink, componentKeyPath, hookIndex) {
      if (void 0 !== permalink) return "p" + permalink;
      permalink = JSON.stringify([componentKeyPath, null, hookIndex]);
      componentKeyPath = crypto.createHash("md5");
      componentKeyPath.update(permalink);
      return "k" + componentKeyPath.digest("hex");
    }
    function useActionState(action, initialState, permalink) {
      resolveCurrentlyRenderingComponent();
      var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
      if ("function" === typeof action.$$FORM_ACTION) {
        var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
        request = request.formState;
        var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
        if (null !== request && "function" === typeof isSignatureEqual) {
          var postbackKey = request[1];
          isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = createPostbackActionStateKey(
            permalink,
            componentKeyPath,
            actionStateHookIndex
          ), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
        }
        var boundAction = action.bind(null, initialState);
        action = function(payload) {
          boundAction(payload);
        };
        "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix2) {
          prefix2 = boundAction.$$FORM_ACTION(prefix2);
          void 0 !== permalink && (permalink += "", prefix2.action = permalink);
          var formData = prefix2.data;
          formData && (null === nextPostbackStateKey && (nextPostbackStateKey = createPostbackActionStateKey(
            permalink,
            componentKeyPath,
            actionStateHookIndex
          )), formData.append("$ACTION_KEY", nextPostbackStateKey));
          return prefix2;
        });
        return [initialState, action, false];
      }
      var boundAction$22 = action.bind(null, initialState);
      return [
        initialState,
        function(payload) {
          boundAction$22(payload);
        },
        false
      ];
    }
    function unwrapThenable(thenable) {
      var index = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    var HooksDispatcher = {
      readContext: function(context) {
        return context._currentValue;
      },
      use: function(usable) {
        if (null !== usable && "object" === typeof usable) {
          if ("function" === typeof usable.then) return unwrapThenable(usable);
          if (usable.$$typeof === REACT_CONTEXT_TYPE) return usable._currentValue;
        }
        throw Error("An unsupported type was passed to use(): " + String(usable));
      },
      useContext: function(context) {
        resolveCurrentlyRenderingComponent();
        return context._currentValue;
      },
      useMemo: useMemo2,
      useReducer,
      useRef: function(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        return null === previousRef ? (initialValue = { current: initialValue }, workInProgressHook.memoizedState = initialValue) : previousRef;
      },
      useState: function(initialState) {
        return useReducer(basicStateReducer, initialState);
      },
      useInsertionEffect: noop,
      useLayoutEffect: noop,
      useCallback: function(callback, deps) {
        return useMemo2(function() {
          return callback;
        }, deps);
      },
      useImperativeHandle: noop,
      useEffect: noop,
      useDebugValue: noop,
      useDeferredValue: function(value, initialValue) {
        resolveCurrentlyRenderingComponent();
        return void 0 !== initialValue ? initialValue : value;
      },
      useTransition: function() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      },
      useId: function() {
        var JSCompiler_inline_result = currentlyRenderingTask.treeContext;
        var overflow = JSCompiler_inline_result.overflow;
        JSCompiler_inline_result = JSCompiler_inline_result.id;
        JSCompiler_inline_result = (JSCompiler_inline_result & ~(1 << 32 - clz32(JSCompiler_inline_result) - 1)).toString(32) + overflow;
        var resumableState = currentResumableState;
        if (null === resumableState)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        overflow = localIdCounter++;
        JSCompiler_inline_result = "_" + resumableState.idPrefix + "R_" + JSCompiler_inline_result;
        0 < overflow && (JSCompiler_inline_result += "H" + overflow.toString(32));
        return JSCompiler_inline_result + "_";
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        if (void 0 === getServerSnapshot)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return getServerSnapshot();
      },
      useOptimistic: function(passthrough) {
        resolveCurrentlyRenderingComponent();
        return [passthrough, unsupportedSetOptimisticState];
      },
      useActionState,
      useFormState: useActionState,
      useHostTransitionStatus: function() {
        resolveCurrentlyRenderingComponent();
        return sharedNotPendingObject;
      },
      useMemoCache: function(size) {
        for (var data = Array(size), i = 0; i < size; i++)
          data[i] = REACT_MEMO_CACHE_SENTINEL;
        return data;
      },
      useCacheRefresh: function() {
        return unsupportedRefresh;
      },
      useEffectEvent: function() {
        return throwOnUseEffectEventCall;
      }
    };
    var currentResumableState = null;
    var DefaultAsyncDispatcher = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      }
    };
    function prepareStackTrace(error, structuredStackTrace) {
      error = (error.name || "Error") + ": " + (error.message || "");
      for (var i = 0; i < structuredStackTrace.length; i++)
        error += "\n    at " + structuredStackTrace[i].toString();
      return error;
    }
    var prefix;
    var suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = prepareStackTrace;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$24) {
                    control = x$24;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$25) {
                  control = x$25;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeComponentStackByType(type) {
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      if ("function" === typeof type)
        return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, true) : describeNativeComponentFrame(type, false);
      if ("object" === typeof type && null !== type) {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeNativeComponentFrame(type.render, false);
          case REACT_MEMO_TYPE:
            return describeNativeComponentFrame(type.type, false);
          case REACT_LAZY_TYPE:
            var lazyComponent = type, payload = lazyComponent._payload;
            lazyComponent = lazyComponent._init;
            try {
              type = lazyComponent(payload);
            } catch (x) {
              return describeBuiltInComponentFrame("Lazy");
            }
            return describeComponentStackByType(type);
        }
        if ("string" === typeof type.name) {
          a: {
            payload = type.name;
            lazyComponent = type.env;
            var location = type.debugLocation;
            if (null != location && (type = Error.prepareStackTrace, Error.prepareStackTrace = prepareStackTrace, location = location.stack, Error.prepareStackTrace = type, location.startsWith("Error: react-stack-top-frame\n") && (location = location.slice(29)), type = location.indexOf("\n"), -1 !== type && (location = location.slice(type + 1)), type = location.indexOf("react_stack_bottom_frame"), -1 !== type && (type = location.lastIndexOf("\n", type)), type = -1 !== type ? location = location.slice(0, type) : "", location = type.lastIndexOf("\n"), type = -1 === location ? type : type.slice(location + 1), -1 !== type.indexOf(payload))) {
              payload = "\n" + type;
              break a;
            }
            payload = describeBuiltInComponentFrame(
              payload + (lazyComponent ? " [" + lazyComponent + "]" : "")
            );
          }
          return payload;
        }
      }
      switch (type) {
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
      }
      return "";
    }
    function isEligibleForOutlining(request, boundary) {
      return (500 < boundary.byteSize || hasSuspenseyContent(boundary.contentState)) && null === boundary.contentPreamble;
    }
    function defaultErrorHandler(error) {
      if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
        var JSCompiler_inline_result = error.environmentName;
        error = [error].slice(0);
        "string" === typeof error[0] ? error.splice(
          0,
          1,
          "\x1B[0m\x1B[7m%c%s\x1B[0m%c " + error[0],
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + JSCompiler_inline_result + " ",
          ""
        ) : error.splice(
          0,
          0,
          "\x1B[0m\x1B[7m%c%s\x1B[0m%c",
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + JSCompiler_inline_result + " ",
          ""
        );
        error.unshift(console);
        JSCompiler_inline_result = bind.apply(console.error, error);
        JSCompiler_inline_result();
      } else console.error(error);
      return null;
    }
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      var abortSet = /* @__PURE__ */ new Set();
      this.destination = null;
      this.flushScheduled = false;
      this.resumableState = resumableState;
      this.renderState = renderState;
      this.rootFormatContext = rootFormatContext;
      this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
      this.status = 10;
      this.fatalError = null;
      this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
      this.completedPreambleSegments = this.completedRootSegment = null;
      this.byteSize = 0;
      this.abortableTasks = abortSet;
      this.pingedTasks = [];
      this.clientRenderedBoundaries = [];
      this.completedBoundaries = [];
      this.partialBoundaries = [];
      this.trackedPostpones = null;
      this.onError = void 0 === onError ? defaultErrorHandler : onError;
      this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
      this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
      this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
      this.onShellError = void 0 === onShellError ? noop : onShellError;
      this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
      this.formState = void 0 === formState ? null : formState;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
      resumableState = new RequestInstance(
        resumableState,
        renderState,
        rootFormatContext,
        progressiveChunkSize,
        onError,
        onAllReady,
        onShellReady,
        onShellError,
        onFatalError,
        onPostpone,
        formState
      );
      renderState = createPendingSegment(
        resumableState,
        0,
        null,
        rootFormatContext,
        false,
        false
      );
      renderState.parentFlushed = true;
      children = createRenderTask(
        resumableState,
        null,
        children,
        -1,
        null,
        renderState,
        null,
        null,
        resumableState.abortableTasks,
        null,
        rootFormatContext,
        null,
        emptyTreeContext,
        null,
        null
      );
      pushComponentStack(children);
      resumableState.pingedTasks.push(children);
      return resumableState;
    }
    function createPrerenderRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone) {
      children = createRequest(
        children,
        resumableState,
        renderState,
        rootFormatContext,
        progressiveChunkSize,
        onError,
        onAllReady,
        onShellReady,
        onShellError,
        onFatalError,
        onPostpone,
        void 0
      );
      children.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      };
      return children;
    }
    function resumeRequest(children, postponedState, renderState, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone) {
      renderState = new RequestInstance(
        postponedState.resumableState,
        renderState,
        postponedState.rootFormatContext,
        postponedState.progressiveChunkSize,
        onError,
        onAllReady,
        onShellReady,
        onShellError,
        onFatalError,
        onPostpone,
        null
      );
      renderState.nextSegmentId = postponedState.nextSegmentId;
      if ("number" === typeof postponedState.replaySlots)
        return onError = createPendingSegment(
          renderState,
          0,
          null,
          postponedState.rootFormatContext,
          false,
          false
        ), onError.parentFlushed = true, children = createRenderTask(
          renderState,
          null,
          children,
          -1,
          null,
          onError,
          null,
          null,
          renderState.abortableTasks,
          null,
          postponedState.rootFormatContext,
          null,
          emptyTreeContext,
          null,
          null
        ), pushComponentStack(children), renderState.pingedTasks.push(children), renderState;
      children = createReplayTask(
        renderState,
        null,
        {
          nodes: postponedState.replayNodes,
          slots: postponedState.replaySlots,
          pendingTasks: 0
        },
        children,
        -1,
        null,
        null,
        renderState.abortableTasks,
        null,
        postponedState.rootFormatContext,
        null,
        emptyTreeContext,
        null,
        null
      );
      pushComponentStack(children);
      renderState.pingedTasks.push(children);
      return renderState;
    }
    function resumeAndPrerenderRequest(children, postponedState, renderState, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone) {
      children = resumeRequest(
        children,
        postponedState,
        renderState,
        onError,
        onAllReady,
        onShellReady,
        onShellError,
        onFatalError,
        onPostpone
      );
      children.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      };
      return children;
    }
    var currentRequest = null;
    function resolveRequest() {
      if (currentRequest) return currentRequest;
      var store = requestStorage.getStore();
      return store ? store : null;
    }
    function pingTask(request, task) {
      request.pingedTasks.push(task);
      1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, null !== request.trackedPostpones || 10 === request.status ? scheduleMicrotask(function() {
        return performWork(request);
      }) : setImmediate(function() {
        return performWork(request);
      }));
    }
    function createSuspenseBoundary(request, row, fallbackAbortableTasks, contentPreamble, fallbackPreamble) {
      fallbackAbortableTasks = {
        status: 0,
        rootSegmentID: -1,
        parentFlushed: false,
        pendingTasks: 0,
        row,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks,
        errorDigest: null,
        contentState: createHoistableState(),
        fallbackState: createHoistableState(),
        contentPreamble,
        fallbackPreamble,
        trackedContentKeyPath: null,
        trackedFallbackNode: null
      };
      null !== row && (row.pendingTasks++, contentPreamble = row.boundaries, null !== contentPreamble && (request.allPendingTasks++, fallbackAbortableTasks.pendingTasks++, contentPreamble.push(fallbackAbortableTasks)), request = row.inheritedHoistables, null !== request && hoistHoistables(fallbackAbortableTasks.contentState, request));
      return fallbackAbortableTasks;
    }
    function createRenderTask(request, thenableState2, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
      request.allPendingTasks++;
      null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      null !== row && row.pendingTasks++;
      var task = {
        replay: null,
        node,
        childIndex,
        ping: function() {
          return pingTask(request, task);
        },
        blockedBoundary,
        blockedSegment,
        blockedPreamble,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        row,
        componentStack,
        thenableState: thenableState2
      };
      abortSet.add(task);
      return task;
    }
    function createReplayTask(request, thenableState2, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, row, componentStack) {
      request.allPendingTasks++;
      null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
      null !== row && row.pendingTasks++;
      replay.pendingTasks++;
      var task = {
        replay,
        node,
        childIndex,
        ping: function() {
          return pingTask(request, task);
        },
        blockedBoundary,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState,
        abortSet,
        keyPath,
        formatContext,
        context,
        treeContext,
        row,
        componentStack,
        thenableState: thenableState2
      };
      abortSet.add(task);
      return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
      return {
        status: 0,
        parentFlushed: false,
        id: -1,
        index,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext,
        boundary,
        lastPushedText,
        textEmbedded
      };
    }
    function pushComponentStack(task) {
      var node = task.node;
      if ("object" === typeof node && null !== node)
        switch (node.$$typeof) {
          case REACT_ELEMENT_TYPE:
            task.componentStack = { parent: task.componentStack, type: node.type };
        }
    }
    function replaceSuspenseComponentStackWithSuspenseFallbackStack(componentStack) {
      return null === componentStack ? null : { parent: componentStack.parent, type: "Suspense Fallback" };
    }
    function getThrownInfo(node$jscomp$0) {
      var errorInfo = {};
      node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
        configurable: true,
        enumerable: true,
        get: function() {
          try {
            var info = "", node = node$jscomp$0;
            do
              info += describeComponentStackByType(node.type), node = node.parent;
            while (node);
            var JSCompiler_inline_result = info;
          } catch (x) {
            JSCompiler_inline_result = "\nError generating stack: " + x.message + "\n" + x.stack;
          }
          Object.defineProperty(errorInfo, "componentStack", {
            value: JSCompiler_inline_result
          });
          return JSCompiler_inline_result;
        }
      });
      return errorInfo;
    }
    function logRecoverableError(request, error, errorInfo) {
      request = request.onError;
      error = request(error, errorInfo);
      if (null == error || "string" === typeof error) return error;
    }
    function fatalError(request, error) {
      var onShellError = request.onShellError, onFatalError = request.onFatalError;
      onShellError(error);
      onFatalError(error);
      null !== request.destination ? (request.status = 14, request.destination.destroy(error)) : (request.status = 13, request.fatalError = error);
    }
    function finishSuspenseListRow(request, row) {
      unblockSuspenseListRow(request, row.next, row.hoistables);
    }
    function unblockSuspenseListRow(request, unblockedRow, inheritedHoistables) {
      for (; null !== unblockedRow; ) {
        null !== inheritedHoistables && (hoistHoistables(unblockedRow.hoistables, inheritedHoistables), unblockedRow.inheritedHoistables = inheritedHoistables);
        var unblockedBoundaries = unblockedRow.boundaries;
        if (null !== unblockedBoundaries) {
          unblockedRow.boundaries = null;
          for (var i = 0; i < unblockedBoundaries.length; i++) {
            var unblockedBoundary = unblockedBoundaries[i];
            null !== inheritedHoistables && hoistHoistables(unblockedBoundary.contentState, inheritedHoistables);
            finishedTask(request, unblockedBoundary, null, null);
          }
        }
        unblockedRow.pendingTasks--;
        if (0 < unblockedRow.pendingTasks) break;
        inheritedHoistables = unblockedRow.hoistables;
        unblockedRow = unblockedRow.next;
      }
    }
    function tryToResolveTogetherRow(request, togetherRow) {
      var boundaries = togetherRow.boundaries;
      if (null !== boundaries && togetherRow.pendingTasks === boundaries.length) {
        for (var allCompleteAndInlinable = true, i = 0; i < boundaries.length; i++) {
          var rowBoundary = boundaries[i];
          if (1 !== rowBoundary.pendingTasks || rowBoundary.parentFlushed || isEligibleForOutlining(request, rowBoundary)) {
            allCompleteAndInlinable = false;
            break;
          }
        }
        allCompleteAndInlinable && unblockSuspenseListRow(request, togetherRow, togetherRow.hoistables);
      }
    }
    function createSuspenseListRow(previousRow) {
      var newRow = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: createHoistableState(),
        inheritedHoistables: null,
        together: false,
        next: null
      };
      null !== previousRow && 0 < previousRow.pendingTasks && (newRow.pendingTasks++, newRow.boundaries = [], previousRow.next = newRow);
      return newRow;
    }
    function renderSuspenseListRows(request, task, keyPath, rows, revealOrder) {
      var prevKeyPath = task.keyPath, prevTreeContext = task.treeContext, prevRow = task.row;
      task.keyPath = keyPath;
      keyPath = rows.length;
      var previousSuspenseListRow = null;
      if (null !== task.replay) {
        var resumeSlots = task.replay.slots;
        if (null !== resumeSlots && "object" === typeof resumeSlots)
          for (var n = 0; n < keyPath; n++) {
            var i = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? n : keyPath - 1 - n, node = rows[i];
            task.row = previousSuspenseListRow = createSuspenseListRow(
              previousSuspenseListRow
            );
            task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
            var resumeSegmentID = resumeSlots[i];
            "number" === typeof resumeSegmentID ? (resumeNode(request, task, resumeSegmentID, node, i), delete resumeSlots[i]) : renderNode(request, task, node, i);
            0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
          }
        else
          for (resumeSlots = 0; resumeSlots < keyPath; resumeSlots++)
            n = "backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder ? resumeSlots : keyPath - 1 - resumeSlots, i = rows[n], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(prevTreeContext, keyPath, n), renderNode(request, task, i, n), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
      } else if ("backwards" !== revealOrder && "unstable_legacy-backwards" !== revealOrder)
        for (revealOrder = 0; revealOrder < keyPath; revealOrder++)
          resumeSlots = rows[revealOrder], task.row = previousSuspenseListRow = createSuspenseListRow(previousSuspenseListRow), task.treeContext = pushTreeContext(
            prevTreeContext,
            keyPath,
            revealOrder
          ), renderNode(request, task, resumeSlots, revealOrder), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
      else {
        revealOrder = task.blockedSegment;
        resumeSlots = revealOrder.children.length;
        n = revealOrder.chunks.length;
        for (i = keyPath - 1; 0 <= i; i--) {
          node = rows[i];
          task.row = previousSuspenseListRow = createSuspenseListRow(
            previousSuspenseListRow
          );
          task.treeContext = pushTreeContext(prevTreeContext, keyPath, i);
          resumeSegmentID = createPendingSegment(
            request,
            n,
            null,
            task.formatContext,
            0 === i ? revealOrder.lastPushedText : true,
            true
          );
          revealOrder.children.splice(resumeSlots, 0, resumeSegmentID);
          task.blockedSegment = resumeSegmentID;
          try {
            renderNode(request, task, node, i), resumeSegmentID.lastPushedText && resumeSegmentID.textEmbedded && resumeSegmentID.chunks.push(textSeparator), resumeSegmentID.status = 1, finishedSegment(request, task.blockedBoundary, resumeSegmentID), 0 === --previousSuspenseListRow.pendingTasks && finishSuspenseListRow(request, previousSuspenseListRow);
          } catch (thrownValue) {
            throw resumeSegmentID.status = 12 === request.status ? 3 : 4, thrownValue;
          }
        }
        task.blockedSegment = revealOrder;
        revealOrder.lastPushedText = false;
      }
      null !== prevRow && null !== previousSuspenseListRow && 0 < previousSuspenseListRow.pendingTasks && (prevRow.pendingTasks++, previousSuspenseListRow.next = prevRow);
      task.treeContext = prevTreeContext;
      task.row = prevRow;
      task.keyPath = prevKeyPath;
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
      var prevThenableState = task.thenableState;
      task.thenableState = null;
      currentlyRenderingComponent = {};
      currentlyRenderingTask = task;
      currentlyRenderingRequest = request;
      currentlyRenderingKeyPath = keyPath;
      actionStateCounter = localIdCounter = 0;
      actionStateMatchingIndex = -1;
      thenableIndexCounter = 0;
      thenableState = prevThenableState;
      for (request = Component(props, secondArg); didScheduleRenderPhaseUpdate; )
        didScheduleRenderPhaseUpdate = false, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
      resetHooksState();
      return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex2) {
      var didEmitActionStateMarkers = false;
      if (0 !== actionStateCount && null !== request.formState) {
        var segment = task.blockedSegment;
        if (null !== segment) {
          didEmitActionStateMarkers = true;
          segment = segment.chunks;
          for (var i = 0; i < actionStateCount; i++)
            i === actionStateMatchingIndex2 ? segment.push(formStateMarkerIsMatching) : segment.push(formStateMarkerIsNotMatching);
        }
      }
      actionStateCount = task.keyPath;
      task.keyPath = keyPath;
      hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
      task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
      if ("function" === typeof type)
        if (type.prototype && type.prototype.isReactComponent) {
          var newProps = props;
          if ("ref" in props) {
            newProps = {};
            for (var propName in props)
              "ref" !== propName && (newProps[propName] = props[propName]);
          }
          var defaultProps = type.defaultProps;
          if (defaultProps) {
            newProps === props && (newProps = assign({}, newProps, props));
            for (var propName$44 in defaultProps)
              void 0 === newProps[propName$44] && (newProps[propName$44] = defaultProps[propName$44]);
          }
          props = newProps;
          newProps = emptyContextObject;
          defaultProps = type.contextType;
          "object" === typeof defaultProps && null !== defaultProps && (newProps = defaultProps._currentValue);
          newProps = new type(props, newProps);
          var initialState = void 0 !== newProps.state ? newProps.state : null;
          newProps.updater = classComponentUpdater;
          newProps.props = props;
          newProps.state = initialState;
          defaultProps = { queue: [], replace: false };
          newProps._reactInternals = defaultProps;
          ref = type.contextType;
          newProps.context = "object" === typeof ref && null !== ref ? ref._currentValue : emptyContextObject;
          ref = type.getDerivedStateFromProps;
          "function" === typeof ref && (ref = ref(props, initialState), initialState = null === ref || void 0 === ref ? initialState : assign({}, initialState, ref), newProps.state = initialState);
          if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof newProps.getSnapshotBeforeUpdate && ("function" === typeof newProps.UNSAFE_componentWillMount || "function" === typeof newProps.componentWillMount))
            if (type = newProps.state, "function" === typeof newProps.componentWillMount && newProps.componentWillMount(), "function" === typeof newProps.UNSAFE_componentWillMount && newProps.UNSAFE_componentWillMount(), type !== newProps.state && classComponentUpdater.enqueueReplaceState(
              newProps,
              newProps.state,
              null
            ), null !== defaultProps.queue && 0 < defaultProps.queue.length)
              if (type = defaultProps.queue, ref = defaultProps.replace, defaultProps.queue = null, defaultProps.replace = false, ref && 1 === type.length)
                newProps.state = type[0];
              else {
                defaultProps = ref ? type[0] : newProps.state;
                initialState = true;
                for (ref = ref ? 1 : 0; ref < type.length; ref++)
                  propName$44 = type[ref], propName$44 = "function" === typeof propName$44 ? propName$44.call(newProps, defaultProps, props, void 0) : propName$44, null != propName$44 && (initialState ? (initialState = false, defaultProps = assign({}, defaultProps, propName$44)) : assign(defaultProps, propName$44));
                newProps.state = defaultProps;
              }
            else defaultProps.queue = null;
          type = newProps.render();
          if (12 === request.status) throw null;
          props = task.keyPath;
          task.keyPath = keyPath;
          renderNodeDestructive(request, task, type, -1);
          task.keyPath = props;
        } else {
          type = renderWithHooks(request, task, keyPath, type, props, void 0);
          if (12 === request.status) throw null;
          finishFunctionComponent(
            request,
            task,
            keyPath,
            type,
            0 !== localIdCounter,
            actionStateCounter,
            actionStateMatchingIndex
          );
        }
      else if ("string" === typeof type)
        if (newProps = task.blockedSegment, null === newProps)
          newProps = props.children, defaultProps = task.formatContext, initialState = task.keyPath, task.formatContext = getChildFormatContext(defaultProps, type, props), task.keyPath = keyPath, renderNode(request, task, newProps, -1), task.formatContext = defaultProps, task.keyPath = initialState;
        else {
          initialState = pushStartInstance(
            newProps.chunks,
            type,
            props,
            request.resumableState,
            request.renderState,
            task.blockedPreamble,
            task.hoistableState,
            task.formatContext,
            newProps.lastPushedText
          );
          newProps.lastPushedText = false;
          defaultProps = task.formatContext;
          ref = task.keyPath;
          task.keyPath = keyPath;
          if (3 === (task.formatContext = getChildFormatContext(defaultProps, type, props)).insertionMode) {
            keyPath = createPendingSegment(
              request,
              0,
              null,
              task.formatContext,
              false,
              false
            );
            newProps.preambleChildren.push(keyPath);
            task.blockedSegment = keyPath;
            try {
              keyPath.status = 6, renderNode(request, task, initialState, -1), keyPath.lastPushedText && keyPath.textEmbedded && keyPath.chunks.push(textSeparator), keyPath.status = 1, finishedSegment(request, task.blockedBoundary, keyPath);
            } finally {
              task.blockedSegment = newProps;
            }
          } else renderNode(request, task, initialState, -1);
          task.formatContext = defaultProps;
          task.keyPath = ref;
          a: {
            task = newProps.chunks;
            request = request.resumableState;
            switch (type) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break a;
              case "body":
                if (1 >= defaultProps.insertionMode) {
                  request.hasBody = true;
                  break a;
                }
                break;
              case "html":
                if (0 === defaultProps.insertionMode) {
                  request.hasHtml = true;
                  break a;
                }
                break;
              case "head":
                if (1 >= defaultProps.insertionMode) break a;
            }
            task.push(endChunkForTag(type));
          }
          newProps.lastPushedText = false;
        }
      else {
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE:
            type = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive(request, task, props.children, -1);
            task.keyPath = type;
            return;
          case REACT_ACTIVITY_TYPE:
            type = task.blockedSegment;
            null === type ? "hidden" !== props.mode && (type = task.keyPath, task.keyPath = keyPath, renderNode(request, task, props.children, -1), task.keyPath = type) : "hidden" !== props.mode && (type.chunks.push(startActivityBoundary), type.lastPushedText = false, newProps = task.keyPath, task.keyPath = keyPath, renderNode(request, task, props.children, -1), task.keyPath = newProps, type.chunks.push(endActivityBoundary), type.lastPushedText = false);
            return;
          case REACT_SUSPENSE_LIST_TYPE:
            a: {
              type = props.children;
              props = props.revealOrder;
              if ("forwards" === props || "backwards" === props || "unstable_legacy-backwards" === props) {
                if (isArrayImpl(type)) {
                  renderSuspenseListRows(request, task, keyPath, type, props);
                  break a;
                }
                if (newProps = getIteratorFn(type)) {
                  if (newProps = newProps.call(type)) {
                    defaultProps = newProps.next();
                    if (!defaultProps.done) {
                      do
                        defaultProps = newProps.next();
                      while (!defaultProps.done);
                      renderSuspenseListRows(request, task, keyPath, type, props);
                    }
                    break a;
                  }
                }
              }
              "together" === props ? (props = task.keyPath, newProps = task.row, defaultProps = task.row = createSuspenseListRow(null), defaultProps.boundaries = [], defaultProps.together = true, task.keyPath = keyPath, renderNodeDestructive(request, task, type, -1), 0 === --defaultProps.pendingTasks && finishSuspenseListRow(request, defaultProps), task.keyPath = props, task.row = newProps, null !== newProps && 0 < defaultProps.pendingTasks && (newProps.pendingTasks++, defaultProps.next = newProps)) : (props = task.keyPath, task.keyPath = keyPath, renderNodeDestructive(request, task, type, -1), task.keyPath = props);
            }
            return;
          case REACT_VIEW_TRANSITION_TYPE:
          case REACT_SCOPE_TYPE:
            throw Error("ReactDOMServer does not yet support scope components.");
          case REACT_SUSPENSE_TYPE:
            a: if (null !== task.replay) {
              type = task.keyPath;
              newProps = task.formatContext;
              defaultProps = task.row;
              task.keyPath = keyPath;
              task.formatContext = getSuspenseContentFormatContext(
                request.resumableState,
                newProps
              );
              task.row = null;
              keyPath = props.children;
              try {
                renderNode(request, task, keyPath, -1);
              } finally {
                task.keyPath = type, task.formatContext = newProps, task.row = defaultProps;
              }
            } else {
              type = task.keyPath;
              ref = task.formatContext;
              var prevRow = task.row;
              propName$44 = task.blockedBoundary;
              propName = task.blockedPreamble;
              var parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback;
              props = props.children;
              var fallbackAbortSet = /* @__PURE__ */ new Set();
              var newBoundary = 2 > task.formatContext.insertionMode ? createSuspenseBoundary(
                request,
                task.row,
                fallbackAbortSet,
                createPreambleState(),
                createPreambleState()
              ) : createSuspenseBoundary(
                request,
                task.row,
                fallbackAbortSet,
                null,
                null
              );
              null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
              var boundarySegment = createPendingSegment(
                request,
                parentSegment.chunks.length,
                newBoundary,
                task.formatContext,
                false,
                false
              );
              parentSegment.children.push(boundarySegment);
              parentSegment.lastPushedText = false;
              var contentRootSegment = createPendingSegment(
                request,
                0,
                null,
                task.formatContext,
                false,
                false
              );
              contentRootSegment.parentFlushed = true;
              if (null !== request.trackedPostpones) {
                newProps = task.componentStack;
                defaultProps = [keyPath[0], "Suspense Fallback", keyPath[2]];
                initialState = [defaultProps[1], defaultProps[2], [], null];
                request.trackedPostpones.workingMap.set(defaultProps, initialState);
                newBoundary.trackedFallbackNode = initialState;
                task.blockedSegment = boundarySegment;
                task.blockedPreamble = newBoundary.fallbackPreamble;
                task.keyPath = defaultProps;
                task.formatContext = getSuspenseFallbackFormatContext(
                  request.resumableState,
                  ref
                );
                task.componentStack = replaceSuspenseComponentStackWithSuspenseFallbackStack(newProps);
                boundarySegment.status = 6;
                try {
                  renderNode(request, task, fallback, -1), boundarySegment.lastPushedText && boundarySegment.textEmbedded && boundarySegment.chunks.push(textSeparator), boundarySegment.status = 1, finishedSegment(request, propName$44, boundarySegment);
                } catch (thrownValue) {
                  throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                } finally {
                  task.blockedSegment = parentSegment, task.blockedPreamble = propName, task.keyPath = type, task.formatContext = ref;
                }
                task = createRenderTask(
                  request,
                  null,
                  props,
                  -1,
                  newBoundary,
                  contentRootSegment,
                  newBoundary.contentPreamble,
                  newBoundary.contentState,
                  task.abortSet,
                  keyPath,
                  getSuspenseContentFormatContext(
                    request.resumableState,
                    task.formatContext
                  ),
                  task.context,
                  task.treeContext,
                  null,
                  newProps
                );
                pushComponentStack(task);
                request.pingedTasks.push(task);
              } else {
                task.blockedBoundary = newBoundary;
                task.blockedPreamble = newBoundary.contentPreamble;
                task.hoistableState = newBoundary.contentState;
                task.blockedSegment = contentRootSegment;
                task.keyPath = keyPath;
                task.formatContext = getSuspenseContentFormatContext(
                  request.resumableState,
                  ref
                );
                task.row = null;
                contentRootSegment.status = 6;
                try {
                  if (renderNode(request, task, props, -1), contentRootSegment.lastPushedText && contentRootSegment.textEmbedded && contentRootSegment.chunks.push(textSeparator), contentRootSegment.status = 1, finishedSegment(request, newBoundary, contentRootSegment), queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && 0 === newBoundary.status) {
                    if (newBoundary.status = 1, !isEligibleForOutlining(request, newBoundary)) {
                      null !== prevRow && 0 === --prevRow.pendingTasks && finishSuspenseListRow(request, prevRow);
                      0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
                      break a;
                    }
                  } else
                    null !== prevRow && prevRow.together && tryToResolveTogetherRow(request, prevRow);
                } catch (thrownValue$31) {
                  newBoundary.status = 4, 12 === request.status ? (contentRootSegment.status = 3, newProps = request.fatalError) : (contentRootSegment.status = 4, newProps = thrownValue$31), defaultProps = getThrownInfo(task.componentStack), initialState = logRecoverableError(
                    request,
                    newProps,
                    defaultProps
                  ), newBoundary.errorDigest = initialState, untrackBoundary(request, newBoundary);
                } finally {
                  task.blockedBoundary = propName$44, task.blockedPreamble = propName, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = type, task.formatContext = ref, task.row = prevRow;
                }
                task = createRenderTask(
                  request,
                  null,
                  fallback,
                  -1,
                  propName$44,
                  boundarySegment,
                  newBoundary.fallbackPreamble,
                  newBoundary.fallbackState,
                  fallbackAbortSet,
                  [keyPath[0], "Suspense Fallback", keyPath[2]],
                  getSuspenseFallbackFormatContext(
                    request.resumableState,
                    task.formatContext
                  ),
                  task.context,
                  task.treeContext,
                  task.row,
                  replaceSuspenseComponentStackWithSuspenseFallbackStack(
                    task.componentStack
                  )
                );
                pushComponentStack(task);
                request.pingedTasks.push(task);
              }
            }
            return;
        }
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              if ("ref" in props)
                for (parentSegment in newProps = {}, props)
                  "ref" !== parentSegment && (newProps[parentSegment] = props[parentSegment]);
              else newProps = props;
              type = renderWithHooks(
                request,
                task,
                keyPath,
                type.render,
                newProps,
                ref
              );
              finishFunctionComponent(
                request,
                task,
                keyPath,
                type,
                0 !== localIdCounter,
                actionStateCounter,
                actionStateMatchingIndex
              );
              return;
            case REACT_MEMO_TYPE:
              renderElement(request, task, keyPath, type.type, props, ref);
              return;
            case REACT_CONTEXT_TYPE:
              defaultProps = props.children;
              newProps = task.keyPath;
              props = props.value;
              initialState = type._currentValue;
              type._currentValue = props;
              ref = currentActiveSnapshot;
              currentActiveSnapshot = type = {
                parent: ref,
                depth: null === ref ? 0 : ref.depth + 1,
                context: type,
                parentValue: initialState,
                value: props
              };
              task.context = type;
              task.keyPath = keyPath;
              renderNodeDestructive(request, task, defaultProps, -1);
              request = currentActiveSnapshot;
              if (null === request)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              request.context._currentValue = request.parentValue;
              request = currentActiveSnapshot = request.parent;
              task.context = request;
              task.keyPath = newProps;
              return;
            case REACT_CONSUMER_TYPE:
              props = props.children;
              type = props(type._context._currentValue);
              props = task.keyPath;
              task.keyPath = keyPath;
              renderNodeDestructive(request, task, type, -1);
              task.keyPath = props;
              return;
            case REACT_LAZY_TYPE:
              newProps = type._init;
              type = newProps(type._payload);
              if (12 === request.status) throw null;
              renderElement(request, task, keyPath, type, props, ref);
              return;
          }
        throw Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + ".")
        );
      }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
      var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(
        request,
        0,
        null,
        task.formatContext,
        false,
        false
      );
      resumedSegment.id = segmentId;
      resumedSegment.parentFlushed = true;
      try {
        task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = 1, finishedSegment(request, blockedBoundary, resumedSegment), null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
      } finally {
        task.replay = prevReplay, task.blockedSegment = null;
      }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
      null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
    }
    function retryNode(request, task) {
      var node = task.node, childIndex = task.childIndex;
      if (null !== node) {
        if ("object" === typeof node) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = node.type, key = node.key, props = node.props;
              node = props.ref;
              var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key ? -1 === childIndex ? 0 : childIndex : key;
              key = [task.keyPath, name, keyOrIndex];
              if (null !== task.replay)
                a: {
                  var replay = task.replay;
                  childIndex = replay.nodes;
                  for (node = 0; node < childIndex.length; node++) {
                    var node$jscomp$0 = childIndex[node];
                    if (keyOrIndex === node$jscomp$0[1]) {
                      if (4 === node$jscomp$0.length) {
                        if (null !== name && name !== node$jscomp$0[0])
                          throw Error(
                            "Expected the resume to render <" + node$jscomp$0[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering."
                          );
                        var childNodes = node$jscomp$0[2];
                        name = node$jscomp$0[3];
                        keyOrIndex = task.node;
                        task.replay = {
                          nodes: childNodes,
                          slots: name,
                          pendingTasks: 1
                        };
                        try {
                          renderElement(request, task, key, type, props, ref);
                          if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                            throw Error(
                              "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                            );
                          task.replay.pendingTasks--;
                        } catch (x) {
                          if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then))
                            throw task.node === keyOrIndex ? task.replay = replay : childIndex.splice(node, 1), x;
                          task.replay.pendingTasks--;
                          props = getThrownInfo(task.componentStack);
                          key = request;
                          request = task.blockedBoundary;
                          type = x;
                          props = logRecoverableError(key, type, props);
                          abortRemainingReplayNodes(
                            key,
                            request,
                            childNodes,
                            name,
                            type,
                            props
                          );
                        }
                        task.replay = replay;
                      } else {
                        if (type !== REACT_SUSPENSE_TYPE)
                          throw Error(
                            "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
                          );
                        b: {
                          replay = void 0;
                          type = node$jscomp$0[5];
                          ref = node$jscomp$0[2];
                          name = node$jscomp$0[3];
                          keyOrIndex = null === node$jscomp$0[4] ? [] : node$jscomp$0[4][2];
                          node$jscomp$0 = null === node$jscomp$0[4] ? null : node$jscomp$0[4][3];
                          var prevKeyPath = task.keyPath, prevContext = task.formatContext, prevRow = task.row, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children, fallback = props.fallback, fallbackAbortSet = /* @__PURE__ */ new Set();
                          props = 2 > task.formatContext.insertionMode ? createSuspenseBoundary(
                            request,
                            task.row,
                            fallbackAbortSet,
                            createPreambleState(),
                            createPreambleState()
                          ) : createSuspenseBoundary(
                            request,
                            task.row,
                            fallbackAbortSet,
                            null,
                            null
                          );
                          props.parentFlushed = true;
                          props.rootSegmentID = type;
                          task.blockedBoundary = props;
                          task.hoistableState = props.contentState;
                          task.keyPath = key;
                          task.formatContext = getSuspenseContentFormatContext(
                            request.resumableState,
                            prevContext
                          );
                          task.row = null;
                          task.replay = {
                            nodes: ref,
                            slots: name,
                            pendingTasks: 1
                          };
                          try {
                            renderNode(request, task, content, -1);
                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                              throw Error(
                                "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                              );
                            task.replay.pendingTasks--;
                            if (0 === props.pendingTasks && 0 === props.status) {
                              props.status = 1;
                              request.completedBoundaries.push(props);
                              break b;
                            }
                          } catch (error) {
                            props.status = 4, childNodes = getThrownInfo(task.componentStack), replay = logRecoverableError(
                              request,
                              error,
                              childNodes
                            ), props.errorDigest = replay, task.replay.pendingTasks--, request.clientRenderedBoundaries.push(props);
                          } finally {
                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath, task.formatContext = prevContext, task.row = prevRow;
                          }
                          childNodes = createReplayTask(
                            request,
                            null,
                            {
                              nodes: keyOrIndex,
                              slots: node$jscomp$0,
                              pendingTasks: 0
                            },
                            fallback,
                            -1,
                            parentBoundary,
                            props.fallbackState,
                            fallbackAbortSet,
                            [key[0], "Suspense Fallback", key[2]],
                            getSuspenseFallbackFormatContext(
                              request.resumableState,
                              task.formatContext
                            ),
                            task.context,
                            task.treeContext,
                            task.row,
                            replaceSuspenseComponentStackWithSuspenseFallbackStack(
                              task.componentStack
                            )
                          );
                          pushComponentStack(childNodes);
                          request.pingedTasks.push(childNodes);
                        }
                      }
                      childIndex.splice(node, 1);
                      break a;
                    }
                  }
                }
              else renderElement(request, task, key, type, props, ref);
              return;
            case REACT_PORTAL_TYPE:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case REACT_LAZY_TYPE:
              childNodes = node._init;
              node = childNodes(node._payload);
              if (12 === request.status) throw null;
              renderNodeDestructive(request, task, node, childIndex);
              return;
          }
          if (isArrayImpl(node)) {
            renderChildrenArray(request, task, node, childIndex);
            return;
          }
          if (childNodes = getIteratorFn(node)) {
            if (childNodes = childNodes.call(node)) {
              node = childNodes.next();
              if (!node.done) {
                props = [];
                do
                  props.push(node.value), node = childNodes.next();
                while (!node.done);
                renderChildrenArray(request, task, props, childIndex);
              }
              return;
            }
          }
          if ("function" === typeof node.then)
            return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
          if (node.$$typeof === REACT_CONTEXT_TYPE)
            return renderNodeDestructive(
              request,
              task,
              node._currentValue,
              childIndex
            );
          childIndex = Object.prototype.toString.call(node);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        if ("string" === typeof node)
          childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(
            childIndex.chunks,
            node,
            request.renderState,
            childIndex.lastPushedText
          ));
        else if ("number" === typeof node || "bigint" === typeof node)
          childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(
            childIndex.chunks,
            "" + node,
            request.renderState,
            childIndex.lastPushedText
          ));
      }
    }
    function renderChildrenArray(request, task, children, childIndex) {
      var prevKeyPath = task.keyPath;
      if (-1 !== childIndex && (task.keyPath = [task.keyPath, "Fragment", childIndex], null !== task.replay)) {
        for (var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++) {
          var node = replayNodes[j];
          if (node[1] === childIndex) {
            childIndex = node[2];
            node = node[3];
            task.replay = { nodes: childIndex, slots: node, pendingTasks: 1 };
            try {
              renderChildrenArray(request, task, children, -1);
              if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              task.replay.pendingTasks--;
            } catch (x) {
              if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then))
                throw x;
              task.replay.pendingTasks--;
              children = getThrownInfo(task.componentStack);
              var boundary = task.blockedBoundary, error = x;
              children = logRecoverableError(request, error, children);
              abortRemainingReplayNodes(
                request,
                boundary,
                childIndex,
                node,
                error,
                children
              );
            }
            task.replay = replay;
            replayNodes.splice(j, 1);
            break;
          }
        }
        task.keyPath = prevKeyPath;
        return;
      }
      replay = task.treeContext;
      replayNodes = children.length;
      if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
        for (childIndex = 0; childIndex < replayNodes; childIndex++)
          node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), boundary = j[childIndex], "number" === typeof boundary ? (resumeNode(request, task, boundary, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        return;
      }
      for (j = 0; j < replayNodes; j++)
        childIndex = children[j], task.treeContext = pushTreeContext(replay, replayNodes, j), renderNode(request, task, childIndex, j);
      task.treeContext = replay;
      task.keyPath = prevKeyPath;
    }
    function trackPostponedBoundary(request, trackedPostpones, boundary) {
      boundary.status = 5;
      boundary.rootSegmentID = request.nextSegmentId++;
      request = boundary.trackedContentKeyPath;
      if (null === request)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var fallbackReplayNode = boundary.trackedFallbackNode, children = [], boundaryNode = trackedPostpones.workingMap.get(request);
      if (void 0 === boundaryNode)
        return boundary = [
          request[1],
          request[2],
          children,
          null,
          fallbackReplayNode,
          boundary.rootSegmentID
        ], trackedPostpones.workingMap.set(request, boundary), addToReplayParent(boundary, request[0], trackedPostpones), boundary;
      boundaryNode[4] = fallbackReplayNode;
      boundaryNode[5] = boundary.rootSegmentID;
      return boundaryNode;
    }
    function trackPostpone(request, trackedPostpones, task, segment) {
      segment.status = 5;
      var keyPath = task.keyPath, boundary = task.blockedBoundary;
      if (null === boundary)
        segment.id = request.nextSegmentId++, trackedPostpones.rootSlots = segment.id, null !== request.completedRootSegment && (request.completedRootSegment.status = 5);
      else {
        if (null !== boundary && 0 === boundary.status) {
          var boundaryNode = trackPostponedBoundary(
            request,
            trackedPostpones,
            boundary
          );
          if (boundary.trackedContentKeyPath === keyPath && -1 === task.childIndex) {
            -1 === segment.id && (segment.id = segment.parentFlushed ? boundary.rootSegmentID : request.nextSegmentId++);
            boundaryNode[3] = segment.id;
            return;
          }
        }
        -1 === segment.id && (segment.id = segment.parentFlushed && null !== boundary ? boundary.rootSegmentID : request.nextSegmentId++);
        if (-1 === task.childIndex)
          null === keyPath ? trackedPostpones.rootSlots = segment.id : (task = trackedPostpones.workingMap.get(keyPath), void 0 === task ? (task = [keyPath[1], keyPath[2], [], segment.id], addToReplayParent(task, keyPath[0], trackedPostpones)) : task[3] = segment.id);
        else {
          if (null === keyPath)
            if (request = trackedPostpones.rootSlots, null === request)
              request = trackedPostpones.rootSlots = {};
            else {
              if ("number" === typeof request)
                throw Error(
                  "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
                );
            }
          else if (boundary = trackedPostpones.workingMap, boundaryNode = boundary.get(keyPath), void 0 === boundaryNode)
            request = {}, boundaryNode = [keyPath[1], keyPath[2], [], request], boundary.set(keyPath, boundaryNode), addToReplayParent(boundaryNode, keyPath[0], trackedPostpones);
          else if (request = boundaryNode[3], null === request)
            request = boundaryNode[3] = {};
          else if ("number" === typeof request)
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          request[task.childIndex] = segment.id;
        }
      }
    }
    function untrackBoundary(request, boundary) {
      request = request.trackedPostpones;
      null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState2) {
      return createReplayTask(
        request,
        thenableState2,
        task.replay,
        task.node,
        task.childIndex,
        task.blockedBoundary,
        task.hoistableState,
        task.abortSet,
        task.keyPath,
        task.formatContext,
        task.context,
        task.treeContext,
        task.row,
        task.componentStack
      );
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState2) {
      var segment = task.blockedSegment, newSegment = createPendingSegment(
        request,
        segment.chunks.length,
        null,
        task.formatContext,
        segment.lastPushedText,
        true
      );
      segment.children.push(newSegment);
      segment.lastPushedText = false;
      return createRenderTask(
        request,
        thenableState2,
        task.node,
        task.childIndex,
        task.blockedBoundary,
        newSegment,
        task.blockedPreamble,
        task.hoistableState,
        task.abortSet,
        task.keyPath,
        task.formatContext,
        task.context,
        task.treeContext,
        task.row,
        task.componentStack
      );
    }
    function renderNode(request, task, node, childIndex) {
      var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
      if (null === segment) {
        segment = task.replay;
        try {
          return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
          if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, 12 !== request.status && "object" === typeof node && null !== node) {
            if ("function" === typeof node.then) {
              childIndex = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
              request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
              node.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              task.replay = segment;
              switchContext(previousContext);
              return;
            }
            if ("Maximum call stack size exceeded" === node.message) {
              node = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
              node = spawnNewSuspendedReplayTask(request, task, node);
              request.pingedTasks.push(node);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              task.replay = segment;
              switchContext(previousContext);
              return;
            }
          }
        }
      } else {
        var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
        try {
          return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue$63) {
          if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$63 === SuspenseException ? getSuspendedThenable() : thrownValue$63, 12 !== request.status && "object" === typeof node && null !== node) {
            if ("function" === typeof node.then) {
              segment = node;
              node = thrownValue$63 === SuspenseException ? getThenableStateAfterSuspending() : null;
              request = spawnNewSuspendedRenderTask(request, task, node).ping;
              segment.then(request, request);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext(previousContext);
              return;
            }
            if ("Maximum call stack size exceeded" === node.message) {
              segment = thrownValue$63 === SuspenseException ? getThenableStateAfterSuspending() : null;
              segment = spawnNewSuspendedRenderTask(request, task, segment);
              request.pingedTasks.push(segment);
              task.formatContext = previousFormatContext;
              task.context = previousContext;
              task.keyPath = previousKeyPath;
              task.treeContext = previousTreeContext;
              task.componentStack = previousComponentStack;
              switchContext(previousContext);
              return;
            }
          }
        }
      }
      task.formatContext = previousFormatContext;
      task.context = previousContext;
      task.keyPath = previousKeyPath;
      task.treeContext = previousTreeContext;
      switchContext(previousContext);
      throw node;
    }
    function abortTaskSoft(task) {
      var boundary = task.blockedBoundary, segment = task.blockedSegment;
      null !== segment && (segment.status = 3, finishedTask(this, boundary, task.row, segment));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error, errorDigest$jscomp$0) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (4 === node.length)
          abortRemainingReplayNodes(
            request$jscomp$0,
            boundary,
            node[2],
            node[3],
            error,
            errorDigest$jscomp$0
          );
        else {
          node = node[5];
          var request = request$jscomp$0, errorDigest = errorDigest$jscomp$0, resumedBoundary = createSuspenseBoundary(
            request,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          resumedBoundary.parentFlushed = true;
          resumedBoundary.rootSegmentID = node;
          resumedBoundary.status = 4;
          resumedBoundary.errorDigest = errorDigest;
          resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
        }
      }
      nodes.length = 0;
      if (null !== slots) {
        if (null === boundary)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        4 !== boundary.status && (boundary.status = 4, boundary.errorDigest = errorDigest$jscomp$0, boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
        if ("object" === typeof slots) for (var index in slots) delete slots[index];
      }
    }
    function abortTask(task, request, error) {
      var boundary = task.blockedBoundary, segment = task.blockedSegment;
      if (null !== segment) {
        if (6 === segment.status) return;
        segment.status = 3;
      }
      var errorInfo = getThrownInfo(task.componentStack);
      if (null === boundary) {
        if (13 !== request.status && 14 !== request.status) {
          boundary = task.replay;
          if (null === boundary) {
            null !== request.trackedPostpones && null !== segment ? (boundary = request.trackedPostpones, logRecoverableError(request, error, errorInfo), trackPostpone(request, boundary, task, segment), finishedTask(request, null, task.row, segment)) : (logRecoverableError(request, error, errorInfo), fatalError(request, error));
            return;
          }
          boundary.pendingTasks--;
          0 === boundary.pendingTasks && 0 < boundary.nodes.length && (segment = logRecoverableError(request, error, errorInfo), abortRemainingReplayNodes(
            request,
            null,
            boundary.nodes,
            boundary.slots,
            error,
            segment
          ));
          request.pendingRootTasks--;
          0 === request.pendingRootTasks && completeShell(request);
        }
      } else {
        var trackedPostpones$64 = request.trackedPostpones;
        if (4 !== boundary.status) {
          if (null !== trackedPostpones$64 && null !== segment)
            return logRecoverableError(request, error, errorInfo), trackPostpone(request, trackedPostpones$64, task, segment), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
              return abortTask(fallbackTask, request, error);
            }), boundary.fallbackAbortableTasks.clear(), finishedTask(request, boundary, task.row, segment);
          boundary.status = 4;
          segment = logRecoverableError(request, error, errorInfo);
          boundary.status = 4;
          boundary.errorDigest = segment;
          untrackBoundary(request, boundary);
          boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary);
        }
        boundary.pendingTasks--;
        segment = boundary.row;
        null !== segment && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
        boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
          return abortTask(fallbackTask, request, error);
        });
        boundary.fallbackAbortableTasks.clear();
      }
      task = task.row;
      null !== task && 0 === --task.pendingTasks && finishSuspenseListRow(request, task);
      request.allPendingTasks--;
      0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
      try {
        var renderState = request.renderState, onHeaders = renderState.onHeaders;
        if (onHeaders) {
          var headers = renderState.headers;
          if (headers) {
            renderState.headers = null;
            var linkHeader = headers.preconnects;
            headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
            headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
            if (!shellComplete) {
              var queueIter = renderState.styles.values(), queueStep = queueIter.next();
              b: for (; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())
                for (var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()) {
                  var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props, header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                    crossOrigin: props$jscomp$0.crossOrigin,
                    integrity: props$jscomp$0.integrity,
                    nonce: props$jscomp$0.nonce,
                    type: props$jscomp$0.type,
                    fetchPriority: props$jscomp$0.fetchPriority,
                    referrerPolicy: props$jscomp$0.referrerPolicy,
                    media: props$jscomp$0.media
                  });
                  if (0 <= (headers.remainingCapacity -= header.length + 2))
                    renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [props.crossOrigin, props.integrity] : PRELOAD_NO_CREDS;
                  else break b;
                }
            }
            linkHeader ? onHeaders({ Link: linkHeader }) : onHeaders({});
          }
        }
      } catch (error) {
        logRecoverableError(request, error, {});
      }
    }
    function completeShell(request) {
      null === request.trackedPostpones && safelyEmitEarlyPreloads(request, true);
      null === request.trackedPostpones && preparePreamble(request);
      request.onShellError = noop;
      request = request.onShellReady;
      request();
    }
    function completeAll(request) {
      safelyEmitEarlyPreloads(
        request,
        null === request.trackedPostpones ? true : null === request.completedRootSegment || 5 !== request.completedRootSegment.status
      );
      preparePreamble(request);
      request = request.onAllReady;
      request();
    }
    function queueCompletedSegment(boundary, segment) {
      if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
        var childSegment = segment.children[0];
        childSegment.id = segment.id;
        childSegment.parentFlushed = true;
        1 !== childSegment.status && 3 !== childSegment.status && 4 !== childSegment.status || queueCompletedSegment(boundary, childSegment);
      } else boundary.completedSegments.push(segment);
    }
    function finishedSegment(request, boundary, segment) {
      if (null !== byteLengthOfChunk) {
        segment = segment.chunks;
        for (var segmentByteSize = 0, i = 0; i < segment.length; i++)
          segmentByteSize += byteLengthOfChunk(segment[i]);
        null === boundary ? request.byteSize += segmentByteSize : boundary.byteSize += segmentByteSize;
      }
    }
    function finishedTask(request, boundary, row, segment) {
      null !== row && (0 === --row.pendingTasks ? finishSuspenseListRow(request, row) : row.together && tryToResolveTogetherRow(request, row));
      request.allPendingTasks--;
      if (null === boundary) {
        if (null !== segment && segment.parentFlushed) {
          if (null !== request.completedRootSegment)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          request.completedRootSegment = segment;
        }
        request.pendingRootTasks--;
        0 === request.pendingRootTasks && completeShell(request);
      } else if (boundary.pendingTasks--, 4 !== boundary.status)
        if (0 === boundary.pendingTasks)
          if (0 === boundary.status && (boundary.status = 1), null !== segment && segment.parentFlushed && (1 === segment.status || 3 === segment.status) && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), 1 === boundary.status)
            row = boundary.row, null !== row && hoistHoistables(row.hoistables, boundary.contentState), isEligibleForOutlining(request, boundary) || (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row)), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.contentPreamble && preparePreamble(request);
          else {
            if (5 === boundary.status && (boundary = boundary.row, null !== boundary)) {
              if (null !== request.trackedPostpones) {
                row = request.trackedPostpones;
                var postponedRow = boundary.next;
                if (null !== postponedRow && (segment = postponedRow.boundaries, null !== segment))
                  for (postponedRow.boundaries = null, postponedRow = 0; postponedRow < segment.length; postponedRow++) {
                    var postponedBoundary = segment[postponedRow];
                    trackPostponedBoundary(request, row, postponedBoundary);
                    finishedTask(request, postponedBoundary, null, null);
                  }
              }
              0 === --boundary.pendingTasks && finishSuspenseListRow(request, boundary);
            }
          }
        else
          null === segment || !segment.parentFlushed || 1 !== segment.status && 3 !== segment.status || (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)), boundary = boundary.row, null !== boundary && boundary.together && tryToResolveTogetherRow(request, boundary);
      0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$2) {
      if (14 !== request$jscomp$2.status && 13 !== request$jscomp$2.status) {
        var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = HooksDispatcher;
        var prevAsyncDispatcher = ReactSharedInternals.A;
        ReactSharedInternals.A = DefaultAsyncDispatcher;
        var prevRequest = currentRequest;
        currentRequest = request$jscomp$2;
        var prevResumableState = currentResumableState;
        currentResumableState = request$jscomp$2.resumableState;
        try {
          var pingedTasks = request$jscomp$2.pingedTasks, i;
          for (i = 0; i < pingedTasks.length; i++) {
            var task = pingedTasks[i], request = request$jscomp$2, segment = task.blockedSegment;
            if (null === segment) {
              var request$jscomp$0 = request;
              if (0 !== task.replay.pendingTasks) {
                switchContext(task.context);
                try {
                  "number" === typeof task.replay.slots ? resumeNode(
                    request$jscomp$0,
                    task,
                    task.replay.slots,
                    task.node,
                    task.childIndex
                  ) : retryNode(request$jscomp$0, task);
                  if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  task.replay.pendingTasks--;
                  task.abortSet.delete(task);
                  finishedTask(
                    request$jscomp$0,
                    task.blockedBoundary,
                    task.row,
                    null
                  );
                } catch (thrownValue) {
                  resetHooksState();
                  var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                  if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                    var ping = task.ping;
                    x.then(ping, ping);
                    task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
                  } else {
                    task.replay.pendingTasks--;
                    task.abortSet.delete(task);
                    var errorInfo = getThrownInfo(task.componentStack);
                    request = void 0;
                    var request$jscomp$1 = request$jscomp$0, boundary = task.blockedBoundary, error$jscomp$0 = 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, replayNodes = task.replay.nodes, resumeSlots = task.replay.slots;
                    request = logRecoverableError(
                      request$jscomp$1,
                      error$jscomp$0,
                      errorInfo
                    );
                    abortRemainingReplayNodes(
                      request$jscomp$1,
                      boundary,
                      replayNodes,
                      resumeSlots,
                      error$jscomp$0,
                      request
                    );
                    request$jscomp$0.pendingRootTasks--;
                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                    request$jscomp$0.allPendingTasks--;
                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                  }
                } finally {
                }
              }
            } else if (request$jscomp$0 = void 0, request$jscomp$1 = segment, 0 === request$jscomp$1.status) {
              request$jscomp$1.status = 6;
              switchContext(task.context);
              var childrenLength = request$jscomp$1.children.length, chunkLength = request$jscomp$1.chunks.length;
              try {
                retryNode(request, task), request$jscomp$1.lastPushedText && request$jscomp$1.textEmbedded && request$jscomp$1.chunks.push(textSeparator), task.abortSet.delete(task), request$jscomp$1.status = 1, finishedSegment(request, task.blockedBoundary, request$jscomp$1), finishedTask(
                  request,
                  task.blockedBoundary,
                  task.row,
                  request$jscomp$1
                );
              } catch (thrownValue) {
                resetHooksState();
                request$jscomp$1.children.length = childrenLength;
                request$jscomp$1.chunks.length = chunkLength;
                var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                if (12 === request.status && null !== request.trackedPostpones) {
                  var trackedPostpones = request.trackedPostpones, thrownInfo = getThrownInfo(task.componentStack);
                  task.abortSet.delete(task);
                  logRecoverableError(request, x$jscomp$0, thrownInfo);
                  trackPostpone(request, trackedPostpones, task, request$jscomp$1);
                  finishedTask(
                    request,
                    task.blockedBoundary,
                    task.row,
                    request$jscomp$1
                  );
                } else if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                  request$jscomp$1.status = 0;
                  task.thenableState = thrownValue === SuspenseException ? getThenableStateAfterSuspending() : null;
                  var ping$jscomp$0 = task.ping;
                  x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                } else {
                  var errorInfo$jscomp$0 = getThrownInfo(task.componentStack);
                  task.abortSet.delete(task);
                  request$jscomp$1.status = 4;
                  var boundary$jscomp$0 = task.blockedBoundary, row = task.row;
                  null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
                  request.allPendingTasks--;
                  request$jscomp$0 = logRecoverableError(
                    request,
                    x$jscomp$0,
                    errorInfo$jscomp$0
                  );
                  if (null === boundary$jscomp$0) fatalError(request, x$jscomp$0);
                  else if (boundary$jscomp$0.pendingTasks--, 4 !== boundary$jscomp$0.status) {
                    boundary$jscomp$0.status = 4;
                    boundary$jscomp$0.errorDigest = request$jscomp$0;
                    untrackBoundary(request, boundary$jscomp$0);
                    var boundaryRow = boundary$jscomp$0.row;
                    null !== boundaryRow && 0 === --boundaryRow.pendingTasks && finishSuspenseListRow(request, boundaryRow);
                    boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0);
                    0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.contentPreamble && preparePreamble(request);
                  }
                  0 === request.allPendingTasks && completeAll(request);
                }
              } finally {
              }
            }
          }
          pingedTasks.splice(0, i);
          null !== request$jscomp$2.destination && flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
        } catch (error) {
          logRecoverableError(request$jscomp$2, error, {}), fatalError(request$jscomp$2, error);
        } finally {
          currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
        }
      }
    }
    function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
      segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
      for (var pendingPreambles = false, i = 0; i < segment.children.length; i++)
        pendingPreambles = preparePreambleFromSegment(
          request,
          segment.children[i],
          collectedPreambleSegments
        ) || pendingPreambles;
      return pendingPreambles;
    }
    function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
      var boundary = segment.boundary;
      if (null === boundary)
        return preparePreambleFromSubtree(
          request,
          segment,
          collectedPreambleSegments
        );
      var preamble = boundary.contentPreamble, fallbackPreamble = boundary.fallbackPreamble;
      if (null === preamble || null === fallbackPreamble) return false;
      switch (boundary.status) {
        case 1:
          hoistPreambleState(request.renderState, preamble);
          request.byteSize += boundary.byteSize;
          segment = boundary.completedSegments[0];
          if (!segment)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return preparePreambleFromSubtree(
            request,
            segment,
            collectedPreambleSegments
          );
        case 5:
          if (null !== request.trackedPostpones) return true;
        case 4:
          if (1 === segment.status)
            return hoistPreambleState(request.renderState, fallbackPreamble), preparePreambleFromSubtree(
              request,
              segment,
              collectedPreambleSegments
            );
        default:
          return true;
      }
    }
    function preparePreamble(request) {
      if (request.completedRootSegment && null === request.completedPreambleSegments) {
        var collectedPreambleSegments = [], originalRequestByteSize = request.byteSize, hasPendingPreambles = preparePreambleFromSegment(
          request,
          request.completedRootSegment,
          collectedPreambleSegments
        ), preamble = request.renderState.preamble;
        false === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks ? request.completedPreambleSegments = collectedPreambleSegments : request.byteSize = originalRequestByteSize;
      }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
      segment.parentFlushed = true;
      switch (segment.status) {
        case 0:
          segment.id = request.nextSegmentId++;
        case 5:
          return hoistableState = segment.id, segment.lastPushedText = false, segment.textEmbedded = false, request = request.renderState, writeChunk(destination, placeholder1), writeChunk(destination, request.placeholderPrefix), request = hoistableState.toString(16), writeChunk(destination, request), writeChunkAndReturn(destination, placeholder2);
        case 1:
          segment.status = 2;
          var r = true, chunks = segment.chunks, chunkIdx = 0;
          segment = segment.children;
          for (var childIdx = 0; childIdx < segment.length; childIdx++) {
            for (r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)
              writeChunk(destination, chunks[chunkIdx]);
            r = flushSegment(request, destination, r, hoistableState);
          }
          for (; chunkIdx < chunks.length - 1; chunkIdx++)
            writeChunk(destination, chunks[chunkIdx]);
          chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx]));
          return r;
        case 3:
          return true;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    var flushedByteSize = 0;
    function flushSegment(request, destination, segment, hoistableState) {
      var boundary = segment.boundary;
      if (null === boundary)
        return flushSubtree(request, destination, segment, hoistableState);
      boundary.parentFlushed = true;
      if (4 === boundary.status) {
        var row = boundary.row;
        null !== row && 0 === --row.pendingTasks && finishSuspenseListRow(request, row);
        boundary = boundary.errorDigest;
        writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        writeChunk(destination, clientRenderedSuspenseBoundaryError1);
        boundary && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, escapeTextForBrowser(boundary)), writeChunk(
          destination,
          clientRenderedSuspenseBoundaryErrorAttrInterstitial
        ));
        writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
        flushSubtree(request, destination, segment, hoistableState);
      } else if (1 !== boundary.status)
        0 === boundary.status && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(
          destination,
          request.renderState,
          boundary.rootSegmentID
        ), hoistableState && hoistHoistables(hoistableState, boundary.fallbackState), flushSubtree(request, destination, segment, hoistableState);
      else if (!flushingPartialBoundaries && isEligibleForOutlining(request, boundary) && (flushedByteSize + boundary.byteSize > request.progressiveChunkSize || hasSuspenseyContent(boundary.contentState)))
        boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(
          destination,
          request.renderState,
          boundary.rootSegmentID
        ), flushSubtree(request, destination, segment, hoistableState);
      else {
        flushedByteSize += boundary.byteSize;
        hoistableState && hoistHoistables(hoistableState, boundary.contentState);
        segment = boundary.row;
        null !== segment && isEligibleForOutlining(request, boundary) && 0 === --segment.pendingTasks && finishSuspenseListRow(request, segment);
        writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        segment = boundary.completedSegments;
        if (1 !== segment.length)
          throw Error(
            "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
          );
        flushSegment(request, destination, segment[0], hoistableState);
      }
      return writeChunkAndReturn(destination, endSuspenseBoundary);
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
      writeStartSegment(
        destination,
        request.renderState,
        segment.parentFormatContext,
        segment.id
      );
      flushSegment(request, destination, segment, hoistableState);
      return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
      flushedByteSize = boundary.byteSize;
      for (var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)
        flushPartiallyCompletedSegment(
          request,
          destination,
          boundary,
          completedSegments[i]
        );
      completedSegments.length = 0;
      completedSegments = boundary.row;
      null !== completedSegments && isEligibleForOutlining(request, boundary) && 0 === --completedSegments.pendingTasks && finishSuspenseListRow(request, completedSegments);
      writeHoistablesForBoundary(
        destination,
        boundary.contentState,
        request.renderState
      );
      completedSegments = request.resumableState;
      request = request.renderState;
      i = boundary.rootSegmentID;
      boundary = boundary.contentState;
      var requiresStyleInsertion = request.stylesToHoist;
      request.stylesToHoist = false;
      writeChunk(destination, request.startInlineScript);
      writeChunk(destination, endOfStartTag);
      requiresStyleInsertion ? (0 === (completedSegments.instructions & 4) && (completedSegments.instructions |= 4, writeChunk(destination, clientRenderScriptFunctionOnly)), 0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, writeChunk(destination, completeBoundaryScriptFunctionOnly)), 0 === (completedSegments.instructions & 8) ? (completedSegments.instructions |= 8, writeChunk(destination, completeBoundaryWithStylesScript1FullPartial)) : writeChunk(destination, completeBoundaryWithStylesScript1Partial)) : (0 === (completedSegments.instructions & 2) && (completedSegments.instructions |= 2, writeChunk(destination, completeBoundaryScriptFunctionOnly)), writeChunk(destination, completeBoundaryScript1Partial));
      completedSegments = i.toString(16);
      writeChunk(destination, request.boundaryPrefix);
      writeChunk(destination, completedSegments);
      writeChunk(destination, completeBoundaryScript2);
      writeChunk(destination, request.segmentPrefix);
      writeChunk(destination, completedSegments);
      requiresStyleInsertion ? (writeChunk(destination, completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : writeChunk(destination, completeBoundaryScript3b);
      boundary = writeChunkAndReturn(destination, completeBoundaryScriptEnd);
      return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
      if (2 === segment.status) return true;
      var hoistableState = boundary.contentState, segmentID = segment.id;
      if (-1 === segmentID) {
        if (-1 === (segment.id = boundary.rootSegmentID))
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return flushSegmentContainer(request, destination, segment, hoistableState);
      }
      if (segmentID === boundary.rootSegmentID)
        return flushSegmentContainer(request, destination, segment, hoistableState);
      flushSegmentContainer(request, destination, segment, hoistableState);
      boundary = request.resumableState;
      request = request.renderState;
      writeChunk(destination, request.startInlineScript);
      writeChunk(destination, endOfStartTag);
      0 === (boundary.instructions & 1) ? (boundary.instructions |= 1, writeChunk(destination, completeSegmentScript1Full)) : writeChunk(destination, completeSegmentScript1Partial);
      writeChunk(destination, request.segmentPrefix);
      segmentID = segmentID.toString(16);
      writeChunk(destination, segmentID);
      writeChunk(destination, completeSegmentScript2);
      writeChunk(destination, request.placeholderPrefix);
      writeChunk(destination, segmentID);
      destination = writeChunkAndReturn(destination, completeSegmentScriptEnd);
      return destination;
    }
    var flushingPartialBoundaries = false;
    function flushCompletedQueues(request, destination) {
      currentView = new Uint8Array(2048);
      writtenBytes = 0;
      destinationHasCapacity$1 = true;
      try {
        if (!(0 < request.pendingRootTasks)) {
          var i, completedRootSegment = request.completedRootSegment;
          if (null !== completedRootSegment) {
            if (5 === completedRootSegment.status) return;
            var completedPreambleSegments = request.completedPreambleSegments;
            if (null === completedPreambleSegments) return;
            flushedByteSize = request.byteSize;
            var resumableState = request.resumableState, renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
            if (htmlChunks) {
              for (i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)
                writeChunk(destination, htmlChunks[i$jscomp$0]);
              if (headChunks)
                for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
                  writeChunk(destination, headChunks[i$jscomp$0]);
              else
                writeChunk(destination, startChunkForTag("head")), writeChunk(destination, endOfStartTag);
            } else if (headChunks)
              for (i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)
                writeChunk(destination, headChunks[i$jscomp$0]);
            var charsetChunks = renderState.charsetChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)
              writeChunk(destination, charsetChunks[i$jscomp$0]);
            charsetChunks.length = 0;
            renderState.preconnects.forEach(flushResource, destination);
            renderState.preconnects.clear();
            var viewportChunks = renderState.viewportChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)
              writeChunk(destination, viewportChunks[i$jscomp$0]);
            viewportChunks.length = 0;
            renderState.fontPreloads.forEach(flushResource, destination);
            renderState.fontPreloads.clear();
            renderState.highImagePreloads.forEach(flushResource, destination);
            renderState.highImagePreloads.clear();
            currentlyFlushingRenderState = renderState;
            renderState.styles.forEach(flushStylesInPreamble, destination);
            currentlyFlushingRenderState = null;
            var importMapChunks = renderState.importMapChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)
              writeChunk(destination, importMapChunks[i$jscomp$0]);
            importMapChunks.length = 0;
            renderState.bootstrapScripts.forEach(flushResource, destination);
            renderState.scripts.forEach(flushResource, destination);
            renderState.scripts.clear();
            renderState.bulkPreloads.forEach(flushResource, destination);
            renderState.bulkPreloads.clear();
            htmlChunks || headChunks || (resumableState.instructions |= 32);
            var hoistableChunks = renderState.hoistableChunks;
            for (i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)
              writeChunk(destination, hoistableChunks[i$jscomp$0]);
            for (resumableState = hoistableChunks.length = 0; resumableState < completedPreambleSegments.length; resumableState++) {
              var segments = completedPreambleSegments[resumableState];
              for (renderState = 0; renderState < segments.length; renderState++)
                flushSegment(request, destination, segments[renderState], null);
            }
            var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
            (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) && writeChunk(destination, endChunkForTag("head"));
            var bodyChunks = preamble$jscomp$0.bodyChunks;
            if (bodyChunks)
              for (completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++)
                writeChunk(destination, bodyChunks[completedPreambleSegments]);
            flushSegment(request, destination, completedRootSegment, null);
            request.completedRootSegment = null;
            var renderState$jscomp$0 = request.renderState;
            if (0 !== request.allPendingTasks || 0 !== request.clientRenderedBoundaries.length || 0 !== request.completedBoundaries.length || null !== request.trackedPostpones && (0 !== request.trackedPostpones.rootNodes.length || null !== request.trackedPostpones.rootSlots)) {
              var resumableState$jscomp$0 = request.resumableState;
              if (0 === (resumableState$jscomp$0.instructions & 64)) {
                resumableState$jscomp$0.instructions |= 64;
                writeChunk(destination, renderState$jscomp$0.startInlineScript);
                if (0 === (resumableState$jscomp$0.instructions & 32)) {
                  resumableState$jscomp$0.instructions |= 32;
                  var shellId = "_" + resumableState$jscomp$0.idPrefix + "R_";
                  writeChunk(destination, completedShellIdAttributeStart);
                  writeChunk(destination, escapeTextForBrowser(shellId));
                  writeChunk(destination, attributeEnd);
                }
                writeChunk(destination, endOfStartTag);
                writeChunk(destination, shellTimeRuntimeScript);
                writeChunkAndReturn(destination, endInlineScript);
              }
            }
            writeBootstrap(destination, renderState$jscomp$0);
          }
          var renderState$jscomp$1 = request.renderState;
          completedRootSegment = 0;
          var viewportChunks$jscomp$0 = renderState$jscomp$1.viewportChunks;
          for (completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)
            writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
          viewportChunks$jscomp$0.length = 0;
          renderState$jscomp$1.preconnects.forEach(flushResource, destination);
          renderState$jscomp$1.preconnects.clear();
          renderState$jscomp$1.fontPreloads.forEach(flushResource, destination);
          renderState$jscomp$1.fontPreloads.clear();
          renderState$jscomp$1.highImagePreloads.forEach(
            flushResource,
            destination
          );
          renderState$jscomp$1.highImagePreloads.clear();
          renderState$jscomp$1.styles.forEach(preloadLateStyles, destination);
          renderState$jscomp$1.scripts.forEach(flushResource, destination);
          renderState$jscomp$1.scripts.clear();
          renderState$jscomp$1.bulkPreloads.forEach(flushResource, destination);
          renderState$jscomp$1.bulkPreloads.clear();
          var hoistableChunks$jscomp$0 = renderState$jscomp$1.hoistableChunks;
          for (completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)
            writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
          hoistableChunks$jscomp$0.length = 0;
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          for (i = 0; i < clientRenderedBoundaries.length; i++) {
            var boundary = clientRenderedBoundaries[i];
            renderState$jscomp$1 = destination;
            var resumableState$jscomp$1 = request.resumableState, renderState$jscomp$2 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest;
            writeChunk(
              renderState$jscomp$1,
              renderState$jscomp$2.startInlineScript
            );
            writeChunk(renderState$jscomp$1, endOfStartTag);
            0 === (resumableState$jscomp$1.instructions & 4) ? (resumableState$jscomp$1.instructions |= 4, writeChunk(renderState$jscomp$1, clientRenderScript1Full)) : writeChunk(renderState$jscomp$1, clientRenderScript1Partial);
            writeChunk(renderState$jscomp$1, renderState$jscomp$2.boundaryPrefix);
            writeChunk(renderState$jscomp$1, id.toString(16));
            writeChunk(renderState$jscomp$1, clientRenderScript1A);
            errorDigest && (writeChunk(
              renderState$jscomp$1,
              clientRenderErrorScriptArgInterstitial
            ), writeChunk(
              renderState$jscomp$1,
              escapeJSStringsForInstructionScripts(errorDigest || "")
            ));
            var JSCompiler_inline_result = writeChunkAndReturn(
              renderState$jscomp$1,
              clientRenderScriptEnd
            );
            if (!JSCompiler_inline_result) {
              request.destination = null;
              i++;
              clientRenderedBoundaries.splice(0, i);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i);
          var completedBoundaries = request.completedBoundaries;
          for (i = 0; i < completedBoundaries.length; i++)
            if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
              request.destination = null;
              i++;
              completedBoundaries.splice(0, i);
              return;
            }
          completedBoundaries.splice(0, i);
          completeWriting(destination);
          currentView = new Uint8Array(2048);
          writtenBytes = 0;
          flushingPartialBoundaries = destinationHasCapacity$1 = true;
          var partialBoundaries = request.partialBoundaries;
          for (i = 0; i < partialBoundaries.length; i++) {
            var boundary$70 = partialBoundaries[i];
            a: {
              clientRenderedBoundaries = request;
              boundary = destination;
              flushedByteSize = boundary$70.byteSize;
              var completedSegments = boundary$70.completedSegments;
              for (JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)
                if (!flushPartiallyCompletedSegment(
                  clientRenderedBoundaries,
                  boundary,
                  boundary$70,
                  completedSegments[JSCompiler_inline_result]
                )) {
                  JSCompiler_inline_result++;
                  completedSegments.splice(0, JSCompiler_inline_result);
                  var JSCompiler_inline_result$jscomp$0 = false;
                  break a;
                }
              completedSegments.splice(0, JSCompiler_inline_result);
              var row = boundary$70.row;
              null !== row && row.together && 1 === boundary$70.pendingTasks && (1 === row.pendingTasks ? unblockSuspenseListRow(
                clientRenderedBoundaries,
                row,
                row.hoistables
              ) : row.pendingTasks--);
              JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(
                boundary,
                boundary$70.contentState,
                clientRenderedBoundaries.renderState
              );
            }
            if (!JSCompiler_inline_result$jscomp$0) {
              request.destination = null;
              i++;
              partialBoundaries.splice(0, i);
              return;
            }
          }
          partialBoundaries.splice(0, i);
          flushingPartialBoundaries = false;
          var largeBoundaries = request.completedBoundaries;
          for (i = 0; i < largeBoundaries.length; i++)
            if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
              request.destination = null;
              i++;
              largeBoundaries.splice(0, i);
              return;
            }
          largeBoundaries.splice(0, i);
        }
      } finally {
        flushingPartialBoundaries = false, 0 === request.allPendingTasks && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length ? (request.flushScheduled = false, i = request.resumableState, i.hasBody && writeChunk(destination, endChunkForTag("body")), i.hasHtml && writeChunk(destination, endChunkForTag("html")), completeWriting(destination), flushBuffered(destination), request.status = 14, destination.end(), request.destination = null) : (completeWriting(destination), flushBuffered(destination));
      }
    }
    function startWork(request) {
      request.flushScheduled = null !== request.destination;
      scheduleMicrotask(function() {
        return requestStorage.run(request, performWork, request);
      });
      setImmediate(function() {
        10 === request.status && (request.status = 11);
        null === request.trackedPostpones && requestStorage.run(
          request,
          enqueueEarlyPreloadsAfterInitialWork,
          request
        );
      });
    }
    function enqueueEarlyPreloadsAfterInitialWork(request) {
      safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
    }
    function enqueueFlush(request) {
      false === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = true, setImmediate(function() {
        var destination = request.destination;
        destination ? flushCompletedQueues(request, destination) : request.flushScheduled = false;
      }));
    }
    function startFlowing(request, destination) {
      if (13 === request.status)
        request.status = 14, destination.destroy(request.fatalError);
      else if (14 !== request.status && null === request.destination) {
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error) {
          logRecoverableError(request, error, {}), fatalError(request, error);
        }
      }
    }
    function abort(request, reason) {
      if (11 === request.status || 10 === request.status) request.status = 12;
      try {
        var abortableTasks = request.abortableTasks;
        if (0 < abortableTasks.size) {
          var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
          request.fatalError = error;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, error);
          });
          abortableTasks.clear();
        }
        null !== request.destination && flushCompletedQueues(request, request.destination);
      } catch (error$72) {
        logRecoverableError(request, error$72, {}), fatalError(request, error$72);
      }
    }
    function addToReplayParent(node, parentKeyPath, trackedPostpones) {
      if (null === parentKeyPath) trackedPostpones.rootNodes.push(node);
      else {
        var workingMap = trackedPostpones.workingMap, parentNode = workingMap.get(parentKeyPath);
        void 0 === parentNode && (parentNode = [parentKeyPath[1], parentKeyPath[2], [], null], workingMap.set(parentKeyPath, parentNode), addToReplayParent(parentNode, parentKeyPath[0], trackedPostpones));
        parentNode[2].push(node);
      }
    }
    function getPostponedState(request) {
      var trackedPostpones = request.trackedPostpones;
      if (null === trackedPostpones || 0 === trackedPostpones.rootNodes.length && null === trackedPostpones.rootSlots)
        return request.trackedPostpones = null;
      if (null === request.completedRootSegment || 5 !== request.completedRootSegment.status && null !== request.completedPreambleSegments) {
        var nextSegmentId = request.nextSegmentId;
        var replaySlots = trackedPostpones.rootSlots;
        var resumableState = request.resumableState;
        resumableState.bootstrapScriptContent = void 0;
        resumableState.bootstrapScripts = void 0;
        resumableState.bootstrapModules = void 0;
      } else {
        nextSegmentId = 0;
        replaySlots = -1;
        resumableState = request.resumableState;
        var renderState = request.renderState;
        resumableState.nextFormID = 0;
        resumableState.hasBody = false;
        resumableState.hasHtml = false;
        resumableState.unknownResources = { font: renderState.resets.font };
        resumableState.dnsResources = renderState.resets.dns;
        resumableState.connectResources = renderState.resets.connect;
        resumableState.imageResources = renderState.resets.image;
        resumableState.styleResources = renderState.resets.style;
        resumableState.scriptResources = {};
        resumableState.moduleUnknownResources = {};
        resumableState.moduleScriptResources = {};
        resumableState.instructions = 0;
      }
      return {
        nextSegmentId,
        rootFormatContext: request.rootFormatContext,
        progressiveChunkSize: request.progressiveChunkSize,
        resumableState: request.resumableState,
        replayNodes: trackedPostpones.rootNodes,
        replaySlots
      };
    }
    function ensureCorrectIsomorphicReactVersion() {
      var isomorphicReactPackageVersion = React5.version;
      if ("19.2.3" !== isomorphicReactPackageVersion)
        throw Error(
          'Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + (isomorphicReactPackageVersion + "\n  - react-dom:  19.2.3\nLearn more: https://react.dev/warnings/version-mismatch")
        );
    }
    ensureCorrectIsomorphicReactVersion();
    function createDrainHandler(destination, request) {
      return function() {
        return startFlowing(request, destination);
      };
    }
    function createCancelHandler(request, reason) {
      return function() {
        request.destination = null;
        abort(request, Error(reason));
      };
    }
    function createRequestImpl(children, options) {
      var resumableState = createResumableState(
        options ? options.identifierPrefix : void 0,
        options ? options.unstable_externalRuntimeSrc : void 0,
        options ? options.bootstrapScriptContent : void 0,
        options ? options.bootstrapScripts : void 0,
        options ? options.bootstrapModules : void 0
      );
      return createRequest(
        children,
        resumableState,
        createRenderState(
          resumableState,
          options ? options.nonce : void 0,
          options ? options.unstable_externalRuntimeSrc : void 0,
          options ? options.importMap : void 0,
          options ? options.onHeaders : void 0,
          options ? options.maxHeadersLength : void 0
        ),
        createRootFormatContext(options ? options.namespaceURI : void 0),
        options ? options.progressiveChunkSize : void 0,
        options ? options.onError : void 0,
        options ? options.onAllReady : void 0,
        options ? options.onShellReady : void 0,
        options ? options.onShellError : void 0,
        void 0,
        options ? options.onPostpone : void 0,
        options ? options.formState : void 0
      );
    }
    function createFakeWritableFromReadableStreamController$1(controller) {
      return {
        write: function(chunk) {
          "string" === typeof chunk && (chunk = textEncoder.encode(chunk));
          controller.enqueue(chunk);
          return true;
        },
        end: function() {
          controller.close();
        },
        destroy: function(error) {
          "function" === typeof controller.error ? controller.error(error) : controller.close();
        }
      };
    }
    function resumeRequestImpl(children, postponedState, options) {
      return resumeRequest(
        children,
        postponedState,
        createRenderState(
          postponedState.resumableState,
          options ? options.nonce : void 0,
          void 0,
          void 0,
          void 0,
          void 0
        ),
        options ? options.onError : void 0,
        options ? options.onAllReady : void 0,
        options ? options.onShellReady : void 0,
        options ? options.onShellError : void 0,
        void 0,
        options ? options.onPostpone : void 0
      );
    }
    ensureCorrectIsomorphicReactVersion();
    function createFakeWritableFromReadableStreamController(controller) {
      return {
        write: function(chunk) {
          "string" === typeof chunk && (chunk = textEncoder.encode(chunk));
          controller.enqueue(chunk);
          return true;
        },
        end: function() {
          controller.close();
        },
        destroy: function(error) {
          "function" === typeof controller.error ? controller.error(error) : controller.close();
        }
      };
    }
    function createFakeWritableFromReadable(readable) {
      return {
        write: function(chunk) {
          return readable.push(chunk);
        },
        end: function() {
          readable.push(null);
        },
        destroy: function(error) {
          readable.destroy(error);
        }
      };
    }
    exports.prerender = function(children, options) {
      return new Promise(function(resolve, reject) {
        var onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
        onHeaders && (onHeadersImpl = function(headersDescriptor) {
          onHeaders(new Headers(headersDescriptor));
        });
        var resources = createResumableState(
          options ? options.identifierPrefix : void 0,
          options ? options.unstable_externalRuntimeSrc : void 0,
          options ? options.bootstrapScriptContent : void 0,
          options ? options.bootstrapScripts : void 0,
          options ? options.bootstrapModules : void 0
        ), request = createPrerenderRequest(
          children,
          resources,
          createRenderState(
            resources,
            void 0,
            options ? options.unstable_externalRuntimeSrc : void 0,
            options ? options.importMap : void 0,
            onHeadersImpl,
            options ? options.maxHeadersLength : void 0
          ),
          createRootFormatContext(options ? options.namespaceURI : void 0),
          options ? options.progressiveChunkSize : void 0,
          options ? options.onError : void 0,
          function() {
            var writable, stream2 = new ReadableStream(
              {
                type: "bytes",
                start: function(controller) {
                  writable = createFakeWritableFromReadableStreamController(controller);
                },
                pull: function() {
                  startFlowing(request, writable);
                },
                cancel: function(reason) {
                  request.destination = null;
                  abort(request, reason);
                }
              },
              { highWaterMark: 0 }
            );
            stream2 = { postponed: getPostponedState(request), prelude: stream2 };
            resolve(stream2);
          },
          void 0,
          void 0,
          reject,
          options ? options.onPostpone : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.prerenderToNodeStream = function(children, options) {
      return new Promise(function(resolve, reject) {
        var resumableState = createResumableState(
          options ? options.identifierPrefix : void 0,
          options ? options.unstable_externalRuntimeSrc : void 0,
          options ? options.bootstrapScriptContent : void 0,
          options ? options.bootstrapScripts : void 0,
          options ? options.bootstrapModules : void 0
        ), request = createPrerenderRequest(
          children,
          resumableState,
          createRenderState(
            resumableState,
            void 0,
            options ? options.unstable_externalRuntimeSrc : void 0,
            options ? options.importMap : void 0,
            options ? options.onHeaders : void 0,
            options ? options.maxHeadersLength : void 0
          ),
          createRootFormatContext(options ? options.namespaceURI : void 0),
          options ? options.progressiveChunkSize : void 0,
          options ? options.onError : void 0,
          function() {
            var readable = new stream.Readable({
              read: function() {
                startFlowing(request, writable);
              }
            }), writable = createFakeWritableFromReadable(readable);
            readable = {
              postponed: getPostponedState(request),
              prelude: readable
            };
            resolve(readable);
          },
          void 0,
          void 0,
          reject,
          options ? options.onPostpone : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.renderToPipeableStream = function(children, options) {
      var request = createRequestImpl(children, options), hasStartedFlowing = false;
      startWork(request);
      return {
        pipe: function(destination) {
          if (hasStartedFlowing)
            throw Error(
              "React currently only supports piping to one writable stream."
            );
          hasStartedFlowing = true;
          safelyEmitEarlyPreloads(
            request,
            null === request.trackedPostpones ? 0 === request.pendingRootTasks : null === request.completedRootSegment ? 0 === request.pendingRootTasks : 5 !== request.completedRootSegment.status
          );
          startFlowing(request, destination);
          destination.on("drain", createDrainHandler(destination, request));
          destination.on(
            "error",
            createCancelHandler(
              request,
              "The destination stream errored while writing data."
            )
          );
          destination.on(
            "close",
            createCancelHandler(request, "The destination stream closed early.")
          );
          return destination;
        },
        abort: function(reason) {
          abort(request, reason);
        }
      };
    };
    exports.renderToReadableStream = function(children, options) {
      return new Promise(function(resolve, reject) {
        var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
          onAllReady = res;
          onFatalError = rej;
        }), onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
        onHeaders && (onHeadersImpl = function(headersDescriptor) {
          onHeaders(new Headers(headersDescriptor));
        });
        var resumableState = createResumableState(
          options ? options.identifierPrefix : void 0,
          options ? options.unstable_externalRuntimeSrc : void 0,
          options ? options.bootstrapScriptContent : void 0,
          options ? options.bootstrapScripts : void 0,
          options ? options.bootstrapModules : void 0
        ), request = createRequest(
          children,
          resumableState,
          createRenderState(
            resumableState,
            options ? options.nonce : void 0,
            options ? options.unstable_externalRuntimeSrc : void 0,
            options ? options.importMap : void 0,
            onHeadersImpl,
            options ? options.maxHeadersLength : void 0
          ),
          createRootFormatContext(options ? options.namespaceURI : void 0),
          options ? options.progressiveChunkSize : void 0,
          options ? options.onError : void 0,
          onAllReady,
          function() {
            var writable, stream2 = new ReadableStream(
              {
                type: "bytes",
                start: function(controller) {
                  writable = createFakeWritableFromReadableStreamController$1(
                    controller
                  );
                },
                pull: function() {
                  startFlowing(request, writable);
                },
                cancel: function(reason) {
                  request.destination = null;
                  abort(request, reason);
                }
              },
              { highWaterMark: 0 }
            );
            stream2.allReady = allReady;
            resolve(stream2);
          },
          function(error) {
            allReady.catch(function() {
            });
            reject(error);
          },
          onFatalError,
          options ? options.onPostpone : void 0,
          options ? options.formState : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.resume = function(children, postponedState, options) {
      return new Promise(function(resolve, reject) {
        var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
          onAllReady = res;
          onFatalError = rej;
        }), request = resumeRequest(
          children,
          postponedState,
          createRenderState(
            postponedState.resumableState,
            options ? options.nonce : void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          options ? options.onError : void 0,
          onAllReady,
          function() {
            var writable, stream2 = new ReadableStream(
              {
                type: "bytes",
                start: function(controller) {
                  writable = createFakeWritableFromReadableStreamController$1(
                    controller
                  );
                },
                pull: function() {
                  startFlowing(request, writable);
                },
                cancel: function(reason) {
                  request.destination = null;
                  abort(request, reason);
                }
              },
              { highWaterMark: 0 }
            );
            stream2.allReady = allReady;
            resolve(stream2);
          },
          function(error) {
            allReady.catch(function() {
            });
            reject(error);
          },
          onFatalError,
          options ? options.onPostpone : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.resumeAndPrerender = function(children, postponedState, options) {
      return new Promise(function(resolve, reject) {
        var request = resumeAndPrerenderRequest(
          children,
          postponedState,
          createRenderState(
            postponedState.resumableState,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          options ? options.onError : void 0,
          function() {
            var writable, stream2 = new ReadableStream(
              {
                type: "bytes",
                start: function(controller) {
                  writable = createFakeWritableFromReadableStreamController(controller);
                },
                pull: function() {
                  startFlowing(request, writable);
                },
                cancel: function(reason) {
                  request.destination = null;
                  abort(request, reason);
                }
              },
              { highWaterMark: 0 }
            );
            stream2 = { postponed: getPostponedState(request), prelude: stream2 };
            resolve(stream2);
          },
          void 0,
          void 0,
          reject,
          options ? options.onPostpone : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.resumeAndPrerenderToNodeStream = function(children, postponedState, options) {
      return new Promise(function(resolve, reject) {
        var request = resumeAndPrerenderRequest(
          children,
          postponedState,
          createRenderState(
            postponedState.resumableState,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          options ? options.onError : void 0,
          function() {
            var readable = new stream.Readable({
              read: function() {
                startFlowing(request, writable);
              }
            }), writable = createFakeWritableFromReadable(readable);
            readable = { postponed: getPostponedState(request), prelude: readable };
            resolve(readable);
          },
          void 0,
          void 0,
          reject,
          options ? options.onPostpone : void 0
        );
        if (options && options.signal) {
          var signal = options.signal;
          if (signal.aborted) abort(request, signal.reason);
          else {
            var listener = function() {
              abort(request, signal.reason);
              signal.removeEventListener("abort", listener);
            };
            signal.addEventListener("abort", listener);
          }
        }
        startWork(request);
      });
    };
    exports.resumeToPipeableStream = function(children, postponedState, options) {
      var request = resumeRequestImpl(children, postponedState, options), hasStartedFlowing = false;
      startWork(request);
      return {
        pipe: function(destination) {
          if (hasStartedFlowing)
            throw Error(
              "React currently only supports piping to one writable stream."
            );
          hasStartedFlowing = true;
          startFlowing(request, destination);
          destination.on("drain", createDrainHandler(destination, request));
          destination.on(
            "error",
            createCancelHandler(
              request,
              "The destination stream errored while writing data."
            )
          );
          destination.on(
            "close",
            createCancelHandler(request, "The destination stream closed early.")
          );
          return destination;
        },
        abort: function(reason) {
          abort(request, reason);
        }
      };
    };
    exports.version = "19.2.3";
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports) {
    "use strict";
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_node_production();
      s = require_react_dom_server_node_production();
    } else {
      l = null;
      s = null;
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToPipeableStream = s.renderToPipeableStream;
    exports.renderToReadableStream = s.renderToReadableStream;
    exports.resumeToPipeableStream = s.resumeToPipeableStream;
    exports.resume = s.resume;
  }
});

// node_modules/@remix-run/router/dist/router.cjs.js
var require_router_cjs = __commonJS({
  "node_modules/@remix-run/router/dist/router.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var Action = /* @__PURE__ */ (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
      return Action2;
    })({});
    var PopStateEventType = "popstate";
    function createMemoryHistory(options) {
      if (options === void 0) {
        options = {};
      }
      let {
        initialEntries = ["/"],
        initialIndex,
        v5Compat = false
      } = options;
      let entries;
      entries = initialEntries.map((entry, index2) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0));
      let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
      let action = Action.Pop;
      let listener = null;
      function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
      }
      function getCurrentLocation() {
        return entries[index];
      }
      function createMemoryLocation(to, state, key) {
        if (state === void 0) {
          state = null;
        }
        let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
      }
      function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
      }
      let history = {
        get index() {
          return index;
        },
        get action() {
          return action;
        },
        get location() {
          return getCurrentLocation();
        },
        createHref,
        createURL(to) {
          return new URL(createHref(to), "http://localhost");
        },
        encodeLocation(to) {
          let path = typeof to === "string" ? parsePath(to) : to;
          return {
            pathname: path.pathname || "",
            search: path.search || "",
            hash: path.hash || ""
          };
        },
        push(to, state) {
          action = Action.Push;
          let nextLocation = createMemoryLocation(to, state);
          index += 1;
          entries.splice(index, entries.length, nextLocation);
          if (v5Compat && listener) {
            listener({
              action,
              location: nextLocation,
              delta: 1
            });
          }
        },
        replace(to, state) {
          action = Action.Replace;
          let nextLocation = createMemoryLocation(to, state);
          entries[index] = nextLocation;
          if (v5Compat && listener) {
            listener({
              action,
              location: nextLocation,
              delta: 0
            });
          }
        },
        go(delta) {
          action = Action.Pop;
          let nextIndex = clampIndex(index + delta);
          let nextLocation = entries[nextIndex];
          index = nextIndex;
          if (listener) {
            listener({
              action,
              location: nextLocation,
              delta
            });
          }
        },
        listen(fn) {
          listener = fn;
          return () => {
            listener = null;
          };
        }
      };
      return history;
    }
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function createHashHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createHashLocation(window2, globalHistory) {
        let {
          pathname = "/",
          search = "",
          hash = ""
        } = parsePath(window2.location.hash.substr(1));
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
          pathname = "/" + pathname;
        }
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createHashHref(window2, to) {
        let base = window2.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
          let url = window2.location.href;
          let hashIndex = url.indexOf("#");
          href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
      }
      function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
      }
      return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined") console.warn(message);
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index) {
      return {
        usr: location.state,
        key: location.key,
        idx: index
      };
    }
    function createLocation(current, to, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      let index = getIndex();
      if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
          idx: index
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace2(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to) {
          return createHref(window2, to);
        },
        createURL,
        encodeLocation(to) {
          let url = createURL(to);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace: replace2,
        go(n) {
          return globalHistory.go(n);
        }
      };
      return history;
    }
    var ResultType = /* @__PURE__ */ (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
      return ResultType2;
    })({});
    var immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function isIndexRoute(route) {
      return route.index === true;
    }
    function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      if (manifest === void 0) {
        manifest = {};
      }
      return routes.map((route, index) => {
        let treePath = [...parentPath, String(index)];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`);
        if (isIndexRoute(route)) {
          let indexRoute = _extends({}, route, mapRouteProperties(route), {
            id
          });
          manifest[id] = indexRoute;
          return indexRoute;
        } else {
          let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
            id,
            children: void 0
          });
          manifest[id] = pathOrLayoutRoute;
          if (route.children) {
            pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
          }
          return pathOrLayoutRoute;
        }
      });
    }
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      return matchRoutesImpl(routes, locationArg, basename, false);
    }
    function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded, allowPartial);
      }
      return matches;
    }
    function convertRouteMatchToUiMatch(match, loaderData) {
      let {
        route,
        pathname,
        params
      } = match;
      return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
      };
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0) return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
    }
    var paramRe = /^:[\w-]+$/;
    var dynamicSegmentValue = 3;
    var indexRouteValue = 2;
    var emptySegmentValue = 1;
    var staticSegmentValue = 10;
    var splatPenalty = -2;
    var isSplat = (s) => s === "*";
    function computeScore(path, index) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b) {
      let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b[b.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname, allowPartial) {
      if (allowPartial === void 0) {
        allowPartial = false;
      }
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        let route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
          match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          }, remainingPathname);
        }
        if (!match) {
          return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function generatePath(originalPath, params) {
      if (params === void 0) {
        params = {};
      }
      let path = originalPath;
      if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
      }
      const prefix = path.startsWith("/") ? "/" : "";
      const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
      const segments = path.split(/\/+/).map((segment, index, array) => {
        const isLastSegment = index === array.length - 1;
        if (isLastSegment && segment === "*") {
          const star = "*";
          return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
          const [, key, optional] = keyMatch;
          let param = params[key];
          invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
          return stringify(param);
        }
        return segment.replace(/\?$/g, "");
      }).filter((segment) => !!segment);
      return prefix + segments.join("/");
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match = pathname.match(matcher);
      if (!match) return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = compiledParams.reduce((memo, _ref, index) => {
        let {
          paramName,
          isOptional
        } = _ref;
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo[paramName] = void 0;
        } else {
          memo[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
        params.push({
          paramName,
          isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        params.push({
          paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value) {
      try {
        return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/") return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    var ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX$1.test(url);
    function resolvePath(to, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to === "string" ? parsePath(to) : to;
      let pathname;
      if (toPathname) {
        if (isAbsoluteUrl(toPathname)) {
          pathname = toPathname;
        } else {
          if (toPathname.includes("//")) {
            let oldPathname = toPathname;
            toPathname = toPathname.replace(/\/\/+/g, "/");
            warning(false, "Pathnames cannot have embedded double slashes - normalizing " + (oldPathname + " -> " + toPathname));
          }
          if (toPathname.startsWith("/")) {
            pathname = resolvePathname(toPathname.substring(1), "/");
          } else {
            pathname = resolvePathname(toPathname, fromPathname);
          }
        }
      } else {
        pathname = fromPathname;
      }
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1) segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
      let pathMatches = getPathContributingMatches(matches);
      if (v7_relativeSplatPath) {
        return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
      }
      return pathMatches.map((match) => match.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to;
      if (typeof toArg === "string") {
        to = parsePath(toArg);
      } else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
      }
      let isEmptyPath = toArg === "" || to.pathname === "";
      let toPathname = isEmptyPath ? "/" : to.pathname;
      let from;
      if (toPathname == null) {
        from = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to, from);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    function getToPathname(to) {
      return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
    }
    var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    var json = function json2(data2, init) {
      if (init === void 0) {
        init = {};
      }
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      let headers = new Headers(responseInit.headers);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data2), _extends({}, responseInit, {
        headers
      }));
    };
    var DataWithResponseInit = class {
      constructor(data2, init) {
        this.type = "DataWithResponseInit";
        this.data = data2;
        this.init = init || null;
      }
    };
    function data(data2, init) {
      return new DataWithResponseInit(data2, typeof init === "number" ? {
        status: init
      } : init);
    }
    var AbortedDeferredError = class extends Error {
    };
    var DeferredData = class {
      constructor(data2, responseInit) {
        this.pendingKeysSet = /* @__PURE__ */ new Set();
        this.subscribers = /* @__PURE__ */ new Set();
        this.deferredKeys = [];
        invariant(data2 && typeof data2 === "object" && !Array.isArray(data2), "defer() only accepts plain objects");
        let reject;
        this.abortPromise = new Promise((_, r) => reject = r);
        this.controller = new AbortController();
        let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data2).reduce((acc, _ref2) => {
          let [key, value] = _ref2;
          return Object.assign(acc, {
            [key]: this.trackPromise(key, value)
          });
        }, {});
        if (this.done) {
          this.unlistenAbortSignal();
        }
        this.init = responseInit;
      }
      trackPromise(key, value) {
        if (!(value instanceof Promise)) {
          return value;
        }
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        let promise = Promise.race([value, this.abortPromise]).then((data2) => this.onSettle(promise, key, void 0, data2), (error) => this.onSettle(promise, key, error));
        promise.catch(() => {
        });
        Object.defineProperty(promise, "_tracked", {
          get: () => true
        });
        return promise;
      }
      onSettle(promise, key, error, data2) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
          this.unlistenAbortSignal();
          Object.defineProperty(promise, "_error", {
            get: () => error
          });
          return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) {
          this.unlistenAbortSignal();
        }
        if (error === void 0 && data2 === void 0) {
          let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
          Object.defineProperty(promise, "_error", {
            get: () => undefinedError
          });
          this.emit(false, key);
          return Promise.reject(undefinedError);
        }
        if (data2 === void 0) {
          Object.defineProperty(promise, "_error", {
            get: () => error
          });
          this.emit(false, key);
          return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
          get: () => data2
        });
        this.emit(false, key);
        return data2;
      }
      emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
      }
      subscribe(fn) {
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
      }
      cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
        this.emit(true);
      }
      async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
          let onAbort = () => this.cancel();
          signal.addEventListener("abort", onAbort);
          aborted = await new Promise((resolve) => {
            this.subscribe((aborted2) => {
              signal.removeEventListener("abort", onAbort);
              if (aborted2 || this.done) {
                resolve(aborted2);
              }
            });
          });
        }
        return aborted;
      }
      get done() {
        return this.pendingKeysSet.size === 0;
      }
      get unwrappedData() {
        invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3) => {
          let [key, value] = _ref3;
          return Object.assign(acc, {
            [key]: unwrapTrackedPromise(value)
          });
        }, {});
      }
      get pendingKeys() {
        return Array.from(this.pendingKeysSet);
      }
    };
    function isTrackedPromise(value) {
      return value instanceof Promise && value._tracked === true;
    }
    function unwrapTrackedPromise(value) {
      if (!isTrackedPromise(value)) {
        return value;
      }
      if (value._error) {
        throw value._error;
      }
      return value._data;
    }
    var defer = function defer2(data2, init) {
      if (init === void 0) {
        init = {};
      }
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      return new DeferredData(data2, responseInit);
    };
    var redirect = function redirect2(url, init) {
      if (init === void 0) {
        init = 302;
      }
      let responseInit = init;
      if (typeof responseInit === "number") {
        responseInit = {
          status: responseInit
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response(null, _extends({}, responseInit, {
        headers
      }));
    };
    var redirectDocument = (url, init) => {
      let response = redirect(url, init);
      response.headers.set("X-Remix-Reload-Document", "true");
      return response;
    };
    var replace = (url, init) => {
      let response = redirect(url, init);
      response.headers.set("X-Remix-Replace", "true");
      return response;
    };
    var ErrorResponseImpl = class {
      constructor(status, statusText, data2, internal) {
        if (internal === void 0) {
          internal = false;
        }
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data2 instanceof Error) {
          this.data = data2.toString();
          this.error = data2;
        } else {
          this.data = data2;
        }
      }
    };
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    var validMutationMethodsArr = ["post", "put", "patch", "delete"];
    var validMutationMethods = new Set(validMutationMethodsArr);
    var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    var validRequestMethods = new Set(validRequestMethodsArr);
    var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
    var IDLE_NAVIGATION = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_FETCHER = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_BLOCKER = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
    };
    var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var defaultMapRouteProperties = (route) => ({
      hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
    var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
    function createRouter(init) {
      const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
      const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
      const isServer = !isBrowser;
      invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
      let mapRouteProperties;
      if (init.mapRouteProperties) {
        mapRouteProperties = init.mapRouteProperties;
      } else if (init.detectErrorBoundary) {
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route) => ({
          hasErrorBoundary: detectErrorBoundary(route)
        });
      } else {
        mapRouteProperties = defaultMapRouteProperties;
      }
      let manifest = {};
      let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, void 0, manifest);
      let inFlightDataRoutes;
      let basename = init.basename || "/";
      let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
      let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
      let future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false,
        v7_skipActionErrorRevalidation: false
      }, init.future);
      let unlistenHistory = null;
      let subscribers = /* @__PURE__ */ new Set();
      let savedScrollPositions = null;
      let getScrollRestorationKey = null;
      let getScrollPosition = null;
      let initialScrollRestored = init.hydrationData != null;
      let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
      let initialMatchesIsFOW = false;
      let initialErrors = null;
      if (initialMatches == null && !patchRoutesOnNavigationImpl) {
        let error = getInternalRouterError(404, {
          pathname: init.history.location.pathname
        });
        let {
          matches,
          route
        } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
          [route.id]: error
        };
      }
      if (initialMatches && !init.hydrationData) {
        let fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
        if (fogOfWar.active) {
          initialMatches = null;
        }
      }
      let initialized;
      if (!initialMatches) {
        initialized = false;
        initialMatches = [];
        if (future.v7_partialHydration) {
          let fogOfWar = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
          if (fogOfWar.active && fogOfWar.matches) {
            initialMatchesIsFOW = true;
            initialMatches = fogOfWar.matches;
          }
        }
      } else if (initialMatches.some((m) => m.route.lazy)) {
        initialized = false;
      } else if (!initialMatches.some((m) => m.route.loader)) {
        initialized = true;
      } else if (future.v7_partialHydration) {
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        if (errors) {
          let idx = initialMatches.findIndex((m) => errors[m.route.id] !== void 0);
          initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
        } else {
          initialized = initialMatches.every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
        }
      } else {
        initialized = init.hydrationData != null;
      }
      let router;
      let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
      let pendingAction = Action.Pop;
      let pendingPreventScrollReset = false;
      let pendingNavigationController;
      let pendingViewTransitionEnabled = false;
      let appliedViewTransitions = /* @__PURE__ */ new Map();
      let removePageHideEventListener = null;
      let isUninterruptedRevalidation = false;
      let isRevalidationRequired = false;
      let cancelledDeferredRoutes = [];
      let cancelledFetcherLoads = /* @__PURE__ */ new Set();
      let fetchControllers = /* @__PURE__ */ new Map();
      let incrementingLoadId = 0;
      let pendingNavigationLoadId = -1;
      let fetchReloadIds = /* @__PURE__ */ new Map();
      let fetchRedirectIds = /* @__PURE__ */ new Set();
      let fetchLoadMatches = /* @__PURE__ */ new Map();
      let activeFetchers = /* @__PURE__ */ new Map();
      let deletedFetchers = /* @__PURE__ */ new Set();
      let activeDeferreds = /* @__PURE__ */ new Map();
      let blockerFunctions = /* @__PURE__ */ new Map();
      let unblockBlockerHistoryUpdate = void 0;
      function initialize() {
        unlistenHistory = init.history.listen((_ref) => {
          let {
            action: historyAction,
            location,
            delta
          } = _ref;
          if (unblockBlockerHistoryUpdate) {
            unblockBlockerHistoryUpdate();
            unblockBlockerHistoryUpdate = void 0;
            return;
          }
          warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let blockerKey = shouldBlockNavigation({
            currentLocation: state.location,
            nextLocation: location,
            historyAction
          });
          if (blockerKey && delta != null) {
            let nextHistoryUpdatePromise = new Promise((resolve) => {
              unblockBlockerHistoryUpdate = resolve;
            });
            init.history.go(delta * -1);
            updateBlocker(blockerKey, {
              state: "blocked",
              location,
              proceed() {
                updateBlocker(blockerKey, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location
                });
                nextHistoryUpdatePromise.then(() => init.history.go(delta));
              },
              reset() {
                let blockers = new Map(state.blockers);
                blockers.set(blockerKey, IDLE_BLOCKER);
                updateState({
                  blockers
                });
              }
            });
            return;
          }
          return startNavigation(historyAction, location);
        });
        if (isBrowser) {
          restoreAppliedTransitions(routerWindow, appliedViewTransitions);
          let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
          routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
          removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        if (!state.initialized) {
          startNavigation(Action.Pop, state.location, {
            initialHydration: true
          });
        }
        return router;
      }
      function dispose() {
        if (unlistenHistory) {
          unlistenHistory();
        }
        if (removePageHideEventListener) {
          removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key) => deleteFetcher(key));
        state.blockers.forEach((_, key) => deleteBlocker(key));
      }
      function subscribe(fn) {
        subscribers.add(fn);
        return () => subscribers.delete(fn);
      }
      function updateState(newState, opts) {
        if (opts === void 0) {
          opts = {};
        }
        state = _extends({}, state, newState);
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) {
          state.fetchers.forEach((fetcher, key) => {
            if (fetcher.state === "idle") {
              if (deletedFetchers.has(key)) {
                deletedFetchersKeys.push(key);
              } else {
                completedFetchers.push(key);
              }
            }
          });
        }
        deletedFetchers.forEach((key) => {
          if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
            deletedFetchersKeys.push(key);
          }
        });
        [...subscribers].forEach((subscriber) => subscriber(state, {
          deletedFetchers: deletedFetchersKeys,
          viewTransitionOpts: opts.viewTransitionOpts,
          flushSync: opts.flushSync === true
        }));
        if (future.v7_fetcherPersist) {
          completedFetchers.forEach((key) => state.fetchers.delete(key));
          deletedFetchersKeys.forEach((key) => deleteFetcher(key));
        } else {
          deletedFetchersKeys.forEach((key) => deletedFetchers.delete(key));
        }
      }
      function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let {
          flushSync
        } = _temp === void 0 ? {} : _temp;
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
          if (Object.keys(newState.actionData).length > 0) {
            actionData = newState.actionData;
          } else {
            actionData = null;
          }
        } else if (isActionReload) {
          actionData = state.actionData;
        } else {
          actionData = null;
        }
        let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        let blockers = state.blockers;
        if (blockers.size > 0) {
          blockers = new Map(blockers);
          blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
        }
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
          dataRoutes = inFlightDataRoutes;
          inFlightDataRoutes = void 0;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) {
          init.history.push(location, location.state);
        } else if (pendingAction === Action.Replace) {
          init.history.replace(location, location.state);
        }
        let viewTransitionOpts;
        if (pendingAction === Action.Pop) {
          let priorPaths = appliedViewTransitions.get(state.location.pathname);
          if (priorPaths && priorPaths.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: state.location,
              nextLocation: location
            };
          } else if (appliedViewTransitions.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: location,
              nextLocation: state.location
            };
          }
        } else if (pendingViewTransitionEnabled) {
          let toPaths = appliedViewTransitions.get(state.location.pathname);
          if (toPaths) {
            toPaths.add(location.pathname);
          } else {
            toPaths = /* @__PURE__ */ new Set([location.pathname]);
            appliedViewTransitions.set(state.location.pathname, toPaths);
          }
          viewTransitionOpts = {
            currentLocation: state.location,
            nextLocation: location
          };
        }
        updateState(_extends({}, newState, {
          // matches, errors, fetchers go through as-is
          actionData,
          loaderData,
          historyAction: pendingAction,
          location,
          initialized: true,
          navigation: IDLE_NAVIGATION,
          revalidation: "idle",
          restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
          preventScrollReset,
          blockers
        }), {
          viewTransitionOpts,
          flushSync: flushSync === true
        });
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
      }
      async function navigate(to, opts) {
        if (typeof to === "number") {
          init.history.go(to);
          return;
        }
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let {
          path,
          submission,
          error
        } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : void 0;
        let historyAction = Action.Push;
        if (userReplace === true) {
          historyAction = Action.Replace;
        } else if (userReplace === false) ;
        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
          historyAction = Action.Replace;
        }
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
        let flushSync = (opts && opts.flushSync) === true;
        let blockerKey = shouldBlockNavigation({
          currentLocation,
          nextLocation,
          historyAction
        });
        if (blockerKey) {
          updateBlocker(blockerKey, {
            state: "blocked",
            location: nextLocation,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: nextLocation
              });
              navigate(to, opts);
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({
                blockers
              });
            }
          });
          return;
        }
        return await startNavigation(historyAction, nextLocation, {
          submission,
          // Send through the formData serialization error if we have one so we can
          // render at the right error boundary after we match routes
          pendingError: error,
          preventScrollReset,
          replace: opts && opts.replace,
          enableViewTransition: opts && opts.viewTransition,
          flushSync
        });
      }
      function revalidate() {
        interruptActiveLoads();
        updateState({
          revalidation: "loading"
        });
        if (state.navigation.state === "submitting") {
          return;
        }
        if (state.navigation.state === "idle") {
          startNavigation(state.historyAction, state.location, {
            startUninterruptedRevalidation: true
          });
          return;
        }
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
          overrideNavigation: state.navigation,
          // Proxy through any rending view transition
          enableViewTransition: pendingViewTransitionEnabled === true
        });
      }
      async function startNavigation(historyAction, location, opts) {
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = opts != null && opts.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? (
          // `matchRoutes()` has already been called if we're in here via `router.initialize()`
          state.matches
        ) : matchRoutes(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
          completeNavigation(location, {
            matches
          }, {
            flushSync
          });
          return;
        }
        let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
        if (fogOfWar.active && fogOfWar.matches) {
          matches = fogOfWar.matches;
        }
        if (!matches) {
          let {
            error,
            notFoundMatches,
            route
          } = handleNavigational404(location.pathname);
          completeNavigation(location, {
            matches: notFoundMatches,
            loaderData: {},
            errors: {
              [route.id]: error
            }
          }, {
            flushSync
          });
          return;
        }
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionResult;
        if (opts && opts.pendingError) {
          pendingActionResult = [findNearestBoundary(matches).route.id, {
            type: ResultType.error,
            error: opts.pendingError
          }];
        } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
          let actionResult = await handleAction(request, location, opts.submission, matches, fogOfWar.active, {
            replace: opts.replace,
            flushSync
          });
          if (actionResult.shortCircuited) {
            return;
          }
          if (actionResult.pendingActionResult) {
            let [routeId, result] = actionResult.pendingActionResult;
            if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
              pendingNavigationController = null;
              completeNavigation(location, {
                matches: actionResult.matches,
                loaderData: {},
                errors: {
                  [routeId]: result.error
                }
              });
              return;
            }
          }
          matches = actionResult.matches || matches;
          pendingActionResult = actionResult.pendingActionResult;
          loadingNavigation = getLoadingNavigation(location, opts.submission);
          flushSync = false;
          fogOfWar.active = false;
          request = createClientSideRequest(init.history, request.url, request.signal);
        }
        let {
          shortCircuited,
          matches: updatedMatches,
          loaderData,
          errors
        } = await handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) {
          return;
        }
        pendingNavigationController = null;
        completeNavigation(location, _extends({
          matches: updatedMatches || matches
        }, getActionDataForCommit(pendingActionResult), {
          loaderData,
          errors
        }));
      }
      async function handleAction(request, location, submission, matches, isFogOfWar, opts) {
        if (opts === void 0) {
          opts = {};
        }
        interruptActiveLoads();
        let navigation = getSubmittingNavigation(location, submission);
        updateState({
          navigation
        }, {
          flushSync: opts.flushSync === true
        });
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
          if (discoverResult.type === "aborted") {
            return {
              shortCircuited: true
            };
          } else if (discoverResult.type === "error") {
            let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
            return {
              matches: discoverResult.partialMatches,
              pendingActionResult: [boundaryId, {
                type: ResultType.error,
                error: discoverResult.error
              }]
            };
          } else if (!discoverResult.matches) {
            let {
              notFoundMatches,
              error,
              route
            } = handleNavigational404(location.pathname);
            return {
              matches: notFoundMatches,
              pendingActionResult: [route.id, {
                type: ResultType.error,
                error
              }]
            };
          } else {
            matches = discoverResult.matches;
          }
        }
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          result = {
            type: ResultType.error,
            error: getInternalRouterError(405, {
              method: request.method,
              pathname: location.pathname,
              routeId: actionMatch.route.id
            })
          };
        } else {
          let results = await callDataStrategy("action", state, request, [actionMatch], matches, null);
          result = results[actionMatch.route.id];
          if (request.signal.aborted) {
            return {
              shortCircuited: true
            };
          }
        }
        if (isRedirectResult(result)) {
          let replace2;
          if (opts && opts.replace != null) {
            replace2 = opts.replace;
          } else {
            let location2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
            replace2 = location2 === state.location.pathname + state.location.search;
          }
          await startRedirectNavigation(request, result, true, {
            submission,
            replace: replace2
          });
          return {
            shortCircuited: true
          };
        }
        if (isDeferredResult(result)) {
          throw getInternalRouterError(400, {
            type: "defer-action"
          });
        }
        if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
          if ((opts && opts.replace) !== true) {
            pendingAction = Action.Push;
          }
          return {
            matches,
            pendingActionResult: [boundaryMatch.route.id, result]
          };
        }
        return {
          matches,
          pendingActionResult: [actionMatch.route.id, result]
        };
      }
      async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        let shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
        if (isFogOfWar) {
          if (shouldUpdateNavigationState) {
            let actionData = getUpdatedActionData(pendingActionResult);
            updateState(_extends({
              navigation: loadingNavigation
            }, actionData !== void 0 ? {
              actionData
            } : {}), {
              flushSync
            });
          }
          let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
          if (discoverResult.type === "aborted") {
            return {
              shortCircuited: true
            };
          } else if (discoverResult.type === "error") {
            let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
            return {
              matches: discoverResult.partialMatches,
              loaderData: {},
              errors: {
                [boundaryId]: discoverResult.error
              }
            };
          } else if (!discoverResult.matches) {
            let {
              error,
              notFoundMatches,
              route
            } = handleNavigational404(location.pathname);
            return {
              matches: notFoundMatches,
              loaderData: {},
              errors: {
                [route.id]: error
              }
            };
          } else {
            matches = discoverResult.matches;
          }
        }
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
        cancelActiveDeferreds((routeId) => !(matches && matches.some((m) => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m) => m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
          let updatedFetchers2 = markFetchRedirectsDone();
          completeNavigation(location, _extends({
            matches,
            loaderData: {},
            // Commit pending error if we're short circuiting
            errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
              [pendingActionResult[0]]: pendingActionResult[1].error
            } : null
          }, getActionDataForCommit(pendingActionResult), updatedFetchers2 ? {
            fetchers: new Map(state.fetchers)
          } : {}), {
            flushSync
          });
          return {
            shortCircuited: true
          };
        }
        if (shouldUpdateNavigationState) {
          let updates = {};
          if (!isFogOfWar) {
            updates.navigation = loadingNavigation;
            let actionData = getUpdatedActionData(pendingActionResult);
            if (actionData !== void 0) {
              updates.actionData = actionData;
            }
          }
          if (revalidatingFetchers.length > 0) {
            updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
          }
          updateState(updates, {
            flushSync
          });
        }
        revalidatingFetchers.forEach((rf) => {
          abortFetcher(rf.key);
          if (rf.controller) {
            fetchControllers.set(rf.key, rf.controller);
          }
        });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
        if (pendingNavigationController) {
          pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        }
        let {
          loaderResults,
          fetcherResults
        } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) {
          return {
            shortCircuited: true
          };
        }
        if (pendingNavigationController) {
          pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        }
        revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
          await startRedirectNavigation(request, redirect2.result, true, {
            replace: replace2
          });
          return {
            shortCircuited: true
          };
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
          fetchRedirectIds.add(redirect2.key);
          await startRedirectNavigation(request, redirect2.result, true, {
            replace: replace2
          });
          return {
            shortCircuited: true
          };
        }
        let {
          loaderData,
          errors
        } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
        activeDeferreds.forEach((deferredData, routeId) => {
          deferredData.subscribe((aborted) => {
            if (aborted || deferredData.done) {
              activeDeferreds.delete(routeId);
            }
          });
        });
        if (future.v7_partialHydration && initialHydration && state.errors) {
          errors = _extends({}, state.errors, errors);
        }
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return _extends({
          matches,
          loaderData,
          errors
        }, shouldUpdateFetchers ? {
          fetchers: new Map(state.fetchers)
        } : {});
      }
      function getUpdatedActionData(pendingActionResult) {
        if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
          return {
            [pendingActionResult[0]]: pendingActionResult[1].data
          };
        } else if (state.actionData) {
          if (Object.keys(state.actionData).length === 0) {
            return null;
          } else {
            return state.actionData;
          }
        }
      }
      function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
        revalidatingFetchers.forEach((rf) => {
          let fetcher = state.fetchers.get(rf.key);
          let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
          state.fetchers.set(rf.key, revalidatingFetcher);
        });
        return new Map(state.fetchers);
      }
      function fetch(key, routeId, href, opts) {
        if (isServer) {
          throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        }
        abortFetcher(key);
        let flushSync = (opts && opts.flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = matchRoutes(routesToUse, normalizedPath, basename);
        let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
        if (fogOfWar.active && fogOfWar.matches) {
          matches = fogOfWar.matches;
        }
        if (!matches) {
          setFetcherError(key, routeId, getInternalRouterError(404, {
            pathname: normalizedPath
          }), {
            flushSync
          });
          return;
        }
        let {
          path,
          submission,
          error
        } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
          setFetcherError(key, routeId, error, {
            flushSync
          });
          return;
        }
        let match = getTargetMatch(matches, path);
        let preventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
          handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
          return;
        }
        fetchLoadMatches.set(key, {
          routeId,
          path
        });
        handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
      }
      async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        function detectAndHandle405Error(m) {
          if (!m.route.action && !m.route.lazy) {
            let error = getInternalRouterError(405, {
              method: submission.formMethod,
              pathname: path,
              routeId
            });
            setFetcherError(key, routeId, error, {
              flushSync
            });
            return true;
          }
          return false;
        }
        if (!isFogOfWar && detectAndHandle405Error(match)) {
          return;
        }
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
          flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
          if (discoverResult.type === "aborted") {
            return;
          } else if (discoverResult.type === "error") {
            setFetcherError(key, routeId, discoverResult.error, {
              flushSync
            });
            return;
          } else if (!discoverResult.matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
              pathname: path
            }), {
              flushSync
            });
            return;
          } else {
            requestMatches = discoverResult.matches;
            match = getTargetMatch(requestMatches, path);
            if (detectAndHandle405Error(match)) {
              return;
            }
          }
        }
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResults = await callDataStrategy("action", state, fetchRequest, [match], requestMatches, key);
        let actionResult = actionResults[match.route.id];
        if (fetchRequest.signal.aborted) {
          if (fetchControllers.get(key) === abortController) {
            fetchControllers.delete(key);
          }
          return;
        }
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
          if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          }
        } else {
          if (isRedirectResult(actionResult)) {
            fetchControllers.delete(key);
            if (pendingNavigationLoadId > originatingLoadId) {
              updateFetcherState(key, getDoneFetcher(void 0));
              return;
            } else {
              fetchRedirectIds.add(key);
              updateFetcherState(key, getLoadingFetcher(submission));
              return startRedirectNavigation(fetchRequest, actionResult, false, {
                fetcherSubmission: submission,
                preventScrollReset
              });
            }
          }
          if (isErrorResult(actionResult)) {
            setFetcherError(key, routeId, actionResult.error);
            return;
          }
        }
        if (isDeferredResult(actionResult)) {
          throw getInternalRouterError(400, {
            type: "defer-action"
          });
        }
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
        revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
          let staleKey = rf.key;
          let existingFetcher2 = state.fetchers.get(staleKey);
          let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
          state.fetchers.set(staleKey, revalidatingFetcher);
          abortFetcher(staleKey);
          if (rf.controller) {
            fetchControllers.set(staleKey, rf.controller);
          }
        });
        updateState({
          fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let {
          loaderResults,
          fetcherResults
        } = await callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) {
          return;
        }
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
        let redirect2 = findRedirect(loaderResults);
        if (redirect2) {
          return startRedirectNavigation(revalidationRequest, redirect2.result, false, {
            preventScrollReset
          });
        }
        redirect2 = findRedirect(fetcherResults);
        if (redirect2) {
          fetchRedirectIds.add(redirect2.key);
          return startRedirectNavigation(revalidationRequest, redirect2.result, false, {
            preventScrollReset
          });
        }
        let {
          loaderData,
          errors
        } = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
        if (state.fetchers.has(key)) {
          let doneFetcher = getDoneFetcher(actionResult.data);
          state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
          invariant(pendingAction, "Expected pending action");
          pendingNavigationController && pendingNavigationController.abort();
          completeNavigation(state.navigation.location, {
            matches,
            loaderData,
            errors,
            fetchers: new Map(state.fetchers)
          });
        } else {
          updateState({
            errors,
            loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
            fetchers: new Map(state.fetchers)
          });
          isRevalidationRequired = false;
        }
      }
      async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
          flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
        if (isFogOfWar) {
          let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
          if (discoverResult.type === "aborted") {
            return;
          } else if (discoverResult.type === "error") {
            setFetcherError(key, routeId, discoverResult.error, {
              flushSync
            });
            return;
          } else if (!discoverResult.matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
              pathname: path
            }), {
              flushSync
            });
            return;
          } else {
            matches = discoverResult.matches;
            match = getTargetMatch(matches, path);
          }
        }
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let results = await callDataStrategy("loader", state, fetchRequest, [match], matches, key);
        let result = results[match.route.id];
        if (isDeferredResult(result)) {
          result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
        }
        if (fetchControllers.get(key) === abortController) {
          fetchControllers.delete(key);
        }
        if (fetchRequest.signal.aborted) {
          return;
        }
        if (deletedFetchers.has(key)) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        }
        if (isRedirectResult(result)) {
          if (pendingNavigationLoadId > originatingLoadId) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          } else {
            fetchRedirectIds.add(key);
            await startRedirectNavigation(fetchRequest, result, false, {
              preventScrollReset
            });
            return;
          }
        }
        if (isErrorResult(result)) {
          setFetcherError(key, routeId, result.error);
          return;
        }
        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
        updateFetcherState(key, getDoneFetcher(result.data));
      }
      async function startRedirectNavigation(request, redirect2, isNavigation, _temp2) {
        let {
          submission,
          fetcherSubmission,
          preventScrollReset,
          replace: replace2
        } = _temp2 === void 0 ? {} : _temp2;
        if (redirect2.response.headers.has("X-Remix-Revalidate")) {
          isRevalidationRequired = true;
        }
        let location = redirect2.response.headers.get("Location");
        invariant(location, "Expected a Location header on the redirect Response");
        location = normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = createLocation(state.location, location, {
          _isRedirect: true
        });
        if (isBrowser) {
          let isDocumentReload = false;
          if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
            isDocumentReload = true;
          } else if (ABSOLUTE_URL_REGEX.test(location)) {
            const url = init.history.createURL(location);
            isDocumentReload = // Hard reload if it's an absolute URL to a new origin
            url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
            stripBasename(url.pathname, basename) == null;
          }
          if (isDocumentReload) {
            if (replace2) {
              routerWindow.location.replace(location);
            } else {
              routerWindow.location.assign(location);
            }
            return;
          }
        }
        pendingNavigationController = null;
        let redirectHistoryAction = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
        let {
          formMethod,
          formAction,
          formEncType
        } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
          submission = getSubmissionFromNavigation(state.navigation);
        }
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
          await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: _extends({}, activeSubmission, {
              formAction: location
            }),
            // Preserve these flags across redirects
            preventScrollReset: preventScrollReset || pendingPreventScrollReset,
            enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
          });
        } else {
          let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
          await startNavigation(redirectHistoryAction, redirectLocation, {
            overrideNavigation,
            // Send fetcher submissions through for shouldRevalidate
            fetcherSubmission,
            // Preserve these flags across redirects
            preventScrollReset: preventScrollReset || pendingPreventScrollReset,
            enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
          });
        }
      }
      async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
        let results;
        let dataResults = {};
        try {
          results = await callDataStrategyImpl(dataStrategyImpl, type, state2, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties);
        } catch (e) {
          matchesToLoad.forEach((m) => {
            dataResults[m.route.id] = {
              type: ResultType.error,
              error: e
            };
          });
          return dataResults;
        }
        for (let [routeId, result] of Object.entries(results)) {
          if (isRedirectDataStrategyResultResult(result)) {
            let response = result.result;
            dataResults[routeId] = {
              type: ResultType.redirect,
              response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
            };
          } else {
            dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
          }
        }
        return dataResults;
      }
      async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
        let currentMatches = state2.matches;
        let loaderResultsPromise = callDataStrategy("loader", state2, request, matchesToLoad, matches, null);
        let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f) => {
          if (f.matches && f.match && f.controller) {
            let results = await callDataStrategy("loader", state2, createClientSideRequest(init.history, f.path, f.controller.signal), [f.match], f.matches, f.key);
            let result = results[f.match.route.id];
            return {
              [f.key]: result
            };
          } else {
            return Promise.resolve({
              [f.key]: {
                type: ResultType.error,
                error: getInternalRouterError(404, {
                  pathname: f.path
                })
              }
            });
          }
        }));
        let loaderResults = await loaderResultsPromise;
        let fetcherResults = (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {});
        await Promise.all([resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state2.loaderData), resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)]);
        return {
          loaderResults,
          fetcherResults
        };
      }
      function interruptActiveLoads() {
        isRevalidationRequired = true;
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        fetchLoadMatches.forEach((_, key) => {
          if (fetchControllers.has(key)) {
            cancelledFetcherLoads.add(key);
          }
          abortFetcher(key);
        });
      }
      function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) {
          opts = {};
        }
        state.fetchers.set(key, fetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        }, {
          flushSync: (opts && opts.flushSync) === true
        });
      }
      function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) {
          opts = {};
        }
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
          errors: {
            [boundaryMatch.route.id]: error
          },
          fetchers: new Map(state.fetchers)
        }, {
          flushSync: (opts && opts.flushSync) === true
        });
      }
      function getFetcher(key) {
        activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
        if (deletedFetchers.has(key)) {
          deletedFetchers.delete(key);
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
      }
      function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
          abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        if (future.v7_fetcherPersist) {
          deletedFetchers.delete(key);
        }
        cancelledFetcherLoads.delete(key);
        state.fetchers.delete(key);
      }
      function deleteFetcherAndUpdateState(key) {
        let count = (activeFetchers.get(key) || 0) - 1;
        if (count <= 0) {
          activeFetchers.delete(key);
          deletedFetchers.add(key);
          if (!future.v7_fetcherPersist) {
            deleteFetcher(key);
          }
        } else {
          activeFetchers.set(key, count);
        }
        updateState({
          fetchers: new Map(state.fetchers)
        });
      }
      function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        if (controller) {
          controller.abort();
          fetchControllers.delete(key);
        }
      }
      function markFetchersDone(keys) {
        for (let key of keys) {
          let fetcher = getFetcher(key);
          let doneFetcher = getDoneFetcher(fetcher.data);
          state.fetchers.set(key, doneFetcher);
        }
      }
      function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds) {
          let fetcher = state.fetchers.get(key);
          invariant(fetcher, "Expected fetcher: " + key);
          if (fetcher.state === "loading") {
            fetchRedirectIds.delete(key);
            doneKeys.push(key);
            updatedFetchers = true;
          }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
      }
      function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds) {
          if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
              abortFetcher(key);
              fetchReloadIds.delete(key);
              yeetedKeys.push(key);
            }
          }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
      }
      function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
          blockerFunctions.set(key, fn);
        }
        return blocker;
      }
      function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
      }
      function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
          blockers
        });
      }
      function shouldBlockNavigation(_ref2) {
        let {
          currentLocation,
          nextLocation,
          historyAction
        } = _ref2;
        if (blockerFunctions.size === 0) {
          return;
        }
        if (blockerFunctions.size > 1) {
          warning(false, "A router only supports one blocker at a time");
        }
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
          return;
        }
        if (blockerFunction({
          currentLocation,
          nextLocation,
          historyAction
        })) {
          return blockerKey;
        }
      }
      function handleNavigational404(pathname) {
        let error = getInternalRouterError(404, {
          pathname
        });
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let {
          matches,
          route
        } = getShortCircuitMatches(routesToUse);
        cancelActiveDeferreds();
        return {
          notFoundMatches: matches,
          route,
          error
        };
      }
      function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId) => {
          if (!predicate || predicate(routeId)) {
            dfd.cancel();
            cancelledRouteIds.push(routeId);
            activeDeferreds.delete(routeId);
          }
        });
        return cancelledRouteIds;
      }
      function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
          initialScrollRestored = true;
          let y = getSavedScrollPosition(state.location, state.matches);
          if (y != null) {
            updateState({
              restoreScrollPosition: y
            });
          }
        }
        return () => {
          savedScrollPositions = null;
          getScrollPosition = null;
          getScrollRestorationKey = null;
        };
      }
      function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
          let key = getScrollRestorationKey(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
          return key || location.key;
        }
        return location.key;
      }
      function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
          let key = getScrollKey(location, matches);
          savedScrollPositions[key] = getScrollPosition();
        }
      }
      function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
          let key = getScrollKey(location, matches);
          let y = savedScrollPositions[key];
          if (typeof y === "number") {
            return y;
          }
        }
        return null;
      }
      function checkFogOfWar(matches, routesToUse, pathname) {
        if (patchRoutesOnNavigationImpl) {
          if (!matches) {
            let fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
            return {
              active: true,
              matches: fogMatches || []
            };
          } else {
            if (Object.keys(matches[0].params).length > 0) {
              let partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
              return {
                active: true,
                matches: partialMatches
              };
            }
          }
        }
        return {
          active: false,
          matches: null
        };
      }
      async function discoverRoutes(matches, pathname, signal, fetcherKey) {
        if (!patchRoutesOnNavigationImpl) {
          return {
            type: "success",
            matches
          };
        }
        let partialMatches = matches;
        while (true) {
          let isNonHMR = inFlightDataRoutes == null;
          let routesToUse = inFlightDataRoutes || dataRoutes;
          let localManifest = manifest;
          try {
            await patchRoutesOnNavigationImpl({
              signal,
              path: pathname,
              matches: partialMatches,
              fetcherKey,
              patch: (routeId, children) => {
                if (signal.aborted) return;
                patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties);
              }
            });
          } catch (e) {
            return {
              type: "error",
              error: e,
              partialMatches
            };
          } finally {
            if (isNonHMR && !signal.aborted) {
              dataRoutes = [...dataRoutes];
            }
          }
          if (signal.aborted) {
            return {
              type: "aborted"
            };
          }
          let newMatches = matchRoutes(routesToUse, pathname, basename);
          if (newMatches) {
            return {
              type: "success",
              matches: newMatches
            };
          }
          let newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
          if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i) => m.route.id === newPartialMatches[i].route.id)) {
            return {
              type: "success",
              matches: null
            };
          }
          partialMatches = newPartialMatches;
        }
      }
      function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, void 0, manifest);
      }
      function patchRoutes(routeId, children) {
        let isNonHMR = inFlightDataRoutes == null;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties);
        if (isNonHMR) {
          dataRoutes = [...dataRoutes];
          updateState({});
        }
      }
      router = {
        get basename() {
          return basename;
        },
        get future() {
          return future;
        },
        get state() {
          return state;
        },
        get routes() {
          return dataRoutes;
        },
        get window() {
          return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to) => init.history.createHref(to),
        encodeLocation: (to) => init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        patchRoutes,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
      };
      return router;
    }
    var UNSAFE_DEFERRED_SYMBOL = /* @__PURE__ */ Symbol("deferred");
    function createStaticHandler(routes, opts) {
      invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
      let manifest = {};
      let basename = (opts ? opts.basename : null) || "/";
      let mapRouteProperties;
      if (opts != null && opts.mapRouteProperties) {
        mapRouteProperties = opts.mapRouteProperties;
      } else if (opts != null && opts.detectErrorBoundary) {
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route) => ({
          hasErrorBoundary: detectErrorBoundary(route)
        });
      } else {
        mapRouteProperties = defaultMapRouteProperties;
      }
      let future = _extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
      }, opts ? opts.future : null);
      let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
      async function query(request, _temp3) {
        let {
          requestContext,
          skipLoaderErrorBubbling,
          dataStrategy
        } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        if (!isValidMethod(method) && method !== "HEAD") {
          let error = getInternalRouterError(405, {
            method
          });
          let {
            matches: methodNotAllowedMatches,
            route
          } = getShortCircuitMatches(dataRoutes);
          return {
            basename,
            location,
            matches: methodNotAllowedMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        } else if (!matches) {
          let error = getInternalRouterError(404, {
            pathname: location.pathname
          });
          let {
            matches: notFoundMatches,
            route
          } = getShortCircuitMatches(dataRoutes);
          return {
            basename,
            location,
            matches: notFoundMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        }
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null);
        if (isResponse(result)) {
          return result;
        }
        return _extends({
          location,
          basename
        }, result);
      }
      async function queryRoute(request, _temp4) {
        let {
          routeId,
          requestContext,
          dataStrategy
        } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
          throw getInternalRouterError(405, {
            method
          });
        } else if (!matches) {
          throw getInternalRouterError(404, {
            pathname: location.pathname
          });
        }
        let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match) {
          throw getInternalRouterError(403, {
            pathname: location.pathname,
            routeId
          });
        } else if (!match) {
          throw getInternalRouterError(404, {
            pathname: location.pathname
          });
        }
        let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match);
        if (isResponse(result)) {
          return result;
        }
        let error = result.errors ? Object.values(result.errors)[0] : void 0;
        if (error !== void 0) {
          throw error;
        }
        if (result.actionData) {
          return Object.values(result.actionData)[0];
        }
        if (result.loaderData) {
          var _result$activeDeferre;
          let data2 = Object.values(result.loaderData)[0];
          if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
            data2[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
          }
          return data2;
        }
        return void 0;
      }
      async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
          if (isMutationMethod(request.method.toLowerCase())) {
            let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
            return result2;
          }
          let result = await loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch);
          return isResponse(result) ? result : _extends({}, result, {
            actionData: null,
            actionHeaders: {}
          });
        } catch (e) {
          if (isDataStrategyResult(e) && isResponse(e.result)) {
            if (e.type === ResultType.error) {
              throw e.result;
            }
            return e.result;
          }
          if (isRedirectResponse(e)) {
            return e;
          }
          throw e;
        }
      }
      async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          let error = getInternalRouterError(405, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: actionMatch.route.id
          });
          if (isRouteRequest) {
            throw error;
          }
          result = {
            type: ResultType.error,
            error
          };
        } else {
          let results = await callDataStrategy("action", request, [actionMatch], matches, isRouteRequest, requestContext, dataStrategy);
          result = results[actionMatch.route.id];
          if (request.signal.aborted) {
            throwStaticHandlerAbortedError(request, isRouteRequest, future);
          }
        }
        if (isRedirectResult(result)) {
          throw new Response(null, {
            status: result.response.status,
            headers: {
              Location: result.response.headers.get("Location")
            }
          });
        }
        if (isDeferredResult(result)) {
          let error = getInternalRouterError(400, {
            type: "defer-action"
          });
          if (isRouteRequest) {
            throw error;
          }
          result = {
            type: ResultType.error,
            error
          };
        }
        if (isRouteRequest) {
          if (isErrorResult(result)) {
            throw result.error;
          }
          return {
            matches: [actionMatch],
            loaderData: {},
            actionData: {
              [actionMatch.route.id]: result.data
            },
            errors: null,
            // Note: statusCode + headers are unused here since queryRoute will
            // return the raw Response or value
            statusCode: 200,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        }
        let loaderRequest = new Request(request.url, {
          headers: request.headers,
          redirect: request.redirect,
          signal: request.signal
        });
        if (isErrorResult(result)) {
          let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
          let context2 = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, [boundaryMatch.route.id, result]);
          return _extends({}, context2, {
            statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
            actionData: null,
            actionHeaders: _extends({}, result.headers ? {
              [actionMatch.route.id]: result.headers
            } : {})
          });
        }
        let context = await loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null);
        return _extends({}, context, {
          actionData: {
            [actionMatch.route.id]: result.data
          }
        }, result.statusCode ? {
          statusCode: result.statusCode
        } : {}, {
          actionHeaders: result.headers ? {
            [actionMatch.route.id]: result.headers
          } : {}
        });
      }
      async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
          throw getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
          });
        }
        let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter((m) => m.route.loader || m.route.lazy);
        if (matchesToLoad.length === 0) {
          return {
            matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m) => Object.assign(acc, {
              [m.route.id]: null
            }), {}),
            errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
              [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
          };
        }
        let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy);
        if (request.signal.aborted) {
          throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        let activeDeferreds = /* @__PURE__ */ new Map();
        let context = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
        let executedLoaders = new Set(matchesToLoad.map((match) => match.route.id));
        matches.forEach((match) => {
          if (!executedLoaders.has(match.route.id)) {
            context.loaderData[match.route.id] = null;
          }
        });
        return _extends({}, context, {
          matches,
          activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
      }
      async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
        let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, type, null, request, matchesToLoad, matches, null, manifest, mapRouteProperties, requestContext);
        let dataResults = {};
        await Promise.all(matches.map(async (match) => {
          if (!(match.route.id in results)) {
            return;
          }
          let result = results[match.route.id];
          if (isRedirectDataStrategyResultResult(result)) {
            let response = result.result;
            throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename, future.v7_relativeSplatPath);
          }
          if (isResponse(result.result) && isRouteRequest) {
            throw result;
          }
          dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
        }));
        return dataResults;
      }
      return {
        dataRoutes,
        query,
        queryRoute
      };
    }
    function getStaticContextFromError(routes, context, error) {
      let newContext = _extends({}, context, {
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
          [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
      });
      return newContext;
    }
    function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
      if (future.v7_throwAbortReason && request.signal.reason !== void 0) {
        throw request.signal.reason;
      }
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    function isSubmissionNavigation(opts) {
      return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
    }
    function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
      let contextualMatches;
      let activeRouteMatch;
      if (fromRouteId) {
        contextualMatches = [];
        for (let match of matches) {
          contextualMatches.push(match);
          if (match.route.id === fromRouteId) {
            activeRouteMatch = match;
            break;
          }
        }
      } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
      }
      let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
      if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
      }
      if ((to == null || to === "" || to === ".") && activeRouteMatch) {
        let nakedIndex = hasNakedIndexQuery(path.search);
        if (activeRouteMatch.route.index && !nakedIndex) {
          path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        } else if (!activeRouteMatch.route.index && nakedIndex) {
          let params = new URLSearchParams(path.search);
          let indexValues = params.getAll("index");
          params.delete("index");
          indexValues.filter((v) => v).forEach((v) => params.append("index", v));
          let qs = params.toString();
          path.search = qs ? "?" + qs : "";
        }
      }
      if (prependBasename && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      return createPath(path);
    }
    function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
      if (!opts || !isSubmissionNavigation(opts)) {
        return {
          path
        };
      }
      if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
          path,
          error: getInternalRouterError(405, {
            method: opts.formMethod
          })
        };
      }
      let getInvalidBodyError = () => ({
        path,
        error: getInternalRouterError(400, {
          type: "invalid-body"
        })
      });
      let rawFormMethod = opts.formMethod || "get";
      let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
      let formAction = stripHashFromPath(path);
      if (opts.body !== void 0) {
        if (opts.formEncType === "text/plain") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
            // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref3) => {
              let [name, value] = _ref3;
              return "" + acc + name + "=" + value + "\n";
            }, "")
          ) : String(opts.body);
          return {
            path,
            submission: {
              formMethod,
              formAction,
              formEncType: opts.formEncType,
              formData: void 0,
              json: void 0,
              text
            }
          };
        } else if (opts.formEncType === "application/json") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          try {
            let json2 = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
            return {
              path,
              submission: {
                formMethod,
                formAction,
                formEncType: opts.formEncType,
                formData: void 0,
                json: json2,
                text: void 0
              }
            };
          } catch (e) {
            return getInvalidBodyError();
          }
        }
      }
      invariant(typeof FormData === "function", "FormData is not available in this environment");
      let searchParams;
      let formData;
      if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
      } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
      } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
      } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
      } else {
        try {
          searchParams = new URLSearchParams(opts.body);
          formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
          return getInvalidBodyError();
        }
      }
      let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: void 0,
        text: void 0
      };
      if (isMutationMethod(submission.formMethod)) {
        return {
          path,
          submission
        };
      }
      let parsedPath = parsePath(path);
      if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
      }
      parsedPath.search = "?" + searchParams;
      return {
        path: createPath(parsedPath),
        submission
      };
    }
    function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
      if (includeBoundary === void 0) {
        includeBoundary = false;
      }
      let index = matches.findIndex((m) => m.route.id === boundaryId);
      if (index >= 0) {
        return matches.slice(0, includeBoundary ? index + 1 : index);
      }
      return matches;
    }
    function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
      let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
      let currentUrl = history.createURL(state.location);
      let nextUrl = history.createURL(location);
      let boundaryMatches = matches;
      if (initialHydration && state.errors) {
        boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
      } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
        boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
      }
      let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
      let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
      let navigationMatches = boundaryMatches.filter((match, index) => {
        let {
          route
        } = match;
        if (route.lazy) {
          return true;
        }
        if (route.loader == null) {
          return false;
        }
        if (initialHydration) {
          return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
        }
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id) => id === match.route.id)) {
          return true;
        }
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
          currentUrl,
          currentParams: currentRouteMatch.params,
          nextUrl,
          nextParams: nextRouteMatch.params
        }, submission, {
          actionResult,
          actionStatus,
          defaultShouldRevalidate: shouldSkipRevalidation ? false : (
            // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
          )
        }));
      });
      let revalidatingFetchers = [];
      fetchLoadMatches.forEach((f, key) => {
        if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || deletedFetchers.has(key)) {
          return;
        }
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        if (!fetcherMatches) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: null,
            match: null,
            controller: null
          });
          return;
        }
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) {
          shouldRevalidate = false;
        } else if (cancelledFetcherLoads.has(key)) {
          cancelledFetcherLoads.delete(key);
          shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
          shouldRevalidate = isRevalidationRequired;
        } else {
          shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params
          }, submission, {
            actionResult,
            actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
          }));
        }
        if (shouldRevalidate) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
          });
        }
      });
      return [navigationMatches, revalidatingFetchers];
    }
    function shouldLoadRouteOnHydration(route, loaderData, errors) {
      if (route.lazy) {
        return true;
      }
      if (!route.loader) {
        return false;
      }
      let hasData = loaderData != null && loaderData[route.id] !== void 0;
      let hasError = errors != null && errors[route.id] !== void 0;
      if (!hasData && hasError) {
        return false;
      }
      if (typeof route.loader === "function" && route.loader.hydrate === true) {
        return true;
      }
      return !hasData && !hasError;
    }
    function isNewLoader(currentLoaderData, currentMatch, match) {
      let isNew = (
        // [a] -> [a, b]
        !currentMatch || // [a, b] -> [a, c]
        match.route.id !== currentMatch.route.id
      );
      let isMissingData = currentLoaderData[match.route.id] === void 0;
      return isNew || isMissingData;
    }
    function isNewRouteInstance(currentMatch, match) {
      let currentPath = currentMatch.route.path;
      return (
        // param change for this match, /users/123 -> /users/456
        currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
      );
    }
    function shouldRevalidateLoader(loaderMatch, arg) {
      if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return arg.defaultShouldRevalidate;
    }
    function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties) {
      var _childrenToPatch;
      let childrenToPatch;
      if (routeId) {
        let route = manifest[routeId];
        invariant(route, "No route found to patch children into: routeId = " + routeId);
        if (!route.children) {
          route.children = [];
        }
        childrenToPatch = route.children;
      } else {
        childrenToPatch = routesToUse;
      }
      let uniqueChildren = children.filter((newRoute) => !childrenToPatch.some((existingRoute) => isSameRoute(newRoute, existingRoute)));
      let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [routeId || "_", "patch", String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")], manifest);
      childrenToPatch.push(...newRoutes);
    }
    function isSameRoute(newRoute, existingRoute) {
      if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
        return true;
      }
      if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
        return false;
      }
      if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
        return true;
      }
      return newRoute.children.every((aChild, i) => {
        var _existingRoute$childr;
        return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some((bChild) => isSameRoute(aChild, bChild));
      });
    }
    async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
      if (!route.lazy) {
        return;
      }
      let lazyRoute = await route.lazy();
      if (!route.lazy) {
        return;
      }
      let routeToUpdate = manifest[route.id];
      invariant(routeToUpdate, "No route found in manifest");
      let routeUpdates = {};
      for (let lazyRouteProperty in lazyRoute) {
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
          routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
        }
      }
      Object.assign(routeToUpdate, routeUpdates);
      Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
        lazy: void 0
      }));
    }
    async function defaultDataStrategy(_ref4) {
      let {
        matches
      } = _ref4;
      let matchesToLoad = matches.filter((m) => m.shouldLoad);
      let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
      return results.reduce((acc, result, i) => Object.assign(acc, {
        [matchesToLoad[i].route.id]: result
      }), {});
    }
    async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
      let loadRouteDefinitionsPromises = matches.map((m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties, manifest) : void 0);
      let dsMatches = matches.map((match, i) => {
        let loadRoutePromise = loadRouteDefinitionsPromises[i];
        let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
        let resolve = async (handlerOverride) => {
          if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
            shouldLoad = true;
          }
          return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
            type: ResultType.data,
            result: void 0
          });
        };
        return _extends({}, match, {
          shouldLoad,
          resolve
        });
      });
      let results = await dataStrategyImpl({
        matches: dsMatches,
        request,
        params: matches[0].params,
        fetcherKey,
        context: requestContext
      });
      try {
        await Promise.all(loadRouteDefinitionsPromises);
      } catch (e) {
      }
      return results;
    }
    async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
      let result;
      let onReject;
      let runHandler = (handler) => {
        let reject;
        let abortPromise = new Promise((_, r) => reject = r);
        onReject = () => reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx) => {
          if (typeof handler !== "function") {
            return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + type + '" [routeId: ' + match.route.id + "]")));
          }
          return handler({
            request,
            params: match.params,
            context: staticContext
          }, ...ctx !== void 0 ? [ctx] : []);
        };
        let handlerPromise = (async () => {
          try {
            let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
            return {
              type: "data",
              result: val
            };
          } catch (e) {
            return {
              type: "error",
              result: e
            };
          }
        })();
        return Promise.race([handlerPromise, abortPromise]);
      };
      try {
        let handler = match.route[type];
        if (loadRoutePromise) {
          if (handler) {
            let handlerError;
            let [value] = await Promise.all([
              // If the handler throws, don't let it immediately bubble out,
              // since we need to let the lazy() execution finish so we know if this
              // route has a boundary that can handle the error
              runHandler(handler).catch((e) => {
                handlerError = e;
              }),
              loadRoutePromise
            ]);
            if (handlerError !== void 0) {
              throw handlerError;
            }
            result = value;
          } else {
            await loadRoutePromise;
            handler = match.route[type];
            if (handler) {
              result = await runHandler(handler);
            } else if (type === "action") {
              let url = new URL(request.url);
              let pathname = url.pathname + url.search;
              throw getInternalRouterError(405, {
                method: request.method,
                pathname,
                routeId: match.route.id
              });
            } else {
              return {
                type: ResultType.data,
                result: void 0
              };
            }
          }
        } else if (!handler) {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(404, {
            pathname
          });
        } else {
          result = await runHandler(handler);
        }
        invariant(result.result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
      } catch (e) {
        return {
          type: ResultType.error,
          result: e
        };
      } finally {
        if (onReject) {
          request.signal.removeEventListener("abort", onReject);
        }
      }
      return result;
    }
    async function convertDataStrategyResultToDataResult(dataStrategyResult) {
      let {
        result,
        type
      } = dataStrategyResult;
      if (isResponse(result)) {
        let data2;
        try {
          let contentType = result.headers.get("Content-Type");
          if (contentType && /\bapplication\/json\b/.test(contentType)) {
            if (result.body == null) {
              data2 = null;
            } else {
              data2 = await result.json();
            }
          } else {
            data2 = await result.text();
          }
        } catch (e) {
          return {
            type: ResultType.error,
            error: e
          };
        }
        if (type === ResultType.error) {
          return {
            type: ResultType.error,
            error: new ErrorResponseImpl(result.status, result.statusText, data2),
            statusCode: result.status,
            headers: result.headers
          };
        }
        return {
          type: ResultType.data,
          data: data2,
          statusCode: result.status,
          headers: result.headers
        };
      }
      if (type === ResultType.error) {
        if (isDataWithResponseInit(result)) {
          var _result$init3, _result$init4;
          if (result.data instanceof Error) {
            var _result$init, _result$init2;
            return {
              type: ResultType.error,
              error: result.data,
              statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
              headers: (_result$init2 = result.init) != null && _result$init2.headers ? new Headers(result.init.headers) : void 0
            };
          }
          return {
            type: ResultType.error,
            error: new ErrorResponseImpl(((_result$init3 = result.init) == null ? void 0 : _result$init3.status) || 500, void 0, result.data),
            statusCode: isRouteErrorResponse(result) ? result.status : void 0,
            headers: (_result$init4 = result.init) != null && _result$init4.headers ? new Headers(result.init.headers) : void 0
          };
        }
        return {
          type: ResultType.error,
          error: result,
          statusCode: isRouteErrorResponse(result) ? result.status : void 0
        };
      }
      if (isDeferredData(result)) {
        var _result$init5, _result$init6;
        return {
          type: ResultType.deferred,
          deferredData: result,
          statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
          headers: ((_result$init6 = result.init) == null ? void 0 : _result$init6.headers) && new Headers(result.init.headers)
        };
      }
      if (isDataWithResponseInit(result)) {
        var _result$init7, _result$init8;
        return {
          type: ResultType.data,
          data: result.data,
          statusCode: (_result$init7 = result.init) == null ? void 0 : _result$init7.status,
          headers: (_result$init8 = result.init) != null && _result$init8.headers ? new Headers(result.init.headers) : void 0
        };
      }
      return {
        type: ResultType.data,
        data: result
      };
    }
    function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
      let location = response.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
        location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
      }
      return response;
    }
    function normalizeRedirectLocation(location, currentUrl, basename) {
      if (ABSOLUTE_URL_REGEX.test(location)) {
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          return url.pathname + url.search + url.hash;
        }
      }
      return location;
    }
    function createClientSideRequest(history, location, signal, submission) {
      let url = history.createURL(stripHashFromPath(location)).toString();
      let init = {
        signal
      };
      if (submission && isMutationMethod(submission.formMethod)) {
        let {
          formMethod,
          formEncType
        } = submission;
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
          init.headers = new Headers({
            "Content-Type": formEncType
          });
          init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
          init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
          init.body = convertFormDataToSearchParams(submission.formData);
        } else {
          init.body = submission.formData;
        }
      }
      return new Request(url, init);
    }
    function convertFormDataToSearchParams(formData) {
      let searchParams = new URLSearchParams();
      for (let [key, value] of formData.entries()) {
        searchParams.append(key, typeof value === "string" ? value : value.name);
      }
      return searchParams;
    }
    function convertSearchParamsToFormData(searchParams) {
      let formData = new FormData();
      for (let [key, value] of searchParams.entries()) {
        formData.append(key, value);
      }
      return formData;
    }
    function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
      let loaderData = {};
      let errors = null;
      let statusCode;
      let foundError = false;
      let loaderHeaders = {};
      let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
      matches.forEach((match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let id = match.route.id;
        let result = results[id];
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
          let error = result.error;
          if (pendingError !== void 0) {
            error = pendingError;
            pendingError = void 0;
          }
          errors = errors || {};
          if (skipLoaderErrorBubbling) {
            errors[id] = error;
          } else {
            let boundaryMatch = findNearestBoundary(matches, id);
            if (errors[boundaryMatch.route.id] == null) {
              errors[boundaryMatch.route.id] = error;
            }
          }
          loaderData[id] = void 0;
          if (!foundError) {
            foundError = true;
            statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
          }
          if (result.headers) {
            loaderHeaders[id] = result.headers;
          }
        } else {
          if (isDeferredResult(result)) {
            activeDeferreds.set(id, result.deferredData);
            loaderData[id] = result.deferredData.data;
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
              statusCode = result.statusCode;
            }
            if (result.headers) {
              loaderHeaders[id] = result.headers;
            }
          } else {
            loaderData[id] = result.data;
            if (result.statusCode && result.statusCode !== 200 && !foundError) {
              statusCode = result.statusCode;
            }
            if (result.headers) {
              loaderHeaders[id] = result.headers;
            }
          }
        }
      });
      if (pendingError !== void 0 && pendingActionResult) {
        errors = {
          [pendingActionResult[0]]: pendingError
        };
        loaderData[pendingActionResult[0]] = void 0;
      }
      return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
      };
    }
    function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
      let {
        loaderData,
        errors
      } = processRouteLoaderData(
        matches,
        results,
        pendingActionResult,
        activeDeferreds,
        false
        // This method is only called client side so we always want to bubble
      );
      revalidatingFetchers.forEach((rf) => {
        let {
          key,
          match,
          controller
        } = rf;
        let result = fetcherResults[key];
        invariant(result, "Did not find corresponding fetcher result");
        if (controller && controller.signal.aborted) {
          return;
        } else if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
          if (!(errors && errors[boundaryMatch.route.id])) {
            errors = _extends({}, errors, {
              [boundaryMatch.route.id]: result.error
            });
          }
          state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
          invariant(false, "Unhandled fetcher revalidation redirect");
        } else if (isDeferredResult(result)) {
          invariant(false, "Unhandled fetcher deferred data");
        } else {
          let doneFetcher = getDoneFetcher(result.data);
          state.fetchers.set(key, doneFetcher);
        }
      });
      return {
        loaderData,
        errors
      };
    }
    function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
      let mergedLoaderData = _extends({}, newLoaderData);
      for (let match of matches) {
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
          if (newLoaderData[id] !== void 0) {
            mergedLoaderData[id] = newLoaderData[id];
          }
        } else if (loaderData[id] !== void 0 && match.route.loader) {
          mergedLoaderData[id] = loaderData[id];
        }
        if (errors && errors.hasOwnProperty(id)) {
          break;
        }
      }
      return mergedLoaderData;
    }
    function getActionDataForCommit(pendingActionResult) {
      if (!pendingActionResult) {
        return {};
      }
      return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
      } : {
        actionData: {
          [pendingActionResult[0]]: pendingActionResult[1].data
        }
      };
    }
    function findNearestBoundary(matches, routeId) {
      let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
      return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
    }
    function getShortCircuitMatches(routes) {
      let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
      };
      return {
        matches: [{
          params: {},
          pathname: "",
          pathnameBase: "",
          route
        }],
        route
      };
    }
    function getInternalRouterError(status, _temp5) {
      let {
        pathname,
        routeId,
        method,
        type,
        message
      } = _temp5 === void 0 ? {} : _temp5;
      let statusText = "Unknown Server Error";
      let errorMessage = "Unknown @remix-run/router error";
      if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
          errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (type === "defer-action") {
          errorMessage = "defer() is not supported in actions";
        } else if (type === "invalid-body") {
          errorMessage = "Unable to encode submission body";
        }
      } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
      } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
      } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
          errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (method) {
          errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
        }
      }
      return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
    }
    function findRedirect(results) {
      let entries = Object.entries(results);
      for (let i = entries.length - 1; i >= 0; i--) {
        let [key, result] = entries[i];
        if (isRedirectResult(result)) {
          return {
            key,
            result
          };
        }
      }
    }
    function stripHashFromPath(path) {
      let parsedPath = typeof path === "string" ? parsePath(path) : path;
      return createPath(_extends({}, parsedPath, {
        hash: ""
      }));
    }
    function isHashChangeOnly(a, b) {
      if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
      }
      if (a.hash === "") {
        return b.hash !== "";
      } else if (a.hash === b.hash) {
        return true;
      } else if (b.hash !== "") {
        return true;
      }
      return false;
    }
    function isDataStrategyResult(result) {
      return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
    }
    function isRedirectDataStrategyResultResult(result) {
      return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
    }
    function isDeferredResult(result) {
      return result.type === ResultType.deferred;
    }
    function isErrorResult(result) {
      return result.type === ResultType.error;
    }
    function isRedirectResult(result) {
      return (result && result.type) === ResultType.redirect;
    }
    function isDataWithResponseInit(value) {
      return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
    }
    function isDeferredData(value) {
      let deferred = value;
      return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
    }
    function isResponse(value) {
      return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    function isRedirectResponse(result) {
      if (!isResponse(result)) {
        return false;
      }
      let status = result.status;
      let location = result.headers.get("Location");
      return status >= 300 && status <= 399 && location != null;
    }
    function isValidMethod(method) {
      return validRequestMethods.has(method.toLowerCase());
    }
    function isMutationMethod(method) {
      return validMutationMethods.has(method.toLowerCase());
    }
    async function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
      let entries = Object.entries(results);
      for (let index = 0; index < entries.length; index++) {
        let [routeId, result] = entries[index];
        let match = matches.find((m) => (m == null ? void 0 : m.route.id) === routeId);
        if (!match) {
          continue;
        }
        let currentMatch = currentMatches.find((m) => m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
        if (isDeferredResult(result) && isRevalidatingLoader) {
          await resolveDeferredData(result, signal, false).then((result2) => {
            if (result2) {
              results[routeId] = result2;
            }
          });
        }
      }
    }
    async function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
      for (let index = 0; index < revalidatingFetchers.length; index++) {
        let {
          key,
          routeId,
          controller
        } = revalidatingFetchers[index];
        let result = results[key];
        let match = matches.find((m) => (m == null ? void 0 : m.route.id) === routeId);
        if (!match) {
          continue;
        }
        if (isDeferredResult(result)) {
          invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
          await resolveDeferredData(result, controller.signal, true).then((result2) => {
            if (result2) {
              results[key] = result2;
            }
          });
        }
      }
    }
    async function resolveDeferredData(result, signal, unwrap) {
      if (unwrap === void 0) {
        unwrap = false;
      }
      let aborted = await result.deferredData.resolveData(signal);
      if (aborted) {
        return;
      }
      if (unwrap) {
        try {
          return {
            type: ResultType.data,
            data: result.deferredData.unwrappedData
          };
        } catch (e) {
          return {
            type: ResultType.error,
            error: e
          };
        }
      }
      return {
        type: ResultType.data,
        data: result.deferredData.data
      };
    }
    function hasNakedIndexQuery(search) {
      return new URLSearchParams(search).getAll("index").some((v) => v === "");
    }
    function getTargetMatch(matches, location) {
      let search = typeof location === "string" ? parsePath(location).search : location.search;
      if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        return matches[matches.length - 1];
      }
      let pathMatches = getPathContributingMatches(matches);
      return pathMatches[pathMatches.length - 1];
    }
    function getSubmissionFromNavigation(navigation) {
      let {
        formMethod,
        formAction,
        formEncType,
        text,
        formData,
        json: json2
      } = navigation;
      if (!formMethod || !formAction || !formEncType) {
        return;
      }
      if (text != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json: void 0,
          text
        };
      } else if (formData != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData,
          json: void 0,
          text: void 0
        };
      } else if (json2 !== void 0) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json: json2,
          text: void 0
        };
      }
    }
    function getLoadingNavigation(location, submission) {
      if (submission) {
        let navigation = {
          state: "loading",
          location,
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text
        };
        return navigation;
      } else {
        let navigation = {
          state: "loading",
          location,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        };
        return navigation;
      }
    }
    function getSubmittingNavigation(location, submission) {
      let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
      };
      return navigation;
    }
    function getLoadingFetcher(submission, data2) {
      if (submission) {
        let fetcher = {
          state: "loading",
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text,
          data: data2
        };
        return fetcher;
      } else {
        let fetcher = {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: data2
        };
        return fetcher;
      }
    }
    function getSubmittingFetcher(submission, existingFetcher) {
      let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : void 0
      };
      return fetcher;
    }
    function getDoneFetcher(data2) {
      let fetcher = {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: data2
      };
      return fetcher;
    }
    function restoreAppliedTransitions(_window, transitions) {
      try {
        let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
          let json2 = JSON.parse(sessionPositions);
          for (let [k, v] of Object.entries(json2 || {})) {
            if (v && Array.isArray(v)) {
              transitions.set(k, new Set(v || []));
            }
          }
        }
      } catch (e) {
      }
    }
    function persistAppliedTransitions(_window, transitions) {
      if (transitions.size > 0) {
        let json2 = {};
        for (let [k, v] of transitions) {
          json2[k] = [...v];
        }
        try {
          _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json2));
        } catch (error) {
          warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
      }
    }
    exports.AbortedDeferredError = AbortedDeferredError;
    exports.Action = Action;
    exports.IDLE_BLOCKER = IDLE_BLOCKER;
    exports.IDLE_FETCHER = IDLE_FETCHER;
    exports.IDLE_NAVIGATION = IDLE_NAVIGATION;
    exports.UNSAFE_DEFERRED_SYMBOL = UNSAFE_DEFERRED_SYMBOL;
    exports.UNSAFE_DeferredData = DeferredData;
    exports.UNSAFE_ErrorResponseImpl = ErrorResponseImpl;
    exports.UNSAFE_convertRouteMatchToUiMatch = convertRouteMatchToUiMatch;
    exports.UNSAFE_convertRoutesToDataRoutes = convertRoutesToDataRoutes;
    exports.UNSAFE_decodePath = decodePath;
    exports.UNSAFE_getResolveToMatches = getResolveToMatches;
    exports.UNSAFE_invariant = invariant;
    exports.UNSAFE_warning = warning;
    exports.createBrowserHistory = createBrowserHistory;
    exports.createHashHistory = createHashHistory;
    exports.createMemoryHistory = createMemoryHistory;
    exports.createPath = createPath;
    exports.createRouter = createRouter;
    exports.createStaticHandler = createStaticHandler;
    exports.data = data;
    exports.defer = defer;
    exports.generatePath = generatePath;
    exports.getStaticContextFromError = getStaticContextFromError;
    exports.getToPathname = getToPathname;
    exports.isDataWithResponseInit = isDataWithResponseInit;
    exports.isDeferredData = isDeferredData;
    exports.isRouteErrorResponse = isRouteErrorResponse;
    exports.joinPaths = joinPaths;
    exports.json = json;
    exports.matchPath = matchPath;
    exports.matchRoutes = matchRoutes;
    exports.normalizePathname = normalizePathname;
    exports.parsePath = parsePath;
    exports.redirect = redirect;
    exports.redirectDocument = redirectDocument;
    exports.replace = replace;
    exports.resolvePath = resolvePath;
    exports.resolveTo = resolveTo;
    exports.stripBasename = stripBasename;
  }
});

// node_modules/react-router/dist/umd/react-router.production.min.js
var require_react_router_production_min = __commonJS({
  "node_modules/react-router/dist/umd/react-router.production.min.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports, require_react(), require_router_cjs()) : "function" == typeof define && define.amd ? define(["exports", "react", "@remix-run/router"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).ReactRouter = {}, e.React, e.RemixRouter);
    })(exports, (function(e, t, r) {
      "use strict";
      function n(e2) {
        if (e2 && e2.__esModule) return e2;
        var t2 = /* @__PURE__ */ Object.create(null);
        return e2 && Object.keys(e2).forEach((function(r2) {
          if ("default" !== r2) {
            var n2 = Object.getOwnPropertyDescriptor(e2, r2);
            Object.defineProperty(t2, r2, n2.get ? n2 : { enumerable: true, get: function() {
              return e2[r2];
            } });
          }
        })), t2.default = e2, Object.freeze(t2);
      }
      var a = n(t);
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }, o.apply(this, arguments);
      }
      const i = a.createContext(null), u = a.createContext(null), l = a.createContext(null), s = a.createContext(null), c = a.createContext(null), d = a.createContext({ outlet: null, matches: [], isDataRoute: false }), p = a.createContext(null);
      function f() {
        return null != a.useContext(c);
      }
      function v() {
        return f() || r.UNSAFE_invariant(false), a.useContext(c).location;
      }
      function m(e2) {
        a.useContext(s).static || a.useLayoutEffect(e2);
      }
      function h() {
        let { isDataRoute: e2 } = a.useContext(d);
        return e2 ? (function() {
          let { router: e3 } = O(U.UseNavigateStable), t2 = F(N.UseNavigateStable), r2 = a.useRef(false);
          return m((() => {
            r2.current = true;
          })), a.useCallback((function(n2, a2) {
            void 0 === a2 && (a2 = {}), r2.current && ("number" == typeof n2 ? e3.navigate(n2) : e3.navigate(n2, o({ fromRouteId: t2 }, a2)));
          }), [e3, t2]);
        })() : (function() {
          f() || r.UNSAFE_invariant(false);
          let e3 = a.useContext(i), { basename: t2, future: n2, navigator: o2 } = a.useContext(s), { matches: u2 } = a.useContext(d), { pathname: l2 } = v(), c2 = JSON.stringify(r.UNSAFE_getResolveToMatches(u2, n2.v7_relativeSplatPath)), p2 = a.useRef(false);
          return m((() => {
            p2.current = true;
          })), a.useCallback((function(n3, a2) {
            if (void 0 === a2 && (a2 = {}), !p2.current) return;
            if ("number" == typeof n3) return void o2.go(n3);
            let i2 = r.resolveTo(n3, JSON.parse(c2), l2, "path" === a2.relative);
            null == e3 && "/" !== t2 && (i2.pathname = "/" === i2.pathname ? t2 : r.joinPaths([t2, i2.pathname])), (a2.replace ? o2.replace : o2.push)(i2, a2.state, a2);
          }), [t2, o2, c2, l2, e3]);
        })();
      }
      const E = a.createContext(null);
      function g(e2) {
        let t2 = a.useContext(d).outlet;
        return t2 ? a.createElement(E.Provider, { value: e2 }, t2) : t2;
      }
      function y(e2, t2) {
        let { relative: n2 } = void 0 === t2 ? {} : t2, { future: o2 } = a.useContext(s), { matches: i2 } = a.useContext(d), { pathname: u2 } = v(), l2 = JSON.stringify(r.UNSAFE_getResolveToMatches(i2, o2.v7_relativeSplatPath));
        return a.useMemo((() => r.resolveTo(e2, JSON.parse(l2), u2, "path" === n2)), [e2, l2, u2, n2]);
      }
      function b(e2, t2) {
        return R(e2, t2);
      }
      function R(e2, t2, n2, i2) {
        f() || r.UNSAFE_invariant(false);
        let { navigator: u2 } = a.useContext(s), { matches: l2 } = a.useContext(d), p2 = l2[l2.length - 1], m2 = p2 ? p2.params : {};
        !p2 || p2.pathname;
        let h2 = p2 ? p2.pathnameBase : "/";
        p2 && p2.route;
        let E2, g2 = v();
        if (t2) {
          var y2;
          let e3 = "string" == typeof t2 ? r.parsePath(t2) : t2;
          "/" === h2 || (null == (y2 = e3.pathname) ? void 0 : y2.startsWith(h2)) || r.UNSAFE_invariant(false), E2 = e3;
        } else E2 = g2;
        let b2 = E2.pathname || "/", R2 = b2;
        if ("/" !== h2) {
          let e3 = h2.replace(/^\//, "").split("/");
          R2 = "/" + b2.replace(/^\//, "").split("/").slice(e3.length).join("/");
        }
        let P2 = r.matchRoutes(e2, { pathname: R2 }), _2 = S(P2 && P2.map(((e3) => Object.assign({}, e3, { params: Object.assign({}, m2, e3.params), pathname: r.joinPaths([h2, u2.encodeLocation ? u2.encodeLocation(e3.pathname).pathname : e3.pathname]), pathnameBase: "/" === e3.pathnameBase ? h2 : r.joinPaths([h2, u2.encodeLocation ? u2.encodeLocation(e3.pathnameBase).pathname : e3.pathnameBase]) }))), l2, n2, i2);
        return t2 && _2 ? a.createElement(c.Provider, { value: { location: o({ pathname: "/", search: "", hash: "", state: null, key: "default" }, E2), navigationType: r.Action.Pop } }, _2) : _2;
      }
      function P() {
        let e2 = j(), t2 = r.isRouteErrorResponse(e2) ? e2.status + " " + e2.statusText : e2 instanceof Error ? e2.message : JSON.stringify(e2), n2 = e2 instanceof Error ? e2.stack : null, o2 = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
        return a.createElement(a.Fragment, null, a.createElement("h2", null, "Unexpected Application Error!"), a.createElement("h3", { style: { fontStyle: "italic" } }, t2), n2 ? a.createElement("pre", { style: o2 }, n2) : null, null);
      }
      const _ = a.createElement(P, null);
      class x extends a.Component {
        constructor(e2) {
          super(e2), this.state = { location: e2.location, revalidation: e2.revalidation, error: e2.error };
        }
        static getDerivedStateFromError(e2) {
          return { error: e2 };
        }
        static getDerivedStateFromProps(e2, t2) {
          return t2.location !== e2.location || "idle" !== t2.revalidation && "idle" === e2.revalidation ? { error: e2.error, location: e2.location, revalidation: e2.revalidation } : { error: void 0 !== e2.error ? e2.error : t2.error, location: t2.location, revalidation: e2.revalidation || t2.revalidation };
        }
        componentDidCatch(e2, t2) {
          console.error("React Router caught the following error during render", e2, t2);
        }
        render() {
          return void 0 !== this.state.error ? a.createElement(d.Provider, { value: this.props.routeContext }, a.createElement(p.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
        }
      }
      function C(e2) {
        let { routeContext: t2, match: r2, children: n2 } = e2, o2 = a.useContext(i);
        return o2 && o2.static && o2.staticContext && (r2.route.errorElement || r2.route.ErrorBoundary) && (o2.staticContext._deepestRenderedBoundaryId = r2.route.id), a.createElement(d.Provider, { value: t2 }, n2);
      }
      function S(e2, t2, n2, o2) {
        var i2;
        if (void 0 === t2 && (t2 = []), void 0 === n2 && (n2 = null), void 0 === o2 && (o2 = null), null == e2) {
          var u2;
          if (!n2) return null;
          if (n2.errors) e2 = n2.matches;
          else {
            if (!(null != (u2 = o2) && u2.v7_partialHydration && 0 === t2.length && !n2.initialized && n2.matches.length > 0)) return null;
            e2 = n2.matches;
          }
        }
        let l2 = e2, s2 = null == (i2 = n2) ? void 0 : i2.errors;
        if (null != s2) {
          let e3 = l2.findIndex(((e4) => e4.route.id && void 0 !== (null == s2 ? void 0 : s2[e4.route.id])));
          e3 >= 0 || r.UNSAFE_invariant(false), l2 = l2.slice(0, Math.min(l2.length, e3 + 1));
        }
        let c2 = false, d2 = -1;
        if (n2 && o2 && o2.v7_partialHydration) for (let e3 = 0; e3 < l2.length; e3++) {
          let t3 = l2[e3];
          if ((t3.route.HydrateFallback || t3.route.hydrateFallbackElement) && (d2 = e3), t3.route.id) {
            let { loaderData: e4, errors: r2 } = n2, a2 = t3.route.loader && void 0 === e4[t3.route.id] && (!r2 || void 0 === r2[t3.route.id]);
            if (t3.route.lazy || a2) {
              c2 = true, l2 = d2 >= 0 ? l2.slice(0, d2 + 1) : [l2[0]];
              break;
            }
          }
        }
        return l2.reduceRight(((e3, r2, o3) => {
          let i3, u3 = false, p2 = null, f2 = null;
          var v2;
          n2 && (i3 = s2 && r2.route.id ? s2[r2.route.id] : void 0, p2 = r2.route.errorElement || _, c2 && (d2 < 0 && 0 === o3 ? (v2 = "route-fallback", B[v2] || (B[v2] = true), u3 = true, f2 = null) : d2 === o3 && (u3 = true, f2 = r2.route.hydrateFallbackElement || null)));
          let m2 = t2.concat(l2.slice(0, o3 + 1)), h2 = () => {
            let t3;
            return t3 = i3 ? p2 : u3 ? f2 : r2.route.Component ? a.createElement(r2.route.Component, null) : r2.route.element ? r2.route.element : e3, a.createElement(C, { match: r2, routeContext: { outlet: e3, matches: m2, isDataRoute: null != n2 }, children: t3 });
          };
          return n2 && (r2.route.ErrorBoundary || r2.route.errorElement || 0 === o3) ? a.createElement(x, { location: n2.location, revalidation: n2.revalidation, component: p2, error: i3, children: h2(), routeContext: { outlet: null, matches: m2, isDataRoute: true } }) : h2();
        }), null);
      }
      var U = (function(e2) {
        return e2.UseBlocker = "useBlocker", e2.UseRevalidator = "useRevalidator", e2.UseNavigateStable = "useNavigate", e2;
      })(U || {}), N = (function(e2) {
        return e2.UseBlocker = "useBlocker", e2.UseLoaderData = "useLoaderData", e2.UseActionData = "useActionData", e2.UseRouteError = "useRouteError", e2.UseNavigation = "useNavigation", e2.UseRouteLoaderData = "useRouteLoaderData", e2.UseMatches = "useMatches", e2.UseRevalidator = "useRevalidator", e2.UseNavigateStable = "useNavigate", e2.UseRouteId = "useRouteId", e2;
      })(N || {});
      function O(e2) {
        let t2 = a.useContext(i);
        return t2 || r.UNSAFE_invariant(false), t2;
      }
      function A(e2) {
        let t2 = a.useContext(u);
        return t2 || r.UNSAFE_invariant(false), t2;
      }
      function F(e2) {
        let t2 = (function(e3) {
          let t3 = a.useContext(d);
          return t3 || r.UNSAFE_invariant(false), t3;
        })(), n2 = t2.matches[t2.matches.length - 1];
        return n2.route.id || r.UNSAFE_invariant(false), n2.route.id;
      }
      function j() {
        var e2;
        let t2 = a.useContext(p), r2 = A(N.UseRouteError), n2 = F(N.UseRouteError);
        return void 0 !== t2 ? t2 : null == (e2 = r2.errors) ? void 0 : e2[n2];
      }
      function D() {
        let e2 = a.useContext(l);
        return null == e2 ? void 0 : e2._data;
      }
      let k = 0;
      const B = {};
      function L(e2, t2) {
        null == e2 || e2.v7_startTransition, void 0 === (null == e2 ? void 0 : e2.v7_relativeSplatPath) && (!t2 || t2.v7_relativeSplatPath), t2 && (t2.v7_fetcherPersist, t2.v7_normalizeFormMethod, t2.v7_partialHydration, t2.v7_skipActionErrorRevalidation);
      }
      const M = a.startTransition;
      function T(e2) {
        let { routes: t2, future: r2, state: n2 } = e2;
        return R(t2, void 0, n2, r2);
      }
      function I(e2) {
        r.UNSAFE_invariant(false);
      }
      function H(e2) {
        let { basename: t2 = "/", children: n2 = null, location: i2, navigationType: u2 = r.Action.Pop, navigator: l2, static: d2 = false, future: p2 } = e2;
        f() && r.UNSAFE_invariant(false);
        let v2 = t2.replace(/^\/*/, "/"), m2 = a.useMemo((() => ({ basename: v2, navigator: l2, static: d2, future: o({ v7_relativeSplatPath: false }, p2) })), [v2, p2, l2, d2]);
        "string" == typeof i2 && (i2 = r.parsePath(i2));
        let { pathname: h2 = "/", search: E2 = "", hash: g2 = "", state: y2 = null, key: b2 = "default" } = i2, R2 = a.useMemo((() => {
          let e3 = r.stripBasename(h2, v2);
          return null == e3 ? null : { location: { pathname: e3, search: E2, hash: g2, state: y2, key: b2 }, navigationType: u2 };
        }), [v2, h2, E2, g2, y2, b2, u2]);
        return null == R2 ? null : a.createElement(s.Provider, { value: m2 }, a.createElement(c.Provider, { children: n2, value: R2 }));
      }
      var w = (function(e2) {
        return e2[e2.pending = 0] = "pending", e2[e2.success = 1] = "success", e2[e2.error = 2] = "error", e2;
      })(w || {});
      const z = new Promise((() => {
      }));
      class J extends a.Component {
        constructor(e2) {
          super(e2), this.state = { error: null };
        }
        static getDerivedStateFromError(e2) {
          return { error: e2 };
        }
        componentDidCatch(e2, t2) {
          console.error("<Await> caught the following error during render", e2, t2);
        }
        render() {
          let { children: e2, errorElement: t2, resolve: n2 } = this.props, o2 = null, i2 = w.pending;
          if (n2 instanceof Promise) if (this.state.error) {
            i2 = w.error;
            let e3 = this.state.error;
            o2 = Promise.reject().catch((() => {
            })), Object.defineProperty(o2, "_tracked", { get: () => true }), Object.defineProperty(o2, "_error", { get: () => e3 });
          } else n2._tracked ? (o2 = n2, i2 = "_error" in o2 ? w.error : "_data" in o2 ? w.success : w.pending) : (i2 = w.pending, Object.defineProperty(n2, "_tracked", { get: () => true }), o2 = n2.then(((e3) => Object.defineProperty(n2, "_data", { get: () => e3 })), ((e3) => Object.defineProperty(n2, "_error", { get: () => e3 }))));
          else i2 = w.success, o2 = Promise.resolve(), Object.defineProperty(o2, "_tracked", { get: () => true }), Object.defineProperty(o2, "_data", { get: () => n2 });
          if (i2 === w.error && o2._error instanceof r.AbortedDeferredError) throw z;
          if (i2 === w.error && !t2) throw o2._error;
          if (i2 === w.error) return a.createElement(l.Provider, { value: o2, children: t2 });
          if (i2 === w.success) return a.createElement(l.Provider, { value: o2, children: e2 });
          throw o2;
        }
      }
      function V(e2) {
        let { children: t2 } = e2, r2 = D(), n2 = "function" == typeof t2 ? t2(r2) : t2;
        return a.createElement(a.Fragment, null, n2);
      }
      function q(e2, t2) {
        void 0 === t2 && (t2 = []);
        let n2 = [];
        return a.Children.forEach(e2, ((e3, o2) => {
          if (!a.isValidElement(e3)) return;
          let i2 = [...t2, o2];
          if (e3.type === a.Fragment) return void n2.push.apply(n2, q(e3.props.children, i2));
          e3.type !== I && r.UNSAFE_invariant(false), e3.props.index && e3.props.children && r.UNSAFE_invariant(false);
          let u2 = { id: e3.props.id || i2.join("-"), caseSensitive: e3.props.caseSensitive, element: e3.props.element, Component: e3.props.Component, index: e3.props.index, path: e3.props.path, loader: e3.props.loader, action: e3.props.action, errorElement: e3.props.errorElement, ErrorBoundary: e3.props.ErrorBoundary, hasErrorBoundary: null != e3.props.ErrorBoundary || null != e3.props.errorElement, shouldRevalidate: e3.props.shouldRevalidate, handle: e3.props.handle, lazy: e3.props.lazy };
          e3.props.children && (u2.children = q(e3.props.children, i2)), n2.push(u2);
        })), n2;
      }
      function W(e2) {
        let t2 = { hasErrorBoundary: null != e2.ErrorBoundary || null != e2.errorElement };
        return e2.Component && Object.assign(t2, { element: a.createElement(e2.Component), Component: void 0 }), e2.HydrateFallback && Object.assign(t2, { hydrateFallbackElement: a.createElement(e2.HydrateFallback), HydrateFallback: void 0 }), e2.ErrorBoundary && Object.assign(t2, { errorElement: a.createElement(e2.ErrorBoundary), ErrorBoundary: void 0 }), t2;
      }
      Object.defineProperty(e, "AbortedDeferredError", { enumerable: true, get: function() {
        return r.AbortedDeferredError;
      } }), Object.defineProperty(e, "NavigationType", { enumerable: true, get: function() {
        return r.Action;
      } }), Object.defineProperty(e, "createPath", { enumerable: true, get: function() {
        return r.createPath;
      } }), Object.defineProperty(e, "defer", { enumerable: true, get: function() {
        return r.defer;
      } }), Object.defineProperty(e, "generatePath", { enumerable: true, get: function() {
        return r.generatePath;
      } }), Object.defineProperty(e, "isRouteErrorResponse", { enumerable: true, get: function() {
        return r.isRouteErrorResponse;
      } }), Object.defineProperty(e, "json", { enumerable: true, get: function() {
        return r.json;
      } }), Object.defineProperty(e, "matchPath", { enumerable: true, get: function() {
        return r.matchPath;
      } }), Object.defineProperty(e, "matchRoutes", { enumerable: true, get: function() {
        return r.matchRoutes;
      } }), Object.defineProperty(e, "parsePath", { enumerable: true, get: function() {
        return r.parsePath;
      } }), Object.defineProperty(e, "redirect", { enumerable: true, get: function() {
        return r.redirect;
      } }), Object.defineProperty(e, "redirectDocument", { enumerable: true, get: function() {
        return r.redirectDocument;
      } }), Object.defineProperty(e, "replace", { enumerable: true, get: function() {
        return r.replace;
      } }), Object.defineProperty(e, "resolvePath", { enumerable: true, get: function() {
        return r.resolvePath;
      } }), e.Await = function(e2) {
        let { children: t2, errorElement: r2, resolve: n2 } = e2;
        return a.createElement(J, { resolve: n2, errorElement: r2 }, a.createElement(V, null, t2));
      }, e.MemoryRouter = function(e2) {
        let { basename: t2, children: n2, initialEntries: o2, initialIndex: i2, future: u2 } = e2, l2 = a.useRef();
        null == l2.current && (l2.current = r.createMemoryHistory({ initialEntries: o2, initialIndex: i2, v5Compat: true }));
        let s2 = l2.current, [c2, d2] = a.useState({ action: s2.action, location: s2.location }), { v7_startTransition: p2 } = u2 || {}, f2 = a.useCallback(((e3) => {
          p2 && M ? M((() => d2(e3))) : d2(e3);
        }), [d2, p2]);
        return a.useLayoutEffect((() => s2.listen(f2)), [s2, f2]), a.useEffect((() => L(u2)), [u2]), a.createElement(H, { basename: t2, children: n2, location: c2.location, navigationType: c2.action, navigator: s2, future: u2 });
      }, e.Navigate = function(e2) {
        let { to: t2, replace: n2, state: o2, relative: i2 } = e2;
        f() || r.UNSAFE_invariant(false);
        let { future: u2, static: l2 } = a.useContext(s), { matches: c2 } = a.useContext(d), { pathname: p2 } = v(), m2 = h(), E2 = r.resolveTo(t2, r.UNSAFE_getResolveToMatches(c2, u2.v7_relativeSplatPath), p2, "path" === i2), g2 = JSON.stringify(E2);
        return a.useEffect((() => m2(JSON.parse(g2), { replace: n2, state: o2, relative: i2 })), [m2, g2, i2, n2, o2]), null;
      }, e.Outlet = function(e2) {
        return g(e2.context);
      }, e.Route = I, e.Router = H, e.RouterProvider = function(e2) {
        let { fallbackElement: t2, router: r2, future: n2 } = e2, [o2, l2] = a.useState(r2.state), { v7_startTransition: s2 } = n2 || {}, c2 = a.useCallback(((e3) => {
          s2 && M ? M((() => l2(e3))) : l2(e3);
        }), [l2, s2]);
        a.useLayoutEffect((() => r2.subscribe(c2)), [r2, c2]), a.useEffect((() => {
        }), []);
        let d2 = a.useMemo((() => ({ createHref: r2.createHref, encodeLocation: r2.encodeLocation, go: (e3) => r2.navigate(e3), push: (e3, t3, n3) => r2.navigate(e3, { state: t3, preventScrollReset: null == n3 ? void 0 : n3.preventScrollReset }), replace: (e3, t3, n3) => r2.navigate(e3, { replace: true, state: t3, preventScrollReset: null == n3 ? void 0 : n3.preventScrollReset }) })), [r2]), p2 = r2.basename || "/", f2 = a.useMemo((() => ({ router: r2, navigator: d2, static: false, basename: p2 })), [r2, d2, p2]);
        return a.useEffect((() => L(n2, r2.future)), [r2, n2]), a.createElement(a.Fragment, null, a.createElement(i.Provider, { value: f2 }, a.createElement(u.Provider, { value: o2 }, a.createElement(H, { basename: p2, location: o2.location, navigationType: o2.historyAction, navigator: d2, future: { v7_relativeSplatPath: r2.future.v7_relativeSplatPath } }, o2.initialized || r2.future.v7_partialHydration ? a.createElement(T, { routes: r2.routes, future: r2.future, state: o2 }) : t2))), null);
      }, e.Routes = function(e2) {
        let { children: t2, location: r2 } = e2;
        return b(q(t2), r2);
      }, e.UNSAFE_DataRouterContext = i, e.UNSAFE_DataRouterStateContext = u, e.UNSAFE_LocationContext = c, e.UNSAFE_NavigationContext = s, e.UNSAFE_RouteContext = d, e.UNSAFE_logV6DeprecationWarnings = L, e.UNSAFE_mapRouteProperties = W, e.UNSAFE_useRouteId = function() {
        return F(N.UseRouteId);
      }, e.UNSAFE_useRoutesImpl = R, e.createMemoryRouter = function(e2, t2) {
        return r.createRouter({ basename: null == t2 ? void 0 : t2.basename, future: o({}, null == t2 ? void 0 : t2.future, { v7_prependBasename: true }), history: r.createMemoryHistory({ initialEntries: null == t2 ? void 0 : t2.initialEntries, initialIndex: null == t2 ? void 0 : t2.initialIndex }), hydrationData: null == t2 ? void 0 : t2.hydrationData, routes: e2, mapRouteProperties: W, dataStrategy: null == t2 ? void 0 : t2.dataStrategy, patchRoutesOnNavigation: null == t2 ? void 0 : t2.patchRoutesOnNavigation }).initialize();
      }, e.createRoutesFromChildren = q, e.createRoutesFromElements = q, e.renderMatches = function(e2) {
        return S(e2);
      }, e.useActionData = function() {
        let e2 = A(N.UseActionData), t2 = F(N.UseLoaderData);
        return e2.actionData ? e2.actionData[t2] : void 0;
      }, e.useAsyncError = function() {
        let e2 = a.useContext(l);
        return null == e2 ? void 0 : e2._error;
      }, e.useAsyncValue = D, e.useBlocker = function(e2) {
        let { router: t2, basename: n2 } = O(U.UseBlocker), i2 = A(N.UseBlocker), [u2, l2] = a.useState(""), s2 = a.useCallback(((t3) => {
          if ("function" != typeof e2) return !!e2;
          if ("/" === n2) return e2(t3);
          let { currentLocation: a2, nextLocation: i3, historyAction: u3 } = t3;
          return e2({ currentLocation: o({}, a2, { pathname: r.stripBasename(a2.pathname, n2) || a2.pathname }), nextLocation: o({}, i3, { pathname: r.stripBasename(i3.pathname, n2) || i3.pathname }), historyAction: u3 });
        }), [n2, e2]);
        return a.useEffect((() => {
          let e3 = String(++k);
          return l2(e3), () => t2.deleteBlocker(e3);
        }), [t2]), a.useEffect((() => {
          "" !== u2 && t2.getBlocker(u2, s2);
        }), [t2, u2, s2]), u2 && i2.blockers.has(u2) ? i2.blockers.get(u2) : r.IDLE_BLOCKER;
      }, e.useHref = function(e2, t2) {
        let { relative: n2 } = void 0 === t2 ? {} : t2;
        f() || r.UNSAFE_invariant(false);
        let { basename: o2, navigator: i2 } = a.useContext(s), { hash: u2, pathname: l2, search: c2 } = y(e2, { relative: n2 }), d2 = l2;
        return "/" !== o2 && (d2 = "/" === l2 ? o2 : r.joinPaths([o2, l2])), i2.createHref({ pathname: d2, search: c2, hash: u2 });
      }, e.useInRouterContext = f, e.useLoaderData = function() {
        let e2 = A(N.UseLoaderData), t2 = F(N.UseLoaderData);
        if (!e2.errors || null == e2.errors[t2]) return e2.loaderData[t2];
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t2 + ")");
      }, e.useLocation = v, e.useMatch = function(e2) {
        f() || r.UNSAFE_invariant(false);
        let { pathname: t2 } = v();
        return a.useMemo((() => r.matchPath(e2, r.UNSAFE_decodePath(t2))), [t2, e2]);
      }, e.useMatches = function() {
        let { matches: e2, loaderData: t2 } = A(N.UseMatches);
        return a.useMemo((() => e2.map(((e3) => r.UNSAFE_convertRouteMatchToUiMatch(e3, t2)))), [e2, t2]);
      }, e.useNavigate = h, e.useNavigation = function() {
        return A(N.UseNavigation).navigation;
      }, e.useNavigationType = function() {
        return a.useContext(c).navigationType;
      }, e.useOutlet = g, e.useOutletContext = function() {
        return a.useContext(E);
      }, e.useParams = function() {
        let { matches: e2 } = a.useContext(d), t2 = e2[e2.length - 1];
        return t2 ? t2.params : {};
      }, e.useResolvedPath = y, e.useRevalidator = function() {
        let e2 = O(U.UseRevalidator), t2 = A(N.UseRevalidator);
        return a.useMemo((() => ({ revalidate: e2.router.revalidate, state: t2.revalidation })), [e2.router.revalidate, t2.revalidation]);
      }, e.useRouteError = j, e.useRouteLoaderData = function(e2) {
        return A(N.UseRouteLoaderData).loaderData[e2];
      }, e.useRoutes = b, Object.defineProperty(e, "__esModule", { value: true });
    }));
  }
});

// node_modules/react-router/dist/main.js
var require_main = __commonJS({
  "node_modules/react-router/dist/main.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_router_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var require_react_router_dom_production_min = __commonJS({
  "node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports, require_react(), require_react_dom(), require_main(), require_router_cjs()) : "function" == typeof define && define.amd ? define(["exports", "react", "react-dom", "react-router", "@remix-run/router"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).ReactRouterDOM = {}, e.React, e.ReactDOM, e.ReactRouter, e.RemixRouter);
    })(exports, (function(e, t, n, r, o) {
      "use strict";
      function a(e2) {
        if (e2 && e2.__esModule) return e2;
        var t2 = /* @__PURE__ */ Object.create(null);
        return e2 && Object.keys(e2).forEach((function(n2) {
          if ("default" !== n2) {
            var r2 = Object.getOwnPropertyDescriptor(e2, n2);
            Object.defineProperty(t2, n2, r2.get ? r2 : { enumerable: true, get: function() {
              return e2[n2];
            } });
          }
        })), t2.default = e2, Object.freeze(t2);
      }
      var i = a(t), u = a(n);
      function s() {
        return s = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
          }
          return e2;
        }, s.apply(this, arguments);
      }
      function c(e2, t2) {
        if (null == e2) return {};
        var n2, r2, o2 = {}, a2 = Object.keys(e2);
        for (r2 = 0; r2 < a2.length; r2++) n2 = a2[r2], t2.indexOf(n2) >= 0 || (o2[n2] = e2[n2]);
        return o2;
      }
      const l = "get", f = "application/x-www-form-urlencoded";
      function d(e2) {
        return null != e2 && "string" == typeof e2.tagName;
      }
      function m(e2) {
        return void 0 === e2 && (e2 = ""), new URLSearchParams("string" == typeof e2 || Array.isArray(e2) || e2 instanceof URLSearchParams ? e2 : Object.keys(e2).reduce(((t2, n2) => {
          let r2 = e2[n2];
          return t2.concat(Array.isArray(r2) ? r2.map(((e3) => [n2, e3])) : [[n2, r2]]);
        }), []));
      }
      let p = null;
      const v = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
      function h(e2) {
        return null == e2 || v.has(e2) ? e2 : null;
      }
      function b(e2, t2) {
        let n2, r2, a2, i2, u2;
        if (d(s2 = e2) && "form" === s2.tagName.toLowerCase()) {
          let u3 = e2.getAttribute("action");
          r2 = u3 ? o.stripBasename(u3, t2) : null, n2 = e2.getAttribute("method") || l, a2 = h(e2.getAttribute("enctype")) || f, i2 = new FormData(e2);
        } else if ((function(e3) {
          return d(e3) && "button" === e3.tagName.toLowerCase();
        })(e2) || (function(e3) {
          return d(e3) && "input" === e3.tagName.toLowerCase();
        })(e2) && ("submit" === e2.type || "image" === e2.type)) {
          let u3 = e2.form;
          if (null == u3) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
          let s3 = e2.getAttribute("formaction") || u3.getAttribute("action");
          if (r2 = s3 ? o.stripBasename(s3, t2) : null, n2 = e2.getAttribute("formmethod") || u3.getAttribute("method") || l, a2 = h(e2.getAttribute("formenctype")) || h(u3.getAttribute("enctype")) || f, i2 = new FormData(u3, e2), !(function() {
            if (null === p) try {
              new FormData(document.createElement("form"), 0), p = false;
            } catch (e3) {
              p = true;
            }
            return p;
          })()) {
            let { name: t3, type: n3, value: r3 } = e2;
            if ("image" === n3) {
              let e3 = t3 ? t3 + "." : "";
              i2.append(e3 + "x", "0"), i2.append(e3 + "y", "0");
            } else t3 && i2.append(t3, r3);
          }
        } else {
          if (d(e2)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
          n2 = l, r2 = null, a2 = f, u2 = e2;
        }
        var s2;
        return i2 && "text/plain" === a2 && (u2 = i2, i2 = void 0), { action: r2, method: n2.toLowerCase(), encType: a2, formData: i2, body: u2 };
      }
      const g = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], y = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], w = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
      try {
        window.__reactRouterVersion = "6";
      } catch (e2) {
      }
      function R() {
        var e2;
        let t2 = null == (e2 = window) ? void 0 : e2.__staticRouterHydrationData;
        return t2 && t2.errors && (t2 = s({}, t2, { errors: S(t2.errors) })), t2;
      }
      function S(e2) {
        if (!e2) return null;
        let t2 = Object.entries(e2), n2 = {};
        for (let [e3, r2] of t2) if (r2 && "RouteErrorResponse" === r2.__type) n2[e3] = new o.UNSAFE_ErrorResponseImpl(r2.status, r2.statusText, r2.data, true === r2.internal);
        else if (r2 && "Error" === r2.__type) {
          if (r2.__subType) {
            let t3 = window[r2.__subType];
            if ("function" == typeof t3) try {
              let o2 = new t3(r2.message);
              o2.stack = "", n2[e3] = o2;
            } catch (e4) {
            }
          }
          if (null == n2[e3]) {
            let t3 = new Error(r2.message);
            t3.stack = "", n2[e3] = t3;
          }
        } else n2[e3] = r2;
        return n2;
      }
      const E = i.createContext({ isTransitioning: false }), P = i.createContext(/* @__PURE__ */ new Map()), O = i.startTransition, N = u.flushSync, _ = i.useId;
      function A(e2) {
        N ? N(e2) : e2();
      }
      class F {
        constructor() {
          this.status = "pending", this.promise = new Promise(((e2, t2) => {
            this.resolve = (t3) => {
              "pending" === this.status && (this.status = "resolved", e2(t3));
            }, this.reject = (e3) => {
              "pending" === this.status && (this.status = "rejected", t2(e3));
            };
          }));
        }
      }
      const C = i.memo(j);
      function j(e2) {
        let { routes: t2, future: n2, state: o2 } = e2;
        return r.UNSAFE_useRoutesImpl(t2, void 0, o2, n2);
      }
      const x = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, U = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, L = i.forwardRef((function(e2, t2) {
        let n2, { onClick: a2, relative: u2, reloadDocument: l2, replace: f2, state: d2, target: m2, to: p2, preventScrollReset: v2, viewTransition: h2 } = e2, b2 = c(e2, g), { basename: y2 } = i.useContext(r.UNSAFE_NavigationContext), w2 = false;
        if ("string" == typeof p2 && U.test(p2) && (n2 = p2, x)) try {
          let e3 = new URL(window.location.href), t3 = p2.startsWith("//") ? new URL(e3.protocol + p2) : new URL(p2), n3 = o.stripBasename(t3.pathname, y2);
          t3.origin === e3.origin && null != n3 ? p2 = n3 + t3.search + t3.hash : w2 = true;
        } catch (e3) {
        }
        let R2 = r.useHref(p2, { relative: u2 }), S2 = I(p2, { replace: f2, state: d2, target: m2, preventScrollReset: v2, relative: u2, viewTransition: h2 });
        return i.createElement("a", s({}, b2, { href: n2 || R2, onClick: w2 || l2 ? a2 : function(e3) {
          a2 && a2(e3), e3.defaultPrevented || S2(e3);
        }, ref: t2, target: m2 }));
      })), T = i.forwardRef((function(e2, t2) {
        let { "aria-current": n2 = "page", caseSensitive: a2 = false, className: u2 = "", end: l2 = false, style: f2, to: d2, viewTransition: m2, children: p2 } = e2, v2 = c(e2, y), h2 = r.useResolvedPath(d2, { relative: v2.relative }), b2 = r.useLocation(), g2 = i.useContext(r.UNSAFE_DataRouterStateContext), { navigator: w2, basename: R2 } = i.useContext(r.UNSAFE_NavigationContext), S2 = null != g2 && G(h2) && true === m2, E2 = w2.encodeLocation ? w2.encodeLocation(h2).pathname : h2.pathname, P2 = b2.pathname, O2 = g2 && g2.navigation && g2.navigation.location ? g2.navigation.location.pathname : null;
        a2 || (P2 = P2.toLowerCase(), O2 = O2 ? O2.toLowerCase() : null, E2 = E2.toLowerCase()), O2 && R2 && (O2 = o.stripBasename(O2, R2) || O2);
        const N2 = "/" !== E2 && E2.endsWith("/") ? E2.length - 1 : E2.length;
        let _2, A2 = P2 === E2 || !l2 && P2.startsWith(E2) && "/" === P2.charAt(N2), F2 = null != O2 && (O2 === E2 || !l2 && O2.startsWith(E2) && "/" === O2.charAt(E2.length)), C2 = { isActive: A2, isPending: F2, isTransitioning: S2 }, j2 = A2 ? n2 : void 0;
        _2 = "function" == typeof u2 ? u2(C2) : [u2, A2 ? "active" : null, F2 ? "pending" : null, S2 ? "transitioning" : null].filter(Boolean).join(" ");
        let x2 = "function" == typeof f2 ? f2(C2) : f2;
        return i.createElement(L, s({}, v2, { "aria-current": j2, className: _2, ref: t2, style: x2, to: d2, viewTransition: m2 }), "function" == typeof p2 ? p2(C2) : p2);
      })), D = i.forwardRef(((e2, t2) => {
        let { fetcherKey: n2, navigate: r2, reloadDocument: o2, replace: a2, state: u2, method: f2 = l, action: d2, onSubmit: m2, relative: p2, preventScrollReset: v2, viewTransition: h2 } = e2, b2 = c(e2, w), g2 = W(), y2 = z(d2, { relative: p2 }), R2 = "get" === f2.toLowerCase() ? "get" : "post";
        return i.createElement("form", s({ ref: t2, method: R2, action: y2, onSubmit: o2 ? m2 : (e3) => {
          if (m2 && m2(e3), e3.defaultPrevented) return;
          e3.preventDefault();
          let t3 = e3.nativeEvent.submitter, o3 = (null == t3 ? void 0 : t3.getAttribute("formmethod")) || f2;
          g2(t3 || e3.currentTarget, { fetcherKey: n2, method: o3, navigate: r2, replace: a2, state: u2, relative: p2, preventScrollReset: v2, viewTransition: h2 });
        } }, b2));
      }));
      var k = (function(e2) {
        return e2.UseScrollRestoration = "useScrollRestoration", e2.UseSubmit = "useSubmit", e2.UseSubmitFetcher = "useSubmitFetcher", e2.UseFetcher = "useFetcher", e2.useViewTransitionState = "useViewTransitionState", e2;
      })(k || {}), M = (function(e2) {
        return e2.UseFetcher = "useFetcher", e2.UseFetchers = "useFetchers", e2.UseScrollRestoration = "useScrollRestoration", e2;
      })(M || {});
      function B(e2) {
        let t2 = i.useContext(r.UNSAFE_DataRouterContext);
        return t2 || o.UNSAFE_invariant(false), t2;
      }
      function H(e2) {
        let t2 = i.useContext(r.UNSAFE_DataRouterStateContext);
        return t2 || o.UNSAFE_invariant(false), t2;
      }
      function I(e2, t2) {
        let { target: n2, replace: o2, state: a2, preventScrollReset: u2, relative: s2, viewTransition: c2 } = void 0 === t2 ? {} : t2, l2 = r.useNavigate(), f2 = r.useLocation(), d2 = r.useResolvedPath(e2, { relative: s2 });
        return i.useCallback(((t3) => {
          if ((function(e3, t4) {
            return !(0 !== e3.button || t4 && "_self" !== t4 || (function(e4) {
              return !!(e4.metaKey || e4.altKey || e4.ctrlKey || e4.shiftKey);
            })(e3));
          })(t3, n2)) {
            t3.preventDefault();
            let n3 = void 0 !== o2 ? o2 : r.createPath(f2) === r.createPath(d2);
            l2(e2, { replace: n3, state: a2, preventScrollReset: u2, relative: s2, viewTransition: c2 });
          }
        }), [f2, l2, d2, o2, a2, n2, e2, u2, s2, c2]);
      }
      let K = 0, V = () => "__" + String(++K) + "__";
      function W() {
        let { router: e2 } = B(k.UseSubmit), { basename: t2 } = i.useContext(r.UNSAFE_NavigationContext), n2 = r.UNSAFE_useRouteId();
        return i.useCallback((function(r2, o2) {
          void 0 === o2 && (o2 = {}), (function() {
            if ("undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
          })();
          let { action: a2, method: i2, encType: u2, formData: s2, body: c2 } = b(r2, t2);
          if (false === o2.navigate) {
            let t3 = o2.fetcherKey || V();
            e2.fetch(t3, n2, o2.action || a2, { preventScrollReset: o2.preventScrollReset, formData: s2, body: c2, formMethod: o2.method || i2, formEncType: o2.encType || u2, flushSync: o2.flushSync });
          } else e2.navigate(o2.action || a2, { preventScrollReset: o2.preventScrollReset, formData: s2, body: c2, formMethod: o2.method || i2, formEncType: o2.encType || u2, replace: o2.replace, state: o2.state, fromRouteId: n2, flushSync: o2.flushSync, viewTransition: o2.viewTransition });
        }), [e2, t2, n2]);
      }
      function z(e2, t2) {
        let { relative: n2 } = void 0 === t2 ? {} : t2, { basename: a2 } = i.useContext(r.UNSAFE_NavigationContext), u2 = i.useContext(r.UNSAFE_RouteContext);
        u2 || o.UNSAFE_invariant(false);
        let [c2] = u2.matches.slice(-1), l2 = s({}, r.useResolvedPath(e2 || ".", { relative: n2 })), f2 = r.useLocation();
        if (null == e2) {
          l2.search = f2.search;
          let e3 = new URLSearchParams(l2.search), t3 = e3.getAll("index");
          if (t3.some(((e4) => "" === e4))) {
            e3.delete("index"), t3.filter(((e4) => e4)).forEach(((t4) => e3.append("index", t4)));
            let n3 = e3.toString();
            l2.search = n3 ? "?" + n3 : "";
          }
        }
        return e2 && "." !== e2 || !c2.route.index || (l2.search = l2.search ? l2.search.replace(/^\?/, "?index&") : "?index"), "/" !== a2 && (l2.pathname = "/" === l2.pathname ? a2 : o.joinPaths([a2, l2.pathname])), r.createPath(l2);
      }
      const q = "react-router-scroll-positions";
      let Y = {};
      function J(e2) {
        let { getKey: t2, storageKey: n2 } = void 0 === e2 ? {} : e2, { router: a2 } = B(k.UseScrollRestoration), { restoreScrollPosition: u2, preventScrollReset: c2 } = H(M.UseScrollRestoration), { basename: l2 } = i.useContext(r.UNSAFE_NavigationContext), f2 = r.useLocation(), d2 = r.useMatches(), m2 = r.useNavigation();
        i.useEffect((() => (window.history.scrollRestoration = "manual", () => {
          window.history.scrollRestoration = "auto";
        })), []), (function(e3, t3) {
          let { capture: n3 } = t3 || {};
          i.useEffect((() => {
            let t4 = null != n3 ? { capture: n3 } : void 0;
            return window.addEventListener("pagehide", e3, t4), () => {
              window.removeEventListener("pagehide", e3, t4);
            };
          }), [e3, n3]);
        })(i.useCallback((() => {
          if ("idle" === m2.state) {
            let e3 = (t2 ? t2(f2, d2) : null) || f2.key;
            Y[e3] = window.scrollY;
          }
          try {
            sessionStorage.setItem(n2 || q, JSON.stringify(Y));
          } catch (e3) {
          }
          window.history.scrollRestoration = "auto";
        }), [n2, t2, m2.state, f2, d2])), "undefined" != typeof document && (i.useLayoutEffect((() => {
          try {
            let e3 = sessionStorage.getItem(n2 || q);
            e3 && (Y = JSON.parse(e3));
          } catch (e3) {
          }
        }), [n2]), i.useLayoutEffect((() => {
          let e3 = t2 && "/" !== l2 ? (e4, n4) => t2(s({}, e4, { pathname: o.stripBasename(e4.pathname, l2) || e4.pathname }), n4) : t2, n3 = null == a2 ? void 0 : a2.enableScrollRestoration(Y, (() => window.scrollY), e3);
          return () => n3 && n3();
        }), [a2, l2, t2]), i.useLayoutEffect((() => {
          if (false !== u2) if ("number" != typeof u2) {
            if (f2.hash) {
              let e3 = document.getElementById(decodeURIComponent(f2.hash.slice(1)));
              if (e3) return void e3.scrollIntoView();
            }
            true !== c2 && window.scrollTo(0, 0);
          } else window.scrollTo(0, u2);
        }), [f2, u2, c2]));
      }
      function G(e2, t2) {
        void 0 === t2 && (t2 = {});
        let n2 = i.useContext(E);
        null == n2 && o.UNSAFE_invariant(false);
        let { basename: a2 } = B(k.useViewTransitionState), u2 = r.useResolvedPath(e2, { relative: t2.relative });
        if (!n2.isTransitioning) return false;
        let s2 = o.stripBasename(n2.currentLocation.pathname, a2) || n2.currentLocation.pathname, c2 = o.stripBasename(n2.nextLocation.pathname, a2) || n2.nextLocation.pathname;
        return null != o.matchPath(u2.pathname, c2) || null != o.matchPath(u2.pathname, s2);
      }
      Object.defineProperty(e, "AbortedDeferredError", { enumerable: true, get: function() {
        return r.AbortedDeferredError;
      } }), Object.defineProperty(e, "Await", { enumerable: true, get: function() {
        return r.Await;
      } }), Object.defineProperty(e, "MemoryRouter", { enumerable: true, get: function() {
        return r.MemoryRouter;
      } }), Object.defineProperty(e, "Navigate", { enumerable: true, get: function() {
        return r.Navigate;
      } }), Object.defineProperty(e, "NavigationType", { enumerable: true, get: function() {
        return r.NavigationType;
      } }), Object.defineProperty(e, "Outlet", { enumerable: true, get: function() {
        return r.Outlet;
      } }), Object.defineProperty(e, "Route", { enumerable: true, get: function() {
        return r.Route;
      } }), Object.defineProperty(e, "Router", { enumerable: true, get: function() {
        return r.Router;
      } }), Object.defineProperty(e, "Routes", { enumerable: true, get: function() {
        return r.Routes;
      } }), Object.defineProperty(e, "UNSAFE_DataRouterContext", { enumerable: true, get: function() {
        return r.UNSAFE_DataRouterContext;
      } }), Object.defineProperty(e, "UNSAFE_DataRouterStateContext", { enumerable: true, get: function() {
        return r.UNSAFE_DataRouterStateContext;
      } }), Object.defineProperty(e, "UNSAFE_LocationContext", { enumerable: true, get: function() {
        return r.UNSAFE_LocationContext;
      } }), Object.defineProperty(e, "UNSAFE_NavigationContext", { enumerable: true, get: function() {
        return r.UNSAFE_NavigationContext;
      } }), Object.defineProperty(e, "UNSAFE_RouteContext", { enumerable: true, get: function() {
        return r.UNSAFE_RouteContext;
      } }), Object.defineProperty(e, "UNSAFE_useRouteId", { enumerable: true, get: function() {
        return r.UNSAFE_useRouteId;
      } }), Object.defineProperty(e, "createMemoryRouter", { enumerable: true, get: function() {
        return r.createMemoryRouter;
      } }), Object.defineProperty(e, "createPath", { enumerable: true, get: function() {
        return r.createPath;
      } }), Object.defineProperty(e, "createRoutesFromChildren", { enumerable: true, get: function() {
        return r.createRoutesFromChildren;
      } }), Object.defineProperty(e, "createRoutesFromElements", { enumerable: true, get: function() {
        return r.createRoutesFromElements;
      } }), Object.defineProperty(e, "defer", { enumerable: true, get: function() {
        return r.defer;
      } }), Object.defineProperty(e, "generatePath", { enumerable: true, get: function() {
        return r.generatePath;
      } }), Object.defineProperty(e, "isRouteErrorResponse", { enumerable: true, get: function() {
        return r.isRouteErrorResponse;
      } }), Object.defineProperty(e, "json", { enumerable: true, get: function() {
        return r.json;
      } }), Object.defineProperty(e, "matchPath", { enumerable: true, get: function() {
        return r.matchPath;
      } }), Object.defineProperty(e, "matchRoutes", { enumerable: true, get: function() {
        return r.matchRoutes;
      } }), Object.defineProperty(e, "parsePath", { enumerable: true, get: function() {
        return r.parsePath;
      } }), Object.defineProperty(e, "redirect", { enumerable: true, get: function() {
        return r.redirect;
      } }), Object.defineProperty(e, "redirectDocument", { enumerable: true, get: function() {
        return r.redirectDocument;
      } }), Object.defineProperty(e, "renderMatches", { enumerable: true, get: function() {
        return r.renderMatches;
      } }), Object.defineProperty(e, "replace", { enumerable: true, get: function() {
        return r.replace;
      } }), Object.defineProperty(e, "resolvePath", { enumerable: true, get: function() {
        return r.resolvePath;
      } }), Object.defineProperty(e, "useActionData", { enumerable: true, get: function() {
        return r.useActionData;
      } }), Object.defineProperty(e, "useAsyncError", { enumerable: true, get: function() {
        return r.useAsyncError;
      } }), Object.defineProperty(e, "useAsyncValue", { enumerable: true, get: function() {
        return r.useAsyncValue;
      } }), Object.defineProperty(e, "useBlocker", { enumerable: true, get: function() {
        return r.useBlocker;
      } }), Object.defineProperty(e, "useHref", { enumerable: true, get: function() {
        return r.useHref;
      } }), Object.defineProperty(e, "useInRouterContext", { enumerable: true, get: function() {
        return r.useInRouterContext;
      } }), Object.defineProperty(e, "useLoaderData", { enumerable: true, get: function() {
        return r.useLoaderData;
      } }), Object.defineProperty(e, "useLocation", { enumerable: true, get: function() {
        return r.useLocation;
      } }), Object.defineProperty(e, "useMatch", { enumerable: true, get: function() {
        return r.useMatch;
      } }), Object.defineProperty(e, "useMatches", { enumerable: true, get: function() {
        return r.useMatches;
      } }), Object.defineProperty(e, "useNavigate", { enumerable: true, get: function() {
        return r.useNavigate;
      } }), Object.defineProperty(e, "useNavigation", { enumerable: true, get: function() {
        return r.useNavigation;
      } }), Object.defineProperty(e, "useNavigationType", { enumerable: true, get: function() {
        return r.useNavigationType;
      } }), Object.defineProperty(e, "useOutlet", { enumerable: true, get: function() {
        return r.useOutlet;
      } }), Object.defineProperty(e, "useOutletContext", { enumerable: true, get: function() {
        return r.useOutletContext;
      } }), Object.defineProperty(e, "useParams", { enumerable: true, get: function() {
        return r.useParams;
      } }), Object.defineProperty(e, "useResolvedPath", { enumerable: true, get: function() {
        return r.useResolvedPath;
      } }), Object.defineProperty(e, "useRevalidator", { enumerable: true, get: function() {
        return r.useRevalidator;
      } }), Object.defineProperty(e, "useRouteError", { enumerable: true, get: function() {
        return r.useRouteError;
      } }), Object.defineProperty(e, "useRouteLoaderData", { enumerable: true, get: function() {
        return r.useRouteLoaderData;
      } }), Object.defineProperty(e, "useRoutes", { enumerable: true, get: function() {
        return r.useRoutes;
      } }), Object.defineProperty(e, "UNSAFE_ErrorResponseImpl", { enumerable: true, get: function() {
        return o.UNSAFE_ErrorResponseImpl;
      } }), e.BrowserRouter = function(e2) {
        let { basename: t2, children: n2, future: a2, window: u2 } = e2, s2 = i.useRef();
        null == s2.current && (s2.current = o.createBrowserHistory({ window: u2, v5Compat: true }));
        let c2 = s2.current, [l2, f2] = i.useState({ action: c2.action, location: c2.location }), { v7_startTransition: d2 } = a2 || {}, m2 = i.useCallback(((e3) => {
          d2 && O ? O((() => f2(e3))) : f2(e3);
        }), [f2, d2]);
        return i.useLayoutEffect((() => c2.listen(m2)), [c2, m2]), i.useEffect((() => r.UNSAFE_logV6DeprecationWarnings(a2)), [a2]), i.createElement(r.Router, { basename: t2, children: n2, location: l2.location, navigationType: l2.action, navigator: c2, future: a2 });
      }, e.Form = D, e.HashRouter = function(e2) {
        let { basename: t2, children: n2, future: a2, window: u2 } = e2, s2 = i.useRef();
        null == s2.current && (s2.current = o.createHashHistory({ window: u2, v5Compat: true }));
        let c2 = s2.current, [l2, f2] = i.useState({ action: c2.action, location: c2.location }), { v7_startTransition: d2 } = a2 || {}, m2 = i.useCallback(((e3) => {
          d2 && O ? O((() => f2(e3))) : f2(e3);
        }), [f2, d2]);
        return i.useLayoutEffect((() => c2.listen(m2)), [c2, m2]), i.useEffect((() => r.UNSAFE_logV6DeprecationWarnings(a2)), [a2]), i.createElement(r.Router, { basename: t2, children: n2, location: l2.location, navigationType: l2.action, navigator: c2, future: a2 });
      }, e.Link = L, e.NavLink = T, e.RouterProvider = function(e2) {
        let { fallbackElement: t2, router: n2, future: o2 } = e2, [a2, u2] = i.useState(n2.state), [s2, c2] = i.useState(), [l2, f2] = i.useState({ isTransitioning: false }), [d2, m2] = i.useState(), [p2, v2] = i.useState(), [h2, b2] = i.useState(), g2 = i.useRef(/* @__PURE__ */ new Map()), { v7_startTransition: y2 } = o2 || {}, w2 = i.useCallback(((e3) => {
          y2 ? (function(e4) {
            O ? O(e4) : e4();
          })(e3) : e3();
        }), [y2]), R2 = i.useCallback(((e3, t3) => {
          let { deletedFetchers: r2, flushSync: o3, viewTransitionOpts: a3 } = t3;
          e3.fetchers.forEach(((e4, t4) => {
            void 0 !== e4.data && g2.current.set(t4, e4.data);
          })), r2.forEach(((e4) => g2.current.delete(e4)));
          let i2 = null == n2.window || null == n2.window.document || "function" != typeof n2.window.document.startViewTransition;
          if (a3 && !i2) {
            if (o3) {
              A((() => {
                p2 && (d2 && d2.resolve(), p2.skipTransition()), f2({ isTransitioning: true, flushSync: true, currentLocation: a3.currentLocation, nextLocation: a3.nextLocation });
              }));
              let t4 = n2.window.document.startViewTransition((() => {
                A((() => u2(e3)));
              }));
              return t4.finished.finally((() => {
                A((() => {
                  m2(void 0), v2(void 0), c2(void 0), f2({ isTransitioning: false });
                }));
              })), void A((() => v2(t4)));
            }
            p2 ? (d2 && d2.resolve(), p2.skipTransition(), b2({ state: e3, currentLocation: a3.currentLocation, nextLocation: a3.nextLocation })) : (c2(e3), f2({ isTransitioning: true, flushSync: false, currentLocation: a3.currentLocation, nextLocation: a3.nextLocation }));
          } else o3 ? A((() => u2(e3))) : w2((() => u2(e3)));
        }), [n2.window, p2, d2, g2, w2]);
        i.useLayoutEffect((() => n2.subscribe(R2)), [n2, R2]), i.useEffect((() => {
          l2.isTransitioning && !l2.flushSync && m2(new F());
        }), [l2]), i.useEffect((() => {
          if (d2 && s2 && n2.window) {
            let e3 = s2, t3 = d2.promise, r2 = n2.window.document.startViewTransition((async () => {
              w2((() => u2(e3))), await t3;
            }));
            r2.finished.finally((() => {
              m2(void 0), v2(void 0), c2(void 0), f2({ isTransitioning: false });
            })), v2(r2);
          }
        }), [w2, s2, d2, n2.window]), i.useEffect((() => {
          d2 && s2 && a2.location.key === s2.location.key && d2.resolve();
        }), [d2, p2, a2.location, s2]), i.useEffect((() => {
          !l2.isTransitioning && h2 && (c2(h2.state), f2({ isTransitioning: true, flushSync: false, currentLocation: h2.currentLocation, nextLocation: h2.nextLocation }), b2(void 0));
        }), [l2.isTransitioning, h2]), i.useEffect((() => {
        }), []);
        let S2 = i.useMemo((() => ({ createHref: n2.createHref, encodeLocation: n2.encodeLocation, go: (e3) => n2.navigate(e3), push: (e3, t3, r2) => n2.navigate(e3, { state: t3, preventScrollReset: null == r2 ? void 0 : r2.preventScrollReset }), replace: (e3, t3, r2) => n2.navigate(e3, { replace: true, state: t3, preventScrollReset: null == r2 ? void 0 : r2.preventScrollReset }) })), [n2]), N2 = n2.basename || "/", _2 = i.useMemo((() => ({ router: n2, navigator: S2, static: false, basename: N2 })), [n2, S2, N2]), j2 = i.useMemo((() => ({ v7_relativeSplatPath: n2.future.v7_relativeSplatPath })), [n2.future.v7_relativeSplatPath]);
        return i.useEffect((() => r.UNSAFE_logV6DeprecationWarnings(o2, n2.future)), [o2, n2.future]), i.createElement(i.Fragment, null, i.createElement(r.UNSAFE_DataRouterContext.Provider, { value: _2 }, i.createElement(r.UNSAFE_DataRouterStateContext.Provider, { value: a2 }, i.createElement(P.Provider, { value: g2.current }, i.createElement(E.Provider, { value: l2 }, i.createElement(r.Router, { basename: N2, location: a2.location, navigationType: a2.historyAction, navigator: S2, future: j2 }, a2.initialized || n2.future.v7_partialHydration ? i.createElement(C, { routes: n2.routes, future: n2.future, state: a2 }) : t2))))), null);
      }, e.ScrollRestoration = function(e2) {
        let { getKey: t2, storageKey: n2 } = e2;
        return J({ getKey: t2, storageKey: n2 }), null;
      }, e.UNSAFE_FetchersContext = P, e.UNSAFE_ViewTransitionContext = E, e.UNSAFE_useScrollRestoration = J, e.createBrowserRouter = function(e2, t2) {
        return o.createRouter({ basename: null == t2 ? void 0 : t2.basename, future: s({}, null == t2 ? void 0 : t2.future, { v7_prependBasename: true }), history: o.createBrowserHistory({ window: null == t2 ? void 0 : t2.window }), hydrationData: (null == t2 ? void 0 : t2.hydrationData) || R(), routes: e2, mapRouteProperties: r.UNSAFE_mapRouteProperties, dataStrategy: null == t2 ? void 0 : t2.dataStrategy, patchRoutesOnNavigation: null == t2 ? void 0 : t2.patchRoutesOnNavigation, window: null == t2 ? void 0 : t2.window }).initialize();
      }, e.createHashRouter = function(e2, t2) {
        return o.createRouter({ basename: null == t2 ? void 0 : t2.basename, future: s({}, null == t2 ? void 0 : t2.future, { v7_prependBasename: true }), history: o.createHashHistory({ window: null == t2 ? void 0 : t2.window }), hydrationData: (null == t2 ? void 0 : t2.hydrationData) || R(), routes: e2, mapRouteProperties: r.UNSAFE_mapRouteProperties, dataStrategy: null == t2 ? void 0 : t2.dataStrategy, patchRoutesOnNavigation: null == t2 ? void 0 : t2.patchRoutesOnNavigation, window: null == t2 ? void 0 : t2.window }).initialize();
      }, e.createSearchParams = m, e.unstable_HistoryRouter = function(e2) {
        let { basename: t2, children: n2, future: o2, history: a2 } = e2, [u2, s2] = i.useState({ action: a2.action, location: a2.location }), { v7_startTransition: c2 } = o2 || {}, l2 = i.useCallback(((e3) => {
          c2 && O ? O((() => s2(e3))) : s2(e3);
        }), [s2, c2]);
        return i.useLayoutEffect((() => a2.listen(l2)), [a2, l2]), i.useEffect((() => r.UNSAFE_logV6DeprecationWarnings(o2)), [o2]), i.createElement(r.Router, { basename: t2, children: n2, location: u2.location, navigationType: u2.action, navigator: a2, future: o2 });
      }, e.unstable_usePrompt = function(e2) {
        let { when: t2, message: n2 } = e2, o2 = r.useBlocker(t2);
        i.useEffect((() => {
          if ("blocked" === o2.state) {
            window.confirm(n2) ? setTimeout(o2.proceed, 0) : o2.reset();
          }
        }), [o2, n2]), i.useEffect((() => {
          "blocked" !== o2.state || t2 || o2.reset();
        }), [o2, t2]);
      }, e.useBeforeUnload = function(e2, t2) {
        let { capture: n2 } = t2 || {};
        i.useEffect((() => {
          let t3 = null != n2 ? { capture: n2 } : void 0;
          return window.addEventListener("beforeunload", e2, t3), () => {
            window.removeEventListener("beforeunload", e2, t3);
          };
        }), [e2, n2]);
      }, e.useFetcher = function(e2) {
        var t2;
        let { key: n2 } = void 0 === e2 ? {} : e2, { router: a2 } = B(k.UseFetcher), u2 = H(M.UseFetcher), c2 = i.useContext(P), l2 = i.useContext(r.UNSAFE_RouteContext), f2 = null == (t2 = l2.matches[l2.matches.length - 1]) ? void 0 : t2.route.id;
        c2 || o.UNSAFE_invariant(false), l2 || o.UNSAFE_invariant(false), null == f2 && o.UNSAFE_invariant(false);
        let d2 = _ ? _() : "", [m2, p2] = i.useState(n2 || d2);
        n2 && n2 !== m2 ? p2(n2) : m2 || p2(V()), i.useEffect((() => (a2.getFetcher(m2), () => {
          a2.deleteFetcher(m2);
        })), [a2, m2]);
        let v2 = i.useCallback(((e3, t3) => {
          f2 || o.UNSAFE_invariant(false), a2.fetch(m2, f2, e3, t3);
        }), [m2, f2, a2]), h2 = W(), b2 = i.useCallback(((e3, t3) => {
          h2(e3, s({}, t3, { navigate: false, fetcherKey: m2 }));
        }), [m2, h2]), g2 = i.useMemo((() => i.forwardRef(((e3, t3) => i.createElement(D, s({}, e3, { navigate: false, fetcherKey: m2, ref: t3 }))))), [m2]), y2 = u2.fetchers.get(m2) || o.IDLE_FETCHER, w2 = c2.get(m2);
        return i.useMemo((() => s({ Form: g2, submit: b2, load: v2 }, y2, { data: w2 })), [g2, b2, v2, y2, w2]);
      }, e.useFetchers = function() {
        let e2 = H(M.UseFetchers);
        return Array.from(e2.fetchers.entries()).map(((e3) => {
          let [t2, n2] = e3;
          return s({}, n2, { key: t2 });
        }));
      }, e.useFormAction = z, e.useLinkClickHandler = I, e.useSearchParams = function(e2) {
        let t2 = i.useRef(m(e2)), n2 = i.useRef(false), o2 = r.useLocation(), a2 = i.useMemo((() => (function(e3, t3) {
          let n3 = m(e3);
          return t3 && t3.forEach(((e4, r2) => {
            n3.has(r2) || t3.getAll(r2).forEach(((e5) => {
              n3.append(r2, e5);
            }));
          })), n3;
        })(o2.search, n2.current ? null : t2.current)), [o2.search]), u2 = r.useNavigate(), s2 = i.useCallback(((e3, t3) => {
          const r2 = m("function" == typeof e3 ? e3(a2) : e3);
          n2.current = true, u2("?" + r2, t3);
        }), [u2, a2]);
        return [a2, s2];
      }, e.useSubmit = W, e.useViewTransitionState = G, Object.defineProperty(e, "__esModule", { value: true });
    }));
  }
});

// node_modules/react-router-dom/dist/main.js
var require_main2 = __commonJS({
  "node_modules/react-router-dom/dist/main.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_router_dom_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-router-dom/server.js
var require_server = __commonJS({
  "node_modules/react-router-dom/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React5 = require_react();
    var router = require_router_cjs();
    var reactRouter = require_main();
    var reactRouterDom = require_main2();
    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React5);
    function StaticRouter2({
      basename,
      children,
      location: locationProp = "/",
      future
    }) {
      if (typeof locationProp === "string") {
        locationProp = reactRouterDom.parsePath(locationProp);
      }
      let action = router.Action.Pop;
      let location = {
        pathname: locationProp.pathname || "/",
        search: locationProp.search || "",
        hash: locationProp.hash || "",
        state: locationProp.state != null ? locationProp.state : null,
        key: locationProp.key || "default"
      };
      let staticNavigator = getStatelessNavigator();
      return /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        basename,
        children,
        location,
        navigationType: action,
        navigator: staticNavigator,
        future,
        static: true
      });
    }
    function StaticRouterProvider({
      context,
      router: router$1,
      hydrate = true,
      nonce
    }) {
      !(router$1 && context) ? false ? router.UNSAFE_invariant(false, "You must provide `router` and `context` to <StaticRouterProvider>") : router.UNSAFE_invariant(false) : void 0;
      let dataRouterContext = {
        router: router$1,
        navigator: getStatelessNavigator(),
        static: true,
        staticContext: context,
        basename: context.basename || "/"
      };
      let fetchersContext = /* @__PURE__ */ new Map();
      let hydrateScript = "";
      if (hydrate !== false) {
        let data = {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors)
        };
        let json = htmlEscape(JSON.stringify(JSON.stringify(data)));
        hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
      }
      let {
        state
      } = dataRouterContext.router;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_DataRouterContext.Provider, {
        value: dataRouterContext
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_DataRouterStateContext.Provider, {
        value: state
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_FetchersContext.Provider, {
        value: fetchersContext
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_ViewTransitionContext.Provider, {
        value: {
          isTransitioning: false
        }
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        basename: dataRouterContext.basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: dataRouterContext.navigator,
        static: dataRouterContext.static,
        future: {
          v7_relativeSplatPath: router$1.future.v7_relativeSplatPath
        }
      }, /* @__PURE__ */ React__namespace.createElement(DataRoutes, {
        routes: router$1.routes,
        future: router$1.future,
        state
      })))))), hydrateScript ? /* @__PURE__ */ React__namespace.createElement("script", {
        suppressHydrationWarning: true,
        nonce,
        dangerouslySetInnerHTML: {
          __html: hydrateScript
        }
      }) : null);
    }
    function DataRoutes({
      routes,
      future,
      state
    }) {
      return reactRouter.UNSAFE_useRoutesImpl(routes, void 0, state, future);
    }
    function serializeErrors(errors) {
      if (!errors) return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (router.isRouteErrorResponse(val)) {
          serialized[key] = {
            ...val,
            __type: "RouteErrorResponse"
          };
        } else if (val instanceof Error) {
          serialized[key] = {
            message: val.message,
            __type: "Error",
            // If this is a subclass (i.e., ReferenceError), send up the type so we
            // can re-create the same type during hydration.
            ...val.name !== "Error" ? {
              __subType: val.name
            } : {}
          };
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
    function getStatelessNavigator() {
      return {
        createHref,
        encodeLocation,
        push(to) {
          throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
        },
        replace(to) {
          throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
        },
        go(delta) {
          throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
        },
        back() {
          throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
        },
        forward() {
          throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
        }
      };
    }
    function createStaticHandler(routes, opts) {
      return router.createStaticHandler(routes, {
        ...opts,
        mapRouteProperties: reactRouter.UNSAFE_mapRouteProperties
      });
    }
    function createStaticRouter(routes, context, opts = {}) {
      let manifest = {};
      let dataRoutes = router.UNSAFE_convertRoutesToDataRoutes(routes, reactRouter.UNSAFE_mapRouteProperties, void 0, manifest);
      let matches = context.matches.map((match) => {
        let route = manifest[match.route.id] || match.route;
        return {
          ...match,
          route
        };
      });
      let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
      return {
        get basename() {
          return context.basename;
        },
        get future() {
          return {
            v7_fetcherPersist: false,
            v7_normalizeFormMethod: false,
            v7_partialHydration: opts.future?.v7_partialHydration === true,
            v7_prependBasename: false,
            v7_relativeSplatPath: opts.future?.v7_relativeSplatPath === true,
            v7_skipActionErrorRevalidation: false
          };
        },
        get state() {
          return {
            historyAction: router.Action.Pop,
            location: context.location,
            matches,
            loaderData: context.loaderData,
            actionData: context.actionData,
            errors: context.errors,
            initialized: true,
            navigation: router.IDLE_NAVIGATION,
            restoreScrollPosition: null,
            preventScrollReset: false,
            revalidation: "idle",
            fetchers: /* @__PURE__ */ new Map(),
            blockers: /* @__PURE__ */ new Map()
          };
        },
        get routes() {
          return dataRoutes;
        },
        get window() {
          return void 0;
        },
        initialize() {
          throw msg("initialize");
        },
        subscribe() {
          throw msg("subscribe");
        },
        enableScrollRestoration() {
          throw msg("enableScrollRestoration");
        },
        navigate() {
          throw msg("navigate");
        },
        fetch() {
          throw msg("fetch");
        },
        revalidate() {
          throw msg("revalidate");
        },
        createHref,
        encodeLocation,
        getFetcher() {
          return router.IDLE_FETCHER;
        },
        deleteFetcher() {
          throw msg("deleteFetcher");
        },
        dispose() {
          throw msg("dispose");
        },
        getBlocker() {
          return router.IDLE_BLOCKER;
        },
        deleteBlocker() {
          throw msg("deleteBlocker");
        },
        patchRoutes() {
          throw msg("patchRoutes");
        },
        _internalFetchControllers: /* @__PURE__ */ new Map(),
        _internalActiveDeferreds: /* @__PURE__ */ new Map(),
        _internalSetRoutes() {
          throw msg("_internalSetRoutes");
        }
      };
    }
    function createHref(to) {
      return typeof to === "string" ? to : reactRouterDom.createPath(to);
    }
    function encodeLocation(to) {
      let href = typeof to === "string" ? to : reactRouterDom.createPath(to);
      href = href.replace(/ $/, "%20");
      let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
      return {
        pathname: encoded.pathname,
        search: encoded.search,
        hash: encoded.hash
      };
    }
    var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
    function htmlEscape(str) {
      return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
    }
    exports.StaticRouter = StaticRouter2;
    exports.StaticRouterProvider = StaticRouterProvider;
    exports.createStaticHandler = createStaticHandler;
    exports.createStaticRouter = createStaticRouter;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/invariant/invariant.js
var require_invariant = __commonJS({
  "node_modules/invariant/invariant.js"(exports, module) {
    "use strict";
    var NODE_ENV = "production";
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (NODE_ENV !== "production") {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/react-helmet-async/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-helmet-async/lib/index.js"(exports, module) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      Helmet: () => Helmet3,
      HelmetData: () => HelmetData,
      HelmetProvider: () => HelmetProvider2
    });
    module.exports = __toCommonJS(src_exports);
    var import_react42 = __toESM2(require_react());
    var import_react_fast_compare = __toESM2(require_react_fast_compare());
    var import_invariant = __toESM2(require_invariant());
    var import_react22 = __toESM2(require_react());
    var import_react6 = __toESM2(require_react());
    var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
      TAG_NAMES2["BASE"] = "base";
      TAG_NAMES2["BODY"] = "body";
      TAG_NAMES2["HEAD"] = "head";
      TAG_NAMES2["HTML"] = "html";
      TAG_NAMES2["LINK"] = "link";
      TAG_NAMES2["META"] = "meta";
      TAG_NAMES2["NOSCRIPT"] = "noscript";
      TAG_NAMES2["SCRIPT"] = "script";
      TAG_NAMES2["STYLE"] = "style";
      TAG_NAMES2["TITLE"] = "title";
      TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
      return TAG_NAMES2;
    })(TAG_NAMES || {});
    var SEO_PRIORITY_TAGS = {
      link: { rel: ["amphtml", "canonical", "alternate"] },
      script: { type: ["application/ld+json"] },
      meta: {
        charset: "",
        name: ["generator", "robots", "description"],
        property: [
          "og:type",
          "og:title",
          "og:url",
          "og:image",
          "og:image:alt",
          "og:description",
          "twitter:url",
          "twitter:title",
          "twitter:description",
          "twitter:image",
          "twitter:image:alt",
          "twitter:card",
          "twitter:site"
        ]
      }
    };
    var VALID_TAG_NAMES = Object.values(TAG_NAMES);
    var REACT_TAG_MAP = {
      accesskey: "accessKey",
      charset: "charSet",
      class: "className",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      "http-equiv": "httpEquiv",
      itemprop: "itemProp",
      tabindex: "tabIndex"
    };
    var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
      (carry, [key, value]) => {
        carry[value] = key;
        return carry;
      },
      {}
    );
    var HELMET_ATTRIBUTE = "data-rh";
    var HELMET_PROPS = {
      DEFAULT_TITLE: "defaultTitle",
      DEFER: "defer",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate",
      PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
    };
    var getInnermostProperty = (propsList, property) => {
      for (let i = propsList.length - 1; i >= 0; i -= 1) {
        const props = propsList[i];
        if (Object.prototype.hasOwnProperty.call(props, property)) {
          return props[property];
        }
      }
      return null;
    };
    var getTitleFromPropsList = (propsList) => {
      let innermostTitle = getInnermostProperty(
        propsList,
        "title"
        /* TITLE */
      );
      const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
      if (Array.isArray(innermostTitle)) {
        innermostTitle = innermostTitle.join("");
      }
      if (innermostTemplate && innermostTitle) {
        return innermostTemplate.replace(/%s/g, () => innermostTitle);
      }
      const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
      return innermostTitle || innermostDefaultTitle || void 0;
    };
    var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
    });
    var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
    var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
      "base"
      /* BASE */
    ] !== "undefined").map((props) => props[
      "base"
      /* BASE */
    ]).reverse().reduce((innermostBaseTag, tag) => {
      if (!innermostBaseTag.length) {
        const keys = Object.keys(tag);
        for (let i = 0; i < keys.length; i += 1) {
          const attributeKey = keys[i];
          const lowerCaseAttributeKey = attributeKey.toLowerCase();
          if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
            return innermostBaseTag.concat(tag);
          }
        }
      }
      return innermostBaseTag;
    }, []);
    var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
    var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
      const approvedSeenTags = {};
      return propsList.filter((props) => {
        if (Array.isArray(props[tagName])) {
          return true;
        }
        if (typeof props[tagName] !== "undefined") {
          warn(
            `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
          );
        }
        return false;
      }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
        const instanceSeenTags = {};
        instanceTags.filter((tag) => {
          let primaryAttributeKey;
          const keys2 = Object.keys(tag);
          for (let i = 0; i < keys2.length; i += 1) {
            const attributeKey = keys2[i];
            const lowerCaseAttributeKey = attributeKey.toLowerCase();
            if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
              primaryAttributeKey = lowerCaseAttributeKey;
            }
            if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
              primaryAttributeKey = attributeKey;
            }
          }
          if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
            return false;
          }
          const value = tag[primaryAttributeKey].toLowerCase();
          if (!approvedSeenTags[primaryAttributeKey]) {
            approvedSeenTags[primaryAttributeKey] = {};
          }
          if (!instanceSeenTags[primaryAttributeKey]) {
            instanceSeenTags[primaryAttributeKey] = {};
          }
          if (!approvedSeenTags[primaryAttributeKey][value]) {
            instanceSeenTags[primaryAttributeKey][value] = true;
            return true;
          }
          return false;
        }).reverse().forEach((tag) => approvedTags.push(tag));
        const keys = Object.keys(instanceSeenTags);
        for (let i = 0; i < keys.length; i += 1) {
          const attributeKey = keys[i];
          const tagUnion = {
            ...approvedSeenTags[attributeKey],
            ...instanceSeenTags[attributeKey]
          };
          approvedSeenTags[attributeKey] = tagUnion;
        }
        return approvedTags;
      }, []).reverse();
    };
    var getAnyTrueFromPropsList = (propsList, checkedTag) => {
      if (Array.isArray(propsList) && propsList.length) {
        for (let index = 0; index < propsList.length; index += 1) {
          const prop = propsList[index];
          if (prop[checkedTag]) {
            return true;
          }
        }
      }
      return false;
    };
    var reducePropsToState = (propsList) => ({
      baseTag: getBaseTagFromPropsList([
        "href"
        /* HREF */
      ], propsList),
      bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
      defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
      encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
      linkTags: getTagsFromPropsList(
        "link",
        [
          "rel",
          "href"
          /* HREF */
        ],
        propsList
      ),
      metaTags: getTagsFromPropsList(
        "meta",
        [
          "name",
          "charset",
          "http-equiv",
          "property",
          "itemprop"
          /* ITEM_PROP */
        ],
        propsList
      ),
      noscriptTags: getTagsFromPropsList("noscript", [
        "innerHTML"
        /* INNER_HTML */
      ], propsList),
      onChangeClientState: getOnChangeClientState(propsList),
      scriptTags: getTagsFromPropsList(
        "script",
        [
          "src",
          "innerHTML"
          /* INNER_HTML */
        ],
        propsList
      ),
      styleTags: getTagsFromPropsList("style", [
        "cssText"
        /* CSS_TEXT */
      ], propsList),
      title: getTitleFromPropsList(propsList),
      titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
      prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
    });
    var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
    var checkIfPropsMatch = (props, toMatch) => {
      const keys = Object.keys(props);
      for (let i = 0; i < keys.length; i += 1) {
        if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
          return true;
        }
      }
      return false;
    };
    var prioritizer = (elementsList, propsToMatch) => {
      if (Array.isArray(elementsList)) {
        return elementsList.reduce(
          (acc, elementAttrs) => {
            if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
              acc.priority.push(elementAttrs);
            } else {
              acc.default.push(elementAttrs);
            }
            return acc;
          },
          { priority: [], default: [] }
        );
      }
      return { default: elementsList, priority: [] };
    };
    var without = (obj, key) => {
      return {
        ...obj,
        [key]: void 0
      };
    };
    var SELF_CLOSING_TAGS = [
      "noscript",
      "script",
      "style"
      /* STYLE */
    ];
    var encodeSpecialCharacters = (str, encode = true) => {
      if (encode === false) {
        return String(str);
      }
      return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    };
    var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
      const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
      return str ? `${str} ${attr}` : attr;
    }, "");
    var generateTitleAsString = (type, title, attributes, encode) => {
      const attributeString = generateElementAttributesAsString(attributes);
      const flattenedTitle = flattenArray(title);
      return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
        flattenedTitle,
        encode
      )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
        flattenedTitle,
        encode
      )}</${type}>`;
    };
    var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
      const tag = t;
      const attributeHtml = Object.keys(tag).filter(
        (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
      ).reduce((string, attribute) => {
        const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
        return string ? `${string} ${attr}` : attr;
      }, "");
      const tagContent = tag.innerHTML || tag.cssText || "";
      const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
      return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
    }, "");
    var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
      const mapped = REACT_TAG_MAP[key];
      obj[mapped || key] = attributes[key];
      return obj;
    }, initProps);
    var generateTitleAsReactComponent = (_type, title, attributes) => {
      const initProps = {
        key: title,
        [HELMET_ATTRIBUTE]: true
      };
      const props = convertElementAttributesToReactProps(attributes, initProps);
      return [import_react6.default.createElement("title", props, title)];
    };
    var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
      const mappedTag = {
        key: i,
        [HELMET_ATTRIBUTE]: true
      };
      Object.keys(tag).forEach((attribute) => {
        const mapped = REACT_TAG_MAP[attribute];
        const mappedAttribute = mapped || attribute;
        if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
          const content = tag.innerHTML || tag.cssText;
          mappedTag.dangerouslySetInnerHTML = { __html: content };
        } else {
          mappedTag[mappedAttribute] = tag[attribute];
        }
      });
      return import_react6.default.createElement(type, mappedTag);
    });
    var getMethodsForTag = (type, tags, encode = true) => {
      switch (type) {
        case "title":
          return {
            toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
            toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
          };
        case "bodyAttributes":
        case "htmlAttributes":
          return {
            toComponent: () => convertElementAttributesToReactProps(tags),
            toString: () => generateElementAttributesAsString(tags)
          };
        default:
          return {
            toComponent: () => generateTagsAsReactComponent(type, tags),
            toString: () => generateTagsAsString(type, tags, encode)
          };
      }
    };
    var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
      const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
      const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
      const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
      const priorityMethods = {
        toComponent: () => [
          ...generateTagsAsReactComponent("meta", meta.priority),
          ...generateTagsAsReactComponent("link", link.priority),
          ...generateTagsAsReactComponent("script", script.priority)
        ],
        toString: () => (
          // generate all the tags as strings and concatenate them
          `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
            "link",
            link.priority,
            encode
          )} ${getMethodsForTag("script", script.priority, encode)}`
        )
      };
      return {
        priorityMethods,
        metaTags: meta.default,
        linkTags: link.default,
        scriptTags: script.default
      };
    };
    var mapStateOnServer = (props) => {
      const {
        baseTag,
        bodyAttributes,
        encode = true,
        htmlAttributes,
        noscriptTags,
        styleTags,
        title = "",
        titleAttributes,
        prioritizeSeoTags
      } = props;
      let { linkTags, metaTags, scriptTags } = props;
      let priorityMethods = {
        toComponent: () => {
        },
        toString: () => ""
      };
      if (prioritizeSeoTags) {
        ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
      }
      return {
        priority: priorityMethods,
        base: getMethodsForTag("base", baseTag, encode),
        bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
        htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
        link: getMethodsForTag("link", linkTags, encode),
        meta: getMethodsForTag("meta", metaTags, encode),
        noscript: getMethodsForTag("noscript", noscriptTags, encode),
        script: getMethodsForTag("script", scriptTags, encode),
        style: getMethodsForTag("style", styleTags, encode),
        title: getMethodsForTag("title", { title, titleAttributes }, encode)
      };
    };
    var server_default = mapStateOnServer;
    var instances = [];
    var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var HelmetData = class {
      constructor(context, canUseDOM) {
        __publicField(this, "instances", []);
        __publicField(this, "canUseDOM", isDocument);
        __publicField(this, "context");
        __publicField(this, "value", {
          setHelmet: (serverState) => {
            this.context.helmet = serverState;
          },
          helmetInstances: {
            get: () => this.canUseDOM ? instances : this.instances,
            add: (instance) => {
              (this.canUseDOM ? instances : this.instances).push(instance);
            },
            remove: (instance) => {
              const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
              (this.canUseDOM ? instances : this.instances).splice(index, 1);
            }
          }
        });
        this.context = context;
        this.canUseDOM = canUseDOM || false;
        if (!canUseDOM) {
          context.helmet = server_default({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: true,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
          });
        }
      }
    };
    var defaultValue = {};
    var Context = import_react22.default.createContext(defaultValue);
    var _a;
    var HelmetProvider2 = (_a = class extends import_react22.Component {
      constructor(props) {
        super(props);
        __publicField(this, "helmetData");
        this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
      }
      render() {
        return /* @__PURE__ */ import_react22.default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
      }
    }, __publicField(_a, "canUseDOM", isDocument), _a);
    var import_react32 = require_react();
    var import_shallowequal = __toESM2(require_shallowequal());
    var updateTags = (type, tags) => {
      const headElement = document.head || document.querySelector(
        "head"
        /* HEAD */
      );
      const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
      const oldTags = [].slice.call(tagNodes);
      const newTags = [];
      let indexToDelete;
      if (tags && tags.length) {
        tags.forEach((tag) => {
          const newElement = document.createElement(type);
          for (const attribute in tag) {
            if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
              if (attribute === "innerHTML") {
                newElement.innerHTML = tag.innerHTML;
              } else if (attribute === "cssText") {
                if (newElement.styleSheet) {
                  newElement.styleSheet.cssText = tag.cssText;
                } else {
                  newElement.appendChild(document.createTextNode(tag.cssText));
                }
              } else {
                const attr = attribute;
                const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
                newElement.setAttribute(attribute, value);
              }
            }
          }
          newElement.setAttribute(HELMET_ATTRIBUTE, "true");
          if (oldTags.some((existingTag, index) => {
            indexToDelete = index;
            return newElement.isEqualNode(existingTag);
          })) {
            oldTags.splice(indexToDelete, 1);
          } else {
            newTags.push(newElement);
          }
        });
      }
      oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
      newTags.forEach((tag) => headElement.appendChild(tag));
      return {
        oldTags,
        newTags
      };
    };
    var updateAttributes = (tagName, attributes) => {
      const elementTag = document.getElementsByTagName(tagName)[0];
      if (!elementTag) {
        return;
      }
      const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
      const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
      const attributesToRemove = [...helmetAttributes];
      const attributeKeys = Object.keys(attributes);
      for (const attribute of attributeKeys) {
        const value = attributes[attribute] || "";
        if (elementTag.getAttribute(attribute) !== value) {
          elementTag.setAttribute(attribute, value);
        }
        if (helmetAttributes.indexOf(attribute) === -1) {
          helmetAttributes.push(attribute);
        }
        const indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
          attributesToRemove.splice(indexToSave, 1);
        }
      }
      for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
        elementTag.removeAttribute(attributesToRemove[i]);
      }
      if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
      } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
      }
    };
    var updateTitle = (title, attributes) => {
      if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
      }
      updateAttributes("title", attributes);
    };
    var commitTagChanges = (newState, cb) => {
      const {
        baseTag,
        bodyAttributes,
        htmlAttributes,
        linkTags,
        metaTags,
        noscriptTags,
        onChangeClientState,
        scriptTags,
        styleTags,
        title,
        titleAttributes
      } = newState;
      updateAttributes("body", bodyAttributes);
      updateAttributes("html", htmlAttributes);
      updateTitle(title, titleAttributes);
      const tagUpdates = {
        baseTag: updateTags("base", baseTag),
        linkTags: updateTags("link", linkTags),
        metaTags: updateTags("meta", metaTags),
        noscriptTags: updateTags("noscript", noscriptTags),
        scriptTags: updateTags("script", scriptTags),
        styleTags: updateTags("style", styleTags)
      };
      const addedTags = {};
      const removedTags = {};
      Object.keys(tagUpdates).forEach((tagType) => {
        const { newTags, oldTags } = tagUpdates[tagType];
        if (newTags.length) {
          addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
          removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
      });
      if (cb) {
        cb();
      }
      onChangeClientState(newState, addedTags, removedTags);
    };
    var _helmetCallback = null;
    var handleStateChangeOnClient = (newState) => {
      if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
      }
      if (newState.defer) {
        _helmetCallback = requestAnimationFrame(() => {
          commitTagChanges(newState, () => {
            _helmetCallback = null;
          });
        });
      } else {
        commitTagChanges(newState);
        _helmetCallback = null;
      }
    };
    var client_default = handleStateChangeOnClient;
    var HelmetDispatcher = class extends import_react32.Component {
      constructor() {
        super(...arguments);
        __publicField(this, "rendered", false);
      }
      shouldComponentUpdate(nextProps) {
        return !(0, import_shallowequal.default)(nextProps, this.props);
      }
      componentDidUpdate() {
        this.emitChange();
      }
      componentWillUnmount() {
        const { helmetInstances } = this.props.context;
        helmetInstances.remove(this);
        this.emitChange();
      }
      emitChange() {
        const { helmetInstances, setHelmet } = this.props.context;
        let serverState = null;
        const state = reducePropsToState(
          helmetInstances.get().map((instance) => {
            const props = { ...instance.props };
            delete props.context;
            return props;
          })
        );
        if (HelmetProvider2.canUseDOM) {
          client_default(state);
        } else if (server_default) {
          serverState = server_default(state);
        }
        setHelmet(serverState);
      }
      // componentWillMount will be deprecated
      // for SSR, initialize on first render
      // constructor is also unsafe in StrictMode
      init() {
        if (this.rendered) {
          return;
        }
        this.rendered = true;
        const { helmetInstances } = this.props.context;
        helmetInstances.add(this);
        this.emitChange();
      }
      render() {
        this.init();
        return null;
      }
    };
    var _a2;
    var Helmet3 = (_a2 = class extends import_react42.Component {
      shouldComponentUpdate(nextProps) {
        return !(0, import_react_fast_compare.default)(without(this.props, "helmetData"), without(nextProps, "helmetData"));
      }
      mapNestedChildrenToProps(child, nestedChildren) {
        if (!nestedChildren) {
          return null;
        }
        switch (child.type) {
          case "script":
          case "noscript":
            return {
              innerHTML: nestedChildren
            };
          case "style":
            return {
              cssText: nestedChildren
            };
          default:
            throw new Error(
              `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
        return {
          ...arrayTypeChildren,
          [child.type]: [
            ...arrayTypeChildren[child.type] || [],
            {
              ...newChildProps,
              ...this.mapNestedChildrenToProps(child, nestedChildren)
            }
          ]
        };
      }
      mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
        switch (child.type) {
          case "title":
            return {
              ...newProps,
              [child.type]: nestedChildren,
              titleAttributes: { ...newChildProps }
            };
          case "body":
            return {
              ...newProps,
              bodyAttributes: { ...newChildProps }
            };
          case "html":
            return {
              ...newProps,
              htmlAttributes: { ...newChildProps }
            };
          default:
            return {
              ...newProps,
              [child.type]: { ...newChildProps }
            };
        }
      }
      mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
        let newFlattenedProps = { ...newProps };
        Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
          newFlattenedProps = {
            ...newFlattenedProps,
            [arrayChildName]: arrayTypeChildren[arrayChildName]
          };
        });
        return newFlattenedProps;
      }
      warnOnInvalidChildren(child, nestedChildren) {
        (0, import_invariant.default)(
          VALID_TAG_NAMES.some((name) => child.type === name),
          typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
            ", "
          )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
        );
        (0, import_invariant.default)(
          !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
          `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
        );
        return true;
      }
      mapChildrenToProps(children, newProps) {
        let arrayTypeChildren = {};
        import_react42.default.Children.forEach(children, (child) => {
          if (!child || !child.props) {
            return;
          }
          const { children: nestedChildren, ...childProps } = child.props;
          const newChildProps = Object.keys(childProps).reduce((obj, key) => {
            obj[HTML_TAG_MAP[key] || key] = childProps[key];
            return obj;
          }, {});
          let { type } = child;
          if (typeof type === "symbol") {
            type = type.toString();
          } else {
            this.warnOnInvalidChildren(child, nestedChildren);
          }
          switch (type) {
            case "Symbol(react.fragment)":
              newProps = this.mapChildrenToProps(nestedChildren, newProps);
              break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
              arrayTypeChildren = this.flattenArrayTypeChildren(
                child,
                arrayTypeChildren,
                newChildProps,
                nestedChildren
              );
              break;
            default:
              newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
              break;
          }
        });
        return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      }
      render() {
        const { children, ...props } = this.props;
        let newProps = { ...props };
        let { helmetData } = props;
        if (children) {
          newProps = this.mapChildrenToProps(children, newProps);
        }
        if (helmetData && !(helmetData instanceof HelmetData)) {
          const data = helmetData;
          helmetData = new HelmetData(data.context, true);
          delete newProps.helmetData;
        }
        return helmetData ? /* @__PURE__ */ import_react42.default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ import_react42.default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ import_react42.default.createElement(HelmetDispatcher, { ...newProps, context }));
      }
    }, __publicField(_a2, "defaultProps", {
      defer: true,
      encodeSpecialCharacters: true,
      prioritizeSeoTags: false
    }), _a2);
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = null;
    }
  }
});

// src/entry-server.tsx
var import_react5 = __toESM(require_react(), 1);
var import_server = __toESM(require_server_node(), 1);
var import_server2 = __toESM(require_server(), 1);
var import_react_helmet_async3 = __toESM(require_lib(), 1);

// src/App.tsx
var import_react_router_dom3 = __toESM(require_main2(), 1);

// src/components/TestPage.tsx
var import_react4 = __toESM(require_react(), 1);
var import_react_helmet_async = __toESM(require_lib(), 1);

// src/data.ts
var introText = {
  title: "The New and Improved 1988 Rice Trasher Purity Test",
  description: "There's no doubt in anyone's mind that the old Purity Test, first printed in this very paper, is an enduring classic which should still be mandatory for all entering freshmen. However, it has been noted that the test is perhaps a little outdated. With this in mind, we at the backpage are proud to offer the new, improved, 1988 Purity Test.",
  instructions: `For each of the following things you have done, give yourself one point. When you're done, subtract the total from 150. This is your score. Original source: <a href="https://digitalcollections.rice.edu/Documents/Detail/the-rice-thresher-houston-tex.-vol.-75-no.-24.5-ed.-1-friday-april-1-1988/18427?item=34406" target="_blank" rel="noopener noreferrer">The Rice Thresher (April 1, 1988)</a>`,
  definitions: [
    { term: "Sexual activity", definition: "Either sexual intercourse or heavy activity with both (or all) parties naked and with orgasm as the ultimate goal. This is in response to complaints that intercourse is not always the most reliable indicator of purity." }
  ]
};
var sections = [
  {
    title: "General",
    questions: [
      "Kissed a member of the opposite sex",
      "French kissed a member of the opposite sex",
      "Made out with a member of the opposite sex",
      "Scrogged (naked making out) with a member of the opposite sex",
      "Cunnilingus with a member of the opposite sex",
      "Fellatio with a member of the opposite sex",
      "69 with a member of the opposite sex",
      "Anal intercourse with a member of the opposite sex",
      "Felching (oral act after anal sex) with a member of the opposite sex",
      "Sexual intercourse with a member of the opposite sex",
      "Golden Showers (urination on partner)",
      "Kissed a member of the same sex",
      "French kissed a member of the same sex",
      "Made out with a member of the same sex",
      "Scrogged (naked making out) with a member of the same sex",
      "Cunnilingus with a member of the same sex",
      "Fellatio with a member of the same sex",
      "69 with a member of the same sex",
      "Anal intercourse with a member of the same sex",
      "Felching (oral act after anal sex) with a member of the same sex"
    ]
  },
  {
    title: "Sexual Activity with:",
    questions: [
      "An animal",
      "An inanimate object",
      "A relative",
      "Someone asleep or passed out",
      "Someone tripping (on drugs)",
      "Roommate's boyfriend or girlfriend",
      "Two people (menage a trois)",
      "More than two people (orgy)",
      "Your advisor/freshman",
      "A campus police officer",
      "Someone married/engaged (not to you)",
      "Someone over 30",
      "An ex",
      "A faculty member",
      "A prostitute",
      "A stranger",
      "A non-Rice stranger",
      "Someone whose name you couldn't remember afterwards"
    ]
  },
  {
    title: "Sexual activity:",
    questions: [
      "Without birth control",
      "While passed out or asleep",
      "While tied up",
      "Using food",
      "With whips, chains, or other S & M type gadgets",
      "Any other bizarre sexual toy",
      "Standing up",
      "Doggie style",
      "Any other position besides woman on top or missionary",
      "In a hot tub",
      "Underwater",
      "With three different people in one weekend",
      "With two different people in one night",
      "With more than three different people in one weekend",
      "Within the last week",
      "Within the last day",
      "Within the last hour",
      "More than once a day (average)",
      "Lost virginity before this year",
      "Lost virginity before college (Rice)",
      "Lost virginity before high school",
      "Sexual activity while another person is in the room",
      "In a classroom",
      "In a commons, private dining room (PDR), or college library",
      "In the library (Fondren), any classroom building, Lovett Hall, or Ryon lab (during operating hours)",
      "In the stadium",
      "At the computer lab (Mudd)",
      "On a roof or sundeck",
      "Willy's statue (campus landmark)",
      "At the beach",
      "In the steam tunnels",
      "Gotten caught or caught someone",
      "Seen a porno flick",
      "Read Playboy, Playgirl, Penthouse, Forum or Hustler",
      "Seen a stripper/nude dancer",
      "Ordered anything that came in a plain brown wrapper (discreet packaging)",
      "Been flashed",
      "Flashed someone",
      "Sunbathed nude",
      "Committed voyeurism",
      "Spent the night with a member of the opposite sex",
      "Cohabitated with a member of the opposite sex (nonsexual basis)",
      "Cohabitated with a member of the opposite sex (sexual basis)",
      "Never been to church",
      "Have not attended church since coming to college (Rice)",
      "Ditched a date",
      "Masturbated",
      "Masturbated with another person present",
      "Masturbated using sexual aids",
      "Had a Venereal Disease (STI)",
      "Vandalised/stolen anything from another college",
      "Had an abortion",
      "Used colored or ribbed condoms",
      "Used joy jelly (lubricant), flavored underpants, etc.",
      "Shoplifted",
      "Been arrested",
      "Stolen a sign",
      "Committed a misdemeanor (other than sign stealing)",
      "Cheated or violated the honor code",
      "Witnessed a crime",
      "Committed assault",
      "Been convicted of anything",
      "Run with Baker 13 (undie run tradition)",
      "Thrown anything off of Lovett or Sid (dormitory towers)",
      "Driven drunk",
      "Been caught driving drunk",
      "Used fake ID",
      "Own fake ID",
      "Gotten a parking ticket (Rice)",
      "Gotten a real ticket",
      "Lied on a job application",
      "Owned a deadly weapon (not Mace)",
      "Assaulted a police officer or campus police",
      "Committed statutory rape",
      "Committed non-statutory rape",
      "Gone steam tunneling (exploring underground tunnels)",
      "Gone swimming in Rupp's pool (campus pool)",
      "Snuck into party or movie",
      "Own Ozzy Osbourne album/tape/CD",
      "Been to House of Guys (specific party spot)",
      "Been picked up at House of Guys",
      "Responded to/placed a personal ad (not in the school paper)",
      "Cruised Westheimer (a major street)",
      "Gone to a singles bar",
      "Gotten picked up",
      "Drunk alcohol",
      "Been drunk",
      "Get drunk at least once a week",
      "Vomited (Booted)",
      "Passed out",
      "Vomited/passed out at College Night",
      "Vomited/passed out on date",
      "Joined Rally Club",
      "Vomited on faculty member/parent/Rupp",
      "Used alcohol to lower inhibitions (skank)",
      "Vomited/passed out at Esperanza/Rondelet/Archi-Arts (dances)",
      "Vomited/passed out before noon",
      "Participated in Lovett Beerathon (or been drunk 24 hours independently)",
      "Gone to NOD (Night of Decadence party)",
      "Smoked",
      "Habitually smoke",
      "Used Ecstasy (X)",
      "Smoked pot",
      "Used cocaine",
      "Used crack",
      "Abused prescription drugs",
      "Mixed drugs & alcohol",
      "Used drugs before college (Rice)",
      "Sold drugs",
      "Been arrested in connection with drugs",
      "Done shrooms",
      "Been to Counterball (annual event)"
    ]
  }
];
var scoringCategories = [
  { min: 121, max: 150, text: "Wynn I-have-been-at-Rice-for-almost-a-year-and-I-still-don't-know-what-felching-is-so-I-asked-my-mom Martin." },
  { min: 91, max: 120, text: "Jenny I-am-a-hot-sexy-and-voluptuous-babe-in-the-wild-and-wet-fantasy-of-every-Sid-Rich-geek Berry" },
  { min: 61, max: 90, text: "Paul Sat-by-his-phone-for-hours-and-still-didn't-get-invited-to-Randomlay Angles" },
  { min: 31, max: 60, text: "Mike Yes-I-know-I-look-like-Paul-but-there's-no-way-I-would-use-his-ID Raphael" },
  { min: 0, max: 30, text: "Mich\xE8le Whip-Me-Beat-Me-but-don't-lay-a-hand-on-my-dog Wucker." }
];

// src/components/IOSLayout.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var IOSLayout = ({ title, children, leftAction, rightAction, showLargeTitle = true }) => {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [titleOpacity, setTitleOpacity] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      if (scrollY > 20) {
        const opacity = Math.min((scrollY - 20) / 40, 1);
        setTitleOpacity(opacity);
      } else {
        setTitleOpacity(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ios-layout", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { className: `ios-header ${scrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "header-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "header-left", children: leftAction }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sticky-header-title", style: { opacity: showLargeTitle ? titleOpacity : 1 }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "header-right", children: rightAction })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "ios-content", children: [
      showLargeTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "large-title-container", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "large-title", children: title }) }),
      children
    ] })
  ] });
};

// src/components/ToggleRow.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var ToggleRow = ({ label, index, checked, onChange, last }) => {
  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange(!checked);
    }
  };
  const handleChange = (newChecked) => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
    onChange(newChecked);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "label",
    {
      className: "toggle-row",
      onKeyDown: handleKeyDown,
      tabIndex: 0,
      role: "checkbox",
      "aria-checked": checked,
      "aria-label": `${index}. ${label}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            type: "checkbox",
            className: "hidden-checkbox",
            checked,
            onChange: (e) => handleChange(e.target.checked),
            tabIndex: -1
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "row-number", children: [
          index,
          "."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `row-content ${last ? "last" : ""}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "row-label", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `ios-switch ${checked ? "checked" : ""}`, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "switch-handle" }) })
        ] })
      ]
    }
  );
};

// src/components/SEOContent.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var SEOContent = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { padding: "24px 16px", color: "#1c1c1e", maxWidth: "600px", margin: "0 auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px", padding: "16px", backgroundColor: "#e8f5e9", borderRadius: "12px", border: "1px solid #c8e6c9" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "#2e7d32" }, children: "Privacy & Security" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#1b5e20", margin: 0, fontWeight: 500 }, children: "This test runs entirely locally, ensuring your privacy is always protected. Your answers never leave your device." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" }, children: "Methodology & Scoring" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", marginBottom: "16px" }, children: "This digital version faithfully recreates the 1988 Rice Purity Test (150-question extended edition) as documented in Rice University archives. The scoring logic is transparent:" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", paddingLeft: "20px", marginBottom: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: "You start with a perfect score of 100 (or 150)." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: 'Each "Yes" answer deducts 1 point.' }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: 'Your final score represents your remaining percentage of "purity" or innocence.' })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43" }, children: "We utilize local browser storage to save your progress temporarily so you don't lose your spot, but no data is ever transmitted to us or third parties." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" }, children: "History of the Rice Purity Test" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", marginBottom: "16px" }, children: 'The Rice Purity Test is a famous 100-question survey that originated at Rice University in Houston, Texas. First published in 1924, it was designed to help students bond and track their life experiences throughout college. Over the decades, it has evolved into a viral internet phenomenon, serving as a rite of passage for high school and college students worldwide. The "1988 version" featured here is considered one of the most classic and standard iterations, widely cited in student culture and online communities.' })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" }, children: "What Does Your Rice Purity Score Mean?" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", marginBottom: "16px" }, children: `Your score is calculated by subtracting the number of "yes" answers from 100 (or 150 in the extended version). A score of 100 implies absolute innocence (having done nothing on the list), while a lower score indicates more life experiences. It is important to remember that this test is for entertainment purposes only. There is no "good" or "bad" score\u2014everyone's journey and comfort level with life experiences is unique.` })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" }, children: "Score Breakdown & Interpretation" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { backgroundColor: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" }, children: "121 - 150: The Innocent" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "14px", color: "#666", margin: 0 }, children: "You have done very few items on the list. This range usually means you are newer to the social scene or choose to stay cautious." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" }, children: "91 - 120: The Typical Student" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "14px", color: "#666", margin: 0 }, children: "You've explored some parties and relationships but still keep plenty of boundaries. Many college students land here." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" }, children: "61 - 90: The Experienced" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "14px", color: "#666", margin: 0 }, children: "You have a solid list of stories and have tried a wide variety of items. You are comfortable experimenting." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" }, children: "31 - 60: The Adventurous" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "14px", color: "#666", margin: 0 }, children: "You have gone well beyond the basics and probably have plenty of wild memories to share." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" }, children: "0 - 30: The Wild One" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "14px", color: "#666", margin: 0 }, children: "Almost everything on the checklist is familiar territory. Few boundaries exist for you." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { style: { marginBottom: "32px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" }, children: "Frequently Asked Questions (FAQ)" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" }, children: "Is the Rice Purity Test anonymous?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" }, children: "Yes, this calculator is purely client-side. Your answers are processed in your browser and are never sent to any server. Your privacy is guaranteed." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" }, children: 'What is a "good" Rice Purity Score?' }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" }, children: 'There is no objective "good" score. A high score means you are more innocent, while a low score means you are more experienced. Most college students score between 40 and 70.' })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { marginBottom: "20px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" }, children: "How many questions are there?" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" }, children: 'The classic version has 100 questions. However, the 1988 version presented here includes 150 questions for a more comprehensive checklist. We also offer a "Short Mode" with 30 questions for a quick check.' })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("script", { type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is the Rice Purity Test anonymous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this calculator is purely client-side. Your answers are processed in your browser and are never sent to any server. Your privacy is guaranteed."
        }
      }, {
        "@type": "Question",
        "name": "What is a 'good' Rice Purity Score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no objective 'good' score. A high score means you are more innocent, while a low score means you are more experienced. Most college students score between 40 and 70."
        }
      }, {
        "@type": "Question",
        "name": "How many questions are there?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The classic version has 100 questions. However, the 1988 version presented here includes 150 questions for a more comprehensive checklist. We also offer a 'Short Mode' with 30 questions for a quick check."
        }
      }]
    }) })
  ] });
};

// src/components/ScoreDial.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var ScoreDial = ({ score, maxScore, category }) => {
  const [animatedScore, setAnimatedScore] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    const end = score;
    const duration = 1e3;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentScore = Math.floor(easeProgress * end);
      setAnimatedScore(currentScore);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [score]);
  const getColor = (p) => {
    if (p >= 0.9) return "var(--system-green)";
    if (p >= 0.7) return "var(--system-yellow)";
    if (p >= 0.5) return "var(--system-orange)";
    return "var(--system-red)";
  };
  const percentage = score / maxScore;
  const color = getColor(percentage);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - percentage * circumference;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "score-dial-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "score-dial", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "140", height: "140", viewBox: "0 0 140 140", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "circle",
          {
            className: "dial-bg",
            cx: "70",
            cy: "70",
            r: radius,
            strokeWidth: "10"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "circle",
          {
            className: "dial-progress animate-ring",
            cx: "70",
            cy: "70",
            r: radius,
            strokeWidth: "10",
            stroke: color,
            strokeDasharray: circumference,
            style: {
              "--target-offset": offset,
              "--circumference": circumference,
              transition: "stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.5s"
            },
            strokeLinecap: "round",
            transform: "rotate(-90 70 70)"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "score-value", children: [
        animatedScore,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "score-max", children: [
          "/",
          maxScore
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "score-category visible", children: category })
  ] });
};

// src/components/WidgetPoster.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var WidgetPoster = ({ score, maxScore }) => {
  const canvasRef = (0, import_react3.useRef)(null);
  const generateImage = (0, import_react3.useCallback)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = 800;
    const height = 800;
    canvas.width = width;
    canvas.height = height;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const bgColor = isDark ? "#1C1C1E" : "#FFFFFF";
    const textColor = isDark ? "#FFFFFF" : "#000000";
    const secondaryTextColor = "#8E8E93";
    const roundRect = (x, y, w, h, r) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };
    ctx.fillStyle = isDark ? "#000000" : "#F2F2F7";
    ctx.fillRect(0, 0, width, height);
    const wSize = 500;
    const wX = (width - wSize) / 2;
    const wY = (height - wSize) / 2;
    const wRadius = 80;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.12)";
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 15;
    roundRect(wX, wY, wSize, wSize, wRadius);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.restore();
    const iconSize = 64;
    const iconX = wX + 40;
    const iconY = wY + 40;
    const iconGrad = ctx.createLinearGradient(iconX, iconY, iconX, iconY + iconSize);
    iconGrad.addColorStop(0, "#5AC8FA");
    iconGrad.addColorStop(1, "#007AFF");
    roundRect(iconX, iconY, iconSize, iconSize, 16);
    ctx.fillStyle = iconGrad;
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(iconX + 32, iconY + 38, 18, 0, Math.PI, false);
    ctx.fill();
    ctx.fillRect(iconX + 20, iconY + 18, 24, 4);
    ctx.fillRect(iconX + 26, iconY + 26, 12, 4);
    ctx.textAlign = "left";
    ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "SF Pro Display"';
    ctx.fillStyle = textColor;
    ctx.fillText("Rice Purity", iconX + 85, iconY + 44);
    const cardContentCenterY = wY + wSize / 2 + 30;
    ctx.textAlign = "center";
    ctx.font = '900 180px -apple-system, BlinkMacSystemFont, "SF Pro Display"';
    ctx.fillStyle = textColor;
    ctx.fillText(score.toString(), wX + wSize / 2, cardContentCenterY);
    ctx.font = "600 40px -apple-system";
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText(`/${maxScore}`, wX + wSize / 2, cardContentCenterY + 65);
    ctx.textAlign = "center";
    ctx.font = "500 24px -apple-system";
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText("ricepurity.online", width / 2, wY + wSize + 65);
    const link = document.createElement("a");
    link.download = `rice-purity-score-${score}.png`;
    link.href = canvas.toDataURL("image/png", 1);
    link.click();
  }, [score, maxScore]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "widget-poster-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { onClick: generateImage, className: "button-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { marginRight: "8px" }, children: "\u{1F5BC}\uFE0F" }),
      "Download Poster"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("canvas", { ref: canvasRef, style: { display: "none" } })
  ] });
};

// src/components/TestPage.tsx
var import_react_router_dom = __toESM(require_main2(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function TestPage() {
  const allQuestions = (0, import_react4.useMemo)(() => sections.flatMap((s) => s.questions), []);
  const [checkedState, setCheckedState] = (0, import_react4.useState)(new Array(allQuestions.length).fill(false));
  const [isShortMode, setIsShortMode] = (0, import_react4.useState)(false);
  const [view, setView] = (0, import_react4.useState)("test");
  const [showIntro, setShowIntro] = (0, import_react4.useState)(false);
  const handleToggle = (index, checked) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
  };
  const handleReset = () => {
    if (confirm("Are you sure you want to clear all checks?")) {
      setCheckedState(new Array(allQuestions.length).fill(false));
      setView("test");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const isQuestionIncluded = (0, import_react4.useCallback)((index) => {
    if (!isShortMode) return true;
    return index % 5 === 0;
  }, [isShortMode]);
  const currentMaxScore = isShortMode ? 30 : 150;
  const { displayScore, progress } = (0, import_react4.useMemo)(() => {
    let count = 0;
    allQuestions.forEach((_, index) => {
      const included = isQuestionIncluded(index);
      if (included && checkedState[index]) {
        count++;
      }
    });
    return {
      displayScore: currentMaxScore - count,
      progress: count / currentMaxScore * 100
    };
  }, [checkedState, currentMaxScore, allQuestions, isQuestionIncluded]);
  const category = (0, import_react4.useMemo)(() => {
    const scoreToLookup = isShortMode ? displayScore * 5 : displayScore;
    const found = scoringCategories.find((c) => scoreToLookup >= c.min && scoreToLookup <= c.max);
    return found ? found.text : isShortMode ? "Short Test Mode" : "";
  }, [displayScore, isShortMode]);
  const handleSubmit = () => {
    setView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleRetake = () => {
    setView("test");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleShare = async () => {
    const shareData = {
      title: "Rice Purity Test Result",
      text: `I scored a ${displayScore}/${currentMaxScore} on the Rice Purity Test! Check your score here:`,
      url: window.location.origin
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert("Score copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;
  if (view === "results") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(IOSLayout, { title: "Results", showLargeTitle: false, leftAction: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "back-button", onClick: () => setView("test"), children: "Back" }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_helmet_async.Helmet, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("title", { children: [
          "My Rice Purity Test Score: ",
          displayScore
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { name: "robots", content: "noindex" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "results-view animate-fade-in", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          ScoreDial,
          {
            score: displayScore,
            maxScore: currentMaxScore,
            category
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "action-buttons", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            WidgetPoster,
            {
              score: displayScore,
              maxScore: currentMaxScore
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "share-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "share-title", children: "Share your result" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "social-buttons-grid", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  onClick: () => window.open(`https://twitter.com/intent/tweet?text=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!%20See%20your%20score%20here:%20&url=${window.location.origin}`, "_blank"),
                  className: "social-button twitter",
                  children: "Twitter"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  onClick: () => window.open(`https://www.reddit.com/submit?title=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!&url=${window.location.origin}`, "_blank"),
                  className: "social-button reddit",
                  children: "Reddit"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}&quote=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!`, "_blank"),
                  className: "social-button facebook",
                  children: "Facebook"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  onClick: () => window.open(`https://wa.me/?text=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!%20Check%20yours%20here:%20${window.location.origin}`, "_blank"),
                  className: "social-button whatsapp",
                  children: "WhatsApp"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { onClick: handleShare, className: "button-secondary", style: { marginTop: "12px" }, children: "More Options..." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "embed-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "share-title", children: "Add badge to your website" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "embed-desc", children: "Copy this code to show off your score on your blog or profile:" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "embed-box", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "textarea",
                {
                  readOnly: true,
                  value: `<a href="${window.location.origin}" style="display:inline-block;padding:8px 16px;background:#007aff;color:white;text-decoration:none;border-radius:20px;font-family:system-ui;font-weight:bold;">Rice Purity Score: ${displayScore}</a>`,
                  onClick: (e) => e.target.select()
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  className: "copy-btn",
                  onClick: () => {
                    navigator.clipboard.writeText(`<a href="${window.location.origin}" style="display:inline-block;padding:8px 16px;background:#007aff;color:white;text-decoration:none;border-radius:20px;font-family:system-ui;font-weight:bold;">Rice Purity Score: ${displayScore}</a>`);
                    alert("Embed code copied!");
                  },
                  children: "Copy"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { onClick: handleRetake, className: "button-secondary", style: { marginTop: "24px" }, children: "Review Answers" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { onClick: handleReset, className: "button-text-danger", children: "Start Over" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "seo-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SEOContent, {}) })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    IOSLayout,
    {
      title: "Rice Purity Test",
      rightAction: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "clear-button", onClick: handleReset, children: "Clear" }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_helmet_async.Helmet, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: "Rice Purity Test - The 1988 Original Version" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { name: "description", content: "Take the original 1988 Rice Purity Test. 150 questions to calculate your purity score. Works offline and on mobile." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "progress-container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "progress-bar", style: { width: `${progress}%` } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "app-container animate-fade-in", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "privacy-badge", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { role: "img", "aria-label": "shield", children: "\u{1F6E1}\uFE0F" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Runs entirely locally and can work offline" })
          ] }),
          showIntro && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "intro-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "intro-title", children: introText.title }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "intro-desc", children: introText.description }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "intro-section", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "intro-subtitle", children: "Instructions" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "intro-text-small", dangerouslySetInnerHTML: { __html: introText.instructions } })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "intro-section", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "intro-subtitle", children: "Definitions" }),
              introText.definitions.map((def, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "definition-item", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "term", children: [
                  def.term,
                  ":"
                ] }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "definition", children: def.definition })
              ] }, i))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "intro-section", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: "intro-subtitle", children: "Quick Links" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_react_router_dom.Link,
                {
                  to: "/rice-purity-test-score-meanings",
                  className: "button-text-small",
                  style: { padding: "4px 0", color: "var(--accent-color)", fontWeight: "500", display: "inline-block" },
                  children: "Rice Purity Test Score Meanings \u2192"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                onClick: () => setShowIntro(false),
                className: "button-secondary-small",
                style: { marginTop: "12px" },
                children: "Hide Info"
              }
            )
          ] }),
          !showIntro && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "info-toggle-container", style: { display: "flex", gap: "8px", justifyContent: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                onClick: () => setShowIntro(true),
                className: "info-toggle-button",
                children: "Show Instructions"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_react_router_dom.Link,
              {
                to: "/rice-purity-test-score-meanings",
                className: "info-toggle-button",
                style: { textDecoration: "none" },
                children: "Score Meanings"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mode-selector", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                className: `mode-button ${!isShortMode ? "active" : ""}`,
                onClick: () => setIsShortMode(false),
                children: "Full (150)"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                className: `mode-button ${isShortMode ? "active" : ""}`,
                onClick: () => setIsShortMode(true),
                children: "Short (30)"
              }
            )
          ] }),
          sections.map((section, sIndex) => {
            const questionsToRender = [];
            section.questions.forEach((q) => {
              const currentOriginalIndex = globalIndexCounter;
              if (isQuestionIncluded(currentOriginalIndex)) {
                questionsToRender.push({
                  text: q,
                  originalIndex: currentOriginalIndex,
                  displayIndex: displayedQuestionCounter
                });
                displayedQuestionCounter++;
              }
              globalIndexCounter++;
            });
            if (questionsToRender.length === 0) return null;
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "section-container", children: [
              section.title && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "section-title", children: section.title }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "questions-group", children: questionsToRender.map((q, i) => {
                return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  ToggleRow,
                  {
                    index: q.displayIndex,
                    label: q.text,
                    checked: checkedState[q.originalIndex],
                    onChange: (c) => handleToggle(q.originalIndex, c),
                    last: i === questionsToRender.length - 1
                  },
                  q.originalIndex
                );
              }) })
            ] }, sIndex);
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "submit-container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              onClick: handleSubmit,
              className: "button-primary-large",
              children: "Calculate Score"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SEOContent, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "footer-notice", children: "Caution: This is the 1988 version. Definitions may vary." })
      ]
    }
  );
}

// src/components/ScoreMeanings.tsx
var import_react_router_dom2 = __toESM(require_main2(), 1);
var import_react_helmet_async2 = __toESM(require_lib(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var ScoreMeanings = () => {
  const generalMeanings = [
    { range: "100 - 98", label: "Angelic", desc: "You are exceptionally pure. You've likely avoided almost all 'scandalous' activities listed." },
    { range: "97 - 94", label: "Very Pure", desc: "Still very innocent, perhaps a few minor experiences but overall a very high purity score." },
    { range: "93 - 77", label: "Pure", desc: "You have some life experience, but you're still well within the 'good kid' territory." },
    { range: "76 - 45", label: "Average", desc: "The typical college experience. You've had your share of fun and rebellion." },
    { range: "44 - 9", label: "Low Purity", desc: "You've lived a very adventurous life. You're definitely not an angel anymore." },
    { range: "8 - 0", label: "Not Pure", desc: "You've done almost everything on the list. A true veteran of life's experiences." }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    IOSLayout,
    {
      title: "Score Meanings",
      leftAction: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom2.Link, { to: "/", className: "back-button", style: { textDecoration: "none" }, children: "Back" }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_helmet_async2.Helmet, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("title", { children: "Rice Purity Test Score Meanings - Complete Guide" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("meta", { name: "description", content: "Understand what your Rice Purity Test score means. Detailed breakdown of score ranges from Angelic to Not Pure, including the original 1988 scale." }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("link", { rel: "canonical", href: window.location.origin + "/rice-purity-test-score-meanings" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "app-container animate-fade-in", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "section-title", children: "General Meanings (100-Point Scale)" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "questions-group", children: generalMeanings.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "toggle-row", style: { padding: "12px 16px", flexDirection: "column", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "4px" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontWeight: "600", color: "var(--accent-color)" }, children: m.range }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontWeight: "600" }, children: m.label })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { fontSize: "14px", color: "var(--secondary-label)" }, children: m.desc }),
              i !== generalMeanings.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "separator", style: { marginTop: "12px" } })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "section-title", children: "1988 Rice Thresher Meanings (150-Point Scale)" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "questions-group", children: scoringCategories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "toggle-row", style: { padding: "12px 16px", flexDirection: "column", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "4px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { style: { fontWeight: "600", color: "var(--accent-color)" }, children: [
                c.min,
                " - ",
                c.max
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { fontSize: "14px", color: "var(--label)" }, children: c.text }),
              i !== scoringCategories.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "separator", style: { marginTop: "12px" } })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "seo-content", style: { marginTop: "24px", padding: "0 16px", fontSize: "14px", color: "var(--secondary-label)", lineHeight: "1.5" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: 'The Rice Purity Test score meanings have evolved over decades. While the original 1924 test was quite different, the modern 100-question version is the most common today. A higher score indicates more "purity" or "innocence," while a lower score indicates more life experiences.' }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "This 1988 version uses a 150-point scale, providing even more granular detail into the social and cultural history of the era." })
          ] })
        ] })
      ]
    }
  );
};

// src/App.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_router_dom3.Routes, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom3.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TestPage, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom3.Route, { path: "/rice-purity-test-score-meanings", element: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ScoreMeanings, {}) })
  ] });
}
var App_default = App;

// src/entry-server.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function render(url, helmetContext) {
  return import_server.default.renderToString(
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react5.default.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_helmet_async3.HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_server2.StaticRouter, { location: url, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(App_default, {}) }) }) })
  );
}
export {
  render
};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.js:
  (**
   * @license React
   * react-dom-server.node.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.cjs.js:
  (**
   * @remix-run/router v1.23.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/umd/react-router.production.min.js:
react-router/dist/main.js:
  (**
   * React Router v6.30.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/umd/react-router-dom.production.min.js:
react-router-dom/dist/main.js:
  (**
   * React Router DOM v6.30.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
