import styled from "styled-components";

export const NavBarWrap = styled.div`
  @keyframes slideleft {
    0% {
      color: ghostwhite;
      fill: transparent;
    }

    50% {
      color: ghostwhite;
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

  @keyframes slideham {
    0% {
      color: ghostwhite;
      fill: transparent;
    }

    50% {
      color: ghostwhite;
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

  @keyframes slideright {
    0% {
      color: ghostwhite;
      fill: transparent;
    }

    50% {
      color: ghostwhite;
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

  /* & > .social-links {
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
        color: ghostwhite;

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
        color: ghostwhite;

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
        color: ghostwhite;

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
        color: ghostwhite;

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
  } */

  a:hover {
    text-decoration: none;
    color: ghostwhite;
  }
  a:focus {
    text-decoration: none;
    color: ghostwhite;
  }
  a:active {
    text-decoration: none;
    color: ghostwhite;
  }

  .burger-open {
    color: black;
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close {
    color: black;
    transition: ease-in-out 0.5s;
  }

  .burger-open-rebel {
    color: rgb(299, 1, 1);
    transform: rotate(180deg);
    transition: ease-in-out 0.5s;
  }

  .burger-close-rebel {
    color: ghostwhite;
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
      /* background-color: rgb(40, 40, 40); */
      background-color: ghostwhite;
      margin: 0.5rem 0;
      transition: ease-in-out 300ms;
      height: 15.5rem;
      animation: 0.5s slideham;

      & > .nav-line {
        border-bottom: 2px solid black;
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
          color: black;
        }

        &.selected-box {
          transition: ease-in-out 300ms;
          text-decoration: none !important;
          color: ghostwhite;
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
            color: black;
            fill: black;
            transition: ease-in-out 300ms;

            &:hover {
              color: black;
              fill: black;
            }
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          color: black;
          fill: black;
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
            color: black;
            fill: black;
            transition: ease-in-out 300ms;

            &:hover {
              color: black;
              fill: black;
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
          color: ghostwhite;
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
            color: ghostwhite;
            fill: ghostwhite;
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
    /* background-color: rgb(40, 40, 40); */
    background-color: ghostwhite;
    z-index: 1;
    padding: 0 1rem;
    /* border-radius: 5px; */
    /* border-right: 2px solid black; */

    & > .nav-line {
      border-bottom: 2px solid black;
      width: 100%;
      border-radius: 50px;
    }

    a {
      text-decoration: none;
      color: ghostwhite;
    }

    & > .nav-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 5px solid black;
      height: 5rem;
      width: 5rem;
      border-radius: 10px;
      /* background-color: rgb(30, 30, 30); */
      background-color: ghostwhite;
      cursor: pointer;

      &:hover {
        border: 5px solid black;
        transition: ease-in-out 300ms;
        background-color: black;
      }

      & > .nav-title {
        font-size: 8px;
        font-weight: 700;
        transition: ease-in-out 300ms;
      }

      & > .nav-title-hover {
        font-size: 8px;
        font-weight: 700;
        transition: ease-in-out 300ms;
      }

      &.selected-box {
        background-color: black;
        transition: ease-in-out 300ms;
        border: 5px solid black;
      }

      & > .nav-link {
        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: black;
          fill: black;
          transition: ease-in-out 300ms;
        }
      }

      & > .nav-link-hover {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        color: ghostwhite;
        fill: ghostwhite;
        height: 2rem;
        width: 2rem;
        transition: ease-in-out 300ms;
        margin-bottom: 0.5rem;

        & > svg {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: ghostwhite;
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
      /* background-color: rgb(30, 30, 30); */
      background-color: ghostwhite;
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
        height: 2rem;
        width: 2rem;
        transition: ease-in-out 300ms;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default NavBarWrap;
