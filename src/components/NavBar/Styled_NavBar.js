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
      border-bottom: 2px solid rgb(115, 248, 217);
    }

    & > .nav-box {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid rgb(115, 248, 217);
      border-bottom: 0;
      height: 100%;
      width: 100%;
      margin: 0 auto;

      &.selected-box {
        background-color: rgb(115, 248, 217);
      }

      & > .nav-link {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: transparent;
        color: rgb(115, 248, 217);
        fill: rgb(115, 248, 217);
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 1px solid rgb(115, 248, 217);
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
        background-color: white;
        color: black;
        fill: white;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 1px solid white;
        transition: ease-in-out 250ms;

        & > img {
          width: 2rem;
        }
      }

      & > .selected {
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: center;
        background-color: white;
        color: black;
        fill: black;
        border-radius: 2rem;
        height: 3rem;
        width: 3rem;
        border: 1px solid white;
        --box-shadow-color: white;
        box-shadow: 0 0 4px 4px var(--box-shadow-color);
        transition: ease-in-out 100ms;

        & > .nav-line-selected {
          display: flex;
          flex-direction: row-reverse;
          position: absolute;
          border-bottom: 2px solid rgb(115, 248, 217);
          margin-top: -1rem;
          margin-left: 14rem;
          color: rgb(115, 248, 217);
          fill: white;
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
        border-bottom: 2px solid white;
      }

      & > .nav-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgb(115, 248, 217);
        border-bottom: 0;
        height: 100%;
        width: 100%;
        margin: 0 auto;

        &.selected-box {
          background-color: rgb(115, 248, 217);
        }

        & > .nav-link {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: transparent;
          color: rgb(115, 248, 217);
          fill: black;
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;
          border: 1px solid rgb(115, 248, 217);

          & > img {
            width: 2rem;
          }
        }

        & > .nav-link:hover {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: white;
          color: black;
          fill: white;
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;
          border: 1px solid white;
          transition: ease-in-out 250ms;

          & > img {
            width: 2rem;
          }
        }

        & > .selected {
          text-decoration: none;
          align-items: center;
          display: flex;
          justify-content: center;
          background-color: white;
          color: black;
          fill: black;
          border-radius: 2rem;
          height: 3rem;
          width: 3rem;

          & > .nav-line-selected {
            margin-top: 6rem;
            margin-left: 10rem;
            margin-right: 10rem;
            font-size: 12px;
            color: black;
            fill: black;
            width: max-content;
            z-index: 0;
            animation: none;
            border-bottom: 2px solid black;
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
