import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;

    .steptwo {
        width: 25%;
        margin: 2em auto;
    }

    label {
        display: flex;
        font-size: 13px;
        font-weight: 500;
        margin-bottom: 0.2em;
    }

    #grey {
        color: #c0c0c0;
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

    #eden {
        background: #ffffff;
        border: 1px solid #d3d3d3;
        border-radius: 5px 0 0 5px;
        color: #c0c0c0;
        display: inline-block;
        position: absolute;
        font-size: 12px;
        padding: 11.5px;
    }

    #url-input {
        border-left: none;
        border-radius: 0 5px 5px 0;
    }

    @media screen and (max-width: 427px) {
        .steptwo {
            margin: 1em auto;
            width: 80%;
        }
    }

`;