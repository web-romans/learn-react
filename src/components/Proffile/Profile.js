import Personality from './Personality/Personality';
import PostsContainer from './Posts/PostsContainer';
import './Profile.scss'

function Profile(props) {
    return (
        <div className="content__proffile proffile">
            <Personality profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <PostsContainer />
        </div>
    );
}

export default Profile;