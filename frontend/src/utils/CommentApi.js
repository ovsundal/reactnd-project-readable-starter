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

