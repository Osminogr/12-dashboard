import React from "react";
import { useForm } from "react-hook-form";
import { AuthActions } from "@/app/auth/utils";
import { useRouter } from "next/navigation";
import { IAuthState, authSlice } from "@/store/authSlice"
import {fetcher} from "@/fetcher"
import Cookies from "js-cookie";


import { useAppDispatch, useAppSelector } from "@/store/store";


type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const router = useRouter();

  const { login, storeToken } = AuthActions();
  const dispatch = useAppDispatch()
  const state_auth = useAppSelector(state => state.auth)
  const onSubmit = (data: FormData) => {
    login(data.username, data.password)
      .json((json) => {
        console.log(json);
        storeToken(json.access, "access");
        storeToken(json.refresh, "refresh");
        dispatch(authSlice.actions.setAuthState(true))
        fetcher("/auth/users/me/").then((data)  => {
          dispatch(authSlice.actions.setUserID(data.id))
        })
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError("root", { type: "manual", message: err.json });
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label className="block" htmlFor="username">
              Login
            </label>
            <input
              type="text"
              placeholder="username"
              {...register("username", { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.username && (
              <span className="text-xs text-red-600">Login is required</span>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="px-12 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Login
            </button>
          </div>
          {errors.root && (
            <span className="text-xs text-red-600">{errors.root.message}</span>
          )}
        </form>
    </div>
  );
};

export default Login;