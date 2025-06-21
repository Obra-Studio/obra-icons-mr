import React from "react"
import { framer } from "framer-plugin"
import { useState, useEffect, useCallback } from "react"
import { createRoot } from 'react-dom/client'
import "./App.css"
// import * as Icons from 'obra-icons-react'
import { IconAddRoundrect } from "obra-icons-react";
framer.showUI({
    position: "top right",
    width: 420,
    height: 600,
})


export function App() {

    return (
        <main className="obra-icons-plugin">
            <p>Hello world...</p>
            <IconAddRoundrect strokeWidth={1} color="blue" size={32}/>
            <p>What is the design expectation of a framer plugin?</p>

        </main>
    )
}
