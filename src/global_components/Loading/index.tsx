import { Box } from "@mui/material";

import { FC } from "react";
import LoadingGif from "./assets/Loading.gif";
import "./styles/loading.scss";

const Loading: FC = () => {
  return (
    <Box className="loading">
      <img src={LoadingGif} alt="loading-gif" />
    </Box>
  );
};

export default Loading;
