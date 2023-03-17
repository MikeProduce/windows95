import { useDispatch } from 'react-redux';
import { addWindow } from '../Redux/windowSlice.jsx';
import navbarIcons from '../JSON/NavbarModals.json'
import { useState } from 'react';


export const NavigationModal = ({ isHidden }) => {
  const dispatch = useDispatch();
  const [navIcons, setnavIcons] = useState(navbarIcons);
  const navButtons = navIcons.NavbarModals;


  const addWindowHandler = (title) => {
    const itemObj = { itemName: title};
    dispatch(addWindow(itemObj));
} // send the currently clicked button to add to the arr. 

  return (
    <div className={`absolute bottom-12 bg-grayish border-2 border-t-gray border-l-gray ${isHidden ? '' : 'hidden'}`}>
      <div className="pl-10 relative">
        {navButtons.map((icon, index) => (
          <button
            onClick={() => addWindowHandler(icon.title)}
            className="w-full hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-3xl flex py-2"
            key={index}
          >
          <img className="h-8 my-auto px-2" src={icon.icon} alt={icon.label} />
            {icon.label}
          </button>
        ))}
        <div className="absolute inset-y-0 left-0 w-10 bg-darkGray" />
      </div>
    </div>
        );
  };

