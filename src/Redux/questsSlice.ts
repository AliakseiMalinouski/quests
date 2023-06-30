import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentsI {
    id: number,
    name: string,
    email: string,
    avatar: string,
    alt: string,
    comment: string,
    rating: Array<string>
}

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
    young: boolean,
    comments: CommentsI[]
}

interface StateQuestsI {
    list: QuestI[],
    currentQuest: object | undefined | null
}

const initialState: StateQuestsI = {
    list: [],
    currentQuest: {}
}

export const questsSlice = createSlice({
    name: 'quests',
    initialState,
    reducers: {
        setQuests: (state, action) => {
            state.list = action.payload;
        },
        findByName: (state, action: PayloadAction<string>) => {
            let neededQuest = state.list.find(quest => quest.name === action.payload);
            state.currentQuest = neededQuest;
        },
        clearCurrentQuest: (state, action:PayloadAction<boolean>) => {
            if(action.payload) state.currentQuest = {};
        }
    }
});

export const {setQuests} = questsSlice.actions;
export default questsSlice.reducer;