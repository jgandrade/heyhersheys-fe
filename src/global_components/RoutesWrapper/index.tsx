import { Routes, Route } from "react-router-dom";
import PAGE from "../../pages/index";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<PAGE.Home />} />
    </Routes>
  );
};

export default RoutesWrapper;
