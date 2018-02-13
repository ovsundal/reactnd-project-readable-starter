import React from 'react';
import * as actions from "../../actions/index";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ShowComment from "../comment/ShowComments";
import EditPost from "../post/EditPost";
import CreatePost from "../post/CreatePost";

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
        if(props.post && props.post[0]) {
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
        return (
        <div>
            <section className='post'>
                {/*for new post*/}
                {this.state.id === ''
                && <CreatePost/>
                }

                {/*for edit post*/}
                {this.state.id !== ''
                && <article key={this.state.id}>
                        <EditPost
                            id={this.state.id}
                            title={this.state.title}
                            body={this.state.content}
                            author={this.state.author}
                            category={this.state.category}
                            timestamp={this.state.timestamp}
                            voteScore={this.state.voteScore}
                            commentCount={this.state.commentCount}
                        />
                    </article>
                }
            </section>

            <br/><br/><br/>

            <section className='comments'>
                {this.state.comments.length > 0
                && this.state.comments.map((comment) =>

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

function mapStateToProps(state) {
    return {post: state.PostReducer};
}

const mapDispatchToProps = dispatch => ({
    addPost: (data) => dispatch(actions.createPost(data)),
    updatePost: (data) => dispatch(actions.updatePost(data)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    getPost: (id) => dispatch(actions.getPost(id)),
    getComments: (id) => dispatch(actions.getComments(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEditPostView))
