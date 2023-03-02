import { useState } from 'react';
import windows95 from '../icons/windows95.png';
import { NavigationModal } from '../modals/NavigationModal';

export const StartMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  //when this button is clicked we are changing the border colors to make seem as if the button has some depth
  // the isClicked state starts off as false and when we set setIsClicked(!isClicked) it inverts whatever the current
  //boolean value it contains

  return (
    <div className="bg-grayish border-t-2 border-gray pb-0.5 flex justify-between fixed bottom-0 w-full">
        <NavigationModal/>
      <button
        className={`flex border-2 m-1 px-1 ${
          isClicked ? 'border-t-black border-l-black border-b-gray border-r-gray' : 'border-t-gray border-l-gray'
        }`}
        onClick={handleClick}
      >
        <img src={windows95} alt={windows95} />
        <span className="my-auto px-1 font-display text-2xl font-bold">Start</span>
      </button>
      <div className="my-auto border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray font-display text-2xl">10:38AM</div>
    </div>
  );
};

