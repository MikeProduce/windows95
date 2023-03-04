import { useState } from 'react';
import windows95 from '../icons/windows95.png';
import { NavigationModal } from '../modals/NavigationModal';
import { useDispatch, useSelector} from 'react-redux';
import { removeToCart,toggleHidden } from '../Redux/cartSlice';


export const StartMenu = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const {cart} = useSelector((state) => state.cart)
  const [hidden,setHidden] = useState('')
  // console.log(cart);

  const purchaseHandler = ( ) => {
    const itemName = 'Welcome to my page'
    let itemObj = {itemName};
    dispatch(removeToCart(itemObj));
}

  const handleItemClick = (item) => {
    console.log(item.itemName);
    dispatch(toggleHidden(item.itemName));
  }



  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  //when this button is clicked we are changing the border colors to make seem as if the button has some depth
  // the isClicked state starts off as false and when we set setIsClicked(!isClicked) it inverts whatever the current
  //boolean value it contains

  return (
    <div className="bg-grayish border-t-2 border-gray pb-0.5 flex fixed bottom-0 w-full">
      <NavigationModal isHidden={isClicked} />
        <button
          className={`flex border-2 m-1 px-1 ${
          isClicked ? 'border-t-black border-l-black border-b-gray border-r-gray' : 'border-t-gray border-l-gray'
          }`}
        onClick={handleClick}
        >
        <img src={windows95} alt={windows95} />
        <span className="my-auto px-1 font-display text-2xl font-bold">Start</span>
     </button>
      {cart.map((currentWindow, index) => (
        <button onClick={handleItemClick(currentWindow)} className={`border-t-gray border-l-gray flex border-2 m-1 px-1 font-display text-center text-2xl ${currentWindow.hidden ?  'hidden': ''}`} key={index}>
      {currentWindow.itemName}
        </button>
      ))}
      <div className="my-auto ml-auto border-2 m-1 p-.05 px-1 border-t-black border-l-black border-b-gray border-r-gray font-display text-2xl">
        10:38AM
      </div>
    </div>
  );
};

