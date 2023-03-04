import Menu from "@components/Menu";
import { FC, ReactNode } from "react";
import {
  MoonIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

interface SidebarProps {
  logoUrl?: string;
  navigationMarkup?: ReactNode;
}
const Sidebar: FC<SidebarProps> = (props) => {
  const { logoUrl, navigationMarkup } = props;
  return (
    <aside className="flex px-3 py-3 flex-col bg-base-200">
      <div className="flex-1">
        <div className="p-3">
          <Link to="/">
            <img src={logoUrl} />
          </Link>
        </div>
        {navigationMarkup}
      </div>
      <Menu>
        <Menu.Item>
          <NavLink className="rounded-lg" to="/logout">
            <ArrowLeftOnRectangleIcon className="h-6 w-6" />
          </NavLink>
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default Sidebar;
