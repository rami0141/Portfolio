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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\r\n  background-image: url('/assets/images/church')\r\n} */\r\n.marg {\r\n   margin-top: 100px;\r\n }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <app-home></app-home> -->\n<div class=\"container marg\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!--  This is a directive - Marks the place in our document where we want to load our selected route component -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/side-bar/side-bar.component */ "./src/app/blog/side-bar/side-bar.component.ts");
/* harmony import */ var _blog_side_bar_blog_preview_blog_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/side-bar/blog-preview/blog-preview.component */ "./src/app/blog/side-bar/blog-preview/blog-preview.component.ts");
/* harmony import */ var _blog_create_new_blog_create_new_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/create-new-blog/create-new-blog.component */ "./src/app/blog/create-new-blog/create-new-blog.component.ts");
/* harmony import */ var _blog_create_new_blog_view_create_new_view_create_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog/create-new-blog/view-create-new/view-create-new.component */ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.ts");
/* harmony import */ var _blog_create_new_blog_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/create-new-blog/instructions/instructions.component */ "./src/app/blog/create-new-blog/instructions/instructions.component.ts");
/* harmony import */ var _blog_side_bar_blog_preview_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/side-bar/blog-preview/blog-item/blog-item.component */ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.ts");
/* harmony import */ var _blog_side_bar_full_blog_detail_full_blog_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/side-bar/full-blog-detail/full-blog-detail.component */ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blogs.service */ "./src/app/blogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// Routes - specific type = routes - Need to import
// Needs to be an array - because we will have multiple routes
var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'topics', component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_8__["TopicsComponent"] },
    { path: 'addBlog', component: _blog_create_new_blog_create_new_blog_component__WEBPACK_IMPORTED_MODULE_13__["CreateNewBlogComponent"] },
    { path: 'blogs', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"], children: [
            { path: '', component: _blog_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"] },
            { path: ':id', component: _blog_side_bar_full_blog_detail_full_blog_detail_component__WEBPACK_IMPORTED_MODULE_17__["FullBlogDetailComponent"] },
        ] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _topics_topics_component__WEBPACK_IMPORTED_MODULE_8__["TopicsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"],
                _blog_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"],
                _blog_side_bar_blog_preview_blog_preview_component__WEBPACK_IMPORTED_MODULE_12__["BlogPreviewComponent"],
                _blog_create_new_blog_create_new_blog_component__WEBPACK_IMPORTED_MODULE_13__["CreateNewBlogComponent"],
                _blog_create_new_blog_view_create_new_view_create_new_component__WEBPACK_IMPORTED_MODULE_14__["ViewCreateNewComponent"],
                _blog_create_new_blog_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_15__["InstructionsComponent"],
                _blog_side_bar_blog_preview_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_16__["BlogItemComponent"],
                _blog_side_bar_full_blog_detail_full_blog_detail_component__WEBPACK_IMPORTED_MODULE_17__["FullBlogDetailComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                // AppRoutingModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_blogs_service__WEBPACK_IMPORTED_MODULE_19__["BlogsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <!-- <div class=\"col-md-7\"> -->\n    <!-- <app-side-bar></app-side-bar> -->\n\n  <div class=\"col-md-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/create-new-blog/create-new-blog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/blog/create-new-blog/create-new-blog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog {\r\n  background-image: url('background.jpg')\r\n}\r\n.card {\r\n  background-color: transparent;\r\n  opacity: 0.9;\r\n  border: none;\r\n  /* border: 10px solid white; */\r\n}\r\nh1 {\r\n  color: black;\r\n   text-shadow: 2px 2px white;\r\n}\r\n.btn {\r\n  border: 3px solid white;\r\n}\r\nlabel, input, textarea, select {\r\n  color:  black;\r\n  font-size: 20px;\r\n  padding: 10px;\r\n  border: 1px solid gray;\r\n  background-color: white;\r\n  opacity: 1;\r\n  width: 100%;\r\n}\r\n.white-space {\r\n  width: 200px;\r\n}\r\n/*  Validation  */\r\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\r\n  border: 4px solid red;\r\n}\r\n/*  Display Blog */\r\n.yellow {\r\n  background-color: #fffee0;\r\n  border: 2px solid gray;\r\n}\r\n.white-space {\r\n  width: 200px;\r\n}\r\n.sidebar-thumb{\r\n    float: left;\r\n    overflow: hidden;\r\n    margin-right: 15px;\r\n}\r\n.sidebar-thumb img{\r\n  background: #fff;\r\n  border: 5px dashed #FED148;\r\n  padding: 6px;\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/create-new-blog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/blog/create-new-blog/create-new-blog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\r\n  <div class=\"col-md-12\">\r\n    <app-instructions></app-instructions>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-8 mb-5 blog\">\r\n    <!-- Telling Angular that the Form is managed by us and not by Angular -->\r\n    <h1 class=\" text-center mt-4\">Get Creative</h1>\r\n    <form [formGroup]=\"blogForm\" class=\"clear p-2\">\r\n      <div class=\"card p-3 goldBorder\">\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <!-- <label for=\"title\">Blog Title:</label> -->\r\n            <input\r\n              type=\"text\"\r\n              id=\"title\"\r\n              formControlName=\"title\"\r\n              [(ngModel)]=\"title\"\r\n              class=\"form-control\"\r\n              (input)=\"onUpdateTitleName($event)\"\r\n              placeholder=\"Blog Title:\"\r\n              name=\"title\"\r\n              required>\r\n          </div>\r\n          <div *ngIf=\"blogForm.controls['title'].invalid && (blogForm.controls['title'].dirty || blogForm.controls['title'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"blogForm.controls['title'].errors.required\">\r\n              Blog Title is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"text\"\r\n              id=\"name\"\r\n              formControlName=\"name\"\r\n              [(ngModel)]=\"name\"\r\n              class=\"form-control\"\r\n              placeholder=\"Author:\"\r\n              (input)=\"onUpdateAuthorName($event)\"\r\n              name=\"name\"\r\n              required>\r\n          </div>\r\n          <div *ngIf=\"blogForm.controls['name'].invalid && (blogForm.controls['name'].dirty || blogForm.controls['name'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"blogForm.controls['name'].errors.required\">\r\n              Authors Name is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"topic\"\r\n              [(ngModel)]=\"topic\"\r\n              formControlName=\"topic\"\r\n              required>\r\n              <option selected></option>\r\n              <option>Food</option>\r\n              <option>Fitness</option>\r\n              <option>Travel</option>\r\n              <option>Sports</option>\r\n              <option>Fashion</option>\r\n              <option>Celebrity</option>\r\n              <option>TV & Films</option>\r\n              <option>Tech</option>\r\n              <option>Politics</option>\r\n              <option>Humour</option>\r\n              <option>Kpop</option>\r\n              <option>Pets</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"text\"\r\n              id=\"imageLink\"\r\n              formControlName=\"imageLink\"\r\n              [(ngModel)]=\"imageLink\"\r\n              class=\"form-control\"\r\n              placeholder=\"Blog Image Link:\"\r\n              (input)=\"onUpdateLink($event)\"\r\n              required>\r\n          </div>\r\n          <div *ngIf=\"blogForm.controls['imageLink'].invalid && (blogForm.controls['imageLink'].dirty || blogForm.controls['imageLink'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"blogForm.controls['imageLink'].errors.required\">\r\n              Image Link is required\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"summary\"\r\n              formControlName=\"summary\"\r\n              [(ngModel)]=\"summary\"\r\n              rows=\"6\"\r\n              placeholder=\"Write A Blog Summary:\"\r\n              (input)=\"onUpdateSummary($event)\"\r\n              required></textarea>\r\n          </div>\r\n          <div *ngIf=\"blogForm.controls['summary'].invalid && (blogForm.controls['summary'].dirty || blogForm.controls['summary'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"blogForm.controls['summary'].errors.required\">\r\n              Blog Summary is required\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"blog\"\r\n              formControlName=\"blog\"\r\n              [(ngModel)]=\"blog\"\r\n              rows=\"15\"\r\n              placeholder=\"Write Blog Here:\"\r\n              (input)=\"onUpdateBlog($event)\"\r\n              ng-bind-html-unsafe=\"newlines\"\r\n              required></textarea>\r\n          </div>\r\n          <div *ngIf=\"blogForm.controls['blog'].invalid && (blogForm.controls['blog'].dirty || blogForm.controls['blog'].touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"blogForm.controls['blog'].errors.required\">\r\n              A Blog is required.\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-lg btn-info mr-4 float-right\"\r\n            (click)=\"addBlogs(title, name, topic, imageLink, summary, blog)\"\r\n            [disabled]=\"!blogForm.valid\">Post Blog</button>\r\n          <button (click)=\"reset()\" type=\"button\" class=\"float-right mr-3 btn btn-lg btn-danger\">Clear</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-4 mb-5\">\r\n   <!-- <app-new-blog-display></app-new-blog-display> -->\r\n   <div class=\"card yellow text-center\">\r\n     <div class=\"card-body\">\r\n       <h3>{{ blogName }} By {{ authorName }}</h3>\r\n         <h6>{{ topic }}</h6>\r\n       </div>\r\n     </div>\r\n   <div class=\"card mt-3 yellow\">\r\n     <div class=\"card-body\">\r\n       <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n           <div class=\"sidebar-thumb\">\r\n             <img\r\n               [src]=\"imageLink\"\r\n               class=\"img-responsive\"\r\n               alt=\"Your Image Here\">\r\n           </div>\r\n           <h5>Blog Summary:</h5>\r\n           <p class=\"pull-right\" style=\"white-space: pre-wrap;\">{{ summary }}</p>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"card mt-3 yellow\">\r\n     <div class=\"card-body\">\r\n       <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n           <p style=\"white-space: pre-wrap;\">{{ blog }}</p>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/create-new-blog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/blog/create-new-blog/create-new-blog.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateNewBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewBlogComponent", function() { return CreateNewBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blogs.service */ "./src/app/blogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateNewBlogComponent = /** @class */ (function () {
    // topic = '';
    function CreateNewBlogComponent(blogsService, fb) {
        this.blogsService = blogsService;
        this.fb = fb;
        this.blogName = '';
        this.authorName = '';
        this.summary = '';
        this.blog = '';
        this.imageLink = '';
        this.createForm();
    }
    CreateNewBlogComponent.prototype.ngOnInit = function () {
    };
    CreateNewBlogComponent.prototype.reset = function () {
        this.blogForm.reset();
        console.log("form has been cleared");
    };
    CreateNewBlogComponent.prototype.createForm = function () {
        this.blogForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            imageLink: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            summary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            blog: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CreateNewBlogComponent.prototype.addBlogs = function (title, name, topic, imageLink, summary, blog) {
        this.blogsService.addBlogs(title, name, topic, imageLink, summary, blog);
        this.blogForm.reset();
    };
    CreateNewBlogComponent.prototype.onUpdateTitleName = function (event) {
        this.blogName = event.target.value;
    };
    CreateNewBlogComponent.prototype.onUpdateAuthorName = function (event) {
        this.authorName = event.target.value;
    };
    CreateNewBlogComponent.prototype.onUpdateLink = function (event) {
        this.imageLink = event.target.value;
    };
    CreateNewBlogComponent.prototype.onUpdateSummary = function (event) {
        this.summary = event.target.value;
    };
    CreateNewBlogComponent.prototype.onUpdateBlog = function (event) {
        this.blog = event.target.value;
    };
    CreateNewBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-blog',
            template: __webpack_require__(/*! ./create-new-blog.component.html */ "./src/app/blog/create-new-blog/create-new-blog.component.html"),
            styles: [__webpack_require__(/*! ./create-new-blog.component.css */ "./src/app/blog/create-new-blog/create-new-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateNewBlogComponent);
    return CreateNewBlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/create-new-blog/instructions/instructions.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/instructions/instructions.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    position: absolute;\n    top: 36%;\n    left: 28%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\nimg {\n  position: relative;\n  width: 100%;\n  height: 150px;\n  /* border: 7px solid black; */\n}\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/instructions/instructions.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/instructions/instructions.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"../assets/images/directions.jpg\" alt=\"Instructions\" class=\"mb-5 img-fluid\">\n<h3 class=\"center\">Get Creative</h3> -->\n<!-- <p class=\"centerB\">Fill out the form below and post your story for others to read.</p> -->\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/instructions/instructions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/instructions/instructions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/blog/create-new-blog/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.css */ "./src/app/blog/create-new-blog/instructions/instructions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/view-create-new/view-create-new.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-thumb{\r\n    float: left;\r\n    overflow: hidden;\r\n    margin-right: 15px;\r\n}\r\n.sidebar-thumb img{\r\n  background: #fff;\r\n  border: 5px dashed #FED148;\r\n  padding: 6px;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 100px;\r\n}\r\ninput, textarea, select, .card {\r\n  border: 1px solid gray;\r\n}\r\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/view-create-new/view-create-new.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/blog/create-new-blog/view-create-new/view-create-new.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewCreateNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCreateNewComponent", function() { return ViewCreateNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewCreateNewComponent = /** @class */ (function () {
    function ViewCreateNewComponent() {
    }
    ViewCreateNewComponent.prototype.ngOnInit = function () {
    };
    ViewCreateNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-create-new',
            template: __webpack_require__(/*! ./view-create-new.component.html */ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.html"),
            styles: [__webpack_require__(/*! ./view-create-new.component.css */ "./src/app/blog/create-new-blog/view-create-new/view-create-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewCreateNewComponent);
    return ViewCreateNewComponent;
}());



/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-thumb{\r\n    float: left;\r\n    overflow: hidden;\r\n    margin-right: 15px;\r\n}\r\n.sidebar-thumb img{\r\n  background: #fff;\r\n  border: 5px dashed #FED148;\r\n  padding: 6px;\r\n  height: 230px;\r\n  width: 230px;\r\n  margin-right: 10px;\r\n  margin-left: 25px;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 150px;\r\n}\r\na {\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n.fa-thumbs-up, .fa-user{\r\n  color: #FED148;\r\n}\r\n"

/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  class=\"list-group-item clearfix mb-4 bg-light mr-2\"\n  [routerLink]=\"[index]\">\n  <!-- ngFor looping all blogs -->\n  <div class=\"sidebar-thumb\">\n    <img\n      [src]=\"blogs.imageLink\"\n      alt=\"{{ blogs.title }}\"\n      class=\"img-responsive img-round\">\n  </div>\n    <h3 class=\"list-group-item-heading text-center\">{{ blogs.title }}</h3>\n    <h5 class=\"text-center\"> <i class=\"fa fa-user mr-2\" aria-hidden=\"true\"></i>{{ blogs.name }}</h5>\n    <p class=\"list-group-item-text\">{{ blogs.summary }}</p>\n    <p class=\"float-right\">Posted: {{ blogs.date | date:'MM/dd/yyyy' }}</p>\n</a>\n"

/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blogs */ "./src/app/blogs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
var BlogItemComponent = /** @class */ (function () {
    function BlogItemComponent() {
    }
    BlogItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _blogs__WEBPACK_IMPORTED_MODULE_1__["Blogs"])
    ], BlogItemComponent.prototype, "blogs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BlogItemComponent.prototype, "index", void 0);
    BlogItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item',
            template: __webpack_require__(/*! ./blog-item.component.html */ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.html"),
            styles: [__webpack_require__(/*! ./blog-item.component.css */ "./src/app/blog/side-bar/blog-preview/blog-item/blog-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemComponent);
    return BlogItemComponent;
}());



/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-preview.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-preview.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.scroll {\r\n   overflow: auto;\r\n   width:100%;\r\n   max-width: 1120px;\r\n   height: 780px;\r\n   overflow: auto;\r\n   overflow-x: hidden;\r\n }\r\n"

/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-preview.component.html":
/*!************************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-preview.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll mb-5 mr-2\">\n<app-blog-item\n      *ngFor=\"let blogsEl of blogs; let i = index\"\n      [blogs]=\"blogsEl\"\n      [index]=\"i\"></app-blog-item>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/side-bar/blog-preview/blog-preview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/blog/side-bar/blog-preview/blog-preview.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlogPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPreviewComponent", function() { return BlogPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blogs.service */ "./src/app/blogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPreviewComponent = /** @class */ (function () {
    function BlogPreviewComponent(blogsService, router, route) {
        this.blogsService = blogsService;
        this.router = router;
        this.route = route;
    }
    BlogPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogsService.getBlogs()
            .subscribe(function (data) {
            _this.blogs = data;
            _this.blogsService.setBlogs(data);
        });
    };
    BlogPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-preview',
            template: __webpack_require__(/*! ./blog-preview.component.html */ "./src/app/blog/side-bar/blog-preview/blog-preview.component.html"),
            styles: [__webpack_require__(/*! ./blog-preview.component.css */ "./src/app/blog/side-bar/blog-preview/blog-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogPreviewComponent);
    return BlogPreviewComponent;
}());



/***/ }),

/***/ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gold {\r\n  /* background-color: black; */\r\n  color: white;\r\n  border: 2px solid #FED148;\r\n  padding: 50px;\r\n  background-image: url('note.JPG');\r\n}\r\n\r\n.sidebar-thumb{\r\n    float: left;\r\n    overflow: hidden;\r\n    margin-right: 15px;\r\n}\r\n\r\n.sidebar-thumb img{\r\n  background: #fff;\r\n  border: 5px dashed #FED148;\r\n  padding: 6px;\r\n  height: 280px;\r\n  width: 280px;\r\n  border-radius: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card gold mt-3 mb-3\">\n      <div class=\"card-body text-center\">\n        <h1>{{ blogs.title }} By {{ blogs.name }}</h1>\n        <h4>A Blog About {{ blogs.topic }}</h4>\n        <p></p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card mt-3 mb-5 bg-light\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"sidebar-thumb pl-2 pt-2 pb-2\">\n          <img\n            [src]=\"blogs.imageLink\"\n            class=\"img-responsive\"\n            alt=\"Your Image Here\">\n        </div>\n        <!-- <h4>INTRODUCTION:</h4> -->\n        <h4 class=\"pull-right mt-4 p-3\" style=\"white-space: pre-wrap;\">{{ blogs.summary }}</h4>\n        <p class=\"p-3\" style=\"white-space: pre-wrap;\">{{ blogs.blog }}</p>\n        <button type=\"button\" class=\"btn btn-danger btn-lg float-right\" (click)=\"onDeleteBlog()\"><i class=\"fa fa-trash mr-1\" aria-hidden=\"true\"></i>Delete Blog</button>\n        <button type=\"button\" class=\"btn btn-info  btn-lg float-right mr-3\" (click)=\"onEditBlog()\"><i class=\"fa fa-paint-brush mr-1\" aria-hidden=\"true\"></i>Update Blog</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"card mt-3 mb-5\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"blog\">Leave A Comment Here:</label>\n              <textarea\n                class=\"form-control\"\n                rows=\"3\"\n                required></textarea>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\">Comment</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: FullBlogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullBlogDetailComponent", function() { return FullBlogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blogs.service */ "./src/app/blogs.service.ts");
/* harmony import */ var _blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blogs */ "./src/app/blogs.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FullBlogDetailComponent = /** @class */ (function () {
    function FullBlogDetailComponent(blogsService, route, router) {
        this.blogsService = blogsService;
        this.route = route;
        this.router = router;
        this.blogs = new _blogs__WEBPACK_IMPORTED_MODULE_3__["Blogs"]('a', 'b', 'c', 'd', 'e', 'f');
        this.uri = 'http://localhost:4000';
    }
    FullBlogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.blogs = _this.blogsService.getBlog(_this.id);
            console.log(_this.blogs);
        });
    };
    FullBlogDetailComponent.prototype.onEditBlog = function () {
        this.router.navigate(['/addBlog'], { relativeTo: this.route });
    };
    FullBlogDetailComponent.prototype.onDeleteBlog = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this blog?")) {
            this.blogsService.deleteBlogs(this.blogs._id).subscribe(function (res) {
                _this.router.navigate(['/blogs']);
            });
        }
    };
    FullBlogDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-blog-detail',
            template: __webpack_require__(/*! ./full-blog-detail.component.html */ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.html"),
            styles: [__webpack_require__(/*! ./full-blog-detail.component.css */ "./src/app/blog/side-bar/full-blog-detail/full-blog-detail.component.css")],
        }),
        __metadata("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullBlogDetailComponent);
    return FullBlogDetailComponent;
}());



/***/ }),

