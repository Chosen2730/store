import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1>The page you are looking for does not exist</h1>
      <Link to='/'>Home</Link>
    </>
  );
};
export default Error;
