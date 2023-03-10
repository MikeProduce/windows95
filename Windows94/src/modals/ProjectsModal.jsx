import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';



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
        <div className={`h-62 w-62 top-96 sm:h-96 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
        <ModalLayout TitleDescription="Projects" addToCartHandler={addToCartHandler} onCloseModal={onCloseModal}>
        <h1 className="text-black font-display p-1">Hi im Miguel </h1>
                 <p className="text-black font-display p-1 break-words">DEVELOPER AND DESIGNER</p>
                 <p className="text-black font-display p-1 break-words">I'm fascinated by creative technology, and love to create visually immersive user experiences with code</p>
                 <p className="text-black font-display p-1 break-words">I especially love web + mobile development, UI/UX and everything that comes with it!</p>
                
     </ModalLayout>
     </div>
    )
}