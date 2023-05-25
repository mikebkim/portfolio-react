import styled from "styled-components";

export const NavBarWrap = styled.div`
  // Desktop
  /* .NavBar {
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
  } */

  // MOBILE
  /* @media only screen and (max-width: 1320px) { */
  .NavBar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    background-color: black;
    width: 0rem;
    z-index: 1;
    margin-left: 4rem;

    & > .nav-line {
      border-left: 3px solid rgb(1, 200, 200);
      height: 5%;
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
      height: 6rem;
      width: 6rem;
      border-radius: 10px;
      background-color: rgb(29, 29, 29);
      cursor: pointer;

      &:hover {
        border: 5px solid rgb(1, 200, 200);
        transition: ease-in-out 300ms;
        background-color: rgb(1, 200, 200, 0.5);
      }

      & > .nav-title {
        font-size: 10px;
        font-weight: 700;
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
        height: 3rem;
        width: 3rem;
        transition: ease-in-out 300ms;
        margin-bottom: 0.5rem;
      }
    }
  }
  /* } */
`;

export default NavBarWrap;
