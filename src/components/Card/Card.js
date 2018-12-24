import React from 'react';
import './Card.css';

const suitInfo = {
    h: '♥hearts',
    d: '♦diams',
    s: '♠spades',
    c: '♣clubs'
};

const Card = props => {
    return (
        <div className={"Card Card-rank-" + props.rank + " Card-" + suitInfo[props.suit].slice(1)}>
            <span className="Card-rank">{props.rank.toUpperCase()}</span>
            <span className="Card-suit">{suitInfo[props.suit].slice(0,1)}</span>
        </div>
    );
};

export default Card;
