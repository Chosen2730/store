import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Main from "./main";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section id='home'>
      <Navbar />
      <Sidebar />
      <Outlet />
    </section>
  );
};
export default Home;
