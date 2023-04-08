import styled from "styled-components"

const Styled_NavBar = styled.div`
// Desktop
.NavBar {
    @keyframes slidein {
        0% {
            color: rgb(39, 50, 56);
            fill: rgb(39, 50, 56);
        }
        50% {
            color: rgb(39, 50, 56);
            fill: rgb(39, 50, 56);
        }

        from {
            margin-left: 10%;
            width: 0;
        }

        to {
            margin-right: 11rem;
            width: 10%;
        }
    }

    @keyframes slideinright {
        0% {
            color: rgb(39, 50, 56);
            fill: rgb(39, 50, 56);
        }
        50% {
            color: rgb(39, 50, 56);
            fill: rgb(39, 50, 56);
        }

        from {
            margin-right: 10%;
            width: 0;
        }

        to {
            margin-left: 11rem;
            width: 10%;
        }
    }

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
        transition: ease-in-out 250ms;

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
        border: 1px solid white;
        --box-shadow-color: white;
        /* box-shadow: 0px 0px 2px 2px var(--box-shadow-color); */

        & > .nav-line-selected {
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            margin-right: 11rem;
            color: white;
            fill: white;
            width: 10%;
            z-index: -1;
            animation: 1s slidein;
        }

        & > img {
            width: 2rem;
        }
    }

    & > .selected-right {
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
        border: 1px solid white;
        --box-shadow-color: white;
        /* box-shadow: 0px 0px 2px 2px var(--box-shadow-color); */

        & > .nav-line-selected-right {
            display: flex;
            flex-direction: row-reverse;
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            margin-left: 11rem;
            color: white;
            fill: white;
            width: 10%;
            z-index: -1;
            animation: 1s slideinright;
        }

        & > img {
            width: 2rem;
        }
    }
}

// MOBILE
@media (max-width: 600px) {
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
                transition: ease-in-out 250ms;

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
                    margin-top: 6rem;
                    margin-left: 0;
                    margin-right: 0;
                    color: white;
                    fill: white;
                    width: max-content;
                    z-index: -1;
                    animation: none;
                }

                & > img {
                    width: 2rem;
                }
            }

            & > .selected-right {
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

                & > .nav-line-selected-right {
                    margin-top: 6rem;
                    margin-left: 0;
                    margin-right: 0;
                    color: white;
                    fill: white;
                    width: max-content;
                    z-index: -1;
                    animation: none;
                }

                & > img {
                    width: 2rem;
                }
            }
        }
    }
`

export default Styled_NavBar
