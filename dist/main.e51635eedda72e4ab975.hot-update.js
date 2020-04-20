exports.id = "main";
exports.modules = {

/***/ "./src/items/recipes.service.ts":
/*!**************************************!*\
  !*** ./src/items/recipes.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * In-Memory Store\n */\nconst items = {\n    1: {\n        id: 1,\n        name: \"Burger\",\n        description: \"Tasty\",\n        type: \"Main\",\n        image: \"https://cdn.auth0.com/blog/whatabyte/burger-sm.png\"\n    },\n    2: {\n        id: 2,\n        name: \"Pizza\",\n        description: \"Cheesy\",\n        type: \"Main\",\n        image: \"https://cdn.auth0.com/blog/whatabyte/pizza-sm.png\"\n    },\n    3: {\n        id: 3,\n        name: \"Tea\",\n        description: \"Informative\",\n        type: \"Main\",\n        image: \"https://cdn.auth0.com/blog/whatabyte/tea-sm.png\"\n    }\n};\n/**\n * Service Methods\n */\nexports.findAll = () => __awaiter(void 0, void 0, void 0, function* () {\n    return items;\n});\nexports.find = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const record = items[id];\n    if (record) {\n        return record;\n    }\n    throw new Error(\"No record found\");\n});\nexports.create = (newItem) => __awaiter(void 0, void 0, void 0, function* () {\n    const id = new Date().valueOf();\n    items[id] = Object.assign(Object.assign({}, newItem), { id });\n});\nexports.update = (updatedItem) => __awaiter(void 0, void 0, void 0, function* () {\n    if (items[updatedItem.id]) {\n        items[updatedItem.id] = updatedItem;\n        return;\n    }\n    throw new Error(\"No record found to update\");\n});\nexports.remove = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const record = items[id];\n    if (record) {\n        delete items[id];\n        return;\n    }\n    throw new Error(\"No record found to delete\");\n});\n\n\n//# sourceURL=webpack:///./src/items/recipes.service.ts?");

/***/ })

};