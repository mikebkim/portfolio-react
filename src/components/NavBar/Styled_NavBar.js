import styled from "styled-components"

const Styled_NavBar = styled.div`
.NavBar {
    display: flex;
    justify-content: space-around;
    height: 5rem;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    img {
        width: 10%;
        background-color: white;
        border-radius: 2rem;
        box-shadow: 0px 0px 4px 4px;
    }

    & > .nav-link {
        text-decoration: none;
        color: white;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    & > .selected {
        text-decoration: none;
        color: white;
        align-items: center;
        display: flex;
        justify-content: center;
    }
}
`

export default Styled_NavBar
