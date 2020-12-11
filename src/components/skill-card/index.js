import React from 'react'

const SkillCard = (props) => {
    return(
        <div className="grid">
            <div>
                <h2><span className="odometer" data-count="{props.data}">00</span>%</h2>
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default SkillCard;