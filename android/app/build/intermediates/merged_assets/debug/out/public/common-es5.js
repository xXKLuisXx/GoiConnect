function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js ***!
    \************************************************************************/

  /*! exports provided: D, a, c, d, g, p, s */

  /***/
  function node_modulesIonicSuperTabsCoreDistEsmUtils640d2cf5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return DEFAULT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return getTs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return checkGesture;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return debugLog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getNormalizedScrollX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "p", function () {
      return pointerCoord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return scrollEl;
    });

    var DEFAULT_CONFIG = {
      dragThreshold: 20,
      allowElementScroll: false,
      maxDragAngle: 40,
      sideMenuThreshold: 50,
      transitionDuration: 150,
      shortSwipeDuration: 300,
      debug: false,
      avoidElements: false
    };

    function pointerCoord(ev) {
      // get X coordinates for either a mouse click
      // or a touch depending on the given event
      if (ev) {
        var changedTouches = ev.changedTouches;

        if (changedTouches && changedTouches.length > 0) {
          var touch = changedTouches[0];
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }

        if (ev.pageX !== undefined) {
          return {
            x: ev.pageX,
            y: ev.pageY
          };
        }
      }

      return {
        x: 0,
        y: 0
      };
    }

    var nativeScrollAvailable = ('scrollBehavior' in document.documentElement.style);

    var _getTs;

    if (window.performance && window.performance.now) {
      _getTs = window.performance.now.bind(window.performance);
    } else {
      _getTs = Date.now.bind(Date);
    }

    var getTs = _getTs;

    var easeInOutCubic = function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    function getScrollCoord(start, dest, startTime, currentTime, duration) {
      var time = Math.min(1, (currentTime - startTime) / duration);
      var timeFn = easeInOutCubic(time);
      return Math.ceil(timeFn * (dest - start) + start);
    }

    function scroll(el, startX, x, y, startTime, duration) {
      var currentTime = getTs();
      var scrollX = startX === x ? x : getScrollCoord(startX, x, startTime, currentTime, duration);
      el.scrollTo(scrollX, y);

      if (currentTime - startTime >= duration) {
        return;
      }

      requestAnimationFrame(function () {
        scroll(el, startX, x, y, startTime, duration);
      });
    }

    var scrollEl = function scrollEl(el, x) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var _native = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;

      if (duration <= 0) {
        requestAnimationFrame(function () {
          el.scrollTo(x, y);
        });
        return;
      }

      if (_native && nativeScrollAvailable) {
        el.scrollTo({
          left: x,
          top: y,
          behavior: 'smooth'
        });
        return;
      }

      requestAnimationFrame(function () {
        scroll(el, el.scrollLeft, x, y, getTs(), duration);
      });
    };

    function checkGesture(newCoords, initialCoords, config) {
      if (!initialCoords) {
        return false;
      }

      var radians = config.maxDragAngle * (Math.PI / 180);
      var maxCosine = Math.cos(radians);
      var deltaX = newCoords.x - initialCoords.x;
      var deltaY = newCoords.y - initialCoords.y;
      var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance >= config.dragThreshold) {
        // swipe is long enough
        // lets check the angle
        var angle = Math.atan2(deltaY, deltaX);
        var cosine = Math.cos(angle);
        return Math.abs(cosine) > maxCosine;
      }

      return false;
    }

    function getNormalizedScrollX(el, width) {
      var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Math.max(0, Math.min(el.scrollWidth - width, el.scrollLeft + delta));
    }

    var debugStyle1 = 'background: linear-gradient(135deg,#4150b2,#f71947); border: 1px solid #9a9a9a; color: #ffffff; border-bottom-left-radius: 2px; border-top-left-radius: 2px; padding: 2px 0 2px 4px;';
    var debugStyle2 = 'background: #252b3e; border: 1px solid #9a9a9a; border-top-right-radius: 2px; border-bottom-right-radius: 2px; margin-left: -2px; padding: 2px 4px; color: white;';

    function debugLog(config, tag, vals) {
      var _console;

      if (!config || !config.debug) {
        return;
      } // Some gorgeous logging, because apparently I have lots of free time to style console logs and write this comment


      (_console = console).log.apply(_console, ["%csuper-tabs %c%s", debugStyle1, debugStyle2, ' '.repeat(10 - tag.length) + tag].concat(_toConsumableArray(vals)));
    }
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive0d5784f9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-44bf8136.js */
    "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
    /* harmony import */


    var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-eea61379.js */
    "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
    /* harmony import */


    var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-7b8ba70a.js */
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/chat/chat.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/chat/chat.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfesionalChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/home/home.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/home/home.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfesionalHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content><br>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button shape=\"round\" style=\"background-color:#a1a1a1; border-radius:50%; margin-top: -35px;\">\r\n        <ion-icon name=\"settings\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button shape=\"round\" style=\"background-color:#a1a1a1; border-radius:50%; margin-top: -35px;\">\r\n        <ion-icon name=\"options\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-avatar slot=\"start\" style=\"margin-top: 25px;\">\r\n      <img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\" style=\"width: 100%; height:100%\">\r\n    </ion-avatar>\r\n    <ion-input placeholder=\"¿Qué estás pensando?\" class=\"inppost\"></ion-input>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"secondary\">\r\n    <br>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-button shape=\"round\" class=\"btnup\" size=\"small\">\r\n      <ion-text>Subir foto</ion-text>\r\n    </ion-button>\r\n    <ion-button shape=\"round\" class=\"btnvi\" size=\"small\">\r\n      <ion-text>Subir video</ion-text>\r\n    </ion-button>\r\n    <ion-button shape=\"round\" size=\"small\" horizontal=\"end\" class=\"btnpost\">\r\n      <ion-text>Publicar</ion-text>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n  <br>\r\n  <ion-slides>\r\n    <ion-slide *ngFor=\"let i of [1,1,1,1]\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-icon name=\"plus\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-avatar slot=\"start\" *ngFor=\"let i of [1,1,1,1,1]\">\r\n        <img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\" style=\"width: 100%; height:100%\">\r\n      </ion-avatar>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n  \r\n  <ion-card style=\"width:98%;\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://img.mobiscroll.com/demos/card_2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>John Doe</h3>\r\n        <p>June 10, 2020</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <img src=\"https://i.pinimg.com/originals/f3/fe/ea/f3feea254243c033741574d589a01800.webp\" alt=\"ion\">\r\n    <ion-card-header>\r\n      <ion-card-title>Hotel Panama Garden</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.\r\n    </ion-card-content>\r\n    <ion-footer>\r\n      <ion-row>\r\n        <ion-col center text-center>\r\n          <button>\r\n            <ion-icon name=\"heart-sharp\" color=\"primary\"></ion-icon>\r\n            <div>1.5k</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-center>\r\n          <button>\r\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\r\n            <div>4</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-center>\r\n          <button style=\"position:right\">\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n          </button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-footer>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card style=\"width:98%;\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>John Doe</h3>\r\n        <p>Dec 10, 2019</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <img src=\"https://www.viveusa.mx/sites/default/files/field/image/brooklyn_bridge_ny_0.jpg\" alt=\"ion\">\r\n    <ion-card-header>\r\n      <ion-card-title>Hotel Panama Garden</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.\r\n    </ion-card-content>\r\n    <ion-footer>\r\n      <ion-row>\r\n        <ion-col center text-center>\r\n          <button>\r\n            <ion-icon name=\"heart-sharp\" color=\"primary\"></ion-icon>\r\n            <div>1.5k Likes</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-center>\r\n          <button>\r\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\r\n            <div>4 Comments</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-right>\r\n          <button>\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n          </button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-footer>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/profile/profile.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/profile/profile.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfesionalProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/stories/stories.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/stories/stories.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfesionalStoriesStoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stories</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/chat/chat.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/chat/chat.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <div class=\"toolbar\">\r\n    <ion-toolbar>\r\n      <div class=\"navsala\">\r\n        <ion-button expand=\"full\" class=\"openroom\" routerLink=\"/invite-friends\">\r\n          <ion-icon name=\"videocam-sharp\"> </ion-icon>\r\n          <p>&nbsp; Abrir sala</p>\r\n        </ion-button>\r\n      </div>\r\n    </ion-toolbar>\r\n  </div>\r\n</ion-header>\r\n<br>\r\n<ion-content>\r\n  <ion-slides>\r\n    <ion-slide *ngFor=\"let i of [1,1,1,1,1,1]\">\r\n      <ion-avatar slot=\"start\" *ngFor=\"let i of [1,1,1,1,1]\">\r\n        <img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\" style=\"width: 100%; height:100%\">\r\n      </ion-avatar>\r\n    </ion-slide>\r\n  </ion-slides>\r\n<br>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let i of [1,1,1,1,1,1,1,1,1,1,1]\">\r\n\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\" style=\"width: 100%; height:100%\">\r\n      </ion-avatar>\r\n\r\n      <ion-label>\r\n        <ion-text color=\"light\">\r\n          Contacto n\r\n        </ion-text>\r\n      </ion-label>\r\n\r\n      <div style=\"float: right;\">\r\n        <ion-text color=\"light\">\r\n          10:12\r\n        </ion-text>\r\n      </div>\r\n\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/home/home.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/home/home.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content overflow-scroll=\"true\">\r\n\r\n\t<ion-toolbar color=\"secondary\">\r\n\t\t<ion-buttons slot=\"primary\">\r\n\t\t\t<ion-button shape=\"round\" style=\"background-color:#a1a1a1; border-radius:50%; margin-top: -35px;\">\r\n\t\t\t\t<ion-icon name=\"settings\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t\t<ion-button shape=\"round\" style=\"background-color:#a1a1a1; border-radius:50%; margin-top: -35px;\">\r\n\t\t\t\t<ion-icon name=\"options\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-avatar slot=\"start\" style=\"margin-top: 20px; margin-left: 5px;\">\r\n\t\t\t<img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\"\r\n\t\t\t\tstyle=\"width: 100%; height:100%\">\r\n\t\t</ion-avatar>\r\n\t\t<ion-input placeholder=\"¿Qué estás pensando?\" readonly class=\"inppost\" (click)=\"pagePublication()\" name=\"description\"></ion-input>\r\n\t</ion-toolbar>\r\n\t<br>\r\n\r\n\t<ion-slides>\r\n\t\t<ion-slide *ngFor=\"let i of [1,1,1,1]\">\r\n\t\t\t<ion-avatar slot=\"start\" class=\"avatarHistory\">\r\n\t\t\t\t<ion-icon name=\"reload\"></ion-icon>\r\n\t\t\t</ion-avatar>\r\n\t\t\t<ion-avatar slot=\"start\" *ngFor=\"let i of [1,1,1,1,1]\" class=\"avatarHistory\">\r\n\t\t\t\t<img src=\"https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg\"\r\n\t\t\t\t\tstyle=\"width: 100%; height:100%\">\r\n\t\t\t</ion-avatar>\r\n\t\t</ion-slide>\r\n\t</ion-slides>\r\n\r\n\t<div *ngFor=\"let publication of publications$ | async\">\r\n\t\t\r\n\t\t\t<app-publication-template [publication] = \"publication\"></app-publication-template>\r\n\r\n\t</div>\r\n\r\n\t<ion-fab *ngIf=\"scrollEnd\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n\t\t<ion-fab-button (click)=\"scrollToTop()\">\r\n\t\t  <ion-icon name=\"arrow-up-circle\"></ion-icon>\r\n\t\t</ion-fab-button>\r\n\t</ion-fab>\r\n\r\n\r\n\t<ion-infinite-scroll threshold=\"20px\" (ionInfinite)=\"loadData($event)\">\r\n\t\t<ion-infinite-scroll-content\r\n\t\t  loadingSpinner=\"crescent\"\r\n\t\t  loadingText=\"Loading more data...\">\r\n\t\t</ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll>\r\n\t\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/lodging/lodging.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/lodging/lodging.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialLodgingLodgingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\r\n  <ion-card>\r\n    <img src=\"https://www.eluniversal.com.mx/sites/default/files/2019/04/17/hotel_san_gabriel_de_las_palmas.jpg\"/>\r\n    <ion-card-header>\r\n      <ion-card-title>Hotel Los cocos Puerto Vallarta</ion-card-title>\r\n      <ion-card-subtitle>Destination</ion-card-subtitle>\r\n      <ion-row>\r\n        <ion-col></ion-col>\r\n        <ion-col>\r\n          <ion-card-title>MXN $1000.00</ion-card-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\r\n    </ion-card-content>\r\n  </ion-card>\r\n \r\n  <br>\r\n  <br>\r\n \r\n  <ion-card>\r\n    <img src=\"https://www.hotellastrojes.com.mx/images/galerias/alberca-1541007388.jpg\"/>\r\n    <ion-card-header>\r\n      <ion-card-title>Hotel La habana acapulco</ion-card-title>\r\n      <ion-card-subtitle>Destination</ion-card-subtitle>\r\n      <ion-row>\r\n        <ion-col></ion-col>\r\n        <ion-col>\r\n          <ion-card-title>MXN $1500.00</ion-card-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <br>\r\n  <br>\r\n \r\n  <ion-card>\r\n    <img src=\"https://www.entornoturistico.com/wp-content/uploads/2020/05/Alberca-de-un-hotel-RIU-1280x720.jpg\"/>\r\n    <ion-card-header color=\"primary\">\r\n      <ion-card-title>Hotel 7 mares los cabos</ion-card-title>\r\n      <ion-card-subtitle>Destination</ion-card-subtitle>\r\n      <ion-row>\r\n        <ion-col></ion-col>\r\n        <ion-col>\r\n          <ion-card-title>MXN $1200.00</ion-card-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/market/market.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/market/market.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialMarketMarketPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button shape=\"round\" class=\"btn-vender\" style=\"float: right;\" routerLink=\"/sell\">\r\n      <ion-text color=\"dark\">\r\n        <p>vender producto</p>\r\n      </ion-text>\r\n    </ion-button>\r\n    <ion-fab-button (click)=\"openCart()\" #cart class=\"animate__animated animate_bounceOutLeft\" horizontal=\"end\">\r\n      \r\n      <div class=\"cart-length\">{{ cartItemCount }} </div>\r\n      \r\n      <ion-icon name=\"heart\" class=\"icon-heart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let p of products\" color=\"secondary\">\r\n      <div style=\"display: flex; flex-direction:row\">\r\n\r\n        <div style=\"width: 50%;\">\r\n          <img src=\"https://i5.walmartimages.com/asr/3a337afe-2cb2-4e95-a1a5-03f2a1793aef_1.fb910e07b380c2e44322556ab920118e.png\" width=\"100%\" height=\"90%\">\r\n        </div>\r\n\r\n        <div>\r\n          <div style=\"float: left; width:70%\">\r\n            <ion-text color=\"tertiary\">\r\n              <h1 style=\"font-weight: bold;\"> $ {{ p.price }} </h1>\r\n            </ion-text>\r\n            <ion-text color=\"dark\"> <p>{{ p.name }} <br> {{ p.ciudad }}</p></ion-text>\r\n          </div>\r\n\r\n          <div style=\"float: right;\">\r\n\r\n            <ion-button shape=\"round\" class=\"star\" color=\"secondary\" style=\"margin-bottom: 90%\">\r\n              <ion-text color=\"dark\">4.8</ion-text>\r\n              <ion-icon name=\"star\" class=\"start-icon\" slot=\"end\" color=\"warning\"></ion-icon>\r\n            </ion-button>\r\n\r\n              <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button class=\"pru\" size=\"small\" (click)=\"addToCart(p)\">\r\n                  <ion-icon name=\"heart\" class=\"heart-icon\"></ion-icon>\r\n                </ion-fab-button>\r\n              </ion-fab>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      \r\n      \r\n      \r\n      </div>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/stories/stories.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/stories/stories.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialStoriesStoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content [scrollEvents]= \"true\" (ionScroll)=\"didScroll($event)\">\r\n  <ion-list height=\"100%\">\r\n    <ion-card *ngFor=\"let item of feed\" height=\"100%\">\r\n\r\n      <ion-card-content style=\"height: 500px\">\r\n        <div>\r\n          <ion-card-title>{{ item.title }}</ion-card-title>\r\n        </div>\r\n        <div *ngIf=\"item.src\">\r\n          <video #player playsinline controls preload=\"auto\">\r\n            <source [src]=\"item.src\" type=\"video/mp4\"/>\r\n          </video>\r\n          <div class=\"bar\">\r\n            <ion-button (click)=\"openFullscreen(player)\" color=\"light\" fill=\"clear\">\r\n              <ion-icon slot=\"icon-only\" name=\"easel\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"playOnSide(player)\" color=\"light\" fill=\"clear\">\r\n              <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <div class=\"sticky-video\" #stickyplayer [hidden]=\"!stickyVideo\">\r\n    <div class=\"sticky-controls\" *ngIf=\"stickyVideo\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"closeSticky()\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"playOrPauseSticky()\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" [name]=\"stickyPlaying ? 'pause' : 'play'\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"openFullscreen(stickyVideo)\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"easel\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Models/Classes/user.ts":
  /*!****************************************!*\
    !*** ./src/app/Models/Classes/user.ts ***!
    \****************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsClassesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);

      this.name = "";
      this.email = "";
      this.password = "";
      this.password_confirmation = "";
    };
    /***/

  },

  /***/
  "./src/app/Pages/Profesional/chat/chat.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/Profesional/chat/chat.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfesionalChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Byb2Zlc2lvbmFsL2NoYXQvY2hhdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/chat/chat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/Profesional/chat/chat.page.ts ***!
    \*****************************************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppPagesProfesionalChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage() {
        _classCallCheck(this, ChatPage);
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatPage;
    }();

    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/Pages/Profesional/chat/chat.page.scss"))["default"]]
    })], ChatPage);
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/home/home.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/Profesional/home/home.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfesionalHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 75px;\n}\n\nion-avatar {\n  border: 2px solid #044e7f;\n  margin-left: 9px;\n}\n\n.btnup {\n  --background: var(--ion-color-medium-tint);\n}\n\n.btnvi {\n  --background: var(--ion-color-medium-tint);\n}\n\n.btnpost {\n  width: 130px;\n  float: right;\n}\n\n.inppost {\n  color: var(--ion-color-secondary-tint);\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvUHJvZmVzaW9uYWwvaG9tZS9DOlxcVXNlcnNcXGVyZWtfXFxEb2N1bWVudHNcXEdpdEh1YlxcR29pQ29ubmVjdFByb2pcXEdvaUNvbm5lY3Qvc3JjXFxhcHBcXFBhZ2VzXFxQcm9mZXNpb25hbFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL1Byb2Zlc2lvbmFsL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQ0FBQTtFQUNBLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Qcm9mZXNpb25hbC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3tcclxuICAgIGhlaWdodDogNzVweDtcclxufVxyXG5cclxuaW9uLWF2YXRhcntcclxuICAgIGJvcmRlcjoycHggc29saWQgIzA0NGU3ZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5idG51cCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbn1cclxuXHJcbi5idG52aSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbn1cclxuXHJcbi5idG5wb3N0IHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uaW5wcG9zdHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufSIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDQ0ZTdmO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uYnRudXAge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG5cbi5idG52aSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cblxuLmJ0bnBvc3Qge1xuICB3aWR0aDogMTMwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlucHBvc3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/home/home.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/Profesional/home/home.page.ts ***!
    \*****************************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesProfesionalHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/Pages/Profesional/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/profile/profile.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/Profesional/profile/profile.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfesionalProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Byb2Zlc2lvbmFsL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/profile/profile.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/Profesional/profile/profile.page.ts ***!
    \***********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfesionalProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage() {
        _classCallCheck(this, ProfilePage);
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilePage;
    }();

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/Pages/Profesional/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/stories/stories.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/Profesional/stories/stories.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfesionalStoriesStoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1Byb2Zlc2lvbmFsL3N0b3JpZXMvc3Rvcmllcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/stories/stories.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/Profesional/stories/stories.page.ts ***!
    \***********************************************************/

  /*! exports provided: StoriesPage */

  /***/
  function srcAppPagesProfesionalStoriesStoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesPage", function () {
      return StoriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoriesPage = /*#__PURE__*/function () {
      function StoriesPage() {
        _classCallCheck(this, StoriesPage);
      }

      _createClass(StoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoriesPage;
    }();

    StoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/stories/stories.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stories.page.scss */
      "./src/app/Pages/Profesional/stories/stories.page.scss"))["default"]]
    })], StoriesPage);
    /***/
  },

  /***/
  "./src/app/Pages/Social/chat/chat.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/Pages/Social/chat/chat.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".openroom {\n  border-radius: 35px;\n}\n\n.navsala {\n  text-align: center;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\nion-avatar {\n  margin-left: 9px;\n}\n\n.other-message {\n  background-color: #e8e8e8;\n  color: black;\n}\n\n.my-message {\n  background-color: #bcbcbc;\n  color: black;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 30px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL2NoYXQvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQYWdlc1xcU29jaWFsXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNLSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FERkE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Tb2NpYWwvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVucm9vbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcbi5uYXZzYWxhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5pb24tYXZhdGFye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubXktbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiY2JjO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgICBjb2xvcjogI2RmZGZkZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1zZy1idG57XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC41ZW07XHJcbn0iLCIub3BlbnJvb20ge1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuXG4ubmF2c2FsYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JjYmM7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpbWUge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tc2ctYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/chat/chat.page.ts":
  /*!************************************************!*\
    !*** ./src/app/Pages/Social/chat/chat.page.ts ***!
    \************************************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppPagesSocialChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage() {
        _classCallCheck(this, ChatPage);
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatPage;
    }();

    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/Pages/Social/chat/chat.page.scss"))["default"]]
    })], ChatPage);
    /***/
  },

  /***/
  "./src/app/Pages/Social/home/home.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/Pages/Social/home/home.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 75px;\n}\n\n.avatarHistory {\n  border: 3px solid;\n  margin-left: 9px;\n  color: #79c6b7 !important;\n}\n\n.btnup {\n  --background: #83daca !important;\n}\n\n.btnvi {\n  --background: #83daca !important;\n}\n\n.btnpost {\n  width: 130px;\n  float: right;\n  --background: #5d9789 !important;\n}\n\n.inppost {\n  color: var(--ion-color-secondary-tint);\n  font-size: 1.2em;\n}\n\n.cardHome {\n  padding: 0%;\n}\n\n.chatIcon {\n  color: #79c6b7 !important;\n}\n\n.heartBtn {\n  color: #79c6b7 !important;\n}\n\n.bookBtn {\n  color: #79c6b7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL2hvbWUvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQYWdlc1xcU29jaWFsXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUVJLGdDQUFBO0FDQUo7O0FER0E7RUFFSSxnQ0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBREdBO0VBQ0ksc0NBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvU29jaWFsL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uYXZhdGFySGlzdG9yeXtcclxuICAgIGJvcmRlcjozcHggc29saWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgY29sb3I6ICM3OWM2YjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bnVwIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgIC0tYmFja2dyb3VuZDogIzgzZGFjYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRudmkge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODNkYWNhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG5wb3N0IHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC0tYmFja2dyb3VuZDogIzVkOTc4OSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnBwb3N0e1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uY2FyZEhvbWV7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuLmNoYXRJY29ue1xyXG4gICAgY29sb3I6ICM3OWM2YjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYXJ0QnRue1xyXG4gICAgY29sb3I6ICM3OWM2YjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvb2tCdG57XHJcbiAgICBjb2xvcjogIzc5YzZiNyAhaW1wb3J0YW50O1xyXG59IiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmF2YXRhckhpc3Rvcnkge1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgY29sb3I6ICM3OWM2YjcgIWltcG9ydGFudDtcbn1cblxuLmJ0bnVwIHtcbiAgLS1iYWNrZ3JvdW5kOiAjODNkYWNhICFpbXBvcnRhbnQ7XG59XG5cbi5idG52aSB7XG4gIC0tYmFja2dyb3VuZDogIzgzZGFjYSAhaW1wb3J0YW50O1xufVxuXG4uYnRucG9zdCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJhY2tncm91bmQ6ICM1ZDk3ODkgIWltcG9ydGFudDtcbn1cblxuLmlucHBvc3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmNhcmRIb21lIHtcbiAgcGFkZGluZzogMCU7XG59XG5cbi5jaGF0SWNvbiB7XG4gIGNvbG9yOiAjNzljNmI3ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydEJ0biB7XG4gIGNvbG9yOiAjNzljNmI3ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29rQnRuIHtcbiAgY29sb3I6ICM3OWM2YjcgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/home/home.page.ts":
  /*!************************************************!*\
    !*** ./src/app/Pages/Social/home/home.page.ts ***!
    \************************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesSocialHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_publication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/publication.service */
    "./src/app/services/publication.service.ts");
    /* harmony import */


    var _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Models/Classes/publication */
    "./src/app/Models/Classes/publication.ts");
    /* harmony import */


    var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Models/Classes/utils */
    "./src/app/Models/Classes/utils.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(actionSheetController, publicationService, platform, router) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.actionSheetController = actionSheetController;
        this.publicationService = publicationService;
        this.platform = platform;
        this.router = router;
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]();
        this.scrollEnd = false;
        this.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_4__["Publication"]();
        publicationService.updatePublication$.subscribe(function (update) {
          console.log('Actualizado');

          _this.getPublications();
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.platform.ready().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.utils.getAccessData().then(function () {
                                  console.log("exito");

                                  _this3.getPublications();
                                })["catch"](function (error) {
                                  console.log(error);
                                });

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 2:
                    this.total = 0;
                    this.contPublications = 0;
                    this.currentPage = 1;
                    console.log(this.publications$);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this4 = this;

          setTimeout(function () {
            if (_this4.contPublications == _this4.total) {
              _this4.scrollEnd = true;
              event.target.disabled = true;
            } else {
              console.log('Cargando siguientes...');

              _this4.getPublications();

              event.target.complete();
            }
          }, 500);
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.content.scrollToTop(400);
          this.scrollEnd = false;
        }
      }, {
        key: "toggleInfiniteScroll",
        value: function toggleInfiniteScroll() {
          this.scrollEnd = false;
          this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
        }
      }, {
        key: "getPublications",
        value: function getPublications() {
          var _this5 = this;

          this.publicationService.getPublications(this.utils.accessUserData.getAuthorization(), this.currentPage).subscribe(function (Response) {
            var array;
            array = new Array();
            console.log(Response);
            Response.data.forEach(function (element) {
              var $publicationObj = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_4__["Publication"](element);
              array.push($publicationObj);
            });
            _this5.publications$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(array);

            _this5.publications$.subscribe(function (data) {
              console.log('subscriber');
              console.log(data);
            });

            if (_this5.currentPage != Response.last_page) {
              var page = Response.next_page_url.split('=');
              _this5.currentPage = Number(page[1]);
              _this5.contPublications += Response.per_page;
              _this5.total = Response.total;
            } else {
              _this5.contPublications += Response.data.length;
              _this5.total = Response.total;
            }
          }, function (Errors) {
            console.log(Errors);
          }, function () {});
        }
      }, {
        key: "pagePublication",
        value: function pagePublication() {
          this.router.navigate(['social/social-publication']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], HomePage.prototype, "infiniteScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], HomePage.prototype, "content", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/Pages/Social/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/Pages/Social/lodging/lodging.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/Pages/Social/lodging/lodging.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialLodgingLodgingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1NvY2lhbC9sb2RnaW5nL2xvZGdpbmcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/lodging/lodging.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/Pages/Social/lodging/lodging.page.ts ***!
    \******************************************************/

  /*! exports provided: LodgingPage */

  /***/
  function srcAppPagesSocialLodgingLodgingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LodgingPage", function () {
      return LodgingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LodgingPage = /*#__PURE__*/function () {
      function LodgingPage() {
        _classCallCheck(this, LodgingPage);
      }

      _createClass(LodgingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LodgingPage;
    }();

    LodgingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lodging',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lodging.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/lodging/lodging.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./lodging.page.scss */
      "./src/app/Pages/Social/lodging/lodging.page.scss"))["default"]]
    })], LodgingPage);
    /***/
  },

  /***/
  "./src/app/Pages/Social/market/market.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/Pages/Social/market/market.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialMarketMarketPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-vender {\n  --background: #79c6b7 !important;\n  margin-top: 10px;\n}\n\n.star {\n  margin-top: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL21hcmtldC9DOlxcVXNlcnNcXGVyZWtfXFxEb2N1bWVudHNcXEdpdEh1YlxcR29pQ29ubmVjdFByb2pcXEdvaUNvbm5lY3Qvc3JjXFxhcHBcXFBhZ2VzXFxTb2NpYWxcXG1hcmtldFxcbWFya2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL21hcmtldC9tYXJrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvU29jaWFsL21hcmtldC9tYXJrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi12ZW5kZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3OWM2YjcgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLnN0YXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxufSIsIi5idG4tdmVuZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzljNmI3ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdGFyIHtcbiAgbWFyZ2luLXRvcDogMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/market/market.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/Pages/Social/market/market.page.ts ***!
    \****************************************************/

  /*! exports provided: MarketPage */

  /***/
  function srcAppPagesSocialMarketMarketPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarketPage", function () {
      return MarketPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_cartm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cartm.service */
    "./src/app/services/cartm.service.ts");

    var MarketPage = /*#__PURE__*/function () {
      /*
      carts = [];
      products = [];
      //cartItemCount: BehaviorSubject<number>;
      cartItemCount:number = 0;
      */
      function MarketPage(cartService, modalCtrl) {
        _classCallCheck(this, MarketPage);

        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
      } //constructor(private cartService: CartmService, private modalCtrl: ModalController) { }


      _createClass(MarketPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*
          this.products = this.cartService.getProducts();
          this.carts = this.cartService.getCart();
          //this.cartItemCount = this.cartService.getCartItemCount();
          */
        }
      }]);

      return MarketPage;
    }();

    MarketPage.ctorParameters = function () {
      return [{
        type: src_app_services_cartm_service__WEBPACK_IMPORTED_MODULE_3__["CartmService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cart', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], MarketPage.prototype, "fab", void 0);
    MarketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-market',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./market.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/market/market.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./market.page.scss */
      "./src/app/Pages/Social/market/market.page.scss"))["default"]]
    })], MarketPage);
    /***/
  },

  /***/
  "./src/app/Pages/Social/stories/stories.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/Pages/Social/stories/stories.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialStoriesStoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "video {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.bar {\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  transform: translate(0%, -100%);\n}\n\n.sticky-video {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 40px;\n  left: 50%;\n  width: 150px;\n  height: 150px;\n}\n\n.sticky-video video {\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);\n}\n\n.sticky-controls {\n  position: absolute;\n  top: 0px;\n  z-index: 2;\n  widows: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL3N0b3JpZXMvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQYWdlc1xcU29jaWFsXFxzdG9yaWVzXFxzdG9yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL3N0b3JpZXMvc3Rvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1NvY2lhbC9zdG9yaWVzL3N0b3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xMDAlKTtcclxufVxyXG5cclxuLnN0aWNreS12aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3RpY2t5LWNvbnRyb2xzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZG93czogMTAwJTtcclxufVxyXG4iLCJ2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFyIHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xMDAlKTtcbn1cblxuLnN0aWNreS12aWRlbyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uc3RpY2t5LXZpZGVvIHZpZGVvIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uc3RpY2t5LWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMjtcbiAgd2lkb3dzOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/stories/stories.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/Pages/Social/stories/stories.page.ts ***!
    \******************************************************/

  /*! exports provided: StoriesPage */

  /***/
  function srcAppPagesSocialStoriesStoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesPage", function () {
      return StoriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../assets/feed.json */
    "./src/assets/feed.json");

    var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./../../../../assets/feed.json */
    "./src/assets/feed.json", 1);

    var StoriesPage = /*#__PURE__*/function () {
      function StoriesPage(renderer) {
        _classCallCheck(this, StoriesPage);

        this.renderer = renderer;
        this.feed = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__;
        this.currentPlaying = null;
        this.stickyVideo = null;
        this.stickyPlaying = false;
      }

      _createClass(StoriesPage, [{
        key: "didScroll",
        value: function didScroll() {
          var _this6 = this;

          if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)) {
            return;
          } else if (this.currentPlaying && !this.isElementInViewport(this.currentPlaying)) {
            // Item is out of view, pause it
            this.currentPlaying.pause();
            this.currentPlaying = null;
          }

          this.videoPlayers.forEach(function (player) {
            console.log('player: ', player);

            if (_this6.currentPlaying) {
              return;
            }

            var nativeElement = player.nativeElement;

            var inView = _this6.isElementInViewport(nativeElement);

            if (_this6.stickyVideo && _this6.stickyVideo.src === nativeElement.src) {
              return;
            }

            if (inView) {
              _this6.currentPlaying = nativeElement;
              _this6.currentPlaying.muted = true;

              _this6.currentPlaying.play();
            }
          });
        }
      }, {
        key: "openFullscreen",
        value: function openFullscreen(elem) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitEnterFullscreen) {
            elem.webkitEnterFullscreen();
            elem.enterFullscreen();
          }
        }
      }, {
        key: "isElementInViewport",
        value: function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }, {
        key: "playOnSide",
        value: function playOnSide(elem) {
          if (this.stickyVideo) {
            this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
          }

          this.stickyVideo = elem.cloneNode(true);
          this.renderer.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo);

          if (this.currentPlaying) {
            var playPosition = this.currentPlaying.currentTime;
            this.currentPlaying.pause();
            this.currentPlaying = null;
            this.stickyVideo.currentTime = playPosition;
          }

          this.stickyVideo.muted = false;
          this.stickyVideo.play();
          this.stickyPlaying = true;
        }
      }, {
        key: "closeSticky",
        value: function closeSticky() {
          if (this.stickyVideo) {
            this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
            this.stickyVideo = null;
            this.stickyPlaying = false;
          }
        }
      }, {
        key: "playOrPauseSticky",
        value: function playOrPauseSticky() {
          if (this.stickyPlaying) {
            this.stickyVideo.pause();
            this.stickyPlaying = false;
          } else {
            this.stickyVideo.play();
            this.stickyPlaying = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoriesPage;
    }();

    StoriesPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('player')], StoriesPage.prototype, "videoPlayers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyplayer', {
      "static": false
    })], StoriesPage.prototype, "stickyPlayer", void 0);
    StoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/stories/stories.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stories.page.scss */
      "./src/app/Pages/Social/stories/stories.page.scss"))["default"]]
    })], StoriesPage);
    /***/
  },

  /***/
  "./src/app/services/Auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/Auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../request.service */
    "./src/app/services/request.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient, request) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.request = request;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.postOff = false;
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(user) {
          return this.request.createRequest(user, 'register', this.postOff);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.request.createRequest(user, 'login', this.postOff);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/cartm.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/cartm.service.ts ***!
    \*******************************************/

  /*! exports provided: CartmService */

  /***/
  function srcAppServicesCartmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartmService", function () {
      return CartmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartmService = /*#__PURE__*/function () {
      function CartmService() {
        _classCallCheck(this, CartmService);
      }

      _createClass(CartmService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.products;
        }
      }]);

      return CartmService;
    }();

    CartmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartmService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map