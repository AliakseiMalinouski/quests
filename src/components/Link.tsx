import React, { memo } from "react";
import { LinkInterface } from "../inferfaces/interfaces";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Link: React.FC<LinkInterface> = memo(({text, href, type}) => {

    let {t} = useTranslation();

    if(type === 'nav') {
        return <NavLink to={href}>
            {t(`${text}`)}
        </NavLink>
    }
    else {
        return (
        <a href={href} target="_blank" rel="noreferrer">
            {t(`${text}`)}
        </a>
        )
    }
})