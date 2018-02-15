import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import EditPost from "../post/EditPost";
import CreatePost from "../post/CreatePost";
import {createPost, deletePost, getComments, getPost, updatePost} from "../../actions";
import {Col, Container, Row} from "reactstrap";
import SortingModal from "../utils/SortingModal";

class CreateEditPostView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            author: '',
            title: '',
            content: '',
            category: '',
            voteScore: '',
            timestamp: '',
            comments: [],
            sortMode: 'date'

        };
    }

    componentWillReceiveProps(props) {
        if (props.post && props.post[0]) {
            const post = props.post[0];
            this.setState({
                id: post.id,
                author: post.author,
                title: post.title,
                content: post.body,
                category: post.category,
                voteScore: post.voteScore,
                timestamp: post.timestamp,
                selectedCategory: post.category
            });
        }
    }

    componentWillMount() {
        this.props.getPost(this.props.id);
        this.props.getComments(this.props.id);
    }

    applySorting = (sortMode) => {
        this.setState({
            sortMode
        });
    };

    render() {
        const {id} = this.state;
        return (
            <Container>
                <Row>
                    <Col xs="8">
                        <section className='post'>
                            {id === ''
                            && createNewPost()
                            }
                            {id !== ''
                            && editPost()
                            }
                        </section>
                    </Col>
                    <Col xs="4">
                        <SortingModal
                            applySorting={this.applySorting}
                        />
                    </Col>
                    <br/><br/><br/>
                </Row>
            </Container>
        );
    }
}

function createNewPost() {
    return <article>
        <CreatePost/>
    </article>
}

function editPost() {
    // console.log(post)

    return <article>
        <EditPost/>
    </article>
}

function mapStateToProps({PostReducer}) {
    return {post: PostReducer};
}

export default withRouter(connect(
    mapStateToProps,
    {createPost, updatePost, deletePost, getPost, getComments}
)(CreateEditPostView))
