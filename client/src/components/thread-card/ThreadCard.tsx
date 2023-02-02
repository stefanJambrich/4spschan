import React from 'react';
import card from '../../assets/card.png';

interface Props {
    img: string,
    title: string,
    description: string
}

const ThreadCard: React.FC<Props> = (props) => {
    return (
        <div id="card-wrapper">
            <img src={card} alt="" />
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