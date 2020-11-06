(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Social-market-market-module"],{

/***/ "./src/app/Pages/Social/market/market-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Social/market/market-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MarketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageRoutingModule", function() { return MarketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market.page */ "./src/app/Pages/Social/market/market.page.ts");




const routes = [
    {
        path: '',
        component: _market_page__WEBPACK_IMPORTED_MODULE_3__["MarketPage"]
    }
];
let MarketPageRoutingModule = class MarketPageRoutingModule {
};
MarketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/Social/market/market.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Pages/Social/market/market.module.ts ***!
  \******************************************************/
/*! exports provided: MarketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageModule", function() { return MarketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-routing.module */ "./src/app/Pages/Social/market/market-routing.module.ts");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market.page */ "./src/app/Pages/Social/market/market.page.ts");







let MarketPageModule = class MarketPageModule {
};
MarketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _market_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketPageRoutingModule"]
        ],
        declarations: [_market_page__WEBPACK_IMPORTED_MODULE_6__["MarketPage"]]
    })
], MarketPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-Social-market-market-module-es2015.js.map