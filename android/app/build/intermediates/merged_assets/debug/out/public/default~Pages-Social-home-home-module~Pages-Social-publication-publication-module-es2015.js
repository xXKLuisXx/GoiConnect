(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Social-home-home-module~Pages-Social-publication-publication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-card-header>\r\n    <ion-card-title>{{publication.title}}</ion-card-title>\r\n  </ion-card-header>\r\n  \r\n  <app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n   \r\n  <ion-card-content>\r\n    {{publication.description}}  \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Fecha del: {{publication.startDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hasta: {{publication.endDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Precio: ${{publication.price}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Hora inicio: {{publication.startHour}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hora fin: {{publication.endHour}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <div [ngSwitch]=\"typeContent\">\r\n              <div *ngSwitchCase=\"9\">\r\n                \r\n                <ion-badge color=\"success\">{{publication.partakers}} asistirán</ion-badge>\r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div [ngSwitch]=\"typeContent\">\r\n            <div *ngSwitchCase=\"9\">\r\n              <ion-button *ngIf=\"joined\" (click)=\"changeUnion()\">Asistir</ion-button>\r\n              <ion-button *ngIf=\"!joined\" (click)=\"changeUnion()\" color=\"danger\">No asistir</ion-button>\r\n            </div>\r\n            <div *ngSwitchCase=\"8\">\r\n              <ion-button (click)=\"joinEvent()\">Alquilar</ion-button> \r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>              \r\n  </ion-card-content>\r\n \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"isVideo(publication.path); else elseBlock\" controls class=\"videoPlayer\">\r\n  <video controls preload=\"metadata\" class=\"videoPlayer\" width=\"100%\" height=\"240\">\r\n    <source src=\"http://192.168.0.14:8000/storage/{{publication.path}}\" type=\"video/mp4\">\r\n  </video>\r\n</div>\r\n\r\n<ng-template #elseBlock>\r\n  <img src=\"http://192.168.0.14:8000/storage/{{publication.path}}\"alt=\"ion\">\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-card-header>\r\n    <ion-card-title>{{publication.title}}</ion-card-title>\r\n  </ion-card-header>\r\n  \r\n  <app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n   \r\n  <ion-card-content>\r\n    {{publication.description}}  \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Fecha del: {{publication.startDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hasta: {{publication.endDate | date: 'EE, d LLL'}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Precio: ${{publication.price}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card-subtitle>Hora inicio: {{publication.startHour}}</ion-card-subtitle>\r\n            <ion-card-subtitle>Hora fin: {{publication.endHour}}</ion-card-subtitle>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div>\r\n            <ion-badge color=\"success\">2 asistirán</ion-badge>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div [ngSwitch]=\"typeContent\">\r\n            <div *ngSwitchCase=\"9\">\r\n              <ion-button *ngIf=\"!joined\" (click)=\"joinEvent()\">Asistir</ion-button>\r\n              <ion-button *ngIf=\"joined\" (click)=\"notJoin()\" color=\"danger\">No asistir</ion-button>\r\n\r\n            </div>\r\n            <div *ngSwitchCase=\"8\">\r\n              <ion-button (click)=\"joinEvent()\">Alquilar</ion-button> \r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>              \r\n  </ion-card-content>\r\n \r\n  \r\n  \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card-header>\r\n  <ion-card-title>{{publication.title}}</ion-card-title>\r\n</ion-card-header>\r\n\r\n<app-image-video-template [publication]=\"publication\"></app-image-video-template>\r\n \r\n<ion-card-content>\r\n  {{publication.description}}              \r\n</ion-card-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-card class=\"cardHome\">\r\n  <ion-item color=\"dark\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://img.mobiscroll.com/demos/card_2.png\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h3>John Doe</h3>\r\n      <p>New York City</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <div [ngSwitch]=\"typeContent\">\r\n    \r\n    <div *ngSwitchCase=\"7\">\r\n      <app-normal-publication-template [publication]=\"publication\"></app-normal-publication-template>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"8\">\r\n      <app-entertainment-template [publication]=\"publication\"></app-entertainment-template>\r\n    </div>\r\n      \r\n    <div *ngSwitchCase=\"9\">\r\n      <app-entertainment-template [publication]=\"publication\"></app-entertainment-template>\r\n    </div>  \r\n\r\n    <div *ngSwitchDefault></div>\r\n  </div>\r\n\r\n  <ion-card-content>\r\n    <ion-icon name=\"heart-outline\" size=\"large\" class=\"heartBtn\"></ion-icon>\r\n\r\n    <ion-icon name=\"chatbubble-ellipses-sharp\" size=\"large\" class=\"chatIcon\"></ion-icon>\r\n\r\n    <ion-icon name=\"bookmark-outline\" size=\"large\" style=\"float: right;\" class=\"bookBtn\"></ion-icon>\r\n  </ion-card-content>\r\n\r\n</ion-card>");

/***/ }),

/***/ "./src/app/Models/Classes/join.ts":
/*!****************************************!*\
  !*** ./src/app/Models/Classes/join.ts ***!
  \****************************************/
/*! exports provided: Join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Join", function() { return Join; });
class Join {
    constructor(eventDetail, partakerType) {
        this.eventDetail = eventDetail;
        this.partakerType = partakerType;
    }
}


/***/ }),

/***/ "./src/app/Models/Classes/publication.ts":
/*!***********************************************!*\
  !*** ./src/app/Models/Classes/publication.ts ***!
  \***********************************************/
/*! exports provided: Publication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publication", function() { return Publication; });
class Publication {
    constructor(object) {
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
        }
        else {
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
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
}


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lodging/lodging.component */ "./src/app/components/lodging/lodging.component.ts");
/* harmony import */ var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entertainment/entertainment.component */ "./src/app/components/entertainment/entertainment.component.ts");
/* harmony import */ var _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lodging-template/lodging-template.component */ "./src/app/components/lodging-template/lodging-template.component.ts");
/* harmony import */ var _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-video-template/image-video-template.component */ "./src/app/components/image-video-template/image-video-template.component.ts");
/* harmony import */ var _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./publication-template/publication-template.component */ "./src/app/components/publication-template/publication-template.component.ts");
/* harmony import */ var _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entertainment-template/entertainment-template.component */ "./src/app/components/entertainment-template/entertainment-template.component.ts");
/* harmony import */ var _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normal-publication-template/normal-publication-template.component */ "./src/app/components/normal-publication-template/normal-publication-template.component.ts");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__["LodgingComponent"],
            _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__["EntertainmentComponent"],
            _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__["LodgingTemplateComponent"],
            _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__["ImageVideoTemplateComponent"],
            _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__["PublicationTemplateComponent"],
            _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__["EntertainmentTemplateComponent"],
            _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__["NormalPublicationTemplateComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _lodging_lodging_component__WEBPACK_IMPORTED_MODULE_3__["LodgingComponent"],
            _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_4__["EntertainmentComponent"],
            _lodging_template_lodging_template_component__WEBPACK_IMPORTED_MODULE_5__["LodgingTemplateComponent"],
            _image_video_template_image_video_template_component__WEBPACK_IMPORTED_MODULE_6__["ImageVideoTemplateComponent"],
            _publication_template_publication_template_component__WEBPACK_IMPORTED_MODULE_7__["PublicationTemplateComponent"],
            _entertainment_template_entertainment_template_component__WEBPACK_IMPORTED_MODULE_8__["EntertainmentTemplateComponent"],
            _normal_publication_template_normal_publication_template_component__WEBPACK_IMPORTED_MODULE_9__["NormalPublicationTemplateComponent"]
        ],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/entertainment-template/entertainment-template.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/entertainment-template/entertainment-template.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50ZXJ0YWlubWVudC10ZW1wbGF0ZS9lbnRlcnRhaW5tZW50LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/entertainment-template/entertainment-template.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/entertainment-template/entertainment-template.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EntertainmentTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentTemplateComponent", function() { return EntertainmentTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_Classes_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/Classes/join */ "./src/app/Models/Classes/join.ts");
