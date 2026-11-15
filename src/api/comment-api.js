import request from "./request";

export const getAll = (recipeId) => {
    return request(`/comments?recipe_id=eq.${recipeId}&order=created_at.desc`);
};