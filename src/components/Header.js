import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return ( <
            div className = "app-header" >
            <
            nav className = "NavbarItems" >
            <
            h1 className = "navbar-header" > Social & Brands < /h1> <
            ul >
            <
            li > < Link to = "/Link" > Link list < /Link></li >
            <
            li > < Link to = "/CreateLinks" > Create new < /Link></li >
            <
            /ul> < /
            nav > <
            /div>
        )
    }
}