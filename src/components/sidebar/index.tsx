import {FC} from "react";
import {UserInfo} from "./user_info";
import classes from './index.module.scss'
import {Item} from "./item";
import {Toggle} from "./toggle";

interface SidebarProps {
    activeItem: string;
    setActiveItem: (title: string) => void;
}

const sideBarItem: {title: string}[] = [
    {
        title: 'Design',
    },
    {
        title: 'Barbeque',
    },
    {
        title: 'Productivity',
    },
    {
        title: 'Workout',
    },
    {
        title: 'Book',
    },
    {
        title: 'Snack',
    },
]

export const Sidebar: FC<SidebarProps> = ({activeItem, setActiveItem}) => {
    return (
        <div className={classes.sidebar}>
            <UserInfo email={'sladowname@mail.ru'} name={'Pasha'}/>
            <div className={classes.divider}></div>
            <div className={classes.item_container}>
                {sideBarItem.map((item) => (
                    <Item
                        activeClass={classes.active}
                        cssClass={classes.item}
                        title={item.title}
                        isActive={item.title === activeItem}
                        setActive={setActiveItem}
                    />
                ))}
            </div>
            <Toggle/>
        </div>
    )
}