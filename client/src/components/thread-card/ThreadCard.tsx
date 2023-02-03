import React from 'react';
import URL from '../../constants/URL.json';

interface Props {
    img: string,
    title: string,
    description: string
}

const ThreadCard: React.FC<Props> = (props) => {
    return (
        <div id="card-wrapper">
            <img src={`${URL.URL}:${URL.PORT}/${props.img}`} alt="" />
            <div id="replies-img">
                <p>R: 0 /</p>
                <p> I: 0</p>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}
 
export default ThreadCard;