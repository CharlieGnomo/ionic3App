webpackJsonp([3],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form__["a" /* FormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__form__["a" /* FormPage */]),
            ],
        })
    ], FormPageModule);
    return FormPageModule;
}());

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
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
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormPage = /** @class */ (function () {
    function FormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initView();
    }
    FormPage.prototype.initView = function () {
        this.initForm();
    };
    FormPage.prototype.initForm = function () {
        this.form = {
            username: '',
            password: '',
            telefono: '',
            intereses: {
                futbol: false,
                musica: false,
                leer: false
            },
            tipo_via: ''
        };
        this.typePasswd = 'password';
    };
    FormPage.prototype.enviarForm = function () {
        console.log('Enviado', this.form);
    };
    FormPage.prototype.showPass = function () {
        this.typePasswd = this.typePasswd === 'password' ? 'text' : 'password';
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"C:\Users\carlos.lopez.BABEL-SI\Documents\ionic3App\src\pages\form\form.html"*/'<!--\n  Generated template for the FormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Formulario de ejemplo</h2>\n  <form (ngSubmit)="enviarForm()" ion-row>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="form.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item col-11>\n      <ion-label>Password</ion-label>\n      <ion-input [type]="typePasswd" [(ngModel)]="form.password" name="password"></ion-input>\n    </ion-item>\n    <ion-icon col-1 name="eye" (click)="showPass()"></ion-icon>\n    <ion-item>\n      <ion-label>Teléfono</ion-label>\n      <ion-input type="tel" [(ngModel)]="form.telefono" name="telefono"></ion-input>\n    </ion-item>\n    <p>Intereses</p>\n    <ion-item>\n      <ion-label>Fútbol</ion-label>\n      <ion-checkbox [(ngModel)]="form.intereses.futbol" name="futbol"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Música</ion-label>\n      <ion-checkbox [(ngModel)]="form.intereses.musica" name="musica"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Leer</ion-label>\n      <ion-checkbox [(ngModel)]="form.intereses.leer" name="leer"></ion-checkbox>\n    </ion-item>\n    <p>Tipo de Vía</p>\n    <ion-segment [(ngModel)]="form.tipo_via" color="secondary" name="tipo_via">\n      <ion-segment-button value="calle">\n        Calle\n      </ion-segment-button>\n      <ion-segment-button value="travesia">\n        Travesía\n      </ion-segment-button>\n      <ion-segment-button value="avenida">\n        Avenida\n      </ion-segment-button>\n    </ion-segment>\n    <button ion-button type="submit" block>Enviar</button>\n  </form>\n  <hr>\n  <pre>{{form | json}}</pre>\n</ion-content>\n'/*ion-inline-end:"C:\Users\carlos.lopez.BABEL-SI\Documents\ionic3App\src\pages\form\form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ })

});
//# sourceMappingURL=3.js.map