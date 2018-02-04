import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import './NavigationBar';
import Navigation from "./NavigationBar";
import Post from "./Post";
import Searchbar from "./Searchbar";
import CreatePost from "./CreatePost";
import { Route } from 'react-router-dom'
import * as actions from '../actions'
import {connect} from "react-redux";


class MainPage extends Component {
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

    componentWillMount() {
        this.props.getPosts();
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
                                <h1>POSTS HERE</h1>


                                {this.props.posts && Object.values(this.props.posts)
                                    .map(post =>
                                        console.log(this.props)
                                    )}

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
        //QUESTION: this is always null, why?
        posts: console.log(posts)
    }
}

//bind dispatch to action creators before they hit the component
function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(actions.getPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
