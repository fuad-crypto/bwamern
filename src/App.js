import React from "react";
import { Switch , Route } from 'react-router-dom';

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={LandingPage}></Route>    
            </Switch>            
        </div>
    );
}

export default App;
