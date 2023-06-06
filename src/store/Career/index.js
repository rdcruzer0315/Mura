import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    resume: "",
}

export const postData = createAsyncThunk(
    "career/postData",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("/api/submit", data, {
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
        setResumeName: (state, action) => {
            console.log(action.payload);
            state.resume = action.payload;
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
    setResumeName,
} = careerSlice.actions;

export default careerSlice.reducer;