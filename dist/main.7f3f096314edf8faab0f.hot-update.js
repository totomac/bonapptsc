exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules\n */\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\ndotenv.config();\n/**\n * App Variables\n */\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = express_1.default();\n/**\n *  App Configuration\n */\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\n/**\n * Server Activation\n */\n// define a route handler for the default home page\napp.get(\"/\", (req, res) => {\n    res.send(\"Hello world!\");\n});\n// start the Express server\napp.listen(PORT, () => {\n    // tslint:disable-next-line:no-console\n    console.log(`server started at http://localhost:${PORT}`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/items/recipes.router.ts":
false,

/***/ "./src/items/recipes.service.ts":
false

};