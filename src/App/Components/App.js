import React, { Component } from 'react';
import hashDefuselogo from '../Images/hashDefuse_logo.svg';
import '../Stylesheets/App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">hashDefuse</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavDropdown eventKey={2} title="Actions" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/submithash">Submit hash</MenuItem>
                            <MenuItem eventKey={2.2}>Get Status</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}>More</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/about">About</NavItem>
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <img src={hashDefuselogo} className="App-logo" alt="app_logo" />
                            </div>
                            <div className="col-xs-6">

                            </div>
                        </div>
                    </div>
                </header>
                <p className="App-intro">
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default App;
