
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        { id: '0', name: 'Роман' },
        { id: '1', name: 'Татьяна' },
        { id: '2', name: 'Анна' },
        { id: '3', name: 'Иван' },
    ],
    messagesData: [
        { id: '0', message: 'Привет!' },
        { id: '1', message: 'Как дела?' },
        { id: '2', message: 'Хорошо' },
        { id: '3', message: 'Как там реакт?' },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = action.message;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: state.messagesData.length, message: message }],
            };
        default:
            return state;

    }
}

export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    message: message
});


export default dialogsReducer; 