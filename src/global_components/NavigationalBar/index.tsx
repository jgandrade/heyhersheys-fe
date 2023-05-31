import "./styles/NavigationalBar.scss";
import { FC, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import BurgerButton from "./BurgerButton";
import SideBar from "./SideBar";

const NavigationalBar: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const setActiveToggle = (): void => {
    setActive(!active);
  };

  return (
    <Box className="navigational-bar sm:px-[3.5em] md:px-[6em] lg:px-[8em]">
      <Link className="header-text relative z-[1000] font-[dream_only]" to="/">
        heyhersheys
      </Link>
      <BurgerButton setActive={() => setActiveToggle()} />
      {active && <SideBar />}
    </Box>
  );
};

export default NavigationalBar;
