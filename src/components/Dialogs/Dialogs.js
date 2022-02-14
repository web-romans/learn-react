
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.scss'

function Dialogs(props) {



    let dialogsElement = props.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);
    let messagesElement = props.messagesData.map(messages => <Message message={messages.message} />);

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
                    <textarea className="form__textarea" maxLength="250"></textarea>
                    <button className="form__send">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Dialogs