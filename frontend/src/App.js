import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import './components/NavigationBar';
import Navigation from "./components/NavigationBar";
import Post from "./components/Post";
import Searchbar from "./components/searchbar";
import CreatePost from "./components/CreatePost";
import { Route } from 'react-router-dom'
import MainPage from "./components/MainPage";

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
//configure react-router here
    render() {
        return (
            <MainPage/>
        )
    }
}

export default App;