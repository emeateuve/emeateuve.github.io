webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'titulazo';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pokedexes_pokedexes_component__ = __webpack_require__("./src/app/pokedexes/pokedexes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pokemon_pokemon_component__ = __webpack_require__("./src/app/pokemon/pokemon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__moves_moves_component__ = __webpack_require__("./src/app/moves/moves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__more_more_component__ = __webpack_require__("./src/app/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pokedex_detail_pokedex_detail_component__ = __webpack_require__("./src/app/pokedex-detail/pokedex-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__poke_pipe_pipe__ = __webpack_require__("./src/app/poke-pipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
    { path: 'pokemon', redirectTo: '' },
    { path: 'pokedexes', component: __WEBPACK_IMPORTED_MODULE_10__pokedexes_pokedexes_component__["a" /* PokedexesComponent */] },
    { path: 'pokedexes/:pokedexID', component: __WEBPACK_IMPORTED_MODULE_14__pokedex_detail_pokedex_detail_component__["a" /* PokedexDetailComponent */] },
    { path: 'moves', component: __WEBPACK_IMPORTED_MODULE_12__moves_moves_component__["a" /* MovesComponent */] },
    { path: 'pokemon/:pokeID', component: __WEBPACK_IMPORTED_MODULE_11__pokemon_pokemon_component__["a" /* PokemonComponent */] },
    { path: 'moves/:moveID', component: __WEBPACK_IMPORTED_MODULE_12__moves_moves_component__["a" /* MovesComponent */] },
    { path: 'more', component: __WEBPACK_IMPORTED_MODULE_13__more_more_component__["a" /* MoreComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pokedexes_pokedexes_component__["a" /* PokedexesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pokemon_pokemon_component__["a" /* PokemonComponent */],
                __WEBPACK_IMPORTED_MODULE_12__moves_moves_component__["a" /* MovesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__more_more_component__["a" /* MoreComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pokedex_detail_pokedex_detail_component__["a" /* PokedexDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__poke_pipe_pipe__["a" /* PokePipePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__pokeservice_service__["a" /* PokeserviceService */], __WEBPACK_IMPORTED_MODULE_10__pokedexes_pokedexes_component__["a" /* PokedexesComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "body > .container {\r\n  padding-top: 60px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <p style=\"text-align: center;\"><a href=\"https://github.com/emeateuve\" style=\"color: #fff;\">Github: Miguel Ángel Torres Varo</a></p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\" integrity=\"sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\" integrity=\"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm\" crossorigin=\"anonymous\"></script>\r\n\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">PokéMaster</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"pokeDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">PokéDexes</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"pokeDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes']\">All pokedexes</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/national']\">National</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/kanto']\">Kanto</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/original-johto']\">Johto</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/hoenn']\">Hoenn</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/original-sinnoh']\">Sinnoh</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pokedexes/original-unova']\">Unova</a>\r\n        </div>\r\n      </li>\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/moves']\">Moves</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/more']\">More...</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" [(ngModel)]=\"pokeInput\" id=\"textoInput\" (keypress)=\"pokeEnter($event, pokeInput);\" name=\"pokeInput\" type=\"text\" placeholder=\"Name or ID...\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" [routerLink]=\"['/pokemon/' + pokeInput]\">Search pokémon!</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(pokePetition, pokeRouter) {
        this.pokePetition = pokePetition;
        this.pokeRouter = pokeRouter;
        this.pokeInput = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.pokeEnter = function (poKey, pokeInput) {
        if (poKey.keyCode == 13) {
            this.pokeRouter.navigateByUrl('/pokemon/' + pokeInput);
        }
        /*Easter pokEgg*/
        if (pokeInput === '619' || 'mienfoo' || 'Mienfoo') {
            console.log('BOOYAKA BOOAYA, 619!!');
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pokeservice_service__["a" /* PokeserviceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".cuerpo{\r\n  min-height: 85vh;\r\n}\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  margin: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  margin: 20px;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js\" integrity=\"sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js\" integrity=\"sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm\" crossorigin=\"anonymous\"></script>\r\n\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\r\n<div class=\"cuerpo\">\r\n  <div class=\"alert alert-warning\" role=\"alert\" style=\"text-align: center\">\r\n    Hey you! To run this website properly you have to enable CORS. <br> Have PokéFun!\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/more/more.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  more works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-more',
            template: __webpack_require__("./src/app/more/more.component.html"),
            styles: [__webpack_require__("./src/app/more/more.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/moves/moves.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/moves/moves.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  moves works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/moves/moves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovesComponent = /** @class */ (function () {
    function MovesComponent(pokePetition) {
        this.pokePetition = pokePetition;
    }
    MovesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokePetition.pokeMovesSearch().subscribe(function (pokeMove) {
            _this.pokeMove = pokeMove;
            console.log('Movimiento: ', _this.pokeMove.name);
        });
    };
    MovesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-moves',
            template: __webpack_require__("./src/app/moves/moves.component.html"),
            styles: [__webpack_require__("./src/app/moves/moves.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pokeservice_service__["a" /* PokeserviceService */]])
    ], MovesComponent);
    return MovesComponent;
}());



/***/ }),

/***/ "./src/app/poke-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokePipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PokePipePipe = /** @class */ (function () {
    function PokePipePipe() {
    }
    PokePipePipe.prototype.transform = function (pokeValue, pokeName, pokeMin, pokeMax) {
        return pokeValue.filter(function (pokemon) {
            if (pokemon.pokemon_species.name.includes(pokeName) && pokemon.entry_number >= pokeMin && pokemon.entry_number <= pokeMax) {
                return true;
            }
        });
    };
    PokePipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'pokePipe'
        })
    ], PokePipePipe);
    return PokePipePipe;
}());



