import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';




export const Trash = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {cart} = useSelector((state) => state.cart)

    const addToCartHandler = ( ) => {
        const itemObj = { itemName: 'Trash' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'Trash');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'Trash');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'Trash');
        if (isModalInCart) {
          dispatch(removeToCart('Trash'));
        }
      };

      return (
        <div className={`mx-2 h-1/12 top-12 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="Trash" 
                addToCartHandler={addToCartHandler} 
                onCloseModal={onCloseModal}
                >
                    <p className='font-display text-2xl'>My Code</p>
            </ModalLayout>
        </div>
    );
    
}