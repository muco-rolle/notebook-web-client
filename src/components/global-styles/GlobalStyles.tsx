import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /**
    *  ANTDESIG CUSTOM STYLES
    *
    * 1) FORM RELATED STYLES
    */
    .input-affix-wrapper-focused {
       box-shadow: none !important;
       border: 3px solid black !important;
   }

   .ant-input-affix-wrapper:focus, .input-affix-wrapper-focused {
        box-shadow: none !important;
       border: 3px solid black !important;

    }


    .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
        border-color: #486acf;
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: none !important;
    }

    body::-webkit-scrollbar, aside::-webkit-scrollbar {
        width: 12px;                  
    }

    body::-webkit-scrollbar-track, aside::-webkit-scrollbar-track {
         background: transparent;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb, aside::-webkit-scrollbar-thumb {
        background-color: #CCCCCC;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;
