import styled from "styled-components"

const Styled_NavBar = styled.div`
.nav-line {
    border-bottom: 1px solid white;
    margin-top: -2rem;
    box-shadow: 1px 1px 1px 1px;
    color: white;
    fill: white;
}

.NavBar {
    display: flex;
    justify-content: space-around;
    height: 4rem;
    align-items: center;
    margin-top: 1rem;


    & > .nav-link {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: white;
        color: black;
        fill: white;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;

        & > img {
            width: 2rem;
            /* background-color: white;
            color: white;
            border-radius: 2rem; */
        }
    }

    & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        box-shadow: 0px 0px 4px 4px;
        background-color: black;
        color: white;
        fill: black;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;

        & > img {
            width: 2rem;
        }
    }
}
`

export default Styled_NavBar
