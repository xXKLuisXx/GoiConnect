function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js ***!
    \***********************************************************************************/

  /*! exports provided: super_tab_indicator */

  /***/
  function node_modulesIonicSuperTabsCoreDistEsmSuperTabIndicatorEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "super_tab_indicator", function () {
      return SuperTabIndicatorComponent;
    });
    /* harmony import */


    var _index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-a34c410e.js */
    "./node_modules/@ionic-super-tabs/core/dist/esm/index-a34c410e.js");

    var superTabIndicatorComponentCss = ":host{display:block;height:var(--st-indicator-height, 2px);width:100px;background:var(--st-indicator-color, var(--ion-color-contrast, white));position:absolute;pointer-events:none;-ms-touch-action:none;touch-action:none;left:0;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:translate3d(var(--st-indicator-position-x, 0), 0, 0) scale3d(var(--st-indicator-scale-x, 0), 1, 1);transform:translate3d(var(--st-indicator-position-x, 0), 0, 0) scale3d(var(--st-indicator-scale-x, 0), 1, 1);-webkit-transition:-webkit-transform var(--st-indicator-transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform var(--st-indicator-transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);transition:transform var(--st-indicator-transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);transition:transform var(--st-indicator-transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform var(--st-indicator-transition-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);will-change:transform;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}";

    var SuperTabIndicatorComponent = /*#__PURE__*/function () {
      function SuperTabIndicatorComponent(hostRef) {
        _classCallCheck(this, SuperTabIndicatorComponent);

        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Toolbar position
         * This determines the position of the indicator
         */

        this.toolbarPosition = 'top';
      }

      _createClass(SuperTabIndicatorComponent, [{
        key: "render",
        value: function render() {
          var style = {};

          if (this.toolbarPosition === 'bottom') {
            style.top = 0;
          } else {
            style.bottom = 0;
          }

          return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            style: style
          });
        }
      }]);

      return SuperTabIndicatorComponent;
    }();

    SuperTabIndicatorComponent.style = superTabIndicatorComponentCss;
    /***/
  }
}]);
//# sourceMappingURL=1-es5.js.map