import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import ImageSlider from "./Pages/ImageSlider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function App() {
    return (
        <Router>

            <div className="App">

                <Navbar/>
                <Switch>
                    <Route path="/"  exact component={ImageSlider}/>
                    <Route path="/page/about" component={About}/>
                    <Route path="/page/imageSlider" component={ImageSlider}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
