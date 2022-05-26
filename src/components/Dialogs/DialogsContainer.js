import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer