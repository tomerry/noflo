import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './page/Home';
import Bounty from './page/Bounty';

import Header from './component/page/Header';
import HeaderFixed from './component/page/HeaderFixed';
import Footer from './component/page/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <HeaderFixed/>
                    <Switch>
                        <Route path="/bounty" component={Bounty}/>
                        <Route component={Home}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;