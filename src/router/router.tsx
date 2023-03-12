import App from "../App";
import { createBrowserRouter, defer, RouteObject } from "react-router-dom";
import {
  ChartPieIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { CardList } from "@components";
import { lazy, ReactNode } from "react";
import { httpClient } from "../wrappers/httpClient";
import { container } from "tsyringe";
import { FoodService } from "@service";
import CustomerService from "@service/customer";

const Home = lazy(() =>
  import("@pages/Home").then((module) => ({
    default: module.Home,
  }))
);

const Dashboard = lazy(() =>
  import("@pages/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);

const Settings = lazy(() =>
  import("@pages/Settings").then((module) => ({
    default: module.Settings,
  }))
);

type IRoutes = RouteObject & {
  icon?: ReactNode;
  path: string;
};

export const foodList = [
  {
    label: "Hot Dishes",
    path: "hot-dishes",
  },
  {
    label: "Cold Dishes",
    path: "cold-dishes",
  },
  {
    label: "Soup",
    path: "soup",
  },
  {
    label: "Grill",
    path: "grill",
  },
  {
    label: "Appetizer",
    path: "appetizer",
  },
  {
    label: "Dessert",
    path: "dessert",
  },
];

export const ROUTES: IRoutes[] = [
  {
    path: "/home",
    element: <Home />,
    icon: <HomeIcon className="w-6 h-6" />,
    children: [
      {
        path: ":type",
        element: <CardList />,
        loader({ params }) {
          const foodService = container.resolve(FoodService);
          const response = foodService.getFoods(
            params as Record<string, string>
          );

          return defer({
            foods: response.data,
          });
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    icon: <ChartPieIcon className="w-6 h-6" />,
  },
  {
    path: "/settings",
    element: <Settings />,
    icon: <Cog6ToothIcon className="w-6 h-6" />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,

    children: ROUTES.map((route) => {
      const { path, element, ...actions } = route;
      return {
        path,
        element,
        ...actions,
      };
    }),
  },
];

const router = createBrowserRouter(routes);

export default router;
