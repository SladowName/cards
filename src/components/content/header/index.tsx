import {FC} from "react";
import first from '../../../assets/first.avif';
import second from '../../../assets/second.avif';
import third from '../../../assets/third.avif';
import {Avatar} from "../../avatar";
import classes from './index.module.scss';


interface HeaderProps {
    activeItem: string;
}

const avatarArray = [
    first,
    second,
    third
]

export const Header: FC<HeaderProps> = ({activeItem}) => {
    return (
        <div className={classes.header}>
            <div className={classes.title}>
                {activeItem}
            </div>
            <div className={classes.avatar_container}>
                {avatarArray.map((avatar) => (
                    <Avatar
                        src={avatar}
                        styles={
                            {
                                width: 36,
                                height: 36,
                                objectFit: "cover",
                                flexShrink: 0,
                                borderRadius: '50%',
                                border: '2px solid var(--theme-bg-color)',
                                marginLeft: -5
                            }}
                    />
                ))}
                <button className={classes.add_button}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                </button>
            </div>
            <button className={classes.header__add}>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15">
                    </path>
                </svg>
            </button>
        </div>
    )
}