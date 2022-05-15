import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    margin: 5em auto;
    width: 20%;

    .indexedStep {
      border: 1px solid #d3d3d3;
      width: 40px;
      height: 40px;
      font-size: 12px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .indexedStep.accomplished {
      background-color: #745ce4;
      color: #fff;
    }

    @media screen and (max-width: 427px) {
      width: 60%;
    }

    @media screen and (max-width: 770px) {
      width: 55%;
    }
`;