import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles/NavigationalBar.scss";

export const NavigationalBar: FC = () => {
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
