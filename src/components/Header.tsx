import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { linksHeaderThunk } from "../Redux/linksHeaderThunk";
import { Link } from "./Link";

export const Header:React.FC = () => {

    let dispatch = useAppDispatch();

    const links = useAppSelector(state => state.linksHeader.links);

    useEffect(() => {
        if(!links.length) dispatch(linksHeaderThunk);
    }, [dispatch, links]);

    const linksMemo = useMemo(() => links && links.map(({id, text, href}) => <Link key={id} type="nav" text={text} href={href}/>), [links]);

    console.log(links)

    return (
        <div>
            {linksMemo}
        </div>
    )
}