import Box from "@mui/material/Box";
import Props from "./props/menuprops";
import "./styles/menu.scss";

export const SubMenuPersonal = ({ isActive, setMenu }: Props) => {
  return (
    <Box className={`${isActive ? "animate-menu-in" : "hidden"}`}>
      <ul className="flex flex-col h-[100vh] justify-center items-center select-none">
        <li onClick={() => setMenu()}>Back</li>
        <li>About Me</li>
        <li>Blogs</li>
      </ul>
    </Box>
  );
};
