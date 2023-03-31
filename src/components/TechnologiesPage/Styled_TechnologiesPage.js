import styled from "styled-components"

const Styled_TechnologiesPage = styled.div`

.TechnologiesPage {
    margin-left: auto;
    margin-right: auto;
    max-width: 90vw;
    margin-top: 3rem;

    h1 {
        margin-bottom: 0.2rem;
    }

    p {
        color: lightgrey;
        margin-left: 1rem;
    }

    img {
        height: auto;
        max-width: 50%;
    }

    .technologies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 10vh;
        align-items: center;
        margin: 0 auto;
        max-width: 55vw;
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
        background-color: rgb(39, 50, 56);
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
        background-color: whitesmoke;
        color: rgb(39, 50, 56);
        fill: rgb(39, 50, 56);
        transform: rotateY(180deg);
        font-size: 11px;
        border-radius: 10px;
    }

    [data-aos] {
        transition-duration: 2s;
    }
}

@media (max-width: 1000px) {
    .TechnologiesPage {
        margin-left: auto;
        margin-right: auto;
        max-width: 90vw;
        margin-top: 3rem;

        h1 {

            margin-bottom: 0.2rem;
        }

        p {
            color: lightgrey;
            margin-left: 1rem;
        }

        img {
            height: auto;
            max-width: 50%;
        }

        .technologies-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-height: 80vh;
            margin-top: 10vh;
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
            background-color: lightslategray;
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
            background-color: black;
            color: white;
            transform: rotateY(180deg);
            font-size: 11px;
            border-radius: 10px;
        }

        [data-aos] {
            transition-duration: 2s;
        }
    }
}
`

export default Styled_TechnologiesPage
