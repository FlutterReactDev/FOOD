import { Frame, Menu, Sidebar } from "@components";
import { ROUTES } from "@router/router";
import { Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { NavLink, Outlet } from "react-router-dom";
import logo from "./assets/Logo.svg";
import { container } from "tsyringe";
import { httpApiToken } from "@di";
import FetchHttpClient from "@lib/http-client/FetchHttpClient";

const API_BASE_URL = "http://localhost:3000/";

const config = {
  baseUrl: API_BASE_URL,
  defaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
const apiClient = FetchHttpClient.createInstance(config);
container.registerInstance(httpApiToken, apiClient);
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
      <Suspense fallback={<h1>Loading ...</h1>}>
        <SkeletonTheme baseColor="#494465" highlightColor="#444">
          <Frame>
            <Sidebar logoUrl={logo} navigationMarkup={navigationMarkup} />
            <Outlet />
          </Frame>
        </SkeletonTheme>
      </Suspense>
    </>
  );
}

export default App;
