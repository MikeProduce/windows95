import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  github from '../images/Microsoft94Icons/github.png'
import  linkld from '../images/Microsoft94Icons/Linkld.png'




export const ContactMe = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)



    const addWindowHandler = ( ) => {
        const itemObj = { itemName: 'Contact Me!' };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the window arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInwindow = window.some((item) => item.itemName === 'Contact Me!');
        if (isModalInwindow) {
            const index = window.findIndex(item => item.itemName === 'Contact Me!');
            // console.log(index);
            setmodalVisibility(window[index].isHidden ? '' : 'hidden');
            // console.log(index);
          } else return;
    }, [window]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInwindow = window.some((item) => item.itemName === 'Contact Me!');
        if (isModalInwindow) {
          dispatch(removeWindow('Contact Me!'));
        }
      };

    return (
      <div className={`m-1 h-62 w-62 top-0 sm:h-96 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
        <ModalLayout TitleDescription="Contact me!" addWindowHandler={addWindowHandler} onCloseModal={onCloseModal}>
          <div className='flex'>
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={github} alt={github} />
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={linkld} alt={linkld} />
          </div>
        </ModalLayout>
     </div>
    )
}