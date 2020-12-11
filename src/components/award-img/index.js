import React from 'react'

const AwardImg = (props) => {
    return (
        <div className="wpo-award-img">
            <img src="{props.imgUrl}" alt="{props.alt}" />
        </div>
    )
}

export default AwardImg;