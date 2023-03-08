import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';



export const ProjectsModal = ({onClose}) => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState(''); // Add state variable
    const {cart} = useSelector((state) => state.cart)
    console.log(cart);



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
        <div className={`h-96 w-96 bg-white border-2 border-l-gray border-t-gray absolute top-92 right-0 border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <div className="p-.05 flex justify-between bg-navyblue text-white font-display">
                <span className="ml-1 h-1/2">Projects</span>
                <div className="py-1 h-5 flex items-center">
                    <button onClick={addToCartHandler} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-xl font-bold">_</button>
                    <button onClick={onCloseModal} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-lg font-bold ">X</button>
                </div>
            </div>
            <div className="bg-grayish flex flex-col flex-1">
                <ul className="flex text-black font-display">
                    <li className="mx-1"><span className="underline">F</span>ile</li>
                    <li className="mx-1"><span className="underline">E</span>dit</li>
                    <li className="mx-1"><span className="underline">V</span>iew</li>
                    <li className="mx-1"><span className="underline">O</span>ptions</li>
                    <li className="mx-1"><span className="underline">H</span>elp</li>
                </ul>
                <div className="mx-1 border-2 border-t-darkGray border-b-gray border-r-gray border-l-darkGray">
                </div>
                <div className="h-full flex-1 my-1">
                    <div className="h-full bg-white text-center mx-1 py-2 border-2 border-t-black border-l-black border-r-gray border-b-gray">
                        YO THESE ARE MY PROJECTS YO
                    </div>
                </div>
                <div className="font-display mx-1 border-2 border-t-darkGray border-l-darkGray border-r-gray border-b-gray mb-1 text-xl">3 Objects</div>
            </div>
        </div>
    )
}