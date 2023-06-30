import React, { memo } from "react";
import { ProgressInreface } from "../inferfaces/interfaces";
import { CircularProgress } from "@mui/material";
import classes from './Progress.module.css';

export const Progress: React.FC<ProgressInreface> = memo(({color}) => {
    return (
        <div className={classes.Progress}>
            <CircularProgress color={color}/>
        </div>
    )
})