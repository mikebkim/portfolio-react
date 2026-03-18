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
      margin: 4rem 0 0;
      color: ghostwhite;
      border-bottom: 8px solid ghostwhite;
    }

    h2 {
      margin: 0;
      color: ghostwhite;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: underline;
    }

    h3 {
      margin: 0;
      color: ghostwhite;
      font-size: 1rem;
      text-decoration: underline;
    }

    .description {
      margin: 1rem auto;
      color: ghostwhite;
      font-size: 1rem;
    }

    .project-description {
      margin: 0;
    }

    .project-laptop {
      border: 2px solid ghostwhite;
      border-radius: 5px;
      width: 100%;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    & > .projects-flex {
      display: flex;
      flex-direction: row;
      padding: 0.5rem 0px 3rem;
      width: fit-content;

      &:last-child {
        border: none;
      }

      & > .project-link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
      }

      & > .project {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding-left: 1rem;

        & > .tech-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 21rem;

          & > .tech-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8rem;
            margin: 0.5rem;
            padding: 0.5rem;
            font-size: 12px;
            font-weight: bold;
            color: ghostwhite;
            background-color: rgb(100, 100, 100);
            border-radius: 50px;
            border: 2px solid ghostwhite;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 840px) {
    .ProjectsPage {
      width: 65vw;
      padding-left: 4rem;

      h2 {
        font-size: 24px;
      }

      .project-laptop {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      & > .projects-flex {
        flex-direction: column;

        & > .project {
          width: auto;
          justify-content: flex-start;

          & > .tech-list {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default ProjectsPageWrap;
