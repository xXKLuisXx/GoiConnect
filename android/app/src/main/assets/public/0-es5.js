function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js ***!
    \**********************************************************************************/

  /*! exports provided: super_tab_button, super_tabs_toolbar */

  /***/
  function node_modulesIonicSuperTabsCoreDistEsmSuperTabButton_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "super_tab_button", function () {
      return SuperTabButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "super_tabs_toolbar", function () {
      return SuperTabsToolbarComponent;
    });
    /* harmony import */


    var _index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-a34c410e.js */
    "./node_modules/@ionic-super-tabs/core/dist/esm/index-a34c410e.js");
    /* harmony import */


    var _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils-640d2cf5.js */
    "./node_modules/@ionic-super-tabs/core/dist/esm/utils-640d2cf5.js");

    var superTabButtonComponentCss = ":host{-ms-flex:1 0 0px;flex:1 0 0;cursor:pointer;position:relative;max-width:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);height:72px;padding:0 24px;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ion-icon,:host ::slotted(ion-label),:host ::slotted(ion-icon){-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-delay:0s;transition-delay:0s;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ::slotted(ion-label){color:var(--st-label-color-inactive, var(--st-base-color-inactive));line-height:var(--st-label-line-height, 14px);height:var(--st-label-height, 14px);font-size:var(--st-label-font-size, 14px);text-transform:var(--st-label-text-transform, uppercase);font-weight:var(--st-label-font-weight, 500);padding-bottom:var(--st-label-padding-bottom, 16px)}:host ion-icon,:host ::slotted(ion-icon){color:var(--st-icon-color-inactive, var(--st-base-color-inactive));fill:var(--st-icon-color-inactive, var(--st-base-color-inactive));min-height:var(--st-icon-size, 24px);min-width:var(--st-icon-size, 24px);font-size:var(--st-icon-size, 24px);padding-top:12px}@media (hover: hover){:host(:hover){background:rgba(var(--ion-color-contrast-rgb), 0.04)}}:host(.active) ion-label,:host(.active) ion-icon,:host(.active) ::slotted(ion-label),:host(.active) ::slotted(ion-icon){-webkit-transition-delay:75ms;transition-delay:75ms}:host(.active) ion-label,:host(.active) ::slotted(ion-label){color:var(--st-label-color-active, var(--st-base-color-active))}:host(.active) ion-icon,:host(.active) ::slotted(ion-icon){color:var(--st-icon-color-active, var(--st-base-color-active));fill:var(--st-icon-color-active, var(--st-base-color-active))}:host(.icon-only),:host(.label-only){height:48px;-ms-flex-pack:center;justify-content:center}:host(.scrollableContainer){-ms-flex-positive:0;flex-grow:0;-ms-flex-preferred-size:auto;flex-basis:auto;min-width:90px;max-width:360px}::slotted{-ms-flex-negative:1;flex-shrink:1}:host(.label-only) ion-label,:host(.label-only) ::slotted(ion-label){padding-bottom:0}:host(.icon-only) ion-icon,:host(.icon-only) ::slotted(ion-icon){padding-top:0}";
    var maxRetryAttempts = 1e3;

    var SuperTabButtonComponent = /*#__PURE__*/function () {
      function SuperTabButtonComponent(hostRef) {
        _classCallCheck(this, SuperTabButtonComponent);

        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Whether the button is disabled
         */

        this.disabled = false;
        /** @internal */

        this.scrollableContainer = false;
        this.retryAttempts = 0;
      }

      _createClass(SuperTabButtonComponent, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.indexChildren();
          this.initCmp();
        }
      }, {
        key: "initCmp",
        value: function initCmp() {
          var _this = this;

          if (!this.el || !this.el.shadowRoot) {
            if (++this.retryAttempts < maxRetryAttempts) {
              requestAnimationFrame(function () {
                return _this.initCmp();
              });
              return;
            }
          }

          if (!this.label && !this.icon) {
            this.indexChildren();
          }

          var slot = this.el.shadowRoot.querySelector('slot');
          slot.addEventListener('slotchange', function () {
            _this.indexChildren();
          });
        }
      }, {
        key: "indexChildren",
        value: function indexChildren() {
          this.label = this.el.querySelector('ion-label');
          this.icon = this.el.querySelector('ion-icon');
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "button",
            "aria-label": this.label ? this.label.innerText : false,
            "aria-disabled": this.disabled ? 'true' : false,
            "aria-selected": this.active ? 'true' : 'false',
            "class": {
              'ion-activatable': !this.disabled,
              'ion-focusable': !this.disabled,
              'icon-only': !!this.icon && !this.label,
              'label-only': !!this.label && !this.icon,
              active: Boolean(this.active),
              scrollableContainer: this.scrollableContainer
            }
          }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
            type: "unbounded"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }]);

      return SuperTabButtonComponent;
    }();

    SuperTabButtonComponent.style = superTabButtonComponentCss;
    var superTabsToolbarComponentCss = ":host{-ms-flex:0 1 auto;flex:0 1 auto;display:block;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;background:var(--super-tabs-toolbar-background, var(--ion-color-base));overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:auto;-ms-touch-action:pan-x;touch-action:pan-x;z-index:2;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);overflow:hidden}:host(:not([no-border])):after{left:0;bottom:-8px;background-position:left 0 top 0;position:absolute;width:100%;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMFTEIzJBcOYhQUIwAAAB9JREFUCNdjEIQCBiUoYDCGAgYXKGAIhQKGNChgwAAAorMLKSCkL40AAAAASUVORK5CYII=);background-repeat:repeat-x;content:\"\";z-index:3;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([scrollable]) .buttons-container{will-change:scroll-position}:host([scrollable][scrollable-padding]) .buttons-container{padding-left:var(--st-scrollable-toolbar-padding-left, 52px);width:calc(100% - var(--st-scrollable-toolbar-padding-left, $st-scrollable-toolbar-padding-left))}";

    var SuperTabsToolbarComponent = /*#__PURE__*/function () {
      function SuperTabsToolbarComponent(hostRef) {
        _classCallCheck(this, SuperTabsToolbarComponent);

        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Whether to show the indicator. Defaults to `true`
         */

        this.showIndicator = true;
        /**
         * Background color. Defaults to `'primary'`
         */

        this.color = 'primary';
        /**
         * Whether the toolbar is scrollable. Defaults to `false`.
         */

        this.scrollable = false;
        /**
         * If scrollable is set to true, there will be an added padding
         * to the left of the buttons.
         *
         * Setting this property to false will remove that padding.
         *
         * The padding is also configurable via a CSS variable.
         */

        this.scrollablePadding = true;
        this.buttons = [];
        this.activeTabIndex = 0;
        this.touchStartTs = 0;
        this.lastClickTs = 0;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.hostCls = {};
        this.buttonClick = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "buttonClick", 7);
      }

      _createClass(SuperTabsToolbarComponent, [{
        key: "componentDidLoad",
        value: function () {
          var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.setHostCls();
                    _context.next = 3;
                    return this.queryButtons();

                  case 3:
                    this.slot = this.el.shadowRoot.querySelector('slot');
                    this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));
                    this.updateWidth();
                    requestAnimationFrame(function () {
                      _this2.setActiveTab(_this2.activeTabIndex, true, false);
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidLoad() {
            return _componentDidLoad.apply(this, arguments);
          }

          return componentDidLoad;
        }()
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
          this.debug('componentWillUpdate');
          this.updateThresholds();
        }
      }, {
        key: "componentDidRender",
        value: function componentDidRender() {
          this.updateWidth();
        }
      }, {
        key: "updateWidth",
        value: function updateWidth() {
          var cr = this.el.getBoundingClientRect();
          this.width = Math.round(cr.width * 100) / 100;
          this.offsetLeft = cr.left;
        }
        /** @internal */

      }, {
        key: "setActiveTab",
        value: function setActiveTab(index, align, animate) {
          index = Math.max(0, Math.min(Math.round(index), this.buttons.length - 1));
          this.debug('setActiveTab', index, align, animate);
          this.activeTabIndex = index;
          this.markButtonActive(this.buttons[index]);

          if (align) {
            this.alignIndicator(index, animate);
          }

          return Promise.resolve();
        }
        /** @internal */

      }, {
        key: "setSelectedTab",
        value: function setSelectedTab(index, animate) {
          this.alignIndicator(index, animate);
          return Promise.resolve();
        }
        /** @internal */

      }, {
        key: "moveContainer",
        value: function moveContainer(scrollX, animate) {
          if (!this.buttonsContainerEl) {
            this.debug('moveContainer called before this.buttonsContainerEl was defined');
            return Promise.resolve();
          }

          Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.buttonsContainerEl, scrollX, 0, this.config.nativeSmoothScroll, animate ? this.config.transitionDuration : 0);
          return Promise.resolve();
        }
      }, {
        key: "getButtonFromEv",
        value: function getButtonFromEv(ev) {
          var button = ev.target;
          var tag = button.tagName.toLowerCase();

          if (tag !== 'super-tab-button') {
            if (tag === 'super-tabs-toolbar') {
              return;
            }

            button = button.closest('super-tab-button');
          }

          return button;
        }
      }, {
        key: "onClick",
        value: function onClick(ev) {
          if (!ev || !ev.target) {
            this.debug('Got a click event with no target!', ev);
            return;
          }

          if (Date.now() - this.touchStartTs <= 150) {
            return;
          }

          var button = this.getButtonFromEv(ev);

          if (!button) {
            return;
          }

          this.onButtonClick(button);
        }
      }, {
        key: "onButtonClick",
        value: function onButtonClick(button) {
          if (!button || button.disabled) {
            return;
          }

          this.lastClickTs = Date.now();
          this.setActiveTab(button.index, true, true);
          this.buttonClick.emit(button);
        }
      }, {
        key: "onTouchStart",
        value: function () {
          var _onTouchStart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ev) {
            var coords, vw;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.scrollable) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    this.debug('onTouchStart', ev);
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                    vw = this.width;

                    if (!(coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold)) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 7:
                    this.touchStartTs = Date.now();
                    this.initialCoords = coords;
                    this.lastPosX = coords.x;

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function onTouchStart(_x) {
            return _onTouchStart.apply(this, arguments);
          }

          return onTouchStart;
        }()
      }, {
        key: "onTouchMove",
        value: function () {
          var _onTouchMove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ev) {
            var _this3 = this;

            var coords, shouldCapture, deltaX;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!this.buttonsContainerEl || !this.scrollable || !this.initialCoords || typeof this.lastPosX !== 'number')) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);

                    if (this.isDragging) {
                      _context3.next = 9;
                      break;
                    }

                    shouldCapture = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config);

                    if (shouldCapture) {
                      _context3.next = 8;
                      break;
                    }

                    if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                      this.initialCoords = void 0;
                      this.lastPosX = void 0;
                    }

                    return _context3.abrupt("return");

                  case 8:
                    // gesture is good, let's capture all next onTouchMove events
                    this.isDragging = true;

                  case 9:
                    if (this.isDragging) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 11:
                    ev.stopImmediatePropagation(); // get delta X

                    deltaX = this.lastPosX - coords.x;

                    if (!(deltaX === 0)) {
                      _context3.next = 15;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 15:
                    // update last X value
                    this.lastPosX = coords.x;
                    requestAnimationFrame(function () {
                      if (!_this3.isDragging) {
                        // when swiping fast; this might run after we're already done scrolling
                        // which leads to "choppy" animations since this instantly scrolls to location
                        return;
                      } // scroll container


                      var scrollX = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["g"])(_this3.buttonsContainerEl, _this3.buttonsContainerEl.clientWidth, deltaX);

                      if (scrollX === _this3.buttonsContainerEl.scrollLeft) {
                        return;
                      }

                      _this3.buttonsContainerEl.scroll(scrollX, 0);
                    });

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function onTouchMove(_x2) {
            return _onTouchMove.apply(this, arguments);
          }

          return onTouchMove;
        }()
      }, {
        key: "onTouchEnd",
        value: function () {
          var _onTouchEnd = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ev) {
            var _a, _b, coords, button;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.lastClickTs < this.touchStartTs && Date.now() - this.touchStartTs <= 150)) {
                      _context4.next = 7;
                      break;
                    }

                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);

                    if (!(Math.abs(coords.x - ((_a = this.initialCoords) === null || _a === void 0 ? void 0 : _a.x)) < ((_b = this.config) === null || _b === void 0 ? void 0 : _b.dragThreshold))) {
                      _context4.next = 7;
                      break;
                    }

                    button = this.getButtonFromEv(ev);

                    if (button) {
                      _context4.next = 6;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 6:
                    this.onButtonClick(button);

                  case 7:
                    this.isDragging = false;
                    this.initialCoords = void 0;
                    this.lastPosX = void 0;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function onTouchEnd(_x3) {
            return _onTouchEnd.apply(this, arguments);
          }

          return onTouchEnd;
        }()
      }, {
        key: "onColorUpdate",
        value: function () {
          var _onColorUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.setHostCls();

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function onColorUpdate() {
            return _onColorUpdate.apply(this, arguments);
          }

          return onColorUpdate;
        }()
      }, {
        key: "setHostCls",
        value: function setHostCls() {
          var cls = {};

          if (typeof this.color === 'string' && this.color.trim().length > 0) {
            cls['ion-color-' + this.color.trim()] = true;
          }

          this.hostCls = cls;
        }
      }, {
        key: "onSlotChange",
        value: function () {
          var _onSlotChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.debug('onSlotChange');
                    this.updateWidth();
                    _context6.next = 4;
                    return this.queryButtons();

                  case 4:
                    _context6.next = 6;
                    return this.setActiveTab(this.activeTabIndex, true);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function onSlotChange() {
            return _onSlotChange.apply(this, arguments);
          }

          return onSlotChange;
        }()
      }, {
        key: "queryButtons",
        value: function () {
          var _queryButtons = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var buttons, i, button;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.debug('Querying buttons');
                    buttons = Array.from(this.el.querySelectorAll('super-tab-button'));
                    _context7.next = 4;
                    return Promise.all(buttons.map(function (b) {
                      return b.componentOnReady();
                    }));

                  case 4:
                    if (buttons) {
                      for (i = 0; i < buttons.length; i++) {
                        button = buttons[i];
                        button.index = i;
                        button.scrollableContainer = this.scrollable;
                        button.active = this.activeTabIndex === i;

                        if (button.active) {
                          this.activeButton = button;
                        }
                      }
                    }

                    this.buttons = buttons;

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function queryButtons() {
            return _queryButtons.apply(this, arguments);
          }

          return queryButtons;
        }()
      }, {
        key: "updateThresholds",
        value: function updateThresholds() {
          if (!this.config) {
            return;
          }

          if (this.config.sideMenu === 'both' || this.config.sideMenu === 'left') {
            this.leftThreshold = this.config.sideMenuThreshold;
          }

          if (this.config.sideMenu === 'both' || this.config.sideMenu === 'right') {
            this.rightThreshold = this.config.sideMenuThreshold;
          }
        }
      }, {
        key: "markButtonActive",
        value: function markButtonActive(button) {
          if (!button) {
            this.debug('markButtonActive', 'button was undefined!');
            return;
          }

          if (this.activeButton) {
            this.activeButton.active = false;
          }

          button.active = true;
          this.activeButton = button;
        }
      }, {
        key: "setButtonsContainerEl",
        value: function setButtonsContainerEl(el) {
          if (el) {
            this.buttonsContainerEl = el;
          }
        }
      }, {
        key: "adjustContainerScroll",
        value: function adjustContainerScroll(animate) {
          if (!this.buttonsContainerEl) {
            this.debug('adjustContainerScroll called before this.buttonsContainerEl was defined');
            return;
          }

          var pos;
          var ip = this.indicatorPosition;
          var iw = this.indicatorWidth;
          var mw = this.buttonsContainerEl.clientWidth;
          var sp = this.buttonsContainerEl.scrollLeft;
          var centerDelta = mw / 2 - iw / 2;
          var a = Math.floor(ip + iw + centerDelta);
          var b = Math.floor(ip - centerDelta);
          var c = Math.floor(mw + sp);

          if (a > c) {
            // we need to move the segment container to the left
            pos = ip + iw + centerDelta - mw;
          } else if (b < sp) {
            // we need to move the segment container to the right
            pos = Math.max(ip - centerDelta, 0);
            pos = pos > ip ? ip - mw + iw : pos;
          } else {
            return;
          }

          if (!animate) {
            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.buttonsContainerEl, pos, 0, false, 50);
          } else {
            this.moveContainer(pos, animate);
          }
        }
        /**
         * Align the indicator with the selected button.
         * This will adjust the width and the position of the indicator element.
         * @param index {number} the active tab index
         * @param [animate] {boolean=false} whether to animate the transition
         */

      }, {
        key: "alignIndicator",
        value: function () {
          var _alignIndicator = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(index) {
            var _this4 = this;

            var animate,
                remainder,
                isDragging,
                floor,
                ceil,
                button,
                position,
                width,
                buttonB,
                buttonBPosition,
                buttonBWidth,
                _args8 = arguments;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    animate = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;

                    if (!(!this.showIndicator || !this.indicatorEl)) {
                      _context8.next = 3;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 3:
                    this.debug('Aligning indicator', index);
                    remainder = index % 1;
                    isDragging = this.isDragging = remainder > 0;
                    floor = Math.floor(index), ceil = Math.ceil(index);
                    button = this.buttons[floor];

                    if (button) {
                      _context8.next = 10;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 10:
                    position = button.offsetLeft;
                    width = button.clientWidth;

                    if (!(isDragging && floor !== ceil)) {
                      _context8.next = 20;
                      break;
                    }

                    buttonB = this.buttons[ceil];

                    if (buttonB) {
                      _context8.next = 16;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 16:
                    buttonBPosition = buttonB.offsetLeft;
                    buttonBWidth = buttonB.clientWidth;
                    position += remainder * (buttonBPosition - position);
                    width += remainder * (buttonBWidth - width);

                  case 20:
                    requestAnimationFrame(function () {
                      _this4.indicatorPosition = position;
                      _this4.indicatorWidth = width;

                      if (_this4.scrollable) {
                        _this4.adjustContainerScroll(animate || !isDragging);
                      }

                      _this4.indicatorEl.style.setProperty('--st-indicator-position-x', _this4.indicatorPosition + 'px');

                      _this4.indicatorEl.style.setProperty('--st-indicator-scale-x', String(_this4.indicatorWidth / 100));

                      _this4.indicatorEl.style.setProperty('--st-indicator-transition-duration', _this4.isDragging ? '0' : "".concat(_this4.config.transitionDuration, "ms"));
                    });

                  case 21:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function alignIndicator(_x4) {
            return _alignIndicator.apply(this, arguments);
          }

          return alignIndicator;
        }()
        /**
         * Internal method to output values in debug mode.
         */

      }, {
        key: "debug",
        value: function debug() {
          for (var _len = arguments.length, vals = new Array(_len), _key = 0; _key < _len; _key++) {
            vals[_key] = arguments[_key];
          }

          Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'toolbar', vals);
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;

          return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "navigation",
            "class": this.hostCls
          }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "buttons-container",
            ref: function ref(_ref) {
              return _this5.setButtonsContainerEl(_ref);
            }
          }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.showIndicator && Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("super-tab-indicator", {
            ref: function ref(_ref2) {
              return _this5.indicatorEl = _ref2;
            },
            toolbarPosition: this.el.assignedSlot.name
          })));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "color": ["onColorUpdate"]
          };
        }
      }]);

      return SuperTabsToolbarComponent;
    }();

    SuperTabsToolbarComponent.style = superTabsToolbarComponentCss;
    /***/
  }
}]);
//# sourceMappingURL=0-es5.js.map