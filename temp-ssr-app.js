var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
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
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
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

// src/App.tsx
var import_react5 = __toESM(require_react(), 1);

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
var IOSLayout = ({ title, children, rightAction }) => {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "ios-layout" }, /* @__PURE__ */ import_react.default.createElement("header", { className: `ios-header ${scrolled ? "scrolled" : ""}` }, /* @__PURE__ */ import_react.default.createElement("div", { className: "header-content" }, /* @__PURE__ */ import_react.default.createElement("h1", null, title), rightAction && /* @__PURE__ */ import_react.default.createElement("div", { className: "header-right" }, rightAction))), /* @__PURE__ */ import_react.default.createElement("main", { className: "ios-content" }, children));
};

// src/components/ToggleRow.tsx
var import_react2 = __toESM(require_react(), 1);
var ToggleRow = ({ label, index, checked, onChange, last }) => {
  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange(!checked);
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "label",
    {
      className: "toggle-row",
      onKeyDown: handleKeyDown,
      tabIndex: 0,
      role: "checkbox",
      "aria-checked": checked,
      "aria-label": `${index}. ${label}`
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "input",
      {
        type: "checkbox",
        className: "hidden-checkbox",
        checked,
        onChange: (e) => onChange(e.target.checked),
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "row-number" }, index, "."),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: `row-content ${last ? "last" : ""}` }, /* @__PURE__ */ import_react2.default.createElement("span", { className: "row-label" }, label), /* @__PURE__ */ import_react2.default.createElement("div", { className: `ios-switch ${checked ? "checked" : ""}`, "aria-hidden": "true" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "switch-handle" })))
  );
};

// src/components/SEOContent.tsx
var import_react3 = __toESM(require_react(), 1);
var SEOContent = () => {
  return /* @__PURE__ */ import_react3.default.createElement("div", { style: { padding: "24px 16px", color: "#1c1c1e", maxWidth: "600px", margin: "0 auto" } }, /* @__PURE__ */ import_react3.default.createElement("section", { style: { marginBottom: "32px", padding: "16px", backgroundColor: "#e8f5e9", borderRadius: "12px", border: "1px solid #c8e6c9" } }, /* @__PURE__ */ import_react3.default.createElement("h2", { style: { fontSize: "18px", fontWeight: "700", marginBottom: "8px", color: "#2e7d32" } }, "Privacy & Security"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#1b5e20", margin: 0, fontWeight: 500 } }, "This test runs entirely locally, ensuring your privacy is always protected. Your answers never leave your device.")), /* @__PURE__ */ import_react3.default.createElement("section", { style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react3.default.createElement("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" } }, "History of the Rice Purity Test"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", marginBottom: "16px" } }, 'The Rice Purity Test is a famous 100-question survey that originated at Rice University in Houston, Texas. First published in 1924, it was designed to help students bond and track their life experiences throughout college. Over the decades, it has evolved into a viral internet phenomenon, serving as a rite of passage for high school and college students worldwide. The "1988 version" featured here is considered one of the most classic and standard iterations.')), /* @__PURE__ */ import_react3.default.createElement("section", { style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react3.default.createElement("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" } }, "What Does Your Rice Purity Score Mean?"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.6", color: "#3c3c43", marginBottom: "16px" } }, `Your score is calculated by subtracting the number of "yes" answers from 100 (or 150 in the extended version). A score of 100 implies absolute innocence (having done nothing on the list), while a lower score indicates more life experiences. It is important to remember that this test is for entertainment purposes only. There is no "good" or "bad" score\u2014everyone's journey and comfort level with life experiences is unique.`)), /* @__PURE__ */ import_react3.default.createElement("section", { style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react3.default.createElement("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" } }, "Score Breakdown & Interpretation"), /* @__PURE__ */ import_react3.default.createElement("div", { style: { backgroundColor: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" } }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" } }, "121 - 150: The Innocent"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "14px", color: "#666", margin: 0 } }, "You have done very few items on the list. This range usually means you are newer to the social scene or choose to stay cautious.")), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" } }, "91 - 120: The Typical Student"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "14px", color: "#666", margin: 0 } }, "You've explored some parties and relationships but still keep plenty of boundaries. Many college students land here.")), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" } }, "61 - 90: The Experienced"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "14px", color: "#666", margin: 0 } }, "You have a solid list of stories and have tried a wide variety of items. You are comfortable experimenting.")), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" } }, "31 - 60: The Adventurous"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "14px", color: "#666", margin: 0 } }, "You have gone well beyond the basics and probably have plenty of wild memories to share.")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "4px" } }, "0 - 30: The Wild One"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "14px", color: "#666", margin: 0 } }, "Almost everything on the checklist is familiar territory. Few boundaries exist for you.")))), /* @__PURE__ */ import_react3.default.createElement("section", { style: { marginBottom: "32px" } }, /* @__PURE__ */ import_react3.default.createElement("h2", { style: { fontSize: "22px", fontWeight: "700", marginBottom: "12px" } }, "Frequently Asked Questions (FAQ)"), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" } }, "Is the Rice Purity Test anonymous?"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" } }, "Yes, this calculator is purely client-side. Your answers are processed in your browser and are never sent to any server. Your privacy is guaranteed.")), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" } }, 'What is a "good" Rice Purity Score?'), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" } }, 'There is no objective "good" score. A high score means you are more innocent, while a low score means you are more experienced. Most college students score between 40 and 70.')), /* @__PURE__ */ import_react3.default.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { fontSize: "17px", fontWeight: "600", marginBottom: "6px" } }, "How many questions are there?"), /* @__PURE__ */ import_react3.default.createElement("p", { style: { fontSize: "15px", lineHeight: "1.5", color: "#3c3c43" } }, 'The classic version has 100 questions. However, the 1988 version presented here includes 150 questions for a more comprehensive checklist. We also offer a "Short Mode" with 30 questions for a quick check.'))), /* @__PURE__ */ import_react3.default.createElement("script", { type: "application/ld+json" }, JSON.stringify({
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
  })));
};

