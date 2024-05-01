import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }
    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* Works on Firefox */
    * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.GRAY_300} ${({ theme }) => theme.COLORS.GRAY_100};
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 12px;
    }

    *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
`

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`