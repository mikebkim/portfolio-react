import React from 'react'
import Styled_SkillsPage from "./Styled_SkillsPage"

const SkillsPage = ({ allImages }) => {
    const allImagesArray = Object.values(allImages)

    return (
        <Styled_SkillsPage>
            <div className="SkillsPage">
                <div className="about-me-content tech">
                    <h1>Technologies</h1>
                    <p className="ptech">Below are languages, frameworks, tools, and ancillary technologies I provide when building
                        websites.
                        <br />
                    </p>
                    <br />
                    <div className="all-tables">
                        <div className="skills-table">
                            <h3>Development</h3>
                            <div>
                                {allImagesArray.map(image => {
                                    return <img src={image} height="50" width="50" key={image} alt={image} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled_SkillsPage>
    )
}

export default SkillsPage