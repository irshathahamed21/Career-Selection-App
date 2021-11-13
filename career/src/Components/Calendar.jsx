
import {useState} from "react";
import "./Calendar.css";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useLocation,useHistory } from 'react-router-dom';
function ResultCalendar() {

    const[calDate, setCalDate] = useState(new Date())
    let userResults;
    const location = useLocation();
    let token=location.search
    token=token.substring(1)
    let Rs=location.rs
    let history = useHistory();
    console.log(token,Rs);
    function onChange (calDate) {
        setCalDate(calDate)
    
        // const filteredResults = userResults.filter(result => {
        //     const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
        //     const newCalDateFormat = calDate.toLocaleString().split(",")[0]
        //     return newResultFormat === newCalDateFormat
        // })
        // console.log(filteredResults)
        alert(`Booking succefull done ${calDate}`)
        history.push({
            pathname: '/Paymentir',
            search:token,
            rs:Rs,
            state: {  
              update: true, 
            },
          })


    }

    return (
        <>
        <div className = "result-calendar">
            <Calendar onChange = {onChange}
            value = {calDate}/>

        </div>
        </>
    )


}
export {ResultCalendar}