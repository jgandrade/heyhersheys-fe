import Box from "@mui/material/Box";
import Props from "./props/menuprops";
import "./styles/menu.scss";

export const MainMenu = ({ isActive, setMenu }: Props) => {
  return (
    <Box className={`${isActive ? "animate-menu-in" : "hidden"}`}>
      <ul className="flex flex-col h-[100vh] justify-center items-center select-none">
        <li>
          <button onClick={() => setMenu("SubPersonal")}>Personal</button>
        </li>
        <li>
          <button onClick={() => setMenu("SubStyle")}>Style</button>
        </li>
        <li>
          <button>Advices</button>
        </li>
      </ul>
    </Box>
  );
};
