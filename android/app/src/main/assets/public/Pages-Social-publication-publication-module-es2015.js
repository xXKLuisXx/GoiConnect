(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Social-publication-publication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nueva Publicación</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"!multimediaSelected\">\r\n    <div *ngIf=\"isVideo\" width=\"320\" height=\"240\" controls class=\"videoPlayer\">\r\n      <video controls preload=\"metadata\" class=\"videoPlayer\" width=\"100%\" height=\"240\">\r\n        <source [src]=\"getImgContent()\" type=\"video/mp4\">\r\n        </video>\r\n    </div>\r\n    <div *ngIf=\"!isVideo\">\r\n      <img [src]=\"getImgContent()\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"text-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label position=\"floating\">Título</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]='publication.title' name=\"title\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label position=\"floating\">Descripcción</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]='publication.description' name=\"description\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Tipo de publicación</ion-label>\r\n    <ion-select [(ngModel)]='typePublication' [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccionar\">\r\n      <ion-select-option value=\"8\">Hospedaje</ion-select-option>\r\n      <ion-select-option value=\"9\">Evento</ion-select-option>\r\n      <ion-select-option value=\"10\">Viaje</ion-select-option>\r\n      <ion-select-option value=\"2\">Estado</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <div [ngSwitch]=\"typePublication\">\r\n    \r\n    <div *ngSwitchCase=\"8\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"9\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"10\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchDefault>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"multimediaSelected\">\r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"images-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Imagen / Video</ion-label>\r\n      <ion-input type=\"text\" readonly name=\"image\" (click)=\"menuMultimedia()\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Cámara</ion-label>\r\n      <ion-input type=\"text\" readonly name=\"camera\" (click)=\"menuCamera()\"></ion-input>\r\n    </ion-item>\r\n  </div>\r\n  \r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\r\n    <ion-toggle  [(ngModel)]=\"publication.monetized\" name=\"monetized\"></ion-toggle><ion-label>Monetizar</ion-label>\r\n  </ion-item>\r\n\r\n\r\n  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"post()\">Publicar</ion-button>\r\n\r\n  \r\n  \r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/Pages/Social/publication/publication-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/Social/publication/publication-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PublicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationPageRoutingModule", function() { return PublicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publication.page */ "./src/app/Pages/Social/publication/publication.page.ts");




const routes = [
    {
        path: '',
        component: _publication_page__WEBPACK_IMPORTED_MODULE_3__["PublicationPage"]
    }
];
let PublicationPageRoutingModule = class PublicationPageRoutingModule {
};
PublicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicationPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/Social/publication/publication.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Social/publication/publication.module.ts ***!
  \****************************************************************/
/*! exports provided: PublicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationPageModule", function() { return PublicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publication-routing.module */ "./src/app/Pages/Social/publication/publication-routing.module.ts");
/* harmony import */ var _publication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publication.page */ "./src/app/Pages/Social/publication/publication.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let PublicationPageModule = class PublicationPageModule {
};
PublicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicationPageRoutingModule"]
        ],
        declarations: [_publication_page__WEBPACK_IMPORTED_MODULE_6__["PublicationPage"]]
    })
], PublicationPageModule);



/***/ }),

/***/ "./src/app/Pages/Social/publication/publication.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Pages/Social/publication/publication.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1NvY2lhbC9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/Social/publication/publication.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Pages/Social/publication/publication.page.ts ***!
  \**************************************************************/
/*! exports provided: PublicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationPage", function() { return PublicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Models/Classes/publication */ "./src/app/Models/Classes/publication.ts");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publication.service */ "./src/app/services/publication.service.ts");
/* harmony import */ var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Classes/utils */ "./src/app/Models/Classes/utils.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");












