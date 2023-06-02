import { Box } from "@mui/material";
import "./styles/homepage.scss";
import { Hero } from "./components";

const Home: React.FC = () => {
  return (
      <Box className="homepage">
        <Hero />
      </Box>
  );
};

export default Home;
