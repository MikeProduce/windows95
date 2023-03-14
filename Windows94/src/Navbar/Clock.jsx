import { useEffect, useState } from 'react';

export const Clock = () => {
  // Initialize state for the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set up an effect to update the time every second
  useEffect(() => {
    // Use setInterval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Return a function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the current time as a string using toLocaleTimeString
  const timeString = currentTime.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});

  // Render the clock component
  return (
    <div className="flex my-auto ml-auto border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray font-display text-2xl whitespace-nowrap">
      {timeString}
    </div>
  );
};

