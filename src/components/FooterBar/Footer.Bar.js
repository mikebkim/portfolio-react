import styled from "styled-components";

export const FooterWrap = styled.div`
  .Footer {
    background-color: rgb(40, 40, 40);
    top: 0;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 2rem;

    & > .social-links {
      display: flex;
      justify-content: center;
      align-items: center;

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
  }
`;

export default FooterWrap;
