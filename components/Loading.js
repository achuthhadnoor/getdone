import React from 'react'
import styled from 'styled-components'

export default function Loading() {
    return (
        <LoadingWrapper>
            Loading....
        </LoadingWrapper>
    )
}

const LoadingWrapper = styled.div`
    position:absolute;
    height:100vh;
    width:100vw; 
    align-items:center;
    left:0;
    top:0;
    color:#eee;
    
`;