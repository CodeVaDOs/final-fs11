import React, {useCallback} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "~/pages/Home";
import ResponsiveRoutesPage from "~/pages/ResponsiveRoutes";
import PreventedRoutePage from "~/pages/PreventedRoutePage";
import StepperPage from "~/pages/Stepper";
import TwoPopupsPage from "~/pages/TwoPopups";

import AppBar from "../AppBar";
import CustomPrompt from "../CustomPrompt";

const Router = () => {
    const userConfirmation = useCallback((message, callback) => {
        const node = document.getElementById("custom-prompt");

        const cleanUp = (answer) => {
            ReactDOM.unmountComponentAtNode(node);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            callback(answer);
        };

        ReactDOM.render(<CustomPrompt message={message} cleanUp={cleanUp}/>, node);
    }, []);

    return (
        <BrowserRouter getUserConfirmation={userConfirmation}>
            <AppBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/search-home">
                    <ResponsiveRoutesPage/>
                </Route>
                <Route path="/restore-route">
                    <PreventedRoutePage/>
                </Route>
                <Route path="/stepper">
                    <StepperPage/>
                </Route>
                <Route path="/two-popups">
                    <TwoPopupsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
