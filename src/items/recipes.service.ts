/**
 * Data Model Interfaces
 */
import { Recipe } from "./recipe.interface";
import { Recipes } from "./recipes.interface";

/**
 * In-Memory Store
 */

const items: Recipes = {
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

export const findAll = async (): Promise<Recipes> => {
    return items;
  };

export const find = async (id: number): Promise<Recipe> => {
const record: Recipe = items[id];

if (record) {
    return record;
}

throw new Error("No record found");
};

export const create = async (newItem: Recipe): Promise<void> => {
    const id = new Date().valueOf();
    items[id] = {
      ...newItem,
      id
    };
  };

  export const update = async (updatedItem: Recipe): Promise<void> => {
    if (items[updatedItem.id]) {
      items[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error("No record found to update");
  };

  export const remove = async (id: number): Promise<void> => {
    const record: Recipe = items[id];

    if (record) {
      delete items[id];
      return;
    }

    throw new Error("No record found to delete");
  };