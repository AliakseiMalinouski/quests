import { setQuests } from "./questsSlice";

export const questsThunk = (dispatch: any): void => {
    fetch("https://gist.githubusercontent.com/AliakseiMalinouski/21e64619c1e4aaa26ef60b688f29f231/raw/a1fac17e56655e3cd2e40f61f3eb0104a6d9239b/Quests")
    .then(response => {
        if(!response.ok) {
            alert("Error with download");
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        dispatch(setQuests(data));
    })
    .catch(error => {
        alert(error)
    })
}