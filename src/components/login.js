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
      <main className='form'>
        <img className='w-40 mx-auto' src={logo} alt='logo' />
        <h1 className='login_header'>Welcome, please Login! </h1>
        <form action='' onSubmit={handleSubmit}>
          <label className='block' htmlFor='name'>
            Username
          </label>
          <input
            className='login_input w-full'
            type='text'
            id='name'
            value={user}
            onChange={handleChange}
            placeholder='Email or Phone'
          />
          <label className='block' htmlFor='password'>
            Password
          </label>
          <input
            className='login_input w-full'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
            id='password'
          />
          <p className='warning'>{warning}</p>
          <input
            className='submit_login w-full rounded-full my-2'
            type='submit'
            value='Login'
          />
          <h5>Forgotten password?</h5>
        </form>
      </main>
    </section>
  );
};
export default Login;