/* harmony import */ var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");
/* harmony import */ var src_app_services_join_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/join.service */ "./src/app/services/join.service.ts");





let EntertainmentTemplateComponent = class EntertainmentTemplateComponent {
    constructor(joinService) {
        this.joinService = joinService;
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.typeContent = this.publication.typeContent.toString();
            yield this.utils.getAccessData().then(() => {
                this.isJoined();
            });
        });
    }
    joinEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let partakerType;
            if (Number(this.typeContent) == 9) {
                partakerType = 2;
            }
            else {
                partakerType = 1;
            }
            const join = new src_app_Models_Classes_join__WEBPACK_IMPORTED_MODULE_2__["Join"](this.publication.id_detail, partakerType);
            console.log(this.utils.accessUserData.getAuthorization());
            yield this.utils.loadingPresent();
            this.joinService.join(join, this.utils.accessUserData.getAuthorization()).subscribe((Response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.isJoined();
                this.utils.loadingDismiss();
            }), (Errors) => {
                this.utils.loadingDismiss();
                this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
            }, () => {
            });
        });
    }
    changeUnion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.joinService.existJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe((Response) => {
                this.joined = Response;
                if (this.joined == false) {
                    this.joinEvent();
                }
                else {
                    this.updateJoin();
                }
            }, (Errors) => {
                console.log(Errors);
            }, () => {
            });
        });
    }
    updateJoin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.loadingPresent();
            this.joinService.updateJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe((Response) => {
                console.log(Response);
                this.isJoined();
                this.utils.loadingDismiss();
            }, (Errors) => {
                console.log(Errors);
            }, () => {
            });
        });
    }
    isJoined() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.publication.id_detail);
            this.joinService.isJoined(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe((Response) => {
                if (Response == 0)
                    this.joined = true;
                else
                    this.joined = false;
            }, (Errors) => {
                console.log(Errors);
            }, () => {
            });
        });
    }
};
EntertainmentTemplateComponent.ctorParameters = () => [
    { type: src_app_services_join_service__WEBPACK_IMPORTED_MODULE_4__["JoinService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EntertainmentTemplateComponent.prototype, "publication", void 0);
EntertainmentTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entertainment-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entertainment-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment-template/entertainment-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entertainment-template.component.scss */ "./src/app/components/entertainment-template/entertainment-template.component.scss")).default]
    })
], EntertainmentTemplateComponent);



