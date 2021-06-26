import React from "react";
import {Executors} from "./features/Executors/Executors";

import {Route, Switch} from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import {Executor} from "./features/Executor/Executor";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Executors}/>
            <Route
                exact
                path='/freelancer'
                component={Executor}
            />
        </Switch>
    </div>
  );
}

export default App;
