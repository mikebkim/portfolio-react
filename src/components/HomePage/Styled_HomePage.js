import styled from "styled-components"

const Styled_HomePage = styled.div`

[data-aos] {
    transition-duration: 1s !important;
}

.HomePage {
    margin: 0 auto;
    width: 60vw;
    height: 100%;
    overflow: auto;

    h1 {
        color: rgb(115, 248, 217);
        margin: 5rem 0 0 0;
        font-size: 4rem;
    }

    h2 {
        color: rgb(115, 248, 217);
        margin: 0 0 0 0;
        font-size: 4rem;
    }

    h5 {
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
        width: 100%;
    }

    p {
        color: lightgrey;
        margin: 0;
    }

    & > .header {
        display: flex;
        flex-direction: column;
    }

    & > .home {
        margin-left: 1rem;

        & > .home-about {
            margin-top: 1rem;
        }

        & > .resume {
            margin-top: 1.5rem;
            margin-left: 0.5rem;

            & > form {
                & > .resume-button {
                    font-family: "Gill Sans";
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 2rem;
                    height: 2rem;
                    width: 13rem;
                    background: transparent;
                    border: 1px solid white;
                    transition: ease-in-out 300ms;
                    cursor: pointer;
                    font-weight: bold;
                    color: white;

                    & > svg {
                        margin-bottom: 0.3rem;
                        margin-left: 0.5rem;
                    }
                }

                & > .resume-button:hover {
                    font-family: "Gill Sans";
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 2rem;
                    height: 2rem;
                    width: 13rem;
                    background: white;
                    border: 1px solid white;
                    transition: ease-in-out 300ms;
                    cursor: pointer;
                    color: black;
                    fill: white;
                    font-weight: bold;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
        .HomePage {
            margin: 0 0 0 7rem;
            width: 65vw;
            height: 100%;
            overflow: auto;

        h1 {
            margin-bottom: 0.2rem;
        }

        p {
            color: lightgrey;
            margin-left: 1rem;
        }

        & > .header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        & > .home {
            margin-left: 1rem;

            & > .home-about {
                margin-top: 1rem;
            }

            & > .resume {
                margin-top: 1.5rem;
                margin-left: 0.5rem;

                & > form {
                    & > .resume-button {
                        font-family: "Gill Sans";
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 2rem;
                        height: 2rem;
                        width: 13rem;
                        background: transparent;
                        border: 1px solid white;
                        transition: ease-in-out 300ms;
                        cursor: pointer;
                        font-weight: bold;
                        color: white;

                        & > svg {
                            margin-bottom: 0.3rem;
                            margin-left: 0.5rem;
                        }
                    }

                    & > .resume-button:hover {
                        font-family: "Gill Sans";
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 2rem;
                        height: 2rem;
                        width: 13rem;
                        background: white;
                        border: 1px solid white;
                        transition: ease-in-out 300ms;
                        cursor: pointer;
                        color: black;
                        fill: white;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
`

export default Styled_HomePage
