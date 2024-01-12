/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./footer/footer.js":
/*!**************************!*\
  !*** ./footer/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ \"./footer/footer.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./footer/index.html\");\n/* harmony import */ var _utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/htmlToElement.js */ \"./utils/htmlToElement.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst Footer = (0,_utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://economtechno/./footer/footer.js?");

/***/ }),

/***/ "./header/burger.js":
/*!**************************!*\
  !*** ./header/burger.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function(){\r\n    const burgerOpen = document.querySelector('.menu__span-item');\r\n    const burgerMenu = document.querySelector('.menu__burger-item');\r\n    const menuSpanItem = document.querySelector('.menu__span-item');\r\n\r\n    burgerOpen.addEventListener('click', () =>{\r\n        burgerMenu.classList.toggle('active');\r\n        \r\n    });\r\n    menuSpanItem.addEventListener('click', function() {\r\n        this.classList.toggle('close');\r\n    });\r\n})\n\n//# sourceURL=webpack://economtechno/./header/burger.js?");

/***/ }),

/***/ "./header/header.js":
/*!**************************!*\
  !*** ./header/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"./header/header.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./header/index.html\");\n/* harmony import */ var _utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/htmlToElement.js */ \"./utils/htmlToElement.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.js */ \"./header/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst Header = (0,_utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://economtechno/./header/header.js?");

/***/ }),

/***/ "./footer/index.html":
/*!***************************!*\
  !*** ./footer/index.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/clock.png */ \"./images/clock.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mail.png */ \"./images/mail.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/loco.png */ \"./images/loco.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/instagram.png */ \"./images/instagram.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/tiktok.png */ \"./images/tiktok.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vkontakte.png */ \"./images/vkontakte.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar code = \"<div class=\\\"footer__container\\\">\\r\\n    <div class=\\\"footer__row\\\">\\r\\n        <div class=\\\"footer__col\\\">\\r\\n            <div class=\\\"footer__logo\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" style=\\\"width: 200px;\\\">\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"footer__col\\\">\\r\\n            <div class=\\\"firm-info\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"clock\\\" style=\\\"width: 18px; height: 18px;\\\">\\r\\n                Пн-вс с 10:00 до 20:00\\r\\n            </div>\\r\\n            <div class=\\\"firm-info\\\">\\r\\n                <a data-copy=\\\"economtechno@mail.ru\\\"> \\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"mail\\\" style=\\\"width: 18px; height: 18px;\\\">\\r\\n                    economtechno@mail.ru\\r\\n                </a>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"footer__col\\\">\\r\\n            <div class=\\\"firm-location\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"loco\\\" style=\\\"width: 30px; height: 30px;\\\">\\r\\n                <a href=https://yandex.by/maps/org/ekonomtekhno/108084915455/?ll=27.434875%2C53.914363&mode=search&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJldbfEoB%2F3j8RS5F8JZASxT8iBgABAgMEBSgKOABAnQFIAGoCdWGdAc3MTD2gAQCoAQC9AWj0GgTCAQb%2F2fPSkgPqAQDyAQD4AQCCAhbRjdC60L7QvdC%2B0LzRgtC10YXQvdC%2BigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.434875%2C53.914363&sspn=0.059566%2C0.020573&text=эеономтехно&z=15>г.Минск ул. Кунцевщина, 35</a>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"footer__col\\\">\\r\\n            <div class=\\\"firm-info\\\">\\r\\n                <div class=\\\"firm-masanger\\\">\\r\\n                    <a href=\\\"https://www.instagram.com/economtechno/\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"instagram\\\">\\r\\n                    </a>\\r\\n                    <a href=\\\"https://www.tiktok.com/@economtechno\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"tiktik\\\">\\r\\n                    </a>\\r\\n                    <a href=\\\"https://vk.com/economtechno\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"vkontakte\\\">\\r\\n                    </a>\\r\\n                </div>\\r\\n                <div class=\\\"firm-telephone\\\">\\r\\n                    <a href=\\\"tel:+375296669453\\\">+375 29 666 94 53</a>\\r\\n                    <a href=\\\"tel:+375291200217\\\">+375 29 120 02 17</a>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://economtechno/./footer/index.html?");

/***/ }),

/***/ "./header/index.html":
/*!***************************!*\
  !*** ./header/index.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ \"./images/logo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/like.png */ \"./images/like.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/busket.png */ \"./images/busket.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<div class=\\\"header__container\\\">\\r\\n    <a class=\\\"header__logo\\\" href=\\\"index.html\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\">\\r\\n    </a>\\r\\n    <div class=\\\"header__row\\\">\\r\\n        <div class=\\\"header__burger\\\">\\r\\n            <nav class=\\\"header__nav\\\">\\r\\n                <ul class=\\\"header__menu\\\">\\r\\n                    <li class=\\\"menu__item first\\\">\\r\\n                        <a href=\\\"catalog.html\\\" class=\\\"menu__link\\\">\\r\\n                            Католог\\r\\n                        </a>\\r\\n                        <ul class=\\\"menu__submenu-first\\\">\\r\\n                            <li class=\\\"menu__item active\\\">\\r\\n                                <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                <span>Техника для дома</span>\\r\\n                                <span class=\\\"menu__arr\\\">\\r\\n                                    <svg width=\\\"15\\\" height=\\\"15\\\" viewBox=\\\"0 0 20 20\\\" >\\r\\n                                        <path fill=\\\"none\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" d=\\\"M8,5 L15,10 L8,15\\\"/> \\r\\n                                    </svg>\\r\\n                                </span>\\r\\n                                </a>\\r\\n                                <ul class=\\\"menu__submenu-second\\\">\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Стиральные и сушильные машины\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Техника для уборки\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Уход за одеждой\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Климатическая техника\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li class=\\\"menu__item active\\\">\\r\\n                                <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                    <span>Электроинструмент</span>\\r\\n                                    <span class=\\\"menu__arr\\\">\\r\\n                                        <svg width=\\\"15\\\" height=\\\"15\\\" viewBox=\\\"0 0 20 20\\\" >\\r\\n                                            <path fill=\\\"none\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" d=\\\"M8,5 L15,10 L8,15\\\"/> \\r\\n                                          </svg>\\r\\n                                    </span>\\r\\n                                </a>\\r\\n                                <ul class=\\\"menu__submenu-second lvl2\\\">\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Инструмент и оборудование\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Освещение\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Садовая техника\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li class=\\\"menu__item active\\\">\\r\\n                                <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                    <span>Электроника</span>\\r\\n                                    <span class=\\\"menu__arr\\\">\\r\\n                                        <svg width=\\\"15\\\" height=\\\"15\\\" viewBox=\\\"0 0 20 20\\\" >\\r\\n                                            <path fill=\\\"none\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" d=\\\"M8,5 L15,10 L8,15\\\"/> \\r\\n                                          </svg>\\r\\n                                    </span>\\r\\n                                </a>\\r\\n                                <ul class=\\\"menu__submenu-second lvl3\\\">\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Смартфоны и телефоны\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Компьютерные комплектующие\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Акустика\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Телевизоры\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Умный дом\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li class=\\\"menu__item active\\\">\\r\\n                                <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                    <span>Техника для кухни</span>\\r\\n                                    <span class=\\\"menu__arr\\\">\\r\\n                                        <svg width=\\\"15\\\" height=\\\"15\\\" viewBox=\\\"0 0 20 20\\\" >\\r\\n                                            <path fill=\\\"none\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" d=\\\"M8,5 L15,10 L8,15\\\"/> \\r\\n                                          </svg>\\r\\n                                    </span>\\r\\n                                </a>\\r\\n                                <ul class=\\\"menu__submenu-second lvl4\\\">\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Холодильники\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Стиральные машини\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Подготовка продуктов\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Плиты,печи,духовки\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Вытяжки\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Приготовление пищи\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li class=\\\"menu__item active\\\">\\r\\n                                <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                    <span>Автотовары</span>\\r\\n                                    <span class=\\\"menu__arr\\\">\\r\\n                                        <svg width=\\\"15\\\" height=\\\"15\\\" viewBox=\\\"0 0 20 20\\\" >\\r\\n                                            <path fill=\\\"none\\\" stroke=\\\"black\\\" stroke-width=\\\"2\\\" d=\\\"M8,5 L15,10 L8,15\\\"/> \\r\\n                                          </svg>\\r\\n                                    </span>\\r\\n                                </a>\\r\\n                                <ul class=\\\"menu__submenu-second lvl5\\\">\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Автоэлектроника\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Автозвук\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"menu__item\\\">\\r\\n                                        <a class=\\\"menu__link\\\" href=\\\"catalog.html\\\">\\r\\n                                            Автооборудование\\r\\n                                        </a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li class=\\\"menu__item\\\">\\r\\n                        <a href=\\\"stock.html\\\" class=\\\"menu__link\\\">\\r\\n                            Акции\\r\\n                        </a>\\r\\n                    </li>\\r\\n                    <li class=\\\"menu__item\\\">\\r\\n                        <a href=\\\"delivery.html\\\" class=\\\"menu__link\\\">\\r\\n                            Доставка\\r\\n                        </a>\\r\\n                    </li>\\r\\n                    <li class=\\\"menu__item\\\">\\r\\n                        <a href=\\\"about.html\\\" class=\\\"menu__link\\\">\\r\\n                            О нас\\r\\n                        </a>\\r\\n                    </li>\\r\\n                    <li class=\\\"menu__item last\\\">\\r\\n                        <a href=\\\"contact.html\\\" class=\\\"menu__link\\\">\\r\\n                            Контакты\\r\\n                        </a>\\r\\n                    </li>\\r\\n                </ul>\\r\\n            </nav>\\r\\n        </div>\\r\\n    </div>\\r\\n        <div class=\\\"menu__burger\\\">\\r\\n            <div class=\\\"menu__span-item\\\">\\r\\n            <span class=\\\"menu__span\\\"></span>\\r\\n            <span class=\\\"menu__span\\\"></span>\\r\\n            <span class=\\\"menu__span\\\"></span>\\r\\n        </div>\\r\\n        <div class=\\\"menu__burger-item\\\">\\r\\n            <div class=\\\"burger__nav\\\">\\r\\n                <nav class=\\\"burger__nav-navigation\\\">\\r\\n                    <ul class=\\\"burger__nav-navigation-ul\\\">\\r\\n                        <li class=\\\"menu__item\\\">\\r\\n                            <a href=\\\"catalog.html\\\" class=\\\"menu__link\\\" style=\\\"color: whitesmoke;\\\">\\r\\n                                Католог\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"menu__item\\\">\\r\\n                            <a href=\\\"stock.html\\\" class=\\\"menu__link\\\" style=\\\"color: whitesmoke;\\\">\\r\\n                                Акции\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        </li>\\r\\n                     <li class=\\\"menu__item\\\">\\r\\n                            <a href=\\\"delivery.html\\\" class=\\\"menu__link\\\" style=\\\"color: whitesmoke;\\\">\\r\\n                             Доставка\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"menu__item\\\">\\r\\n                            <a href=\\\"about.html\\\" class=\\\"menu__link\\\" style=\\\"color: whitesmoke;\\\">\\r\\n                                О нас\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"menu__item last\\\">\\r\\n                            <a href=\\\"contact.html\\\" class=\\\"menu__link\\\" style=\\\"color: whitesmoke;\\\">\\r\\n                                Контакты\\r\\n                            </a>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </nav>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"header__basket\\\">\\r\\n        <a href=\\\"#\\\" class=\\\"basket__link\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"like\\\">\\r\\n        </a>\\r\\n        <a href=\\\"#\\\" class=\\\"basket__link\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"busket\\\">\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://economtechno/./header/index.html?");

