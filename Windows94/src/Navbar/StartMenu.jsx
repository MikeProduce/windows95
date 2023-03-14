import { useState } from 'react';
import windows95 from '../images/Microsoft94Icons/windows95.png';
import { NavigationModal } from '../modals/NavigationModal';
import { useDispatch, useSelector} from 'react-redux';
import { toggleHidden } from '../Redux/windowSlice';
import {Clock} from './Clock.jsx'


export const StartMenu = () => {
  const dispatch = useDispatch();
  const [isStartMenuClicked, setisStartMenuClicked] = useState(false);
  const {window} = useSelector((state) => state.window)


  const togglewindowItemVisibility = (item) => {
    dispatch(toggleHidden(item.itemName));
  }

  const handleClick = () => {
    setisStartMenuClicked(!isStartMenuClicked);
  };

  const handleModalClick = () => {
    isStartMenuClicked ? setisStartMenuClicked(false) : null;
  }


// Create an array of buttons to represent each window in the state
const windowButtons = window.map((currentWindow, index) => {
  // Determine the appropriate button style based on whether the window is hidden or not
  const windowButtonStyle = currentWindow.isHidden
    ? 'border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray'
    : 'border-t-gray border-l-gray flex border-2';
  // Return the button element with the appropriate style, and the window name as its label
  return (
    <button
      onClick={() => togglewindowItemVisibility(currentWindow)}
      className={`${windowButtonStyle}  m-1 px-1 font-display text-center text-2xl text-ellipsis whitespace-nowrap truncate`}
      key={index}
    >
      {currentWindow.itemName}
    </button>
  );
});

// Render the start menu with the window buttons and clock component
return (
  <div className="bg-grayish border-t-2 border-gray pb-0.5 flex fixed bottom-0 w-full" onClick={handleModalClick}>
    <NavigationModal isHidden={isStartMenuClicked} />
    <div>
      <button
        className={`flex border-2 m-1 px-1 p-.05 w-28 ${
          isStartMenuClicked ? 'border-t-black border-l-black border-b-gray border-r-gray' : 'border-t-gray border-l-gray'
        }`}
        onClick={handleClick}
      >
        <img src={windows95} alt={windows95} />
        <span className="my-auto px-1 font-display text-2xl font-bold ml-1">Start</span>
      </button>
    </div>
    {windowButtons}
    <Clock /> 
  </div>
);

};

