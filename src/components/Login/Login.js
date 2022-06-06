import './Login.scss'
import LoginReduxForm from './LoginForm/LoginForm';

function Login(props) {
    const onHandleSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className='login'>
            <LoginReduxForm onSubmit={onHandleSubmit} />
        </div>
    );
}

export default Login