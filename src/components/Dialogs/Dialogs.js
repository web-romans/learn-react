
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.scss'

function Dialogs(props) {

    let dialogsData = [
        { id: '1', name: 'Роман' },
        { id: '2', name: 'Татьяна' },
        { id: '3', name: 'Анна' },
        { id: '4', name: 'Иван' },
    ];

    let messagesData = [
        { id: '0', message: 'Привет!' },
        { id: '1', message: 'Как дела?' },
        { id: '2', message: 'Хорошо' },
        { id: '3', message: 'Как там реакт?' },
    ];

    let dialogsElement = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);
    let messagesElement = messagesData.map(messages => <Message message={messages.message} />);

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