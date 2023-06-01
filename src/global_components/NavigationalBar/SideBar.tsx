import "./styles/SideBar.scss";
import { Box, Container } from "@mui/material";
import { useCallback, useEffect, useState, useMemo } from "react";
import * as Menu from "./components";

interface Props {
  isActive: boolean;
}

const SideBar = ({ isActive }: Props) => {
  const menuState = useMemo(() => {
    return {
      mainMenu: false,
      subPersonal: false,
      subStyle: false,
    };
  }, []);

  const [clicked, setClicked] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState({
    ...menuState,
    mainMenu: true,
  });

  const setMenu = useCallback(
    (menu: string | undefined) => {
      if (menu === "MainMenu") {
        setCurrentMenu({
          ...menuState,
          mainMenu: true,
        });
      }
      if (menu === "SubPersonal") {
        setCurrentMenu({
          ...menuState,
          subPersonal: !currentMenu.subPersonal,
        });
      }
      if (menu === "SubStyle") {
        setCurrentMenu({ ...menuState, subStyle: !currentMenu.subStyle });
      }
    },
    [currentMenu, menuState]
  );

  useEffect(() => {
    isActive && setClicked(true);
  }, [isActive]);

  console.log(currentMenu);
  return (
    <Box
      className={`sidebar-navigational-bar ${
        isActive ? "active-sidebar" : clicked ? "inactive-sidebar" : "hidden"
      }`}
    >
      <Container className="list-links">
        <Menu.Main
          isActive={currentMenu.mainMenu}
          setMenu={(menu: string | undefined) => setMenu(menu)}
        />
        <Menu.SubPersonal
          isActive={currentMenu.subPersonal}
          setMenu={() => setMenu("MainMenu")}
        />
        <Menu.SubStyle
          isActive={currentMenu.subStyle}
          setMenu={() => setMenu("MainMenu")}
        />
      </Container>
    </Box>
  );
};

export default SideBar;
