import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-100">
      <div className="p-5 font-medium side-nav">
        <div className="logo mb-5 ">
          <Link to="">QA Manager</Link>
        </div>
        <label className="label">APPS</label>
        <ul className="">
          <li className="mr-5">
            <Link to="/">
              <div className="flex items-center">
                <i className="fa-sharp fa-solid fa-table-columns mr-3"></i>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projects/">
              <div className="flex items-center">
                <i className="fa-solid fa-list-check mr-3"></i>
                Projects
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
