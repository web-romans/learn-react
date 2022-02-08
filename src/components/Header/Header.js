import './Header.scss'

function Header() {
    return (
        <header className='header page__header'>
            <a href="/" className="header__logo">
                <img className='header__logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png" alt="Сompany logo" />
            </a>
        </header>
    );
}

export default Header;