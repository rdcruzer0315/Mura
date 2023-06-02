import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false,
    isShowButton: false,
    images: [],
}

export const getDinnerImages = createAsyncThunk(
    "dinner/getDinner",
    async (thunkAPI) => {
        try {
            const response = await fetch("/api/dinner/images");
            return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const dinnerSlice = createSlice({
    name: "dinner",
    initialState,
    reducers: {
        showDinnerModal: (state) => {
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
        builder.addCase(getDinnerImages.pending, (state, action) => {
        });
        builder.addCase(getDinnerImages.fulfilled, (state, action) => {
            state.images = action.payload;
        })
    }
});

export const { showDinnerModal, showApplyButton, showApply } = dinnerSlice.actions;
export default dinnerSlice.reducer;