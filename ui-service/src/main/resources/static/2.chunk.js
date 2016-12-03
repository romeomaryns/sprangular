webpackJsonp([2,6],{

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_routing_module__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_common_modules__ = __webpack_require__(436);
/* harmony export (binding) */ __webpack_require__.d(exports, "CrudModule", function() { return CrudModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrudModule = (function () {
    function CrudModule() {
    }
    CrudModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: __WEBPACK_IMPORTED_MODULE_3__shared_common_common_modules__["a" /* COMMON_CHILD_MODULES */].concat([
                __WEBPACK_IMPORTED_MODULE_2__crud_routing_module__["a" /* CrudRoutingModule */]
            ]),
            declarations: [__WEBPACK_IMPORTED_MODULE_1__crud_component__["a" /* CrudComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CrudModule);
    return CrudModule;
}());


/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudComponent = (function () {
    function CrudComponent(http, authService) {
        this.http = http;
        this.authService = authService;
        this.posts = [];
        this.editing = false;
        this.editedPost = null;
    }
    CrudComponent.prototype.ngOnInit = function () {
        console.log('hello `Crud` component');
        this.fetchPosts();
    };
    CrudComponent.prototype.editPost = function (post) {
        this.editing = true;
        this.editedPost = JSON.parse(JSON.stringify(post));
        this.scrollToTop();
    };
    CrudComponent.prototype.newPost = function () {
        this.editing = true;
        this.editedPost = {
            id: null,
            title: '',
            content: '',
            createdDate: null,
            updatedDate: null,
            version: null,
            createdBy: null,
            updatedBy: null,
        };
    };
    CrudComponent.prototype.removePost = function (post) {
        this.deletePost(post);
    };
    CrudComponent.prototype.cancelEdit = function () {
        this.editing = false;
        this.editedPost = null;
        this.scrollToTop();
    };
    CrudComponent.prototype.refresh = function () {
        this.cancelEdit();
        this.fetchPosts();
    };
    CrudComponent.prototype.fetchPosts = function () {
        var _this = this;
        this.http.get('/api/posts/', { headers: this.authService.getAuthorizationHeaders() })
            .subscribe(function (data) {
            _this.posts = data.json();
        }, function (err) { return console.log('Something went wrong'); });
    };
    CrudComponent.prototype.savePost = function (post) {
        var _this = this;
        this.http.post("/api/posts/", post, { headers: this.authService.getAuthorizationHeaders() })
            .subscribe(function (data) {
            console.log('Saved', data.json());
            _this.updateOrAddPostToList(data.json());
        }, function (err) { return console.log('Something went wrong'); });
    };
    CrudComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.http.delete("/api/posts/" + post.id, { headers: this.authService.getAuthorizationHeaders() })
            .subscribe(function (data) {
            console.log('Removed', data.json());
            _this.removePostFromList(post);
        }, function (err) { return console.log('Something went wrong'); });
    };
    CrudComponent.prototype.removePostFromList = function (post) {
        this.posts = this.posts.filter(function (x, idx, obs) { return x.id !== post.id; });
        this.cancelEdit();
    };
    CrudComponent.prototype.updateOrAddPostToList = function (post) {
        var _this = this;
        var changedList = this.posts.filter(function (x, idx, obs) { return x.id === post.id; });
        if (changedList.length === 0) {
            this.posts.push(post);
        }
        else {
            changedList.forEach(function (x) {
                var index = _this.posts.indexOf(x);
                _this.posts[index] = post;
            });
        }
        this.cancelEdit();
    };
    CrudComponent.prototype.scrollToTop = function () {
        var contentEl = document.querySelector('md-sidenav-layout > md-content');
        if (contentEl) {
            this.scrollTo(contentEl, 0, 100);
        }
    };
    CrudComponent.prototype.scrollTo = function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            return;
        }
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;
        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }, 10);
    };
    CrudComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'shardis-crud',
            template: __webpack_require__(817),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], CrudComponent);
    return CrudComponent;
    var _a, _b;
}());


/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_ng_module__ = __webpack_require__(435);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrudRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_1__crud_component__["a" /* CrudComponent */]
    }
];
var CrudRoutingModule = (function () {
    function CrudRoutingModule() {
    }
    CrudRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_ng_module__["a" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CrudRoutingModule);
    return CrudRoutingModule;
}());


/***/ },

/***/ 811:
/***/ function(module, exports) {

module.exports = ".postcard {\n  margin: 10px 10px; }\n\nform > md-input {\n  width: 100%; }\n\n.md-hint {\n  height: 1.5em; }\n"

/***/ },

/***/ 817:
/***/ function(module, exports) {

module.exports = "<md-toolbar align=\"end\">\n  <button md-raised-button color=\"primary\" (click)=\"newPost()\">new post</button>\n  <button md-raised-button color=\"secondary\" (click)=\"refresh()\">refresh</button>\n</md-toolbar>\n<md-card *ngIf=\"editing\">\n  <md-card-title>Editing post</md-card-title>\n  <md-card-content>\n    <form #editPostForm=\"ngForm\">\n      <md-input placeholder=\"Title\" [(ngModel)]=\"editedPost.title\" name=\"title\" maxLength=\"100\" required=\"required\"\n                #titleField>\n        <md-hint align=\"end\">{{titleField.characterCount}} / 100</md-hint>\n      </md-input>\n      <md-input rows=\"3\" type=\"Content\" placeholder=\"Content\" [(ngModel)]=\"editedPost.content\" name=\"content\"\n                maxLength=\"255\" required=\"required\" #contentField>\n        <md-hint align=\"end\">{{contentField.characterCount}} / 255</md-hint>\n      </md-input>\n    </form>\n  </md-card-content>\n  <md-card-actions align=\"end\">\n    <button md-raised-button color=\"accent\" (click)=\"savePost(editedPost)\">save</button>\n    <button md-raised-button color=\"primary\" (click)=\"cancelEdit()\">cancel</button>\n  </md-card-actions>\n</md-card>\n<md-card *ngFor=\"let post of posts\" class=\"postcard\">\n  <md-card-title>{{post.title}}</md-card-title>\n  <md-card-content>\n    <p>{{post.content}}</p>\n    <md-list>\n      <md-list-item>\n        <p md-line>id: {{post.id}}</p>\n        <p md-line>createdDate: {{post.createdDate | date:\"dd.MM.yyyy HH:mm\"}}</p>\n        <p md-line>updatedDate: {{post.createdDate | date:\"dd.MM.yyyy HH:mm\"}}</p>\n        <p md-line>version: {{post.version}}</p>\n      </md-list-item>\n    </md-list>\n  </md-card-content>\n  <md-card-actions align=\"end\">\n    <button md-raised-button color=\"primary\" (click)=\"editPost(post)\">edit</button>\n    <button md-raised-button color=\"accent\" (click)=\"removePost(post)\">remove</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }

});
//# sourceMappingURL=2.map