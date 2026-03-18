import styled from "styled-components";

export const FooterWrap = styled.div`
  .Footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    background-color: rgb(222, 222, 222);
    z-index: 1;

    .social-hover {
      position: absolute;
      transform: translateX(-20px);
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
        margin: 0 2rem 0 0;
        margin-right: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;

        & > .git,
        & > .linkedin,
        & > .instagram,
        & > .soundcloud {
          color: rgb(100, 100, 100);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border: 3px solid rgb(100, 100, 100);
          background-size: 200% 100%;
          background-position: right;
          transition:
            background-position 500ms ease-in-out,
            color 500ms ease-in-out,
            height 500ms ease-in-out,
            width 500ms ease-in-out,
            border 500ms ease-in-out;
        }

        & > .git > svg,
        & > .linkedin > svg,
        & > .instagram > svg,
        & > .soundcloud > svg {
          height: 1rem;
          width: 1rem;
          transition: ease-in-out 500ms;
          z-index: 1;
        }

        & > .git {
          background: linear-gradient(to right, darkgrey 0%, transparent 50%);

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            border: transparent;
          }
        }

        & > .linkedin {
          background: linear-gradient(
            to right,
            rgb(8, 91, 187) 0%,
            transparent 50%
          );

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            border: transparent;
          }
        }

        & > .instagram {
          background: linear-gradient(
            to right,
            rgb(255, 0, 95) 0%,
            transparent 50%
          );

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            border: transparent;
          }
        }

        & > .soundcloud {
          background: linear-gradient(
            to right,
            rgb(255, 101, 0) 0%,
            transparent 50%
          );

          &:hover {
            color: ghostwhite;
            height: 2rem;
            width: 2rem;
            background-position: left;
            border: transparent;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .Footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: start;
      background-color: transparent;
      z-index: -1;

      .social-hover {
        position: absolute;
        margin: 3rem 0 auto;
        z-index: 1;
        display: flex;
        justify-content: center;
        width: fit-content;
        transition: ease-in-out 300ms;
        transform: none;
        opacity: 1;
        pointer-events: auto;

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
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;

          & > .git,
          & > .linkedin,
          & > .instagram,
          & > .soundcloud {
            color: ghostwhite;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 3px solid ghostwhite;
            border-radius: 1.5rem;
            height: 1.5rem;
            width: 1.5rem;
            transition: ease-in-out 500ms;
          }

          & > .git > svg,
          & > .linkedin > svg,
          & > .instagram > svg,
          & > .soundcloud > svg {
            height: 1rem;
            width: 1rem;
            transition: ease-in-out 500ms;
            z-index: 1;
          }

          & > .git:hover {
            color: ghostwhite;
            border: 5px solid darkgrey;
            background-color: darkgrey;
          }

          & > .linkedin:hover {
            color: ghostwhite;
            border: 5px solid rgb(8, 91, 187);
            background-color: rgb(8, 91, 187);
          }

          & > .instagram:hover {
            color: ghostwhite;
            border: 5px solid rgb(255, 0, 95);
            background-color: rgb(255, 0, 95);
          }

          & > .soundcloud:hover {
            color: ghostwhite;
            border: 5px solid rgb(255, 101, 0);
            background-color: rgb(255, 101, 0);
          }
        }
      }
    }
  }
`;

export default FooterWrap;
