import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [login, showLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [home, setHome] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    setHome(true);
    return () => {
      clearTimeout(timeout);
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && password) {
      showLogin(false);
      setLoading(true);
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser(value);
  };

  const logout = () => {
    setHome(false);
    showLogin(true);
  };

  const showSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        handleChange,
        handlePassword,
        password,
        login,
        loading,
        home,
        handleSubmit,
        logout,
        showSideBar,
        sidebarOpen,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
