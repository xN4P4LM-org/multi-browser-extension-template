import React from 'react';
import '@/styles/config.scss';
import { createRoot } from "react-dom/client";
import Sections from './sections/sections.tsx';

function Main() {
    return (
        <div className='grid grid-cols-1 justify-center'>
            <div>Hello, Config World!</div>
            <Sections />
        </div>
    )
}

const container = document.getElementById("config");
if (container) {
    createRoot(container).render(<Main />);
}