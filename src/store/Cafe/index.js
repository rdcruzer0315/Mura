import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false,
    isShowButton: false,
    images: [],
}

export const getCafeImages = createAsyncThunk(
    "cafe/getCafe",
    async (thunkAPI) => {
        try {
            const response = await fetch("/api/cafe/images");
            return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const cafeSlice = createSlice({
    name: "cafe",
    initialState,
    reducers: {
        showCafeModal: (state) => {
            if (state.isOpenModal)
                state.file = null;
            state.isOpenModal = !state.isOpenModal;
        },
        showApplyButton: (state, action) => {
            state.file = action.payload;
            state.isShowButton = !state.isShowButton;
        },
        showApply: (state) => {
            state.isShowButton = !state.isShowButton;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCafeImages.pending, (state, action) => {
        });
        builder.addCase(getCafeImages.fulfilled, (state, action) => {
            state.images = action.payload;
        });
    }
});

export const { showCafeModal, showApplyButton, showApply } = cafeSlice.actions;
export default cafeSlice.reducer;