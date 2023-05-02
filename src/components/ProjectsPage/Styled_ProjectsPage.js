import styled from "styled-components"

const Styled_ProjectsPage = styled.div`

[data-aos] {
    transition-duration: 1s !important;
}

.ProjectsPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    h1 {
        color: rgb(115, 248, 217);
        margin: 5rem 0 0 0;
        font-size: 4rem;
    }

    p {
        color: lightgrey;
        margin-left: 1rem;
    }

    .project-laptop {
        position: relative;
        width: 100%;
        margin-top: 1rem;
    }

    .project-image {
        position: absolute;
        min-height: 40%;
        max-height: 40%;
        width: 29%;
        transform: scale(0);
    }
    
    & > .projects-flex {
        display: flex;
        margin-bottom: 2rem;
        
        & > .project-link {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        & > .project {  
            display: flex;
            flex-direction: column;
            width: 90vw;
            justify-content: center;
            align-items: center;

            & > .tech-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                
                & > .tech-name {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 6rem;
                    padding: 0.5rem;
                    border: 1px solid white;
                    border-radius: 5px;
                    background-color: white;
                    color: black;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .ProjectsPage {
        margin: 0 0 0 7rem;
        width: 65vw;
        height: 84vh;
    
    h1 {
        margin-bottom: 0.2rem;
    }
    
    p {
        color: lightgrey;
        margin-left: 1rem;
    }

    .project-laptop {
        position: relative;
        width: 100%;
    }

    .project-image {
        position: absolute;
        min-height: 40%;
        max-height: 40%;
        width: 29%;
        transform: scale(0);
    }
    
    & > .projects-flex {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        
        & > .project-link {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        & > .project {  
            display: flex;
            flex-direction: column;
            width: auto;
            /* padding: 0; */
            justify-content: start;
            align-items: center;

            & > .tech-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                
                & > .tech-name {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 6rem;
                    padding: 0.5rem;
                    border: 1px solid white;
                    border-radius: 5px;
                    background-color: white;
                    color: black;
                }
            }
        }
    }
}
}
`

export default Styled_ProjectsPage
