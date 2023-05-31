import { Box, Container } from "@mui/material";
import "./styles/SideBar.scss";

interface Props {
  isActive: boolean;
}

const SideBar = ({ isActive }: Props) => {
  return (
    <Box className={`sidebar-navigational-bar ${isActive && "active-sidebar"}`}>
      <Container>
        <ul className="list-links flex flex-col h-[100vh] justify-center items-center select-none">
          <li>About Me</li>
          <li>Blogs</li>
        </ul>
      </Container>
    </Box>
  );
};

export default SideBar;
