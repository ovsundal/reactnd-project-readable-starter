import React, {Component} from 'react';
import {Col, Container, Row,} from 'reactstrap';
import './NavigationBar';
import Post from "./Post";
import Searchbar from "./Searchbar";
import * as actions from '../actions'
import {connect} from "react-redux";
import {toDateTime} from "../utils/DateFormat";


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

                    <Container>
                        <Row>
                            <Col xs="8">
                                {/*only render after posts have been retrieved from store. JS treats null as an object,*/}
                                {/*so when item is retrieved it is type array, so only render in array form*/}
                                {/*{console.log(this.props.posts.posts)}*/}
                                {/*{console.log(this.props)}*/}
                                {/*{console.log( this.props.posts != null)}*/}
                                {/*{console.log(this.props.posts instanceof Array)}*/}
                                {this.props.posts && Object.values(this.props.posts).map((post)=>
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        title={post.title}
                                        body={post.body}
                                        author={post.author}
                                        category={post.category}
                                        timestamp={toDateTime(post.timestamp)}
                                        voteScore={post.voteScore}
                                        commentCount={post.commentCount}
                                    />
                                )}



                            </Col>
                            <Col xs="4">
                                <Searchbar/>
                            </Col>
                        </Row>
                    </Container>

            </Container>
        )
    }
}

//mapStateToProps allows you to specify which data
// from the store you want passed to component
//it's a function that lets connect() know how to map specific
//parts of the stores state into usable props
function mapStateToProps(state) {

    return {
        posts: state
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
