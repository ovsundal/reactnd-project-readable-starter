import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
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
        console.log(this.props)
        this.props.getPost(this.props.id);
        this.props.getComments(this.props.id);
    }

    render() {
        const {id} = this.state;
        return (
            <div>
                <section className='post'>
                    {id === ''
                    && createNewPost()
                    }
                    {id !== ''
                    && editPost()
                    }
                </section>
                <br/><br/><br/>
            </div>
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
        <EditPost
            // id={post.id}
            // title={post.title}
            // body={post.content}
            // author={post.author}
            // category={post.category}
            // timestamp={post.timestamp}
            // voteScore={post.voteScore}
            // commentCount={post.commentCount}
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