/***/ }),

/***/ "./productCard/src/main/index.html":
/*!*****************************************!*\
  !*** ./productCard/src/main/index.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../images/bank_card.png */ \"./images/bank_card.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../images/certificate.png */ \"./images/certificate.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../images/wheelbarrow.png */ \"./images/wheelbarrow.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../images/truck.png */ \"./images/truck.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<div class=\\\"main__container\\\">\\r\\n    <div class=\\\"product\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <h1 class=\\\"h1\\\"></h1>\\r\\n            <div class=\\\"product__row\\\">\\r\\n                <div class=\\\"product__gallery\\\">\\r\\n                    <img class=\\\"product__image\\\">\\r\\n                </div>\\r\\n                <div class=\\\"product__details\\\">\\r\\n                    <div class=\\\"preview-characteristics\\\">\\r\\n                        <h2 class=\\\"h2\\\" style=\\\"color: red;\\\">\\r\\n                            Основные характеристики\\r\\n                        </h2>\\r\\n                        <div class=\\\"preview-characteristics__wrapper\\\"></div>\\r\\n                    </div>\\r\\n                    <div class=\\\"delivery-information\\\">\\r\\n                        <div class=\\\"delivery-information__column\\\">\\r\\n                            <div class=\\\"delivery-information__item\\\">\\r\\n                                <div class=\\\"delivery-information__header\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"bakk__card\\\">\\r\\n                                    <span>Оплата</span>\\r\\n                                </div>\\r\\n                                <span>При получении,<br>Безналичный расчет,В рассрочку</span>\\r\\n                            </div>\\r\\n                            <div class=\\\"delivery-information__item\\\">\\r\\n                                <div class=\\\"delivery-information__header\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"сertificate\\\">\\r\\n                                    <span>Гарантия</span>\\r\\n                                </div>\\r\\n                                <span>От 2 месяцев до года</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"delivery-information__column\\\">\\r\\n                            <div class=\\\"delivery-information__item\\\">\\r\\n                                <div class=\\\"delivery-information__header\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"wheelbarrow\\\">\\r\\n                                    <span>Самовывоз</span>\\r\\n                                </div>\\r\\n                                <span>г.Минск ул.Кунцевщина,35 <br>Кажыдй день с 10:00 до 20:00</span>\\r\\n                            </div>\\r\\n                            <div class=\\\"delivery-information__item\\\">\\r\\n                                <div class=\\\"delivery-information__header\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"truck\\\">\\r\\n                                    <span>Доставка</span>\\r\\n                                </div>\\r\\n                                <span>В данный момент не осуществляем</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"product__characteristick\\\">\\r\\n                <div class=\\\"product__characteristick-head\\\">\\r\\n                    <h2 class=\\\"h2\\\">\\r\\n                        Характеристики\\r\\n                    </h2>\\r\\n                </div>\\r\\n                <table class=\\\"product__table\\\" >\\r\\n                    <tbody class=\\\"table__main\\\"></tbody>\\r\\n                </table>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://economtechno/./productCard/src/main/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    // eslint-disable-next-line no-param-reassign\r\n    options = {};\r\n  }\r\n\r\n  if (!url) {\r\n    return url;\r\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\r\n\r\n\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  if (options.hash) {\r\n    // eslint-disable-next-line no-param-reassign\r\n    url += options.hash;\r\n  }\r\n\r\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\r\n    return \"\\\"\".concat(url, \"\\\"\");\r\n  }\r\n\r\n  return url;\r\n};\n\n//# sourceURL=webpack://economtechno/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./footer/footer.scss":
/*!****************************!*\
  !*** ./footer/footer.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://economtechno/./footer/footer.scss?");

/***/ }),

/***/ "./header/header.scss":
/*!****************************!*\
  !*** ./header/header.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://economtechno/./header/header.scss?");

/***/ }),

/***/ "./productCard/src/main/main.scss":
/*!****************************************!*\
  !*** ./productCard/src/main/main.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://economtechno/./productCard/src/main/main.scss?");

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://economtechno/./scss/styles.scss?");

/***/ }),

/***/ "./productCard/src/index.js":
/*!**********************************!*\
  !*** ./productCard/src/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var _header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.js */ \"./header/header.js\");\n/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.js */ \"./productCard/src/main/main.js\");\n/* harmony import */ var _footer_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.js */ \"./footer/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst root = document.querySelector('main');\r\nconst head = document.querySelector('header');\r\nconst foot = document.querySelector('footer');\r\n\r\nhead.append(_header_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nroot.append(_main_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nfoot.append(_footer_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n//# sourceURL=webpack://economtechno/./productCard/src/index.js?");

/***/ }),

/***/ "./productCard/src/main/main.js":
/*!**************************************!*\
  !*** ./productCard/src/main/main.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./productCard/src/main/main.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./productCard/src/main/index.html\");\n/* harmony import */ var _utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/htmlToElement.js */ \"./utils/htmlToElement.js\");\n/* harmony import */ var _product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.js */ \"./productCard/src/main/product.js\");\n\r\n\r\n\r\n\r\n\r\nconst Main = (0,_utils_htmlToElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://economtechno/./productCard/src/main/main.js?");

/***/ }),

