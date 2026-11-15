import { authRequest } from "./request";

export const register = async ({ email, password }) => {
    return authRequest("/signup", "POST", { email, password });
};