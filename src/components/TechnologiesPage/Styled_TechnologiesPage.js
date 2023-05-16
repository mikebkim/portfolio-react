import styled from "styled-components";

const Styled_TechnologiesPage = styled.div`
  [data-aos] {
    transition-duration: 1s !important;
  }

  .TechnologiesPage {
    margin: 0 auto;
    width: 60vw;
    height: 84vh;

    h1 {
      color: rgb(1, 200, 200);
      margin: 5rem 0 0 0;
      font-size: 4rem;
    }

    p {
      color: lightgrey;
      margin-left: 1rem;
    }

    img {
      height: auto;
      max-width: 50%;
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
      background-color: lightgray;
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
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
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-back {
      background-color: rgb(1, 200, 200);
      color: lightgrey;
      fill: lightgrey;
      transform: rotateY(180deg);
      font-size: 11px;
      border-radius: 10px;
    }

    [data-aos] {
      transition-duration: 2s;
    }
  }

  @media only screen and (max-width: 768px) {
    .TechnologiesPage {
      margin: 0 0 0 10rem;
      width: 65vw;
      height: 84vh;

      h1 {
        margin-bottom: 0.2rem;
        font-size: 2rem;
      }

      p {
        color: lightgrey;
        margin-left: 1rem;
      }

      img {
        height: auto;
        max-width: 50%;
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
        background-color: lightgray;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }

      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
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
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .flip-card-back {
        background-color: rgb(1, 200, 200);
        color: lightgrey;
        transform: rotateY(180deg);
        font-size: 11px;
        border-radius: 10px;
      }

      [data-aos] {
        transition-duration: 2s;
      }
    }
  }
`;

export default Styled_TechnologiesPage;
