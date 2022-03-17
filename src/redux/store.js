import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscribe() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state)

    }
}


export default store;
window.store = store;