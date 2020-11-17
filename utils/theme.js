import React, { useState } from 'react'
import  { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
const GlobalStyle = createGlobalStyle`
    ${reset}
        * {
            box-sizing: border-box;
            touch-action: pan-x pan-y;
        }
        html, body {
            width: 100%;
            margin: 0px;
            padding: 0px;
            position: fixed;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
            font-family:sans-serif;
        }
        ::-webkit-scrollbar {
            width: 14px;
            height: 14px
        }
        ::-webkit-scrollbar-track {
            background-color: transparent
        }
        ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
            border: 4px solid transparent;
            background-clip: padding-box;
            border-radius: 8px
        }
        ::-webkit-scrollbar-thumb {
            background-color:#777;
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
        }

  body{
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    user-select: none;
    text-size-adjust: none;
    cursor: default;
}
#__next,body{ 
    height: 100%; 
    background:#1d1e20;
    background:linear-gradient(rgb(48 54 49) 0%,rgb(31 35 31) 50%);
    background:#1A1B1A;
    transition: opacity 250ms ease 0s;
} 
@keyframes comin {
    
0% {
    opacity: 0;
    transform: translate(0px, -10px);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
} 
100% {
    opacity: 1;
    transform: none;
}
}

button{
    border:none;
    align-items:center;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    transition:box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
}
button:hover{
    opacity:.8;
}
button:active{
    transform: scale(0.96) !important;
}

`
// background:rgba(0,0,0,.4);
// background-image: url("https://images.unsplash.com/photo-1547185942-2b5661136b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80");

const Apptheme = {
    colors: {
        primary: '#0070f3',
    },
}

const ThemeWrapper = ({ children }) => {

    const [theme, setTheme] = useState(Apptheme);
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}> 
                    {children} 
            </ThemeProvider>
        </>
    )
} 

export default ThemeWrapper;