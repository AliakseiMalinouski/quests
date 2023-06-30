import React, { useEffect } from "react";
import { Progress } from "./Progress";
import { useAppDispatch, useAppSelector } from "../hooks";
import { questsThunk } from "../Redux/questsThunk";

export const Home: React.FC = () => {
    
    let dispatch = useAppDispatch();

    const quests = useAppSelector(state => state.quests.quests);

    useEffect(() => {
        if(!quests.length) dispatch(questsThunk);
    }, [dispatch, quests]);

    return (
        <div>
            
        </div>
    )
}