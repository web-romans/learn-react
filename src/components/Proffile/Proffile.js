import Personality from './Personality/Personality';
import Posts from './Posts/Posts';
import './Proffile.scss'

function Proffile(props) {
    return (
        <div className="content__proffile proffile">
            <Personality />
            <Posts />
        </div>
    );
}

export default Proffile;