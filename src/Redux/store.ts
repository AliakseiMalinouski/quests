import { configureStore } from "@reduxjs/toolkit";
import questsSlice from "./questsSlice";
import linksHeaderSlice from "./linksHeaderSlice";

export const store = configureStore({
    reducer: {
        quests: questsSlice,
        linksHeader: linksHeaderSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;