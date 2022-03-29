import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xzKrc9YbAjX7l818rYs6NtIIoQdvgpj-a3bOqkFgMN0OIb4Dwxb3Ng_ktrE_NWQFd6o&usqp=CAU"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span className="logo">Currency Converter</span>
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Converter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chart">
                Chart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
