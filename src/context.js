import { createContext, useContext, useState, useEffect } from "react";
const url = "https://fakestoreapi.com/products";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [login, showLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [home, setHome] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const allCategories = [
    "all",
    ...new Set(
      list.map((item) => {
        return item.category;
      })
    ),
  ];
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
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
      setPassword("");
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
    setAmount(0);
    setTotal(0);
    setUser("");
    setSidebarOpen(false);
  };

  const showSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const addProduct = (id, price) => {
    setAmount(amount + 1);
    let newTotal = +(total + price).toFixed(2);
    setTotal(newTotal);
  };

  const getCategory = (e) => {
    const id = e.target.dataset.id;
    if (id === "all") {
      setProducts(list);
      return;
    }

    const newProduct = list.filter((item) => item.category === id);
    setProducts(newProduct);
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
        products,
        amount,
        addProduct,
        total,
        allCategories,
        getCategory,
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
