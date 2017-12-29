webpackJsonp(["member.module"],{

/***/ "../../../../../src/app/member/member-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_member_component__ = __webpack_require__("../../../../../src/app/member/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report_component__ = __webpack_require__("../../../../../src/app/member/report/report.component.ts");
//
//
// File name : member-routing.module.ts
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




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__member_member_component__["a" /* MemberComponent */] },
    { path: 'report/:id', component: __WEBPACK_IMPORTED_MODULE_3__report_report_component__["a" /* ReportComponent */] }
];
var MemberRoutingModule = (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/member/member.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberModule", function() { return MemberModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_module__ = __webpack_require__("../../../../../src/app/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_routing_module__ = __webpack_require__("../../../../../src/app/member/member-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_member_component__ = __webpack_require__("../../../../../src/app/member/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_report_service__ = __webpack_require__("../../../../../src/app/member/service/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_report_component__ = __webpack_require__("../../../../../src/app/member/report/report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//
//
// File name : member.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//







var MemberModule = (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__member_routing_module__["a" /* MemberRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__share_module__["a" /* ShareModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__member_member_component__["a" /* MemberComponent */], __WEBPACK_IMPORTED_MODULE_6__report_report_component__["a" /* ReportComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_report_service__["a" /* ReportService */]]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ }),

/***/ "../../../../../src/app/member/member/member.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  display:blcok;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n\n.container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  margin-top: 15px;\n  min-width: 300px;\n}\n\n.card:hover {\n  cursor: pointer;\n}\n\n.card-header {\n  min-height: 50px;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.avatar-text {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: #eee;\n  \n  text-align: center;\n  line-height: 50px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.avatar-small-text {\n    \n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    background: #eee;\n    \n    text-align: center;\n    line-height: 30px;\n    font-size: 16px;\n    font-weight: bold;\n    \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"loading\" class=\"center\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"!loading\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" fxLayoutWrap>\n    <mat-card fxFlex=\"25%\"  [ngStyle.gt-md]=\"{'max-width': 'calc(25% - 20px)'}\"  *ngFor=\"let report of reports\" class=\"card\" (click)=\"onClick(report)\">\n      <mat-card-header fxLayout = \"row\" fxLayoutAlign=\"start\" class=\"card-header\" fxLayoutGap=\"10px\">\n        <div class=\"avatar-text\">\n          {{report.master.charAt(0)}}\n        </div>\n        <div fxFlex= \"70%\">{{report.title}}</div>\n      </mat-card-header>      \n      <img mat-card-image alt=\"report image\" src=\"{{report.image}}\"/>\n      <mat-card-content fxLayout=\"column\">\n        {{ report.report.slice(0, 50) + '...'}}        \n      </mat-card-content>\n      <mat-card-footer>\n        {{report.master}}        \n      </mat-card-footer>\n    </mat-card>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/member/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_report_service__ = __webpack_require__("../../../../../src/app/member/service/report.service.ts");
//
//
// File name : member.component.ts
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberComponent = (function () {
    function MemberComponent(reportService, router) {
        this.reportService = reportService;
        this.router = router;
        this.loading = false;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.reportService.getReports()
            .subscribe(function (res) {
            _this.reports = res;
            console.log(res);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    MemberComponent.prototype.onClick = function (report) {
        this.router.navigate(['/member/report/', report.id]);
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member',
            template: __webpack_require__("../../../../../src/app/member/member/member.component.html"),
            styles: [__webpack_require__("../../../../../src/app/member/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member/report/report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 700px;\n  margin-right: auto;\n  margin-left: auto;\n\n}\n\nheader {\n  margin: 10px auto;\n  text-align: center;\n}\n\nsection {\n  margin-top: 50px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.image {\n  display:block;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  box-sizing: border-box;\n}\n\n\n.title {\n  font-size: 20px;\n  font-weight: 800;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <header class=\"center\"><h3>{{report.master}}</h3></header>\n\n  <section>\n    <img alt=\"report image\" src=\"{{report.image}}\" class=\"image\"/>\n  </section>\n\n  <section>\n    <div class=\"title\">{{ report.title }}</div>\n    <p>{{report.report}}</p>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/member/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_report_service__ = __webpack_require__("../../../../../src/app/member/service/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = (function () {
    function ReportComponent(route, reportService) {
        this.route = route;
        this.reportService = reportService;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var id = +params['id'];
            _this.report = _this.reportService.getReport(id);
            console.log(_this.report);
        });
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/member/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/member/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_report_service__["a" /* ReportService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member/service/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
//
//
// File name : report.service.ts
// Created by: Jerry Hsieh @ 2017-12-28
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    function ReportService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
        this.reports = [];
        this.getReports();
    }
    ReportService.prototype.getReportsFromServer = function () {
        return this.http.get(this.appConfig.apiUrl + '/report');
    };
    ReportService.prototype.getReports = function () {
        var _this = this;
        if (this.reports.length === 0) {
            return this.getReportsFromServer()
                .map(function (res) {
                _this.reports = res;
                return res;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(this.reports);
        }
    };
    ReportService.prototype.getReport = function (id) {
        return this.reports.filter(function (rpt) { return rpt.id === id; })[0];
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ReportService);
    return ReportService;
}());



/***/ })

});
//# sourceMappingURL=member.module.chunk.js.map