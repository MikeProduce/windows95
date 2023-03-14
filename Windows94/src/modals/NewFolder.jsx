import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'



export const NewFolder = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)
    const [projects, setProjects] = useState(projectData);
    const projectsArr = projects.projects;
    console.log(projectsArr)
    const addWindowHandler = ( ) => {
        const itemObj = { itemName: 'New Folder' };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the window arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInwindow = window.some((item) => item.itemName === 'New Folder');
        if (isModalInwindow) {
            const index = window.findIndex(item => item.itemName === 'New Folder');
            // console.log(index);
            setmodalVisibility(window[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [window]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInwindow = window.some((item) => item.itemName === 'New Folder');
        if (isModalInwindow) {
          dispatch(removeWindow('New Folder'));
        }
      };

      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="New Folder" 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                    New Folder
            </ModalLayout>
        </div>
    );
    
}