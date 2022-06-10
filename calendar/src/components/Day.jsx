import React from "react";
import "./Day.css";
import DAYS from "../CalendarData";


function Day({today}){

    console.log([(today%7 ===0 ? 0 : today%7)])
    
    return(
    <div className="Day-Wrapper">
        <h3>
            {(today > 7) ? DAYS[(today%7 ===0 ? 6 : today%7 -1)].name : DAYS[today - 1].name}
            
            
        </h3>
        <span>{today}</span>
    </div>
    )
}



export default Day;