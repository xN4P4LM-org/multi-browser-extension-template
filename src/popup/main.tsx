import React from 'react';
import './styles/popup.scss'
import { createRoot } from "react-dom/client";
import Sections from './components/sections.tsx';

function Main() {
    return (
        <div className="grid">
            <div className='text-2xl justify-self-end'>Hello, Pop-up World!</div>
            <Sections />
        </div>
    )
}

const container = document.getElementById("popup");

if (container) {
    createRoot(container).render(<Main />);
}