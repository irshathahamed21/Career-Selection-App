
import {useState} from "react";
import "./Calendar.css";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function ResultCalendar() {

    const[calDate, setCalDate] = useState(new Date())
    let userResults;

    function onChange (calDate) {
        setCalDate(calDate)
    
        const filteredResults = userResults.filter(result => {
            const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
            const newCalDateFormat = calDate.toLocaleString().split(",")[0]
            return newResultFormat === newCalDateFormat
        })
        console.log(filteredResults)
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