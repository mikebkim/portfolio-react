import React from 'react'
import Styled_TechnologiesPage from "./Styled_TechnologiesPage"

const TechnologiesPage = ({ allImages }) => {
    const allImagesArray = Object.values(allImages)

    return (
        <Styled_TechnologiesPage>
            <div className="TechnologiesPage">
                <div className="header">
                    <h1>Technologies</h1>
                    <p className="description">Below are languages, frameworks, tools, and ancillary technologies I provide when building
                        websites.
                        <br />
                    </p>
                    <br />
                </div>
                <h3>Development</h3>
                <div className="technologies-list">
                    {allImagesArray.map(image => {
                        return <div
                            data-aos="fade-up"
                            className="flip-card aos-init aos-animate"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        src={image}
                                        height="50"
                                        width="50"
                                        key={image}
                                        alt={image}
                                    />
                                </div>
                                <div className="flip-card-back">
                                    <h3>{image}</h3>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                {/* <div className="technologies-list">
                    {allImagesArray.map(image => {
                        return <img
                            src={image}
                            height="50"
                            width="50"
                            key={image}
                            alt={image}
                        />
                    })}
                </div> */}
            </div>
        </Styled_TechnologiesPage>
    )
}

export default TechnologiesPage