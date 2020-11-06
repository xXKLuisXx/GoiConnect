function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Profesional-business-business-module"], {
  /***/
  "./src/app/Pages/Profesional/business/business-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Pages/Profesional/business/business-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: BusinessPageRoutingModule */

  /***/
  function srcAppPagesProfesionalBusinessBusinessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessPageRoutingModule", function () {
      return BusinessPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./business.page */
    "./src/app/Pages/Profesional/business/business.page.ts");

    var routes = [{
      path: '',
      component: _business_page__WEBPACK_IMPORTED_MODULE_3__["BusinessPage"]
    }];

    var BusinessPageRoutingModule = function BusinessPageRoutingModule() {
      _classCallCheck(this, BusinessPageRoutingModule);
    };

    BusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BusinessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/business/business.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/Profesional/business/business.module.ts ***!
    \***************************************************************/

  /*! exports provided: BusinessPageModule */

  /***/
  function srcAppPagesProfesionalBusinessBusinessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessPageModule", function () {
      return BusinessPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./business-routing.module */
    "./src/app/Pages/Profesional/business/business-routing.module.ts");
    /* harmony import */


    var _business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./business.page */
    "./src/app/Pages/Profesional/business/business.page.ts");

    var BusinessPageModule = function BusinessPageModule() {
      _classCallCheck(this, BusinessPageModule);
    };

    BusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _business_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessPageRoutingModule"]],
      declarations: [_business_page__WEBPACK_IMPORTED_MODULE_6__["BusinessPage"]]
    })], BusinessPageModule);
    /***/
  }
}]);
//# sourceMappingURL=Pages-Profesional-business-business-module-es5.js.map