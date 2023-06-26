import React from 'react';
import './App.css';
import '../Components/SideBar/sideBar.css'
import {SideBar} from "../Components/SideBar/sideBar";
import {routers} from "../routes/constants";
import {Header} from "../Components/Header";

function App() {
    return (
            <div className="App">
                <Header/>
                <SideBar listBtn={routers}/>
            </div>
    );
}

export default App;
