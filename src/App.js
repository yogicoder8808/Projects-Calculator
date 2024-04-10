import { useState } from 'react';
import './App.css';
import Clock from './Clock';


 const Calendar = () => {
  const [date, setDate] = useState(new Date())

  const renderCalendar = () => {

    const daysOfWeek =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = date.getMonth()
    const year = date.getFullYear()

    const firstDayOfMonth = new Date(year, month, 1)
    const startingDay = firstDayOfMonth.getDay()

    const daysInMonth = new Date (year, month + 1, 0).getDate()
    const calendar = [];

    let day = 1;

    for(let i=0; i<6; i++){
      const week = [];

      for (let j=0; j<7; j++){
        if(i===0 && j<startingDay) {
          week.push(<td key = {`empty-${j}`}></td>)
        } else if (day <=daysInMonth) {
          week.push (<td key = {day}>{day}</td>)
          day++;
        }
      }
      calendar.push (<tr key={i}>{week}</tr>)
      if (day > daysInMonth) break;
    }

    return (
     <table>
      <thead>
        <tr>
          {daysOfWeek.map (day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>{calendar}</tbody>
     </table>
    )
  }

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth()-1;
      return new Date(prevDate.getFullYear(), prevMonth, 1);
    })
  }

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth()+1;
      return new Date(prevDate.getFullYear(), nextMonth, 1)
    })
  }

  return(
    <div className='container'>
        <Clock />
    <div className='calendar-container'>
      <h2>
        {`${date.getFullYear()} ${date.toLocaleString('default', { month: 'long'})}`}
      </h2>
      <button onClick={handlePrevMonth}>Previous month</button>
      <button onClick={handleNextMonth}>Next Month</button>
      {renderCalendar()}
      </div>
    </div>
  )
}

export default Calendar;