/***/ "./productCard/src/main/product.js":
/*!*****************************************!*\
  !*** ./productCard/src/main/product.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _catalog_src_main_product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../catalog/src/main/product.json */ \"./catalog/src/main/product.json\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const productName = document.querySelector('.h1');\r\n    const productImage = document.querySelector('.product__image');\r\n    const productDescription = document.querySelector('.preview-characteristics__wrapper');\r\n    const urlParams = new URLSearchParams(window.location.search);\r\n    const table = document.querySelector('.table__main');\r\n    const productId = urlParams.get('id');\r\n    const product = _catalog_src_main_product_json__WEBPACK_IMPORTED_MODULE_0__.find(product => product.id == productId);\r\n    const array = Object.entries(product.characteristics);\r\n\r\n    for (const [key, value] of array){\r\n        const row = document.createElement('tr');\r\n        const characteristic = document.createElement('td');\r\n        const characteristicValue = document.createElement('td');\r\n\r\n        characteristic.textContent = key;\r\n        characteristicValue.textContent = value;\r\n        \r\n        row.style.height = '35px';\r\n        characteristic.style.width = '50%';\r\n        characteristic.style.border = '0.5px solid grey';\r\n        characteristicValue.style.border = '0.5px solid grey'\r\n        row.classList.add('table__row');\r\n        characteristic.classList.add('table__key');\r\n\r\n        table.appendChild(row);\r\n        row.appendChild(characteristic);\r\n        row.appendChild(characteristicValue);\r\n        \r\n    }\r\n\r\n    productName.textContent = product.name;\r\n    productImage.src = product.image;\r\n    productImage.alt = product.name;\r\n    productDescription.textContent = product.description2;\r\n})\n\n//# sourceURL=webpack://economtechno/./productCard/src/main/product.js?");

/***/ }),

/***/ "./utils/htmlToElement.js":
/*!********************************!*\
  !*** ./utils/htmlToElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlString){\r\n    const template = document.createElement('template')\r\n    template.innerHTML = htmlString\r\n    return template.content.firstChild\r\n}\n\n//# sourceURL=webpack://economtechno/./utils/htmlToElement.js?");

/***/ }),

/***/ "./images/bank_card.png":
/*!******************************!*\
  !*** ./images/bank_card.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"125c861ab49b33a600cc.png\";\n\n//# sourceURL=webpack://economtechno/./images/bank_card.png?");

/***/ }),

/***/ "./images/busket.png":
/*!***************************!*\
  !*** ./images/busket.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8328e79473b418968902.png\";\n\n//# sourceURL=webpack://economtechno/./images/busket.png?");

/***/ }),

/***/ "./images/certificate.png":
/*!********************************!*\
  !*** ./images/certificate.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"829089b5a20f2b8db64d.png\";\n\n//# sourceURL=webpack://economtechno/./images/certificate.png?");

/***/ }),

/***/ "./images/clock.png":
/*!**************************!*\
  !*** ./images/clock.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3e3908ca7c3ae984bea8.png\";\n\n//# sourceURL=webpack://economtechno/./images/clock.png?");

/***/ }),

/***/ "./images/instagram.png":
/*!******************************!*\
  !*** ./images/instagram.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"120706ffd0ec631a24a0.png\";\n\n//# sourceURL=webpack://economtechno/./images/instagram.png?");

/***/ }),

/***/ "./images/like.png":
/*!*************************!*\
  !*** ./images/like.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ef2e8da6e59cf8632a48.png\";\n\n//# sourceURL=webpack://economtechno/./images/like.png?");

/***/ }),

/***/ "./images/loco.png":
/*!*************************!*\
  !*** ./images/loco.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"720e9a2f7409a088c71a.png\";\n\n//# sourceURL=webpack://economtechno/./images/loco.png?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"84a8bdf0104e08ea192a.png\";\n\n//# sourceURL=webpack://economtechno/./images/logo.png?");

/***/ }),

/***/ "./images/mail.png":
/*!*************************!*\
  !*** ./images/mail.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dbd9bd05cf9db3d3ce70.png\";\n\n//# sourceURL=webpack://economtechno/./images/mail.png?");

/***/ }),

/***/ "./images/tiktok.png":
/*!***************************!*\
  !*** ./images/tiktok.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6571e4dc8b36fabfd39e.png\";\n\n//# sourceURL=webpack://economtechno/./images/tiktok.png?");

/***/ }),

/***/ "./images/truck.png":
/*!**************************!*\
  !*** ./images/truck.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"83e343a37b61cc2ce4f9.png\";\n\n//# sourceURL=webpack://economtechno/./images/truck.png?");

/***/ }),

/***/ "./images/vkontakte.png":
/*!******************************!*\
  !*** ./images/vkontakte.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c293ca71ab1ad9d1d68f.png\";\n\n//# sourceURL=webpack://economtechno/./images/vkontakte.png?");

/***/ }),

/***/ "./images/wheelbarrow.png":
/*!********************************!*\
  !*** ./images/wheelbarrow.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9e843b21e326029d8816.png\";\n\n//# sourceURL=webpack://economtechno/./images/wheelbarrow.png?");

/***/ }),

