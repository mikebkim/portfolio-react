import styled from "styled-components";

export const HomePageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .HomePage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    .panda {
      display: flex;
      margin: 0 auto;
      border-radius: 100%;
    }

    h1 {
      color: lightgrey;
      margin: 3rem 0 0 0;
      font-size: 4rem;
    }

    h2 {
      color: lightgrey;
      margin: 0 0 0 0;
      font-size: 4rem;

      & > .home-name {
        color: rgb(1, 200, 200);
      }
    }

    h3 {
      color: lightgrey;
      margin: 0 0 0 0;
      font-size: 2rem;
    }

    h5 {
      display: flex;
      flex-direction: row-reverse;
      margin: 0;
      width: 100%;
    }

    p {
      color: lightgrey;
      margin: 0;
      font-size: 1.2rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: start;

      & > hr {
        width: 100%;
      }
    }

    & > .home {
      margin-left: 1rem;

      & > .resume {
        margin-top: 1.5rem;
        margin-left: 0.5rem;

        & > form {
          justify-content: center;
          display: flex;

          & > .resume-button {
            font-family: "Gill Sans";
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: transparent;
            border: 1px solid lightgrey;
            transition: ease-in-out 300ms;
            cursor: pointer;
            font-weight: bold;
            color: lightgrey;

            & > svg {
              margin-bottom: 0.2rem;
              margin-left: 0.5rem;
            }
          }

          & > .resume-button:hover {
            font-family: "Gill Sans";
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: lightgrey;
            border: 1px solid lightgrey;
            transition: ease-in-out 300ms;
            cursor: pointer;
            color: rgb(1, 200, 200);
            fill: lightgrey;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .HomePage {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 3rem 0 0 5rem;

      h1 {
        margin-bottom: 0.2rem;
        font-size: 2rem;
        margin-top: 1rem;
      }

      h2 {
        color: lightgrey;
        margin: 0 0 0 0;
        font-size: 2rem;

        & > .home-name {
          color: rgb(1, 200, 200);
        }
      }

      h3 {
        color: lightgrey;
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      h5 {
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
        width: 100%;
      }

      p {
        color: lightgrey;
        margin: 1rem 0;
        width: 100%;
      }

      & > hr {
        width: 100%;
        height: 2.5px;
      }

      & > .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      & > .home {
        margin-left: 1rem;

        & > .resume {
          margin-top: 1.5rem;
          margin-left: 0.5rem;

          & > form {
            justify-content: center;
            display: flex;

            & > .resume-button {
              font-family: "Gill Sans";
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background: transparent;
              border: 1px solid lightgrey;
              transition: ease-in-out 300ms;
              cursor: pointer;
              font-weight: bold;
              color: lightgrey;

              & > svg {
                margin-bottom: 0.2rem;
                margin-left: 0.5rem;
              }
            }

            & > .resume-button:hover {
              font-family: "Gill Sans";
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background: lightgrey;
              border: 1px solid lightgrey;
              transition: ease-in-out 300ms;
              cursor: pointer;
              color: rgb(1, 200, 200);
              fill: lightgrey;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;

export default HomePageWrap;
