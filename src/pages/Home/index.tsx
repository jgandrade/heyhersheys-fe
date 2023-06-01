import { Box } from "@mui/material";
import "./styles/homepage.scss";

const Home: React.FC = () => {
  return (
    <Box className="homepage">
      <Box className="hero">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">HerstineS.</h2>
        <p className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          "Unleashing Creativity, One Brushstroke at a Time!"
        </p>
      </Box>
    </Box>
  );
};

export default Home;
