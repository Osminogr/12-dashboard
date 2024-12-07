import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { COMPOUND_DATA } from "../types/compound_card_data";



const initialState: COMPOUND_DATA = {
    base_name:"",
    links: [
    ],
    images: [
    ],
    basedata: {
        description:''
    }
};

export const compoundSlice = createSlice({
  name: "compound",
  initialState,
  reducers: {
    setCompoundState: (state, action: PayloadAction<COMPOUND_DATA>) => {
      state = action.payload;
    },
    },
  },
);

export const { setCompoundState } = compoundSlice.actions;
export const compoundReducer = compoundSlice.reducer;