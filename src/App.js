import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza')
});

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact compontent={Users}/>
                    <Route path="/pizza" exact compontent={asyncPizza}/>
                </div>
            </div>
        );
    }
}

export default App;