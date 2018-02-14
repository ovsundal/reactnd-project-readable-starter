import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowComment from "../comment/ShowComments";
import EditPost from "../post/EditPost";
import CreatePost from "../post/CreatePost";
import {createPost, deletePost, getComments, getPost, updatePost} from "../../actions";

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
            comments: []
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

    render() {
        const {id, comments} = this.state;
        return (
            <div>
                <section className='post'>
                    {id === ''
                    && createNewPost()
                    }

                    {id !== ''
                    && editPost(this.state)
                    }
                </section>

                <br/><br/><br/>

                <section className='comments'>
                    {comments.length > 0
                    && comments.map((comment) =>

                        <ShowComment
                            key={comment.id}
                            id={comment.id}
                            parentId={comment.parentId}
                            author={comment.author}
                            body={comment.body}
                            timestamp={comment.timestamp}
                            voteScore={comment.voteScore}
                        />
                    )}
                </section>
            </div>
        );
    }
}

function createNewPost() {
    return <article>
            <CreatePost/>
    </article>
}

function editPost(state) {
    return <article>
        <EditPost
            id={state.id}
            title={state.title}
            body={state.content}
            author={state.author}
            category={state.category}
            timestamp={state.timestamp}
            voteScore={state.voteScore}
            commentCount={state.commentCount}
        />
    </article>
}


function mapStateToProps({PostReducer}) {
    return {post: PostReducer};
}

export default withRouter(connect(
    mapStateToProps,
    {createPost, updatePost, deletePost, getPost, getComments}
)(CreateEditPostView))
