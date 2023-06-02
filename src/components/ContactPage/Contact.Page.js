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
      margin: 3rem 0 0 0;
      border-bottom: 5px solid rgb(1, 200, 200);
      padding-bottom: 0.5rem;
    }

    p {
      color: lightgrey;
      margin: 1rem auto;
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
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid rgb(1, 200, 200, 0.5);
          outline: none;
          padding: 5px 0;
        }

        & > .contact-email {
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid rgb(1, 200, 200, 0.5);
          outline: none;
          padding: 5px 0;
        }

        & > .contact-subject {
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid rgb(1, 200, 200, 0.5);
          outline: none;
          padding: 5px 0;
        }

        & > .contact-message {
          margin-bottom: 0.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: lightgrey;
          border-bottom: 1px solid rgb(1, 200, 200, 0.5);
          outline: none;
          height: 8rem;
          padding: 5px 0;
        }

        & > .contact-button {
          font-family: "Gill Sans";
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 13rem;
          background: rgb(1, 200, 200, 0.5);
          border: 2px solid rgb(1, 200, 200, 0.5);
          transition: ease-in-out 300ms;
          cursor: pointer;
          color: rgb(1, 200, 200);
          margin: 0.5rem auto;

          &:hover {
            font-family: "Gill Sans";
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: rgb(1, 200, 200);
            border: 5px solid rgb(1, 200, 200);
            transition: ease-in-out 300ms;
            cursor: pointer;
            color: lightgrey;
            fill: lightgrey;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ContactPage {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 4rem;

      p {
        color: lightgrey;
        margin: 1rem auto;
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
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid rgb(1, 200, 200, 0.5);
            outline: none;
            padding: 5px 0;
          }

          & > .contact-email {
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid rgb(1, 200, 200, 0.5);
            outline: none;
            padding: 5px 0;
          }

          & > .contact-message {
            margin-bottom: 0.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: lightgrey;
            border-bottom: 1px solid rgb(1, 200, 200, 0.5);
            outline: none;
            height: 8rem;
            padding: 5px 0;
          }

          & > .contact-button {
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
