import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useGlobalContext } from "./../context";
import Main from "./main";
const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <section id='home'>
      <Navbar />
      <Sidebar />
      {loading || <Main />}
    </section>
  );
};
export default Home;
