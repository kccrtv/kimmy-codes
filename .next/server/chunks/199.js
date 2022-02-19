"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(110);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "use-dark-mode"
var external_use_dark_mode_ = __webpack_require__(256);
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_);
;// CONCATENATED MODULE: ./public/images/scorpion.svg
/* harmony default export */ const scorpion = ({"src":"/_next/static/media/scorpion.95f72125.svg","height":512,"width":512});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./pages/components/Header.jsx







const Header = ()=>{
    const darkmode = external_use_dark_mode_default()(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "navbar",
        className: (Home_module_default()).headerStyles,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: scorpion,
                    alt: "scorpion emoji",
                    width: "50",
                    height: "50"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "button",
                onClick: darkmode.toggle,
                children: "☀️ 🌒"
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;