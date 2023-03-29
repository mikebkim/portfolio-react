import styled from "styled-components"

const Styled_HomePage = styled.div`
.HomePage {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10rem;

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
                }

                & > .resume-button:hover {
                    border-radius: 2rem;
                    height: 3rem;
                    width: 7rem;
                    background: green;
                    border: none;
                    transition: ease-out 250ms;
                    cursor: pointer;
                }
            }
        }
    }
}
`

export default Styled_HomePage
