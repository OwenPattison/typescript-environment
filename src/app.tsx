import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Home } from "./pages/home";
import { Header } from "./components/header";
import { AnotherPage } from "./pages/anotherPage";

const App: React.FC = () => {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/another-page" component={AnotherPage} />
            </Switch>
        </Router>
    );
};

export {
    App
};
