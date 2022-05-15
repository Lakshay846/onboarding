import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;

    .submit {
        margin-top: 2em;

        @media screen and (max-width: 600px) {
            width: 85%;
        }

        @media only screen and (min-width: 768px) {
            width: 55%;
        }

        @media only screen and (min-width: 1024px) {
            width: 40%;
        }

        @media only screen and (min-width: 1200px) {
            width: 23%;
        }
    }

`;

export const ConfirmIcon = styled.img`
    margin-bottom: 1em;
    width: 55px;
`;