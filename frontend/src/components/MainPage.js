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
import './NavigationBar';
import Navigation from "./NavigationBar";
import Post from "./Post";
import Searchbar from "./searchbar";
import CreatePost from "./CreatePost";
import { Route } from 'react-router-dom'
import * as actions from '../actions'
import {connect} from "react-redux";
import {getPosts} from "../actions";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentWillMount() {
       console.log(this.props
            .getPosts());
    }

    componentDidMount() {
        console.log(this.props)
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

//mapStateToProps allows you to specify which data
// from the store you want passed to component
//it's a function that lets connect() know how to map specific
//parts of the stores state into usable props
function mapStateToProps({posts}) {
    return {
        posts
    }
}

//bind dispatch to action creators before they hit the component
function mapDispatchToProps(dispatch) {
    return {
        getPosts: (data) => dispatch(actions.getPosts(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
