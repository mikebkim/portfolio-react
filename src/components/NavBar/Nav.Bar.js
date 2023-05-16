import styled from "styled-components";

export const NavBarWrap = styled.div`
  // Desktop
  .NavBar {
    @keyframes slideinright {
      0% {
        color: transparent;
        fill: transparent;
      }

      75% {
        color: transparent;
        fill: transparent;
      }

      from {
        margin-right: 10rem;
        width: 0;
      }

      to {
        margin-left: 8rem;
        width: 2rem;
      }
    }

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    width: 6rem;
    z-index: 1;

    & > .nav-box:last-child {
      border-bottom: 5px solid rgb(1, 200, 200);
    }

    & > .nav-box {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid rgb(1, 200, 200);
      height: 100%;
      width: 100%;
      margin: 0.017rem auto;

      &.selected-box {
        background-color: rgb(1, 200, 200);
        transition: ease-in-out 300ms;
        border: 5px solid lightgrey;
      }

      & > .nav-link {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: transparent;
        color: rgb(1, 200, 200);
        fill: rgb(1, 200, 200);
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 5px solid rgb(1, 200, 200);
        transition: ease-in-out 300ms;

        & > img {
          width: 2rem;
        }
      }

      & > .nav-link:hover {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: rgb(1, 200, 200);
        color: lightgrey;
        fill: lightgrey;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 5px solid white;
        transition: ease-in-out 300ms;

        & > img {
          width: 2rem;
        }
      }

      & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: rgb(1, 200, 200);
        color: lightgrey;
        fill: lightgrey;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 5px solid lightgrey;
        transition: ease-in-out 300ms;

        & > .nav-line-selected {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-bottom: 5px solid lightgrey;
          margin-left: 8rem;
          color: lightgrey;
          fill: lightgrey;
          width: 2rem;
          z-index: -1;
          animation: 1s slideinright;

          & > .nav-title {
            position: absolute;
            left: 2.5rem;
            bottom: -0.7rem;
          }
        }

        & > .nav-line-selected-home {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-right: 5px solid lightgrey;
          margin-left: 10rem;
          color: lightgrey;
          fill: lightgrey;
          height: 2rem;
          z-index: -1;
          animation: 1s slideinright;
        }

        & > .nav-line-selected-technologies {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-right: 5px solid lightgrey;
          margin-left: 10rem;
          color: lightgrey;
          fill: lightgrey;
          height: 2rem;
          z-index: -1;
          animation: 1s slideinright;
        }

        & > .nav-line-selected-projects {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-right: 5px solid lightgrey;
          margin-left: 10rem;
          color: lightgrey;
          fill: lightgrey;
          height: 2rem;
          z-index: -1;
          animation: 1s slideinright;
        }

        & > .nav-line-selected-contact {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-right: 5px solid lightgrey;
          margin-left: 10rem;
          color: lightgrey;
          fill: lightgrey;
          height: 2rem;
          z-index: -1;
          animation: 1s slideinright;
        }

        & > img {
          width: 2rem;
        }
      }
    }
  }

  // MOBILE
  @media only screen and (max-width: 1320px) {
    .NavBar {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      align-items: center;
      width: 5rem;
      z-index: 1;

      & > .nav-box:last-child {
        border-bottom: 5px solid rgb(1, 200, 200);
      }

      & > .nav-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid rgb(1, 200, 200);
        height: 100%;
        width: 100%;
        margin: 0.017rem auto;

        &.selected-box {
          background-color: rgb(1, 200, 200);
          transition: ease-in-out 300ms;
          border: 5px solid lightgrey;
        }

        & > .nav-link {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: rgb(1, 200, 200);
          fill: rgb(1, 200, 200);
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;
          border: 5px solid rgb(1, 200, 200);
          transition: ease-in-out 300ms;

          & > img {
            width: 2rem;
          }
        }

        & > .nav-link:hover {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: rgb(1, 200, 200);
          color: lightgrey;
          fill: lightgrey;
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;
          border: 5px solid white;
          transition: ease-in-out 300ms;

          & > img {
            width: 2rem;
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: rgb(1, 200, 200);
          color: lightgrey;
          fill: lightgrey;
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;
          border: 5px solid lightgrey;
          transition: ease-in-out 300ms;
          margin-bottom: 1rem;

          & > .nav-line-selected {
            margin-top: 5rem;
            margin-left: 10rem;
            margin-right: 10rem;
            color: lightgrey;
            fill: lightgrey;
            width: max-content;
            z-index: 0;
            animation: none;
            border-bottom: none;

            & > .nav-title {
              position: static;
              display: flex;
              color: lightgrey;
              margin-top: 0.5rem;
              font-size: 9px;
              font-weight: bolder;
            }
          }

          & > .nav-line-selected-home {
            border-right: none;
          }

          & > .nav-line-selected-technologies {
            border-right: none;
          }

          & > .nav-line-selected-projects {
            border-right: none;
          }

          & > .nav-line-selected-contact {
            border-right: none;
          }

          & > img {
            width: 2rem;
          }
        }
      }
    }
  }
`;

export default NavBarWrap;
