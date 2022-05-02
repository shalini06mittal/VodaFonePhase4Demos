import React, { useEffect, useState } from "react";

export default function ClockLifeCycleFunctional() {
  const [date, setDate] = useState(new Date());
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setDate(new Date());
  }
  useEffect(()=>{
    console.log('component mounted');
    let count = 0;
    const timerId = setInterval(()=>{
      console.log('timer')
      count++;
      if(count%5==0) setCounter(count);
      tick();
    }, 1000)
    // component unmount
    return ()=>{
      console.log('component unmounted')
      clearInterval(timerId)
    }
  },[counter])
  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
