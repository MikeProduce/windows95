import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';



export const ContactMe = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {cart} = useSelector((state) => state.cart)



    const addToCartHandler = ( ) => {
        const itemObj = { itemName: 'Contact Me!' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'Contact Me!');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'Contact Me!');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
            // console.log(index);
          } else return;
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'Contact Me!');
        if (isModalInCart) {
          dispatch(removeToCart('Contact Me!'));
        }
      };

    return (
      <div className={`m-1 h-62 w-62 top-0 sm:h-96 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
        <ModalLayout TitleDescription="Contact me!" addToCartHandler={addToCartHandler} onCloseModal={onCloseModal}>
          contact me 
        </ModalLayout>
     </div>
    )
}