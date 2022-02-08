import "./Message.scss"

function Message(props) {
    return (
        <div className="messages__item message">
            {props.message}
        </div>
    );
}

export default Message;