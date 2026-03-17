import styled from "styled-components";

export const ContactPageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .lofoten {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .ContactPage {
    margin: 0 auto;
    width: 60vw;
    min-height: 84vh;
    height: auto;

    h1 {
      color: ghostwhite;
      margin: 4rem 0 0 0;
      border-bottom: 5px solid ghostwhite;
      padding-bottom: 0.5rem;
    }

    h6 {
      margin: 0.5rem;
      color: rgb(200, 1, 1);
    }

    p {
      color: ghostwhite;
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
          color: ghostwhite;
          font-weight: bolder;
        }

        & > .contact-name {
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: ghostwhite;
          border-bottom: 3px solid ghostwhite;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-email {
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: ghostwhite;
          border-bottom: 3px solid ghostwhite;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-subject {
          margin-bottom: 2.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: ghostwhite;
          border-bottom: 3px solid ghostwhite;
          outline: none;
          padding: 5px 0;
        }

        & > .contact-message {
          margin-bottom: 0.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          color: rgb(100, 100, 100);
          border-bottom: 3px solid ghostwhite;
          outline: none;
          height: 8rem;
          padding: 5px 0;
        }

        & > .contact-button {
          font-family:
            Futura,
            Trebuchet MS,
            Arial,
            sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 13rem;
          background: ghostwhite;
          border: 2px solid ghostwhite;
          transition: ease-in-out 500ms;
          cursor: pointer;
          color: rgb(100, 100, 100);
          margin: 0.5rem auto;
          font-weight: bold;

          &:hover {
            font-family:
              Futura,
              Trebuchet MS,
              Arial,
              sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: rgb(100, 100, 100);
            border: 5px solid rgb(100, 100, 100);
            transition: ease-in-out 500ms;
            cursor: pointer;
            color: ghostwhite;
            fill: ghostwhite;
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
        color: ghostwhite;
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
            color: ghostwhite;
            font-weight: bolder;
          }

          & > .contact-name {
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: ghostwhite;
            border-bottom: 3px solid ghostwhite;
            outline: none;
            padding: 5px 0;
          }

          & > .contact-email {
            margin-bottom: 2.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: ghostwhite;
            border-bottom: 3px solid ghostwhite;
            outline: none;
            padding: 5px 0;
          }

          & > .contact-message {
            margin-bottom: 0.5rem;
            width: 100%;
            background-color: transparent;
            border: none;
            color: ghostwhite;
            border-bottom: 3px solid ghostwhite;
            outline: none;
            height: 8rem;
            padding: 5px 0;
          }

          & > .contact-button {
            font-family:
              Futura,
              Trebuchet MS,
              Arial,
              sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: ghostwhite;
            border: 2px solid rgb(100, 100, 100);
            transition: ease-in-out 500ms;
            cursor: pointer;
            color: rgb(100, 100, 100);
            margin: 0.5rem auto;
            font-weight: bold;

            &:hover {
              font-family:
                Futura,
                Trebuchet MS,
                Arial,
                sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background: rgb(100, 100, 100);
              border: 5px solid rgb(100, 100, 100);
              transition: ease-in-out 500ms;
              cursor: pointer;
              color: ghostwhite;
              fill: ghostwhite;
            }
          }
        }
      }
    }
  }
`;

export default ContactPageWrap;
