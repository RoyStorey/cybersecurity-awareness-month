import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <div class="hosted-by">
        <h5>Hosted by 89CS MDT</h5>
      </div>
      <div className="button-container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/themes">
          <button>Theme Rules</button>
        </Link>
        <Link to="/demos">
          <button>Demos</button>
        </Link>
        <Link to="/upload-demo">
          <button>Upload Demo</button>
        </Link>
      </div>
    </div>
  );
}
export default Header;
