import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    isOpen: false,
    role: "",
    type: "",
    idx: 0,
    submit: false,
}

const careerSlice = createSlice({
    name: "career",
    initialState,
    reducers: {
        modal_open: (state) => {
            if (state.isOpen) {
                state.step = 1;
            }
            state.isOpen = !state.isOpen;
        },
        set_role_type: (state, action) => {
            state.role = action.payload.role;
            state.type = action.payload.type;
            state.idx = action.payload.idx;
        },
        step_forward : (state) => {
            state.step ++;
        },
        submit_appliction: (state) => {
            state.submit = !state.submit;
        }
    }
});

export const { modal_open, set_role_type, step_forward, submit_appliction } = careerSlice.actions;
export default careerSlice.reducer;