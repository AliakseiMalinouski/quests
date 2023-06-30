import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestI {
    id: number,
    name: string,
    preview: string,
    people: string,
    time: number,
    duration: string,
    price: number,
    currency: string,
    description: string,
    image: string,
    alt: string,
    actor: boolean,
    difficult: string,
    scary: string,
    type: string,
    young: boolean
}

interface StateQuestsI {
    list: QuestI[]
}

const initialState: StateQuestsI = {
    list: []
}

export const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
        setQuests: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const {setQuests} = questsSlice.actions;
export default questsSlice.reducer;