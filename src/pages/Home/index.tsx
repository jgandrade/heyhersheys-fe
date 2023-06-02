import { Box } from "@mui/material";
import "./styles/homepage.scss";
import { Contents, Hero } from "./components";

const Home: React.FC = () => {
  return (
      <Box className="homepage">
        <Hero />
        <Contents />
      </Box>
  );
};

export default Home;
