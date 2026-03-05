import styled from "styled-components";

export const FooterWrap = styled.div`
  @keyframes slideleft {
    0% {
      color: transparent;
      transition: ease-in-out 300ms;
    }

    10% {
      color: rgba(247, 247, 255, 0.1);
      transition: ease-in-out 300ms;
    }

    20% {
      color: rgba(247, 247, 255, 0.2);
      transition: ease-in-out 300ms;
    }

    30% {
      color: rgba(247, 247, 255, 0.3);
      transition: ease-in-out 300ms;
    }

    40% {
      color: rgba(247, 247, 255, 0.4);
      transition: ease-in-out 300ms;
    }

    50% {
      color: rgba(247, 247, 255, 0.5);
      transition: ease-in-out 300ms;
    }

    60% {
      color: rgba(247, 247, 255, 0.6);
      transition: ease-in-out 300ms;
    }

    70% {
      color: rgba(247, 247, 255, 0.7);
      transition: ease-in-out 300ms;
    }

    80% {
      color: rgba(247, 247, 255, 0.8);
      transition: ease-in-out 300ms;
    }

    90% {
      color: rgba(247, 247, 255, 0.9);
      transition: ease-in-out 300ms;
    }

    from {
      margin-left: -3rem;
      transition: ease-in-out 300ms;
    }

    to {
      margin-left: 0rem;
      transition: ease-in-out 300ms;
    }
  }

  .Footer {
    background: linear-gradient(
      to right,
      transparent 20%,
      rgb(1, 200, 200) 100%
    );
    top: 0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    height: 3rem;

    .social-hover {
      position: absolute;
      transition: ease-in-out 300ms;
      animation: 1.2s slideleft;
      /* margin-left: 7rem; */
      padding-right: 0.4rem;
      z-index: 0;
      width: 12rem;
      display: flex;
      justify-content: flex-end;
      border-radius: 5px;
    }

    & > .social-flex {
      width: 100%;
    }

    & > .social-links {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;

      & > .social-icon {
        height: 3rem;
        width: 3rem;
        margin: 0 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7rem;

        & > .git {
          color: ghostwhite;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid ghostwhite;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          transition: ease-in-out 600ms;

          &:hover {
            transition: ease-in-out 600ms;
            color: ghostwhite;
            border: 5px solid darkgrey;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            background-color: darkgrey;
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 600ms;
            z-index: 1;
          }
        }

        & > .linkedin {
          color: ghostwhite;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid ghostwhite;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          transition: ease-in-out 600ms;

          &:hover {
            transition: ease-in-out 600ms;
            color: ghostwhite;
            border: 5px solid rgb(8, 91, 187);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            background-color: rgb(8, 91, 187);
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 600ms;
            z-index: 1;
          }
        }

        & > .instagram {
          color: ghostwhite;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid ghostwhite;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          transition: ease-in-out 600ms;

          &:hover {
            transition: ease-in-out 600ms;
            color: ghostwhite;
            border: 5px solid rgb(255, 0, 95);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            background-color: rgb(255, 0, 95);
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 600ms;
            z-index: 1;
          }
        }

        & > .soundcloud {
          color: ghostwhite;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid ghostwhite;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          transition: ease-in-out 600ms;

          &:hover {
            transition: ease-in-out 600ms;
            color: ghostwhite;
            border: 5px solid rgb(255, 101, 0);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            background-color: rgb(255, 101, 0);
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 600ms;
            z-index: 1;
          }
        }
      }
    }
  }

  @keyframes slideup {
    0% {
      color: transparent;
    }

    50% {
      color: transparent;
    }

    75% {
      color: ghostwhite;
    }

    from {
      margin-bottom: -10rem;
    }

    to {
      margin-bottom: 0rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .Footer {
      top: 0;
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 auto;
      height: 3rem;

      .social-hover {
        position: absolute;
        transition: ease-in-out 300ms;
        animation: 600ms slideup;
        margin: 3rem 0 auto;
        z-index: 1;
        display: flex;
        justify-content: center;
        width: fit-content;

        & > .media-social-links {
          display: flex;
        }
      }

      & > .social-flex {
        width: 100%;
      }

      & > .social-links {
        display: flex;
        justify-content: center;
        align-items: center;

        & > .social-icon {
          height: 3rem;
          width: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;

          & > .git {
            color: ghostwhite;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ghostwhite;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 600ms;

            &:hover {
              transition: ease-in-out 600ms;
              color: ghostwhite;
              border: 5px solid darkgrey;
              border-radius: 1.5rem;
              height: 1.5rem;
              width: 1.5rem;
              background-color: darkgrey;
            }

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 600ms;
              z-index: 1;
            }
          }

          & > .linkedin {
            color: ghostwhite;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ghostwhite;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 600ms;

            &:hover {
              transition: ease-in-out 600ms;
              color: ghostwhite;
              border: 5px solid rgb(8, 91, 187);
              border-radius: 1.5rem;
              height: 1.5rem;
              width: 1.5rem;
              background-color: rgb(8, 91, 187);
            }

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 600ms;
              z-index: 1;
            }
          }

          & > .instagram {
            color: ghostwhite;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ghostwhite;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 600ms;

            &:hover {
              transition: ease-in-out 600ms;
              color: ghostwhite;
              border: 5px solid rgb(255, 0, 95);
              border-radius: 1.5rem;
              height: 1.5rem;
              width: 1.5rem;
              background-color: rgb(255, 0, 95);
            }

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 600ms;
              z-index: 1;
            }
          }

          & > .soundcloud {
            color: ghostwhite;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ghostwhite;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 600ms;

            &:hover {
              transition: ease-in-out 600ms;
              color: ghostwhite;
              border: 5px solid rgb(255, 101, 0);
              border-radius: 1.5rem;
              height: 1.5rem;
              width: 1.5rem;
              background-color: rgb(255, 101, 0);
            }

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 600ms;
              z-index: 1;
            }
          }
        }
      }
    }
  }
`;

export default FooterWrap;
