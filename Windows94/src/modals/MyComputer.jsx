import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import folder from '../images/Microsoft94Icons/folder.png';
import AboutMe from '../images/Microsoft94Icons/AboutMe.png'
import Resume from '../images/Microsoft94Icons/Resume.png';
import Project from '../images/Microsoft94Icons/project.png';



export const MyComputer = () => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)

      
  const icons = [
    {
      icon: AboutMe,
      label: 'Contact Me!',
      title:'Contact Me!',
    },
    {
      icon: Project,
      label: 'Projects',
      title: 'Projects',   
    },
    {
      icon: Resume,
      label: 'Resume',
      title: 'Resume',  
    },
    {
      icon: AboutMe,
      label: 'About me',
      title: 'Welcome to my page'    
    },
    {
      icon: folder,
      label: 'Technologies',
      title: 'TechStack',    
    },
  ];

    const addWindowHandlerFromMyComputer = (name) => {
        console.log(name);
        const itemObj = { itemName: name };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    const addWindowHandler = () => {
        console.log('My Computer');
        const itemObj = { itemName: 'My Computer' };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the window arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInwindow = window.some((item) => item.itemName === 'My Computer');
        if (isModalInwindow) {
            const index = window.findIndex(item => item.itemName === 'My Computer');
            // console.log(index);
            setmodalVisibility(window[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [window]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInwindow = window.some((item) => item.itemName === 'My Computer');
        if (isModalInwindow) {
          dispatch(removeWindow('My Computer'));
        }
      };

      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="My Computer" 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                <div className="grid grid-cols-3 gap-5">
                    {icons.map((icon, index) => (
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