import wretch from "wretch";
import Cookies from "js-cookie";
import { BACKEND_HOST } from "@/envConfig";


// Base API setup for making HTTP requests
export const api = wretch("http://"+ BACKEND_HOST +":8000").accept("application/json");
const storeToken = (token: string, type: "access" | "refresh") => {
    Cookies.set(type + "Token", token);
  };
  
  /**
   * Retrieves a token from cookies.
   * @param {"access" | "refresh"} type - The type of the token to retrieve (access or refresh).
   * @returns {string | undefined} The token, if found.
   */
  const getToken = (type: string) => {
    return Cookies.get(type + "Token");
  };
  
  /**
   * Removes both access and refresh tokens from cookies.
   */
  const removeTokens = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  const register = (email: string, username: string, password: string) => {
    return api.post({ email, username, password }, "/auth/users/");
  };
  
  const login = (username: string, password: string) => {
    return api.post({ 'username': username, 'password':password }, "/auth/jwt/create");
  };
  
  const logout = () => {
    const refreshToken = getToken("refresh");
    return api.post({ refresh: refreshToken }, "/auth/logout/");
  };
  
  const handleJWTRefresh = () => {
    const refreshToken = getToken("refresh");
    return api.post({ refresh: refreshToken }, "/auth/jwt/refresh");
  };
  
  const resetPassword = (email: string) => {
    return api.post({ email }, "/auth/users/reset_password/");
  };
  
  const resetPasswordConfirm = (
    new_password: string,
    re_new_password: string,
    token: string,
    uid: string
  ) => {
    return api.post(
      { uid, token, new_password, re_new_password },
      "/auth/users/reset_password_confirm/"
    );
  };
  
export const AuthActions = () => {
    return {
      login,
      resetPasswordConfirm,
      handleJWTRefresh,
      register,
      resetPassword,
      storeToken,
      getToken,
      logout,
      removeTokens,
    };
  };