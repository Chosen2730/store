import "./App.css";
import Login from "./components/login";
import Loading from "./components/loading";
import Home from "./components/home";
import Error from "./components/error";
import Main from "./components/main";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";

const url = "https://fakestoreapi.com/products";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    let { total, amount } = cartItem.reduce(
      (total, item) => {
        const { num, price } = item;
        const itemPrice = num * price;
        total.total += itemPrice;
        total.amount += num;
        return total;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = +total.toFixed(2);
    setTotal(total);
    setAmount(amount);
  }, [cartItem]);

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUser(value);
  };

  const logout = () => {
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

  const addProduct = (id, price, num, setNum) => {
    let newTotal = +(total + price).toFixed(2);
    setTotal(newTotal);
    products.map((item) => {
      if (item.id == id) {
        const { description, id, title, price } = item;
        const newCartItem = { description, title, id, price, num };
        setCartItem([...cartItem, newCartItem]);
      }
    });
    setNum(0);
  };

  const getCategory = (e) => {
    const id = e.target.dataset.id;
    if (id === "all") {
      setProducts(list);
      return;
    }
    const newProduct = list.filter((item) => item.category === id);
    setProducts(newProduct);
    setSidebarOpen(false);
  };

  const inputHandler = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filteredProducts = list.filter((item) => {
      const title = item.title.toLowerCase();
      return title.includes(searchTerm);
    });
    setProducts(filteredProducts);
  };

  const deleteItem = (id) => {
    const newCart = cartItem.filter((item) => item.id !== id);
    setCartItem(newCart);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        handleChange,
        handlePassword,
        password,
        loading,
        setPassword,
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
        setCartItem,
        inputHandler,
        searchTerm,
        cartItem,
        deleteItem,
      }}
    >
      {children}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='loading' element={<Loading />} />
          <Route path='home' element={<Home />}>
            <Route index element={<Main />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
