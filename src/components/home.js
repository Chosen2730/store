import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section id='home'>
      <Navbar />
      <Outlet />
    </section>
  );
};
export default Home;
