import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;

    .steptwo {
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
        padding-left: 9.2em;
    }

    @media screen and (max-width: 600px) {
        .steptwo {
            width: 80%;
        }
    }

    @media only screen and (min-width: 768px) {
        .steptwo {
            width: 47%;
        }
    }

    @media only screen and (min-width: 992px) {
        .steptwo {
            width: 24%;
        }
    }

    @media screen and (min-width: 1024px) {
        .steptwo {
            width: 35%;
        }
    }

    @media screen and (min-width: 1200px) {
        .steptwo {
            width: 23%;
        }
    }

`;