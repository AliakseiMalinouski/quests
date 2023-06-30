import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LinkI {
    id: number,
    text: string,
    href: string
}

interface StateLinkI {
    links: LinkI[]
}

const initialState: StateLinkI = {
    links: []
}

export const linkHeaderSlice = createSlice({
    name: 'linksHeader',
    initialState,
    reducers: {
        setLinks: (state, action: PayloadAction<LinkI[]>) => {
            state.links = action.payload;
        }
    }
});

export const { setLinks } = linkHeaderSlice.actions;
export default linkHeaderSlice.reducer;