/***/ }),

/***/ "./src/app/components/entertainment/entertainment.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/entertainment/entertainment.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/entertainment/entertainment.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/entertainment/entertainment.component.ts ***!
  \*********************************************************************/
/*! exports provided: EntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function() { return EntertainmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let EntertainmentComponent = class EntertainmentComponent {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
        this.presentAlertPrompt();
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Evento',
                inputs: [
                    {
                        name: 'startDate',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                    },
                    {
                        name: 'endDate',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                    },
                    {
                        name: 'startHour',
                        type: 'time'
                    },
                    {
                        name: 'endHour',
                        type: 'time'
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Precio $'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            this.publication.startDate = data.startDate;
                            this.publication.endDate = data.endDate;
                            this.publication.startHour = data.startHour;
                            this.publication.endHour = data.endHour;
                            this.publication.price = Number(data.price);
                            this.publication.typeContent = Number(this.typePublication);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EntertainmentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EntertainmentComponent.prototype, "publication", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EntertainmentComponent.prototype, "typePublication", void 0);
EntertainmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entertainment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entertainment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entertainment/entertainment.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entertainment.component.scss */ "./src/app/components/entertainment/entertainment.component.scss")).default]
    })
], EntertainmentComponent);



/***/ }),

/***/ "./src/app/components/image-video-template/image-video-template.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/image-video-template/image-video-template.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtdmlkZW8tdGVtcGxhdGUvaW1hZ2UtdmlkZW8tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/image-video-template/image-video-template.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/image-video-template/image-video-template.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImageVideoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageVideoTemplateComponent", function() { return ImageVideoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ImageVideoTemplateComponent = class ImageVideoTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
    isVideo(multimedia) {
        let extension = multimedia.substr(13);
        if (extension == 'mp4')
            return true;
        else
            return false;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageVideoTemplateComponent.prototype, "publication", void 0);
ImageVideoTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-video-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image-video-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-video-template/image-video-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image-video-template.component.scss */ "./src/app/components/image-video-template/image-video-template.component.scss")).default]
    })
], ImageVideoTemplateComponent);



/***/ }),

/***/ "./src/app/components/lodging-template/lodging-template.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/lodging-template/lodging-template.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9kZ2luZy10ZW1wbGF0ZS9sb2RnaW5nLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/lodging-template/lodging-template.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/lodging-template/lodging-template.component.ts ***!
  \***************************************************************************/
/*! exports provided: LodgingTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgingTemplateComponent", function() { return LodgingTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LodgingTemplateComponent = class LodgingTemplateComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LodgingTemplateComponent.prototype, "publication", void 0);
LodgingTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lodging-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lodging-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging-template/lodging-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lodging-template.component.scss */ "./src/app/components/lodging-template/lodging-template.component.scss")).default]
    })
], LodgingTemplateComponent);



/***/ }),

/***/ "./src/app/components/lodging/lodging.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/lodging/lodging.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9kZ2luZy9sb2RnaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/lodging/lodging.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/lodging/lodging.component.ts ***!
  \*********************************************************/
