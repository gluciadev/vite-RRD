import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isNestedRoute =
    location.pathname.includes("/about/team") ||
    location.pathname.includes("/about/company");

  return (
    <div>
      <h1>About</h1>
      <div className="buttonsScreenDisplay">
        <button onClick={() => navigate("/")}>Home Screen</button>
        {!isNestedRoute ? (
          <button onClick={() => navigate("/about/team")}>
            Show nested content Team
          </button>
        ) : (
          <button onClick={() => navigate("/about")}>
            Hide nested content
          </button>
        )}
      </div>
      {isNestedRoute && <hr></hr>}
      <Outlet></Outlet>
    </div>
  );
};
