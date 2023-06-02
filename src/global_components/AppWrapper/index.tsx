import React from "react";
import { Box } from "@mui/material";
import { webStyle } from "./styles/AppWrapper.styles";
import "./styles/AppWrapper.scss";
import CustomCursorManager from "../CustomCursor/context/manager";
import CustomCursor from "../CustomCursor";

interface ReactWrapper {
  children: React.ReactNode;
}
const AppWrapper = ({ children }: ReactWrapper) => {
  return (
    <CustomCursorManager>
      <Box sx={webStyle.AppStyle} className="app-wrapper">
        <CustomCursor />
        {children}
      </Box>
    </CustomCursorManager>
  );
};

export default AppWrapper;