/***/ "./src/app/blog/side-bar/side-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/blog/side-bar/side-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gold {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.list-group-item {\r\n  background-color: black;\r\n  color: white;\r\n  opacity: 0.8;\r\n  border: 3px solid #FED148;\r\n}\r\n.list-group-item:hover {\r\n  background-color: #FED148;\r\n  color: black;\r\n  font-size: 20px;\r\n  padding: 15px;\r\n  border: 3px solid black;\r\n}\r\nh4 {\r\n  border: 5px dashed #FED148;\r\n  padding: 30px;\r\n  text-align: center;\r\n}\r\n/* #list-tab {\r\n  position: fixed;\r\n  width: 10%;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/blog/side-bar/side-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/blog/side-bar/side-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\n  <div class=\"col-md-3\">\n    <div class=\"list-group mb-5 text-center\" id=\"list-tab\" role=\"tablist\">\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Food')\">FOOD</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Fitness')\">FITNESS</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Travel')\">TRAVEL</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Fashion')\">FASHION</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Celebrity')\">CELEBRITY</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('TV & Films')\">TV & FILMS</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Tech')\">TECHNOLOGY</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Politics')\">POLITICS</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Humour')\">HUMOUR</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Kpop')\">KPOP</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Sports')\">SPORTS</button>\n      <button class=\"list-group-item\" (click)=\"getSortedBlogs('Pets')\">PETS</button>\n  </div>\n</div>\n  <div class=\"col-md-9\">\n    <app-blog-preview></app-blog-preview>\n    <!-- <app-full-blog-view></app-full-blog-view> -->\n  </div>\n\n  <!-- <div class=\"col-md-5\">\n    <app-full-blog-detail\n      *ngIf=\"selectedBlog; else infoText\"></app-full-blog-detail>\n    <ng-template #infoText>\n      <h4>CLICK ON A BLOG TO VIEW!</h4>\n    </ng-template>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/blog/side-bar/side-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/blog/side-bar/side-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blogs.service */ "./src/app/blogs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(blogsService, route, router) {
        this.blogsService = blogsService;
        this.route = route;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.getSortedBlogs = function (topic) {
        this.blogsService.getSortedBlogs(topic);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/blog/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/blog/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/blogs.service.ts":
/*!**********************************!*\
  !*** ./src/app/blogs.service.ts ***!
  \**********************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogsService = /** @class */ (function () {
    function BlogsService(http) {
        this.http = http;
        this.uri = 'http://cristina-zhang.com/mongo';
        this.blogChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.blogs = [];
        console.log("Initialized");
    }
    // Gets All Blogs
    BlogsService.prototype.getBlogs = function () {
        return this.http.get(this.uri + "/blogs");
        // .map(res => res.json());
    };
    BlogsService.prototype.setBlogs = function (blogs) {
        this.blogs = blogs;
        this.blogChanged.next(this.blogs.slice());
    };
    // Gets a blog by index
    BlogsService.prototype.getBlog = function (index) {
        return this.blogs[index];
    };
    // Filter Array By Topic - SideBarComponent
    BlogsService.prototype.getSortedBlogs = function (topic) {
        console.log(topic);
        this.blogs.forEach(function (value) {
            if (topic === value.topic) {
                console.log(value);
            }
        });
    };
    // getBlogsById(id) {
    //   return this.http.get(`${this.uri}/blogs/${id}`);
    //   console.log('Blog pulled successfully')
    // }
    BlogsService.prototype.addBlogs = function (title, name, topic, imageLink, summary, blog) {
        var newBlog = {
            title: title,
            name: name,
            topic: topic,
            imageLink: imageLink,
            summary: summary,
            blog: blog
        };
        console.log(newBlog);
        this.http.post(this.uri + "4000/blogs/add", newBlog)
            .subscribe(function (res) { return console.log("Blog Submitted!"); });
    };
    // updateBlogs(id, title, name, topic, imageLink, summary, blog) {
    //   const blogs = {
    //     title: title,
    //     name: name,
    //     topic: topic,
    //     imageLink: imageLink,
    //     summary: summary,
    //     blog: blog
    //   };
    //   return this.http.post(`${this.uri}/blogs/update/${id}`, blogs);
    // }
    //
    BlogsService.prototype.deleteBlogs = function (id) {
        return this.http.delete(this.uri + "/blogs/delete/" + id);
    };
    BlogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogsService);
    return BlogsService;
}());



/***/ }),

