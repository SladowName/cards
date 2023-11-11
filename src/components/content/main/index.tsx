import {FC, useState} from "react";
import {Card} from "../card";
import './index.scss';

interface MainProps {

}

const images: {url: string, transitionName: string}[] = [
    {
        url: 'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
        transitionName: 'c1',
    },
    {
        url: 'https://images.unsplash.com/photo-1575500221017-ea5e7b7d0e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80',
        transitionName: 'c2',
    },
    {
        url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
        transitionName: 'c3',
    },
    {
        url: 'https://images.unsplash.com/photo-1684483871267-739be928cb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        transitionName: 'c4',
    },
    {
        url: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
        transitionName: 'c5',
    },
    {
        url: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        transitionName: 'c6',
    },
]

export const Main: FC<MainProps> = () => {
    const [activeImage, setActiveImage] = useState<string>('');

    return (
        <div className={`content ${!!activeImage ? 'expanded' : ''}`}>
            {images.map((image) => (
                <Card image={image} setActiveImage={setActiveImage} isActive={image.url === activeImage}/>
            ))}
        </div>
    )
}