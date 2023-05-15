import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./Career";
import uploadReducer from "./Upload";

export const store = configureStore({
    reducer: {
        career: careerReducer,
        upload: uploadReducer,
    },
});