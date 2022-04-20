import React from "react";
import "./App.css";
import './index.css'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./Containers";
import { NavBar, Brand, CTA } from "./Components";

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;
