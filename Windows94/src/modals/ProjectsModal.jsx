import {useState} from 'react'
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'
import { useWindow } from '../customHook/customHook.jsx';



export const ProjectsModal = () => {
    const [projects, setProjects] = useState(projectData);
    const projectsArr = projects.projects;
    const windowName = 'Projects' 
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);


      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-3/4 sm:w-11/12 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription={windowName} 
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                <div className='h-full flex flex-col  overflow-y-auto bg-gray'>
                    <h1 className='text-5xl text-center font-display'>Projects</h1>
                    <p className='text-center mb-4 font-display text-2xl'>Things I've Built</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex justify-center font-display mx-5'>
                        {projectsArr.map((project, index) => (
                            <div className='m-5 bg-Very-Light-Gray mt-10 rounded-xl mx-2 border-2 border-black pb-4' key={index}>
                                <img className='rounded-t-xl w-full object-cover' src={project.image} alt={project.image} />
                                <h1 className='text-xl text-center p-4'>{project.title}</h1>
                                <h1 className='text-md px-6 p-4'>{project.description}</h1>
                                <p className='p-4'>Tech Stack: {project.techStack}</p>
                                <a href={project.github} className='mx-2 border-2 border-black py-2 px-4 rounded-md text-sm text-Grayish-Blue hover:scale-110 transition cursor-pointer hover:drop-shadow-xl hover:bg-black hover:text-white'>GitHub Repo</a>
                                <a href={project.liveSite} className='border-2 border-black py-2 px-4 rounded-md text-sm text-Grayish-Blue hover:scale-110 transition cursor-pointer hover:drop-shadow-xl hover:bg-black hover:text-white'>LiveSite</a>
                            </div>
                        ))}
                    </div>
                </div>
            </ModalLayout>
        </div>
    );
    
}