import { configureStore } from "@reduxjs/toolkit";
import questsSlice from "./questsSlice";

export const store = configureStore({
    reducer: {
        quests: questsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;