import React, {Component} from 'react';
import {Col, Container, Row,} from 'reactstrap';
import './NavigationBar';
import Post from "./Post";
import SortingModal from "./SortingModal";
import * as actions from '../actions'
import {connect} from "react-redux";
import {toDateTime} from "../utils/DateFormat";
import {withRouter} from "react-router-dom";


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        console.log(this.props.category)

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
                            {/*only render after posts have been retrieved from store*/}
                            {this.props.posts && Object.values(this.props.posts).map((post) =>
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
                            <SortingModal
                            category={this.props.category}
                            />
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
    return {posts: state}
}

//bind dispatch to action creators before they hit the component
function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(actions.getPosts())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage))
