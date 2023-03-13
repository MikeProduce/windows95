import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';
import { ModalLayout } from './ModalLayout.jsx';
import  projectData from '../JSON/projects.json'



export const ProjectsModal = ({onClose}) => {
    const dispatch = useDispatch();
    const [modalVisibility, setmodalVisibility] = useState('hidden'); // Add state variable
    const {cart} = useSelector((state) => state.cart)
    const [projects, setProjects] = useState(projectData);
    const projectsArr = projects.projects;
    console.log(projectsArr)
    const addToCartHandler = ( ) => {
        const itemObj = { itemName: 'Projects' };
        dispatch(addToCart(itemObj));
        setmodalVisibility('hidden');
    }
    // when the page first loads we see the modal 'Welcome to my page', and whenever we click the minimize button we send this modal to the cart arr 
    // redux where it has the current name of this modal + a boolean value that will determine when the modal should pop up again.
    useEffect(() => {
        const isModalInCart = cart.some((item) => item.itemName === 'Projects');
        if (isModalInCart) {
            const index = cart.findIndex(item => item.itemName === 'Projects');
            // console.log(index);
            setmodalVisibility(cart[index].isHidden ? '' : 'hidden');
        } else return;
        
    }, [cart]);

    const onCloseModal = () => {
        setmodalVisibility('hidden');
        const isModalInCart = cart.some((item) => item.itemName === 'Projects');
        if (isModalInCart) {
          dispatch(removeToCart('Projects'));
        }
      };

      return (
        <div className={`mx-2 h-3/4 w-62 top-24 sm:h-1/2 sm:w-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription="Projects" 
                addToCartHandler={addToCartHandler} 
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