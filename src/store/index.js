import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./Career";
import uploadReducer from "./Upload";
import adminReducer from "./Admin";

export const store = configureStore({
    reducer: {
        career: careerReducer,
        upload: uploadReducer,
        admin: adminReducer,
    },
});