const url = 'http://localhost:3001/';
const headers =
    {
        Authorization: 'whatever-you-want',
        'Content-Type': 'application/json'
    };


export const getComments = parentId =>
    fetch(`${url}posts/${parentId}/comments`,
        {
            method: 'GET',
            headers
        }).then(response => response.json());

export const deleteComment = id =>
    fetch(`${url}comments/${id}`,
        {
            method: 'DELETE',
            headers
        }).then(response => response.json());

export const voteComment = (id, vote) =>
    console.log(fetch(`${url}comments/${id}`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({option: vote})
        }).then(response => response.json()));

export const createComment = data =>
    fetch(`${url}comments`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());

export const updateComment = data =>
    fetch(`${url}comments/${data.id}`,
        {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());
