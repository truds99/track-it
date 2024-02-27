import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from "../contexts/UserContext"
import LoginPage from './LoginPage'
import { createGlobalStyle } from 'styled-components'
import { useState } from "react";


export default function App() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{ formData, setFormData }}>
            <Routes>
                <Route path='/' element={<LoginPage />} />
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    body {
        line-height: 1;
        max-width: 100%;
        font-family: "Lexend Deca", sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    ::placeholder{
        font-family: "Lexend Deca", sans-serif;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`
