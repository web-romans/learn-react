
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: state.messagesData.length, message: text }],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer; 