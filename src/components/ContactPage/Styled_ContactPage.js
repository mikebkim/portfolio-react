import styled from "styled-components"

const Styled_ContactPage = styled.div`
.ContactPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 55vw;
    margin-top: 3rem;

    p {
        color: lightgrey;
        margin-bottom: 2rem;
        margin-left: 1rem;
    }

    & > form {
        margin-left: 2rem;

        & > .contact-form {
            display: flex;
            flex-direction: column;

            & > .form-inputs {
                margin-bottom: 0rem;
            }

            & > .contact-name {
                font-family: Gill Sans;
                margin-bottom: 2.5rem;
                width: 100%;
                background-color: transparent;
                border: none;
                color: white;
                border-bottom: 1px solid white;
                outline: none;
                padding: 5px 0;
            }

            & > .contact-email {
                font-family: Gill Sans;
                margin-bottom: 2.5rem;
                width: 100%;
                background-color: transparent;
                border: none;
                color: white;
                border-bottom: 1px solid white;
                outline: none;
                padding: 5px 0;
            }

            & > .contact-message {
                font-family: Gill Sans;
                margin-bottom: 0.5rem;
                width: 100%;
                background-color: transparent;
                border: none;
                color: white;
                border-bottom: 1px solid white;
                outline: none;
                height: 8rem;
                padding: 5px 0;
            }

            & > .contact-button {
                font-family: Gill Sans;
                background-color: transparent;
                border: 1px solid white;
                color: white;
                cursor: pointer;
                border-radius: 2rem;
                width: 9rem;
                height: 2rem;
                transition: ease-out 250ms;
                font-weight: bold;
                margin: 0 auto;
            }

            & > .contact-button:hover {
                font-family: Gill Sans;
                background-color: white;
                border: 1px solid white;
                color: black;
                cursor: pointer;
                border-radius: 2rem;
                width: 9rem;
                height: 2rem;
                transition: ease-out 250ms;
                font-weight: bold;
                margin: 0 auto;
            }
        }
    }
}
`

export default Styled_ContactPage
