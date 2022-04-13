import preloader from './../../../assets/img/load.gif';
import './Preloader.scss';

function Preloader() {
    return (
        <div div className='preloader' > <img src={preloader} alt='none' /></div >
    );
}

export default Preloader;