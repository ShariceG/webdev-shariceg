(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/Models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/Models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/Models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/Models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/Models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget, Heading, Image, YouTube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTube", function() { return YouTube; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Widget = /** @class */ (function () {
    function Widget(_id, name, widgetType, pageId, text) {
        this._id = _id;
        this.name = name;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
    }
    return Widget;
}());

var Heading = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Heading, _super);
    function Heading(_id, name, pageId, size, text) {
        var _this = _super.call(this, _id, name, 'HEADING', pageId, text) || this;
        _this.size = size;
        return _this;
    }
    return Heading;
}(Widget));

var Image = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Image, _super);
    function Image(_id, name, pageId, text, width, url) {
        var _this = _super.call(this, _id, name, 'IMAGE', pageId, text) || this;
        _this.width = width;
        _this.url = url;
        _this.text = text;
        return _this;
    }
    return Image;
}(Widget));

var YouTube = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](YouTube, _super);
    function YouTube(_id, name, pageId, text, width, url) {
        var _this = _super.call(this, _id, name, 'YOUTUBE', pageId, text) || this;
        _this.width = width;
        _this.url = url;
        return _this;
    }
    return YouTube;
}(Widget));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    // export const routing = RouterModule.forRoot(appRoutes)
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        // export const routing = RouterModule.forRoot(appRoutes)
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__["PageListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_14__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__["PageEditComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/page.model.client */ "./src/app/Models/page.model.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.pages = [new _Models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('321', 'Post1', '456', 'Lorem'),
            new _Models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('432', 'Post2', '456', 'Lorem'),
            new _Models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('543', 'Post3', '456', 'Lorem')];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    // createPage(page: Page) {
    //   page._id = Math.random().toString();
    //   this.pages.push(page);
    // }
    PageService.prototype.createPage = function (websiteId, body) {
        return this._http.post(this.baseUrl + 'api/website/' + websiteId + '/page', body);
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findPagesByWebsiteId(websiteId: string) {
    //   const list = [];
    //   for ( let x = 0; x < this.pages.length; x++) {
    //     if (this.pages[x].websiteId === websiteId) {
    //       list.push(this.pages[x]);
    //     }
    //   }
    //   return list;
    // }
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId;
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findPageById(pageId: string) {
    //   for ( let x = 0; x < this.pages.length; x++) {
    //     if (this.pages[x]._id === pageId) {
    //       return this.pages[x];
    //     }
    //   }
    // }
    PageService.prototype.updatePage = function (pageId, body) {
        var url = this.baseUrl + 'api/page/' + pageId;
        return this._http.put(url, body);
    };
    // updatePage(pageId: string, page: Page) {
    //   const newPage = page;
    //   newPage._id = pageId;
    //   for ( let x = 0; x < this.pages.length; x++) {
    //     if (this.pages[x] === page) {
    //       this.pages[x] = newPage;
    //     }
    //   }
    // }
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId;
        return this._http.delete(url)
            .map(function (res) {
            return res;
        });
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/user.model.client */ "./src/app/Models/user.model.client.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserService = /** @class */ (function () {
    function UserService(_http, router) {
        this._http = _http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.users = [new _Models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('123', 'alice', 'alice', 'Alice', 'Wonder', 'a@email.com'),
            new _Models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('234', 'bob', 'bob', 'Bob', 'Marley', 'b@email.com'),
            new _Models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('345', 'charly', 'charly', 'Charly', 'Garcia', 'c@email.com'),
            new _Models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('456', 'jannuzi', 'jannuzi', 'Jose', 'Annuzi', 'j@email.com')
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + 'api/user', body);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + 'api/user/' + userId)
            .map(function (res) {
            return res;
            // return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + 'api/user?username=' + username)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
        console.log(url);
        console.log('HERE');
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.updateUser = function (user, body) {
        var url = this.baseUrl + 'api/user/' + user._id;
        console.log(body);
        return this._http.put(url, body);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + 'api/user/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UserService);
    return UserService;
}());

// createUser(user: User) {
//   user._id = Math.random().toString();
//   this.users.push(user);
//
// }
// findUserById(userId: string) {
//   for ( let x = 0; x < this.users.length; x++) {
//     if (this.users[x]._id === userId) {
//       return this.users[x];
//     }
//   }
// }
//
// findUserByUsername(username: string) {
//   for ( let x = 0; x < this.users.length; x++) {
//     if (this.users[x].username === username) {
//       return this.users[x];
//     }
//   }
// }
//
// findUserByCredentials(username: string, password: string) {
//   for ( let x = 0; x < this.users.length; x++) {
//     if (this.users[x].username === username && this.users[x].password === password) {
//       return this.users[x];
//     }
//   }
// }
// updateUser(userId: string, user: any) {
//   const newUser = user;
//   newUser._id = userId;
//   for ( let x = 0; x < this.users.length; x++) {
//     if (this.users[x] === user) {
//       this.users[x] = newUser;
//     }
//   }
// }
//   deleteUser(userId: string ) {
//     for ( let x = 0; x < this.users.length; x++) {
//       if (this.users[x]._id === userId) {
//         this.users.splice(x, 1);
//       }
//     }
//   }
// }


/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/website.model.client */ "./src/app/Models/website.model.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.websites = [new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Facebook', '456', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('234', 'Tweeter', '456', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Gizmodo', '456', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('890', 'Go', '123', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _Models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('789', 'Chess', '234', 'Lorem')];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    // createWebsite(website: Website) {
    //   website._id = Math.random().toString();
    //   this.websites.push(website);
    // }
    WebsiteService.prototype.createWebsite = function (userId, body_data) {
        var url = this.baseUrl + 'api/user/' + userId + '/website';
        var body = {
            name: body_data.websiteName,
            description: body_data.websiteDescription
        };
        return this._http.post(url, body);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + 'api/user/' + userId + '/website';
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findWebsitesByUser(userId: string) {
    //   const list = [];
    //   for ( let x = 0; x < this.websites.length; x++) {
    //     if (this.websites[x].developerId === userId) {
    //       list.push(this.websites[x]);
    //     }
    //   }
    //   return list;
    // }
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + 'api/website/' + websiteId;
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findWebsiteById(websiteId: string) {
    //   for ( let x = 0; x < this.websites.length; x++) {
    //     if (this.websites[x]._id === websiteId) {
    //       return this.websites[x];
    //     }
    //   }
    // }
    WebsiteService.prototype.updateWebsite = function (websiteId, website_data) {
        var url = this.baseUrl + 'api/website/' + websiteId;
        var body = {
            name: website_data.name,
            description: website_data.description
        };
        return this._http.put(url, body);
    };
    // updateWebsite(websiteId: string, website: any) {
    //   const newWebsite = website;
    //   newWebsite._id = websiteId;
    //   for ( let x = 0; x < this.websites.length; x++) {
    //     if (this.websites[x] === website) {
    //       this.websites[x] = newWebsite;
    //     }
    //   }
    // }
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + 'api/website/' + websiteId;
        console.log('url: ' + url);
        return this._http.delete(url)
            .map(function (res) {
            return res;
        });
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/widget.model.client */ "./src/app/Models/widget.model.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.widgets = [(new _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Heading"]('123', 'Heading 1', '321', 2, 'GIZMODO')),
            (new _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Heading"]('234', 'Heading 2', '321', 4, 'Lorem ipsum')),
            (new _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Image"]('345', 'Shuffle Image', '321', 'A shuffling image', '100%', 'http://lorempixel.com/400/200/')),
            (new _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Heading"]('567', 'Heading 3', '321', 4, 'Lorem ipsum')),
            (new _Models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["YouTube"]('678', 'Boat Video', '321', 'a video about a boat', '100%', 'https://www.youtube.com/embed/AM2Ivdi9c4E'))];
        // widgets = [{'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
        //   {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
        //   {
        //     '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
        //     'url': 'http://lorempixel.com/400/200/'
        //   },
        //   {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
        //   {
        //     '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
        //     'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
        //   }
        // ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, body) {
        var url = 'api/page/' + pageId + '/widget';
        return this._http.post(url, body);
    };
    // createWidget(widget: any) {
    //   widget._id = Math.random().toString();
    //   this.widgets.push(widget);
    // }
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = 'api/page/' + pageId + '/widget';
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findWidgetsByPageId(pageId: string) {
    //   const list = [];
    //   for ( let x = 0; x < this.widgets.length; x++) {
    //     if (this.widgets[x].pageId === pageId) {
    //       list.push(this.widgets[x]);
    //     }
    //   }
    //   return list;
    // }
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = 'api/widget/' + widgetId;
        return this._http.get(url)
            .map(function (res) {
            return res;
        });
    };
    // findWidgetById(widgetId: string) {
    //   for ( let x = 0; x < this.widgets.length; x++) {
    //     if (this.widgets[x]._id === widgetId) {
    //       return this.widgets[x];
    //     }
    //   }
    // }
    WidgetService.prototype.updateWidget = function (widgetId, body) {
        var url = 'api/widget/' + widgetId;
        return this._http.put(url, body);
    };
    // updateWidget(widgetId: string, widget: Widget) {
    //   const newWidget = widget;
    //   newWidget._id = widgetId;
    //   for ( let x = 0; x < this.widgets.length; x++) {
    //     if (this.widgets[x] === widget) {
    //       this.widgets[x] = newWidget;
    //     }
    //   }
    // }
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = 'api/widget/' + widgetId;
        return this._http.delete(url);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"pageList()\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"pageEdit()\">Edit Page</a>\n    </p>\n    <a (click)=\"pageForm.ngSubmit.emit()\" class=\"cl-text-black\">\n      <span class=\"fas fa-check fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit) = \"updatePage()\" #pageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input [(ngModel)]=\"page.description\" type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Page Title\">\n    </div>\n  </form>\n  <button class=\"btn btn-danger btn-block\"\n     (click)=\"deleteSite()\">Delete</button>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-black\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(router, route, pageService) {
        this.router = router;
        this.route = route;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (data) {
            _this.page = data;
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        var body = {
            name: this.page.name,
            description: this.page.description
        };
        console.log(body);
        this.pageService.updatePage(this.pageId, body)
            .subscribe(function (data) {
            _this.page = data;
            _this.pageList();
        });
    };
    PageEditComponent.prototype.deleteSite = function () {
        var _this = this;
        this.pageService.deletePage(this.page._id)
            .subscribe(function (data) {
            var message = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    PageEditComponent.prototype.pageList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.pageEdit = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.page._id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"websiteList()\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"pageList()\">Pages</a>\n    </p>\n    <a (click)=\"newWebsite()\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-plus fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let page of pages\" class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"widgetList(page._id)\">{{page.name}}</a>\n      <a (click)=\"editPage(page._id)\"><span class=\"fas fa-cog fontawsome_icon fa-pull-right\"></span></a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-black\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPagesByWebsiteId(this.websiteId)
            .subscribe(function (data) {
            _this.pages = data;
        });
    };
    PageListComponent.prototype.widgetList = function (id) {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', id, 'widget']);
    };
    PageListComponent.prototype.editPage = function (id) {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', id]);
    };
    PageListComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    PageListComponent.prototype.websiteList = function () {
        this.router.navigate(['/user', this.userId, 'website']);
    };
    PageListComponent.prototype.newWebsite = function () {
        //  ['/user/:uid/website/:wid/page/new']
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.pageList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"pageList()\" class=\"cl-text-black cl-icon-padding\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"newPage()\">New Page</a>\n    </p>\n    <a (click)=\"pageForm.ngSubmit.emit()\" class=\"cl-text-black\">\n      <span class=\"fas fa-check fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <span class=\" form-control alert alert-danger\" *ngIf=\"errorFlag\">\n      {{ errorMessage }}\n    </span>\n  <form (ngSubmit) = \"addPage()\" #pageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pageName\">Name</label>\n      <input type=\"text\"\n             name=\"pageName\"\n             class=\"form-control\"\n             id=\"pageName\"\n             ngModel required pageName=\"NgModel\"\n             placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input type=\"text\"\n             name = \"description\"\n             class=\"form-control\"\n             id=\"description\"\n             ngModel required description=\"ngModel\"\n             placeholder=\"Page Description\">\n    </div>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-black\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(router, route, pageService) {
        this.router = router;
        this.route = route;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMessage = 'Please fill all fields';
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.addPage = function () {
        var _this = this;
        this.pageName = this.pageForm.value.pageName;
        this.pageDescription = this.pageForm.value.description;
        var body = {
            name: this.pageName,
            description: this.pageDescription
        };
        console.log(body);
        if (this.pageName && this.pageDescription) {
            this.pageService.createPage(this.websiteId, body)
                .subscribe(function (data) {
                _this.page = data;
                _this.errorFlag = false;
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }, function (error) {
                console.log('HERE AT ERROR');
                _this.errorFlag = true;
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    PageNewComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    PageNewComponent.prototype.pageList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageNewComponent.prototype.newPage = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- TODO: error message text not appearing!-->\n  <span class=\" form-control alert alert-danger\" *ngIf=\"errorFlag\">\n      {{ errorMessage }}\n    </span>\n\n  <h1>\n    Login\n  </h1>\n  <form (ngSubmit) = \"login()\" #loginForm=\"ngForm\">\n    <input type=\"text\"\n           name = \"username\"\n           class=\"form-control\"\n           ngModel required #username=\"ngModel\"\n           placeholder=\"username\"/>\n    <span class=\" form-control alert alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <input type=\"password\"\n           name = \"password\"\n           class=\"form-control\"\n           ngModel required #password=\"ngModel\"\n           placeholder=\"password\"/>\n    <button class=\"btn btn-primary btn-block\"\n            type = \"submit\"\n       [disabled] = \"!loginForm.valid\">Login</button>\n    <a class=\"btn btn-success btn-block\"\n       [routerLink]=\"['/register']\">Register</a>\n  </form>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.errorMessage = 'Invalid username or password!';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username: ' + this.username, '\npassword: ' + this.password);
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (data) {
            _this.user = data;
            _this.errorFlag = false;
            _this.router.navigate(['/user', _this.user._id]);
        }, function (error) {
            console.log("HERE AT ERROR");
            _this.errorFlag = true;
        });
        // .subscribe(
        //   (data: any) => {
        //     console.log(data);
        //     this.user = data;
        //     this.errorFlag = false;
        //     console.log(this.user._id);
        //     this.router.navigate(['/user', this.user._id]);
        //   },
        //   (error: any) => {
        //     console.log("HERE AT ERROR")
        //     this.errorFlag = true;
        //   }
        // );
        // console.log(this.user);
        // if (this.user.username) {
        //   this.router.navigate(['/user', this.user._id]);
        // } else {
        //   this.errorFlag = true;
        // }
        // const user = this.userService.findUserByCredentials(this.username, this.password);
        // if (user) {
        //   console.log('login success!');
        //   this.errorFlag = false;
        //   this.router.navigate(['/user', user._id ]);
        // } else {
        //   this.errorFlag = true;
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"profile.component.ts\"></script>\n<nav class=\"navbar navbar-dark fixed-top bg-primary cl-text-white\">\n  <div class=\"container-fluid\">\n    <p>\n      <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" (click)=\"profile()\" >\n        Profile\n      </a>\n    </p>\n    <a (click)=\"profileForm.ngSubmit.emit()\" class=\"btn-primary navbar-text \">\n      <span class=\"fas fa-check cl-text-white\"></span>\n    </a>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container\">\n  <form (ngSubmit) = \"updateUser()\" #profileForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"example@email.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstname\" placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n\n  <button class=\"btn btn-primary btn-block\"\n     (click)=\"websites()\" >Websites</button>\n  <button class=\"btn btn-danger  btn-block\"\n     [routerLink]=\"['/login']\">Logout</button>\n</div>\n<br>\n\n\n\n<nav class=\"navbar fixed-bottom navbar-dark bg-primary d-flex flex-row-reverse cl-text-white\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-white\">\n      <span class=\"fas fa-user fontawsome_icon fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: User, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('user id: ' + _this.userId);
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user);
        var body = {
            username: this.user.username,
            email: this.user.email,
            firstName: this.user.firstName,
            lastName: this.user.lastName
        };
        this.userService.updateUser(this.user, body)
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    ProfileComponent.prototype.websites = function () {
        this.router.navigate(['/user', this.user._id, 'website']);
    };
    ProfileComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.user._id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <span class=\" form-control alert alert-danger\" *ngIf=\"errorFlag\">\n      {{ errorMessage }}\n    </span>\n\n  <h1>\n    Register\n  </h1>\n  <form (ngSubmit) = \"register()\" #registerForm=\"ngForm\">\n    <input type=\"text\"\n           name = username\n           class=\"form-control\"\n           ngModel required #username=\"ngModel\"\n           placeholder=\"username\"/>\n    <input type=\"password\"\n           name = \"password\"\n           class=\"form-control\"\n           ngModel required #password=\"ngModel\"\n           placeholder=\"password\"/>\n    <input type=\"password\"\n           name = \"vpass\"\n           class=\"form-control\"\n           ngModel required #vpass=\"ngModel\"\n           placeholder=\"verify password\"/>\n    <button class=\"btn btn-primary btn-block\"\n            type = \"submit\"\n            [disabled] = \"!registerForm.valid\">\n      Register</button>\n\n    <a class=\"btn btn-danger btn-block\"\n       [routerLink]=\"['/login']\">Cancel</a>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.errorMessage = 'Passwords must match!';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpass = this.registerForm.value.vpass;
        if (this.vpass === this.password) {
            this.userService.createUser(this.username, this.password)
                .subscribe(function (data) {
                _this.user = data;
                _this.errorFlag = false;
                _this.router.navigate(['/user', _this.user._id]);
            }, function (error) {
                _this.errorFlag = true;
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark bg-primary mr-auto\">\n  <div class=\"row\">\n    <div class=\"landscape  col-4\">\n      <div class=\"container-fluid\">\n        <p>\n          <a (click)=\"websiteList()\" class=\"navbar-link cl-text-white\">\n            <span class=\"fas fa-chevron-left\"></span>\n          </a>\n          <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" [routerLink]=\"['user/:uid/website/:wid']\" >\n            Websites\n          </a>\n\n          <a (click)=\"newSite()\" class=\"cl-text-white\">\n            <span class=\"fas fa-plus fa-pull-right\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"container-fluid\">\n        <p>\n          <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" [routerLink]=\"['user/:uid/website/:wid']\" >\n            Edit Website\n          </a>\n        </p>\n        <a (click)=\"websiteForm.ngSubmit.emit()\" class=\"cl-text-white\">\n          <span class=\"fas fa-check fa-pull-right\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"landscape col-4\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a (click)=\"editSite(website._id)\"><span class=\"fas fa-cog fontawsome_icon fa-pull-right\"></span></a>\n          <a (click)=\"pageList(website._id)\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n      <form (ngSubmit) = \"updateWebsite()\" #websiteForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input [(ngModel)]=\"website.name\" name=\"websiteName\" type=\"text\" class=\"form-control\" id=\"websiteName\" placeholder=\"Website Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea [(ngModel)]=\"website.description\" name=\"websiteDescription\" id=\"websiteDescription\" class=\"form-control\" rows=\"5\"\n                    placeholder=\"Website Description\"></textarea>\n        </div>\n      </form>\n      <button class=\"btn btn-danger btn-block\"\n              (click)=\"deleteSite()\">Delete</button>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-dark bg-primary d-flex flex-row-reverse cl-text-white\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-white\">\n      <span class=\"fas fa-user fontawsome_icon fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
        // this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (data) {
            _this.website = data;
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        console.log(this.website);
        var body = {
            name: this.website.name,
            description: this.website.description
        };
        console.log(body);
        this.websiteService.updateWebsite(this.websiteId, body)
            .subscribe(function (data) {
            _this.website = data;
            _this.websiteList();
        });
    };
    WebsiteEditComponent.prototype.deleteSite = function () {
        var _this = this;
        console.log(this.websiteId);
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (data) {
            var message = data;
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteEditComponent.prototype.editSite = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id]);
    };
    WebsiteEditComponent.prototype.pageList = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id, 'page']);
    };
    WebsiteEditComponent.prototype.newSite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    WebsiteEditComponent.prototype.websiteList = function () {
        this.router.navigate(['/user', this.userId, 'website']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('websiteForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark bg-primary cl-text-white\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"returnToProfile()\" class=\"navbar-link cl-text-white\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" (click) = \"list()\" >\n        Websites\n      </a>\n    </p>\n    <a (click)=\"newWebsite()\" class=\"cl-text-white\">\n      <span class=\"portrait fas fa-plus fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"editSite(website._id)\"><span class=\"portrait fas fa-cog fontawsome_icon fa-pull-right\"></span></a>\n      <a (click)=\"viewPage(website._id)\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar fixed-bottom navbar-dark bg-primary d-flex flex-row-reverse cl-text-white\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-white\">\n      <span class=\"fas fa-user fontawsome_icon fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
        console.log(this.websites);
    };
    WebsiteListComponent.prototype.newWebsite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.list = function () {
        this.router.navigate(['/user', this.userId, 'website']);
    };
    WebsiteListComponent.prototype.returnToProfile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteListComponent.prototype.editSite = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id]);
    };
    WebsiteListComponent.prototype.viewPage = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id, 'page']);
    };
    WebsiteListComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"website-new.component.ts\"></script>\n<nav class=\"navbar fixed-top navbar-dark bg-primary cl-text-white\">\n  <div class=\"row\">\n    <div class=\"landscape  col-4\">\n      <div class=\"container-fluid\">\n        <p>\n          <a (click)=\"websiteList()\" class=\"navbar-link cl-text-white\">\n            <span class=\"fas fa-chevron-left\"></span>\n          </a>\n          <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" (click)=\"newSite()\" >\n            Websites\n          </a>\n        </p>\n        <a (click)=\"newSite()\" class=\"cl-text-white\">\n          <span class=\"fas fa-plus fa-pull-right\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"container-fluid\">\n        <p>\n          <a class= \"navbar-brand mb-0 h1 cl-icon-padding\" (click)=\"newSite()\" >\n            New Website\n          </a>\n        </p>\n        <a (click)=\"websiteForm.ngSubmit.emit()\"\n           class=\"cl-text-white\">\n          <span class=\"fas fa-check fa-pull-right\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"landscape col-4\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n          <a (click)=\"editSite(website._id)\"><span class=\"fas fa-cog fontawsome_icon fa-pull-right\"></span></a>\n          <a (click)=\"pageList(website._id)\">{{website.name}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n      <span class=\" form-control alert alert-danger\" *ngIf=\"errorFlag\">\n      {{ errorMessage }}\n    </span>\n      <form (ngSubmit) = \"createWebsite()\" #websiteForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"website-name\">Website Name</label>\n          <input type=\"text\"\n                 name=\"websiteName\"\n                 class=\"form-control\"\n                 id=\"website-name\"\n                 ngModel required websiteName=\"ngModel\"\n                 placeholder=\"Website Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"website-description\">Website Description</label>\n          <textarea id=\"website-description\"\n                    name=\"websiteDescription\"\n                    class=\"form-control\"\n                    rows=\"5\"\n                    ngModel required websiteDescription=\"ngModel\"\n                    placeholder=\"Website Description\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-dark bg-primary d-flex flex-row-reverse nav-text cl-text-white\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-white\">\n      <span class=\"fas fa-user fontawsome_icon fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(router, route, websiteService) {
        this.router = router;
        this.route = route;
        this.websiteService = websiteService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.errorMessage = 'Please fill all fields';
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
        });
        // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.websiteName = this.websiteForm.value.websiteName;
        this.websiteDescription = this.websiteForm.value.websiteDescription;
        console.log(this.websiteName);
        console.log(this.websiteDescription);
        var body = {
            websiteName: this.websiteName,
            websiteDescription: this.websiteDescription
        };
        if (this.websiteName && this.websiteDescription) {
            this.websiteService.createWebsite(this.userId, body)
                .subscribe(function (data) {
                _this.website = data;
                _this.errorFlag = false;
                _this.router.navigate(['/user', _this.userId, 'website']);
            }, function (error) {
                _this.errorFlag = true;
            });
        }
        else {
            this.errorFlag = true;
        }
        //   this.errorFlag = false;
        //   const website = new Website('', this.websiteName, this.userId, this.websiteDescription);
        //   this.websiteService.createWebsite(website);
        //   this.router.navigate(['/user', this.userId, 'website']);
        //
        // } else {
        //   this.errorFlag = true;
        // }
    };
    WebsiteNewComponent.prototype.websiteList = function () {
        this.router.navigate(['/user', this.userId, 'website']);
    };
    WebsiteNewComponent.prototype.editSite = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id]);
    };
    WebsiteNewComponent.prototype.pageList = function (id) {
        this.router.navigate(['/user', this.userId, 'website', id, 'page']);
    };
    WebsiteNewComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteNewComponent.prototype.newSite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('websiteForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"widgetList()\" class=\"cl-text-black\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"newWidget()\">Choose Widgets</a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('heading')\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('image')\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"createWidget('youtube')\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-blue\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var widgetType = type.toUpperCase();
        switch (widgetType) {
            case 'HEADING': {
                this.body = {
                    name: '',
                    widgetType: 'HEADING',
                    size: 4,
                    text: ''
                };
                break;
            }
            case 'YOUTUBE': {
                this.body = {
                    name: '',
                    widgetType: 'YOUTUBE',
                    width: '100%',
                    url: ''
                };
                break;
            }
            case 'IMAGE': {
                this.body = {
                    name: '',
                    widgetType: 'IMAGE',
                    width: '100%',
                    url: ''
                };
                break;
            }
        }
        this.widgetService.createWidget(this.pageId, this.body)
            .subscribe(function (data) {
            _this.widget = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget', _this.widget._id]);
            console.log(_this.widget);
        });
        // this.router.navigate(['/user', this.userId]);
        // this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
        // this.widgetService.createWidget(this.widget);
    };
    WidgetChooserComponent.prototype.newWidget = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetChooserComponent.prototype.widgetList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase='\"HEADING\"'>\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase='\"IMAGE\"'>\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase='\"YOUTUBE\"'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        // this.widget = this.widgetService.findWidgetById(this.widgetId);
        // console.log(this.widget);
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"widgetList()\" class=\"cl-text-black\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"widgetEdit()\">Widgets Edit</a>\n    </p>\n    <a (click)=\"headerForm.ngSubmit.emit()\" class=\"cl-text-black\">\n      <span class=\"fas fa-check fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <form (ngSubmit) = \"updateHeader()\" #headerForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"heading-name\">Name</label>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" name=\"name\" class=\"form-control\" id=\"heading-name\" placeholder=\"Header Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"heading-text\">Text</label>\n    <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" id=\"heading-text\" placeholder=\"Header Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"heading-size\">Size</label>\n    <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" name=\"size\" id=\"heading-size\" placeholder=\"Ex: 1,2,3...\">\n  </div>\n  </form>\n  <button class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">Delete</button>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click) = \"profile()\" class=\"nav-text cl-text-blue\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            // this.widget = this.widgetService.findWidgetById(params['wgid']);
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
            console.log(_this.widget);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id)
            .subscribe(function (data) {
            var message = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WidgetHeaderComponent.prototype.widgetList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.widgetEdit = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
    };
    WidgetHeaderComponent.prototype.updateHeader = function () {
        var _this = this;
        var body = {
            name: this.widget.name,
            text: this.widget.text,
            size: this.widget.size
        };
        this.widgetService.updateWidget(this.widgetId, body)
            .subscribe(function (data) {
            _this.widget = data;
            _this.widgetList();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "headerForm", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"widgetList()\" class=\"cl-text-black\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"widgetEdit()\">Widget Edit</a>\n    </p>\n    <a (click)=\"imageForm.ngSubmit.emit()\" class=\"cl-text-black\">\n      <span class=\"fas fa-check fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"updateImage()\" #imageForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\"\n             name=\"imageUrl\"\n             class=\"form-control\"\n             id=\"exampleInputFile\"\n             ngModel required imageUrl=\"ngModel\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-block\"\n            [disabled] = \"!imageForm.valid\">Upload Image</button>\n    <button class=\"btn btn-danger  btn-block\" (click)=\"deleteWidget()\">Delete</button>\n\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-blue\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.errorFlag = false;
            _this.errorMessage = ' must be valid image type';
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            // this.widget = this.widgetService.findWidgetById(params['wgid']);
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
        console.log(this.widget);
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id)
            .subscribe(function (data) {
            var message = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WidgetImageComponent.prototype.widgetList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.widgetEdit = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
    };
    WidgetImageComponent.prototype.updateImage = function () {
        var _this = this;
        var url = this.widget.url;
        if (this.imageForm.value.imageUrl) {
            url = this.imageForm.value.imageUrl;
        }
        var body = {
            name: this.widget.name,
            text: this.widget.text,
            url: url,
            width: this.widget.width
        };
        this.widgetService.updateWidget(this.widgetId, body)
            .subscribe(function (data) {
            _this.widget = data;
            _this.widgetList();
        });
        // const newurl = this.imageForm.value.imageUrl;
        // console.log(newurl);
        // const newWidget = new Image(this.widget._id, this.widget.name, this.widget.pageId, this.widget.text, this.widget.width, newurl);
        // this.widget.url = newurl;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetImageComponent.prototype, "imageForm", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click)=\"widgetList()\" class=\"cl-text-black\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click)=\"widgetEdit()\">Widget Edit</a>\n    </p>\n    <a (click)=\"youtubeForm.ngSubmit.emit()\" class=\"cl-text-black\">\n      <span class=\"fas fa-check fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form (ngSubmit) = \"updateYoutube()\" #youtubeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-blue\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            // this.widget = this.widgetService.findWidgetById(params['wgid']);
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (data) {
            _this.widget = data;
        });
        console.log(this.widget);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widget._id)
            .subscribe(function (data) {
            var message = data;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        var _this = this;
        var body = {
            name: this.widget.name,
            text: this.widget.text,
            url: this.widget.url,
            width: this.widget.width
        };
        this.widgetService.updateWidget(this.widgetId, body)
            .subscribe(function (data) {
            _this.widget = data;
            _this.widgetList();
        });
    };
    WidgetYoutubeComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WidgetYoutubeComponent.prototype.widgetList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.widgetEdit = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('youtubeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "youtubeForm", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <p>\n      <a (click) = \"returnToPageList()\" class=\"cl-text-black\">\n        <span class=\"fas fa-chevron-left\"></span>\n      </a>\n      <a class=\"navbar-brand pull-left cl-icon-padding\" (click) = \"widgetList()\">Choose Widgets</a>\n    </p>\n    <a (click) = \"newWidget()\" class=\"cl-text-black cl-icon-padding\">\n      <span class=\"fas fa-plus fa-pull-right\"></span>\n    </a>\n  </div>\n</nav>\n\n<div *ngFor=\"let widget of widgets\" class=\"container cl-container-padding\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase= '\"HEADING\"'>\n      <div class=\"pull-right\">\n        <a (click)=\"editWidget(widget._id)\" class=\"pull-right\">\n          <span class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></span>\n        </a>\n        <a (click) = \"widgetList()\">\n          <span class=\"fas fa-bars fontawsome_icon\" style=\"background-color: white\"></span>\n        </a>\n      </div>\n      <h1>{{widget.text}}</h1>\n    </div>\n\n    <div *ngSwitchCase='\"IMAGE\"'>\n      <div>\n        <a (click)=\"editWidget(widget._id)\" class=\"pull-right\">\n          <span class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></span>\n        </a>\n        <a (click) = \"widgetList()\" class=\"pull-right\">\n          <span class=\"fas fa-bars fontawsome_icon\" style=\"background-color: white\"></span>\n        </a>\n        <img class=\"img-responsive img-rounded cl-widget-images\"\n             src=\"{{widget.url}}\">\n      </div>\n    </div>\n\n    <div *ngSwitchCase='\"YOUTUBE\"'>\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width=\"640\" height=\"360\" [src]=\"safe(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n      <a (click)=\"editWidget(widget._id)\" class=\"pull-right\">\n        <span class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></span>\n      </a>\n      <a (click) = \"widgetList()\" class=\"pull-right\">\n        <span class=\"fas fa-bars fontawsome_icon\" style=\"background-color: white\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom d-flex flex-row-reverse\">\n  <div class=\"p-2\">\n    <a (click)=\"profile()\" class=\"nav-text cl-text-blue\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, route, sanitizer, router) {
        this.widgetService = widgetService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.router = router;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        // this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        // console.log(this.widgets);
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (data) {
            _this.widgets = data;
        });
    };
    WidgetListComponent.prototype.safe = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.profile = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WidgetListComponent.prototype.editWidget = function (id) {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', id]);
    };
    WidgetListComponent.prototype.widgetList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetListComponent.prototype.newWidget = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetListComponent.prototype.returnToPageList = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shari\webdev-shariceg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map