import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainpage';
import personalDetails from './personalDetails';
import educationalDetails from './educationalDetails';
import experience from './experience';
import "./style.scss";

const Main = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/personalDetails" component={personalDetails} />
        <Route exact path="/educationalDetails" component={educationalDetails} />
        <Route exact path="/experience" component={experience} />
    </Switch>
)

export default Main;    