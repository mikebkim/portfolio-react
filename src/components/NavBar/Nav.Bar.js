import styled from "styled-components";

export const NavBarWrap = styled.div`
  @keyframes slideleft {
    0% {
      color: lightgrey;
      fill: transparent;
    }

    50% {
      color: lightgrey;
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
      margin: 0.5rem 0px;
    }
  }

  @keyframes slideright {
    0% {
      color: lightgrey;
      fill: transparent;
    }

    50% {
      color: lightgrey;
      fill: transparent;
    }

    75% {
      color: rgb(29, 29, 29);
      fill: transparent;
    }

    from {
      margin: 0.5rem 0px;
    }

    to {
      margin-left: -10rem;
    }
  }

  & > .social-links {
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    margin-top: -1rem;

    & > .social-icon {
      height: 3rem;
      width: 3rem;
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & > .git {
        color: lightgrey;

        & > svg {
          height: 1rem;
          width: 1rem;
          transition: ease-in-out 0.5s;

          &:hover {
            height: 2rem;
            width: 2rem;
            transition: ease-in-out 0.5s;
            color: darkgrey;
          }
        }
      }

      & > .linkedin {
        color: lightgrey;

        & > svg {
          height: 1rem;
          width: 1rem;
          transition: ease-in-out 0.5s;

          &:hover {
            height: 2rem;
            width: 2rem;
            transition: ease-in-out 0.5s;
            color: rgb(8, 91, 187);
          }
        }
      }

      & > .instagram {
        color: lightgrey;

        & > svg {
          height: 1rem;
          width: 1rem;
          transition: ease-in-out 0.5s;

          &:hover {
            height: 2rem;
            width: 2rem;
            transition: ease-in-out 0.5s;
            color: rgb(255, 0, 95);
          }
        }
      }

      & > .soundcloud {
        color: lightgrey;

        & > svg {
          height: 1rem;
          width: 1rem;
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

  a:hover {
    text-decoration: none;
    color: lightgrey;
  }
  a:focus {
    text-decoration: none;
    color: lightgrey;
  }
  a:active {
    text-decoration: none;
    color: lightgrey;
  }

  .burger-open {
    color: rgb(1, 200, 200);
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close {
    color: lightgrey;
    transition: ease-in-out 0.5s;
  }

  .burger-open-rebel {
    color: rgb(299, 1, 1);
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close-rebel {
    color: lightgrey;
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

    & > .nav-burger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 4.5rem;
      background-color: rgb(1, 1, 1, 0.1);
      margin: 0.5rem 0;
      transition: ease-in-out 300ms;
      height: 15.5rem;
      animation: 0.5s slideleft;

      & > .nav-line {
        border-bottom: 2px solid rgb(1, 200, 200);
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
          color: rgb(1, 200, 200);
        }

        &.selected-box {
          transition: ease-in-out 300ms;
          text-decoration: none !important;
          color: lightgrey;
        }

        & > .nav-link {
          & > svg {
            height: 1.5rem;
            width: 1.5rem;
            text-decoration: none;
            align-items: center;
            display: flex;
            justify-content: center;
            background-color: transparent;
            color: lightgrey;
            fill: lightgrey;
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(1, 200, 200);
              fill: rgb(1, 200, 200);
            }
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: rgb(1, 200, 200);
          fill: rgb(1, 200, 200);
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
            color: rgb(1, 200, 200);
            fill: rgb(1, 200, 200);
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(1, 200, 200);
              fill: rgb(1, 200, 200);
            }
          }
        }
      }
      & > .nav-line-rebel {
        border-bottom: 2px solid rgb(200, 1, 1);
        width: 100%;
        border-radius: 50px;
      }

      & > .nav-box-rebel {
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
          color: rgb(200, 1, 1);
        }

        &.selected-box {
          transition: ease-in-out 300ms;
          text-decoration: none !important;
          color: lightgrey;
        }

        & > .nav-link {
          & > svg {
            height: 1.5rem;
            width: 1.5rem;
            text-decoration: none;
            align-items: center;
            display: flex;
            justify-content: center;
            background-color: transparent;
            color: lightgrey;
            fill: lightgrey;
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(200, 1, 1);
              fill: rgb(200, 1, 1);
            }
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: rgb(200, 1, 1);
          fill: rgb(200, 1, 1);
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
            color: rgb(200, 1, 1);
            fill: rgb(200, 1, 1);
            transition: ease-in-out 300ms;

            &:hover {
              color: rgb(200, 1, 1);
              fill: rgb(200, 1, 1);
            }
          }
        }
      }
    }
  }

  .NavBar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(1, 1, 1, 0.1);
    z-index: 1;
    padding: 0 1rem;
    border-radius: 5px;

    & > .nav-line {
      border-bottom: 2px solid rgb(1, 200, 200);
      width: 100%;
      border-radius: 50px;
    }

    a {
      text-decoration: none;
      color: lightgrey;
    }

    & > .nav-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 5px solid rgb(1, 200, 200);
      height: 5rem;
      width: 5rem;
      border-radius: 10px;
      background-color: rgb(30, 30, 30);
      cursor: pointer;

      &:hover {
        border: 5px solid rgb(1, 200, 200);
        transition: ease-in-out 300ms;
        background-color: rgb(1, 200, 200, 0.5);
      }

      & > .nav-title {
        font-size: 8px;
        font-weight: 700;
        transition: ease-in-out 300ms;
      }

      &.selected-box {
        background-color: rgb(1, 200, 200, 0.5);
        transition: ease-in-out 300ms;
        border: 5px solid rgb(1, 200, 200);
      }

      & > .nav-link {
        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: rgb(1, 200, 200);
          fill: rgb(1, 200, 200);
          transition: ease-in-out 300ms;

          &:hover {
            color: lightgrey;
            fill: lightgrey;
          }
        }
      }

      & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        color: lightgrey;
        fill: lightgrey;
        height: 2rem;
        width: 2rem;
        transition: ease-in-out 300ms;
        margin-bottom: 0.5rem;
      }
    }

    // ---------------- REBEL ---------------- //

    & > .nav-line-rebel {
      border-bottom: 2px solid rgb(200, 1, 1);
      width: 100%;
      border-radius: 50px;
    }

    & > .nav-box-rebel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 5px solid rgb(200, 1, 1);
      height: 5rem;
      width: 5rem;
      border-radius: 10px;
      background-color: rgb(30, 30, 30);
      cursor: pointer;

      &:hover {
        border: 5px solid rgb(200, 1, 1);
        transition: ease-in-out 300ms;
        background-color: rgb(200, 1, 1, 0.5);
      }

      & > .nav-title {
        font-size: 8px;
        font-weight: 700;
        transition: ease-in-out 300ms;
      }

      &.selected-box {
        background-color: rgb(200, 1, 1, 0.5);
        transition: ease-in-out 300ms;
        border: 5px solid rgb(200, 1, 1);
      }

      & > .nav-link {
        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: rgb(200, 1, 1);
          fill: rgb(200, 1, 1);
          transition: ease-in-out 300ms;

          &:hover {
            color: lightgrey;
            fill: lightgrey;
          }
        }
      }

      & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        color: lightgrey;
        fill: lightgrey;
        height: 2rem;
        width: 2rem;
        transition: ease-in-out 300ms;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default NavBarWrap;
