import { useGlobalContext } from "../context";
import logo from "./../images/shopping.png";
const Login = () => {
  const { handleSubmit, password, user, handleChange, handlePassword } =
    useGlobalContext();
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
          <input className='submit_login' type='submit' value='Login' />
          <h5>Forgotten password?</h5>
        </form>
      </main>
    </section>
  );
};
export default Login;
