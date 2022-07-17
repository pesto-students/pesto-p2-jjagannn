import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1 className="appTitle">URL shortener app</h1>
      <nav>
        <ul>
          <li className="linkText">
            <Link to="/">Home</Link>
          </li>
          <li className="linkText">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
