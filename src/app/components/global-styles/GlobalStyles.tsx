import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    


    /* REACT SUITE COMPONENTS CUSTOMIZATION */

    /************ BUTTON **********/
    button {
        color: white !important;
        border-radius: 3px !important;
    }
    .rs-btn {
        border-radius: 3px;
        box-shadow: 0  1px 3px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-weight: 600;
        

        :active {
            box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
        }
    }


    /************ FORM RELATED COMPONENTS **********/
    .rs-form-group {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .rs-form-control-wrapper {
        width: 100% !important;
        
    }

    .rs-input {
        background-color: white;
        width: 100% !important;
        border-radius: 3px;
        font-family: inherit;
        color: inherit;
        font-size: 11px;
        font-weight: 600;
        border-width: 2px;
        background-color: transparent;

        
        

        

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            box-shadow: 0 0 0 30px white inset !important;
        }        
    }

    


`;
