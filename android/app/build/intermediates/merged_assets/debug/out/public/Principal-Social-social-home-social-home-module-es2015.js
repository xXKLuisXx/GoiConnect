(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Principal-Social-social-home-social-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/menu-apps/menu-apps.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/menu-apps/menu-apps.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"dark\">\r\n  <div style=\"display: flex; flex-wrap: wrap; margin-top: 50px;\">\r\n    <div class=\"fast\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GO FAST 3.png\" width=\"180px\" height=\"140px\">\r\n    </div>\r\n  \r\n    <div class=\"goibet\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GOIBET 2.png\" width=\"115px\" height=\"115px\" style=\"margin-top: 25px;\">\r\n    </div>\r\n  \r\n    <div class=\"goishop\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GOI SHOP PNG.png\" width=\"160px\" height=\"120px\" style=\"margin-top: 10px;\">\r\n    </div>\r\n  \r\n    <div class=\"goideal\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GOIDEAL.png\" width=\"160px\" height=\"75px\" style=\"margin-top: 30px;\">\r\n    </div>\r\n  \r\n    <div class=\"goijob\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GOI JOB.png\" width=\"160px\" height=\"100px\" style=\"margin-top: 20px;\">\r\n    </div>\r\n  \r\n    <div class=\"goilearn\">\r\n      <img src=\"../../../../assets/LOGOS/LOGO GOI LEARN.png\" width=\"160px\" height=\"50px\" style=\"margin-top: 45px;\">\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Social/social-home/social-home.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Social/social-home/social-home.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<img src=\"..\\..\\..\\..\\..\\assets\\goiconnect.png\" slot=\"start\" width=\"160px\" height=\"80px\"\r\n\t\t\tstyle=\"border-top-right-radius: 30px; border-bottom-right-radius:30px\">\r\n\t\t<ion-searchbar></ion-searchbar>\r\n\t\t<ion-buttons slot=\"end\" class=\"btnmen\">\r\n\t\t\t<ion-menu-button color=\"dark\"></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\t<super-tabs (tabChange)=\"OnTabChange($event)\">\r\n\t\t<super-tabs-toolbar slot=\"bottom\">\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"grid-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"home-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"bed-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"chatbubbles-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t\t<super-tab-button>\r\n\t\t\t\t<ion-icon name=\"person-outline\" color=\"light\"></ion-icon>\r\n\t\t\t</super-tab-button>\r\n\t\t</super-tabs-toolbar>\r\n\t\t<super-tabs-container>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"menuAppsPage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"homePage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"marketPage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"lodgingPage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"chatPage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t\t<super-tab>\r\n\t\t\t\t<ion-content>\r\n\t\t\t\t\t<ion-nav [root]=\"profilePage\"></ion-nav>\r\n\t\t\t\t</ion-content>\r\n\t\t\t</super-tab>\r\n\t\t</super-tabs-container>\r\n\t</super-tabs>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/Social/menu-apps/menu-apps.page.scss":
/*!************************************************************!*\
  !*** ./src/app/Pages/Social/menu-apps/menu-apps.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fast {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.goibet {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.goishop {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.goideal {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.goijob {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.goilearn {\n  background-color: #fff;\n  width: 160px;\n  height: 140px;\n  border-radius: 35px;\n  margin-left: 15px;\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL21lbnUtYXBwcy9DOlxcVXNlcnNcXGVyZWtfXFxEb2N1bWVudHNcXEdpdEh1YlxcR29pQ29ubmVjdFByb2pcXEdvaUNvbm5lY3Qvc3JjXFxhcHBcXFBhZ2VzXFxTb2NpYWxcXG1lbnUtYXBwc1xcbWVudS1hcHBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL21lbnUtYXBwcy9tZW51LWFwcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvU29jaWFsL21lbnUtYXBwcy9tZW51LWFwcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ29pYmV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdvaXNob3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ29pZGVhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nb2lqb2J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ29pbGVhcm57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5mYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ29pYmV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ29pc2hvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvaWRlYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb2lqb2Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb2lsZWFybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/Social/menu-apps/menu-apps.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/Social/menu-apps/menu-apps.page.ts ***!
  \**********************************************************/
/*! exports provided: MenuAppsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAppsPage", function() { return MenuAppsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuAppsPage = class MenuAppsPage {
    constructor() { }
    ngOnInit() {
    }
};
MenuAppsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-apps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-apps.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/menu-apps/menu-apps.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-apps.page.scss */ "./src/app/Pages/Social/menu-apps/menu-apps.page.scss")).default]
    })
], MenuAppsPage);



/***/ }),

/***/ "./src/app/Principal/Social/social-home/social-home-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Principal/Social/social-home/social-home-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SocialHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHomePageRoutingModule", function() { return SocialHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _social_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-home.page */ "./src/app/Principal/Social/social-home/social-home.page.ts");




const routes = [
    {
        path: '',
        component: _social_home_page__WEBPACK_IMPORTED_MODULE_3__["SocialHomePage"]
    }
];
let SocialHomePageRoutingModule = class SocialHomePageRoutingModule {
};
SocialHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SocialHomePageRoutingModule);



/***/ }),

/***/ "./src/app/Principal/Social/social-home/social-home.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/Principal/Social/social-home/social-home.module.ts ***!
  \********************************************************************/
