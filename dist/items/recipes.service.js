"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In-Memory Store
 */
const items = {
    1: {
        id: 1,
        name: "Burger",
        description: "Tasty",
        type: "Main",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        description: "Cheesy",
        type: "Main",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        description: "Informative",
        type: "Main",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};
/**
 * Service Methods
 */
exports.findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return items;
});
exports.find = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const record = items[id];
    if (record) {
        return record;
    }
    throw new Error("No record found");
});
exports.create = (newItem) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    items[id] = Object.assign(Object.assign({}, newItem), { id });
});
exports.update = (updatedItem) => __awaiter(void 0, void 0, void 0, function* () {
    if (items[updatedItem.id]) {
        items[updatedItem.id] = updatedItem;
        return;
    }
    throw new Error("No record found to update");
});
exports.remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const record = items[id];
    if (record) {
        delete items[id];
        return;
    }
    throw new Error("No record found to delete");
});
//# sourceMappingURL=recipes.service.js.map