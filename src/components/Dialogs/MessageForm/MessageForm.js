import { reduxForm, Field } from 'redux-form';

const MessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className="dialogs__form form">
        <Field component={"textarea"} name={"message"} className="form__textarea" maxLength="250" />
        <button className="form__send">Send</button>
    </form>
    );
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);

export default MessageReduxForm;