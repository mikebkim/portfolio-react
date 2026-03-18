import styled from "styled-components";

export const NameHead = styled.h1`
  color: ${({ color }) => color};
  margin: 0;
  font-size: 5rem;
  transition: color 0.2s ease;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HomePageWrap = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .patagonia {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .HomePage {
    margin: 0 auto;
    width: 60vw;
    min-height: 84vh;
    height: auto;

    .panda {
      display: flex;
      margin: 0 auto;
    }

    h1 {
      margin-bottom: 0;
    }

    h2 {
      margin: 0;
      color: ghostwhite;
      font-size: 7rem;
    }

    h3 {
      margin: 0;
      color: ghostwhite;
      font-size: 2rem;
    }

    h5 {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      margin: 0;
    }

    p {
      margin: 0.5rem 0 0;
      color: ghostwhite;
      font-size: 1.2rem;
    }

    & > .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100%;
      padding: 2rem 0 0.5rem;
      border-bottom: 5px solid ghostwhite;

      & > hr {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .HomePage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 65vw;
      padding-left: 4rem;

      h2 {
        font-size: 4rem;
      }

      h3 {
        margin: 0 0 1rem;
        font-size: 1rem;
      }

      p {
        width: 100%;
        margin: 1rem 0;
      }

      h5 {
        width: 100%;
      }

      & > hr {
        width: 100%;
        height: 2.5px;
      }

      & > .header {
        justify-content: space-between;
        align-items: baseline;
      }

      & > .home {
        margin-left: 1rem;
      }
    }
  }
`;

export default HomePageWrap;
