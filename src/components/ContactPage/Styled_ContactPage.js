import styled from "styled-components";

const Styled_ContactPage = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .ContactPage {
    margin: 0 auto;
    width: 60vw;
    height: 100%;
    overflow: auto;

    [data-aos] {
      transition-duration: 2s;
    }

    h1 {
      color: rgb(115, 248, 217);
      margin: 5rem 0 0 0;
      font-size: 4rem;
    }

    p {
      color: lightgrey;
      margin-bottom: 2rem;
      margin-left: 1rem;
    }

    & > form {
      margin: 2rem;

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

        & > .contact-subject {
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
          transition: ease-in-out 300ms;
          font-weight: bold;
          margin: 1rem auto;
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
          transition: ease-in-out 300ms;
          font-weight: bold;
          margin: 1rem auto;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ContactPage {
      margin: 0 0 0 10rem;
      width: 65vw;
      height: 100%;
      overflow: auto;

      h1 {
        margin-bottom: 0.2rem;
        font-size: 2rem;
      }

      p {
        color: lightgrey;
        margin-bottom: 2rem;
        margin-left: 1rem;
      }

      & > form {
        margin: 0;

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
            transition: ease-in-out 300ms;
            font-weight: bold;
            margin: 1rem auto;
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
            transition: ease-in-out 300ms;
            font-weight: bold;
            margin: 1rem auto;
          }
        }
      }
    }
  }
`;

export default Styled_ContactPage;
