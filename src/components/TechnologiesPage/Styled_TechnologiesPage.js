import styled from "styled-components"

const Styled_TechnologiesPage = styled.div`
.TechnologiesPage {
    max-height: 80vh;
    margin-top: 8vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;

    .technologies-list {
        margin-left: 10%;
        height: 90vh;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-height: 80vh;
        margin-top: 10vh;
        align-items: center;
    }

    .flip-card {
        background-color: transparent;
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
        transition: transform .6s;
        transform-style: preserve-3d;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
    }

    .flip-card-back, .flip-card-front {
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

    /* .flip-card-back {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    } */
}
`

export default Styled_TechnologiesPage
