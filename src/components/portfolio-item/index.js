import React from 'react'

import './style.css'

const PortfolioItem = (props) => {
    return (
        <div className="wpo-protfolio-single">
            <div className="wpo-protfolio-img">
                <img src={props.imgUrl} alt={props.alt} />
            </div>
            <div className="wpo-protfolio-text">
                <h2>{props.title}</h2>
                <span>{props.subtitle}</span>
                <a href={props.url}>View Work</a>
            </div>
        </div>
    )
}

export default PortfolioItem;