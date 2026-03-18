import styled from "styled-components";

export const NavBarWrap = styled.div`
  @keyframes slideham {
    0%,
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

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  .burger-open,
  .burger-close {
    color: ghostwhite;
    fill: ghostwhite;
    transition: 0.5s ease-in-out;
  }

  .burger-open {
    transform: rotate(180deg);
  }

  .nav-flex {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 2rem;
    background-color: rgb(222, 222, 222);
  }

  .resume-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 2rem;
    border: none;
    cursor: pointer;
    font-size: 13px;
    transition: 300ms ease-in-out;

    & > svg {
      margin: 0 0 0.2rem 0.5rem;
      transition: 500ms ease-in-out;
    }

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
  }

  .nav-burger .resume-button {
    background: transparent;
    color: ghostwhite;
  }

  .NavBar .resume-button {
    background: rgb(222, 222, 222);
    color: rgb(50, 50, 50);
  }

  .nav-burger,
  .NavBar > .resume,
  .nav-burger > .resume {
    position: fixed;
  }

  .nav-burger > .resume,
  .NavBar > .resume {
    right: 0;

    & > form {
      display: flex;
      align-items: center;
      height: 2rem;
    }
  }

  .nav-burger > .resume {
    top: 0;
    margin-right: 0.5rem;
  }

  .nav-burger {
    z-index: 2;
    margin: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    font-size: 1.5rem;

    & > .nav-burger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 4.5rem;
      height: 15.5rem;
      margin: 0.5rem 0;
      transition: 300ms ease-in-out;
      animation: 0.5s slideham;

      & > .nav-line {
        width: 100%;
        border-bottom: 2px solid rgb(50, 50, 50);
        border-radius: 50px;
      }

      & > .nav-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        border-bottom: 2px solid ghostwhite;

        &:last-child {
          border-bottom: none;
        }

        & > .nav-title {
          font-size: 8px;
          font-weight: 700;
          color: ghostwhite;
          fill: ghostwhite;
          transition: 300ms ease-in-out;
        }

        &.selected-box {
          color: ghostwhite;
          fill: ghostwhite;
          transition: 300ms ease-in-out;
        }

        & > .nav-link > .nav-hover-home {
          display: none;
        }

        & > .nav-link,
        & > .selected {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 300ms ease-in-out;

          & > svg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.5rem;
            height: 1.5rem;
            background-color: transparent;
            color: ghostwhite;
            fill: ghostwhite;
            transition: 300ms ease-in-out;
          }
        }

        & > .selected {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  .NavBar {
    position: fixed;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    height: 2rem;
    background-color: rgb(222, 222, 222);

    a {
      color: rgb(100, 100, 100);
    }

    & > .nav-box-name {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 0 1rem;
      white-space: nowrap;
      font-weight: bold;
      color: rgb(50, 50, 50);
      border-right: 2px solid rgb(50, 50, 50);
    }

    & > .nav-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      cursor: pointer;
      transition: 300ms ease-in-out;

      & > .nav-title {
        position: relative;
        display: flex;
        align-items: center;
        margin: 1rem 0.3rem;
        font-size: 13px;
        transition: 300ms ease-in-out;

        & > svg {
          height: 0.7em;
        }

        & > .nav-header {
          margin-left: 0.3rem;
          transition: 300ms ease-in-out;
        }

        .nav-header:hover {
          text-shadow: 0 0 1px currentColor;
        }

        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: rgb(100, 100, 100);
          transform: translateX(-50%);
          transition: width 300ms ease-in-out;
        }

        &:hover::after {
          width: 100%;
        }
      }

      &.selected-box {
        width: 100%;
        color: rgb(50, 50, 50);
        transition: 300ms ease-in-out;

        & > .nav-title {
          border-bottom: 2px solid rgb(50, 50, 50);

          &::after {
            display: none;
          }
        }
      }

      & > .nav-link,
      & > .nav-link-hover,
      & > .selected {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 300ms ease-in-out;

        & > svg {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          transition: 300ms ease-in-out;
        }
      }

      & > .nav-link > svg {
        color: rgb(50, 50, 50);
        fill: rgb(50, 50, 50);
      }

      & > .nav-link-hover > svg {
        color: rgb(100, 100, 100);
        fill: ghostwhite;
      }

      & > .selected {
        color: ghostwhite;
        fill: ghostwhite;
      }
    }
  }
`;

export default NavBarWrap;
