import Preloader from '../../common/Preloader/Preloader';
import './Personality.scss'
import Status from '../Status/Status';
import bg from '../../../assets/img/bg.webp'

function Personality(props) {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className="profile__personality personality">
                <div className="personality__bg">
                    <img
                        className="personality__bg-img"
                        src={bg}
                        alt="Profile background"
                    />
                </div>
                <div className="personality__img-bl" >
                    <img className="personality__img"
                        src={props.profile.photos.large}
                        alt={props.profile.fullName}
                    />
                </div>
                <div className="personality__about">
                    <div className="personality__name">{props.profile.fullName}</div>
                    <div className="personality__info personality__info--min">Belarus, Minsk</div>
                    <Status aboutMe={props.profile.aboutMe} status={props.status} updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
        );
    }
}

export default Personality