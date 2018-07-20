webpackJsonp([1],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]
            ]
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from '@ionic-native/network';
 *
 * constructor(private network: Network) { }
 *
 * ...
 *
 * // watch network for a disconnect
 * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = this.network.onConnect().subscribe(() => {
 *   console.log('network connected!');
 *   // We just got a connection but we need to wait briefly
 *
   // before we determine the connection type. Might need to wait.
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (this.network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    Network.prototype.onchange = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(this.onConnect(), this.onDisconnect());
    };
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    Network.prototype.onDisconnect = function () {
        return;
    };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    Network.prototype.onConnect = function () {
        return;
    };
    Network.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    Network.ctorParameters = function () { return []; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
        __metadata("design:type", String)
    ], Network.prototype, "type", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaProperty */],
        __metadata("design:type", String)
    ], Network.prototype, "downlinkMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onchange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'offline'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onDisconnect", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            eventObservable: true,
            event: 'online'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], Network.prototype, "onConnect", null);
    Network = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* Plugin */])({
            pluginName: 'Network',
            plugin: 'cordova-plugin-network-information',
            pluginRef: 'navigator.connection',
            repo: 'https://github.com/apache/cordova-plugin-network-information',
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
        })
    ], Network);
    return Network;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, eventProv, cache, net) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProv = eventProv;
        this.cache = cache;
        this.net = net;
        this.initView();
    }
    EventsPage.prototype.initView = function () {
        this.initEvents();
    };
    EventsPage.prototype.initEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var evCached, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.itemExists('events')];
                    case 1:
                        evCached = _a.sent();
                        data = [];
                        console.log(this.net);
                        this.eventProv.getEvents()
                            .then(function (res) {
                            _this.events = res;
                            _this.cache.saveItem('events', _this.events);
                            console.log('Con Conexión');
                        })
                            .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('Sin Conexión');
                                        if (!evCached) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.cache.getItem('events')];
                                    case 1:
                                        data = _a.sent();
                                        this.events = data;
                                        console.log('Está cacheada');
                                        return [3 /*break*/, 3];
                                    case 2:
                                        console.log('No está cacheada');
                                        this.events = data;
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\pages\events\events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let ev of events">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title color="primary">\n            {{ev.title}}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Día: {{ev.date}}</p>\n          <p>Lugar: {{ev.location}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\Pruebas\ionic3App\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=1.js.map