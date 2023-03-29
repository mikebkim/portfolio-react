import React, { useEffect } from 'react'
import Styled_TechnologiesPage from "./Styled_TechnologiesPage"
import AOS from 'aos'
import 'aos/dist/aos.css'

const TechnologiesPage = ({ allImages }) => {
    const allImagesArray = Object.values(allImages)
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Styled_TechnologiesPage>
            <div className="TechnologiesPage">
                <div className="header">
                    <h1>Technologies</h1>
                    <p className="description">Below are languages, frameworks, tools, and ancillary technologies I provide when building
                        websites.
                    </p>
                </div>
                <div className="technologies-list">
                    {allImagesArray.map(image => {
                        const cssImage = image.includes("css") ? <img
                            className="tech-image"
                            width="35px"
                            height="auto"
                            src={image}
                            key={image}
                            alt={image}
                        /> : <img
                            className="tech-image"
                            src={image}
                            key={image}
                            alt={image}
                        />

                        return <div
                            className="flip-card aos-init aos-animate"
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {cssImage}
                                </div>
                                <div className="flip-card-back">
                                    <h3>Test</h3>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Styled_TechnologiesPage>
    )
}

export default TechnologiesPage