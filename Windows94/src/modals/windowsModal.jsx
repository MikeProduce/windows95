import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, toggleHidden } from '../Redux/cartSlice.jsx';



export const WindowsModal = ({onClose}) => {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(''); // Add state variable
    const {cart} = useSelector((state) => state.cart)




    const purchaseHandler = ( ) => {
        const itemName = 'Welcome to my page'
        let itemObj = {itemName};
        dispatch(addToCart(itemObj));
        setIsVisible('hidden'); // Update state variable to hide the modal
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        if (cart.length === 0){
            return;
        } else if (cart[0].isHidden == true){
            dispatch(toggleHidden('Welcome to my page'))
            setIsVisible('')
        }  
    },[cart])


    


    return (
        <div className={`h-96 w-96 bg-white border-2 border-l-gray border-t-gray absolute top-32 left-20 border-r-darkGray border-b-darkGray flex flex-col ${isVisible}`}>
            <div className="p-.05 flex justify-between bg-navyblue text-white font-display">
                <span className="ml-1 h-1/2">Welcome to my page</span>
                <div className="py-1 h-5 flex items-center">
                    <button onClick={purchaseHandler} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-xl font-bold">_</button>
                    <button className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-lg font-bold ">X</button>
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
                        <h1 className="text-black font-display p-1">Hi im Miguel </h1>
                        <p className="text-black font-display p-1">DEVELOPER AND DESIGNER</p>
                        <p className="text-black font-display p-1">I'm fascinated by creative technology, and love to create visually immersive user experiences with code</p>
                        <p className="text-black font-display p-1">I especially love web + mobile development, UI/UX and everything that comes with it!</p>
                    </div>
                </div>
                <div className="font-display mx-1 border-2 border-t-darkGray border-l-darkGray border-r-gray border-b-gray mb-1 text-xl">3 Objects</div>
            </div>
        </div>
    )
}

