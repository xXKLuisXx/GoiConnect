function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-Profesional-business-business-module~Principal-Profesional-profesional-home-profesiona~b58ccb71"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/business/business.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/business/business.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfesionalBusinessBusinessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content [scrollEvents]= \"true\" (ionScroll)=\"didScroll($event)\">\r\n  <br>\r\n<ion-toolbar>\r\n\r\n    <ion-button ion-button slot=\"end\" shape=\"round\" color=\"dark\" routerLink=\"/createcamp\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-button>\r\n\r\n  <div style=\"background-color: black; float: left; width: 170px; height: 35px; border-bottom-right-radius: 35px; border-top-right-radius: 35px; text-align:center; padding-top: 8px;\">\r\n    <ion-text color=\"light\" style=\"font-size: 18px;\">Crowdfunding</ion-text>\r\n  </div>\r\n</ion-toolbar>\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let item of feed\" color=\"primary\" style=\"margin-left: -10px; width:105%\" routerLink=\"/description\">\r\n\r\n      <ion-card-content>\r\n        <div>\r\n          <div style=\"float: left;\">\r\n            <h2><b> {{ item.title }}</b></h2>\r\n          </div>\r\n          <div style=\"float: right; margin-top: -7px\">\r\n              <p>user: {{ item.user }}</p>\r\n              <p> 20/10/2020</p>\r\n          </div>\r\n        </div>\r\n        <br><br>\r\n        <div>\r\n          <div *ngIf=\"item.src\">\r\n            <video #player playsinline controls preload=\"auto\">\r\n              <source [src]=\"item.src\" type=\"video/mp4\"/>\r\n            </video>\r\n            <div style=\"float: right; margin-right: 10px; width:50%;\">\r\n              <ion-text style=\"text-align:justify;\">\r\n                <p>\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                </p>\r\n              </ion-text>\r\n              <br>\r\n              <p>Meta: $35000.00</p>\r\n              <ion-progress-bar value=\"0.7\" style=\"width: 96%; height: 25px; border-radius: 35px; --progress-background: #8dc63f; --background: #555555; margin-bottom: 30px;\"></ion-progress-bar>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <br><br>\r\n  </ion-list>\r\n  <div class=\"sticky-video\" #stickyplayer [hidden]=\"!stickyVideo\">\r\n    <div class=\"sticky-controls\" *ngIf=\"stickyVideo\">\r\n      <ion-row class=\"ion-no-padding\">\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"closeSticky()\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"playOrPauseSticky()\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" [name]=\"stickyPlaying ? 'pause' : 'play'\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-button size=\"small\" (click)=\"openFullscreen(stickyVideo)\" color=\"light\" fill=\"clear\">\r\n            <ion-icon slot=\"icon-only\" name=\"easel\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/business/business.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/Profesional/business/business.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfesionalBusinessBusinessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "video {\n  width: 40%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.bar {\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  transform: translate(0%, -100%);\n}\n\n.sticky-video {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 40px;\n  left: 10%;\n  width: 250px;\n  height: 150px;\n}\n\n.sticky-video video {\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);\n}\n\n.sticky-controls {\n  position: absolute;\n  top: 0px;\n  z-index: 2;\n  widows: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvUHJvZmVzaW9uYWwvYnVzaW5lc3MvQzpcXFVzZXJzXFxlcmVrX1xcRG9jdW1lbnRzXFxHaXRIdWJcXEdvaUNvbm5lY3RQcm9qXFxHb2lDb25uZWN0L3NyY1xcYXBwXFxQYWdlc1xcUHJvZmVzaW9uYWxcXGJ1c2luZXNzXFxidXNpbmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL1Byb2Zlc2lvbmFsL2J1c2luZXNzL2J1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvUHJvZmVzaW9uYWwvYnVzaW5lc3MvYnVzaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJhciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTEwMCUpO1xyXG59XHJcblxyXG4uc3RpY2t5LXZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgIHZpZGVvIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGlja3ktY29udHJvbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkb3dzOiAxMDAlO1xyXG59XHJcbiIsInZpZGVvIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJhciB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMTAwJSk7XG59XG5cbi5zdGlja3ktdmlkZW8ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDQwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnN0aWNreS12aWRlbyB2aWRlbyB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLnN0aWNreS1jb250cm9scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIHdpZG93czogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Pages/Profesional/business/business.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Pages/Profesional/business/business.page.ts ***!
    \*************************************************************/

  /*! exports provided: BusinessPage */

  /***/
  function srcAppPagesProfesionalBusinessBusinessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessPage", function () {
      return BusinessPage;
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


    var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../assets/feed.json */
    "./src/assets/feed.json");

    var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./../../../../assets/feed.json */
    "./src/assets/feed.json", 1);

    var BusinessPage = /*#__PURE__*/function () {
      function BusinessPage(renderer) {
        _classCallCheck(this, BusinessPage);

        this.renderer = renderer;
        this.feed = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__;
        this.currentPlaying = null;
        this.stickyVideo = null;
        this.stickyPlaying = false;
      }

      _createClass(BusinessPage, [{
        key: "didScroll",
        value: function didScroll() {
          var _this = this;

          if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)) {
            return;
          } else if (this.currentPlaying && !this.isElementInViewport(this.currentPlaying)) {
            // Item is out of view, pause it
            this.currentPlaying.pause();
            this.currentPlaying = null;
          }

          this.videoPlayers.forEach(function (player) {
            console.log('player: ', player);

            if (_this.currentPlaying) {
              return;
            }

            var nativeElement = player.nativeElement;

            var inView = _this.isElementInViewport(nativeElement);

            if (_this.stickyVideo && _this.stickyVideo.src === nativeElement.src) {
              return;
            }

            if (inView) {
              _this.currentPlaying = nativeElement;
              _this.currentPlaying.muted = true;

              _this.currentPlaying.play();
            }
          });
        }
      }, {
        key: "openFullscreen",
        value: function openFullscreen(elem) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitEnterFullscreen) {
            elem.webkitEnterFullscreen();
            elem.enterFullscreen();
          }
        }
      }, {
        key: "isElementInViewport",
        value: function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }, {
        key: "playOnSide",
        value: function playOnSide(elem) {
          if (this.stickyVideo) {
            this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
          }

          this.stickyVideo = elem.cloneNode(true);
          this.renderer.appendChild(this.stickyPlayer.nativeElement, this.stickyVideo);

          if (this.currentPlaying) {
            var playPosition = this.currentPlaying.currentTime;
            this.currentPlaying.pause();
            this.currentPlaying = null;
            this.stickyVideo.currentTime = playPosition;
          }

          this.stickyVideo.muted = false;
          this.stickyVideo.play();
          this.stickyPlaying = true;
        }
      }, {
        key: "closeSticky",
        value: function closeSticky() {
          if (this.stickyVideo) {
            this.renderer.removeChild(this.stickyPlayer.nativeElement, this.stickyVideo);
            this.stickyVideo = null;
            this.stickyPlaying = false;
          }
        }
      }, {
        key: "playOrPauseSticky",
        value: function playOrPauseSticky() {
          if (this.stickyPlaying) {
            this.stickyVideo.pause();
            this.stickyPlaying = false;
          } else {
            this.stickyVideo.play();
            this.stickyPlaying = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BusinessPage;
    }();

    BusinessPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('player')], BusinessPage.prototype, "videoPlayers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyplayer', {
      "static": false
    })], BusinessPage.prototype, "stickyPlayer", void 0);
    BusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-business',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./business.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/Profesional/business/business.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./business.page.scss */
      "./src/app/Pages/Profesional/business/business.page.scss"))["default"]]
    })], BusinessPage);
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
//# sourceMappingURL=default~Pages-Profesional-business-business-module~Principal-Profesional-profesional-home-profesiona~b58ccb71-es5.js.map