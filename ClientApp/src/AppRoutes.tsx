import React from "react";
import { ReactNode } from "react";

interface AppRoute{
  element: ReactNode;
  index?: boolean;
  path?: string;
}

const AppRoutes: AppRoute[] = [
  {
    element: <p>test</p>,
    index: true
  }
];

export default AppRoutes;
