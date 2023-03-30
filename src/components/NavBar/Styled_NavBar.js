import styled from "styled-components"

const Styled_NavBar = styled.div`

// Desktop
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
        background-color: transparent;
        color: white;
        fill: black;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 1px solid white;

        & > img {
            width: 2rem;
        }
    }

    & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: white;
        color: black;
        fill: black;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;

        & > .nav-line-selected {
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            color: white;
            fill: white;
            width: 18rem;
            z-index: -1;
        }

        & > img {
            width: 2rem;
        }
    }
}

// MOBILE
@media (max-width: 1000px) {
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
                background-color: transparent;
                color: white;
                fill: black;
                border-radius: 2rem;
                height: 3rem;
                width: 3rem;
                border: 1px solid white;

                & > img {
                    width: 2rem;
                }
            }

            & > .selected {
                text-decoration: none;
                align-items: center;
                display: flex;
                justify-content: center;
                background-color: white;
                color: black;
                fill: black;
                border-radius: 2rem;
                height: 3rem;
                width: 3rem;

                & > .nav-line-selected {
                    margin-top: 5rem;
                    color: white;
                    fill: white;
                    width: max-content;
                    z-index: -1;
                }

                & > img {
                    width: 2rem;
                }
            }
        }
    }
`

export default Styled_NavBar
