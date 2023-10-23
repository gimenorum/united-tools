import React from "react";
import { ReactNode } from "react";
import Home from "./pages/Home";
import DailyNote from "./pages/DailyNote";

interface AppRoute{
  element: ReactNode;
  index?: boolean;
  path?: string;
}

const AppRoutes: AppRoute[] = [
  {
    element: <Home />,
    index: true
  },
  {
    element: <DailyNote />,
    path: "/dailyNote"
  }
];

export default AppRoutes;
