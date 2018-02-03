import * as PostApi from '../utils/PostApi';
export const ADD_POST = 'ADD_POST';


export const sendPost = (posts, action) => ({
    type: action,
    posts
});


let header = {
    headers: {
        "Authorization": "any",
        "Content-Type": "application/json"
    }
};

// export const addPost = (data) => {
//
//     // let postBody = JSON.stringify({
//     //     id: "8xf0y6ziyjabvozdd777nd",
//     //     timestamp: Date.now(),
//     //     title: 'newpost1',
//     //     body: 'this is the body of the new post',
//     //     author: 'author1',
//     //     category: "redux"
//     // })
//
//     return(
//         fetch('http://localhost:3001/posts',{
//             method: 'post',
//             header,
//             body: JSON.stringify(data)
//         })
//             .then( response => response.json())
//             .then( data => console.log('DATA RETURNED IS ', data) )
//             .catch( err => console.log('error', err))
//     )
// };


export const addPost = data => dispatch =>

    PostApi.addPost(data)
        .then(post => dispatch(sendPost(post, ADD_POST)));



// export const addPost = data => dispatch =>
//
//         fetch('http://localhost:3001/posts',
//             {
//                 method: 'POST',
//                 headers: {
//                     Authorization: 'whatever-you-want',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             }).then(data => data.json())
//             .then(post => dispatch(
//                 {
//                     type: ADD_POST,
//                     post
//                 }
//     ));