/***/ "./src/app/blogs.ts":
/*!**************************!*\
  !*** ./src/app/blogs.ts ***!
  \**************************/
/*! exports provided: Blogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogs", function() { return Blogs; });
var Blogs = /** @class */ (function () {
    function Blogs(title, name, topic, imageLink, summary, blog) {
        //built in function every class has which will execute to create a new instance of this class
        this.title = title;
        this.name = name;
        this.topic = topic;
        this.imageLink = imageLink;
        this.summary = summary;
        this.blog = blog;
    }
    return Blogs;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  border-top: 5px solid #FED148;\r\n  text-align: center;\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"bg-dark mt-3\">\n  &copy; 2018 Cristina Zhang\n  <a class=\"text-white\" href=\"https://github.com/rami0141/GoldenBlogger\" target=\"_blank\"><i class=\"fab fa-github fa-2x text-white ml-3\"></i></a>\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gold {\r\n  color: #FED148;\r\n  font-size: 22px;\r\n}\r\n ul li a {\r\n   color: white;\r\n   margin-left: 35px;\r\n }\r\n a {\r\n   font-size: 18px;\r\n }\r\n .navbar {\r\n   border-top: 5px solid #FED148;\r\n }\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand navbar-brand gold\"routerLink=\"/\"><img src=\"../assets/images/logo.JPG\" style=\"width:230px; height: 40px;\" alt=\"\"></a>\n  <div class=\"navbar-expand\">\n    <div class=\"navbar-nav\">\n      <!-- <a class=\"nav-link\" routerLink=\"/\">Home</a> -->\n      <a class=\"nav-link text-white ml-2\" routerLink=\"/blogs\">Blogs</a>\n      <a class=\"nav-link text-white\" routerLink=\"/topics\">Topics</a>\n      <a class=\"nav-link text-white\" routerLink=\"/addBlog\">Add Blog</a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <!-- <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"https://github.com/rami0141\" target=\"_blank\">\n        <a class=\"text-white m-5 mt-3 icon\" href=\"https://github.com/rami0141/GoldenBlogger\" target=\"_blank\"><i class=\"fab fa-github fa-2x text-white\"></i></a>\n      </a>\n    </div> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gold {\r\n  color: white;\r\n  border: 5px solid #FED148;\r\n}\r\n\r\n.float-left {\r\n  width: 60%;\r\n}\r\n\r\n.float-right {\r\n  width: 35%;\r\n  margin-left: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <img src=\"../assets/images/main.jpg\" alt=\"Home Images\" class=\"img-fluid float-left\" >\r\n    <!-- </div>\r\n    <div class=\"col-4\"> -->\r\n      <img src=\"../assets/images/Goldenblog.jpg\" alt=\"Features\" class=\"img-fluid float-right\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <hr>\r\n    <div class=\"col-12 mt-5 mb-5\">\r\n      <h3>My Story</h3>\r\n      <hr>\r\n      <p><img src=\"../assets/images/me.JPG\" alt=\"Cristina Zhang\" class=\"img-thumbnail img-fluid float-right ml-5\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/topics/topics.component.css":
/*!*********************************************!*\
  !*** ./src/app/topics/topics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagebox {\r\n  background: black;\r\n  padding: 0px;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 220px;\r\n  height: 220px;\r\n  margin: 25px;\r\n}\r\n\r\n.imagebox img {\r\n  opacity: 1;\r\n  transition: 0.5s opacity;\r\n}\r\n\r\n.imagebox .imagebox-desc {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  bottom: 0px;\r\n  color: white;\r\n  font-size: 20px;\r\n  left: 0px;\r\n  padding: 10px 15px;\r\n  position: absolute;\r\n  transition: 0.3s padding;\r\n  text-align: center;\r\n  width: 100%;\r\n  border: 4px solid #FED148;\r\n}\r\n\r\n.imagebox:hover img {\r\n  opacity: 0.7;\r\n}\r\n\r\n.imagebox:hover .imagebox-desc {\r\n  padding-bottom: 40%;\r\n  padding-top: 42%;\r\n  font-size: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topics/topics.component.html":
/*!**********************************************!*\
  !*** ./src/app/topics/topics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-5 mt-4\">\n  <h2 class=\"text-center\">Blog Topics</h2>\n  <div class=\"row\">\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"../assets/images/food.PNG\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">FOOD</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACVi63woms/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">FITNESS</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MAC4s3Inczc/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">TRAVEL</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACNTADjepU/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">FASHION</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MAC1YCxxwb0/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">CELEBRITY</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACZWPBsodQ/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">TV & FILMS</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACWWJ_ed9M/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">TECHNOLOGY</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACVsXerxjA/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">POLITICS</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACV36Ak9KQ/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">HUMOUR</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACV46OZauM/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">KPOP</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACZh0kxnX8/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">SPORTS</span>\n        </a>\n      </div>\n      <div class=\"imagebox\">\n        <a [routerLink]=\"['/blogs']\">\n          <img\n            src=\"https://media-public.canva.com/MACNTPzk1qs/1/screen.jpg\"\n            class=\"category-banner img-responsive\"\n            style=\"height: 220px; width: 220px;\">\n          <span class=\"imagebox-desc\">PETS</span>\n        </a>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/topics/topics.component.ts":
/*!********************************************!*\
  !*** ./src/app/topics/topics.component.ts ***!
  \********************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicsComponent = /** @class */ (function () {
    function TopicsComponent() {
    }
    TopicsComponent.prototype.ngOnInit = function () {
    };
    TopicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/topics/topics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicsComponent);
    return TopicsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cristina\Desktop\Angular\GoldenBlogger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map