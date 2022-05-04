import React from 'react';

import {
  Link, Outlet
} from 'react-router-dom';

const Messages = (props) => {
    console.log(props)
    return(
  <div>
    <ul>
    {
        [...Array(5).keys()].map(n => {
            return <li key={n}>
                    <Link to={`${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    }
    </ul>
    <Outlet/>
  </div>)
};

export default Messages;