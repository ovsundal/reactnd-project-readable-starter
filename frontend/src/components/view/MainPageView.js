import React, {Component} from 'react';
import {Col, Container, Row,} from 'reactstrap';
import '../utils/NavigationBar';
import SortingModal from "../utils/SortingModal";
import * as actions from '../../actions'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowPosts from "../post/ShowPosts";

class MainPageView extends Component {
    constructor(props) {
        super(props);
        this.props.getPosts();
    }

    render() {
        return (
            <Container>
                    <Row>
                        <Col xs="8">
                            {this.props.posts.map((post) =>
                                <article key={post.id}>
                                    <ShowPosts
                                        id={post.id}
                                        title={post.title}
                                        body={post.body}
                                        author={post.author}
                                        category={post.category}
                                        timestamp={new Date(post.timestamp).toDateString()}
                                        voteScore={post.voteScore}
                                        commentCount={post.commentCount}
                                    />
                                </article>
                            )}
                        </Col>
                        <Col xs="4">
                            <SortingModal />
                        </Col>
                    </Row>
            </Container>
        )
    }
}
function mapStateToProps(state) {
        return {
            posts: state.PostReducer,
        }
}
function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(actions.getPosts())
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPageView))