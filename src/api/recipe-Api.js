import request from "./request";
export const getAll = () => request("/recipes");

export const getOne = (recipeId) => request(`/recipes?id=eq.${recipeId}`);

export const create = (recipeData) => request("/recipes", "POST", recipeData);

export const update = (recipeId, recipeData) => request(`/recipes?id=eq.${recipeId}`, "PUT", recipeData);

export const del = (recipeId) => request(`/recipes?id=eq.${recipeId}`, "DELETE")