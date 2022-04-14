import Personality from './Personality/Personality';
import PostsContainer from './Posts/PostsContainer';
import './Profile.scss'

function Profile(props) {
    return (
        <div className="content__proffile proffile">
            <Personality profile={props.profile} />
            <PostsContainer />
        </div>
    );
}

export default Profile;