/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as RecipesService from "./recipes.service";
import { Recipe } from "./recipe.interface";
import { Recipes } from "./recipes.interface";

/**
 * Router Definition
 */
export const recipesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET recipes/

recipesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Recipes = await RecipesService.findAll();

      res.status(200).send(items);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// GET items/:id
recipesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const item: Recipe = await RecipesService.find(id);

      res.status(200).send(item);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// POST items/
recipesRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: Recipe = req.body.item;

      await RecipesService.create(item);

      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// PUT items/
recipesRouter.put("/", async (req: Request, res: Response) => {
    try {
      const item: Recipe = req.body.item;

      await RecipesService.update(item);

      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });


// DELETE items/:id
recipesRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await RecipesService.remove(id);

      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });