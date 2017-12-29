webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container {\n  height: 400px;\n  background: url(https://images.pexels.com/photos/731658/pexels-photo-731658.jpeg?w=940&h=650&auto=compress&cs=tinysrgb) no-repeat center bottom;\n  background-position: cover;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n}\n\n.container:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    height: 100vh;\n}\n\n.login-card {\n  max-width: 350px;\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);  \n}\n.title {\n  text-align: center;\n}\n\n.btn-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <mat-card fxFlex class=\"login-card\">\n    <mat-card-title class=\"title\">登入</mat-card-title>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\" novalidate>            \n      <mat-card-content>\n        <mat-form-field>\n          <input matInput placeholder=\"使用者名稱\" formControlName=\"username\" required>\n          <div *ngIf=\"username.invalid && (username.dirty && username.touched)\">\n            <mat-error *ngIf=\"username.errors.required\">請輸入使用者名稱</mat-error>\n            <mat-error *ngIf=\"username.errors.pattern\">請輸入至少五個字母，數字</mat-error>            \n          </div>\n        </mat-form-field>\n        \n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"密碼\" formControlName=\"password\" required>\n          <div *ngIf=\"password.invalid && (password.dirty && password.touched)\">\n            <mat-error *ngIf=\"password.errors.required\">請輸入密碼</mat-error>\n            <mat-error *ngIf=\"password.errors.pattern\">請輸入至少五個字母，數字</mat-error>                        \n          </div>          \n        </mat-form-field>\n\n        <div>\n          <mat-checkbox formControlName=\"rememberMe\" class=\"chk\">記得我</mat-checkbox>\n        </div>\n        \n      </mat-card-content>\n\n      <mat-card-actions class=\"btn-center\">\n        <button mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">登入</button>\n        <button mat-raised-button type=\"cancel\">取消</button>                      \n      </mat-card-actions>\n    </form>                  \n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/users/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//
//
// File name : login.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//




var LoginComponent = (function () {
    function LoginComponent(route, router, fb, userService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('^[a-zA-Z0-9-_]{5,20}')],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('^[a-zA-Z0-9-_]{5,20}')],
            rememberMe: [true]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.form.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "rememberMe", {
        get: function () { return this.form.get('rememberMe'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.form.value);
        this.userService.login(this.form.value)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/member']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/users/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//
//
// File name : users-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_module__ = __webpack_require__("../../../../../src/app/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/users/login/login.component.ts");
//
//
// File name : users.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__users_routing_module__["a" /* UsersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__share_module__["a" /* ShareModule */]
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map