function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-register-page-register-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/register-page/register-page.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/register-page/register-page.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterPageRegisterPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>RegisterPage</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-card>\r\n\t\t<form (ngSubmit)=\"registerForm()\">\r\n\t\t\t\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">Name</ion-label>\r\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]='UserData.name' name=\"name\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\r\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]='UserData.email' name=\"email\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">Password</ion-label>\r\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]='UserData.password' name=\"password\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">Confirm Password</ion-label>\r\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]='UserData.password_confirmation' name=\"password_confirmation\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\r\n\t\t\t<ion-card-content>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button type=\"submit\" color=\"primary\" expand=\"block\">Sing Up</ion-button>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button color=\"danger\" expand=\"block\" (click)=\"LoginPage()\">Login</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-card-content>\r\n\t\t</form>\r\n\t</ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Auth/register-page/register-page-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Auth/register-page/register-page-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: RegisterPagePageRoutingModule */

  /***/
  function srcAppAuthRegisterPageRegisterPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPagePageRoutingModule", function () {
      return RegisterPagePageRoutingModule;
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


    var _register_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-page.page */
    "./src/app/Auth/register-page/register-page.page.ts");

    var routes = [{
      path: '',
      component: _register_page_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPagePage"]
    }];

    var RegisterPagePageRoutingModule = function RegisterPagePageRoutingModule() {
      _classCallCheck(this, RegisterPagePageRoutingModule);
    };

    RegisterPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Auth/register-page/register-page.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Auth/register-page/register-page.module.ts ***!
    \************************************************************/

  /*! exports provided: RegisterPagePageModule */

  /***/
  function srcAppAuthRegisterPageRegisterPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPagePageModule", function () {
      return RegisterPagePageModule;
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


    var _register_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-page-routing.module */
    "./src/app/Auth/register-page/register-page-routing.module.ts");
    /* harmony import */


    var _register_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-page.page */
    "./src/app/Auth/register-page/register-page.page.ts");

    var RegisterPagePageModule = function RegisterPagePageModule() {
      _classCallCheck(this, RegisterPagePageModule);
    };

    RegisterPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPagePageRoutingModule"]],
      declarations: [_register_page_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPagePage"]]
    })], RegisterPagePageModule);
    /***/
  },

  /***/
  "./src/app/Auth/register-page/register-page.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/Auth/register-page/register-page.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterPageRegisterPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGgvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Auth/register-page/register-page.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Auth/register-page/register-page.page.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterPagePage */

  /***/
  function srcAppAuthRegisterPageRegisterPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPagePage", function () {
      return RegisterPagePage;
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


    var src_app_Models_Classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Models/Classes/user */
    "./src/app/Models/Classes/user.ts");
    /* harmony import */


    var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Models/Classes/utils */
    "./src/app/Models/Classes/utils.ts");
    /* harmony import */


    var src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/Auth/auth.service */
    "./src/app/services/Auth/auth.service.ts");

    var RegisterPagePage = /*#__PURE__*/function () {
      function RegisterPagePage(router, authService) {
        _classCallCheck(this, RegisterPagePage);

        this.router = router;
        this.authService = authService;
        this.UserData = new src_app_Models_Classes_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"]();
      }

      _createClass(RegisterPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerForm",
        value: function registerForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.loadingPresent();

                  case 2:
                    this.authService.register(this.UserData).subscribe(function (Response) {
                      _this.utils.storeItem('AccessDataUser', _this.utils.buildAccessData(Response));

                      _this.utils.loadingDismiss();

                      _this.router.navigate(['/home']);
                    }, function (Errors) {
                      _this.utils.loadingDismiss();

                      _this.utils.alertPresent('Errors', _this.utils.buildErrors(Errors), 'OK');
                    }, function () {
                      _this.utils.loadingDismiss();
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
        key: "LoginPage",
        value: function LoginPage() {
          this.router.navigate(['/login'], {
            replaceUrl: true
          });
        }
      }]);

      return RegisterPagePage;
    }();

    RegisterPagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    RegisterPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/register-page/register-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register-page.page.scss */
      "./src/app/Auth/register-page/register-page.page.scss"))["default"]]
    })], RegisterPagePage);
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
          var _this2 = this;

          if (!tokenRequired) this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);else {
            this.HEADERS.forEach(function (Header) {
              if (Header[0] === "Authorization") {
                if (token != null) {
                  _this2.headers = _this2.headers.set(Header[0], token);
                }
              } else {
                _this2.headers = _this2.headers.set(Header[0], Header[1]);
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
//# sourceMappingURL=Auth-register-page-register-page-module-es5.js.map