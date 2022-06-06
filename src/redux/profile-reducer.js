import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {
            id: '0',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa doloremque similique nam eum suscipit, atque magni provident vero assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla cum facilis reprehenderit illo dolore totam? Mollitia incidunt omnis consequuntur impedit quod aspernatur accusantium nihil ullam illo dignissimos aliquam laboriosam facere eum amet similique animi quibusdam nesciunt, in neque dicta!',
            likes: '3'
        },
        {
            id: '1',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            likes: '2'
        },
        {
            id: '2',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla cum facilis reprehenderit illo dolore totam? Mollitia incidunt omnis consequuntur impedit quod aspernatur accusantium nihil ullam illo dignissimos aliquam laboriosam facere eum amet similique animi quibusdam nesciunt, in neque dicta!',
            likes: '1'
        },
        {
            id: '3',
            img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            likes: '24'
        },

    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length,
                img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
                text: action.post,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => ({
    type: ADD_POST,
    post: post
});


export const setUserProfileActionCreator = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setUserStatusActionCreator = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data))
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatusActionCreator(response.data))
    });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatusActionCreator(status))
        }
    });
}

export default profileReducer;