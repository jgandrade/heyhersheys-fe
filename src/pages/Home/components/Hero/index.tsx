import Box from "@mui/material/Box";
import arrownavigate from "./assets/arrownavigate.png";
import arrownavigate2 from "./assets/arrownavigate2.png";
import "./styles/hero.scss";

export const Hero = () => {
  return (
    <Box className="hero">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        HerstineS.
      </h2>
      <p className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        "Unleashing Creativity, One Brushstroke at a Time!"
      </p>
      <Box className="cta-btns">
        <button>
          <img
            className="navigate-to-blog"
            src={arrownavigate2}
            alt="arrownavigate2"
          />
          <p>See My Blogs</p>
        </button>
        <button>
          <p>Know more About Me</p>
          <img
            className="navigate-to-about-me"
            src={arrownavigate2}
            alt="arrownavigate2"
          />
        </button>
      </Box>
      <button className="cta-down">
        <img src={arrownavigate} alt="arrownavigate" />
      </button>
    </Box>
  );
};
