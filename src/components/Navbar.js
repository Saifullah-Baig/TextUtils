import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="checkNativeSwitch"
              switch
              onClick={props.toggleMode}
            />
            <label
              class="form-check-label"
              for="checkNativeSwitch"
              style={{ color: props.mode ? "white" : "black" }} // eik obj bana kr usme color dal diya
            >
              {props.mode ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
