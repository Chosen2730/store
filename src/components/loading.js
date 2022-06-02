import loading from "../images/loading.gif";
const Loading = () => {
  return (
    <div className='loading'>
      <img src={loading} alt='' />
      <h3>Please hold on while we fetch your products</h3>
    </div>
  );
};
export default Loading;
