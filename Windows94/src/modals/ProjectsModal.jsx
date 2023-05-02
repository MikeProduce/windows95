import { useState } from 'react'
import { ModalLayout } from './ModalLayout.jsx';
import projectData from '../JSON/projects.json'
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
                <div className="h-full flex flex-col overflow-y-auto px-10 py-10 font-display">
                    <h1 className="text-5xl text-center font-bold text-gray-100 mt-8 mb-4">My Projects</h1>
                    <p className="text-2xl text-center font-medium text-gray-100">Things I've Built</p>
                    <p className="text-md text-center font-medium text-gray-100 mb-8">All of these projects are some of the things ive made to have fun and experiment with technology</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mx-auto">
                        {projectsArr.map((project, index) => (
                            <div className="bg-gray-100 shadow-lg overflow-hidden border-2" key={index}>
                                <img className="h-64 w-full object-cover" src={project.image} alt={project.image} />
                                <div className="p-6 ">
                                    <h2 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h2>
                                    <p className="text-md text-gray-100 mb-4">{project.description}</p>
                                    <p className="text-sm text-gray-100 mb-2">Tech Stack: {project.techStack}</p>
                                    <div className="flex justify-between">
                                        <a href={project.github} className="bg-gray-300 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-md text-sm text-gray-800 cursor-pointer">
                                            <span>GitHub Repo</span>
                                        </a>
                                        {
                                            project.liveSite === "" ? <div className="bg-gray-300 py-2 px-4 rounded-md text-sm text-gray-800">
                                                no link exists </div> :
                                                <a href={project.liveSite} className="bg-gray-300 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-md text-sm text-gray-800 cursor-pointer">
                                                    <span>LiveSite</span>
                                                </a>
                                        }

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </ModalLayout>
        </div>
    );

}