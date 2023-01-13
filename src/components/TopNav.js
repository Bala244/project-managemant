import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="h-14 border-custom">
      <header className="flex justify-between justify-between align-center px-7 py-4">
        <ul>
          <li>
            <div className="header-action-item header-action-item-hoverable">
              <div className="text-2xl">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default TopNav;
