import styled from "styled-components"

const Styled_ProjectsPage = styled.div`
.ProjectsPage {
    max-height: 80vh;
    margin-left: auto;
    margin-right: auto;
    width: 55vw;
    margin-top: 3rem;

    p {
        color: lightgrey;
    }

    img {
        height: auto;
        width: 100%;
    }

    .project-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .projects-flex {
        display: flex;
        margin-bottom: 2rem;
    }

    .project {  
        display: flex;
        flex-direction: column;
        width: 90vw;
        padding: 0px 5rem;
        justify-content: center;
        align-items: center;
    }
}
`

export default Styled_ProjectsPage
