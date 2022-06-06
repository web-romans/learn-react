
import React from 'react';
import MessageReduxForm from './MessageForm/MessageForm';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.scss'


function Dialogs(props) {

    let dialogsElement = props.state.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messagesElement = props.state.messagesData.map(messages => <Message key={messages.id} message={messages.message} />);

    const onHandleSubmit = (formData) => {
        props.addMessageActionCreator(formData.message);
    }

    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                {dialogsElement}
            </div>
            <div className="dialogs__messages messages">

                <div className="messages__items">
                    {messagesElement}
                    {/*<div className="messages__item message message--received">*/}
                </div>

                <MessageReduxForm onSubmit={onHandleSubmit} />

            </div>
        </div>
    );
}

export default Dialogs