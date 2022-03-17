import Personality from './Personality/Personality';
import PostsContainer from './Posts/PostsContainer';
import './Proffile.scss'

function Proffile(props) {
    return (
        <div className="content__proffile proffile">
            <Personality />
            <PostsContainer />
        </div>
    );
}

export default Proffile;