/***/ }),

/***/ "./src/app/pokedex-detail/pokedex-detail.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokedex-detail/pokedex-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 text-center\" *ngIf=\"!pokedexLoaded\" style=\"height: 100vh; width: 100vw; background-color: rgba(0,0,0,0.5)\">\n  <img class=\"mx-auto mt-5\" src=\"../../assets/pikachu_loading.gif\" style=\"display: inline-block;\">\n  <h2>POKÉLOADING...</h2>\n</div>\n\n<div *ngIf=\"pokedexLoaded\" style=\"display: inline-block; float:left; width: 100%\">\n  <div class=\"col-lg-12\"><h1 style=\"text-align: center\"><span class=\"badge badge-secondary\">{{pokedexName.charAt(0).toUpperCase()}}{{pokedexName.slice(1)}} Dex:</span></h1></div>\n  <div id=\"pokeAdvanced\">\n    <div class=\"card\" style=\"background-color: rgba(255,255,255,0.9) !important; border-radius: 0px\">\n      <div class=\"card-header\" id=\"pokeHeading\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#pokeCollapse\" aria-expanded=\"true\" aria-controls=\"pokeCollapse\">\n            Advanced PokéSearch\n          </button>\n        </h5>\n      </div>\n      <div id=\"pokeCollapse\" class=\"collapse\" aria-labelledby=\"pokeHeading\" data-parent=\"#pokeAdvanced\">\n        <div class=\"card-body\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"pokeAdvancedName\">Starts with</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pokeName\" placeholder=\"Example: Bulb\" aria-label=\"Username\" aria-describedby=\"pokeAdvancedName\">\n            <div class=\"input-group-prepend ml-5\">\n              <span class=\"input-group-text\" id=\"pokeAdvancedStart\">From</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pokeMinimun\" placeholder=\"Example: 35\" aria-describedby=\"pokeAdvancedStart\">\n            <div class=\"input-group-prepend ml-5\">\n              <span class=\"input-group-text\" id=\"pokeAdvancedEnd\">To</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pokeMaximun\" placeholder=\"Example: 50\" aria-describedby=\"pokeAdvancedEnd\">\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"accordion\" class=\"mt-2\" *ngFor=\"let pokemon of pokemonsArray | pokePipe: pokeName:pokeMinimun:pokeMaximun\">\n    <div class=\"card col-lg-4 col-md-4 col-sm-6 col-12\" style=\"display: inline-flex; float: left; background-color:rgba(255,255,255,0.7); text-align: center\">\n      <div class=\"card-header\" id=\"{{pokemon.entry_number}}\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" [attr.data-target]=\"'#'+pokemon.pokemon_species.name\"\n                  aria-expanded=\"false\" [attr.aria-controls]=\"'#'+pokemon.pokemon_species.name\" (click)=\"pokeCall(pokemon.pokemon_species.name); pokeCollapse()\">\n            Number {{pokemon.entry_number}}: {{pokemon.pokemon_species.name.charAt(0).toUpperCase()}}{{pokemon.pokemon_species.name.slice(1)}}\n          </button>\n        </h5>\n      </div>\n      <div id=\"{{pokemon.pokemon_species.name}}\" class=\"collapse\" style=\"width: 100%;\"\n           data-parent=\"#accordion\">\n        <div *ngIf=\"pokeReturn\" class=\"card-body\">\n          {{pokemon.pokemon_species.name.charAt(0).toUpperCase()}}{{pokemon.pokemon_species.name.slice(1)}}\n          <hr>\n          <img src=\"{{pokeReturn.sprites.front_default}}\">\n          <p>National Dex ID: {{pokeReturn.id}}</p>\n          <button class=\"btn-hover color-2\" [routerLink]=\"['/pokemon/' + pokeReturn.id]\">Detailed view</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n"

