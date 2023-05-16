import styled from "styled-components";

export const ContactPageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .ContactPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    [data-aos] {
      transition-duration: 2s;
    }

    h1 {
      color: rgb(1, 200, 200);
      margin: 5rem 0 0 0;
      font-size: 4rem;
    }

    p {
      color: lightgrey;
      margin-bottom: 2rem;
      margin-left: 1rem;
      font-size: 1.2rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      
      & > hr {
        width: 100%;
      }
    }

    & > form {
      margin: 2rem;

      & > .contact-form {
        display: flex;
        flex-direction: column;

        & > .form-inputs {
          margin-bottom: 0rem;
          color: rgb(1, 200, 200);
          font-weight: bolder;
        }

        & > .contact-name {
          font-family: Gill Sans;
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid lightgrey;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-email {
          font-family: Gill Sans;
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid lightgrey;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-subject {
          font-family: Gill Sans;
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid lightgrey;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-message {
          font-family: Gill Sans;
          margin-bottom: 0.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid lightgrey;
          outline: none;
          height: 8rem;
          padding: 5px 0;
        }

        & > .contact-button {
          font-family: Gill Sans;
          background-color: transparent;
          border: 1px solid lightgrey;
          color: lightgrey;
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
          background-color: lightgrey;
          border: 1px solid lightgrey;
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
      margin: 0 0 0 7rem;
      width: 65vw;
      height: 84vh;

      h1 {
        margin-bottom: 0.2rem;
        font-size: 1.7rem;
        margin-top: 1rem;
      }

      p {
        color: lightgrey;
        margin: 1rem 0;
        width: 100%;
      }

      & > .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;

        & > hr {
          width: 100%;
          height: 2.5px;
        }
      }

      & > form {
        margin: 0;

        & > .contact-form {
          display: flex;
          flex-direction: column;

          & > .form-inputs {
            margin-bottom: 0rem;
            color: rgb(1, 200, 200);
            font-weight: bolder;
          }

          & > .contact-name {
            font-family: Gill Sans;
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid lightgrey;
            outline: none;
            padding: 5px 0;
          }

          & > .contact-email {
            font-family: Gill Sans;
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid lightgrey;
            outline: none;
            padding: 5px 0;
          }

          & > .contact-message {
            font-family: Gill Sans;
            margin-bottom: 0.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid lightgrey;
            outline: none;
            height: 8rem;
            padding: 5px 0;
          }

          & > .contact-button {
            font-family: Gill Sans;
            background-color: transparent;
            border: 1px solid lightgrey;
            color: lightgrey;
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
            background-color: lightgrey;
            border: 1px solid lightgrey;
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

export default ContactPageWrap;
