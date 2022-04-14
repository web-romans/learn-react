import Preloader from '../../common/Preloader/Preloader';
import './Personality.scss'

function Personality(props) {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className="profile__personality personality">
                <div className="personality__bg">
                    <img
                        className="personality__bg-img"
                        src="https://ak.picdn.net/shutterstock/videos/11748878/thumb/4.jpg"
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
                    <div className="personality__info personality__info--min">Belarus, 29 years</div>
                    <div className="personality__info">{props.profile.aboutMe}</div>
                </div>
            </div>
        );
    }
}

export default Personality