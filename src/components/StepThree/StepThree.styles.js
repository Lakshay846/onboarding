import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;

    .individual {
        border: 1px solid #d3d3d3;
        border-radius: 7px;
        grid-area: leftDiv;
        padding: 0.8em;
    }

    .team {
        border: 1px solid #d3d3d3;
        border-radius: 7px;
        grid-area: rightDiv;
        padding: 0.8em;
    }

    .option {
        display: flex;
        font-size: 14px;
        font-weight: 600;
        margin-top: 1em;
    }

    .submit {
        grid-area: submitBtn;
    }

    .desc {
        color: #808080;
        display: block;
        font-size: 13px;
        text-align: left;
        width: 100%;
    }

    .selected {
        border: 1.5px solid #745ce4;
    }

`;

export const Content = styled.div`
    display: grid;
    grid-template-areas:
            'leftDiv rightDiv'
            'submitBtn submitBtn';
    column-gap: 2em;
    row-gap: 1em;
    margin: 2em auto;
    justify-content: center;

    @media screen and (max-width: 600px) {
        grid-template-areas:
            'leftDiv rightDiv'
            'submitBtn submitBtn';
        grid-template-columns: 8em 8em;
        column-gap: 0.5em;
        row-gap: 1em;
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
            grid-template-columns: 8em 8em;
            width: 65%;
    }

    @media only screen and (min-width: 1200px) {
            grid-template-columns: 32% 32%;
            width: 33%;
    }
`;

export const Icon = styled.img`
    display: flex;
    width: 25px;
`;

