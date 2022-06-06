import { reduxForm, Field } from 'redux-form';

const PostForm = (props) => {

    return (<form onSubmit={props.handleSubmit} className="posts__form form">
        <Field component={"textarea"} name={"post"} className="form__textarea"></Field>
        <button className="form__send">Send</button>
    </form>
    );
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);

export default PostReduxForm;