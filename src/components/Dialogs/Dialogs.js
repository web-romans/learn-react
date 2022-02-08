import { NavLink } from 'react-router-dom';
import './Dialogs.scss'

function Dialogs(props) {
    return (
        <div className='dialogs'>
            <div className="dialogs__items">
                <NavLink to="/dialogs/1" className="dialogs__item dialog">
                    Роман
                </NavLink>
                <NavLink to="/dialogs/2" className="dialogs__item dialog">
                    Татьяна
                </NavLink>
                <NavLink to="/dialogs/3" className="dialogs__item dialog">
                    Анна
                </NavLink>
                <NavLink to="/dialogs/4" className="dialogs__item dialog">
                    Иван
                </NavLink>

            </div>

            <div className="dialogs__messages messages">

                <div className="messages__items">
                    <div className="messages__item message">
                        Привет
                    </div>
                    <div className="messages__item message">
                        Как дела?
                    </div>
                    <div className="messages__item message message--received">
                        Я ок!
                    </div>
                    <div className="messages__item message message--received">
                        Как там react?
                    </div>
                    <div className="messages__item message">
                        Привет
                    </div>
                    <div className="messages__item message">
                        Как дела?
                    </div>
                    <div className="messages__item message message--received">
                        Я ок!
                    </div>
                    <div className="messages__item message message--received">
                        Как там react?
                    </div>
                    <div className="messages__item message">
                        Привет
                    </div>
                    <div className="messages__item message">
                        Как дела?
                    </div>
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