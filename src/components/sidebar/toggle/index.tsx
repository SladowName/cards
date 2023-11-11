import {FC} from "react";
import classes from './index.module.scss';

interface ToggleProps {

}

export const Toggle: FC<ToggleProps> = () => {
    return (
        <label className={classes.toggle}>
            <input type={"checkbox"}/>
            <span className={classes.slider}></span>
        </label>
    )
}