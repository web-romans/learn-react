import React from 'react';
import Profile from './Proffile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';

const apiUrl = 'https://social-network.samuraijs.com/api/1.0/';

class ProffileContainer extends React.Component {
    componentDidMount() {
        let getString = `${apiUrl}profile/2`;

        axios.get(getString).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return (
            <div className="content__proffile proffile">
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProffileContainer);