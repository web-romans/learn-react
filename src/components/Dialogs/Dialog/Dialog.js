import { NavLink } from 'react-router-dom';
import "./Dialog.scss"

function Dialog(props) {
    return (
        <NavLink to={"/dialogs/" + props.id} className="dialogs__item dialog">
            {props.name}
        </NavLink>
    );
}

export default Dialog;