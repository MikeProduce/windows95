import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx'
import Computer from '../images/Microsoft94Icons/Computer.png'
import Trash from '../images/Microsoft94Icons/trash.png'
import Folder from '../images/Microsoft94Icons/folder.png'



export const UserIcons = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState(''); // Add state variable
    const {cart} = useSelector((state) => state.cart)



    const addToCartHandler = () => {
        const itemObj = { itemName: 'Welcome to my page' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'Welcome to my page');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'Welcome to my page');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
            // console.log(index);
          } else return;
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'Welcome to my page');
        if (isModalInCart) {
          dispatch(removeToCart('Welcome to my page'));
        }
      };

    return (
      <div className='absolute top-5 left-5'>
        <img className='mx-auto h-15' src={Computer} alt={Computer} />
        <p className='text-black font-display text-xl'>My Computer</p>
        <img className='mx-auto h-15 mt-5' src={Trash} alt={Trash} />
        <p className='text-black font-display text-xl text-center'>Bin</p>
        <img className='mx-auto h-15 mt-5' src={Folder} alt={Folder} />
        <p className='text-black font-display text-xl text-center'>New Folder</p>
     </div>
    )
}