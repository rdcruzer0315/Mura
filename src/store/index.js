import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./Career";
import uploadReducer from "./Upload";
import adminReducer from "./Admin";
import menuReducer from "./Menu";
import jobReducer from "./Job";
import faqReducer from "./Faq";
import cafeReducer from "./Cafe";
import dinnerReducer from "./Dinner";
import barReducer from "./Bar";

export const store = configureStore({
    reducer: {
        career: careerReducer,
        upload: uploadReducer,
        admin: adminReducer,
        menu: menuReducer,
        job: jobReducer,
        faq: faqReducer,
        cafe: cafeReducer,
        dinner: dinnerReducer,
        bar: barReducer,
    },
});