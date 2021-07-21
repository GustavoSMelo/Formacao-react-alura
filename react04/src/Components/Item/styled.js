import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column !important;
    span {
        color: ${props => props.theme.text};
    }

    .text {
        font-weight: bold;
        margin-left: 2px;
        margin-right: 2px;
    }
`;
