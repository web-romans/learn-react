

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);