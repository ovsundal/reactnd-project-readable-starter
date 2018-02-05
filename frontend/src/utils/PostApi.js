const url = 'http://localhost:3001/';
const headers =
    {
    Authorization: 'whatever-you-want',
    'Content-Type': 'application/json'
    };

//add new post
export const addPost = data =>
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

//vote for post
export const votePost = data =>
    fetch(`${url}posts/${data.id}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());