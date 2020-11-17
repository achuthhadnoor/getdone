import React from 'react'
import styled from 'styled-components';
import Icon from 'react-icons-kit';

export default function IconTooltip({icon,...props}) {
    return (
        <IconWrapper {...props}>
            <IconView icon={icon}/>
        </IconWrapper>
    )
}

const IconView = styled(Icon)`
    padding:10px;
    font-size:1em;
`;

const IconWrapper = styled.span`
    
`;