import styled from "styled-components";

export const FooterWrap = styled.div`
  .Footer {
    /* background: linear-gradient(
      to right,
      transparent 15%,
      rgb(50, 50, 50) 100%
    ); */
    bottom: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    height: 3rem;
    background-color: rgb(222, 222, 222);

    .social-hover {
      position: absolute;
      transform: translateX(-20px); /* hidden left */
      opacity: 0;
      transition:
        transform 500ms ease-in-out,
        opacity 500ms ease-in-out;
      padding: 0 0.4rem;
      border-radius: 5px;
      display: flex;
      justify-content: flex-end;
      pointer-events: none;
      z-index: 0;
    }

    .social-icon:hover .social-hover {
      transform: translateX(0);
      opacity: 1;
      transition: 500ms ease-in-out;
      color: ghostwhite !important;
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
          color: rgb(100, 100, 100);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border: 3px solid rgb(100, 100, 100);
          background: linear-gradient(to right, darkgrey 0%, transparent 50%);
          background-size: 200% 100%;
          background-position: right;
          transition:
            background-position 500ms ease-in-out,
            color 500ms ease-in-out;

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            transition: ease-in-out 500ms;
            border: transparent;
            border-image: linear-gradient(to right, transparent, darkgrey);
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 500ms;
            z-index: 1;
          }
        }

        & > .linkedin {
          color: rgb(100, 100, 100);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border: 3px solid rgb(100, 100, 100);
          background: linear-gradient(
            to right,
            rgb(8, 91, 187) 0%,
            transparent 50%
          );
          background-size: 200% 100%;
          background-position: right;
          transition:
            background-position 500ms ease-in-out,
            color 500ms ease-in-out;

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            transition: ease-in-out 500ms;
            border: transparent;
            border-image: linear-gradient(
              to right,
              transparent,
              rgb(8, 91, 187)
            );
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 500ms;
            z-index: 1;
          }
        }

        & > .instagram {
          color: rgb(100, 100, 100);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border: 3px solid rgb(100, 100, 100);
          background: linear-gradient(
            to right,
            rgb(255, 0, 95) 0%,
            transparent 50%
          );
          background-size: 200% 100%;
          background-position: right;
          transition:
            background-position 500ms ease-in-out,
            color 500ms ease-in-out;

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            transition: ease-in-out 500ms;
            border: transparent;
            border-image: linear-gradient(
              to right,
              transparent,
              rgb(255, 0, 95)
            );
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 500ms;
            z-index: 1;
          }
        }

        & > .soundcloud {
          color: rgb(100, 100, 100);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border: 3px solid rgb(100, 100, 100);
          background: linear-gradient(
            to right,
            rgb(255, 101, 0) 0%,
            transparent 50%
          );
          background-size: 200% 100%;
          background-position: right;
          transition:
            background-position 500ms ease-in-out,
            color 500ms ease-in-out;

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            transition: ease-in-out 500ms;
            border: transparent;
            border-image: linear-gradient(
              to right,
              transparent,
              rgb(255, 101, 0)
            );
          }

          & > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 500ms;
            z-index: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .Footer {
      top: 0;
      position: fixed;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 auto;
      height: 3rem;

      .social-hover {
        position: absolute;
        transition: ease-in-out 300ms;
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
            color: rgb(100, 100, 100);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid rgb(100, 100, 100);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 500ms;

            &:hover {
              transition: ease-in-out 500ms;
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
              transition: ease-in-out 500ms;
              z-index: 1;
            }
          }

          & > .linkedin {
            color: rgb(100, 100, 100);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid rgb(100, 100, 100);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 500ms;

            &:hover {
              transition: ease-in-out 500ms;
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
              transition: ease-in-out 500ms;
              z-index: 1;
            }
          }

          & > .instagram {
            color: rgb(100, 100, 100);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid rgb(100, 100, 100);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 500ms;

            &:hover {
              transition: ease-in-out 500ms;
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
              transition: ease-in-out 500ms;
              z-index: 1;
            }
          }

          & > .soundcloud {
            color: rgb(100, 100, 100);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid rgb(100, 100, 100);
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 500ms;

            &:hover {
              transition: ease-in-out 500ms;
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
              transition: ease-in-out 500ms;
              z-index: 1;
            }
          }
        }
      }
    }
  }
`;

export default FooterWrap;
