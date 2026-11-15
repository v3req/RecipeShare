import request from "./request";
export const getAll = () => request("/recipes");

export const create = (recipeData) => request("/recipes", "POST", recipeData);