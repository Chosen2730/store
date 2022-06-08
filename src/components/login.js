import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import logo from "./../images/shopping.png";
const Login = () => {
  const [warning, setWarning] = useState("");
  const { password, user, handleChange, handlePassword, setPassword } =
    useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && password.length > 5) {
      navigate("/loading");
      setPassword("");
      setWarning("");
    } else {
      setWarning(
        "Please enter a valid username and password, password must be at least 5 characters long"
      );
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWarning("");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [warning]);
  return (
    <section id='login'>
      <img className='logo' src={logo} alt='logo' />
      <main className='form'>
        <h1 className='login_header'>Welcome, please Login! </h1>
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor='name'>Username</label>
          <input
            className='login_input'
            type='text'
            id='name'
            value={user}
            onChange={handleChange}
            placeholder='Email or Phone'
          />
          <label htmlFor='password'>Password</label>
          <input
            className='login_input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
            id='password'
          />
          <p className='warning'>{warning}</p>
          <input className='submit_login' type='submit' value='Login' />
          <h5>Forgotten password?</h5>
        </form>
      </main>
    </section>
  );
};
export default Login;
