import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Slogan } from "./components/Slogan/Slogan";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Slogan slogan={"Diseñamos ideas, amplificamos talentos."} />
    </BrowserRouter>
  );
};
