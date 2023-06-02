import { Box, Container } from "@mui/material";
import "./styles/contents.scss";
import artwork from "./assets/artwork.jpg";

const Contents = () => {
  return (
    <Box className="contents-homepage mt-56">
      <Container>
        <Box className="content-offer flex flex-col justify-center items-center md:flex-row">
          <h2 className="text-6xl xl:text-8xl xl:text-left">Explore the captivating content I offer</h2>
          <img src={artwork} alt="artwork" />
        </Box>
      </Container>
    </Box>
  );
};

export { Contents };
