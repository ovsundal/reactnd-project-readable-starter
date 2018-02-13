const url = 'http://localhost:3001/';
const headers =
    {
    Authorization: 'whatever-you-want',
    'Content-Type': 'application/json'
    };

//add new post
export const createPost = data =>
    fetch(`${url}posts`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());

//get all posts
export const getPosts = data =>
    fetch(`${url}posts`,
        {
            method: 'GET',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());

//voting
export const votePost = (id, vote) =>
    fetch(`${url}posts/${id}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({option: vote})
        }).then(response => response.json());

//sort by category
export const sortPostsByCategory = category =>
    fetch(`${url}${category}/posts`,
        {
            method: 'GET',
            headers,
        }).then(response => response.json());

//delete post
export const deletePost = id =>
    fetch(`${url}posts/${id}`,
        {
            method: 'DELETE',
            headers
        }).then(response => response.json());

//get single post
export const getPost = id =>
    fetch(`${url}posts/${id}`,
        {
            method: 'GET',
            headers
        }).then(response => response.json());

//update post
export const updatePost = data =>
    fetch(`${url}posts/${data.id}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());

