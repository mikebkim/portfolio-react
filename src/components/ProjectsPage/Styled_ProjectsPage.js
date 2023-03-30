import styled from "styled-components"

const Styled_ProjectsPage = styled.div`
.ProjectsPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 55vw;
    margin-top: 3rem;

    p {
        color: lightgrey;
    }

    img {
        height: auto;
        width: 100%;
    }

    [data-aos] {
        transition-duration: 2s;
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
        }
    }
}

@media (max-width: 1000px) {
    .ProjectsPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    margin-top: 3rem;

    p {
        color: lightgrey;
    }

    img {
        height: auto;
        width: 100%;
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
            width: fit-content;
            justify-content: start;
            align-items: center;
        }
    }
}
}
`

export default Styled_ProjectsPage
