import {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import navbarIcons from '../JSON/NavbarModals.json'
import { useWindow } from '../customHook/customHook.jsx';





export const MyComputer = () => {
    const dispatch = useDispatch();
    const [modalVisibilitys, setmodalVisibilitys] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)
    const [navIcons, setnavIcons] = useState(navbarIcons);
    const navButtons = navIcons.NavbarModals;
    const windowName = 'My Computer'
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);


    const addWindowHandlerFromMyComputer = (name) => {
        const itemObj = { itemName: name };
        dispatch(addWindow(itemObj));
        setmodalVisibilitys('hidden');
    } // this adds the files inside the my Computer to the array, which is an altertive way to add items to the redux store arr.


      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="My Computer" 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                <div className="grid grid-cols-3 gap-5">
                    {navButtons.map((icon, index) => (
                        <div onClick={() => addWindowHandlerFromMyComputer(icon.title)} key={index} className="flex flex-col items-center font-display">
                        <img src={icon.icon} alt={icon.icon} />
                        {icon.label}
                        </div>
                    ))}
                </div>
            </ModalLayout>
        </div>
    );
    
}