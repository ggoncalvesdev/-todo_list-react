import styled, { css } from "styled-components";

export const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;

export const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    //=> Quebra linha
    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    //<==
    ${(props) =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;

export const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2d6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

export const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;
