import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App/Components/App'
import About from './App/Components/About'
import SubmitHash from './App/Components/SubmitHash'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/submithash' component={SubmitHash} />
        </div>
    </BrowserRouter>,

    document.getElementById('root'));

registerServiceWorker();
