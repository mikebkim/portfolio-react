import styled from "styled-components"

const Styled_NavBar = styled.div`
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

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
        transition: ease-in-out 300ms;

        & > img {
            width: 2rem;
        }
    }

    & > .nav-link:hover {
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
        border: 1px solid white;
        transition: ease-in-out 300ms;

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
            animation: fadeIn 2s;
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
                    animation: fadeIn 2s;
                }

                & > img {
                    width: 2rem;
                }
            }
        }
    }
`

export default Styled_NavBar
