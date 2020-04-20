"use strict";
/**
 * Required External Modules and Interfaces
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RecipesService = __importStar(require("./recipes.service"));
/**
 * Router Definition
 */
exports.recipesRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
// GET recipes/
exports.recipesRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield RecipesService.findAll();
        res.status(200).send(items);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
// GET items/:id
exports.recipesRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const item = yield RecipesService.find(id);
        res.status(200).send(item);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
// POST items/
exports.recipesRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = req.body.item;
        yield RecipesService.create(item);
        res.sendStatus(201);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
// PUT items/
exports.recipesRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = req.body.item;
        yield RecipesService.update(item);
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
// DELETE items/:id
exports.recipesRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        yield RecipesService.remove(id);
        res.sendStatus(200);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
//# sourceMappingURL=recipes.router.js.map