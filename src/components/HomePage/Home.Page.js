import styled from "styled-components";
export const NameHead = styled.h1`
  color: ${({ color }) => color};
  transition: color 0.2s ease;
  font-size: 5rem;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const HomePageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .patagonia {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .HomePage {
    margin: 0 auto;
    width: 65vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .panda {
      display: flex;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 0;
    }

    h2 {
      color: ghostwhite;
      margin: 0 0 0 0;
      font-size: 7rem;

      & > .home-name {
        color: ghostwhite;
      }
    }

    h3 {
      color: ghostwhite;
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
      color: ghostwhite;
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
      border-bottom: 5px solid ghostwhite;
      padding: 2rem 0 0.5rem 0;

      & > hr {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .HomePage {
      margin: 0px auto;
      width: 65vw;
      padding: 3rem 0px 0px 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        color: ghostwhite;
        margin: 0 0 0 0;
        font-size: 4rem;

        & > .home-name {
          color: ghostwhite;
        }
      }

      h3 {
        color: ghostwhite;
        margin: 0 0 1rem 0;
        font-size: 1rem;
      }

      h5 {
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
        width: 100%;
      }

      p {
        color: ghostwhite;
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
              background: white;
              border: 2px solid rgb(50, 50, 50);
              transition: ease-in-out 500ms;
              cursor: pointer;
              color: rgb(50, 50, 50);
              font-weight: bold;

              &:hover {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2rem;
                height: 2rem;
                width: 13rem;
                background: rgb(50, 50, 50);
                border: 5px solid rgb(50, 50, 50);
                transition: ease-in-out 500ms;
                cursor: pointer;
                color: ghostwhite;
                fill: ghostwhite;

                & > svg {
                  margin-bottom: 0.2rem;
                  margin-left: 0.5rem;
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
