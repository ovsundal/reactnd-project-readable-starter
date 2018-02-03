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

    render() {
        return (
            <Container>
                <Col>
                    <Navigation/>
                </Col>
                {/*route to default blog*/}
                <Route exact path="/" render={() => (
                    <Container>
                        <Row>
                            <Col xs="8">
                                <Post/>
                                <Post/>
                            </Col>
                            <Col xs="4">
                                <Searchbar/>
                            </Col>
                        </Row>
                    </Container>
                )}/>
                {/*route to new post*/}
                <Route path="/NewPost" render={() => (
                    <Container>
                        <CreatePost/>
                    </Container>
                )}/>
            </Container>
        )
    }
}

export default App;