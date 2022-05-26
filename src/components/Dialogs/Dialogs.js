
import React from 'react';
import { Navigate } from "react-router-dom";

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.scss'


function Dialogs(props) {

    let dialogsElement = props.state.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messagesElement = props.state.messagesData.map(messages => <Message key={messages.id} message={messages.message} />);

    let newDialogEl = React.createRef();

    let addMessage = (e) => {
        e.preventDefault();
        props.addMessageActionCreator();
    }

    let onMessageChange = () => {
        let text = newDialogEl.current.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth)
        return <Navigate to={"/login"} />

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

                <form className="dialogs__form form">
                    <textarea ref={newDialogEl} onChange={onMessageChange} value={props.state.newMessageText} className="form__textarea" maxLength="250" />
                    <button onClick={addMessage} className="form__send">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Dialogs