/*! exports provided: LodgingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgingComponent", function() { return LodgingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LodgingComponent = class LodgingComponent {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
        this.presentAlertPrompt();
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Hospedaje',
                inputs: [
                    {
                        name: 'checkIn',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                    },
                    {
                        name: 'checkOut',
                        type: 'date',
                        min: '2019-01-01',
                        max: '2030-12-12'
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Precio $'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //this.publication.checkIn = data.checkIn;
                            //this.publication.checkOut = data.checkOut;
                            this.publication.price = Number(data.price);
                            this.publication.typeContent = 8;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LodgingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LodgingComponent.prototype, "publication", void 0);
LodgingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lodging',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lodging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lodging/lodging.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lodging.component.scss */ "./src/app/components/lodging/lodging.component.scss")).default]
    })
], LodgingComponent);



/***/ }),

/***/ "./src/app/components/normal-publication-template/normal-publication-template.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/normal-publication-template/normal-publication-template.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm9ybWFsLXB1YmxpY2F0aW9uLXRlbXBsYXRlL25vcm1hbC1wdWJsaWNhdGlvbi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/normal-publication-template/normal-publication-template.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/normal-publication-template/normal-publication-template.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NormalPublicationTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPublicationTemplateComponent", function() { return NormalPublicationTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NormalPublicationTemplateComponent = class NormalPublicationTemplateComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NormalPublicationTemplateComponent.prototype, "publication", void 0);
NormalPublicationTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-normal-publication-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./normal-publication-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/normal-publication-template/normal-publication-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./normal-publication-template.component.scss */ "./src/app/components/normal-publication-template/normal-publication-template.component.scss")).default]
    })
], NormalPublicationTemplateComponent);



/***/ }),

/***/ "./src/app/components/publication-template/publication-template.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/publication-template/publication-template.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljYXRpb24tdGVtcGxhdGUvcHVibGljYXRpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/publication-template/publication-template.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/publication-template/publication-template.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PublicationTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationTemplateComponent", function() { return PublicationTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PublicationTemplateComponent = class PublicationTemplateComponent {
    constructor() { }
    ngOnInit() {
        this.typeContent = this.publication.typeContent.toString();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PublicationTemplateComponent.prototype, "publication", void 0);
PublicationTemplateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication-template',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/publication-template/publication-template.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication-template.component.scss */ "./src/app/components/publication-template/publication-template.component.scss")).default]
    })
], PublicationTemplateComponent);



/***/ }),

/***/ "./src/app/services/join.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/join.service.ts ***!
  \******************************************/
/*! exports provided: JoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinService", function() { return JoinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.service */ "./src/app/services/request.service.ts");




let JoinService = class JoinService {
    //private join: Publication = new Publication();
    constructor(httpClient, request) {
        this.httpClient = httpClient;
        this.request = request;
        this.postValue = true;
    }
    join(join, authorization) {
        return this.request.createRequest(join, 'assist', this.postValue, authorization);
    }
    existJoin(authorization, id_detail) {
        return this.request.createRequestGet('join', this.postValue, authorization, id_detail, 'id_detail');
    }
    isJoined(authorization, id_detail) {
        return this.request.createRequestGet('joined', this.postValue, authorization, id_detail, 'id_detail');
    }
    updateJoin(authorization, id) {
        return this.request.createRequestUpdate('id', 'assist', this.postValue, authorization, id);
    }
};
JoinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
];
JoinService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], JoinService);



/***/ }),

/***/ "./src/app/services/publication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/publication.service.ts ***!
  \*************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Classes/publication */ "./src/app/Models/Classes/publication.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/request.service */ "./src/app/services/request.service.ts");







let PublicationService = class PublicationService {
    constructor(httpClient, request) {
        this.httpClient = httpClient;
        this.request = request;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
        this.updatePublication = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatePublication$ = this.updatePublication.asObservable();
        this.tokenRequired = true;
    }
    updatePublications() {
        this.updatePublication.next();
    }
    post(publication, authorization) {
        return this.request.createRequest(publication, 'publication', this.tokenRequired, authorization);
    }
    getPublications(authorization, page) {
        return this.request.createRequestGet('publication', this.tokenRequired, authorization, page, 'page');
    }
};
PublicationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] }
];
PublicationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicationService);



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
//# sourceMappingURL=default~Pages-Social-home-home-module~Pages-Social-publication-publication-module-es2015.js.map