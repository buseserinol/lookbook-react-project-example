import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <Link className="text-decoration-none color-purple" to="/">
            LookBook
          </Link>
        </span>

        <div className="d-flex gap-2">
          <NavLink className="text-decoration-none color-purple" to="/">
            Anasayfa
          </NavLink>
          <NavLink
            className="text-decoration-none purple color-purple"
            to="/ürünler"
          >
            Ürünler
          </NavLink>
          <NavLink
            className="text-decoration-none purple color-purple"
            to="/kategori"
          >
            Kategori
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
