import { NavLink, Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/movies'}>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}