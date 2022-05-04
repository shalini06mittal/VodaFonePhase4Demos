import {
useParams,Link
  } from 'react-router-dom';
  
  const Message = () => {
    const { mid } = useParams();
    console.log(useParams())
    return (
      <>
        <h2>Message: {mid} will be displayed</h2>
  
        <Link to="/messages">Back to Messages</Link>
      </>
    );
  };

  export default Message;