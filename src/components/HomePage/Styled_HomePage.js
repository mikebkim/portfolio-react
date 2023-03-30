import styled from "styled-components"

const Styled_HomePage = styled.div`
.HomePage {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem auto;
    padding: 0 2rem;

    & > .main-title {
        display: flex;
        flex-direction: column;
        justify-content: left;

        & > h1 {
            margin: 1rem 0 0 0;
        }

        & > h2 {
            margin: 0;
        }
    }

    & > .home {
        & > .resume {
            & > form {
                & > .resume-button {
                    border-radius: 2rem;
                    height: 3rem;
                    width: 7rem;
                    background: lightgrey;
                    border: none;
                    transition: ease-out 250ms;
                    cursor: pointer;
                    font-weight: bold;

                    & > .icon-download {
                        height: auto;
                        width: 10%;
                    }

                    & > .icon-download:hover {
                        height: auto;
                        width: 10%;
                        color: white;
                        fill: white;
                    }
                }

                & > .resume-button:hover {
                    border-radius: 2rem;
                    height: 3rem;
                    width: 7rem;
                    background: green;
                    border: none;
                    transition: ease-out 250ms;
                    cursor: pointer;
                    color: white;
                    fill: white;
                    font-weight: bold;
                }
            }
        }
    }
}
`

export default Styled_HomePage
