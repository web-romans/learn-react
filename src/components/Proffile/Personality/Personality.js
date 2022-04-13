import './Personality.scss'

function Personality() {
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
                <img
                    className="personality__img"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Profile photo"
                />
            </div>
            <div className="personality__about">
                <div className="personality__name">Roman G.</div>
                <div className="personality__info personality__info--min">Belarus, 29 years</div>
                <div className="personality__info">Frontend Developer</div>
            </div>
        </div>
    );
}

export default Personality