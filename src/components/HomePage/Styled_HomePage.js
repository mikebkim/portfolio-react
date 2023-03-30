import styled from "styled-components"

const Styled_HomePage = styled.div`
.HomePage {
    margin-left: auto;
    margin-right: auto;
    max-width: 55vw;
    margin-top: 3rem;

    p {
        color: lightgrey;
        margin-left: 1rem;
    }

    & > .home {
        & > .resume {
            & > form {
                & > .resume-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 2rem;
                    height: 3rem;
                    width: 13rem;
                    background: lightslategray;
                    border: 1px solid white;
                    transition: ease-out 250ms;
                    cursor: pointer;
                    font-weight: bold;
                    color: white;

                    & > svg {
                        margin-bottom: 0.3rem;
                        margin-left: 0.5rem;
                    }
                }

                & > .resume-button:hover {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 2rem;
                    height: 3rem;
                    width: 13rem;
                    background: white;
                    border: 1px solid white;
                    transition: ease-out 250ms;
                    cursor: pointer;
                    color: black;
                    fill: white;
                    font-weight: bold;
                }
            }
        }
    }
}
`

export default Styled_HomePage
