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
      justify-content: space-between;
      width: 100%;
      margin: 1rem 0;

      & > .reset-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 10rem;
        background: rgb(1, 200, 200, 0.5);
        border: 2px solid rgb(1, 200, 200, 0.5);
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: rgb(1, 200, 200);

        &:hover {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 10rem;
          background: rgb(1, 200, 200, 0.5);
          border: 5px solid rgb(1, 200, 200);
          transition: ease-in-out 300ms;
          cursor: pointer;
          color: lightgrey;
          fill: lightgrey;
        }
      }

      & > .flip-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 10rem;
        background: rgb(1, 200, 200, 0.5);
        border: 2px solid rgb(1, 200, 200, 0.5);
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: rgb(1, 200, 200);

        &:hover {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 10rem;
          background: rgb(1, 200, 200, 0.5);
          border: 5px solid rgb(1, 200, 200);
          transition: ease-in-out 300ms;
          cursor: pointer;
          color: lightgrey;
          fill: lightgrey;
        }
      }
    }

    & > .tech-box {
      height: 20rem;
      border: 5px solid rgb(1, 200, 200) !important;
      border-radius: 10px;
      position: relative !important;
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      align-items: center;
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
        background-color: rgb(1, 200, 200, 0.5) !important;
        text-align: center;
        text-decoration: none;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 10px;
        border: 5px solid rgb(1, 200, 200) !important;
        position: relative !important;
      }
    }

    h1 {
      color: rgb(1, 200, 200);
      margin: 4rem 0 0 0;
      border-bottom: 5px solid rgb(1, 200, 200);
      padding-bottom: 0.5rem;
      text-shadow: 0px 0px 10px;
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
      background-color: rgb(1, 200, 200, 0.2);
      color: rgb(1, 200, 200);
      fill: rgb(1, 200, 200);
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
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 4rem;

      & > .tech-box {
        border: 5px solid rgb(1, 200, 200) !important;
        border-radius: 10px;
        position: relative !important;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        align-items: center;
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
          text-align: center;
          text-decoration: none;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          border-radius: 10px;
          border: 5px solid rgb(1, 200, 200) !important;
          position: relative !important;
        }
      }

      p {
        color: lightgrey;
        margin: 1rem auto;
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
        border-radius: 10px;
        position: absolute;
        animation: 1s ease-in-out openfrommiddle;
      }

      [data-aos] {
        transition-duration: 2s;
      }
    }
  }

  .TechnologiesPage-rebel {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    img {
      max-width: 100% !important;
    }

    & > .drag-options {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 1rem 0;

      & > .reset-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 10rem;
        background: rgb(200, 1, 1, 0.5);
        border: 2px solid rgb(200, 1, 1, 0.5);
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: rgb(299, 1, 1);

        &:hover {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 10rem;
          background: rgb(200, 1, 1, 0.5);
          border: 5px solid rgb(200, 1, 1);
          transition: ease-in-out 300ms;
          cursor: pointer;
          color: lightgrey;
          fill: lightgrey;
        }
      }

      & > .flip-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        height: 2rem;
        width: 10rem;
        background: rgb(200, 1, 1, 0.5);
        border: 2px solid rgb(200, 1, 1, 0.5);
        transition: ease-in-out 300ms;
        cursor: pointer;
        color: rgb(299, 1, 1);

        &:hover {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2rem;
          height: 2rem;
          width: 10rem;
          background: rgb(200, 1, 1, 0.5);
          border: 5px solid rgb(200, 1, 1);
          transition: ease-in-out 300ms;
          cursor: pointer;
          color: lightgrey;
          fill: lightgrey;
        }
      }
    }

    & > .tech-box {
      height: 20rem;
      border: 5px solid rgb(200, 1, 1) !important;
      border-radius: 10px;
      position: relative !important;
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      align-items: center;
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
        background-color: rgb(200, 1, 1, 0.5) !important;
        text-align: center;
        text-decoration: none;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 10px;
        border: 5px solid rgb(200, 1, 1) !important;
        position: relative !important;
      }
    }

    h1 {
      color: rgb(200, 1, 1);
      margin: 3rem 0 0 0;
      border-bottom: 5px solid rgb(200, 1, 1);
      padding-bottom: 0.5rem;
      text-shadow: 0px 0px 10px;
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
      background-color: rgb(200, 1, 1, 0.2);
      color: rgb(200, 1, 1);
      fill: rgb(200, 1, 1);
      font-size: 9px;
      border-radius: 10px;
      animation: 1s ease-in-out openfrommiddle;
    }

    [data-aos] {
      transition-duration: 2s;
    }
  }

  @media only screen and (max-width: 768px) {
    .TechnologiesPage-rebel {
      margin: 0 auto;
      width: 65vw;
      height: 84vh;
      padding: 0 0 0 4rem;

      & > .tech-box {
        border: 5px solid rgb(200, 1, 1) !important;
        border-radius: 10px;
        position: relative !important;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        align-items: center;
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
          text-align: center;
          text-decoration: none;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          border-radius: 10px;
          border: 5px solid rgb(200, 1, 1) !important;
          position: relative !important;
        }
      }

      p {
        color: lightgrey;
        margin: 1rem auto;
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
        border-radius: 10px;
        position: absolute;
        animation: 1s ease-in-out openfrommiddle;
      }

      [data-aos] {
        transition-duration: 2s;
      }
    }
  }
`;

export default TechnologiesPageWrap;
