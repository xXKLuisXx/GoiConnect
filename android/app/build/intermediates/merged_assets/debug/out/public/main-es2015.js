(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./super-tab-button_2.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js",
		"common",
		0
	],
	"./super-tab-indicator.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js",
		1
	],
	"./super-tab_3.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab_3.entry.js",
		"common",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		3
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		4
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		5
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		6
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		7
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		8
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		9
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		10
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		11
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		12
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		13
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		14
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		15
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		16
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		17
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		18
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		19
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		20
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		21
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		22
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		23
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		24
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		25
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		26
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		27
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		28
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		29
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		30
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		31
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		32
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		33
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		34
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		35
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		36
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		37
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		38
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		39
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		40
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		41
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		42
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		43
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		44
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		45
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-menu side=\"end\" type=\"push\" contentId=\"main\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <!--<ion-item href=\"/social-home\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-icon name=\"people-circle-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label> Social </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>-->\r\n\r\n        <ion-item lines=\"full\">\r\n          <ion-icon name=\"people-circle-outline\"></ion-icon>\r\n          <ion-label>Social</ion-label>\r\n          <ion-input type=\"text\" readonly name=\"camera\" (click)=\"goTo()\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item href=\"/profesional-home\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-icon name=\"business-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label> Profesional </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-icon name=\"enter-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-label> Logout </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  \r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/Models/Classes/access-user-data.ts":
/*!****************************************************!*\
  !*** ./src/app/Models/Classes/access-user-data.ts ***!
  \****************************************************/
/*! exports provided: AccessUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessUserData", function() { return AccessUserData; });
class AccessUserData {
    constructor(token_type, expires_in, access_token, refresh_token) {
        if (token_type != null && expires_in != null && access_token != null && refresh_token != null) {
            this.token_type = token_type;
            this.expires_in = expires_in;
            this.access_token = access_token;
            this.refresh_token = refresh_token;
        }
        else {
            this.token_type = "";
            this.expires_in = 0;
            this.access_token = "";
            this.refresh_token = "";
        }
    }
    getAuthorization() {
        return this.token_type + " " + this.access_token;
    }
}


/***/ }),

/***/ "./src/app/Models/Classes/request-response.ts":
/*!****************************************************!*\
  !*** ./src/app/Models/Classes/request-response.ts ***!
  \****************************************************/
/*! exports provided: RequestResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResponse", function() { return RequestResponse; });
class RequestResponse {
    constructor() {
        this.statusText = "";
        this.status = 0;
        this.errors = {
            formErrors: new Object(),
            dbErrors: new Object(),
        };
    }
}


/***/ }),

/***/ "./src/app/Models/Classes/utils.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/Classes/utils.ts ***!
  \*****************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/secure-storage/ngx */ "./node_modules/@ionic-native/secure-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _access_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-user-data */ "./src/app/Models/Classes/access-user-data.ts");
/* harmony import */ var _request_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-response */ "./src/app/Models/Classes/request-response.ts");





