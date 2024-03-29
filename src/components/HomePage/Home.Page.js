import styled from "styled-components";

export const HomePageWrap = styled.div`
  @keyframes slideup {
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
      margin-bottom: 0.2rem;
      margin-left: 0.5rem;
    }

    to {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  [data-aos] {
    transition-duration: 1s !important;
  }

  .HomePage {
    margin: 0 auto;
    width: 65vw;
    /* height: 84vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    .panda {
      display: flex;
      margin: 0 auto;
    }

    h1 {
      color: lightgrey;
      margin: 4rem 0 0 0;
      font-size: 4rem;
      word-wrap: none;
    }

    h2 {
      color: lightgrey;
      margin: 0 0 0 0;
      font-size: 7rem;

      & > .home-name {
        color: rgb(1, 200, 200);
        text-shadow: 0px 0px 10px;
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
      margin-top: 0.5rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: start;
      border-bottom: 5px solid rgb(1, 200, 200);
      padding-bottom: 0.5rem;

      & > hr {
        width: 100%;
      }
    }

    & > .header-rebel {
      @keyframes pulse-black {
        0% {
          transform: scale(0.8);
          color: rgb(50, 50, 50);
        }

        100% {
          transform: scale(1);
          color: rgb(299, 1, 1);
        }
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: start;
      border-bottom: 5px solid rgb(299, 1, 1);
      padding-bottom: 0.5rem;

      & > .rebel-name {
        color: rgb(200, 1, 1);
        transition: ease-in-out 300ms;
        animation: pulse-black 2s infinite;
        text-shadow: 0px 0px 10px;
      }

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
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: rgb(1, 200, 200, 0.5);
            border: 2px solid rgb(1, 200, 200);
            transition: ease-in-out 300ms;
            cursor: pointer;
            color: rgb(1, 200, 200);

            &:hover {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background: rgb(1, 200, 200, 0.6);
              border: 5px solid rgb(1, 200, 200);
              transition: ease-in-out 300ms;
              cursor: pointer;
              color: lightgrey;
              fill: lightgrey;

              & > svg {
                margin-bottom: 0.2rem;
                margin-left: 0.5rem;
                animation: 1s slideup;
              }
            }
            & > svg {
              margin-bottom: 0.2rem;
              margin-left: 0.5rem;
            }
          }
        }
      }

      & > .resume-rebel {
        margin-top: 1.5rem;
        margin-left: 0.5rem;

        & > form {
          justify-content: center;
          display: flex;

          & > .resume-button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            height: 2rem;
            width: 13rem;
            background: rgb(200, 1, 1, 0.5);
            border: 2px solid rgb(200, 1, 1);
            transition: ease-in-out 300ms;
            cursor: pointer;
            color: rgb(299, 1, 1);

            &:hover {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background-color: rgb(200, 1, 1, 0.6);
              border: 5px solid rgb(200, 1, 1);
              transition: ease-in-out 300ms;
              cursor: pointer;
              color: lightgrey;
              fill: lightgrey;

              & > svg {
                margin-bottom: 0.2rem;
                margin-left: 0.5rem;
                animation: 1s slideup;
              }
            }
            & > svg {
              margin-bottom: 0.2rem;
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .HomePage {
      margin: 0px auto;
      width: 65vw;
      /* height: 84vh; */
      padding: 3rem 0px 0px 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > .dont-click {
        top: 1rem;
        left: 3rem;
        position: absolute;
        width: max-content;
        cursor: pointer;
        color: rgb(299, 1, 1);
      }

      & > .dont-click-fix {
        top: 1rem;
        left: 3rem;
        position: absolute;
        width: max-content;
        cursor: pointer;
        color: green;
      }

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
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2rem;
              height: 2rem;
              width: 13rem;
              background: rgb(1, 200, 200, 0.5);
              border: 2px solid rgb(1, 200, 200, 0.5);
              transition: ease-in-out 300ms;
              cursor: pointer;
              color: rgb(1, 200, 200);

              &:hover {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2rem;
                height: 2rem;
                width: 13rem;
                background: rgb(1, 200, 200);
                border: 5px solid rgb(1, 200, 200);
                transition: ease-in-out 300ms;
                cursor: pointer;
                color: lightgrey;
                fill: lightgrey;

                & > svg {
                  margin-bottom: 0.2rem;
                  margin-left: 0.5rem;
                  animation: 1s slideup;
                }
              }
              & > svg {
                margin-bottom: 0.2rem;
                margin-left: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePageWrap;
