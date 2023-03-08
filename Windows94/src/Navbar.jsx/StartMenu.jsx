import { useEffect, useState } from 'react';
import windows95 from '../icons/windows95.png';
import { NavigationModal } from '../modals/NavigationModal';
import { useDispatch, useSelector} from 'react-redux';
import { removeToCart,toggleHidden } from '../Redux/cartSlice';


export const StartMenu = () => {
  const dispatch = useDispatch();
  const [isStartMenuClicked, setisStartMenuClicked] = useState(false);
  const {cart} = useSelector((state) => state.cart)
  // console.log(cart);

  const toggleCartItemVisibility = (item) => {
    dispatch(toggleHidden(item.itemName));
  }

  const handleClick = () => {
    setisStartMenuClicked(!isStartMenuClicked);
  };


  const cartButtonStyles = cart.map((currentWindow) => { // we map over the cart and every variable inside contains all itemName along with the isHidden variable that determines 
    //whether the modal is open or not.
    console.log(currentWindow) // also not the way we keep track of the index number is because when the items are insterted into the array they are inserted in a specifc or which is why they match
    const cartButtonStyle = currentWindow.isHidden // we then look at the isHidden variable and determine whether its true or false
      ? 'border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray' //if it is false then we select this style on the button
      : 'border-t-gray border-l-gray flex border-2'; //if it is true we select this one.
    return cartButtonStyle; // this variable will contain the style we need based on the true or false value
  });

    
  
  //when this button is clicked we are changing the border colors to make seem as if the button has some depth
  // the isStartMenuClicked state starts off as false and when we set setisStartMenuClicked(!isStartMenuClicked) it inverts whatever the current
  //boolean value it contains

  return (
    <div className="bg-grayish border-t-2 border-gray pb-0.5 flex fixed bottom-0 w-full">
      <NavigationModal isHidden={isStartMenuClicked} />
        <button
          className={`flex border-2 m-1 px-1 ${
            isStartMenuClicked ? 'border-t-black border-l-black border-b-gray border-r-gray' : 'border-t-gray border-l-gray'
          }`}
        onClick={handleClick}
        >
        <img src={windows95} alt={windows95} />
        <span className="my-auto px-1 font-display text-2xl font-bold">Start</span>
     </button>
      {cart.map((currentWindow, index) => (
        <button onClick={() => toggleCartItemVisibility(currentWindow)} className={`${cartButtonStyles[index]} m-1 px-1 font-display text-center text-2xl`} key={index}>
      {currentWindow.itemName}
        </button>
      ))}
      <div className="my-auto ml-auto border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray font-display text-2xl">
        10:38AM
      </div>
    </div>
  );
};
//// Previously, we were calling the handleItemClick function directly when mapping over the cart array. 
//This caused the function to be called on every render, which triggered a state update and caused 
//an infinite loop. By wrapping the function call in an anonymous arrow function, we are now only calling the function when the button is clicked,
// preventing the infinite loop.
