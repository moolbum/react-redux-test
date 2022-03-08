import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
	
  *{
        box-sizing: border-box;
    }

    body {
        font-family: "Noto Sans KR", sans-serif;
    }
    
    input {
        border: none;
        background-color: transparent;
        outline: none;
    }

    textarea {
        border: none;
        background-color: transparent;
        outline: none;
    }


    img {
        width: 100%;
    }

    a {
        color:#000;
        text-decoration: none;
    }
	
`;

export default GlobalStyle;