// src/components/ScoreDial.tsx
var import_react4 = __toESM(require_react(), 1);
var ScoreDial = ({ score, maxScore, category }) => {
  const getColor = (p) => {
    if (p >= 0.9) return "#34c759";
    if (p >= 0.7) return "#ffcc00";
    if (p >= 0.5) return "#ff9500";
    return "#ff3b30";
  };
  const percentage = score / maxScore;
  const color = getColor(percentage);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - percentage * circumference;
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "score-dial-container" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "score-dial" }, /* @__PURE__ */ import_react4.default.createElement("svg", { width: "140", height: "140", viewBox: "0 0 140 140" }, /* @__PURE__ */ import_react4.default.createElement(
    "circle",
    {
      className: "dial-bg",
      cx: "70",
      cy: "70",
      r: radius,
      strokeWidth: "10"
    }
  ), /* @__PURE__ */ import_react4.default.createElement(
    "circle",
    {
      className: "dial-progress",
      cx: "70",
      cy: "70",
      r: radius,
      strokeWidth: "10",
      stroke: color,
      strokeDasharray: circumference,
      strokeDashoffset: offset,
      strokeLinecap: "round",
      transform: "rotate(-90 70 70)"
    }
  )), /* @__PURE__ */ import_react4.default.createElement("div", { className: "score-value" }, score, /* @__PURE__ */ import_react4.default.createElement("div", { className: "score-max" }, "/", maxScore))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "score-category" }, category));
};

