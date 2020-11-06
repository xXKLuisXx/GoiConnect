(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/login-page/login-page.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/login-page/login-page.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>LoginPage</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t\r\n\t<ion-card>\r\n\t\t<form (ngSubmit)=\"loginForm()\">\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\r\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]='UserData.email' name=\"email\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"full\">\r\n\t\t\t\t<ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\t<ion-label position=\"floating\">\r\n\t\t\t\t\tPassword\r\n\t\t\t\t</ion-label>\r\n\t\t\t\t<ion-input type=\"password\" [(ngModel)]='UserData.password' name=\"password\" required></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\r\n\t\t\t<ion-card-content>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button type=\"submit\" color=\"primary\" expand=\"block\">Sign In</ion-button>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-button color=\"danger\" expand=\"block\" (click)=\"RegisterPage()\">Register</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-card-content>\r\n\t\t</form>\r\n\t</ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Auth/login-page/login-page-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Auth/login-page/login-page-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePageRoutingModule", function() { return LoginPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.page */ "./src/app/Auth/login-page/login-page.page.ts");




const routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_3__["LoginPagePage"]
    }
];
let LoginPagePageRoutingModule = class LoginPagePageRoutingModule {
};
LoginPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPagePageRoutingModule);



/***/ }),

/***/ "./src/app/Auth/login-page/login-page.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Auth/login-page/login-page.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePageModule", function() { return LoginPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page-routing.module */ "./src/app/Auth/login-page/login-page-routing.module.ts");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page.page */ "./src/app/Auth/login-page/login-page.page.ts");







let LoginPagePageModule = class LoginPagePageModule {
};
LoginPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPagePageRoutingModule"]
        ],
        declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"]]
    })
], LoginPagePageModule);



/***/ }),

/***/ "./src/app/Auth/login-page/login-page.page.scss":
/*!******************************************************!*\
  !*** ./src/app/Auth/login-page/login-page.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGgvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Auth/login-page/login-page.page.ts":
/*!****************************************************!*\
  !*** ./src/app/Auth/login-page/login-page.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePage", function() { return LoginPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Auth/auth.service */ "./src/app/services/Auth/auth.service.ts");
/* harmony import */ var src_app_Models_Classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Classes/user */ "./src/app/Models/Classes/user.ts");
/* harmony import */ var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");






let LoginPagePage = class LoginPagePage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.UserData = new src_app_Models_Classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    loginForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('entrar login');
            yield this.utils.loadingPresent();
            this.authService.login(this.UserData).subscribe((Response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.utils.storeItem('AccessDataUser', JSON.stringify(this.utils.buildAccessData(Response))).then((data) => {
                    this.utils.loadingDismiss();
                    this.router.navigate(['/social']);
                }).catch((error) => {
                    console.log(error);
                });
                this.utils.loadingDismiss();
            }), (Errors) => {
                this.utils.loadingDismiss();
                this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
            }, () => {
                this.utils.loadingDismiss();
            });
        });
    }
    RegisterPage() {
        this.router.navigate(['/register'], { replaceUrl: true });
    }
};
LoginPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/login-page/login-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-page.page.scss */ "./src/app/Auth/login-page/login-page.page.scss")).default]
    })
], LoginPagePage);



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let RequestService = class RequestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.AUTH_SERVER_ADDRESS = 'http://192.168.100.100:8000/api/';
        this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', ''], ['responseType', 'text']];
        this.END_POINTS = ['login', 'register', 'publications', 'assist', 'join', 'joined'];
        this.PARAMETERS = ['?page=', '?id_detail=', '/'];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
    }
    selectEnpoint(endPoint) {
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
    selectParameters(parameters) {
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
    createHeaders(tokenRequired, token) {
        if (!tokenRequired)
            this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);
        else {
            this.HEADERS.forEach(Header => {
                if (Header[0] === "Authorization") {
                    if (token != null) {
                        this.headers = this.headers.set(Header[0], token);
                    }
                }
                else {
                    this.headers = this.headers.set(Header[0], Header[1]);
                }
            });
        }
        return this.headers;
    }
    createRequest(object, endPoint, post, token) {
        const headers = this.createHeaders(post, token);
        return this.httpClient.post(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object, { headers });
    }
    createRequestGet(endPoint, post, token, parameter, typeParameter) {
        const headers = this.createHeaders(post, token);
        if (parameter) {
            return this.httpClient.get(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint) + this.selectParameters(typeParameter) + parameter, { headers });
        }
        else {
            return this.httpClient.get(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), { headers });
        }
    }
    createRequestUpdate(parameter, endPoint, post, token, id) {
        const headers = this.createHeaders(post, token);
        console.log(headers);
        return this.httpClient.put(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint) + this.selectParameters(parameter) + id, id, { headers });
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RequestService);



/***/ })

}]);
//# sourceMappingURL=Auth-login-page-login-page-module-es2015.js.map