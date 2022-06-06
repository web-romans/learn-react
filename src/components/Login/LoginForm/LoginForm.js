import './LoginForm.scss'
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className="login__form login-form">
        <div className="login-form__item">
            <Field component={"input"} name={"login"} type={"text"} className="login-form__input" placeholder={"Login"} />
        </div>
        <div className="login-form__item">
            <Field component={"input"} name={"password"} type={"password"} className="login-form__input" placeholder={"Password"} />
        </div>
        <div className="login-form__item">
            <label className='login-form__customcheckbox'>
                <Field component={"input"} name={"rememberme"} type={"checkbox"} className="login-form__checkbox" />
                <span>Remember Me</span>
            </label>
        </div>
        <div className="login-form__item">
            <button className="login-form__btn">Login</button>
        </div>
    </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;