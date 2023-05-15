import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resume_modal_open: false,
    resume_name: "",
    upload_button: false,
    upload_application: false,
}

const careerSlice = createSlice({
    name: "career",
    initialState,
    reducers: {
        resumeModal: (state) => {
            state.resume_modal_open = !state.resume_modal_open;
            state.resume_name = "";
            state.upload_button = false;
            state.upload_application = false;
        },
        resumeUpload: (state, action) => {
            state.resume_name = action.payload.file_name;
            state.upload_application = true;
            state.resume_modal_open = !state.resume_modal_open;
        },
        uploadButton: (state) => {
            state.upload_button = true;
        }
    }
});

export const { resumeModal, resumeUpload, uploadButton } = careerSlice.actions;
export default careerSlice.reducer;