import { Frame, Menu, Sidebar } from "@components";
import { ROUTES } from "@router/router";
import { SkeletonTheme } from "react-loading-skeleton";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./assets/Logo.svg";
function App() {
  const defaultClass = "group p-4 rounded-xl";
  const navigationMarkup = (
    <Menu className="gap-3 items-center">
      {ROUTES.map((route) => (
        <Menu.Item key={route.path}>
          <NavLink
            className={({ isActive }) => {
              return [
                defaultClass,
                isActive ? "group active bg-base-100" : "",
              ].join(" ");
            }}
            to={route.path}
          >
            <div className={`p-2 rounded-lg group-[.active]:bg-primary`}>
              {route.icon}
            </div>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <SkeletonTheme baseColor="#252836" highlightColor="#444">
        <Frame>
          <Sidebar logoUrl={logo} navigationMarkup={navigationMarkup} />
          <Outlet />
        </Frame>
      </SkeletonTheme>
    </>
  );
}

export default App;
