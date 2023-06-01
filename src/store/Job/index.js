import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isOpenModal: false,
    jobs: [],
}

export const getJobs = createAsyncThunk(
    "job/getJobs",
    async (thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/jobs");
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const postNewJob = createAsyncThunk(
    "job/postNewJob",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:8080/newJob", data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

export const deleteJob = createAsyncThunk(
    "job/deleteJob",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/deleteJob", data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        showJobModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getJobs.pending, (state, action) => {
        });
        builder.addCase(getJobs.fulfilled, (state, action) => {
            state.jobs = action.payload;
        })
        builder.addCase(postNewJob.pending, (state, action) => {
        });
        builder.addCase(postNewJob.fulfilled, (state, action) => {
            if (action.payload === "Success!") {
                state.isOpenModal = !state.isOpenModal;
            }
        });
        builder.addCase(deleteJob.pending, (state, action) => {
        });
        builder.addCase(deleteJob.fulfilled, (state, action) => {
        });
    }
});

export const { showJobModal } = jobSlice.actions;
export default jobSlice.reducer;