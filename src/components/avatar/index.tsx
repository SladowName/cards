import {CSSProperties, FC} from "react";

interface AvatarProps {
    styles?: CSSProperties;
    src: string;
}

export const Avatar: FC<AvatarProps> = ({styles, src}) => {
    return <img alt={'now image'} src={src} style={styles}/>
}