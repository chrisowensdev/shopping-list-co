import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import "./header.css";

let socket;

class Header extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: "http://10.0.0.167:3001/"
        };

        
    }

    componentDidMount() {
        socket = socketIOClient(this.state.endpoint);
    }

    render() {
        return (
            <header>
                <nav>
                    <ul className="NavClass">
                        <li>
                        <NavLink exact to="/">
                            List
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export { Header, socket };