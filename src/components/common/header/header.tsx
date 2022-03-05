import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';


function Header ():JSX.Element {
  const location = window.location;
    return (
<header className="header__wrapper">
    <Link to={AppRoute.Main} className="logo-__ink">
        <img className="logo" src="/img/TaskDo.png" alt="logo"/>
    </Link>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link className={location.pathname === AppRoute.Main ? "nav__link nav__link-active": "nav__link"} to={AppRoute.Main}>Home</Link></li>
        <li className="nav__item"><Link className={location.pathname === AppRoute.TodoList ? "nav__link nav__link-active": "nav__link"} to={AppRoute.TodoList}>To do list</Link></li>
      </ul>
    </nav>
  </header>
    );
}

export default Header;
