import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