/***/ }),

/***/ "./src/app/pokedex-detail/pokedex-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokedexDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokedexes_pokedexes_component__ = __webpack_require__("./src/app/pokedexes/pokedexes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokedexDetailComponent = /** @class */ (function () {
    function PokedexDetailComponent(route, pokePetition, pokedexComponent) {
        this.route = route;
        this.pokePetition = pokePetition;
        this.pokedexComponent = pokedexComponent;
        this.pokedexLoaded = false;
    }
    PokedexDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokeBoolean = true;
        this.route.params.subscribe(function (parameter) {
            _this.pokedexName = parameter['pokedexID'];
            _this.loadPokedex();
        });
    };
    PokedexDetailComponent.prototype.loadPokedex = function () {
        var _this = this;
        this.pokePetition.pokedexesSearch(this.pokedexName).subscribe(function (pokedexName) {
            _this.pokedex = pokedexName;
            _this.pokemonsArray = pokedexName.pokemon_entries;
            _this.pokedexLoaded = true;
            _this.pokeMinimun = 0;
            _this.pokeMaximun = 151;
            _this.pokeName = '';
        });
    };
    ;
    PokedexDetailComponent.prototype.pokeCall = function (pokemon) {
        var _this = this;
        if (this.pokeBoolean) {
            this.pokeBoolean = false;
            this.pokePetition.pokeSearch(pokemon).subscribe(function (pokeData) {
                _this.pokeReturn = pokeData;
                _this.pokeBoolean = true;
            });
        }
    };
    ;
    PokedexDetailComponent.prototype.pokeCollapse = function () {
        $('.collapse').collapse('hide');
    };
    ;
    PokedexDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokedex-detail',
            template: __webpack_require__("./src/app/pokedex-detail/pokedex-detail.component.html"),
            styles: [__webpack_require__("./src/app/pokedex-detail/pokedex-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__["a" /* PokeserviceService */], __WEBPACK_IMPORTED_MODULE_2__pokedexes_pokedexes_component__["a" /* PokedexesComponent */]])
    ], PokedexDetailComponent);
    return PokedexDetailComponent;
}());



/***/ }),

