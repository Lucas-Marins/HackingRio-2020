import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';

import HomeStudent from './Pages/HomeStudent';
import GroupStudent from './Pages/GroupStudent';
import ClassesStudent from './Pages/ClassesStudent';

import HomeTeacher from './Pages/HomeTeacher';
import GroupTeacher from './Pages/GroupTeacher';
import ClassesTeacher from './Pages/ClassesTeacher';
import CreateClass from './Pages/CreateClass';

import GlobalStyle from './Styles/GlobalStyles';
import AddClass from './Pages/AddClass';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact="/" component={Login} path="/" />

                <Route component={HomeStudent} path="/student" />
                <Route component={ClassesStudent} path="/student-classes" />
                <Route component={GroupStudent} path="/student-group" />

                <Route component={HomeTeacher} path="/teacher" />
                <Route component={ClassesTeacher} path="/teacher-classes" />
                <Route component={GroupTeacher} path="/teacher-group" />
                <Route component={CreateClass} path="/create-class" />
                <Route component={AddClass} path="/addClass" />

            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    )
};

export default Router;