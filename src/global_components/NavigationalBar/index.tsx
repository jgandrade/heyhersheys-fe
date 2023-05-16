import * as React from "react";
import "./styles/NavigationalBar.scss";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationalBar: React.FC = () => {
  return (
    <Box className="navigational-bar">
      <Link className="header-text" to="/">
        heyhersheys
      </Link>
      <Stack className="links-nav" direction="row" spacing={2}>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </Stack>
    </Box>
  );
};
