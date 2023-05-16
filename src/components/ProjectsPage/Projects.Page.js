import styled from "styled-components";

export const ProjectsPageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .ProjectsPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    h1 {
      color: rgb(1, 200, 200);
      margin: 3rem 0 0 0;
      /* font-size: 4rem; */
    }

    h2 {
      color: rgb(1, 200, 200);
      font-weight: 900;
      margin: 0;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: lightgrey;
    }

    p {
      color: lightgrey;
      margin: 1rem auto;
      font-size: 1.2rem;
    }

    .project-laptop {
      position: relative;
      width: 100%;
      margin-top: 1rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;

      & > hr {
        width: 100%;
      }
    }

    & > .projects-flex {
      display: flex;
      margin: 3rem 0;

      & > .project-link {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > .project {
        display: flex;
        flex-direction: column;
        width: 90vw;
        justify-content: center;
        align-items: center;

        & > .tech-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          & > .tech-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8rem;
            margin: 0.5rem;
            padding: 0.5rem;
            border: 1px solid lightgrey;
            border-radius: 5px;
            background-color: lightgrey;
            color: black;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ProjectsPage {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 5rem;

      /* h1 {
        margin-bottom: 0.2rem;
        font-size: 1.7rem;
        margin-top: 1rem;
      } */

      h2 {
        color: rgb(1, 200, 200);
        font-weight: 900;
        margin: 0;
      }

      h3 {
        margin: 0 0 1rem 0;
        color: lightgrey;
      }

      p {
        color: lightgrey;
        margin: 1rem auto;
      }

      .project-laptop {
        position: relative;
        width: 100%;
      }

      & > .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;

        & > hr {
          width: 100%;
        }
      }

      & > .projects-flex {
        display: flex;
        flex-direction: column;
        margin: 3rem 0;

        & > .project-link {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & > .project {
          display: flex;
          flex-direction: column;
          width: auto;
          /* padding: 0; */
          justify-content: start;
          align-items: center;

          & > .tech-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            & > .tech-name {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 8rem;
              margin: 0.5rem;
              padding: 0.5rem;
              border: 1px solid lightgrey;
              border-radius: 5px;
              background-color: lightgrey;
              color: black;
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPageWrap;
