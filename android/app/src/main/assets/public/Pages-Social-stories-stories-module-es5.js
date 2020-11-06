function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Social-stories-stories-module"], {
  /***/
  "./src/app/Pages/Social/stories/stories-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Pages/Social/stories/stories-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: StoriesPageRoutingModule */

  /***/
  function srcAppPagesSocialStoriesStoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesPageRoutingModule", function () {
      return StoriesPageRoutingModule;
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


    var _stories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stories.page */
    "./src/app/Pages/Social/stories/stories.page.ts");

    var routes = [{
      path: '',
      component: _stories_page__WEBPACK_IMPORTED_MODULE_3__["StoriesPage"]
    }];

    var StoriesPageRoutingModule = function StoriesPageRoutingModule() {
      _classCallCheck(this, StoriesPageRoutingModule);
    };

    StoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/Social/stories/stories.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Pages/Social/stories/stories.module.ts ***!
    \********************************************************/

  /*! exports provided: StoriesPageModule */

  /***/
  function srcAppPagesSocialStoriesStoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoriesPageModule", function () {
      return StoriesPageModule;
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


    var _stories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stories-routing.module */
    "./src/app/Pages/Social/stories/stories-routing.module.ts");
    /* harmony import */


    var _stories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stories.page */
    "./src/app/Pages/Social/stories/stories.page.ts");

    var StoriesPageModule = function StoriesPageModule() {
      _classCallCheck(this, StoriesPageModule);
    };

    StoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stories_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoriesPageRoutingModule"]],
      declarations: [_stories_page__WEBPACK_IMPORTED_MODULE_6__["StoriesPage"]]
    })], StoriesPageModule);
    /***/
  },

  /***/
  "./src/assets/feed.json":
  /*!******************************!*\
    !*** ./src/assets/feed.json ***!
    \******************************/

  /*! exports provided: 0, 1, 2, 3, default */

  /***/
  function srcAssetsFeedJson(module) {
    module.exports = JSON.parse("[{\"id\":0,\"user\":\"193\",\"title\":\"Por un mundo mejor\",\"src\":\"http://devdactic.com/video/preview2.mp4\"},{\"id\":1,\"user\":\"193838\",\"title\":\"My video preview\",\"src\":\"http://devdactic.com/video/preview2.mp4\"},{\"id\":2,\"user\":\"193838\",\"title\":\"Another content card\",\"src\":\"http://devdactic.com/video/preview3.mp4\"},{\"id\":3,\"user\":\"193838\",\"title\":\"Another content card\",\"src\":\"http://devdactic.com/video/preview4.mp4\"}]");
    /***/
  }
}]);
//# sourceMappingURL=Pages-Social-stories-stories-module-es5.js.map