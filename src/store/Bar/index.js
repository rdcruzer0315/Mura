import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false,
    isShowButton: false,
    images: [],
}

export const getBarImages = createAsyncThunk(
    "bar/getBar",
    async (thunkAPI) => {
        try {
            const response = await fetch("/api/bar/images");
            return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const barSlice = createSlice({
    name: "bar",
    initialState,
    reducers: {
        showBarModal: (state) => {
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
        builder.addCase(getBarImages.pending, (state, action) => {
        });
        builder.addCase(getBarImages.fulfilled, (state, action) => {
            state.images = action.payload;
        })
    }
});

export const { showBarModal, showApplyButton, showApply } = barSlice.actions;
export default barSlice.reducer;