import { ModalLayout } from './ModalLayout.jsx';
import { useWindow } from '../customHook/customHook.jsx';
import technologies from '../JSON/Technologies.json'
import { useState } from 'react';





export const TechStack = () => {
    const [tech, setTech] = useState(technologies);
    const technology = tech.Technologies;
    console.log(technology);
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
                        {technology.map((logo, index) => (
                            <div key={index} className=" p-2 justify-center mt-10">
                                <img src={logo} alt="logo" className="h-20" />
                                <p>{logo.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ModalLayout>
        </div>
    );
    
}