// import {SORT_BY_CATEGORY,} from '../actions';
//
// export default function FilterReducer(state = [], action) {
//     switch(action.type) {
//
//         case SORT_BY_CATEGORY: {
//             return action.posts;
//         }
//         // case SORT_BY_DATE: {
//         //
//         //     const sortedArrByDate = Object.values(state).sort((a,b) => {
//         //         return b.timestamp - a.timestamp;
//         //     });
//         //     return {...makeObj(sortedArrByDate)};
//         // }
//         // case SORT_BY_SCORE: {
//         //
//         //     const sortedArrByScore = Object.values(state)
//         //         .sort((a, b) => {
//         //             return b.voteScore - a.voteScore;
//         //         });
//         //     return {...makeObj(sortedArrByScore)};
//         // }
//         default: {
//             return state;
//         }
//     }
// }
// //helper function for formatting action.posts item equal to state.
// function makeObj (posts) {
//     const newObj = {};
//
//     for (let i = 0; i < posts.length; i++) {
//         const item = posts[i];
//         const itemId = item.id;
//         newObj[itemId] = item
//     }
//     return newObj
// }