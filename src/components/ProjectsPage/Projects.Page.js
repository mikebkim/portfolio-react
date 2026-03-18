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
      padding-bottom: 0.5rem;
      color: ghostwhite;
      border-bottom: 5px solid ghostwhite;
    }

    h2 {
      margin: 0;
      color: ghostwhite;
      font-size: 36px;
      font-weight: 700;
    }

    h3 {
      margin: 0 0 1rem;
      color: ghostwhite;
      border-bottom: 3px solid ghostwhite;
    }

    p {
      margin: 1rem auto;
      color: ghostwhite;
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
      align-items: center;
      width: 100%;
    }

    & > .projects-flex {
      display: flex;
      padding: 0 0 3rem;

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
        justify-content: center;
        align-items: center;
        width: 90vw;

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
            margin: 0.5rem;
            padding: 0.5rem;
            font-size: 12px;
            font-weight: bold;
            color: ghostwhite;
            background-color: rgb(100, 100, 100);
            border-radius: 50px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ProjectsPage {
      width: 65vw;
      padding-left: 4rem;

      & > .projects-flex {
        flex-direction: column;
        margin: 1rem 0;

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
