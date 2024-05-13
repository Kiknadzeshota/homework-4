import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    body{
        background-color: ${props => props.sun === true ? '#FAFAFA' : '#171823'} 
    }
`;
