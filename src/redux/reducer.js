import DATA from '../data/data'
import COMMENTS from '../data/comments'

const initialState = {
    imagesData: DATA,
    comments: COMMENTS
}

export const Reducer = (state = initialState, action) => {
    return state;
}