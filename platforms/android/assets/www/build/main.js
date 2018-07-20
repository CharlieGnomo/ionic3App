webpackJsonp([7],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		302,
		4
	],
	"../pages/events/events.module": [
		303,
		1
	],
	"../pages/form/form.module": [
		306,
		3
	],
	"../pages/list/list.module": [
		307,
		0
	],
	"../pages/sliders/sliders.module": [
		308,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.initView();
    }
    HomePage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.initView = function () {
        this.initCards();
    };
    HomePage.prototype.initCards = function () {
        this.cards = [
            { title: '1', content: '1' },
            { title: '2', content: '2' },
            { title: '3', content: '3' }
        ];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button start menuToggle><ion-icon name="menu"></ion-icon></button>\n    <ion-title>\n      Ionic 3 App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <card-comp *ngFor="let card of cards" [card]="card"></card-comp>\n  <button ion-button (click)="goToPage(\'SlidersPage\')">{{ \'HOME.btnSliders\' | translate}}</button>\n  <button ion-button (click)="goToPage(\'ListPage\')">{{ \'HOME.btnList\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventProvider = /** @class */ (function () {
    //constructor(private http: HttpClient) {
    function EventProvider() {
        this.URL = '/api';
    }
    EventProvider.prototype.getEvents = function () {
        return Promise.resolve([
            { title: 'Event 1', date: '01-01-2019', location: 'C/ del Uno' },
            { title: 'Event 2', date: '02-01-2019', location: 'C/ del Dos' },
            { title: 'Event 3', date: '03-01-2019', location: 'C/ del Tres' },
            { title: 'Event 4', date: '04-01-2019', location: 'C/ del Cuatro' },
            { title: 'Event 5', date: '05-01-2019', location: 'C/ del Cinco' },
            { title: 'Event 6', date: '06-01-2019', location: 'C/ del Seis' },
        ]);
        /* return Promise.resolve([
          { title: 'Event 1', date: '01-01-2019', location: 'C/ del Uno' },
          { title: 'Event 2', date: '02-01-2019', location: 'C/ del Dos' },
          { title: 'Event 3', date: '03-01-2019', location: 'C/ del Tres' },
          { title: 'Event 4', date: '04-01-2019', location: 'C/ del Cuatro' },
          { title: 'Event 5', date: '05-01-2019', location: 'C/ del Cinco' },
          { title: 'Event 6', date: '06-01-2019', location: 'C/ del Seis' },
        ]); */
        /* return this.http.get(this.URL).toPromise(); */
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_comp_card_comp__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_comp_slider_comp__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_comp_item_comp__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__card_comp_card_comp__["a" /* CardCompComponent */],
                __WEBPACK_IMPORTED_MODULE_2__slider_comp_slider_comp__["a" /* SliderCompComponent */],
                __WEBPACK_IMPORTED_MODULE_4__item_comp_item_comp__["a" /* ItemCompComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["b" /* TranslateModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__card_comp_card_comp__["a" /* CardCompComponent */],
                __WEBPACK_IMPORTED_MODULE_2__slider_comp_slider_comp__["a" /* SliderCompComponent */],
                __WEBPACK_IMPORTED_MODULE_4__item_comp_item_comp__["a" /* ItemCompComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_cache__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_event_event__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_common_http__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '../assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/form.module#FormPageModule', name: 'FormPage', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sliders/sliders.module#SlidersPageModule', name: 'SlidersPage', segment: 'sliders', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_12__node_modules_angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_event_event__["a" /* EventProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardCompComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CardCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CardCompComponent = /** @class */ (function () {
    function CardCompComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CardCompComponent.prototype, "card", void 0);
    CardCompComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'card-comp',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\card-comp\card-comp.html"*/'<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{ \'COMP.CARD.title\' | translate}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    {{ \'COMP.CARD.content\' | translate}}\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\card-comp\card-comp.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardCompComponent);
    return CardCompComponent;
}());

//# sourceMappingURL=card-comp.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderCompComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the SliderCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SliderCompComponent = /** @class */ (function () {
    function SliderCompComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SliderCompComponent.prototype, "slide", void 0);
    SliderCompComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slider-comp',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\slider-comp\slider-comp.html"*/'<ion-slide [style.backgroundColor]="slide.color">\n  <ion-img src="./../../assets/imgs/logo.png"></ion-img>\n  <h2>{{slide.title}}</h2>\n  <p>{{slide.content}}</p>\n</ion-slide>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\slider-comp\slider-comp.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SliderCompComponent);
    return SliderCompComponent;
}());

//# sourceMappingURL=slider-comp.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCompComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ItemCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ItemCompComponent = /** @class */ (function () {
    function ItemCompComponent() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ItemCompComponent.prototype.saveE = function () {
        this.save.emit(this.item);
    };
    ItemCompComponent.prototype.deleteE = function () {
        this.delete.emit(this.item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemCompComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ItemCompComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ItemCompComponent.prototype, "delete", void 0);
    ItemCompComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'item-comp',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\item-comp\item-comp.html"*/'<ion-item-sliding>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.img">\n      </ion-avatar>\n      <h2>{{item.title}}</h2>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="deleteE()">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n      <button ion-button color="secondary" (click)="saveE()">\n        <ion-icon name="checkmark"></ion-icon>\n        Save\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\components\item-comp\item-comp.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ItemCompComponent);
    return ItemCompComponent;
}());

//# sourceMappingURL=item-comp.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, cache, translate) {
        var _this = this;
        this.cache = cache;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.configCache();
            _this.configTranslations();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToPage = function (page) {
        if (page === 'HomePage') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.setRoot(page);
        }
    };
    MyApp.prototype.configTranslations = function () {
        this.translate.setDefaultLang('es');
        this.translate.use('es');
    };
    MyApp.prototype.setLang = function (_a) {
        var _value = _a._value;
        if (_value != this.translate.currentLang) {
            this.translate.use(_value);
        }
    };
    MyApp.prototype.configCache = function () {
        this.cache.setDefaultTTL(60 * 60);
        this.cache.setOfflineInvalidate(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{\'MENU.title\' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="goToPage(\'HomePage\')">\n          {{\'MENU.LIST.home\' | translate}}\n      </button>\n      <button menuClose ion-item (click)="goToPage(\'SlidersPage\')">\n          {{\'MENU.LIST.sliders\' | translate}}\n      </button>\n      <button menuClose ion-item (click)="goToPage(\'ListPage\')">\n          {{\'MENU.LIST.list\' | translate}}\n      </button>\n      <button menuClose ion-item (click)="goToPage(\'FormPage\')">\n          {{\'MENU.LIST.form\' | translate}}\n      </button>\n      <button menuClose ion-item (click)="goToPage(\'EventsPage\')">\n          {{\'MENU.LIST.events\' | translate}}\n      </button>\n    </ion-list>\n    <ion-segment (ionChange)="setLang($event)" color="primary">\n      <ion-segment-button value="es">\n        es\n      </ion-segment-button>\n      <ion-segment-button value="en">\n        en\n      </ion-segment-button>\n      <ion-segment-button value="fr">\n        fr\n      </ion-segment-button>\n    </ion-segment>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map