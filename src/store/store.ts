import { configureStore } from "@reduxjs/toolkit";
import {
  applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "../store/authSlice";
import { compoundReducer } from "../store/compoundSlice";




export const store = configureStore({
  reducer: { 
    auth: authReducer,
    compound: compoundReducer,
   },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;