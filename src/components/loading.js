import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../images/loading.gif";
// import { Link } from "react-router-dom";
const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className='loading'>
      <img src={loading} alt='' />
      <h3>Please hold on while we fetch your products</h3>
      {/* <Link to='*'>Home</Link> */}
    </div>
  );
};
export default Loading;