class Utils {
    constructor() {
        this.secureStorage = new _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_1__["SecureStorage"]();
        this.loadingController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]();
        this.alertController = new _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]();
        this.requestResponse = new _request_response__WEBPACK_IMPORTED_MODULE_4__["RequestResponse"]();
        this.accessUserData = new _access_user_data__WEBPACK_IMPORTED_MODULE_3__["AccessUserData"]();
    }
    buildErrors(Errors) {
        let ErrorsHTML = '';
        this.requestResponse.status = Errors.status;
        this.requestResponse.statusText = Errors.statusText;
        if (this.requestResponse.status == 401) {
            ErrorsHTML = "Status: " + this.requestResponse.statusText;
        }
        else {
            if (Errors.error.error != null && Errors.error.error == "invalid_grant") {
                this.requestResponse.errors.dbErrors = Errors.error;
            }
            else {
                this.requestResponse.errors.formErrors = Errors.error;
            }
            console.log(this.requestResponse);
            if (Object.keys(this.requestResponse.errors.dbErrors).length > 0) {
                ErrorsHTML += '<li> User or Password wrong </li>';
            }
            else {
                if (Object.keys(this.requestResponse.errors.formErrors).length > 0) {
                    Object.keys(this.requestResponse.errors.formErrors).forEach(key => {
                        ErrorsHTML += key + ' <br>';
                        ErrorsHTML += '<ul> ';
                        this.requestResponse.errors.formErrors[key].forEach(element => {
                            ErrorsHTML += '<li> ' + element + '</li>';
                        });
                        ErrorsHTML += ' </ul>';
                    });
                }
            }
        }
        return ErrorsHTML;
    }
    buildAccessData(Response) {
        let accessdata = Response;
        let accessUserData = new _access_user_data__WEBPACK_IMPORTED_MODULE_3__["AccessUserData"]();
        Object.keys(accessdata).forEach(keyR => {
            Object.keys(accessUserData).forEach(keyAD => {
                if (keyR == keyAD) {
                    accessUserData[keyAD] = Response[keyR];
                }
            });
        });
        return accessUserData;
    }
    createLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...'
            });
            return loading;
        });
    }
    getItem(key) {
        return new Promise((resolve, reject) => {
            this.secureStorage.create('private_storage')
                .then((storage) => {
                storage.get(key)
                    .then((data) => {
                    resolve(data);
                })
                    .catch((error) => {
                    reject(error);
                });
            })
                .catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    getAccessData() {
        return new Promise((resolve, reject) => {
            this.getItem('AccessDataUser').then((data) => {
                this.accessUserData = this.buildAccessData(JSON.parse(data));
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
    storeItem(key, data) {
        return new Promise((resolve, reject) => {
            this.secureStorage.create('private_storage')
                .then((storage) => {
                storage.set(key, data)
                    .then((data) => {
                    resolve(data);
                })
                    .catch((error) => {
                    reject(error);
                });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    createAlert(header, messageAlert, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: header,
                message: messageAlert,
                buttons: [
                    {
                        text: text,
                        handler: () => {
                        }
                    }
                ]
            });
            return alert;
        });
    }
    alertPresent(header, message, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createAlert(header, message, text).then((Result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.alert = yield Result;
            }));
            yield this.alert.present();
        });
    }
    alertDismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.alert.dismiss();
        });
    }
    loadingPresent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.createLoading().then((Result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading = yield Result;
            }));
            yield this.loading.present();
        });
    }
    loadingDismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | Auth-login-page-login-page-module */[__webpack_require__.e("common"), __webpack_require__.e("Auth-login-page-login-page-module")]).then(__webpack_require__.bind(null, /*! ./Auth/login-page/login-page.module */ "./src/app/Auth/login-page/login-page.module.ts")).then(m => m.LoginPagePageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | Auth-register-page-register-page-module */[__webpack_require__.e("common"), __webpack_require__.e("Auth-register-page-register-page-module")]).then(__webpack_require__.bind(null, /*! ./Auth/register-page/register-page.module */ "./src/app/Auth/register-page/register-page.module.ts")).then(m => m.RegisterPagePageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'profesional',
        //loadChildren: () => import('./Principal/Profesional/profesional-home/profesional-home.module').then(m => m.ProfesionalHomePageModule)
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | Principal-Profesional-profesional-home-profesional-home-module */[__webpack_require__.e("default~Pages-Profesional-business-business-module~Principal-Profesional-profesional-home-profesiona~b58ccb71"), __webpack_require__.e("common"), __webpack_require__.e("Principal-Profesional-profesional-home-profesional-home-module")]).then(__webpack_require__.bind(null, /*! ./Principal/Profesional/profesional-home/profesional-home.module */ "./src/app/Principal/Profesional/profesional-home/profesional-home.module.ts")).then(m => m.ProfesionalHomePageModule)
                //canActivate:[ProtectGuard],
            },
            {
                path: 'profesional-home',
                loadChildren: () => Promise.all(/*! import() | Pages-Profesional-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Profesional-home-home-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Profesional/home/home.module */ "./src/app/Pages/Profesional/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'profesional-business',
                loadChildren: () => Promise.all(/*! import() | Pages-Profesional-business-business-module */[__webpack_require__.e("default~Pages-Profesional-business-business-module~Principal-Profesional-profesional-home-profesiona~b58ccb71"), __webpack_require__.e("Pages-Profesional-business-business-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Profesional/business/business.module */ "./src/app/Pages/Profesional/business/business.module.ts")).then(m => m.BusinessPageModule)
            },
            {
                path: 'profesional-stories',
                loadChildren: () => Promise.all(/*! import() | Pages-Profesional-stories-stories-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Profesional-stories-stories-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Profesional/stories/stories.module */ "./src/app/Pages/Profesional/stories/stories.module.ts")).then(m => m.StoriesPageModule)
            },
            {
                path: 'profesional-chat',
                loadChildren: () => Promise.all(/*! import() | Pages-Profesional-chat-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Profesional-chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Profesional/chat/chat.module */ "./src/app/Pages/Profesional/chat/chat.module.ts")).then(m => m.ChatPageModule)
            },
            {
                path: 'profesional-profile',
                loadChildren: () => Promise.all(/*! import() | Pages-Profesional-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Profesional-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Profesional/profile/profile.module */ "./src/app/Pages/Profesional/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
        ]
    },
    {
        path: 'social',
        //loadChildren: () => import('./Principal/Social/social-home/social-home.module').then(m => m.SocialHomePageModule),
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | Principal-Social-social-home-social-home-module */[__webpack_require__.e("default~Pages-Social-profile-profile-module~Principal-Social-social-home-social-home-module"), __webpack_require__.e("common"), __webpack_require__.e("Principal-Social-social-home-social-home-module")]).then(__webpack_require__.bind(null, /*! ./Principal/Social/social-home/social-home.module */ "./src/app/Principal/Social/social-home/social-home.module.ts")).then(m => m.SocialHomePageModule),
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-home-home-module */[__webpack_require__.e("default~Pages-Social-home-home-module~Pages-Social-publication-publication-module"), __webpack_require__.e("common"), __webpack_require__.e("Pages-Social-home-home-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/home/home.module */ "./src/app/Pages/Social/home/home.module.ts")).then(m => m.HomePageModule),
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-market-market-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Social-market-market-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/market/market.module */ "./src/app/Pages/Social/market/market.module.ts")).then(m => m.MarketPageModule)
            },
            {
                path: 'social-stories',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-stories-stories-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Social-stories-stories-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/stories/stories.module */ "./src/app/Pages/Social/stories/stories.module.ts")).then(m => m.StoriesPageModule)
            },
            {
                path: 'social-profile',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-profile-profile-module */[__webpack_require__.e("default~Pages-Social-profile-profile-module~Principal-Social-social-home-social-home-module"), __webpack_require__.e("Pages-Social-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/profile/profile.module */ "./src/app/Pages/Social/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'social-publication',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-publication-publication-module */[__webpack_require__.e("default~Pages-Social-home-home-module~Pages-Social-publication-publication-module"), __webpack_require__.e("Pages-Social-publication-publication-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/publication/publication.module */ "./src/app/Pages/Social/publication/publication.module.ts")).then(m => m.PublicationPageModule),
            },
            {
                path: 'social-chat',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-chat-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Social-chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/chat/chat.module */ "./src/app/Pages/Social/chat/chat.module.ts")).then(m => m.ChatPageModule)
            },
            {
                path: 'lodging',
                loadChildren: () => Promise.all(/*! import() | Pages-Social-lodging-lodging-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-Social-lodging-lodging-module")]).then(__webpack_require__.bind(null, /*! ./Pages/Social/lodging/lodging.module */ "./src/app/Pages/Social/lodging/lodging.module.ts")).then(m => m.LodgingPageModule)
            },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, actionSheetController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    goToLodging() {
        this.router.navigate(['social/lodging']);
    }
    goTo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select",
                buttons: [{
                        text: 'Mis Hospedajes',
                        handler: () => {
                            this.router.navigate(['social/lodging']);
                        }
                    },
                    {
                        text: 'Mis Eventos',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _Models_Classes_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");
/* harmony import */ var _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/secure-storage/ngx */ "./node_modules/@ionic-native/secure-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");





















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_12__["SuperTabsModule"].forRoot()
        ],
        providers: [
            _Models_Classes_utils__WEBPACK_IMPORTED_MODULE_17__["Utils"],
            _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_18__["SecureStorage"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["ImagePicker"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_19__["Base64"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_20__["MediaCapture"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
        this.userAuthenticated = false;
        this.utils = new _Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]();
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let promise = yield this.utils.getAccessData().then((data) => {
                console.log(data);
                return this.router.parseUrl('social');
            }).catch((error) => {
                console.log(error);
                return true;
            });
            return promise;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\erek_\Documents\GitHub\GoiConnectProj\GoiConnect\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map