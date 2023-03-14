import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'



export const NewFolder = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {cart} = useSelector((state) => state.cart)
    const [projects, setProjects] = useState(projectData);
    const projectsArr = projects.projects;
    console.log(projectsArr)
    const addToCartHandler = ( ) => {
        const itemObj = { itemName: 'New Folder' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'New Folder');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'New Folder');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'New Folder');
        if (isModalInCart) {
          dispatch(removeToCart('New Folder'));
        }
      };

      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="New Folder" 
                addToCartHandler={addToCartHandler} 
                onCloseModal={onCloseModal}
                >
                    New Folder
            </ModalLayout>
        </div>
    );
    
}