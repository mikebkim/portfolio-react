import styled from "styled-components"

const Styled_NavBar = styled.div`
.NavBar {
    display: flex;
    justify-content: space-around;
    width: 95%;
    height: 2rem;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    // margin-top: 0.5rem;
    margin: 0.5rem auto;

    & > .nav-link {
        text-decoration: none;
        color: black;
    }

    & > .selected {
        text-decoration: underline;
        color: black;
    }
}
`

export default Styled_NavBar
