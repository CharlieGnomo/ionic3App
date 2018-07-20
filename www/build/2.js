webpackJsonp([2],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersPageModule", function() { return SlidersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliders__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SlidersPageModule = /** @class */ (function () {
    function SlidersPageModule() {
    }
    SlidersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sliders__["a" /* SlidersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sliders__["a" /* SlidersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SlidersPageModule);
    return SlidersPageModule;
}());

//# sourceMappingURL=sliders.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SlidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidersPage = /** @class */ (function () {
    function SlidersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initView();
    }
    SlidersPage.prototype.initView = function () {
        this.initSlides();
    };
    SlidersPage.prototype.initSlides = function () {
        this.slides = [
            { title: 'Slide 1', content: 'Este es el slide 1', color: 'red' },
            { title: 'Slide 2', content: 'Este es el slide 2', color: 'blue' },
            { title: 'Slide 3', content: 'Este es el slide 3', color: 'green' },
            { title: 'Slide 4', content: 'Este es el slide 4', color: 'yellow' },
        ];
    };
    SlidersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sliders',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\ionic3App\src\pages\sliders\sliders.html"*/'<!--\n  Generated template for the SlidersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true">\n      <button ion-button start menuToggle><ion-icon name="menu"></ion-icon></button>\n      <ion-title>\n       Sliders\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n  <ion-slides pager>\n      <slider-comp *ngFor="let slide of slides" [slide]="slide"></slider-comp>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\ionic3App\src\pages\sliders\sliders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SlidersPage);
    return SlidersPage;
}());

//# sourceMappingURL=sliders.js.map

/***/ })

});
//# sourceMappingURL=2.js.map