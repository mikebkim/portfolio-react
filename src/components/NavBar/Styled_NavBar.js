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
            margin-left: 10rem;
            width: 0;
        }

        to {
            margin-right: 10rem;
            width: 9rem;
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
            margin-right: 10rem;
            width: 0;
        }

        to {
            margin-left: 10rem;
            width: 9rem;
        }
    }

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    top: 0;
    margin: 0 1rem;
    z-index: 1;
   

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
        transition: ease-in-out 300ms;

        & > .nav-line-selected {
            display: flex;
            flex-direction: row-reverse;
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            margin-left: 10rem;
            color: white;
            fill: white;
            width: 9rem;
            z-index: -1;
            animation: 1s slideinright;
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
            /* display: flex;
            flex-direction: row-reverse;
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            margin-left: 10rem;
            color: white;
            fill: white;
            width: 9rem;
            z-index: -1;
            animation: 1s slideinright; */
            display: flex;
            flex-direction: row-reverse;
            position: absolute;
            border-bottom: 3px solid white;
            margin-top: -1rem;
            margin-left: 10rem;
            color: white;
            fill: white;
            width: 9rem;
            z-index: -1;
            animation: 1s slideinright;
        }

        & > img {
            width: 2rem;
        }
    }
}

// MOBILE
@media only screen and (max-width: 768px) {
    .NavBar {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        align-items: center;
        top: 0;
        margin: 0 0 0 1.5rem;
        z-index: 1;
       

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
                    margin-left: 10rem;
                    margin-right: 10rem;
                    font-size: 12px;
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
                    margin-left: 10rem;
                    margin-right: 10rem;
                    font-size: 12px;
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
