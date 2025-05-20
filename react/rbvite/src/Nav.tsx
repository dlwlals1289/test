import clsx from 'clsx';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { useSession } from './contexts/session/useSession';

export default function Nav() {
  const {
    session: { loginUser },
  } = useSession();
  return (
    <>
      <ul className="nav">
        <li>
          <NavLink to="/" replace>
            Home
          </NavLink>
        </li>
        {loginUser ? (
          <li>
            <NavLink to="/my" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>
              My
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => clsx({ red: isActive })}>
              Login
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/items">Items</NavLink>
        </li>
        <li>
          <NavLink to="/hello">About</NavLink>
        </li>
        <li>
          <NavLink to="/notfound">NotFound</NavLink>
        </li>
      </ul>
    </>
  );
}
