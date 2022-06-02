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
  const [qty, setQty] = useState(0);

  const getProducts = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
  const checkQty = (n) => {
    if (n < 0) {
      return 0;
    } else return n;
  };
  const addQty = (id) => {
    // const temp = products.map((item) => {
    //   let { rate } = item.rating;
    //   rate = 0;
    //   if (item.id === id) {
    //     return setQty(checkQty(rate + 1));
    //   }
    //   return item;
    // });
  };
  const redQty = (id) => {
    // setQty(checkQty(qty - 1));
  };
  const addProduct = (id, price) => {
    setAmount(amount + 1);
    const newP = products.filter((item) => item.id !== id);
    setProducts(newP);
    setTotal(total + price);
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
        qty,
        setQty,
        addQty,
        redQty,
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