// src/App.tsx
function App() {
  const allQuestions = (0, import_react5.useMemo)(() => sections.flatMap((s) => s.questions), []);
  const [checkedState, setCheckedState] = (0, import_react5.useState)(new Array(allQuestions.length).fill(false));
  const [isShortMode, setIsShortMode] = (0, import_react5.useState)(false);
  const [isSubmitted, setIsSubmitted] = (0, import_react5.useState)(false);
  const [showIntro, setShowIntro] = (0, import_react5.useState)(false);
  const handleToggle = (index, checked) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
  };
  const handleReset = () => {
    if (confirm("Are you sure you want to clear all checks?")) {
      setCheckedState(new Array(allQuestions.length).fill(false));
      setIsSubmitted(false);
      window.scrollTo(0, 0);
    }
  };
  const isQuestionIncluded = (index) => {
    if (!isShortMode) return true;
    return index % 5 === 0;
  };
  const currentMaxScore = isShortMode ? 30 : 150;
  const displayScore = (0, import_react5.useMemo)(() => {
    let checkedCount = 0;
    allQuestions.forEach((_, index) => {
      if (isQuestionIncluded(index) && checkedState[index]) {
        checkedCount++;
      }
    });
    return currentMaxScore - checkedCount;
  }, [checkedState, isShortMode, currentMaxScore, allQuestions]);
  const category = (0, import_react5.useMemo)(() => {
    const scoreToLookup = isShortMode ? displayScore * 5 : displayScore;
    const found = scoringCategories.find((c) => scoreToLookup >= c.min && scoreToLookup <= c.max);
    return found ? found.text : isShortMode ? "Short Test Mode" : "";
  }, [displayScore, isShortMode]);
  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };
  const handleRetake = () => {
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  };
  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;
  if (isSubmitted) {
    return /* @__PURE__ */ React.createElement(IOSLayout, { title: "Results" }, /* @__PURE__ */ React.createElement("div", { className: "results-view" }, /* @__PURE__ */ React.createElement(
      ScoreDial,
      {
        score: displayScore,
        maxScore: currentMaxScore,
        category
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "action-buttons" }, /* @__PURE__ */ React.createElement("button", { onClick: handleRetake, className: "button-primary" }, "Review Answers"), /* @__PURE__ */ React.createElement("button", { onClick: handleReset, className: "button-text-danger" }, "Start Over")), /* @__PURE__ */ React.createElement("div", { className: "seo-wrapper" }, /* @__PURE__ */ React.createElement(SEOContent, null))));
  }
  return /* @__PURE__ */ React.createElement(
    IOSLayout,
    {
      title: "Rice Purity test",
      rightAction: /* @__PURE__ */ React.createElement("span", { className: "clear-button", onClick: handleReset }, "Clear")
    },
    /* @__PURE__ */ React.createElement("div", { className: "app-container" }, /* @__PURE__ */ React.createElement("div", { className: "privacy-badge" }, /* @__PURE__ */ React.createElement("span", { role: "img", "aria-label": "shield" }, "\u{1F6E1}\uFE0F"), /* @__PURE__ */ React.createElement("span", null, "Runs entirely locally and can work offline")), showIntro && /* @__PURE__ */ React.createElement("div", { className: "intro-card" }, /* @__PURE__ */ React.createElement("h2", { className: "intro-title" }, introText.title), /* @__PURE__ */ React.createElement("p", { className: "intro-desc" }, introText.description), /* @__PURE__ */ React.createElement("div", { className: "intro-section" }, /* @__PURE__ */ React.createElement("h4", { className: "intro-subtitle" }, "Instructions"), /* @__PURE__ */ React.createElement("p", { className: "intro-text-small", dangerouslySetInnerHTML: { __html: introText.instructions } })), /* @__PURE__ */ React.createElement("div", { className: "intro-section" }, /* @__PURE__ */ React.createElement("h4", { className: "intro-subtitle" }, "Definitions"), introText.definitions.map((def, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "definition-item" }, /* @__PURE__ */ React.createElement("span", { className: "term" }, def.term, ":"), " ", /* @__PURE__ */ React.createElement("span", { className: "definition" }, def.definition)))), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowIntro(false),
        className: "button-secondary-small"
      },
      "Hide Info"
    )), !showIntro && /* @__PURE__ */ React.createElement("div", { className: "info-toggle-container" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowIntro(true),
        className: "info-toggle-button"
      },
      "Show Instructions & Definitions"
    )), /* @__PURE__ */ React.createElement("div", { className: "mode-selector" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `mode-button ${!isShortMode ? "active" : ""}`,
        onClick: () => setIsShortMode(false)
      },
      "Full (150)"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `mode-button ${isShortMode ? "active" : ""}`,
        onClick: () => setIsShortMode(true)
      },
      "Short (30)"
    )), sections.map((section, sIndex) => {
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
      return /* @__PURE__ */ React.createElement("div", { key: sIndex, className: "section-container" }, section.title && /* @__PURE__ */ React.createElement("div", { className: "section-title" }, section.title), /* @__PURE__ */ React.createElement("div", { className: "questions-group" }, questionsToRender.map((q, i) => {
        return /* @__PURE__ */ React.createElement(
          ToggleRow,
          {
            key: q.originalIndex,
            index: q.displayIndex,
            label: q.text,
            checked: checkedState[q.originalIndex],
            onChange: (c) => handleToggle(q.originalIndex, c),
            last: i === questionsToRender.length - 1
          }
        );
      })));
    }), /* @__PURE__ */ React.createElement("div", { className: "submit-container" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleSubmit,
        className: "button-primary-large"
      },
      "Calculate Score"
    )), /* @__PURE__ */ React.createElement(SEOContent, null)),
    /* @__PURE__ */ React.createElement("div", { className: "footer-notice" }, "Caution: This is the 1988 version. Definitions may vary.")
  );
}
var App_default = App;
export {
  App_default as default
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
*/
