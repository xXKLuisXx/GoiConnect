function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-Social-publication-publication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialPublicationPublicationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nueva Publicación</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"!multimediaSelected\">\r\n    <div *ngIf=\"isVideo\" width=\"320\" height=\"240\" controls class=\"videoPlayer\">\r\n      <video controls preload=\"metadata\" class=\"videoPlayer\" width=\"100%\" height=\"240\">\r\n        <source [src]=\"getImgContent()\" type=\"video/mp4\">\r\n        </video>\r\n    </div>\r\n    <div *ngIf=\"!isVideo\">\r\n      <img [src]=\"getImgContent()\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"text-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label position=\"floating\">Título</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]='publication.title' name=\"title\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label position=\"floating\">Descripcción</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]='publication.description' name=\"description\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Tipo de publicación</ion-label>\r\n    <ion-select [(ngModel)]='typePublication' [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccionar\">\r\n      <ion-select-option value=\"8\">Hospedaje</ion-select-option>\r\n      <ion-select-option value=\"9\">Evento</ion-select-option>\r\n      <ion-select-option value=\"10\">Viaje</ion-select-option>\r\n      <ion-select-option value=\"2\">Estado</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <div [ngSwitch]=\"typePublication\">\r\n    \r\n    <div *ngSwitchCase=\"8\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"9\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"10\">\r\n      <app-entertainment [publication]=\"publication\" [typePublication]=\"typePublication\"></app-entertainment>\r\n    </div>\r\n\r\n    <div *ngSwitchDefault>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"multimediaSelected\">\r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"images-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Imagen / Video</ion-label>\r\n      <ion-input type=\"text\" readonly name=\"image\" (click)=\"menuMultimedia()\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"full\">\r\n      <ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Cámara</ion-label>\r\n      <ion-input type=\"text\" readonly name=\"camera\" (click)=\"menuCamera()\"></ion-input>\r\n    </ion-item>\r\n  </div>\r\n  \r\n  <ion-item lines=\"full\">\r\n    <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\r\n    <ion-toggle  [(ngModel)]=\"publication.monetized\" name=\"monetized\"></ion-toggle><ion-label>Monetizar</ion-label>\r\n  </ion-item>\r\n\r\n\r\n  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"post()\">Publicar</ion-button>\r\n\r\n  \r\n  \r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/Pages/Social/publication/publication-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Pages/Social/publication/publication-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: PublicationPageRoutingModule */

  /***/
  function srcAppPagesSocialPublicationPublicationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationPageRoutingModule", function () {
      return PublicationPageRoutingModule;
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


    var _publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publication.page */
    "./src/app/Pages/Social/publication/publication.page.ts");

    var routes = [{
      path: '',
      component: _publication_page__WEBPACK_IMPORTED_MODULE_3__["PublicationPage"]
    }];

    var PublicationPageRoutingModule = function PublicationPageRoutingModule() {
      _classCallCheck(this, PublicationPageRoutingModule);
    };

    PublicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PublicationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/Social/publication/publication.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Pages/Social/publication/publication.module.ts ***!
    \****************************************************************/

  /*! exports provided: PublicationPageModule */

  /***/
  function srcAppPagesSocialPublicationPublicationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationPageModule", function () {
      return PublicationPageModule;
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


    var _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./publication-routing.module */
    "./src/app/Pages/Social/publication/publication-routing.module.ts");
    /* harmony import */


    var _publication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./publication.page */
    "./src/app/Pages/Social/publication/publication.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");

    var PublicationPageModule = function PublicationPageModule() {
      _classCallCheck(this, PublicationPageModule);
    };

    PublicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _publication_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicationPageRoutingModule"]],
      declarations: [_publication_page__WEBPACK_IMPORTED_MODULE_6__["PublicationPage"]]
    })], PublicationPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/Social/publication/publication.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/Pages/Social/publication/publication.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialPublicationPublicationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL1NvY2lhbC9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/publication/publication.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Pages/Social/publication/publication.page.ts ***!
    \**************************************************************/

  /*! exports provided: PublicationPage */

  /***/
  function srcAppPagesSocialPublicationPublicationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationPage", function () {
      return PublicationPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _Models_Classes_publication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Models/Classes/publication */
    "./src/app/Models/Classes/publication.ts");
    /* harmony import */


    var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/publication.service */
    "./src/app/services/publication.service.ts");
    /* harmony import */


    var src_app_Models_Classes_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Models/Classes/utils */
    "./src/app/Models/Classes/utils.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");

    var PublicationPage = /*#__PURE__*/function () {
      function PublicationPage(router, route, publicationService, sanitizer, camera, mediaCapture, actionSheetController, imagePicker, base64) {
        _classCallCheck(this, PublicationPage);

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

      _createClass(PublicationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /*this.src = this.publication.multimedia[0].base;
                    if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
                    else this.isVideo = true;*/

                    /*this.platform.backButton.subscribeWithPriority(10, () => {
                        this.router.navigate(['social']);
                    });*/
                    this.multimediaSelected = true;
                    _context.next = 3;
                    return this.utils.getAccessData();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getImgContent",
        value: function getImgContent() {
          return this.sanitizer.bypassSecurityTrustUrl(this.src);
        }
      }, {
        key: "post",
        value: function post() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    //console.log(this.publication);
                    if (this.publication.typeContent == null) this.publication.typeContent = 7;
                    _context3.next = 3;
                    return this.utils.loadingPresent();

                  case 3:
                    console.log(this.publication);
                    this.publicationService.post(this.publication, this.utils.accessUserData.getAuthorization()).subscribe(function (Response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
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

                              case 10:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, function (Errors) {
                      _this.utils.loadingDismiss();

                      console.log(Errors);

                      _this.utils.alertPresent('Errors', _this.utils.buildErrors(Errors), 'OK');
                    }, function () {});

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "menuCamera",
        value: function menuCamera() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Foto',
                        handler: function handler() {
                          _this2.takePhoto(_this2.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: 'Video',
                        handler: function handler() {
                          _this2.takeVideo();
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "menuMultimedia",
        value: function menuMultimedia() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.actionSheetController.create({
                      header: "Select gallery",
                      buttons: [{
                        text: 'Imagen',
                        handler: function handler() {
                          _this3.pickImages();
                        }
                      }, {
                        text: 'Video',
                        handler: function handler() {
                          _this3.pickVideo(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context5.sent;
                    _context5.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "pickImages",
        value: function pickImages() {
          var _this4 = this;

          var options = {
            maximumImagesCount: 5,
            quality: 100,
            outputType: 0
          };
          this.imagePicker.getPictures(options).then(function (images) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var _loop, i;

              return regeneratorRuntime.wrap(function _callee6$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                        var extensionImage;
                        return regeneratorRuntime.wrap(function _loop$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1);
                                _context6.next = 3;
                                return _this5.base64.encodeFile(images[i]).then(function (base64File) {
                                  _this5.publication.multimedia.push({
                                    base: base64File,
                                    ext: extensionImage
                                  });
                                }, function (err) {
                                  console.log(err);
                                });

                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _loop);
                      });
                      i = 0;

                    case 2:
                      if (!(i < images.length)) {
                        _context7.next = 7;
                        break;
                      }

                      return _context7.delegateYield(_loop(), "t0", 4);

                    case 4:
                      i++;
                      _context7.next = 2;
                      break;

                    case 7:
                      //this.publicationService.publication = this.publication;
                      if (this.publication.multimedia.length != 0) {
                        this.multimediaSelected = false;
                        this.src = this.publication.multimedia[0].base;
                        if (this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
                      }

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "takePhoto",
        value: function takePhoto(sourceType) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var options;
            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    options = {
                      quality: 100,
                      sourceType: sourceType,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };
                    this.camera.getPicture(options).then(function (imageData) {
                      _this6.publication.multimedia.push({
                        base: 'data:image/jpg;base64,' + imageData,
                        ext: 'jpg'
                      });

                      _this6.publicationService.publication = _this6.publication;

                      if (_this6.publication.multimedia != null) {
                        //this.publication = new Publication();
                        _this6.multimediaSelected = false;
                        _this6.src = _this6.publication.multimedia[0].base;
                        if (_this6.publication.multimedia[0].ext != 'mp4') _this6.isVideo = false;
                      }
                    }, function (err) {});

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "takeVideo",
        value: function takeVideo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this7 = this;

            var options;
            return regeneratorRuntime.wrap(function _callee9$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    options = {
                      limit: 1
                    };
                    _context10.next = 3;
                    return this.mediaCapture.captureVideo(options).then(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var _this8 = this;

                        return regeneratorRuntime.wrap(function _callee8$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this.base64.encodeFile(data[0].fullPath).then(function (base64File) {
                                  _this8.publication.multimedia.push({
                                    base: base64File,
                                    ext: 'mp4'
                                  });

                                  _this8.publicationService.publication = _this8.publication;

                                  if (_this8.publication.multimedia != null) {
                                    _this8.multimediaSelected = false;
                                    _this8.src = _this8.publication.multimedia[0].base;
                                    if (_this8.publication.multimedia[0].ext != 'mp4') _this8.isVideo = false;else {
                                      _this8.isVideo = true;
                                    } //this.router.navigate(['social/social-publication']);
                                  }
                                }, function (err) {
                                  console.log(err);
                                });

                              case 2:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "pickVideo",
        value: function pickVideo(sourceType) {
          var _this9 = this;

          var options = {
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: sourceType
          };
          this.camera.getPicture(options).then(function (videoUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this10 = this;

              var dirpath;
              return regeneratorRuntime.wrap(function _callee10$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!videoUrl) {
                        _context11.next = 5;
                        break;
                      }

                      dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                      dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                      _context11.next = 5;
                      return this.base64.encodeFile('file://' + videoUrl).then(function (base64File) {
                        _this10.publication.multimedia.push({
                          base: base64File,
                          ext: 'mp4'
                        });

                        _this10.publicationService.publication = _this10.publication;

                        if (_this10.publication.multimedia != null) {
                          _this10.src = _this10.publication.multimedia[0].base;
                          if (_this10.publication.multimedia[0].ext != 'mp4') _this10.isVideo = false;else {
                            _this10.isVideo = true;
                          }
                          _this10.multimediaSelected = false;
                        }
                      }, function (err) {
                        console.log(err);
                      });

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee10, this);
            }));
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "updatePublications",
        value: function updatePublications() {
          this.publicationService.updatePublications();
        }
      }, {
        key: "showData",
        value: function showData() {
          console.log(this.typePublication);
        }
      }, {
        key: "publications",
        value: function publications() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this11 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee11$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Type Publication",
                      buttons: [{
                        text: 'Hospedaje',
                        handler: function handler() {
                          _this11.router.navigate(['social/social-publication/lodging']);
                        }
                      }, {
                        text: 'Evento',
                        handler: function handler() {
                          _this11.takeVideo();
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context12.sent;
                    _context12.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return PublicationPage;
    }();

    PublicationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_4__["MediaCapture"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"]
      }, {
        type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"]
      }];
    };

    PublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publication',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./publication.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/publication/publication.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./publication.page.scss */
      "./src/app/Pages/Social/publication/publication.page.scss"))["default"]]
    })], PublicationPage);
    /***/
  }
}]);
//# sourceMappingURL=Pages-Social-publication-publication-module-es5.js.map