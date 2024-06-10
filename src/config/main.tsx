import React from 'react';
import './styles/config.scss';
import { createRoot } from "react-dom/client";
import Sections from './components/sections.tsx';

function Main() {
    return (
        <div className='grid'>
            <div className='text-4xl justify-self-center'>Hello, Config World!</div>
            <Sections />
        </div>
    )
}

const container = document.getElementById("config");
if (container) {
    createRoot(container).render(<Main />);
}