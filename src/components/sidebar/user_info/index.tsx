import {FC} from "react";
import avatar from '../../../assets/userPhoto.jpg'
import {Avatar} from "../../avatar";
import classes from './index.module.scss';

interface UserInfoProps {
    name: string;
    email: string;
}

export const UserInfo: FC<UserInfoProps> = ({
    name,
    email,
}) => {
    return (
        <div className={classes.container}>
            <Avatar src={avatar} styles={{width: 54, height: 54, borderRadius: 10, objectFit: 'cover'}}/>
            <div className={classes.container_text}>
                <div className={classes.name}>{name}</div>
                <div className={classes.email}>{email}</div>
            </div>
        </div>
    )
}