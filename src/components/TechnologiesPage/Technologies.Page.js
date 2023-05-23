import styled from "styled-components";

export const TechnologiesPageWrap = styled.div`
  @keyframes openfrommiddle {
    0% {
      color: transparent;
      fill: transparent;
    }

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

  .TechnologiesPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    img {
      max-width: 100% !important;
    }

    & > .drag-options {
      display: flex;
      flex-direction: column;

      & > .reset-button {
        font-family: "Gill Sans";
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 13rem;
        background: transparent;
        border: 2px solid lightgrey;
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: lightgrey;
      }

      & > .flip-button {
        font-family: "Gill Sans";
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 13rem;
        background: transparent;
        border: 2px solid lightgrey;
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: lightgrey;
      }
    }

    & > .tech-box {
      height: 20rem;
      border: 1px solid black !important;
      position: relative !important;
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      justify-content: center !important;

      & > .box {
        width: 50px;
        height: 65px;
        perspective: 1000px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgrey !important;
        text-align: center;
        text-decoration: none;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 10px;
        box-shadow: 0 0 3px 3px rgb(1, 200, 200);
        border: none !important;
        position: relative !important;
      }
    }

    h1 {
      color: rgb(1, 200, 200);
      margin: 3rem 0 0 0;
      border-bottom: 5px solid rgb(1, 200, 200);
      padding-bottom: 0.5rem;
    }

    p {
      color: lightgrey;
      margin: 1rem auto;
      font-size: 1.2rem;
    }

    img {
      height: auto;
      max-width: 50%;
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

    & > .technologies-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10vh;
      align-items: center;
      margin: 0 auto;
      max-width: 65vw;
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
      text-align: center;
      transition: transform 0.6s ease 0s;
      transform-style: preserve-3d;
      animation: 1s ease-in-out openfrommiddle;
    }

    .flip-card-inner-max {
      position: relative;
      max-width: 35px !important;
      height: auto;
      text-align: center;
      transition: transform 0.6s ease 0s;
      transform-style: preserve-3d;
      animation: 1s ease-in-out openfrommiddle;
    }

    .flip-card-front,
    .flip-card-back {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: transform 0.6s ease 0s;
      transform-style: preserve-3d;
      animation: 1s ease-in-out openfrommiddle;
    }

    .flip-card-back {
      background-color: rgb(1, 200, 200);
      color: lightgrey;
      fill: lightgrey;
      font-size: 10px;
      border-radius: 10px;
      z-index: 1;
    }

    [data-aos] {
      transition-duration: 2s;
    }
  }

  @media only screen and (max-width: 768px) {
    .TechnologiesPage {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 5rem;

      & > .tech-box {
        height: 84vh;
        border: 1px solid black !important;
        position: relative !important;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center !important;

        & > .box {
          width: 50px;
          height: 65px;
          perspective: 1000px;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: lightgrey !important;
          text-align: center;
          text-decoration: none;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          border-radius: 10px;
          box-shadow: 0 0 3px 3px rgb(1, 200, 200);
          border: none !important;
        }
      }

      p {
        color: lightgrey;
        margin: 1rem auto;
      }

      img {
        height: auto;
        max-width: 50%;
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

      & > .technologies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: 90vw;
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
        text-align: center;
        transition: transform 0.6s ease 0s;
        transform-style: preserve-3d;
        animation: 1s ease-in-out openfrommiddle;
      }

      .flip-card-inner-max {
        position: relative;
        max-width: 35px !important;
        height: auto;
        text-align: center;
        transition: transform 0.6s ease 0s;
        transform-style: preserve-3d;
        animation: 1s ease-in-out openfrommiddle;
      }

      .flip-card-front,
      .flip-card-back {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        position: absolute;
        animation: 1s ease-in-out openfrommiddle;
      }

      .flip-card-back {
        color: lightgrey;
        fill: lightgrey;
        font-size: 10px;
        border-radius: 10px;
      }

      [data-aos] {
        transition-duration: 2s;
      }
    }
  }
`;

export default TechnologiesPageWrap;