let PublicationPage = class PublicationPage {
    constructor(router, route, publicationService, sanitizer, camera, mediaCapture, actionSheetController, imagePicker, base64) {
        this.router = router;
        this.route = route;
        this.publicationService = publicationService;
        this.sanitizer = sanitizer;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.actionSheetController = actionSheetController;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.videoExist = false;
        this.typePublication = null;
        this.hospedaje = false;
        this.utils = new src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"]();
        this.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_5__["Publication"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*this.src = this.publication.multimedia[0].base;
            if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
            else this.isVideo = true;*/
            /*this.platform.backButton.subscribeWithPriority(10, () => {
                this.router.navigate(['social']);
            });*/
            this.multimediaSelected = true;
            yield this.utils.getAccessData();
        });
    }
    getImgContent() {
        return this.sanitizer.bypassSecurityTrustUrl(this.src);
    }
    post() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.publication);
            if (this.publication.typeContent == null)
                this.publication.typeContent = 7;
            yield this.utils.loadingPresent();
            console.log(this.publication);
            this.publicationService.post(this.publication, this.utils.accessUserData.getAuthorization()).subscribe((Response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_5__["Publication"]();
                console.log(Response);
                this.publicationService.publication = new _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_5__["Publication"]();
                console.log('publicación terminada');
                console.log(this.publication);
                this.utils.loadingDismiss();
                this.updatePublications();
                this.src = "";
                this.utils.alertPresent('Exito', 'Publicación realizada con exito', 'OK');
                this.router.navigate(['social']);
            }), (Errors) => {
                this.utils.loadingDismiss();
                console.log(Errors);
                this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
            }, () => {
            });
        });
    }
    menuCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Foto',
                        handler: () => {
                            this.takePhoto(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Video',
                        handler: () => {
                            this.takeVideo();
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
    menuMultimedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select gallery",
                buttons: [{
                        text: 'Imagen',
                        handler: () => {
                            this.pickImages();
                        }
                    },
                    {
                        text: 'Video',
                        handler: () => {
                            this.pickVideo(this.camera.PictureSourceType.PHOTOLIBRARY);
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
    pickImages() {
        const options = {
            maximumImagesCount: 5,
            quality: 100,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then((images) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (var i = 0; i < images.length; i++) {
                const extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1);
                yield this.base64.encodeFile(images[i]).then((base64File) => {
                    this.publication.multimedia.push({ base: base64File, ext: extensionImage });
                }, (err) => {
                    console.log(err);
                });
            }
            //this.publicationService.publication = this.publication;
            if (this.publication.multimedia.length != 0) {
                this.multimediaSelected = false;
                this.src = this.publication.multimedia[0].base;
                if (this.publication.multimedia[0].ext != 'mp4')
                    this.isVideo = false;
            }
        }), (err) => {
            console.log(err);
        });
    }
    takePhoto(sourceType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                sourceType: sourceType,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
            };
            this.camera.getPicture(options).then((imageData) => {
                this.publication.multimedia.push({ base: 'data:image/jpg;base64,' + imageData, ext: 'jpg' });
                this.publicationService.publication = this.publication;
                if (this.publication.multimedia != null) {
                    //this.publication = new Publication();
                    this.multimediaSelected = false;
                    this.src = this.publication.multimedia[0].base;
                    if (this.publication.multimedia[0].ext != 'mp4')
                        this.isVideo = false;
                }
            }, (err) => {
            });
        });
    }
    takeVideo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = { limit: 1 };
            yield this.mediaCapture.captureVideo(options).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.base64.encodeFile(data[0].fullPath).then((base64File) => {
                    this.publication.multimedia.push({ base: base64File, ext: 'mp4' });
                    this.publicationService.publication = this.publication;
                    if (this.publication.multimedia != null) {
                        this.multimediaSelected = false;
                        this.src = this.publication.multimedia[0].base;
                        if (this.publication.multimedia[0].ext != 'mp4')
                            this.isVideo = false;
                        else {
                            this.isVideo = true;
                        }
                        //this.router.navigate(['social/social-publication']);
                    }
                }, (err) => {
                    console.log(err);
                });
            }), (err) => {
                console.log(err);
            });
        });
    }
    pickVideo(sourceType) {
        const options = {
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: sourceType
        };
        this.camera.getPicture(options)
            .then((videoUrl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (videoUrl) {
                var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                yield this.base64.encodeFile('file://' + videoUrl).then((base64File) => {
                    this.publication.multimedia.push({ base: base64File, ext: 'mp4' });
                    this.publicationService.publication = this.publication;
                    if (this.publication.multimedia != null) {
                        this.src = this.publication.multimedia[0].base;
                        if (this.publication.multimedia[0].ext != 'mp4')
                            this.isVideo = false;
                        else {
                            this.isVideo = true;
                        }
                        this.multimediaSelected = false;
                    }
                }, (err) => {
                    console.log(err);
                });
            }
        }))
            .catch(err => {
            console.log(err);
        });
    }
    updatePublications() {
        this.publicationService.updatePublications();
    }
    showData() {
        console.log(this.typePublication);
    }
    publications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Type Publication",
                buttons: [{
                        text: 'Hospedaje',
                        handler: () => {
                            this.router.navigate(['social/social-publication/lodging']);
                        }
                    },
                    {
                        text: 'Evento',
                        handler: () => {
                            this.takeVideo();
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
PublicationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"] }
];
PublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publication.page.scss */ "./src/app/Pages/Social/publication/publication.page.scss")).default]
    })
], PublicationPage);



/***/ })

}]);
//# sourceMappingURL=Pages-Social-publication-publication-module-es2015.js.map