function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Principal-Profesional-profesional-home-profesional-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Profesional/profesional-home/profesional-home.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Profesional/profesional-home/profesional-home.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrincipalProfesionalProfesionalHomeProfesionalHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <img src=\"..\\..\\..\\..\\..\\assets\\goiconnect.png\" slot=\"start\" width=\"160px\" height=\"80px\" style=\"border-top-right-radius: 30px; border-bottom-right-radius:30px\">\r\n    <ion-searchbar></ion-searchbar>\r\n    <ion-buttons slot=\"end\" class=\"btnmen\" color=\"light\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <super-tabs (tabChange)=\"OnTabChange($event)\">\r\n    <super-tabs-toolbar slot=\"bottom\" color=\"dark\">\r\n      <super-tab-button>\r\n        <ion-icon name=\"home-outline\" color=\"light\"></ion-icon>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-icon name=\"chevron-forward-circle-outline\" color=\"light\"></ion-icon>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-icon name=\"cash-outline\" color=\"light\"></ion-icon>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-icon name=\"chatbubbles-outline\" color=\"light\"></ion-icon>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-icon name=\"person-outline\" color=\"light\"></ion-icon>\r\n      </super-tab-button>\r\n    </super-tabs-toolbar>\r\n    <super-tabs-container>\r\n      <super-tab>\r\n        <ion-content>\r\n          <ion-nav [root]=\"homePage\"></ion-nav>\r\n        </ion-content>\r\n      </super-tab>\r\n      <super-tab>\r\n        <ion-content>\r\n          <ion-nav [root]=\"storiesPage\"></ion-nav>\r\n        </ion-content>\r\n      </super-tab>\r\n      <super-tab>\r\n        <ion-content>\r\n          <ion-nav [root]=\"businessPage\"></ion-nav>\r\n        </ion-content>\r\n      </super-tab>\r\n      <super-tab>\r\n        <ion-content>\r\n          <ion-nav [root]=\"chatPage\"></ion-nav>\r\n        </ion-content>\r\n      </super-tab>\r\n      <super-tab>\r\n        <ion-content>\r\n          <ion-nav [root]=\"profilePage\"></ion-nav>\r\n        </ion-content>\r\n      </super-tab>\r\n    </super-tabs-container>\r\n  </super-tabs>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Principal/Profesional/profesional-home/profesional-home-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/Principal/Profesional/profesional-home/profesional-home-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProfesionalHomePageRoutingModule */

  /***/
  function srcAppPrincipalProfesionalProfesionalHomeProfesionalHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesionalHomePageRoutingModule", function () {
      return ProfesionalHomePageRoutingModule;
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


    var _profesional_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profesional-home.page */
    "./src/app/Principal/Profesional/profesional-home/profesional-home.page.ts");

    var routes = [{
      path: '',
      component: _profesional_home_page__WEBPACK_IMPORTED_MODULE_3__["ProfesionalHomePage"]
    }];

    var ProfesionalHomePageRoutingModule = function ProfesionalHomePageRoutingModule() {
      _classCallCheck(this, ProfesionalHomePageRoutingModule);
    };

    ProfesionalHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfesionalHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Principal/Profesional/profesional-home/profesional-home.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/Principal/Profesional/profesional-home/profesional-home.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProfesionalHomePageModule */

  /***/
  function srcAppPrincipalProfesionalProfesionalHomeProfesionalHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesionalHomePageModule", function () {
      return ProfesionalHomePageModule;
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


    var _profesional_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profesional-home-routing.module */
    "./src/app/Principal/Profesional/profesional-home/profesional-home-routing.module.ts");
    /* harmony import */


    var _profesional_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profesional-home.page */
    "./src/app/Principal/Profesional/profesional-home/profesional-home.page.ts");

    var ProfesionalHomePageModule = function ProfesionalHomePageModule() {
      _classCallCheck(this, ProfesionalHomePageModule);
    };

    ProfesionalHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profesional_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfesionalHomePageRoutingModule"]],
      declarations: [_profesional_home_page__WEBPACK_IMPORTED_MODULE_6__["ProfesionalHomePage"]]
    })], ProfesionalHomePageModule);
    /***/
  },

  /***/
  "./src/app/Principal/Profesional/profesional-home/profesional-home.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/Principal/Profesional/profesional-home/profesional-home.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrincipalProfesionalProfesionalHomeProfesionalHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnmen {\n  background-color: var(--ion-color-light);\n  border-radius: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJpbmNpcGFsL1Byb2Zlc2lvbmFsL3Byb2Zlc2lvbmFsLWhvbWUvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQcmluY2lwYWxcXFByb2Zlc2lvbmFsXFxwcm9mZXNpb25hbC1ob21lXFxwcm9mZXNpb25hbC1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUHJpbmNpcGFsL1Byb2Zlc2lvbmFsL3Byb2Zlc2lvbmFsLWhvbWUvcHJvZmVzaW9uYWwtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9QcmluY2lwYWwvUHJvZmVzaW9uYWwvcHJvZmVzaW9uYWwtaG9tZS9wcm9mZXNpb25hbC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5tZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ5JTtcclxufSIsIi5idG5tZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA0OSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Principal/Profesional/profesional-home/profesional-home.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Principal/Profesional/profesional-home/profesional-home.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProfesionalHomePage */

  /***/
  function srcAppPrincipalProfesionalProfesionalHomeProfesionalHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesionalHomePage", function () {
      return ProfesionalHomePage;
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


    var src_app_Pages_Profesional_home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Pages/Profesional/home/home.page */
    "./src/app/Pages/Profesional/home/home.page.ts");
    /* harmony import */


    var src_app_Pages_Profesional_stories_stories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Pages/Profesional/stories/stories.page */
    "./src/app/Pages/Profesional/stories/stories.page.ts");
    /* harmony import */


    var src_app_Pages_Profesional_chat_chat_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Pages/Profesional/chat/chat.page */
    "./src/app/Pages/Profesional/chat/chat.page.ts");
    /* harmony import */


    var src_app_Pages_Profesional_profile_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Pages/Profesional/profile/profile.page */
    "./src/app/Pages/Profesional/profile/profile.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Pages_Profesional_business_business_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Pages/Profesional/business/business.page */
    "./src/app/Pages/Profesional/business/business.page.ts");

    var ProfesionalHomePage = /*#__PURE__*/function () {
      function ProfesionalHomePage(NavCtrl) {
        _classCallCheck(this, ProfesionalHomePage);

        this.NavCtrl = NavCtrl;
        this.homePage = src_app_Pages_Profesional_home_home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"];
        this.storiesPage = src_app_Pages_Profesional_stories_stories_page__WEBPACK_IMPORTED_MODULE_3__["StoriesPage"];
        this.businessPage = src_app_Pages_Profesional_business_business_page__WEBPACK_IMPORTED_MODULE_7__["BusinessPage"];
        this.chatPage = src_app_Pages_Profesional_chat_chat_page__WEBPACK_IMPORTED_MODULE_4__["ChatPage"];
        this.profilePage = src_app_Pages_Profesional_profile_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"];
      }

      _createClass(ProfesionalHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnTabChange",
        value: function OnTabChange(ev) {
          switch (ev.detail.index) {
            case 0:
              // console.log("Estas en apps");
              break;

            case 1:
              // console.log("Estas en social");
              break;

            case 2:
              // console.log("Estas en profesional")
              break;
          }
        }
      }]);

      return ProfesionalHomePage;
    }();

    ProfesionalHomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newsNav', {
      "static": false
    })], ProfesionalHomePage.prototype, "newsNav", void 0);
    ProfesionalHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profesional-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profesional-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Principal/Profesional/profesional-home/profesional-home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profesional-home.page.scss */
      "./src/app/Principal/Profesional/profesional-home/profesional-home.page.scss"))["default"]]
    })], ProfesionalHomePage);
    /***/
  }
}]);
//# sourceMappingURL=Principal-Profesional-profesional-home-profesional-home-module-es5.js.map