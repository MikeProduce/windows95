import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';



export const ProjectsModal = ({onClose}) => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {cart} = useSelector((state) => state.cart)




    const addToCartHandler = ( ) => {
        const itemObj = { itemName: 'Projects' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'Projects');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'Projects');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'Projects');
        if (isModalInCart) {
          dispatch(removeToCart('Projects'));
        }
      };


      


      return (
        <div className={`h-96 w-96 bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <div className="p-.05 flex justify-between bg-navyblue text-white font-display">
                <span className="ml-1 overflow-hidden text-ellipsis whitespace-nowrap">Welcome to my page</span>
                <div className="py-1 h-5 flex items-center whitespace-nowrap">
                    <button onClick={addToCartHandler} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-xl font-bold">_</button>
                    <button onClick={onCloseModal} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-lg font-bold ">X</button>
                </div>
            </div>
            <div className="bg-grayish flex flex-col flex-1 overflow-hidden text-ellipsis">
            <ul className="flex text-black font-display">
                <li className="mx-1 text-sm"><span className="underline">F</span>ile</li>
                <li className="mx-1 text-sm"><span className="underline">E</span>dit</li>
                <li className="mx-1 text-sm"><span className="underline">V</span>iew</li>
                <li className="mx-1 text-sm"><span className="underline">O</span>ptions</li>
                 <li className="mx-1 text-sm"><span className="underline">H</span>elp</li>
             </ul>
                <div className="mx-1 border-2 border-t-darkGray border-b-gray border-r-gray border-l-darkGray">
                </div>
                <div className="h-full flex-1 my-1 overflow-y-auto">
                    <div className="h-full bg-white text-center mx-1 py-2 border-2 border-t-black border-l-black border-r-gray border-b-gray break-words whitespace-normal overflow-y-auto">
                        <h1 className="text-black font-display p-1">Hi im Miguel </h1>
                        <p className="text-black font-display p-1 break-words">DEVELOPER AND DESIGNER</p>
                        <p className="text-black font-display p-1 break-words">I'm fascinated by creative technology, and love to create visually immersive user experiences with code</p>
                        <p className="text-black font-display p-1 break-words">I especially love web + mqwerqwerqewrqweobile development, UI/UX and everything that comes with it!</p>
                    </div>
                </div>
                <div className="font-display mx-1 border-2 border-t-darkGray border-l-darkGray border-r-gray border-b-gray mb-1 text-xl">3 Objects</div>
            </div>
        </div>
    )
}