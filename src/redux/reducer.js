import DATA from '../data/data'
import COMMENTS from '../data/comments'

const initialState = {
    imagesData: DATA,
    comments: COMMENTS
}

export const Reducer = (state = initialState, action) => {
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toString();
        console.log(comment);
        return {
            ...state,
            comments : state.comments.concat(comment)
        }
    }
    console.log(state.comments);
    return state;
}