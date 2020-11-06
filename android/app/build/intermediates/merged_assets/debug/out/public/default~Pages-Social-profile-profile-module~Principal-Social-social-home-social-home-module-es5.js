function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Social-profile-profile-module~Principal-Social-social-home-social-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/profile/profile.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/profile/profile.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSocialProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content color=\"dark\">\r\n  <ion-card style=\"height: 30%;\">\r\n\r\n    <ion-button class=\"btnAdd\">\r\n      <ion-icon name=\"add-outline\" slot=\"start\" size=\"small\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <img src=\"https://joyvacationsclub.com/wp-content/uploads/2019/07/NY-1140x530.jpg\" width=\"120%\" height=\"100%\">\r\n\r\n  </ion-card>\r\n\r\n  <div class=\"itempic\" color=\"primary\">\r\n    <img src=\"https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg\" width=\"100%\" height=\"100%\" style=\"border-radius: 50%;\">\r\n  </div>\r\n\r\n  <div class=\"name\">\r\n    <ion-text color=\"light\">\r\n      <h1>Nombre Apellido</h1>\r\n    </ion-text>\r\n    <p>Hola soy NOMBRE</p>\r\n  </div>\r\n  \r\n  <div class=\"btnsProfile\">\r\n    <ion-button class=\"btnSocial\">Social</ion-button>\r\n  \r\n    <ion-button class=\"btnProf\">\r\n      <ion-text color=\"light\">\r\n        Profesional\r\n      </ion-text>\r\n    </ion-button>\r\n  </div>\r\n        <br><br>\r\n\r\n    <!--><ion-fab-button (click)=\"takePhoto()\" vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-icon name=\"camera\"></ion-icon>\r\n  </ion-fab-button> <-->\r\n\r\n  <img *ngIf=\"myphoto\" src=\"myphoto\">\r\n  \r\n    <ion-card style=\"width:98%;\" color=\"dark\">\r\n      <ion-item class=\"itemHead\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg\">\r\n        </ion-avatar>\r\n        <ion-label color=\"light\">\r\n          <h3>John Doe</h3>\r\n          <p>Dec 10, 2019</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <img src=\"https://www.tasteofhome.com/wp-content/uploads/2020/02/young-happy-family-talking-while-having-lunch-GettyImages-1132278686.jpg\" alt=\"ion\">\r\n      <ion-card-header>\r\n        <ion-card-title>Hotel Panama Garden</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.\r\n      </ion-card-content>\r\n      <ion-footer>\r\n        <ion-row>\r\n          <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\r\n        </ion-row>\r\n      </ion-footer>\r\n    </ion-card>\r\n</ion-content>\r\n";
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
  "./src/app/Pages/Social/profile/profile.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/Pages/Social/profile/profile.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSocialProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".itempic {\n  width: 48%;\n  height: 167px !important;\n  max-width: 300px !important;\n  max-height: 167px !important;\n  position: absolute;\n  text-align: center;\n  margin-left: 25%;\n  border-radius: 50%;\n  border: 5px solid;\n  margin-top: -95px;\n  border-color: #4E776F !important;\n}\n\n.name {\n  margin-top: 90px;\n  text-align: center;\n}\n\n.itemHead {\n  --ion-background-color: black;\n}\n\n.btnSocial {\n  --background: #4E776F !important;\n  width: 45%;\n}\n\n.btnProf {\n  --background: #858080 !important;\n  width: 45%;\n}\n\n.btnsProfile {\n  text-align: center;\n}\n\n.btnAdd {\n  --border-radius: 60%;\n  --background: #37564f !important;\n  position: absolute;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvU29jaWFsL3Byb2ZpbGUvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQYWdlc1xcU29jaWFsXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvU29jaWFsL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9Tb2NpYWwvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcGljIHtcclxuICAgIHdpZHRoOiAgNDglO1xyXG4gICAgaGVpZ2h0IDogMTY3cHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcclxuICAgIG1heC1oZWlnaHQ6IDE2N3B4ICFpbXBvcnRhbnQ7IC8vYW55IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLXRvcDogLTk1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICM0RTc3NkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1IZWFke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG5Tb2NpYWwge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEU3NzZGICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uYnRuUHJvZiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4NTgwODAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5idG5zUHJvZmlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5BZGQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA2MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzNzU2NGYgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5pdGVtcGljIHtcbiAgd2lkdGg6IDQ4JTtcbiAgaGVpZ2h0OiAxNjdweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE2N3B4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAtOTVweDtcbiAgYm9yZGVyLWNvbG9yOiAjNEU3NzZGICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lIHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbUhlYWQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmJ0blNvY2lhbCB7XG4gIC0tYmFja2dyb3VuZDogIzRFNzc2RiAhaW1wb3J0YW50O1xuICB3aWR0aDogNDUlO1xufVxuXG4uYnRuUHJvZiB7XG4gIC0tYmFja2dyb3VuZDogIzg1ODA4MCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDUlO1xufVxuXG4uYnRuc1Byb2ZpbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG5BZGQge1xuICAtLWJvcmRlci1yYWRpdXM6IDYwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzc1NjRmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/Social/profile/profile.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/Pages/Social/profile/profile.page.ts ***!
    \******************************************************/

  /*! exports provided: ProfilePage, VirtualScrollPageComponent */

  /***/
  function srcAppPagesSocialProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollPageComponent", function () {
      return VirtualScrollPageComponent;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_publication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/publication.service */
    "./src/app/services/publication.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(camera, publicationService) {
        _classCallCheck(this, ProfilePage);

        this.camera = camera;
        this.publicationService = publicationService;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPublications",
        value: function getPublications() {
          var _this = this;

          this.publicationService.getPublications(this.token).subscribe(function (Response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(Response);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }, function (Errors) {
            console.log(Errors);
          }, function () {});
        }
      }, {
        key: "takePhoto",
        value: function takePhoto() {
          var _this2 = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this2.myphoto = 'data:image/jpeg;base64,' + imageData;
          }, function (err) {// Handle error
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _services_publication_service__WEBPACK_IMPORTED_MODULE_3__["PublicationService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Social/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/Pages/Social/profile/profile.page.scss"))["default"]]
    })], ProfilePage); // SCORLL

    var VirtualScrollPageComponent = function VirtualScrollPageComponent() {
      _classCallCheck(this, VirtualScrollPageComponent);

      this.items = [];

      for (var i = 0; i < 1000; i++) {
        this.items.push({
          name: i + ' - ' + images[rotateImg],
          imgSrc: getImgSrc(),
          avatarSrc: getImgSrc(),
          imgHeight: Math.floor(Math.random() * 50 + 150),
          content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
        });
        rotateImg++;

        if (rotateImg === images.length) {
          rotateImg = 0;
        }
      }
    };

    var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    var images = ['bandit', 'batmobile', 'blues-brothers', 'bueller', 'delorean', 'eleanor', 'general-lee', 'ghostbusters', 'knight-rider', 'mirth-mobile'];

    function getImgSrc() {
      var src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
      rotateImg++;

      if (rotateImg === images.length) {
        rotateImg = 0;
      }

      return src;
    }

    var rotateImg = 0;
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
          var _this3 = this;

          if (!tokenRequired) this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);else {
            this.HEADERS.forEach(function (Header) {
              if (Header[0] === "Authorization") {
                if (token != null) {
                  _this3.headers = _this3.headers.set(Header[0], token);
                }
              } else {
                _this3.headers = _this3.headers.set(Header[0], Header[1]);
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
//# sourceMappingURL=default~Pages-Social-profile-profile-module~Principal-Social-social-home-social-home-module-es5.js.map