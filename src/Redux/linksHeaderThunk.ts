import { setLinks } from "./linksHeaderSlice";

import { LinkInterface } from "../inferfaces/interfaces";

export const linksHeaderThunk = async (dispatch: any): Promise<LinkInterface[] | any> => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/AliakseiMalinouski/001446786a516b3abf59eb12b75fe5f9/raw/b85177c9e87f3e07d477fed210e2dbadaf0c331a/LinksQuestsHeader");
        if(response.ok) {
            const data = await response.json();
            dispatch(setLinks(data));
            return data;
        }
        else {
            alert('Error with download');
        }
    } catch {
        alert('Error with download');
    }
}