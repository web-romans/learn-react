const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: 'newPostText'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length,
                img: 'https://dineuron.com/uploads/services/service_5cac7af9a951513.png',
                text: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;

    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updatePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;