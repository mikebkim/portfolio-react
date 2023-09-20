import styled from "styled-components";

export const FooterWrap = styled.div`
  @keyframes slideleft {
    0% {
      color: transparent;
    }

    50% {
      color: transparent;
    }

    75% {
      color: lightgrey;
    }

    from {
      margin-left: -10rem;
    }

    to {
      margin-left: 7rem;
    }
  }

  .Footer {
    /* background-color: ${(props) =>
      props.hoveredSocial === "linkedin"
        ? "linear-gradient(to right, transparent 65%, rgb(40, 40, 40) 100%)"
        : "linear-gradient(to right, transparent 65%, rgb(8, 91, 187) 100%)"}; */
    background: linear-gradient(
      to right,
      transparent 65%,
      rgb(40, 40, 40) 100%
    );
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
      animation: 0.5s slideleft;
      margin-left: 7rem;
      z-index: 1;
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
        margin: 0 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7rem;

        & > .git {
          color: lightgrey;
          display: flex;
          justify-content: center;
          align-items: center;

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 0.5s;

            &:hover {
              height: 1.5rem;
              width: 1.5rem;
              transition: ease-in-out 0.5s;
              color: darkgrey;
            }
          }
        }

        & > .linkedin {
          color: lightgrey;
          display: flex;
          justify-content: center;
          align-items: center;

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 0.5s;

            &:hover {
              height: 1.5rem;
              width: 1.5rem;
              transition: ease-in-out 0.5s;
              color: rgb(8, 91, 187);
            }
          }
        }

        & > .instagram {
          color: lightgrey;
          display: flex;
          justify-content: center;
          align-items: center;

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 0.5s;

            &:hover {
              height: 1.5rem;
              width: 1.5rem;
              transition: ease-in-out 0.5s;
              color: rgb(255, 0, 95);
            }
          }
        }

        & > .soundcloud {
          color: lightgrey;
          display: flex;
          justify-content: center;
          align-items: center;

          & > svg {
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 0.5s;

            &:hover {
              height: 2rem;
              width: 2rem;
              transition: ease-in-out 0.5s;
              color: rgb(255, 101, 0);
            }
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
      color: lightgrey;
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
      /* background-color: rgb(40, 40, 40); */
      background: linear-gradient(
        to right,
        transparent 65%,
        rgb(40, 40, 40) 100%
      );
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
        animation: 0.5s slideup;
        margin: 3rem 0 auto;
        z-index: 1;
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
          margin-right: 1rem;

          & > .git {
            color: lightgrey;
            display: flex;
            justify-content: center;
            align-items: center;

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 0.5s;

              &:hover {
                height: 1.5rem;
                width: 1.5rem;
                transition: ease-in-out 0.5s;
                color: darkgrey;
              }
            }
          }

          & > .linkedin {
            color: lightgrey;
            display: flex;
            justify-content: center;
            align-items: center;

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 0.5s;

              &:hover {
                height: 1.5rem;
                width: 1.5rem;
                transition: ease-in-out 0.5s;
                color: rgb(8, 91, 187);
              }
            }
          }

          & > .instagram {
            color: lightgrey;
            display: flex;
            justify-content: center;
            align-items: center;

            & > svg {
              height: 1rem;
              width: 1rem;
              transition: ease-in-out 0.5s;

              &:hover {
                height: 1.5rem;
                width: 1.5rem;
                transition: ease-in-out 0.5s;
                color: rgb(255, 0, 95);
              }
            }
          }

          & > .soundcloud {
            color: lightgrey;
            display: flex;
            justify-content: center;
            align-items: center;

            & > svg {
              height: 1.5rem;
              width: 1.5rem;
              transition: ease-in-out 0.5s;

              &:hover {
                height: 2rem;
                width: 2rem;
                transition: ease-in-out 0.5s;
                color: rgb(255, 101, 0);
              }
            }
          }
        }
      }
    }
  }
`;

export default FooterWrap;
