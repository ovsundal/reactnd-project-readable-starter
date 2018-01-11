export const ADD_POST = 'ADD_POST';

export function addPost({author, title, content, picture, category, dateCreated}) {
    return {
        type: ADD_POST,
        author,
        title,
        content,
        picture,
        category,
        dateCreated
    }
}