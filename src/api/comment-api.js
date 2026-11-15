import request from "./request";

export const getAllComments = (recipeId) => {
    return request(`/comments?recipe_id=eq.${recipeId}&order=created_at.desc`);
};