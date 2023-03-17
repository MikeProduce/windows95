import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'
import { useWindow } from '../customHook/customHook.jsx';



export const NewFolder = () => {
    const windowName = 'New Folder' 
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);

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