import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import FormContainerEdit from "./components/FormContainerEdit";
import FormContainer from "./components/FormContainer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/create" component={FormContainer}/>
                    <Route path="/:id" component={FormContainerEdit}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        )
    }
};
export default App;