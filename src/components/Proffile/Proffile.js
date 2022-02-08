import Personality from './Personality/Personality';
import Posts from './Posts/Posts';
import './Proffile.scss'

function Proffile(props) {
    return (
        <div className="content__proffile proffile">
            <div className="proffile__bg">
                <img className="proffile__bg-img" src="https://sld.gs/wp-content/uploads/2018/04/react-background.jpg" alt="Profile background" />
            </div>
            <Personality />
            <Posts />
        </div>
    );
}

export default Proffile;