/***/ "./src/app/pokedexes/pokedexes.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokedexes/pokedexes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"card col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 pt-5\" *ngFor=\"let pokedex of pokedexArray\" style=\"height: 400px;display: inline-flex ; position: relative; background-color: rgba(255,255,255,0.4);\">\r\n      <img class=\"card-img-top\" style=\"width: 100%; height: 300px;\" src=\"../../assets/{{pokedex.pokeImage}}\">\r\n      <div class=\"card-body\">\r\n        <button class=\"btn-hover color-3 w-100 align-center\" [routerLink]=\"['/pokedexes/' + pokedex.pokedexName]\">{{pokedex.pokedexName}} details</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pokedexes/pokedexes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokedexesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokedexesComponent = /** @class */ (function () {
    function PokedexesComponent(pokePetition) {
        this.pokePetition = pokePetition;
        this.pokedexArray = [
            { pokedexName: 'National', pokedexID: 1, pokeImage: 'kanto_map.jpg' },
            { pokedexName: 'Kanto', pokedexID: 2, pokeImage: 'kanto_map.jpg' },
            { pokedexName: 'Original-Johto', pokedexID: 2, pokeImage: 'johto_map.png' },
            { pokedexName: 'Hoenn', pokedexID: 3, pokeImage: 'hoenn_map.png' },
            { pokedexName: 'Original-Sinnoh', pokedexID: 4, pokeImage: 'sinnoh_map.jpg' },
            { pokedexName: 'Original-Unova', pokedexID: 5, pokeImage: 'unova_map.png' }
        ];
    }
    PokedexesComponent.prototype.ngOnInit = function () {
    };
    PokedexesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokedexes',
            template: __webpack_require__("./src/app/pokedexes/pokedexes.component.html"),
            styles: [__webpack_require__("./src/app/pokedexes/pokedexes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pokeservice_service__["a" /* PokeserviceService */]])
    ], PokedexesComponent);
    return PokedexesComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/pokemon.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.cuerpo{\r\n  min-height: 85vh;\r\n}\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.btn-hover {\r\n  width: 200px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: 55px;\r\n  text-align:center;\r\n  border: none;\r\n  background-size: 300% 100%;\r\n\r\n  border-radius: 50px;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:hover {\r\n  background-position: 100% 0;\r\n  moz-transition: all .4s ease-in-out;\r\n  -webkit-transition: all .4s ease-in-out;\r\n  transition: all .4s ease-in-out;\r\n}\r\n\r\n.btn-hover:focus {\r\n  outline: none;\r\n}\r\n\r\n.btn-hover.color-1 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#40e495), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\r\n}\r\n\r\n.btn-hover.color-2 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5ce62), color-stop(#e43603), color-stop(#fa7199), to(#e85a19));\r\n  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);\r\n}\r\n\r\n.btn-hover.color-3 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#667eea), color-stop(#764ba2), color-stop(#6B8DD6), to(#8E37D7));\r\n  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);\r\n}\r\n\r\n.btn-hover.color-4 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#fc6076), color-stop(#ff9a44), color-stop(#ef9d43), to(#e75516));\r\n  background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);\r\n}\r\n\r\n.btn-hover.color-5 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#0ba360), color-stop(#3cba92), color-stop(#30dd8a), to(#2bb673));\r\n  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);\r\n}\r\n\r\n.btn-hover.color-6 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#009245), color-stop(#FCEE21), color-stop(#00A8C5), to(#D9E021));\r\n  background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);\r\n}\r\n\r\n.btn-hover.color-7 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#6253e1), color-stop(#852D91), color-stop(#A3A1FF), to(#F24645));\r\n  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);\r\n}\r\n\r\n.btn-hover.color-8 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#29323c), color-stop(#485563), color-stop(#2b5876), to(#4e4376));\r\n  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n}\r\n\r\n.btn-hover.color-9 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#25aae1), color-stop(#4481eb), color-stop(#04befe), to(#3f86ed));\r\n  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\r\n}\r\n\r\n.btn-hover.color-10 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#ed6ea0), color-stop(#ec8c69), color-stop(#f7186a) , to(#FBB03B));\r\n  background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n          box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);\r\n}\r\n\r\n.btn-hover.color-11 {\r\n  background-image: -webkit-gradient(linear, left top, right top, from(#eb3941), color-stop(#f15e64), color-stop(#e14e53), to(#e2373f));\r\n  background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);\r\n  -webkit-box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n          box-shadow: 0 5px 15px rgba(242, 97, 103, .4);\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 text-center\" *ngIf=\"!pokemonLoaded\" style=\"height: 100vh; width: 100vw; background-color: rgba(0,0,0,0.5)\">\r\n  <img class=\"mx-auto mt-5\" src=\"../../assets/pikachu_loading.gif\" style=\"display: inline-block;\">\r\n  <h2>POKÉLOADING...</h2>\r\n</div>\r\n<div class=\"row my-5 ml-5\" *ngIf=\"pokemonLoaded\">\r\n\r\n  <div class=\"card col-lg-3 col-md-3 col-sm-6 col-xs-6 col-12\" style=\"background-color: rgba(255,255,255,0.3);border-color: rgba(0,0,0,0.5);border: 2px solid; display: inline-block; float: left;\">\r\n    <img class=\"card-img-top pokeshiny\" src=\"{{pokemon.sprites.front_default}}\">\r\n    <hr>\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\" style=\"text-align: center\"><span style=\"font-size: large\">{{pokemon.name.charAt(0).toUpperCase()}}{{pokemon.name.slice(1)}}</span></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"card mx-3 col-lg-5 col-md-5 col-sm-5 col-12\" style=\"display: inline-block; float: left;\">\r\n    <div class=\"card-header alert alert-warning\">\r\n      Stats\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">Name: {{pokemon.name.charAt(0).toUpperCase()}}{{pokemon.name.slice(1)}}</li>\r\n      <li class=\"list-group-item\">Base experience: {{pokemon.base_experience}}xp</li>\r\n      <li class=\"list-group-item\">Weight: {{pokemon.weight/10}}kg</li>\r\n      <li class=\"list-group-item\">Height: {{pokemon.height/10}}m</li>\r\n      <li class=\"list-group-item\">National Dex ID: {{pokemon.id}}</li>\r\n      <li class=\"list-group-item\">Type/s: <span *ngFor=\"let type of pokemonArrayTypes\">{{type.type.name.charAt(0).toUpperCase()}}{{type.type.name.slice(1)}} </span></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card col-lg-3 col-md-3 col-sm-11 col-11\" style=\"display: inline-block; float: left;\">\r\n    <div class=\"card-header\">\r\n      Base stats on level 1\r\n    </div>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\" *ngFor=\"let pokestat of pokemonArrayStats\">{{pokestat.stat.name.charAt(0).toUpperCase()}}{{pokestat.stat.name.slice(1)}}: {{pokestat.base_stat}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"row\" *ngIf=\"pokemonLoaded\">\r\n  <button class=\"btn btn-link col-6\" [routerLink]=\"['/pokemon/' + (pokemon.id - 1)] \"style=\"height: 50px; border: 0px; text-align: left; color: white;background-color: rgba(255,255,255,0.4); border-radius: 0px;\"><b>&nbsp;&nbsp; <- Previous Pokemon (ID: {{pokemon.id -1}})</b></button>\r\n  <button class=\"btn btn-link col-6\" [routerLink]=\"['/pokemon/' + (pokemon.id + 1)] \"style=\"height: 50px; border: 0px; text-align: right; color: white;background-color: rgba(255,255,255,0.4); border-radius: 0px;\"><b> Next Pokemon (ID: {{pokemon.id +1}}) ->&nbsp;&nbsp;</b></button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__ = __webpack_require__("./src/app/pokeservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonComponent = /** @class */ (function () {
    function PokemonComponent(route, pokePetition) {
        this.route = route;
        this.pokePetition = pokePetition;
        this.pokemonLoaded = false;
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (parameter) {
            _this.pokemonName = parameter['pokeID'];
            _this.loadPokemon();
        });
    };
    PokemonComponent.prototype.loadPokemon = function () {
        var _this = this;
        this.pokePetition.pokeSearch(this.pokemonName).subscribe(function (pokemonData) {
            _this.pokemon = pokemonData;
            _this.pokemonArrayStats = pokemonData.stats;
            _this.pokemonArrayAbilities = pokemonData.abilities;
            _this.pokemonArrayTypes = pokemonData.types;
            _this.pokemonLoaded = true;
        });
    };
    PokemonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokemon',
            template: __webpack_require__("./src/app/pokemon/pokemon.component.html"),
            styles: [__webpack_require__("./src/app/pokemon/pokemon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__pokeservice_service__["a" /* PokeserviceService */]])
    ], PokemonComponent);
    return PokemonComponent;
}());



/***/ }),

/***/ "./src/app/pokeservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokeserviceService = /** @class */ (function () {
    function PokeserviceService(pokeHttp) {
        this.pokeHttp = pokeHttp;
    }
    PokeserviceService.prototype.pokeSearch = function (pokeName) {
        return this.pokeHttp.get('http://pokeapi.co/api/v2/pokemon/' + pokeName.toLowerCase());
    };
    ;
    PokeserviceService.prototype.pokeMovesSearch = function () {
        return this.pokeHttp.get('http://pokeapi.co/api/v2/move/2');
    };
    PokeserviceService.prototype.pokedexesSearch = function (pokedexID) {
        this.pokedexID = pokedexID;
        return this.pokeHttp.get('https://pokeapi.co/api/v2/pokedex/' + pokedexID.toLowerCase());
    };
    PokeserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PokeserviceService);
    return PokeserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map