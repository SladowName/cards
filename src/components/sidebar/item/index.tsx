import {FC} from "react";

interface ItemProps {
    title: string;
    isActive: boolean;
    setActive: (title: string) => void;
    cssClass: string;
    activeClass: string;
}

export const Item: FC<ItemProps> = ({
    title,
    isActive,
    setActive,
    cssClass,
    activeClass,
}) => {
    const handleClick = () => {
        setActive(title);
    }

    return (
        <div onClick={handleClick} className={`${cssClass} ${isActive ? activeClass : ''}`}>
            {title}
        </div>
    )
}
