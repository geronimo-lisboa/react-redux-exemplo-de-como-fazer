import {ADD_ARTICLE} from "../constants/action-types"
//O estado inicial
const initialState = {
    articles: [{id:1, title:"foobar"}]
};

function rootReducer(state = initialState, action) {
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })        
    }
    return state;
};
export default rootReducer;