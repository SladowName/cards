import {FC, useRef} from "react";
import classes from './index.module.scss';
import '../main/index.scss';
import { ExtendedDocument } from '@types/web-animations-js';

interface CardProps {
    image: {url: string, transitionName: string};
    isActive: boolean;
    setActiveImage: (url: string) => void;
}

export const Card: FC<CardProps> = ({image, isActive, setActiveImage}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        (document as ExtendedDocument).startViewTransition(() => {
            ref.current && ref.current.classList.toggle('active');
        })
        setActiveImage(isActive ? '' : image.url)
    }

    return (
        <div
            ref={ref}
            onClick={handleClick}
            className={`${'card'} ${classes.card_img}`}
            style={{backgroundImage: `url(${image.url})`, viewTransitionName: image.transitionName}}
        >
        </div>
    )
}