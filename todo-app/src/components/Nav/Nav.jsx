import './nav.css';
import { Link } from 'react-router-dom';

function Nav({page}) {
  return (
    <nav className="nav">
        <Link to="/" className={page === 'todo' ? 'nav__link nav__link--active' : 'nav__link'}>Home</Link>
        <Link to="/form" className={page === 'form' ? 'nav__link nav__link--active' : 'nav__link'}>About</Link>
    </nav>
  )
}

export default Nav
