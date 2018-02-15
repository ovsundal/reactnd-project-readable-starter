import React, {Component} from 'react';
import {Col, Container, Row,} from 'reactstrap';
import '../utils/NavigationBar';
import SortingModal from "../utils/SortingModal";
import {getPosts} from '../../actions'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowPosts from "../post/ShowPosts";

class MainPageView extends Component {
    constructor(props) {
        super(props);
        this.props.getPosts();

        this.state= {
            sortMode: 'date'
        }
    }
    //receives a cb from SortingModal based on radio button selection in Sort By
    applySorting = (sortMode) => {
        this.setState({
            sortMode
        });
    };
    //does the actual sorting based on cb in applySorting
    sortBy = (posts, sortMode) => {
        if(sortMode === 'date') {
            return posts.sort((a,b) => {
                return b.timestamp - a.timestamp;
            })
        } else {
            return posts.sort((a,b) => {
                return b.voteScore - a.voteScore;
            })
        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="8">
                        {this.props.posts
                        && this.sortBy(this.props.posts, this.state.sortMode)
                            .map((post) =>
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
                        <SortingModal
                            applySorting={this.applySorting}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({PostReducer}) {
    return {
        posts: PostReducer
    }
}

export default withRouter(connect(
    mapStateToProps,
    {getPosts}
)(MainPageView))
