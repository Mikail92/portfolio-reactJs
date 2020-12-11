import React from 'react'
import SkillCard from '../skill-card'

const SkillTab = (props) => {
    return(
        <div className="wpo-about-item">
        <div className="row">
            <div className="col-lg-12">
                <div className="wpo-counter-grids">
                    <SkillCard 
                        title="Communications Skills"
                        data="75"
                    />
                    <SkillCard 
                        title="Project Management"
                        data="90"
                    />
                    <SkillCard 
                        title="Problem Solving"
                        data="65"
                    />
                    <SkillCard 
                        title="Analitical Abilities"
                        data="55"
                    />
                    <SkillCard 
                        title="Organization"
                        data="43"
                    />
                    <SkillCard 
                        title="Creativity"
                        data="82"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default SkillTab;