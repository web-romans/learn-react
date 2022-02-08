
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.scss'

function Dialogs(props) {
    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                <Dialog id="1" name="Роман" />
                <Dialog id="2" name="Татьяна" />
                <Dialog id="3" name="Анна" />
                <Dialog id="4" name="Иван" />
            </div>

            <div className="dialogs__messages messages">

                <div className="messages__items">
                    <Message message="Привет!" />
                    <Message message="Привет!" />

                    <div className="messages__item message message--received">
                        Я ок!
                    </div>
                    <div className="messages__item message message--received">
                        Как там react?
                    </div>
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