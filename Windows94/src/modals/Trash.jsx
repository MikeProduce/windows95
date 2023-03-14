import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';




export const Trash = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)

    const addWindowHandler = ( ) => {
        const itemObj = { itemName: 'Trash' };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the window arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInwindow = window.some((item) => item.itemName === 'Trash');
        if (isModalInwindow) {
            const index = window.findIndex(item => item.itemName === 'Trash');
            // console.log(index);
            setmodalVisibility(window[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [window]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInwindow = window.some((item) => item.itemName === 'Trash');
        if (isModalInwindow) {
          dispatch(removeWindow('Trash'));
        }
      };

      return (
        <div className={`mx-2 h-1/12 top-12 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="Trash" 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                    <p className='font-display text-2xl'>My Code</p>
            </ModalLayout>
        </div>
    );
    
}