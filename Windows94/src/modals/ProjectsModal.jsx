import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addWindow, removeWindow, toggleHidden } from '../Redux/windowSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'



export const ProjectsModal = ({onClose}) => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {window} = useSelector((state) => state.window)
    const [projects, setProjects] = useState(projectData);
    const projectsArr = projects.projects;
    console.log(projects)
    const addWindowHandler = ( ) => {
        const itemObj = { itemName: 'Projects' };
        dispatch(addWindow(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the window arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInwindow = window.some((item) => item.itemName === 'Projects');
        if (isModalInwindow) {
            const index = window.findIndex(item => item.itemName === 'Projects');
            // console.log(index);
            setmodalVisibility(window[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [window]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInwindow = window.some((item) => item.itemName === 'Projects');
        if (isModalInwindow) {
          dispatch(removeWindow('Projects'));
        }
      };

      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="Projects" 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                <div className='h-full flex flex-col  overflow-y-auto bg-gray'>
                    <h1 className='text-5xl text-center font-display'>Projects</h1>
                    <p className='text-center mb-4 font-display'>Things I've Built</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex justify-center font-display mx-5'>
                        {projectsArr.map((project, index) => (
                            <div className='m-5 bg-Very-Light-Gray mt-10 rounded-xl transition hover:scale-110 cursor-pointer hover:drop-shadow-xl' key={index}>
                                <img className='rounded-t-xl w-full object-cover' src={project.image} alt={project.image} />
                                <h1 className='text-xl text-center p-4'>{project.title}</h1>
                                <h1 className='text-md px-6 p-4'>{project.description}</h1>
                                <p className='p-4'>Tech Stack: {project.techStack}</p>
                                <a href={project.github} className='p-4 text-sm text-Grayish-Blue'>GitHub Repo</a>
                                <a href={project.liveSite} className='p-4  text-sm text-Grayish-Blue'>LiveSite</a>
                            </div>
                        ))}
                    </div>
                </div>
            </ModalLayout>
        </div>
    );
    
}