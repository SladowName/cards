import {FC, useState} from "react";
import classes from './index.module.scss';
import {Header} from "./header";
import {Tabs} from "./tabs";
import {Main} from "./main";

interface ContentProps {
    activeItem: string;
}

export const Content: FC<ContentProps> = ({activeItem}) => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className={classes.main}>
            <Header activeItem={activeItem}/>
            <Tabs activeItem={activeTab} setActiveItem={setActiveTab}/>
            <Main/>
        </div>
    )
}
