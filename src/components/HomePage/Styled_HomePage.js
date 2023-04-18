import styled from "styled-components"

const Styled_HomePage = styled.div`
.HomePage {
    /* margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    margin-top: 6rem; */
    margin-left: 15rem;
    margin-right: auto;
    margin-top: 6rem;
    width: 70vw;

    h1 {
        margin-bottom: 0.2rem;
        margin: 0;
    }

    p {
        color: lightgrey;
        margin: 0;
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

@media only screen and (max-width: 768px) {
        .HomePage {
            margin-left: auto;
            margin-right: auto;
            max-width: 768px;
            margin-top: 6rem;

        h1 {
            margin-bottom: 0.2rem;
            margin: 0;
        }

        p {
            color: lightgrey;
            margin: 0;
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
