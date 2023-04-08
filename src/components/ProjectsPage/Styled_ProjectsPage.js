import styled from "styled-components"

const Styled_ProjectsPage = styled.div`
.ProjectsPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    margin-top: 2rem;

    [data-aos] {
        transition-duration: 2s;
    }

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
            padding: 0px 5rem;
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

@media (max-width: 600px) {
    .ProjectsPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    margin-top: 2rem;
    
    h1 {
        margin-bottom: 0.2rem;
    }
    
    p {
        color: lightgrey;
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
            padding: 0;
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
