import { useEffect, useState } from 'react';
import windows95 from '../images/Microsoft94Icons/windows95.png';
import { NavigationModal } from '../modals/NavigationModal';
import { useDispatch, useSelector} from 'react-redux';
import { removeWindow,toggleHidden } from '../Redux/windowSlice';
import {Clock} from './Clock.jsx'


export const StartMenu = () => {
  const dispatch = useDispatch();
  const [isStartMenuClicked, setisStartMenuClicked] = useState(false);
  const {window} = useSelector((state) => state.window)
  // console.log(window);

  const togglewindowItemVisibility = (item) => {
    dispatch(toggleHidden(item.itemName));
  }

  const handleClick = () => {
    setisStartMenuClicked(!isStartMenuClicked);
  };

  const handleModalClick = () => {
    if (isStartMenuClicked) {
      setisStartMenuClicked(false);
    }
  }


  const windowButtonStyles = window.map((currentWindow) => { // we map over the window and every variable inside contains all itemName along with the isHidden variable that determines 
    //whether the modal is open or not.
    console.log(currentWindow) // also the way we keep track of the index number is because when the items are insterted into the array they are inserted in a specifc index which is why they match
    const windowButtonStyle = currentWindow.isHidden // we then look at the isHidden variable and determine whether its true or false
      ? 'border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray' //if it is false then we select this style on the button
      : 'border-t-gray border-l-gray flex border-2'; //if it is true we select this one.
    return windowButtonStyle; // this variable will contain the style we need based on the true or false value
  });

    
  
  //when this button is clicked we are changing the border colors to make seem as if the button has some depth
  // the isStartMenuClicked state starts off as false and when we set setisStartMenuClicked(!isStartMenuClicked) it inverts whatever the current
  //boolean value it contains

  return (
    <div className="bg-grayish border-t-2 border-gray pb-0.5 flex fixed bottom-0 w-full"
    onClick={handleModalClick}>
      <NavigationModal 
        isHidden={isStartMenuClicked} />
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
      {window.map((currentWindow, index) => (
        <button onClick={() => togglewindowItemVisibility(currentWindow)} className={`${windowButtonStyles[index]}  m-1 px-1 font-display text-center text-2xl text-ellipsis whitespace-nowrap truncate`} key={index}>
      {currentWindow.itemName}
        </button>
      ))}
      <Clock/>
    </div>
  );
};
//// Previously, we were calling the handleItemClick function directly when mapping over the window array. 
//This caused the function to be called on every render, which triggered a state update and caused 
//an infinite loop. By wrapping the function call in an anonymous arrow function, we are now only calling the function when the button is clicked,
// preventing the infinite loop.
