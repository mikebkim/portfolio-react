import styled from "styled-components";

export const NavBarWrap = styled.div`
  @keyframes slideham {
    0% {
      color: rgb(50, 50, 50);
      fill: transparent;
    }

    50% {
      color: rgb(50, 50, 50);
      fill: transparent;
    }

    75% {
      color: rgb(29, 29, 29);
      fill: transparent;
    }

    from {
      margin-left: -10rem;
    }

    to {
      margin: 0.5rem 0;
    }
  }

  @keyframes shimmerText {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  a:hover {
    text-decoration: none;
    color: ghostwhite;
    fill: ghostwhite;
  }
  a:focus {
    text-decoration: none;
    color: ghostwhite;
    fill: ghostwhite;
  }
  a:active {
    text-decoration: none;
    color: ghostwhite;
    fill: ghostwhite;
  }

  .burger-open {
    color: ghostwhite;
    fill: ghostwhite;
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close {
    color: ghostwhite;
    fill: ghostwhite;
    transition: ease-in-out 0.5s;
  }

  .nav-burger {
    margin: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    position: fixed;
    z-index: 2;

    & > .resume {
      position: fixed;
      top: 0;
      right: 0;
      margin-right: 0.5rem;

      & > form {
        display: flex;
        align-items: center;
        height: 2rem;

        & > .resume-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          color: ghostwhite;
          position: relative;
          transition: ease-in-out 300ms;
          font-size: 13px;

          &:hover {
            background: linear-gradient(
              120deg,
              rgb(50, 50, 50) 20%,
              rgb(255, 255, 255) 40%,
              rgb(50, 50, 50) 60%
            );
            background-size: 200% auto;
            animation: shimmerText 2s ease-in-out infinite alternate;

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          & > svg {
            margin-bottom: 0.2rem;
            margin-left: 0.5rem;
            transition: ease-in-out 500ms;
          }
        }
      }
    }

    & > .nav-burger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 4.5rem;
      margin: 0.5rem 0;
      transition: ease-in-out 300ms;
      height: 15.5rem;
      animation: 0.5s slideham;

      & > .nav-line {
        border-bottom: 2px solid rgb(50, 50, 50);
        width: 100%;
        border-radius: 50px;
      }

      & > .nav-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 4rem;
        cursor: pointer;
        border-bottom: 2px solid ghostwhite;

        &:last-child {
          border-bottom: none;
        }

        & > .nav-title {
          font-size: 8px;
          font-weight: 700;
          transition: ease-in-out 300ms;
          color: ghostwhite;
          fill: ghostwhite;
        }

        &.selected-box {
          transition: ease-in-out 300ms;
          text-decoration: none !important;
          color: ghostwhite;
          fill: ghostwhite;
        }

        & > .nav-link {
          & > .nav-hover-home {
            display: none;
          }

          & > svg {
            height: 1.5rem;
            width: 1.5rem;
            text-decoration: none;
            align-items: center;
            display: flex;
            justify-content: center;
            background-color: transparent;
            color: ghostwhite;
            fill: ghostwhite;
            transition: ease-in-out 300ms;

            &:hover {
              color: ghostwhite;
              fill: ghostwhite;
            }
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: ghostwhite;
          fill: ghostwhite;
          height: 1.5rem;
          width: 1.5rem;
          transition: ease-in-out 300ms;
          margin-bottom: 0.5rem;

          & > svg {
            height: 1.5rem;
            width: 1.5rem;
            text-decoration: none;
            align-items: center;
            display: flex;
            justify-content: center;
            background-color: transparent;
            color: ghostwhite;
            fill: ghostwhite;
            transition: ease-in-out 300ms;

            &:hover {
              color: ghostwhite;
              fill: ghostwhite;
            }
          }
        }
      }
    }
  }

  .nav-flex {
    width: 100%;
    background-color: rgb(222, 222, 222);
    height: 2rem;
    top: 0;
    position: fixed;
    right: 0;
    z-index: 1;
  }

  .NavBar {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(222, 222, 222);
    z-index: 1;
    left: 0;
    height: 2rem;

    & > .resume {
      position: fixed;
      right: 0;

      & > form {
        display: flex;
        align-items: center;
        height: 2rem;

        & > .resume-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(222, 222, 222);
          border: none;
          cursor: pointer;
          color: rgb(50, 50, 50);
          position: relative;
          transition: ease-in-out 300ms;
          font-size: 13px;

          &:hover {
            background: linear-gradient(
              120deg,
              rgb(50, 50, 50) 20%,
              rgb(255, 255, 255) 40%,
              rgb(50, 50, 50) 60%
            );
            background-size: 200% auto;
            animation: shimmerText 2s ease-in-out infinite alternate;

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          & > svg {
            margin-bottom: 0.2rem;
            margin-left: 0.5rem;
            transition: ease-in-out 500ms;
          }
        }
      }
    }

    a {
      text-decoration: none;
      color: rgb(100, 100, 100);
    }

    & > .nav-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0 2rem;
      transition: ease-in-out 300ms;

      & > .nav-title {
        display: flex;
        margin: 1rem 0.3rem;
        align-items: center;
        position: relative;
        transition: ease-in-out 300ms;
        font-size: 13px;

        .nav-header:hover {
          text-shadow: 0 0 1px currentColor;
          transition: ease-in-out 300ms;
        }

        & > svg {
          height: 0.7em;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: rgb(100, 100, 100);
          transform: translateX(-50%);
          transition: width 300ms ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }

        & > .nav-header {
          margin-left: 0.3rem;
          transition: ease-in-out 300ms;
        }
      }

      &.selected-box {
        transition: ease-in-out 300ms;
        width: 100%;
        color: rgb(50, 50, 50);

        & > .nav-title {
          display: flex;
          margin: 1rem 0.3rem;
          align-items: center;
          border-bottom: 2px solid rgb(50, 50, 50);

          & > .nav-header {
            margin-left: 0.3rem;
          }
        }
      }

      & > .nav-link {
        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: rgb(50, 50, 50);
          fill: rgb(50, 50, 50);
          transition: ease-in-out 300ms;
        }
      }

      & > .nav-link-hover {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        transition: ease-in-out 300ms;

        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: rgb(100, 100, 100);
          fill: ghostwhite;
          transition: ease-in-out 300ms;
        }
      }

      & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        color: ghostwhite;
        fill: ghostwhite;
        transition: ease-in-out 300ms;
      }
    }
  }
`;

export default NavBarWrap;
