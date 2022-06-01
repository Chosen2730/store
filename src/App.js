import "./App.css";
import { useGlobalContext } from "./context";
import Login from "./components/login";
import Loading from "./components/loading";
import Home from "./components/home";

function App() {
  const { login, loading, home } = useGlobalContext();
  if (login) {
    return <Login />;
  } else if (loading) {
    return <Loading />;
  } else return <Home />;
}

export default App;
