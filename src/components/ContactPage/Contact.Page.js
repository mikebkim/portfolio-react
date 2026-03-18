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
      margin: 4rem 0 0;
      color: ghostwhite;
    }

    h6 {
      margin: 0.5rem;
      color: rgb(200, 1, 1);
    }

    p {
      margin: 1rem auto;
      color: ghostwhite;
      font-size: 1.2rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

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
          margin-bottom: 0;
          color: ghostwhite;
          font-weight: bolder;
        }

        & > .contact-name,
        & > .contact-email,
        & > .contact-subject,
        & > .contact-message {
          width: 100%;
          padding: 5px 0;
          background-color: transparent;
          border: none;
          border-bottom: 3px solid ghostwhite;
          outline: none;
        }

        & > .contact-name,
        & > .contact-email,
        & > .contact-subject {
          margin-bottom: 2.5rem;
          color: ghostwhite;
        }

        & > .contact-message {
          height: 8rem;
          margin-bottom: 0.5rem;
          color: rgb(100, 100, 100);
        }

        & > .contact-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 13rem;
          height: 2rem;
          margin: 0.5rem auto;
          border: 2px solid ghostwhite;
          border-radius: 2rem;
          background: ghostwhite;
          color: rgb(100, 100, 100);
          cursor: pointer;
          font-family:
            Futura,
            Trebuchet MS,
            Arial,
            sans-serif;
          font-weight: bold;
          transition: all 500ms ease-in-out;

          &:hover {
            border: 5px solid rgb(100, 100, 100);
            background: rgb(100, 100, 100);
            color: ghostwhite;
            fill: ghostwhite;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ContactPage {
      width: 65vw;
      min-height: 84vh;
      padding-left: 4rem;

      & > form {
        margin: 0;

        & > .contact-form {
          & > .contact-message {
            color: ghostwhite;
          }

          & > .contact-button {
            border: 2px solid rgb(100, 100, 100);
          }
        }
      }
    }
  }
`;

export default ContactPageWrap;
