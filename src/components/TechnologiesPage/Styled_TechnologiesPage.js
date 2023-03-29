import styled from "styled-components"

const Styled_TechnologiesPage = styled.div`
.TechnologiesPage {
    max-height: 80vh;
    margin-top: 8vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;

    img {
        height: auto;
        max-width: 50%;
    }

    .technologies-list {
        height: 90vh;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-height: 80vh;
        margin-top: 10vh;
        align-items: center;
        margin: 0 auto;
    }

    .flip-card {
        background-color: rgb(250 250 250);
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
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        border-radius: 5px;
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
        border-radius: 5px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        font-size: 6vh;
    }

    .flip-card-back {
        background-color: black;
        color: white;
        transform: rotateY(180deg);
    }
}
`

export default Styled_TechnologiesPage
