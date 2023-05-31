import { Box } from "@mui/material";
import "./styles/homepage.scss";

const Home: React.FC = () => {
  return (
    <Box className="homepage">
      <Box className="hero">
        <h2>HerstineS.</h2>
        <p>
          "Embrace your unique style, create your digital masterpiece, and let
          the world double-tap to your rhythm."
        </p>
      </Box>
    </Box>
  );
};

export default Home;