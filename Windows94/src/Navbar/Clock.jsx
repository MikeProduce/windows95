import {useEffect, useState} from 'react'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});

  return(
    <div className="flex my-auto ml-auto border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray font-display text-2xl whitespace-nowrap">
    {timeString}
    </div>

  )
}
