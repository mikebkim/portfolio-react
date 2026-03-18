import styled from "styled-components";

export const TechnologiesPageWrap = styled.div`
  @keyframes openfrommiddle {
    0%,
    50% {
      color: transparent;
      fill: transparent;
    }

    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  [data-aos] {
    transition-duration: 1s !important;
  }

  .technologies-title {
    font-size: clamp(2rem, 5vw, 5rem);
  }

  .greenland {
    position: fixed;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .TechnologiesPage {
    margin: 0 auto;
    width: 60vw;
    min-height: 84vh;
    display: flex;
    flex-direction: column;

    img {
      max-width: 100% !important;
    }

    h1 {
      color: ghostwhite;
      margin: 4rem 0 0 0;
      border-bottom: 5px solid ghostwhite;
      padding-bottom: 0.5rem;
    }

    h6 {
      margin: 0.5rem;
      color: rgb(200, 1, 1);
    }

    p {
      color: ghostwhite;
      margin: 1rem auto;
      font-size: 1.2rem;
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

    & > .drag-options {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin: 0 auto;

      & > .reset-button,
      & > .flip-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 10rem;
        background: ghostwhite;
        border: 2px solid ghostwhite;
        transition: ease-in-out 500ms;
        cursor: pointer;
        color: rgb(100, 100, 100);
        margin: 1rem;
        font-weight: bold;

        &:hover {
          background-color: rgb(100, 100, 100) !important;
          border: 5px solid ghostwhite;
          color: ghostwhite;
          fill: ghostwhite;
        }
      }
    }

    & > .tech-box {
      flex: 1;
      min-height: 0;
      width: 100%;
      border: 5px solid ghostwhite !important;
      border-radius: 10px;
      position: relative !important;
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: center !important;
      padding: 1rem 0;

      & > .box {
        width: 40px;
        height: 55px;
        perspective: 1000px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ghostwhite !important;
        text-align: center;
        text-decoration: none;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 10px;
        border: 5px solid ghostwhite !important;
        position: relative !important;
      }
    }

    & > .technologies-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
    }

    .flip-card {
      width: 100px;
      height: 100px;
      perspective: 1000px;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flip-card-inner {
      position: relative;
      height: auto;
      max-width: 100% !important;
      text-align: center;
    }

    .flip-card-inner-max {
      position: relative;
      max-width: 27px !important;
      height: auto;
      text-align: center;
    }

    .flip-card-back {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: transform 0.6s ease 0s;
      transform-style: preserve-3d;
      background-color: rgb(100, 100, 100) !important;
      color: ghostwhite;
      fill: ghostwhite;
      font-size: 9px;
      border-radius: 10px;
      animation: 1s ease-in-out openfrommiddle;
    }

    [data-aos] {
      transition-duration: 2s;
    }
  }

  @media only screen and (max-width: 768px) {
    .TechnologiesPage {
      width: 65vw;
      min-height: 84vh;
      padding: 0 0 0 4rem;

      p {
        margin: 1rem auto;
      }

      & > .technologies-list {
        max-width: 90vw;
      }

      & > .tech-box {
        flex: 1;
        min-height: 0;
      }

      .flip-card-back {
        border-radius: 10px;
        position: absolute;
        animation: 1s ease-in-out openfrommiddle;
      }
    }
  }
`;

export default TechnologiesPageWrap;
