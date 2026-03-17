import styled from "styled-components";

export const ProjectsPageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .seoul {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .ProjectsPage {
    margin: 0 auto;
    width: 60vw;
    min-height: 84vh;
    height: auto;

    h1 {
      color: ghostwhite;
      margin: 4rem 0 0 0;
      border-bottom: 5px solid ghostwhite;
      padding-bottom: 0.5rem;
    }

    h2 {
      color: ghostwhite;
      font-weight: 700;
      font-size: 36px;
      margin: 0;
    }

    h3 {
      margin: 0 0 1rem 0;
      color: ghostwhite;
      border-bottom: 3px solid ghostwhite;
    }

    p {
      color: ghostwhite;
      margin: 1rem auto;
      font-size: 1rem;
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
      padding: 0 0 3rem 0;

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
            width: 8rem;
            font-size: 12px;
            margin: 0.5rem;
            padding: 0.5rem;
            border-radius: 50px;
            background-color: rgb(100, 100, 100);
            color: ghostwhite;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ProjectsPage {
      margin: 0 auto;
      width: 65vw;
      min-height: 84vh;
      height: auto;
      padding: 0 0 0 4rem;

      h2 {
        color: ghostwhite;
        font-weight: 700;
        font-size: 36px;
        margin: 0;
      }

      h3 {
        margin: 0 0 1rem 0;
        color: ghostwhite;
      }

      p {
        color: ghostwhite;
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
              width: 8rem;
              font-size: 12px;
              margin: 0.5rem;
              padding: 0.5rem;
              border-radius: 50px;
              background-color: rgb(100, 100, 100);
              color: ghostwhite;
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPageWrap;
