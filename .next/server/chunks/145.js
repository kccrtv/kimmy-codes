exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 110:
/***/ ((module) => {

// Exports
module.exports = {
	"lite": "Home_lite__QjJRT",
	"headerStyles": "Home_headerStyles__mrU1d",
	"heroStyles": "Home_heroStyles__Yv2RA",
	"footerStyles": "Home_footerStyles__qG6x6"
};


/***/ }),

/***/ 145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(110);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./public/images/kim-cinco.jpeg
/* harmony default export */ const kim_cinco = ({"src":"/_next/static/media/kim-cinco.356bc8df.jpeg","height":429,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALoqP//EABwQAAMAAQUAAAAAAAAAAAAAAAECAwAEBhIiI//aAAgBAQABPwBLVTdryfVVPOYM4K3mslXsSM//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAgBAgEBPwCGqz//xAAXEQADAQAAAAAAAAAAAAAAAAAAAhEx/9oACAEDAQE/AH2H/9k="});
;// CONCATENATED MODULE: ./pages/components/Hero.jsx





const Hero = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Home_module_default()).heroStyles,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Hi, I'm Kim."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "I design and build software."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: kim_cinco,
                alt: "kim cinco",
                height: 320,
                width: 340
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Home_module_default()).lite,
                        href: "https://www.linkedin.com/in/kimcinco/",
                        target: "_blank",
                        children: "LinkedIn"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Home_module_default()).lite,
                        href: "mailto:hey@kimmy.codes",
                        children: "Email"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Hero = (Hero);


/***/ })

};
;