import Header from './Header';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
//import Preloader from './../common/Preloader/Preloader';

const apiUrl = 'https://social-network.samuraijs.com/api/1.0/';

class HeaderContainer extends React.Component {
    componentDidMount() {
        let getString = `${apiUrl}/auth/me`;
        axios.get(getString, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data);
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);