import React, { useState } from "react";

export default function ClockFunc() {

    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(['Mon','Tue','Wed',"thurs"])
  
    let dayslist = days.map(day=><li>{day}</li>);
  return (
    <div>
      <h1>Current Date From functional component: {date.toLocaleString()}</h1>
      <ul>
        {/* {
            days.map(day=><li>{day}</li>)
          }         */}
        {dayslist}
      </ul>
    </div>
  );
}
