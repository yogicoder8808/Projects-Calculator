import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() =>{
        const fetchTime = async () => {
            try {
                const response = await fetch ('https://worldtimeapi.org/api/ip')
                const data = await response.json();
                setCurrentTime(data.datetime)
            } catch (error) {
                console.error("Error:", error)
            }
        }
        fetchTime();

        const intervalId = setInterval(fetchTime,60000);
        return () => clearInterval(intervalId)
    }, []);

  return (
    <div className='clock'>Current Time: {currentTime}</div>
  )
}

export default Clock;