import React from "react";
import { Box } from "@mui/material";
import { webStyle } from "./styles/AppWrapper.styles";
import "./styles/AppWrapper.scss";

interface ReactWrapper {
  children: React.ReactNode;
}
const AppWrapper = ({ children }: ReactWrapper) => {
  return (
    <Box sx={webStyle.AppStyle} className="app-wrapper">
      {children}
    </Box>
  );
};

export default AppWrapper;
