import styled from "styled-components";

const Styled_NavBar = styled.div`
  // Desktop
  .NavBar {
    @keyframes slidein {
      0% {
        color: transparent;
        fill: transparent;
      }

      75% {
        color: transparent;
        fill: transparent;
      }

      from {
        margin-left: 8rem;
        width: 0;
      }

      to {
        margin-right: 14rem;
        width: 8rem;
      }
    }

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
        margin-right: 8rem;
        width: 0;
      }

      to {
        margin-left: 14rem;
        width: 8rem;
      }
    }

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    background-color: rgb(24, 24, 24);
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
      margin: 0.018rem auto;

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
        /* --box-shadow-color: lightgrey; */
        /* box-shadow: 0 0 4px 4px var(--box-shadow-color); */
        transition: ease-in-out 300ms;

        & > .nav-line-selected {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-bottom: 5px solid lightgrey;
          margin-top: -1rem;
          margin-left: 14rem;
          color: lightgrey;
          fill: lightgrey;
          width: 8rem;
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
  @media only screen and (max-width: 1200px) {
    .NavBar {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      align-items: center;
      background-color: rgb(24, 24, 24);
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
        margin: 0.018rem auto;

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
            font-size: 12px;
            color: lightgrey;
            fill: lightgrey;
            width: max-content;
            z-index: 0;
            animation: none;
            border-bottom: 5px solid lightgrey;
          }

          & > img {
            width: 2rem;
          }
        }
      }
    }
  }
`;

export default Styled_NavBar;
