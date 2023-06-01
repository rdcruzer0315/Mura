import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isOpenModal: false,
    faqs: [],
}

export const getFaqs = createAsyncThunk(
    "faq/getFaqs",
    async (thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/faqs");
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const postNewFaq = createAsyncThunk(
    "faq/postNewFaq",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post("http://localhost:8080/newFaq", data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

export const deleteFaq = createAsyncThunk(
    "faq/deleteFaq",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/deleteFaq", data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const faqSlice = createSlice({
    name: "faq",
    initialState,
    reducers: {
        showFaqModal: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFaqs.pending, (state, action) => {
        });
        builder.addCase(getFaqs.fulfilled, (state, action) => {
            state.faqs = action.payload;
        })
        builder.addCase(postNewFaq.pending, (state, action) => {
        });
        builder.addCase(postNewFaq.fulfilled, (state, action) => {
            if (action.payload === "Success!") {
                state.isOpenModal = !state.isOpenModal;
            }
        });
        builder.addCase(deleteFaq.pending, (state, action) => {
        });
        builder.addCase(deleteFaq.fulfilled, (state, action) => {
        });
    }
});

export const { showFaqModal } = faqSlice.actions;
export default faqSlice.reducer;