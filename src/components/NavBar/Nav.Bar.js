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

  a:hover {
    text-decoration: none;
    color: rgb(50, 50, 50);
  }
  a:focus {
    text-decoration: none;
    color: rgb(50, 50, 50);
  }
  a:active {
    text-decoration: none;
    color: rgb(50, 50, 50);
  }

  .burger-open {
    color: rgb(50, 50, 50);
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close {
    color: rgb(50, 50, 50);
    transition: ease-in-out 0.5s;
  }

  .nav-burger {
    margin: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    position: fixed;
    z-index: 1;

    & > .nav-burger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 4.5rem;
      background-color: ghostwhite;
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

        &:last-child {
          border-bottom: none;
        }

        & > .nav-title {
          font-size: 8px;
          font-weight: 700;
          transition: ease-in-out 300ms;
          color: rgb(50, 50, 50);
        }

        &.selected-box {
          transition: ease-in-out 300ms;
          text-decoration: none !important;
          color: rgb(50, 50, 50);
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
            color: rgb(50, 50, 50);
            fill: rgb(50, 50, 50);
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(50, 50, 50);
              fill: rgb(50, 50, 50);
            }
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: rgb(50, 50, 50);
          fill: rgb(50, 50, 50);
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
            color: rgb(50, 50, 50);
            fill: rgb(50, 50, 50);
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(50, 50, 50);
              fill: rgb(50, 50, 50);
            }
          }
        }
      }
    }
  }

  .nav-flex {
    width: 100%;
    background-color: ghostwhite;
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
    background-color: ghostwhite;
    z-index: 1;
    left: 0;
    height: 2rem;
    /* width: 100%; */

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
