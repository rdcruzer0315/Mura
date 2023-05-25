import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show_state: false,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        menu_show: (state) => {
            state.show_state = !state.show_state;
        },
    },
});

export const { 
    menu_show
} = menuSlice.actions;

export default menuSlice.reducer;