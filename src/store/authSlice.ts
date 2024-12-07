import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { me_data_info } from "@/components/Layouts/DefaultLayout";

export interface IAuthState {
  authState: boolean;
  user_id: number;
  user_data: me_data_info;
}

export const initialState: IAuthState = {
  authState: false,
  user_id: 0,
  user_data: {
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    fio: '',
    role: '',
  },

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUserID: (state, action: PayloadAction<number>) => {
      state.user_id = action.payload;
    },
    setUserData: (state, action: PayloadAction<me_data_info>) => {
      state.user_data = action.payload;
    },

  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;