import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import Boostrap from '../images/icons/bootstrap-5-logo-icon.svg'
import Css from '../images/icons/css-icon.svg'
import Expresss from '../images/icons/express-js-icon.svg'
import git from '../images/icons/git-icon.svg'
import github from '../images/icons/github-icon.svg'
import html from '../images/icons/html-icon.svg'
import Javascript from '../images/icons/Javascript.svg'
import MySQL from '../images/icons/mysql-icon.svg'
import Reacts from '../images/icons/react-js-icon.svg'
import Redux from '../images/icons/redux-icon.svg'
import Tailwind from '../images/icons/tailwind-css-icon.svg'
import VisualStudio from '../images/icons/visual-studio-code-icon.svg'
import { useWindow } from '../customHook/customHook.jsx';





export const TechStack = () => {
    const logos = [html,Css,Javascript,Reacts,Redux,Tailwind,Boostrap,Expresss,MySQL,VisualStudio,git,github]
    const windowName = 'TechStack' 
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);

      return (
        <div className={`mx-2 h-3/4 w-62 top-12 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription={windowName}
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                <div className='h-full flex flex-col  overflow-y-auto'>
                    <h1 className='text-5xl text-center font-display'>TechStack</h1>
                    <p className='text-center mb-4 font-display'>Technologies ive used</p>
                    <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 flex justify-center font-display'>
                        {logos.map((logo, index) => (
                            <div key={index} className=" p-2 flex justify-center mt-10">
                                <img src={logo} alt="logo" className="h-20" />
                            </div>
                        ))}
                    </div>
                </div>
            </ModalLayout>
        </div>
    );
    
}