/*! exports provided: SocialHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHomePageModule", function() { return SocialHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _social_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-home-routing.module */ "./src/app/Principal/Social/social-home/social-home-routing.module.ts");
/* harmony import */ var _social_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-home.page */ "./src/app/Principal/Social/social-home/social-home.page.ts");







let SocialHomePageModule = class SocialHomePageModule {
};
SocialHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _social_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["SocialHomePageRoutingModule"]
        ],
        declarations: [_social_home_page__WEBPACK_IMPORTED_MODULE_6__["SocialHomePage"]]
    })
], SocialHomePageModule);



/***/ }),

/***/ "./src/app/Principal/Social/social-home/social-home.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/Principal/Social/social-home/social-home.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnmen {\n  background-color: var(--ion-color-light);\n  border-radius: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJpbmNpcGFsL1NvY2lhbC9zb2NpYWwtaG9tZS9DOlxcVXNlcnNcXGVyZWtfXFxEb2N1bWVudHNcXEdpdEh1YlxcR29pQ29ubmVjdFByb2pcXEdvaUNvbm5lY3Qvc3JjXFxhcHBcXFByaW5jaXBhbFxcU29jaWFsXFxzb2NpYWwtaG9tZVxcc29jaWFsLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9QcmluY2lwYWwvU29jaWFsL3NvY2lhbC1ob21lL3NvY2lhbC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1ByaW5jaXBhbC9Tb2NpYWwvc29jaWFsLWhvbWUvc29jaWFsLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bm1lbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDklO1xyXG59IiwiLmJ0bm1lbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDQ5JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Principal/Social/social-home/social-home.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/Principal/Social/social-home/social-home.page.ts ***!
  \******************************************************************/
/*! exports provided: SocialHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHomePage", function() { return SocialHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Pages_Social_menu_apps_menu_apps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Pages/Social/menu-apps/menu-apps.page */ "./src/app/Pages/Social/menu-apps/menu-apps.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Pages_Social_home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Pages/Social/home/home.page */ "./src/app/Pages/Social/home/home.page.ts");
/* harmony import */ var src_app_Pages_Social_market_market_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Pages/Social/market/market.page */ "./src/app/Pages/Social/market/market.page.ts");
/* harmony import */ var src_app_Pages_Social_stories_stories_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Pages/Social/stories/stories.page */ "./src/app/Pages/Social/stories/stories.page.ts");
/* harmony import */ var src_app_Pages_Social_chat_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Pages/Social/chat/chat.page */ "./src/app/Pages/Social/chat/chat.page.ts");
/* harmony import */ var src_app_Pages_Social_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Pages/Social/profile/profile.page */ "./src/app/Pages/Social/profile/profile.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");
/* harmony import */ var src_app_Pages_Social_lodging_lodging_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Pages/Social/lodging/lodging.page */ "./src/app/Pages/Social/lodging/lodging.page.ts");











let SocialHomePage = class SocialHomePage {
    constructor(route) {
        this.route = route;
        this.homePage = src_app_Pages_Social_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"];
        this.marketPage = src_app_Pages_Social_market_market_page__WEBPACK_IMPORTED_MODULE_4__["MarketPage"];
        this.storiesPage = src_app_Pages_Social_stories_stories_page__WEBPACK_IMPORTED_MODULE_5__["StoriesPage"];
        this.chatPage = src_app_Pages_Social_chat_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"];
        this.profilePage = src_app_Pages_Social_profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"];
        this.menuAppsPage = _Pages_Social_menu_apps_menu_apps_page__WEBPACK_IMPORTED_MODULE_1__["MenuAppsPage"];
        this.lodgingPage = src_app_Pages_Social_lodging_lodging_page__WEBPACK_IMPORTED_MODULE_10__["LodgingPage"];
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"]();
    }
    ngOnInit() {
        this.utils.getAccessData();
    }
    OnTabChange(ev) {
        switch (ev.detail.index) {
            case 0:
                console.log("Estas en apps");
                break;
            case 1:
                console.log("Estas en social");
                break;
            case 2:
                console.log("Estas en profesional");
                break;
        }
    }
};
SocialHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
SocialHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-social-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./social-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Social/social-home/social-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./social-home.page.scss */ "./src/app/Principal/Social/social-home/social-home.page.scss")).default]
    })
], SocialHomePage);



/***/ }),

/***/ "./src/assets/feed.json":
/*!******************************!*\
  !*** ./src/assets/feed.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"user\":\"193\",\"title\":\"Por un mundo mejor\",\"src\":\"http://devdactic.com/video/preview2.mp4\"},{\"id\":1,\"user\":\"193838\",\"title\":\"My video preview\",\"src\":\"http://devdactic.com/video/preview2.mp4\"},{\"id\":2,\"user\":\"193838\",\"title\":\"Another content card\",\"src\":\"http://devdactic.com/video/preview3.mp4\"},{\"id\":3,\"user\":\"193838\",\"title\":\"Another content card\",\"src\":\"http://devdactic.com/video/preview4.mp4\"}]");

/***/ })

}]);
//# sourceMappingURL=Principal-Social-social-home-social-home-module-es2015.js.map