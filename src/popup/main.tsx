import React from 'react';
import '@/styles/popup.scss'
import { createRoot } from "react-dom/client";

function Main() {
    return (
        <div className="w-52 h-52">
            <div>Hello, Pop-up World!</div>
        </div>
    )
}

const container = document.getElementById("popup");

if (container) {
    createRoot(container).render(<Main />);
}