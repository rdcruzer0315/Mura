import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    step: 1,
    isOpen: false,
    role: "",
    type: "",
    idx: 0,
    submit: false,
    loading: false,
}

export const postData = createAsyncThunk(
    "career/postData",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:8080/submit", data, {
            headers: {
                "Content-Type" : "multipart/form-data",
            },
        });
        console.log(response);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

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
        submit_appliction: (state, action) => {
            console.log(action.payload);
            state.submit = !state.submit;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postData.pending, (state, action) => {
            // Handle successful API response here if needed
            state.loading = true;
          });
        builder.addCase(postData.fulfilled, (state, action) => {
            // Handle successful API response here if needed
            state.loading = false;
        });
        builder.addCase(postData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Set the error field with the rejected value
        });
    },
});

export const { 
    modal_open, 
    set_role_type, 
    step_forward, 
    submit_appliction 
} = careerSlice.actions;

export default careerSlice.reducer;