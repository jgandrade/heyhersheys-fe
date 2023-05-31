import { lazy } from "react";

const NavigationalBar = lazy(() => import("./NavigationalBar"));
const Footer = lazy(() => import("./Footer"));
const AppWrapper = lazy(() => import("./AppWrapper"));
const RoutesWrapper = lazy(() => import("./RoutesWrapper"));
const Loading = lazy(() => import("./Loading"));

export default {
  NavigationalBar,
  Footer,
  AppWrapper,
  RoutesWrapper,
  Loading,
};
