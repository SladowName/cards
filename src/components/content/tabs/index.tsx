import {FC} from "react";
import classes from './index.module.scss';
import {Item} from "../../sidebar/item";

interface TabsProps {
    activeItem: string;
    setActiveItem: (title: string) => void;
}

const tabsTitle: {title: string}[] = [
    {
        title: 'All',
    },
    {
        title: 'Videos',
    },
    {
        title: 'Notes',
    },
    {
        title: 'Music',
    },
    {
        title: 'To-do list',
    },
]

export const Tabs: FC<TabsProps> = ({
    activeItem,
    setActiveItem,
}) => {
    return (
        <div className={classes.container}>
            {tabsTitle.map((tab) => (
                <Item
                    title={tab.title}
                    isActive={activeItem === tab.title}
                    setActive={setActiveItem}
                    cssClass={classes.item}
                    activeClass={classes.active}
                />
            ))}
        </div>
    )
}