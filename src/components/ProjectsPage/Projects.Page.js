import styled from "styled-components";

export const ProjectsPageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .ProjectsPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    hr {
      max-width: 80rem;
      margin: 0 auto;
      border-radius: 50px;
      height: 0.1rem;
    }

    h1 {
      color: rgb(1, 200, 200);
      margin: 3rem 0 0 0;
      border-bottom: 5px solid rgb(1, 200, 200);
      padding-bottom: 0.5rem;
      text-shadow: 0px 0px 10px;
    }

    h2 {
      color: rgb(1, 200, 200);
      font-weight: 700;
      font-size: 36px;
      margin: 0;
      text-shadow: 0px 0px 10px;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: lightgrey;
      border-bottom: 3px solid lightgrey;
    }

    h6 {
      margin: 0.5rem;
      color: rgb(200, 1, 1);
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
    }

    & > .projects-flex {
      display: flex;
      margin: 2rem 0;

      &:last-child {
        border: none;
      }

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
          width: 20rem;

          & > .tech-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 7rem;
            font-size: 15px;
            margin: 0.5rem;
            padding: 0.5rem;
            border-radius: 50px;
            background-color: rgb(1, 200, 200, 0.5);
            color: rgb(1, 200, 200);
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
      padding: 0 0 0 4rem;

      h2 {
        color: rgb(1, 200, 200);
        font-weight: 700;
        font-size: 36px;
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
        margin: 1rem 0;

        & > .project-link {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & > .project {
          display: flex;
          flex-direction: column;
          width: auto;
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
              width: 7rem;
              font-size: 15px;
              margin: 0.5rem;
              padding: 0.5rem;
              border-radius: 50px;
              background-color: rgb(1, 200, 200, 0.5);
              color: rgb(1, 200, 200);
            }
          }
        }
      }
    }
  }

  .ProjectsPage-rebel {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    hr {
      max-width: 80rem;
      margin: 0 auto;
      border-radius: 50px;
      height: 0.1rem;
    }

    h1 {
      color: rgb(200, 1, 1);
      margin: 3rem 0 0 0;
      border-bottom: 5px solid rgb(200, 1, 1);
      padding-bottom: 0.5rem;
      text-shadow: 0px 0px 10px;
    }

    h2 {
      color: rgb(200, 1, 1);
      font-weight: 700;
      font-size: 36px;
      margin: 0;
      text-shadow: 0px 0px 10px;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: lightgrey;
      border-bottom: 3px solid lightgrey;
    }

    h6 {
      margin: 0.5rem;
      color: rgb(200, 1, 1);
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
    }

    & > .projects-flex {
      display: flex;
      margin: 2rem 0;

      &:last-child {
        border: none;
      }

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
          width: 20rem;

          & > .tech-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 7rem;
            font-size: 15px;
            margin: 0.5rem;
            padding: 0.5rem;
            border-radius: 50px;
            background-color: rgb(200, 1, 1, 0.5);
            color: rgb(299, 1, 1);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ProjectsPage-rebel {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 4rem;

      h2 {
        color: rgb(200, 1, 1);
        font-weight: 700;
        font-size: 36px;
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
        margin: 1rem 0;

        & > .project-link {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & > .project {
          display: flex;
          flex-direction: column;
          width: auto;
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
              width: 7rem;
              font-size: 15px;
              margin: 0.5rem;
              padding: 0.5rem;
              border-radius: 50px;
              background-color: rgb(200, 1, 1, 0.5);
              color: rgb(299, 1, 1);
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPageWrap;