/***/ "./catalog/src/main/product.json":
/*!***************************************!*\
  !*** ./catalog/src/main/product.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"name\":\"Мясорубка Moulinex HV10 ME856D32\",\"price\":350,\"description\":\"Мощность - 800Вт,\\\\nПроизводительность - 5.5 кг/мин\",\"description2\":\"Цена: 5 byn,\\\\nМощность: 800 Вт,\\\\nМаксимальная мощность при блокировке вала: 2100 Вт,\\\\nПроизводительность: 5.5 кг/мин,\\\\nРеверс: Есть,\\\\nНасадки: Диск для фарша, Для приготовления колбас, Кеббе,\\\\nКоличество формовочных дисков: 3\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Производитель:\":\"Moulinex\",\"Производительность, кг/мин:\":\"5.5\",\"Мощность, Вт:\":\"800\",\"Максимальная мощность при блокировке вала, Вт:\":\"2100\",\"Насадки:\":\"Диск для фарша; Для приготовления колбас; Кеббе\",\"Количество формовочных дисков:\":\"3\",\"Материал корпуса:\":\"Металл\",\"Цвет:\":\"Нержавеющая сталь\"},\"subCategory\":\"Подготовка продуктов\",\"image\":\"/images/moulinexmiaso.png\"},{\"id\":2,\"name\":\"Мультипекарь Atlanta ATH-1060\",\"price\":145,\"description\":\"Антипригарное покрытией\",\"description2\":\"Мультипекарь,\\\\nСэндвичница,\\\\nВафельница,\\\\nВид вафель: венские,\\\\nПотребляемая мощность: 700Вт,\\\\nСменные рабочие панели,\\\\nАнтипригарное покрытие,\\\\nЦвет: Черный\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Мультипекарь:\":\"✓\",\"Сэндвичница:\":\"✓\",\"Вафельница:\":\"✓\",\"Вид вафель:\":\"венские\",\"Потребляемая мощность:\":\"700 Вт\",\"Цвет:\":\"черный\",\"Материал корпуса:\":\"пластик\",\"Сменные рабочие панели:\":\"✓\",\"Количество сменных панелей:\":\"3 шт.\",\"Антипригарное покрытие:\":\"✓\",\"Поддон для сбора масла/жира:\":\"✓\",\"Замок-блокировка:\":\"✓\",\"Разделитель:\":\"✓\",\"Индикатор нагрева:\":\"✓\",\"Индикатор питания:\":\"✓\",\"Сэндвич:\":\"✓\",\"Вафли:\":\"✓\",\"Гриль:\":\"✓\"},\"subCategory\":\"Приготовление пищи\",\"image\":\"/images/atlanta.png\"},{\"id\":3,\"name\":\"Кофемашина Saeco Royal Professional New Steam System Chrome\",\"price\":700,\"description\":\"Емкость контейнера - 250 г,\\\\nПриготовление капучино - Ручное,\\\\nМощность - 1250 Вт\",\"description2\":\"Мощность: 1600Вт,\\\\nЦвет корпуса: хром,\\\\nТип используемого кофе: молотый, зерновой\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Встраиваемое исполнение :\":\"✕\",\"Тип:\":\"кофемашина\",\"Питание:\":\"от сети\",\"Мощность:\":\"1600 Вт\",\"Материал корпуса:\":\"металл, пластик\",\"Тип используемого кофе:\":\"молотый, зерновой\",\"Цвет корпуса :\":\"хром\",\"Емкость для воды:\":\"2.4 л\",\"Отсек для кофе:\":\"300 г\",\"Отсек для отходов:\":\"30 порций\",\"Регулировка степени помола:\":\"✓\",\"Регулировка температуры :\":\"✓\",\"Регулировка объема порции :\":\"✓\",\"Капучинатор :\":\"✓\",\"Площадка для подогрева чашек :\":\"✓\",\"Автоматическая чистка от накипи :\":\"✓\"},\"subCategory\":\"Приготовление пищи\",\"image\":\"/images/saeco].png\"},{\"id\":4,\"name\":\"Кухонный комбайн Normann AFP-947\",\"price\":190,\"description\":\"Мощность - 1000Вт, Объем чаши - 2 л\",\"description2\":\"Мощность: 1000Вт,\\\\nОбъём чаши: 2л,\\\\nКоличество скоростей: 2,\\\\nИмпульсный режим: ✓,\\\\nТерка: ✓,\\\\nТерка для драников: ✓\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Тип:\":\"кухонный комбайн\",\"Мощность:\":\"1000 Вт\",\"Материал корпуса:\":\"пластик\",\"Объем чаши:\":\"1,2 л\",\"Материал чаши :\":\"пластик\",\"Объем блендера:\":\"1,8 л\",\"Материал блендера:\":\"пластик\",\"Количество скоростей:\":\"2\",\"Импульсный режим:\":\"✓\",\"Защита от перегрузки :\":\"✓\",\"Прорезиненные ножки :\":\"✓\",\"Цвет :\":\"черный\"},\"subCategory\":\"Подготовка продуктов\",\"image\":\"/images/AFP-947.png\"},{\"id\":5,\"name\":\"Циркулярная пила Wortex CS1916L\",\"price\":245,\"description\":\"Мощность 1600Вт, Тип питания - от сети, Лазерный маркер\",\"description2\":\"Мощность: 1600Вт,\\\\nЧисло оборотов холостого хода: 4700 об/мин,\\\\nДиаметр диска: 190мм,\\\\nТип: циркулярная пила,\\\\nКласс профессиональности: бытовой\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Тип:\":\"циркулярная пила\",\"Мощность:\":\"1600 Вт\",\"Класс профессиональности:\":\"бытовой\",\"Питание:\":\"сеть, 220 В\",\"Вид электродвигателя :\":\"щеточный\",\"Число оборотов холостого хода :\":\"4700 об/мин\",\"Диаметр диска:\":\"190 мм\",\"Посадочный диаметр диска:\":\"30 мм\",\"Угол наклона влево/вправо:\":\"0/45 °\",\"Глубина пропила под углом 90° :\":\"65 мм\",\"Глубина пропила под углом 45°:\":\"45 мм\",\"Вес нетто :\":\"4,5 кг\",\"Используется для распиловки :\":\"дерева\"},\"subCategory\":\"Инструмент и оборудование\",\"image\":\"/images/1916L.png\"},{\"id\":6,\"name\":\"Рубанок электрический Molot MPL 2006\",\"price\":95,\"description\":\"Частота вращения вала - 16000 об/мин, Рабочая ширина - 82 мм\",\"description2\":\"Мощность: 600Вт,\\\\nЧисло оборотов холостого хода: 16000 об/мин,\\\\nШирина строгания: 82мм,\\\\nГлубина строгания: 2мм,\\\\nВид инструмента: электрорубанок\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Вид инструмента:\":\"электрорубанок\",\"Мощность:\":\"600 Вт\",\"Класс профессиональности:\":\"бытовой\",\"Питание:\":\"сеть, 220 В\",\"Вид электродвигателя :\":\"щеточный\",\"Число оборотов холостого хода :\":\"16000 об/мин\",\"Частота:\":\"50 Гц\",\"Ширина строгания:\":\"82 мм\",\"Глубина строгания:\":\"2 мм\",\"Глубина выборки четверти  :\":\"10 мм\",\"Вес нетто :\":\"2,4 кг\"},\"subCategory\":\"Инструмент и оборудование\",\"image\":\"/images/MPL2006.png\"},{\"id\":7,\"name\":\"Угловая шлифмашина Wortex AG 1211-2\",\"price\":155,\"description\":\"Частота вращения - 5500-11000об/мин, Резьба шпинделя - M14\",\"description2\":\"Мощность: 1100Вт,\\\\nЧисло оборотов холостого хода: 5500-11000 об/мин,\\\\nДиаметр круга: 125 мм\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Вид инструмента:\":\"шлифмашина угловая\",\"Мощность:\":\"600 Вт\",\"Класс профессиональности:\":\"бытовой\",\"Питание:\":\"сеть, 220 В\",\"Вид электродвигателя :\":\"щеточный\",\"Число оборотов холостого хода :\":\"5500-11000 об/мин\",\"Частота:\":\"50 Гц\",\"Диаметр круга:\":\"125 мм\",\"Посадочный диаметр:\":\"22,2 мм\",\"Тип выключателя:\":\"слайдерный (ползунковый)\",\"Резьба шпинделя:\":\"M14\",\"Регулировка оборотов:\":\"✓\",\"Блокировка шпинделя:\":\"✓\",\"Вес нетто :\":\"1,86 кг\"},\"subCategory\":\"Инструмент и оборудование\",\"image\":\"/images/AG1211.png\"},{\"id\":8,\"name\":\"Станок вертикально-сверлильный Wortex DB1605\",\"price\":300,\"description\":\"Мощность - 500Вт, Напряжение - 220 В, Количество скоростей - 9\",\"description2\":\"Количество скоростей: 9,\\\\nЧисло оборотов холостого хода: 280 - 2350 об/мин,\\\\nВысота подъема шпинделя: 50 мм,\\\\nДиаметр хвостовика: 16 мм\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Вид инструмента:\":\"станок сверлильный\",\"Напряжение питающей сети:\":\"220 В\",\"Мощность:\":\"500 Вт\",\"Вид электродвигателя :\":\"бесщеточный\",\"Число оборотов холостого хода :\":\"280 - 2350 об/мин\",\"Количество скоростей :\":\"9 Гц\",\"Высота подъема шпинделя:\":\"50 мм\",\"Диаметр сверления в стали :\":\"16 мм\",\"Диаметр хвостовика:\":\"16 мм\",\"Вес нетто :\":\"19,76 кг\"},\"subCategory\":\"Инструмент и оборудование\",\"image\":\"/images/DB1605.png\"},{\"id\":9,\"name\":\"Миксер планетарный Normann AMX-513\",\"price\":70,\"description\":\"Мощность - 350Вт, Объем чаши - 2 л, Количество насадок - 4\",\"description2\":\"Мощность: 350Вт,\\\\nОбъем чаши: 2л,\\\\nТип: стационарный,\\\\nЧисло скоростей: 3,\\\\nЦвет: белый\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Мощность:\":\"350 Вт\",\"Тип :\":\"стационарный\",\"Объем чаши :\":\"2 л\",\"Число скоростей :\":\"3\",\"Цвет:\":\"белый\",\"Турборежим:\":\"✓\",\"Вращение чаши:\":\"✓\",\"Кнопка отсоединения насадок:\":\"✓\",\"Материал чаши:\":\"пластик\",\"Количество видов насадок:\":\"2 шт\",\"Насадка для взбивания:\":\"✓\",\"Насадка для теста:\":\"✓\"},\"subCategory\":\"Подготовка продуктов\",\"image\":\"/images/amx-513.png\"},{\"id\":10,\"name\":\"Кухонная вытяжка Maunfeld Crosby Power 60\",\"price\":350,\"description\":\"Производительность - 1050 м³/час, Количество двигателей - 1, Количество скоростей - 3\",\"description2\":\"Конструкция: скрытая,\\\\nМонтаж: для встраивания,\\\\nСтиль: современный,\\\\nЦвет: черный,\\\\nМатериал корпуса: сталь\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Конструкция:\":\"скрытая\",\"Монтаж:\":\"для встраивания\",\"Стиль:\":\"современный\",\"Материал корпуса:\":\"сталь\",\"Цвет:\":\"черный\",\"Количество моторов:\":\"1\",\"Расположение мотора:\":\"встроенный\",\"Жироулавливающий фильтр:\":\"✓\",\"Угольный фильтр:\":\"✓\",\"Периметральное воздухопоглощение:\":\"нет\",\"Ширина:\":\"59.8 см\",\"Длина:\":\"28.9 см\",\"Высота:\":\"18.3 см\",\"Вес нетто:\":\"8.5 кг\"},\"subCategory\":\"Вытяжки\",\"image\":\"/images/CrosbyPower.png\"},{\"id\":11,\"name\":\"Вытяжка кухонная Maunfeld Crosby Rocky 60\",\"price\":400,\"description\":\"Производительность - 750 м3/час, Количество двигателей - 1, Количество скоростей - 3\",\"description2\":\"Конструкция: скрытая,\\\\nМонтаж: для встраивания,\\\\nСтиль: современный,\\\\nЦвет: черный,\\\\nМатериал корпуса: сталь\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Конструкция:\":\"скрытая\",\"Монтаж:\":\"для встраивания\",\"Стиль:\":\"современный\",\"Материал корпуса:\":\"сталь\",\"Цвет:\":\"черный\",\"Количество моторов:\":\"1\",\"Мощность мотора:\":\"190 Вт\",\"Жироулавливающий фильтр:\":\"✓\",\"Угольный фильтр:\":\"✓\",\"Периметральное воздухопоглощение:\":\"✓\",\"Ширина:\":\"59.8 см\",\"Длина:\":\"28.9 см\",\"Высота:\":\"18.3 см\",\"Вес нетто:\":\"8.5 кг\",\"Максимальный уровень шума:\":\"51 дБ\",\"Режим работы:\":\"отвод/циркуляция\",\"Количество скоростей:\":\"3\",\"Управление:\":\"электронное\",\"Максимальная производительность отвода:\":\"750 м³/ч\"},\"subCategory\":\"Вытяжки\",\"image\":\"/images/CrosbyRocky.png\"},{\"id\":12,\"name\":\"Кухонная вытяжка MAUNFELD Fantasy Light 60\",\"price\":630,\"description\":\"Производительность - 700 м³/час, Количество двигателей - 1, Количество скоростей - 3\",\"description2\":\"Конструкция: скрытая,\\\\nМонтаж: для встраивания,\\\\nСтиль: современный,\\\\nЦвет: белый,\\\\nМатериал корпуса: сталь,стекло\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Конструкция:\":\"скрытая\",\"Монтаж:\":\"для встраивания\",\"Стиль:\":\"современный\",\"Материал корпуса:\":\"сталь,стекло\",\"Цвет:\":\"белый\",\"Количество моторов:\":\"1\",\"Мощность мотора:\":\"121 Вт\",\"Жироулавливающий фильтр:\":\"✓\",\"Угольный фильтр:\":\"✓\",\"Периметральное воздухопоглощение:\":\"✓\",\"Ширина:\":\"60 см\",\"Длина:\":\"27.9 см\",\"Высота:\":\"31.1 см\",\"Вес нетто:\":\"8 кг\",\"Максимальный уровень шума:\":\"52 дБ\",\"Режим работы:\":\"отвод/циркуляция\",\"Количество скоростей:\":\"3\",\"Управление:\":\"сенсорное\",\"Максимальная производительность отвода:\":\"800 м³/ч\"},\"subCategory\":\"Вытяжки\",\"image\":\"/images/FantasyLight.png\"},{\"id\":13,\"name\":\"Газовая варочная поверхность HomSair HGS433S\",\"price\":630,\"description\":\"Конфорок на варочной панели - 3, Мощность - 5.3кВт\",\"description2\":\"Тип варочной поверхности: газовая,\\\\nРабочая поверхность: нержавеющая сталь,\\\\nШирина: 44 см,\\\\nТип установки: независимая,\\\\nВид управления: механическое\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Тип варочной поверхности:\":\"газовая\",\"Тип установки:\":\"независимая\",\"Рабочая поверхность:\":\"нержавеющая сталь\",\"Вид управления:\":\"механическое\",\"Тип переключателей:\":\"поворотные\",\"Расположение панели управления:\":\"спереди\",\"Номинальная мощность:\":\"5,3 кВт\",\"Цвет:\":\"нержавеющая сталь\",\"Электроподжиг:\":\"✓\",\"Тип электроподжига:\":\"автоматический\",\"Количество конфорок:\":\"3\",\"Конфорки газовые:\":\"3 шт.\",\"Подробная информация о конфорках:\":\"2600, 1700, 1000 Вт\",\"Ширина для встраивания:\":\"41 см\",\"Глубина для встраивания:\":\"48 см\",\"Ширина:\":\"44 см\",\"Глубина:\":\"51 см\",\"Высота:\":\"5,1 см\"},\"subCategory\":\"Плиты,печи,духовки\",\"image\":\"/images/HGS433S.png\"},{\"id\":14,\"name\":\"Электрическая варочная поверхность Maunfeld EEHS.32.4S\",\"price\":235,\"description\":\"Конфорок на варочной панели - 2, Мощность - 3кВт\",\"description2\":\"Тип варочной поверхности: электрическая,\\\\nРабочая поверхность: нержавеющая сталь,\\\\nШирина: 29 см,\\\\nТип установки: независимая,\\\\nТип переключателей: поворотные\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Тип варочной поверхности:\":\"электрическая\",\"Тип установки:\":\"независимая\",\"Рабочая поверхность:\":\"нержавеющая сталь\",\"Тип переключателей:\":\"поворотные\",\"Расположение панели управления:\":\"спереди\",\"Номинальная мощность:\":\"3 кВт\",\"Цвет:\":\"нержавеющая сталь\",\"Дизайн ДОМИНО:\":\"✓\",\"Количество конфорок:\":\"2\",\"Экспресс-конфорок:\":\"2\",\"Конфорки чугунные:\":\"2 шт.\",\"Ширина для встраивания:\":\"26 см\",\"Глубина для встраивания:\":\"48,5 см\",\"Ширина:\":\"29 см\",\"Глубина:\":\"51,5 см\"},\"subCategory\":\"Плиты,печи,духовки\",\"image\":\"/images/EEHS.32.4S.png\"},{\"id\":15,\"name\":\"Умные часы DIZO WATCH 2 DW2118\",\"price\":69,\"description\":\"Поддержка платформ - Android/iOS, Материал - Силикон/Металл, Размер дисплея - 1.69\",\"description2\":\"Синхронизация с: Android, iOS,\\\\nЭкран: TFT,\\\\nРазмер экрана: 1.69,\\\\nСпортивные профили: Есть,\\\\nBluetooth: 5.0\",\"category\":\"Электроника\",\"characteristics\":{\"Производитель:\":\"Dizo\",\"Дата выхода:\":\"2021\",\"Тип:\":\"Умные часы\",\"Подключение к смартфону:\":\"Bluetooth\",\"Технология экрана:\":\"TFT\",\"Встроенная камера:\":\"✕\",\"Синхронизация со смартфонами:\":\"Android; iOS\",\"Управление часами:\":\"Сенсорный экран\",\"Материал корпуса:\":\"Пластик; Металл\",\"Материал ремешка:\":\"Силикон\",\"Серия:\":\"Dizo Watch 2\",\"Спортивные профили:\":\"✓\",\"Уведомления:\":\"SMS; Email; Календарь; Социальные сети; Входящий звонок; Данные о тренировке; Будильник\",\"Звонки:\":\"✕\",\"Дистанционное управление:\":\"Камерой смартфона; Плеером смартфона\",\"Форма корпуса:\":\"Прямоугольные\",\"Пыле- и влагозащита:\":\"✓\",\"Вибрация:\":\"✓\",\"Сменный браслет:\":\"✓\",\"Длина корпуса, мм:\":\"45\",\"Ширина корпуса, мм:\":\"38.8\",\"Толщина корпуса, мм:\":\"12.2\",\"Размеры ремешка:\":\"150 - 215 мм\",\"Вес, г:\":\"52.5\",\"Размер экрана:\":\"1.69\",\"Подсветка экрана:\":\"✓\",\"Постоянная работа экрана:\":\"✕\",\"Датчики:\":\"Акселерометр; Шагомер; Пульсометр; Измерение насыщенности крови кислородом\",\"Навигация:\":\"✕\",\"Беспроводные интерфейсы:\":\"Bluetooth\",\"Емкость аккумулятора, мАч:\":\"260\",\"Мин. время работы, ч:\":\"240\",\"Макс. время работы, ч:\":\"480\",\"Время зарядки, ч:\":\"2\"},\"subCategory\":\"Смартфоны и телефоны\",\"image\":\"/images/DW2118.png\"},{\"id\":16,\"name\":\"Наушники беспроводные TFN Bloom / TFN-HS-BT450BK\",\"price\":69,\"description\":\"Тип подключения - Беспроводное, Емкость аккумулятора - 300 mAh\",\"description2\":\"Тип устройства: Наушники с микрофоном,\\\\nТип подключения: Беспроводные,\\\\nВид: Мониторные,\\\\nСъемный аудиокабель: Есть\",\"category\":\"Электроника\",\"characteristics\":{\"Производитель:\":\"TFN\",\"Тип:\":\"Наушники с микрофоном\",\"Вид:\":\"Мониторные\",\"Акустическое оформление:\":\"Закрытые\",\"Тип подключения:\":\"Беспроводные\",\"Тип беспроводных наушников:\":\"Съемный аудиокабель\",\"Пыле- и влагозащита:\":\"✕\",\"Материал корпуса:\":\"Пластик\",\"Цвет:\":\"Черный\",\"Количество наушников гарнитуры:\":\"2\",\"Креплениеи:\":\"Оголовье\",\"Складная конструкция:\":\"✕\",\"Материал амбушюр:\":\"Кожа\",\"Материал покрытия оголовья/дужки:\":\"Кожа\",\"Объемное звучание:\":\"✕\",\"Автопауза:\":\"✕\",\"Активное шумоподавление:\":\"✕\",\"Управление наушниками:\":\"Механическое\",\"Функции управления звуком:\":\"✓\",\"Регулировка громкости:\":\"✓\",\"Конструкция микрофона:\":\"Встроенный в корпус\",\"Приложение для управления:\":\"✕\",\"Подключение кабеля:\":\"Односторонний\",\"Штекер:\":\"3.5 мм\",\"Съемный аудиокабель:\":\"✓\",\"Тип излучателя:\":\"Динамический\",\"Нижняя воспроизводимая частота, Гц:\":\"20\",\"Верхняя воспроизводимая частота, Гц:\":\"20000\",\"Сопротивление, Ом:\":\"16\",\"Чувствительность, дБ:\":\"102\",\"Вес, г:\":\"83\",\"Шумоподавление микрофона:\":\"✕\",\"Поддержка аудиокодеков Bluetooth:\":\"SBC\",\"Multipoint:\":\"✕\",\"Тип беспроводного подключения:\":\"Bluetooth\",\"Версия Bluetooth:\":\"5.0\",\"Емкость аккумулятора, мАч:\":\"300\",\"Макс. время работы от одного заряда, ч:\":\"15\",\"Беспроводная зарядка:\":\"✕\",\"Быстрая зарядка:\":\"✕\",\"Разъем для зарядки:\":\"microUSB\"},\"subCategory\":\"Акустика\",\"image\":\"/images/TFN-HS-BT450BKTFN-HS-BT450BK.png\"},{\"id\":17,\"name\":\"Наушники беспроводные Anker SoundCore Liberty 3 Pro A3952G11\",\"price\":290,\"description\":\"Тип подключения - Беспроводное (True wireless), Время автономной работы - 8 ч\",\"description2\":\"Тип устройства: Наушники с микрофоном,\\\\nТип подключения: Беспроводные,\\\\nВид: Внутриканальные,\\\\nНазначение: Портативные,\\\\nАктивное шумоподавление: Есть,\\\\nПыле- и влагозащита: Есть,\\\\nБеспроводная зарядка: Есть,\\\\nВремя работы с зарядным кейсом: 32 ч\",\"category\":\"Электроника\",\"characteristics\":{\"Производитель:\":\"Anker\",\"Дата выхода:\":\"2021\",\"Назначение:\":\"Портативные\",\"Тип устройства:\":\"Наушники с микрофоном\",\"Вид:\":\"Внутриканальные\",\"Акустическое оформление:\":\"Закрытые\",\"Тип подключения:\":\"Беспроводные\",\"Тип беспроводных наушников:\":\"Полностью беспроводные\",\"Пыле- и влагозащита:\":\"✓\",\"Степень защиты (IP):\":\"IPX4\",\"Материал корпуса:\":\"Пластик\",\"Цвет:\":\"Черный\",\"Количество наушников гарнитуры:\":\"2\",\"Креплениеи:\":\"Внутри уха\",\"Материал амбушюр:\":\"Силикон\",\"Объемное звучание:\":\"✓\",\"Активное шумоподавление:\":\"✓\",\"УВиды функций управления звуком:\":\"Активация шумоподавления; Активация голосового помощника\",\"Функции управления звуком:\":\"✓\",\"Регулировка громкости:\":\"✓\",\"Конструкция микрофона:\":\"Встроенный в корпус\",\"Тип излучателя:\":\"Динамический/арматурный\",\"Диаметр излучателя, мм:\":\"10.6\",\"Вес, г:\":\"5.9 (каждый)\",\"Шумоподавление микрофона:\":\"✓\",\"Поддержка аудиокодеков Bluetooth:\":\"AAC; LDAC; SBC\",\"Тип беспроводного подключения:\":\"Bluetooth; NFC\",\"Версия Bluetooth:\":\"5.2\",\"Макс. время работы от одного заряда, ч:\":\"8\",\"Время работы с зарядным кейсом, ч:\":\"32\",\"Беспроводная зарядка:\":\"✓\",\"Быстрая зарядка:\":\"✓\",\"Разъем для зарядки:\":\"USB Type-C\"},\"subCategory\":\"Акустика\",\"image\":\"/images/A3952G11.png\"},{\"id\":18,\"name\":\"Отпариватель Kitfort KT-984-1\",\"price\":78,\"description\":\"Мощность - 1600 Вт, Мощность подачи пара - 28 г/мин\",\"description2\":\"Исполнение: ручной,\\\\nМаксимальное количество воды: 0,25 л,\\\\nПотребляемая мощность: 1600 Вт,\\\\nСкорость нагрева воды: 40 сек,\\\\nЦвет: фиолетовый\",\"category\":\"Техника для дома\",\"characteristics\":{\"Исполнение:\":\"ручной\",\"Потребляемая мощность:\":\"1600 Вт\",\"Максимальное количество воды:\":\"0,25 л\",\"Скорость нагрева воды:\":\"40 сек\",\"Цвет:\":\"фиолетовый\",\"Максимальный выход пара:\":\"28 г/мин\",\"Съемный резервуар для воды:\":\"✓\",\"Система самоочистки:\":\"✓\",\"Автоматическое отключение:\":\"✓\",\"Насадка-щетка:\":\"✓\",\"Насадка для деликатной ткани:\":\"✓\",\"Длина сетевого шнура:\":\"1,8 мм\",\"Высота:\":\"25 см\",\"Ширина:\":\"10,6 см\",\"Глубина:\":\"14,5 см\",\"Вес:\":\"1 кг\"},\"subCategory\":\"Уход за одеждой\",\"image\":\"/images/KT-984-1.png\"},{\"id\":19,\"name\":\"Утюг Evolution I-2226\",\"price\":38,\"description\":\"Мощность - 2200 Вт, Рабочая поверхность - Керамика\",\"description2\":\"Максимальная мощность: 2200 Вт,\\\\nРабочая поверхность: Керамика,\\\\nЕмкость резервуара для воды: 260 мл,\\\\nМощность подачи пара: 40 г/мин,\\\\nПаровой удар: Да,\\\\nИнтенсивность парового удара: 150 г/мин\",\"category\":\"Техника для дома\",\"characteristics\":{\"Бренд:\":\"Evolution\",\"Тип утюга:\":\"С пароувлажнением\",\"Максимальная мощность:\":\"2200  Вт\",\"Рабочая поверхность:\":\"Керамика\",\"Шарнирное крепление сетевого шнура:\":\"✓\",\"Автоматическое сматывание шнура:\":\"✕\",\"Беспроводное использование:\":\"✕\",\"Складная ручка:\":\"✕\",\"Желобок для пуговиц :\":\"✓\",\"Насадка для деликатных тканей:\":\"✕\",\"Дисплей:\":\"✕\",\"Индикатор работы:\":\"✓\",\"Индикатор нагрева:\":\"✓\",\"Цвет:\":\"Белый, Синий\",\"Спрей:\":\"✓\",\"Сухое глажение:\":\"✓\",\"Терморегулятор:\":\"✓\",\"Ионизация:\":\"✕\",\"Система защиты от накипи:\":\"✓\",\"Управление со смартфона:\":\"✕\",\"Функция самоочистки:\":\"✕\",\"Функция ECO:\":\"✕\",\"Противокапельная система:\":\"✓\",\"Автоматическое отключение:\":\"✓\",\"Мощность подачи пара:\":\"40  г/мин\",\"Регулировка подачи пара:\":\"✓\",\"Паровой удар:\":\"✓\",\"Интенсивность парового удара:\":\"150  г/мин\",\"Вертикальное отпаривание:\":\"✓\",\"Паровой носик:\":\"✓\"},\"subCategory\":\"Уход за одеждой\",\"image\":\"/images/I-2226.png\"},{\"id\":20,\"name\":\"Шкаф духовой электрический Shaub Lorenz SLB EB4610\",\"price\":800,\"description\":\"Мощность - 2.2 кВт, Объем духовки - 45 л, Максимальная температура - 240C\",\"description2\":\"Тип: Электрический,\\\\nОбъем: 45 л,\\\\nМощность подключения: 2200 Вт,\\\\nМаксимальная температура: 240C,\\\\nФункциональность: С конвекцией,\\\\nСпособ очистки: Аквачистка\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Бренд:\":\"Schaub Lorenz\",\"Тип:\":\"Электрический\",\"Объем, л:\":\"45\",\"Максимальная температура, °С:\":\"240\",\"Класс энергопотребления:\":\"A\",\"Мощность подключения, Вт:\":\"2200\",\"Функциональность:\":\"С конвекцией\",\"Гриль:\":\"Электрический\",\"Способ очистки:\":\"Аквачистка\",\"Дверца духовки:\":\"Откидная\",\"Количество стекол:\":\"2\",\"Переключатели:\":\"Поворотные\",\"Дисплей:\":\"✕\",\"Таймер:\":\"Звуковой\",\"Электроподжиг:\":\"✕\",\"Высота ниши для встраивания, см:\":\"60\",\"Высота, см:\":\"59.6\",\"Ширина ниши для встраивания, см:\":\"41.5\",\"Ширина, см:\":\"45\",\"Глубина ниши для встраивания, см:\":\"55\",\"Глубина, см:\":\"56.6\"},\"subCategory\":\"Плиты,печи,духовки\",\"image\":\"/images/EB4610.png\"},{\"id\":21,\"name\":\"Насос вибрационный РУЧЕЕК-1 10м (верхний забор)\",\"price\":50,\"description\":\"Мощность - 225 Вт, Место установки - погружной, Максимальная глубина погружения - 3 м\",\"description2\":\"Мощность: 225 Вт,\\\\nКачество воды: чистая,\\\\nТип: колодезный, вибрационный,\\\\nНазначение: водоснабжение,\\\\nПроизводительность: 17,5 л/мин\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Тип:\":\"колодезный, вибрационный\",\"Назначение:\":\"водоснабжение\",\"Производительность:\":\"17,5 л/мин\",\"Принцип работы:\":\"вибрационный\",\"Мощность:\":\"225 Вт\",\"Место установки:\":\"погружной\",\"Положение:\":\"вертикальное\",\"Забор воды:\":\"верхний\",\"Максимальная глубина погружения:\":\"3 м\",\"Двигатель:\":\"электрический\",\"Напряжение питающей сети:\":\"220 В\",\"Качество воды:\":\"чистая\",\"Диаметр скважины:\":\"100 мм\",\"Длина электрического кабеля:\":\"10 м\",\"Материал корпуса:\":\"алюминий\",\"Присоединительный размер:\":\"5/8\",\"Длина:\":\"28 см\",\"Вес нетто:\":\"3,6 кг\"},\"subCategory\":\"Садовая техника\",\"image\":\"/images/РУЧЕЕК-1.png\"},{\"id\":22,\"name\":\"Сушильная машина Maunfeld MFDM1410WH06\",\"price\":2350,\"description\":\"Количество программ сушки - 14, Тип мотора - Инверторный, Вес загрузки белья для сушки - 10 кг\",\"description2\":\"Установка: Отдельностоящая,\\\\nСистема сушки: Конденсация с тепловым насосом,\\\\nТип загрузки: Фронтальная,\\\\nМакс. загрузка белья: 10 кг,\\\\nКоличество программ: 14,\\\\nКласс энергопотребления: A+++,\\\\nГлубина: 64 см,\\\\nИнверторный двигатель: Да\",\"category\":\"Техника для дома\",\"characteristics\":{\"Производитель:\":\"MAUNFELD\",\"Установка:\":\"Отдельностоящая\",\"Система сушки:\":\"Конденсация с тепловым насосом\",\"Тип загрузки:\":\"Фронтальная\",\"Макс. загрузка белья, кг:\":\"10\",\"Скорость вращения барабана, об/мин:\":\"1000\",\"Количество программ:\":\"14\",\"Класс энергопотребления:\":\"A+++\",\"Дисплей:\":\"✓\",\"Цвет:\":\"Белый; Черный (люк)\",\"Управление:\":\"Сенсорное; Электронное\",\"Индикация:\":\"Цифровая; Символьная\",\"Инверторный двигатель:\":\"✓\",\"Прямой привод:\":\"✕\",\"Безопасность:\":\"Защита от детей; Защита от перегрева; Система самодиагностики\",\"Глубина, см:\":\"64\",\"Ширина, см:\":\"59.5\",\"Высота, см:\":\"84.5\",\"Вес, кг:\":\"53\"},\"subCategory\":\"Стиральные и сушильные машины\",\"image\":\"/images/MFDM1410WH06.png\"},{\"id\":23,\"name\":\"Пылесос вертикальный Deerma VC01\",\"price\":180,\"description\":\"Мощность всасывания - 125 Вт, Питание - Аккумулятор, Степень фильтрации - 3\",\"description2\":\"Тип: Бытовой,\\\\nТип уборки: Сухая,\\\\nПитание: От аккумулятора,\\\\nПотребляемая мощность: 125 Вт,\\\\nПылесборник: Контейнер,\\\\nУровень шума: 82 дБ,\\\\nТрубка: Цельная,\\\\nВес: 1.6 кг\",\"category\":\"Техника для дома\",\"characteristics\":{\"Производитель:\":\"Deerma\",\"Тип:\":\"Бытовой\",\"Тип уборки:\":\"Сухая\",\"Цвет:\":\"Белый\",\"Тип питания:\":\"От аккумулятора\",\"Потребляемая мощность, Вт:\":\"125\",\"Уровень шума максимальный, дБ:\":\"82\",\"Тип пылесборника:\":\"Контейнер\",\"Объем пылесборника, л:\":\"0.6\",\"Вертикальный:\":\"✓\",\"Тип трубки:\":\"Цельная\",\"Фильтры тонкой очистки:\":\"✓\",\"Насадки и щетки:\":\"Для мебели; Турбощетка; Щелевая\",\"Ширина, см:\":\"21\",\"Глубина, см:\":\"18.2\",\"Высота, см:\":\"115.5\",\"Вес, кг:\":\"1.6\"},\"subCategory\":\"Техника для уборки\",\"image\":\"/images/VC01.png\"},{\"id\":24,\"name\":\"Конвектор FAVOURITE IRS 2000M\",\"price\":180,\"description\":\"Потребляемая мощность - 2000 Вт, Рекомендуемая площадь обогрева - 25 м²\",\"description2\":\"Тип: Конвектор,\\\\nНагревательный элемент: Электрическая спираль,\\\\nМощность: 2000 Вт,\\\\nТермостат: Есть,\\\\nПлощадь обогрева: 20 м2,\\\\nУправление: Механическое,\\\\nСпособ установки: Напольный, Настенный,\\\\nБезопасность: Отключение при перегреве\",\"category\":\"Техника для дома\",\"characteristics\":{\"Производитель:\":\"Favourite\",\"Тип:\":\"Конвектор\",\"Нагревательный элемент:\":\"Электрическая спираль\",\"Максимальная мощность, Вт:\":\"2000\",\"Площадь обогрева, м2:\":\"20\",\"Цвет:\":\"Серый\",\"Тип питания:\":\"Электричество\",\"Регулировка мощности:\":\"✓\",\"Термостат:\":\"✓\",\"Регулировка температуры:\":\"✓\",\"Вентилятор:\":\"✕\",\"Вентиляция без нагрева:\":\"✕\",\"Поворот корпуса:\":\"✕\",\"Безопасность:\":\"Отключение при перегреве\",\"Тип управления:\":\"Механическое\",\"Таймер:\":\"✕\",\"Экран:\":\"✕\",\"Пульт управления:\":\"✕\",\"Пылевой фильтр:\":\"✕\",\"Отсек для хранения кабеля:\":\"✕\",\"Способ установки:\":\"Напольный; Настенный\",\"Ширина, см:\":\"65\",\"Глубина, см:\":\"1.8\",\"Высота, см:\":\"45\",\"Вес, кг:\":\"1.8\"},\"subCategory\":\"Климатическая техника\",\"image\":\"/images/2000M.png\"},{\"id\":25,\"name\":\"Мышь компьютерная SteelSeries Rival3 Bluetooth\",\"price\":70,\"description\":\"Тип - игровая, Разрешение оптического сенсора - 100–18,000 CPI, Вес - 106g / 96g\",\"description2\":\"Игровая: Да,\\\\nРазмер: Полноразмерная,\\\\nТип соединения: Проводная,\\\\nИнтерфейс: USB,\\\\nРазрешение: 8500 dpi,\\\\nКол-во кнопок: 6\",\"category\":\"Электроника\",\"characteristics\":{\"Производитель:\":\"SteelSeries\",\"Тип:\":\"Мышь\",\"Тип сенсора:\":\"Оптический\",\"Размер мыши:\":\"Полноразмерная\",\"Интерфейс соединения:\":\"USB\",\"Максимальное разрешение, dpi:\":\"8500\",\"Максимальная частота опроса:\":\"1000 Гц\",\"Игровая:\":\"✓\",\"Количество кнопок (включая колесо-кнопку):\":\"6\",\"Цвет:\":\"Черный\",\"Подсветка:\":\"✓\",\"4D-скроллинг:\":\"✕\",\"Сенсорное управление:\":\"✕\",\"Длина провода (для проводных), м:\":\"1.8\",\"Переключение разрешения:\":\"✓\",\"Индикатор заряда батареи мыши:\":\"✕\",\"Дизайн мыши:\":\"Симметричная форма\",\"Программируемые кнопки мыши:\":\"✓\",\"Система регулировки веса мыши:\":\"✕\",\"Материал корпуса:\":\"Пластик\",\"Ширина, мм:\":\"67\",\"Длина, мм:\":\"120.6\",\"Высота, мм:\":\"37.9\",\"Вес, г:\":\"77\"},\"subCategory\":\"Компьютерные комплектующие\",\"image\":\"/images/steal.png\"},{\"id\":26,\"name\":\"Зеркало с подсветкой Континент Style White Led D60\",\"price\":220,\"description\":\"Типоразмер - ширина 60, Материал - МДФ\",\"description2\":\"Типоразмер: ширина 60,\\\\nМатериал: МДФ\",\"category\":\"Электроинструмент\",\"characteristics\":{\"Производитель:\":\"Континент\",\"Тип:\":\"Зеркало\",\"Форма зеркала:\":\"Круглая\",\"Цвет:\":\"Белый\",\"Багет:\":\"Прямой\",\"Подсветка:\":\"Встроенная\",\"Тип лампы:\":\"Светодиодная (LED)\",\"Ширина:\":\"60 см\",\"Глубина:\":\"3 см\",\"Высота:\":\"60 см\"},\"subCategory\":\"Освещение\",\"image\":\"/images/window.png\"},{\"id\":27,\"name\":\"Телевизор LG 32LQ63006LA\",\"price\":700,\"description\":\"Тип экрана - LCD, Разрешение - Full HD-1920x1080, Smart TV, Диагональ - 32\",\"description2\":\"Тип: LED,\\\\nДиагональ экрана: 32,\\\\nРазрешение экрана: 1920x1080 (Full HD),\\\\nЧастота матрицы: 60 Гц,\\\\nТип матрицы: IPS,\\\\nПлатформа smart tv: LG webOS\",\"category\":\"Электроника\",\"characteristics\":{\"Производитель:\":\"LG\",\"Тип:\":\"LED\",\"Диагональ экрана:\":\"32\",\"Разрешение экрана:\":\"1920x1080 (Full HD)\",\"Частота матрицы, Гц:\":\"60\",\"Изогнутый экран:\":\"✕\",\"Поддержка 3D:\":\"✕\",\"Smart TV:\":\"✓\",\"Платформа Smart TV:\":\"LG webOS\",\"Версия системы:\":\"LG webOS 7.0\",\"Цвет:\":\"Черный\",\"Подставка:\":\"С двумя точками опоры\",\"ТВ-тюнер:\":\"Аналоговый; DVB-C; DVB-T; DVB-T2; DVB-S; DVB-S2\",\"Соотношение сторон:\":\"16:9\",\"Крепление на стену:\":\"✓\",\"Тип матрицы:\":\"IPS\",\"Глубина цвета:\":\"8 бит\",\"Расширенный динамический диапазон (HDR):\":\"✓\",\"Динамический вывод изображения:\":\"✕\",\"Форматы HDR:\":\"HDR10; HLG\",\"Фоновая подсветка:\":\"✕\",\"Голосовое управление:\":\"✕\",\"Сабвуфер:\":\"✕\",\"Звуковая панель (саундбар):\":\"✕\",\"Мощность звуковой системы, Вт:\":\"10\",\"Количество динамиков:\":\"2\",\"Поддержка HDMI eARC:\":\"✓\",\"Беспроводные интерфейсы:\":\"Bluetooth; Wi-Fi; AirPlay\",\"Версия Bluetooth:\":\"5.0\",\"Стандарт Wi-Fi:\":\"802.11ac\",\"Разъемы:\":\"HDMI; Цифровой выход (S/PDIF); USB; Ethernet (LAN); Вход RF\",\"Кол-во разъемов HDM:\":\"2\",\"Версия HDMI:\":\"HDMI 1.4\",\"Кол-во разъемов USB:\":\"1\",\"Крепление VESA:\":\"200x200\",\"Ширина, см:\":\"73.6\",\"Высота (с подставкой), см:\":\"46.4\",\"Глубина (с подставкой), см:\":\"18\",\"Высота (без подставки), см:\":\"43.7\",\"Толщина панели, см:\":\"8.29\",\"Вес (с подставкой), кг:\":\"4.7\",\"Вес (без подставки), кг:\":\"4.65\"},\"subCategory\":\"Телевизоры\",\"image\":\"/images/32LQ63006LA.png\"},{\"id\":28,\"name\":\"Датчик температуры и влажности AtuMan Duka TH1\",\"price\":37,\"description\":\"Прогноз погоды, Температура внутри помещения, Влажность внутри помещения\",\"description2\":\"Тип: термогигрометр,\\\\nИнтеграция в умный дом: нет,\\\\nПитание: батарейки\",\"category\":\"Электроника\",\"characteristics\":{\"Тип:\":\"термогигрометр\",\"Размещение:\":\"комнатный\",\"Интеграция в умный дом:\":\"✕\",\"Bluetooth:\":\"✕\",\"Wi-Fi:\":\"✕\",\"Цвет :\":\"белый\",\"Температура внутри помещения:\":\"✓\",\"Влажность внутри помещения:\":\"✓\",\"Давление внутри помещения:\":\"✕\",\"Температура снаружи помещения:\":\"✕\",\"Влажность снаружи помещения:\":\"✕\",\"Давление снаружи помещения:\":\"✕\",\"Скорость и направление ветра:\":\"✕\",\"Количество и интенсивность осадков:\":\"✕\",\"Температура точки росы:\":\"✕\",\"Температура охлаждения ветром:\":\"✕\",\"Количество ультрафиолета:\":\"✕\",\"Температура воды:\":\"✕\",\"Дисплей:\":\"монохромный числовой\",\"Прогноз погоды:\":\"✕\",\"Часы:\":\"✓\",\"Дополнительная индикация:\":\"календарь\",\"Варианты размещения:\":\"на стене, на поверхности\",\"Тип питания:\":\"батарейки (CR2032)\",\"Высота:\":\"68 мм\",\"Ширина:\":\"77 мм\",\"Длина:\":\"10 мм\",\"Масса:\":\"60 г\"},\"subCategory\":\"Умный дом\",\"image\":\"/images/TH1.png\"},{\"id\":29,\"name\":\"ВСТРАИВАЕМЫЙ ХОЛОДИЛЬНИК ZIGMUND & SHTAIN BR 12.1221 SX\",\"price\":700,\"description\":\"Габариты - 540 х 540 х 1220 мм, Общий объём брутто - 190 л., Потребление энергии - 0,76 кВт\",\"description2\":\"Тип: Встраиваемый,\\\\nКоличество камер: Однокамерный,\\\\nКомпоновка: Однодверный, Морозильник вверху,\\\\nОбъем холодильной камеры: 171 л,\\\\nОбъем морозильной камеры: 15 л,\\\\nУправление: Электронное\",\"category\":\"Техника для кухни\",\"characteristics\":{\"Производитель:\":\"Zigmund &amp; Shtain\",\"Тип:\":\"Встраиваемый\",\"Компоновка:\":\"Однодверный; Морозильник вверху\",\"No Frost:\":\"✕\",\"Зона свежести (BioFresh):\":\"✕\",\"Мультифункциональная зона:\":\"✕\",\"Цвет корпуса:\":\"Белый\",\"Климатический класс:\":\"ST\",\"Количество отделений морозильной камеры:\":\"1\",\"Возможность перенавешивания дверей:\":\"✓\",\"Дополнительная комплектация холодильного отделения:\":\"Лоток для яиц\",\"Ручки:\":\"Встроенные\",\"Объем холодильной камеры, л:\":\"171\",\"Объем морозильной камеры, л:\":\"15\",\"Количество компрессоров:\":\"1\",\"Инверторный компрессор:\":\"✕\",\"Тип управления:\":\"Электронное\",\"Расположение блока управления:\":\"Внутри\",\"Дисплей:\":\"✕\",\"Мощность замораживания, кг/сутки:\":\"2\",\"Сигнал об открытой двер:\":\"Звуковой\",\"Высота, см:\":\"122\",\"Ширина, см:\":\"54\",\"Глубина, см:\":\"54\"},\"subCategory\":\"Холодильники\",\"image\":\"/images/ZIGMUND.png\"}]');\n\n//# sourceURL=webpack://economtechno/./catalog/src/main/product.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"productPage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./productCard/src/index.js");
/******/ 	
/******/ })()
;