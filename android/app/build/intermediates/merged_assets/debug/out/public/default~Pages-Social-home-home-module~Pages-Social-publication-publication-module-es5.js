function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Social-home-home-module~Pages-Social-publication-publication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEntertainmentTemplateEntertainmentTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-card-header>\r\n    <ion-card-title>{{publication.title}}</ion-card-title>\r\n  </ion-card-header>\r\n  \r\n  <app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n   \r\n  <ion-card-content>\r\n    {{publication.description}}  \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Fecha del: {{publication.startDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hasta: {{publication.endDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Precio: ${{publication.price}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Hora inicio: {{publication.startHour}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hora fin: {{publication.endHour}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <div [ngSwitch]=\"typeContent\">\r\n              <div *ngSwitchCase=\"9\">\r\n                \r\n                <ion-badge color=\"success\">{{publication.partakers}} asistirán</ion-badge>\r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div [ngSwitch]=\"typeContent\">\r\n            <div *ngSwitchCase=\"9\">\r\n              <ion-button *ngIf=\"joined\" (click)=\"changeUnion()\">Asistir</ion-button>\r\n              <ion-button *ngIf=\"!joined\" (click)=\"changeUnion()\" color=\"danger\">No asistir</ion-button>\r\n            </div>\r\n            <div *ngSwitchCase=\"8\">\r\n              <ion-button (click)=\"joinEvent()\">Alquilar</ion-button> \r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>              \r\n  </ion-card-content>\r\n \r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEntertainmentEntertainmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageVideoTemplateImageVideoTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div *ngIf=\"isVideo(publication.path); else elseBlock\" controls class=\"videoPlayer\">\r\n  <video controls preload=\"metadata\" class=\"videoPlayer\" width=\"100%\" height=\"240\">\r\n    <source src=\"http://192.168.0.14:8000/storage/{{publication.path}}\" type=\"video/mp4\">\r\n  </video>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n  <img src=\"http://192.168.0.14:8000/storage/{{publication.path}}\"alt=\"ion\">\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLodgingTemplateLodgingTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-card-header>\r\n    <ion-card-title>{{publication.title}}</ion-card-title>\r\n  </ion-card-header>\r\n  \r\n  <app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n   \r\n  <ion-card-content>\r\n    {{publication.description}}  \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Fecha del: {{publication.startDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hasta: {{publication.endDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Precio: ${{publication.price}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Hora inicio: {{publication.startHour}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hora fin: {{publication.endHour}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-badge color=\"success\">2 asistirán</ion-badge>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div [ngSwitch]=\"typeContent\">\r\n            <div *ngSwitchCase=\"9\">\r\n              <ion-button *ngIf=\"!joined\" (click)=\"joinEvent()\">Asistir</ion-button>\r\n              <ion-button *ngIf=\"joined\" (click)=\"notJoin()\" color=\"danger\">No asistir</ion-button>\r\n\r\n            </div>\r\n            <div *ngSwitchCase=\"8\">\r\n              <ion-button (click)=\"joinEvent()\">Alquilar</ion-button> \r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>              \r\n  </ion-card-content>\r\n \r\n  \r\n  \r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLodgingLodgingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNormalPublicationTemplateNormalPublicationTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card-header>\r\n  <ion-card-title>{{publication.title}}</ion-card-title>\r\n</ion-card-header>\r\n\r\n<app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n \r\n<ion-card-content>\r\n  {{publication.description}}              \r\n</ion-card-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicationTemplatePublicationTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-card class=\"cardHome\">\r\n  <ion-item color=\"dark\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://img.mobiscroll.com/demos/card_2.png\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>John Doe</h3>\r\n      <p>New York City</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <div [ngSwitch]=\"typeContent\">\r\n    \r\n    <div *ngSwitchCase=\"7\">\r\n      <app-normal-publication-template [publication]=\"publication\"></app-normal-publication-template>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"8\">\r\n      <app-entertainment-template [publication]=\"publication\"></app-entertainment-template>\r\n    </div>\r\n      \r\n    <div *ngSwitchCase=\"9\">\r\n      <app-entertainment-template [publication]=\"publication\"></app-entertainment-template>\r\n    </div>  \r\n\r\n    <div *ngSwitchDefault></div>\r\n  </div>\r\n\r\n  <ion-card-content>\r\n    <ion-icon name=\"heart-outline\" size=\"large\" class=\"heartBtn\"></ion-icon>\r\n\r\n    <ion-icon name=\"chatbubble-ellipses-sharp\" size=\"large\" class=\"chatIcon\"></ion-icon>\r\n\r\n    <ion-icon name=\"bookmark-outline\" size=\"large\" style=\"float: right;\" class=\"bookBtn\"></ion-icon>\r\n  </ion-card-content>\r\n\r\n</ion-card>";
    /***/
  },

  /***/
  "./src/app/Models/Classes/join.ts":
  /*!****************************************!*\
    !*** ./src/app/Models/Classes/join.ts ***!
    \****************************************/

  /*! exports provided: Join */

  /***/
  function srcAppModelsClassesJoinTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Join", function () {
      return Join;
    });

    var Join = function Join(eventDetail, partakerType) {
      _classCallCheck(this, Join);

      this.eventDetail = eventDetail;
      this.partakerType = partakerType;
    };
    /***/

  },

  /***/
  "./src/app/Models/Classes/publication.ts":
  /*!***********************************************!*\
    !*** ./src/app/Models/Classes/publication.ts ***!
    \***********************************************/

  /*! exports provided: Publication */

  /***/
  function srcAppModelsClassesPublicationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Publication", function () {
      return Publication;
    });

    var Publication = /*#__PURE__*/function () {
      function Publication(object) {
        _classCallCheck(this, Publication);

        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

        if (object != null) {
          this.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
          this.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
          this.monetized = (_c = object.monetized) !== null && _c !== void 0 ? _c : "";
          this.price = (_d = object.price) !== null && _d !== void 0 ? _d : null;
          this.startDate = (_e = object.start_date) !== null && _e !== void 0 ? _e : "";
          this.endDate = (_f = object.end_date) !== null && _f !== void 0 ? _f : "";
          this.startHour = (_g = object.start_hour) !== null && _g !== void 0 ? _g : "";
          this.endHour = (_h = object.end_hour) !== null && _h !== void 0 ? _h : "";
          this.partakers = (_j = object.count_assits) !== null && _j !== void 0 ? _j : "";
          this.multimedia = (_k = object.multimedia) !== null && _k !== void 0 ? _k : [];
          this.path = (_l = object.path) !== null && _l !== void 0 ? _l : "";
          this.typeContent = (_m = object.content_type_id) !== null && _m !== void 0 ? _m : null;
          this.id_detail = (_o = object.id) !== null && _o !== void 0 ? _o : null;
        } else {
          this.title = "";
          this.description = "";
          this.monetized = false;
          this.price = null;
          this.startDate = "";
          this.endDate = "";
          this.startHour = "";
          this.endHour = "";
          this.partakers = null;
          this.multimedia = [];
          this.path = "";
          this.typeContent = null;
          this.id_detail = null;
        }
      }

      _createClass(Publication, [{
        key: "getTitle",
        value: function getTitle() {
          return this.title;
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          return this.description;
        }
      }]);

      return Publication;
    }();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lodging/lodging.component */
    "./src/app/components/lodging/lodging.component.ts");
    /* harmony import */


    var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./entertainment/entertainment.component */
    "./src/app/components/entertainment/entertainment.component.ts");
    /* harmony import */


    var _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lodging-template/lodging-template.component */
    "./src/app/components/lodging-template/lodging-template.component.ts");
    /* harmony import */


    var _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-video-template/image-video-template.component */
    "./src/app/components/image-video-template/image-video-template.component.ts");
    /* harmony import */


    var _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./publication-template/publication-template.component */
    "./src/app/components/publication-template/publication-template.component.ts");
    /* harmony import */


    var _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./entertainment-template/entertainment-template.component */
    "./src/app/components/entertainment-template/entertainment-template.component.ts");
    /* harmony import */


    var _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./normal-publication-template/normal-publication-template.component */
    "./src/app/components/normal-publication-template/normal-publication-template.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__["LodgingComponent"], _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__["EntertainmentComponent"], _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__["LodgingTemplateComponent"], _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__["ImageVideoTemplateComponent"], _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__["PublicationTemplateComponent"], _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__["EntertainmentTemplateComponent"], _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__["NormalPublicationTemplateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__["LodgingComponent"], _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__["EntertainmentComponent"], _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__["LodgingTemplateComponent"], _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__["ImageVideoTemplateComponent"], _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__["PublicationTemplateComponent"], _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__["EntertainmentTemplateComponent"], _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__["NormalPublicationTemplateComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/entertainment-template/entertainment-template.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/entertainment-template/entertainment-template.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEntertainmentTemplateEntertainmentTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50ZXJ0YWlubWVudC10ZW1wbGF0ZS9lbnRlcnRhaW5tZW50LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/entertainment-template/entertainment-template.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/entertainment-template/entertainment-template.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EntertainmentTemplateComponent */

  /***/
  function srcAppComponentsEntertainmentTemplateEntertainmentTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntertainmentTemplateComponent", function () {
      return EntertainmentTemplateComponent;
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


    var src_app_Models_Classes_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Models/Classes/join */
    "./src/app/Models/Classes/join.ts");
    /* harmony import */


    var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Models/Classes/utils */
    "./src/app/Models/Classes/utils.ts");
    /* harmony import */


    var src_app_services_join_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/join.service */
    "./src/app/services/join.service.ts");

    var EntertainmentTemplateComponent = /*#__PURE__*/function () {
      function EntertainmentTemplateComponent(joinService) {
        _classCallCheck(this, EntertainmentTemplateComponent);

        this.joinService = joinService;
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]();
      }

      _createClass(EntertainmentTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.typeContent = this.publication.typeContent.toString();
                    _context.next = 3;
                    return this.utils.getAccessData().then(function () {
                      _this.isJoined();
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "joinEvent",
        value: function joinEvent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var partakerType, join;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (Number(this.typeContent) == 9) {
                      partakerType = 2;
                    } else {
                      partakerType = 1;
                    }

                    join = new src_app_Models_Classes_join__WEBPACK_IMPORTED_MODULE_2__["Join"](this.publication.id_detail, partakerType);
                    console.log(this.utils.accessUserData.getAuthorization());
                    _context3.next = 5;
                    return this.utils.loadingPresent();

                  case 5:
                    this.joinService.join(join, this.utils.accessUserData.getAuthorization()).subscribe(function (Response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.isJoined();
                                this.utils.loadingDismiss();

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (Errors) {
                      _this2.utils.loadingDismiss();

                      _this2.utils.alertPresent('Errors', _this2.utils.buildErrors(Errors), 'OK');
                    }, function () {});

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changeUnion",
        value: function changeUnion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.joinService.existJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(function (Response) {
                      _this3.joined = Response;

                      if (_this3.joined == false) {
                        _this3.joinEvent();
                      } else {
                        _this3.updateJoin();
                      }
                    }, function (Errors) {
                      console.log(Errors);
                    }, function () {});

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateJoin",
        value: function updateJoin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.utils.loadingPresent();

                  case 2:
                    this.joinService.updateJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(function (Response) {
                      console.log(Response);

                      _this4.isJoined();

                      _this4.utils.loadingDismiss();
                    }, function (Errors) {
                      console.log(Errors);
                    }, function () {});

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "isJoined",
        value: function isJoined() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log(this.publication.id_detail);
                    this.joinService.isJoined(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(function (Response) {
                      if (Response == 0) _this5.joined = true;else _this5.joined = false;
                    }, function (Errors) {
                      console.log(Errors);
                    }, function () {});

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return EntertainmentTemplateComponent;
    }();

    EntertainmentTemplateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_join_service__WEBPACK_IMPORTED_MODULE_4__["JoinService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntertainmentTemplateComponent.prototype, "publication", void 0);
    EntertainmentTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entertainment-template',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./entertainment-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./entertainment-template.component.scss */
      "./src/app/components/entertainment-template/entertainment-template.component.scss"))["default"]]
    })], EntertainmentTemplateComponent);
    /***/
  },

  /***/
  "./src/app/components/entertainment/entertainment.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/entertainment/entertainment.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEntertainmentEntertainmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/entertainment/entertainment.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/entertainment/entertainment.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EntertainmentComponent */

  /***/
  function srcAppComponentsEntertainmentEntertainmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function () {
      return EntertainmentComponent;
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

    var EntertainmentComponent = /*#__PURE__*/function () {
      function EntertainmentComponent(alertController) {
        _classCallCheck(this, EntertainmentComponent);

        this.alertController = alertController;
      }

      _createClass(EntertainmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.presentAlertPrompt();
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Evento',
                      inputs: [{
                        name: 'startDate',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                      }, {
                        name: 'endDate',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                      }, {
                        name: 'startHour',
                        type: 'time'
                      }, {
                        name: 'endHour',
                        type: 'time'
                      }, {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Precio $'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Ok',
                        handler: function handler(data) {
                          _this6.publication.startDate = data.startDate;
                          _this6.publication.endDate = data.endDate;
                          _this6.publication.startHour = data.startHour;
                          _this6.publication.endHour = data.endHour;
                          _this6.publication.price = Number(data.price);
                          _this6.publication.typeContent = Number(_this6.typePublication);
                        }
                      }]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return EntertainmentComponent;
    }();

    EntertainmentComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntertainmentComponent.prototype, "publication", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntertainmentComponent.prototype, "typePublication", void 0);
    EntertainmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entertainment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./entertainment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./entertainment.component.scss */
      "./src/app/components/entertainment/entertainment.component.scss"))["default"]]
    })], EntertainmentComponent);
    /***/
  },

  /***/
  "./src/app/components/image-video-template/image-video-template.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/image-video-template/image-video-template.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsImageVideoTemplateImageVideoTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtdmlkZW8tdGVtcGxhdGUvaW1hZ2UtdmlkZW8tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/image-video-template/image-video-template.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/image-video-template/image-video-template.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ImageVideoTemplateComponent */

  /***/
  function srcAppComponentsImageVideoTemplateImageVideoTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageVideoTemplateComponent", function () {
      return ImageVideoTemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImageVideoTemplateComponent = /*#__PURE__*/function () {
      function ImageVideoTemplateComponent() {
        _classCallCheck(this, ImageVideoTemplateComponent);
      }

      _createClass(ImageVideoTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isVideo",
        value: function isVideo(multimedia) {
          var extension = multimedia.substr(13);
          if (extension == 'mp4') return true;else return false;
        }
      }]);

      return ImageVideoTemplateComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageVideoTemplateComponent.prototype, "publication", void 0);
    ImageVideoTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-video-template',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./image-video-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./image-video-template.component.scss */
      "./src/app/components/image-video-template/image-video-template.component.scss"))["default"]]
    })], ImageVideoTemplateComponent);
    /***/
  },

  /***/
  "./src/app/components/lodging-template/lodging-template.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/lodging-template/lodging-template.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLodgingTemplateLodgingTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9kZ2luZy10ZW1wbGF0ZS9sb2RnaW5nLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/lodging-template/lodging-template.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/lodging-template/lodging-template.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LodgingTemplateComponent */

  /***/
  function srcAppComponentsLodgingTemplateLodgingTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LodgingTemplateComponent", function () {
      return LodgingTemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LodgingTemplateComponent = /*#__PURE__*/function () {
      function LodgingTemplateComponent() {
        _classCallCheck(this, LodgingTemplateComponent);
      }

      _createClass(LodgingTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LodgingTemplateComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LodgingTemplateComponent.prototype, "publication", void 0);
    LodgingTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lodging-template',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lodging-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./lodging-template.component.scss */
      "./src/app/components/lodging-template/lodging-template.component.scss"))["default"]]
    })], LodgingTemplateComponent);
    /***/
  },

  /***/
  "./src/app/components/lodging/lodging.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/lodging/lodging.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLodgingLodgingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9kZ2luZy9sb2RnaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/lodging/lodging.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/lodging/lodging.component.ts ***!
    \*********************************************************/

  /*! exports provided: LodgingComponent */

  /***/
  function srcAppComponentsLodgingLodgingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LodgingComponent", function () {
      return LodgingComponent;
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

    var LodgingComponent = /*#__PURE__*/function () {
      function LodgingComponent(alertController) {
        _classCallCheck(this, LodgingComponent);

        this.alertController = alertController;
      }

      _createClass(LodgingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.presentAlertPrompt();
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: 'Hospedaje',
                      inputs: [{
                        name: 'checkIn',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                      }, {
                        name: 'checkOut',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                      }, {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Precio $'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Ok',
                        handler: function handler(data) {
                          //this.publication.checkIn = data.checkIn;
                          //this.publication.checkOut = data.checkOut;
                          _this7.publication.price = Number(data.price);
                          _this7.publication.typeContent = 8;
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return LodgingComponent;
    }();

    LodgingComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LodgingComponent.prototype, "publication", void 0);
    LodgingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lodging',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lodging.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./lodging.component.scss */
      "./src/app/components/lodging/lodging.component.scss"))["default"]]
    })], LodgingComponent);
    /***/
  },

  /***/
  "./src/app/components/normal-publication-template/normal-publication-template.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/normal-publication-template/normal-publication-template.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNormalPublicationTemplateNormalPublicationTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm9ybWFsLXB1YmxpY2F0aW9uLXRlbXBsYXRlL25vcm1hbC1wdWJsaWNhdGlvbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/normal-publication-template/normal-publication-template.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/normal-publication-template/normal-publication-template.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: NormalPublicationTemplateComponent */

  /***/
  function srcAppComponentsNormalPublicationTemplateNormalPublicationTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NormalPublicationTemplateComponent", function () {
      return NormalPublicationTemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NormalPublicationTemplateComponent = /*#__PURE__*/function () {
      function NormalPublicationTemplateComponent() {
        _classCallCheck(this, NormalPublicationTemplateComponent);
      }

      _createClass(NormalPublicationTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NormalPublicationTemplateComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NormalPublicationTemplateComponent.prototype, "publication", void 0);
    NormalPublicationTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-normal-publication-template',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./normal-publication-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./normal-publication-template.component.scss */
      "./src/app/components/normal-publication-template/normal-publication-template.component.scss"))["default"]]
    })], NormalPublicationTemplateComponent);
    /***/
  },

  /***/
  "./src/app/components/publication-template/publication-template.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/publication-template/publication-template.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicationTemplatePublicationTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljYXRpb24tdGVtcGxhdGUvcHVibGljYXRpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/publication-template/publication-template.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/publication-template/publication-template.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PublicationTemplateComponent */

  /***/
  function srcAppComponentsPublicationTemplatePublicationTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationTemplateComponent", function () {
      return PublicationTemplateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PublicationTemplateComponent = /*#__PURE__*/function () {
      function PublicationTemplateComponent() {
        _classCallCheck(this, PublicationTemplateComponent);
      }

      _createClass(PublicationTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.typeContent = this.publication.typeContent.toString();
        }
      }]);

      return PublicationTemplateComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PublicationTemplateComponent.prototype, "publication", void 0);
    PublicationTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publication-template',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./publication-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./publication-template.component.scss */
      "./src/app/components/publication-template/publication-template.component.scss"))["default"]]
    })], PublicationTemplateComponent);
    /***/
  },

  /***/
  "./src/app/services/join.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/join.service.ts ***!
    \******************************************/

  /*! exports provided: JoinService */

  /***/
  function srcAppServicesJoinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinService", function () {
      return JoinService;
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


    var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./request.service */
    "./src/app/services/request.service.ts");

    var JoinService = /*#__PURE__*/function () {
      //private join: Publication = new Publication();
      function JoinService(httpClient, request) {
        _classCallCheck(this, JoinService);

        this.httpClient = httpClient;
        this.request = request;
        this.postValue = true;
      }

      _createClass(JoinService, [{
        key: "join",
        value: function join(_join, authorization) {
          return this.request.createRequest(_join, 'assist', this.postValue, authorization);
        }
      }, {
        key: "existJoin",
        value: function existJoin(authorization, id_detail) {
          return this.request.createRequestGet('join', this.postValue, authorization, id_detail, 'id_detail');
        }
      }, {
        key: "isJoined",
        value: function isJoined(authorization, id_detail) {
          return this.request.createRequestGet('joined', this.postValue, authorization, id_detail, 'id_detail');
        }
      }, {
        key: "updateJoin",
        value: function updateJoin(authorization, id) {
          return this.request.createRequestUpdate('id', 'assist', this.postValue, authorization, id);
        }
      }]);

      return JoinService;
    }();

    JoinService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }];
    };

    JoinService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], JoinService);
    /***/
  },

  /***/
  "./src/app/services/publication.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/publication.service.ts ***!
    \*************************************************/

  /*! exports provided: PublicationService */

  /***/
  function srcAppServicesPublicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationService", function () {
      return PublicationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/Classes/publication */
    "./src/app/Models/Classes/publication.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/request.service */
    "./src/app/services/request.service.ts");

    var PublicationService = /*#__PURE__*/function () {
      function PublicationService(httpClient, request) {
        _classCallCheck(this, PublicationService);

        this.httpClient = httpClient;
        this.request = request;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
        this.updatePublication = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatePublication$ = this.updatePublication.asObservable();
        this.tokenRequired = true;
      }

      _createClass(PublicationService, [{
        key: "updatePublications",
        value: function updatePublications() {
          this.updatePublication.next();
        }
      }, {
        key: "post",
        value: function post(publication, authorization) {
          return this.request.createRequest(publication, 'publication', this.tokenRequired, authorization);
        }
      }, {
        key: "getPublications",
        value: function getPublications(authorization, page) {
          return this.request.createRequestGet('publication', this.tokenRequired, authorization, page, 'page');
        }
      }]);

      return PublicationService;
    }();

    PublicationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }];
    };

    PublicationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PublicationService);
    /***/
  },

  /***/
  "./src/app/services/request.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/request.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
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

    var RequestService = /*#__PURE__*/function () {
      function RequestService(httpClient) {
        _classCallCheck(this, RequestService);

        this.httpClient = httpClient;
        this.AUTH_SERVER_ADDRESS = 'http://192.168.100.100:8000/api/';
        this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', ''], ['responseType', 'text']];
        this.END_POINTS = ['login', 'register', 'publications', 'assist', 'join', 'joined'];
        this.PARAMETERS = ['?page=', '?id_detail=', '/'];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
      }

      _createClass(RequestService, [{
        key: "selectEnpoint",
        value: function selectEnpoint(endPoint) {
          switch (endPoint) {
            case 'login':
              return this.END_POINTS[0];

            case 'register':
              return this.END_POINTS[1];

            case 'publication':
              return this.END_POINTS[2];

            case 'assist':
              return this.END_POINTS[3];

            case 'join':
              return this.END_POINTS[4];

            case 'joined':
              return this.END_POINTS[5];

            default:
              break;
          }

          return;
        }
      }, {
        key: "selectParameters",
        value: function selectParameters(parameters) {
          switch (parameters) {
            case 'page':
              return this.PARAMETERS[0];

            case 'id_detail':
              return this.PARAMETERS[1];

            case 'id':
              return this.PARAMETERS[2];

            default:
              break;
          }

          return;
        }
      }, {
        key: "createHeaders",
        value: function createHeaders(tokenRequired, token) {
          var _this8 = this;

          if (!tokenRequired) this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);else {
            this.HEADERS.forEach(function (Header) {
              if (Header[0] === "Authorization") {
                if (token != null) {
                  _this8.headers = _this8.headers.set(Header[0], token);
                }
              } else {
                _this8.headers = _this8.headers.set(Header[0], Header[1]);
              }
            });
          }
          return this.headers;
        }
      }, {
        key: "createRequest",
        value: function createRequest(object, endPoint, post, token) {
          var headers = this.createHeaders(post, token);
          return this.httpClient.post(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object, {
            headers: headers
          });
        }
      }, {
        key: "createRequestGet",
        value: function createRequestGet(endPoint, post, token, parameter, typeParameter) {
          var headers = this.createHeaders(post, token);

          if (parameter) {
            return this.httpClient.get(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint) + this.selectParameters(typeParameter) + parameter, {
              headers: headers
            });
          } else {
            return this.httpClient.get(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), {
              headers: headers
            });
          }
        }
      }, {
        key: "createRequestUpdate",
        value: function createRequestUpdate(parameter, endPoint, post, token, id) {
          var headers = this.createHeaders(post, token);
          console.log(headers);
          return this.httpClient.put(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint) + this.selectParameters(parameter) + id, id, {
            headers: headers
          });
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RequestService);
    /***/
  }
}]);
//# sourceMappingURL=default~Pages-Social-home-home-module~Pages-Social-publication-publication-module-es5.js.map