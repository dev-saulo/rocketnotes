import styled from 'styled-components'

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
        overflow-y: scroll;
        padding: 64px 0;
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

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;  /* Alinha o texto de maneira centralizada */
    }
`