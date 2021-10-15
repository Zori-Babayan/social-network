const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {

    posts: [
        {id: 1, message: 'hay man', likeCount: 13},
        {id: 2, message: 'hay man', likeCount: 10},
        {id: 3, message: 'blablabla', likeCount: 100},

    ],
    newPostText: 'it-camasutra.am',
    profile: null,
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state,profile: action.profile}
        }
        default:

            return state;
    }
}





export const addPostActionCreator = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;