import styled from "styled-components";

// Text elements to reuse text  
export const Text = styled.span`
    display:inline;
    line-height:1.5rem;
    font-size : ${({ s ,m,l,xl,xxl }) => xxl ?  '1.8em' : xl ? '1.5em' : l ? '1.2' : m ? '.9em': s ?'.7em' : '1em'}
`;
 

export const Checkbox = styled.div`
    height:20px;
    width:20px;
    border:1px solid #fff;
    border-radius:2px;
    background:${({checked})=> checked && '#eee'};

`