import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;

    .stepone {
        margin: 2em auto;
        width: 25%;
    }

    label {
        display: flex;
        font-size: 13px;
        font-weight: 500;
        margin-bottom: 0.2em;
    }

    input {
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        margin-bottom: 1.5em;
        outline: none;
        padding-left: 0.7em;
        width: 100%;
        height: 3em;
    }

    .submit {
        background-color: #745ce4;
        border: 1px solid #745ce4;
        border-radius: 5px;
        color: #ffffff;
        display: block;
        height: 3em;
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        .stepone {
            width: 80%;
        }
    }

    @media only screen and (min-width: 768px) {
        .stepone {
            width: 47%;
        }
    }

    @media only screen and (min-width: 992px) {
        .stepone {
            width: 24%;
        }
    }

    @media screen and (min-width: 1024px) {
        .stepone {
            width: 35%;
        }
    }

    @media screen and (min-width: 1200px) {
        .stepone {
            width: 25%;
        }
    }

`;