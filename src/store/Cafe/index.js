import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isOpenModal: false,
}

export const getCafe = createAsyncThunk(
    "cafe/getCafe",
    async (thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/cafe");
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const postNewCafe = createAsyncThunk(
    "cafe/postNewCafe",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:8080/newcafe", data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

export const deleteCafe = createAsyncThunk(
    "cafe/deleteCafe",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/deleteCafe", data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const cafeSlice = createSlice({
    name: "cafe",
    initialState,
    reducers: {
        showCafeModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCafe.pending, (state, action) => {
        });
        builder.addCase(getCafe.fulfilled, (state, action) => {
        })
        builder.addCase(postNewCafe.pending, (state, action) => {
        });
        builder.addCase(postNewCafe.fulfilled, (state, action) => {
            if (action.payload === "Success!") {
                state.isOpenModal = !state.isOpenModal;
            }
        });
        builder.addCase(deleteCafe.pending, (state, action) => {
        });
        builder.addCase(deleteCafe.fulfilled, (state, action) => {
        });
    }
});

export const { showCafeModal } = cafeSlice.actions;
export default cafeSlice.reducer;