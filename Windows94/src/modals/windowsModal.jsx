import { ModalLayout } from './ModalLayout.jsx';
import Portfolio from '../images/Microsoft94Icons/thisisme.png'
import { useWindow } from '../customHook/customHook.jsx';




export const WindowsModal = () => {
    const windowName = 'Welcome to my page' 
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);
    



    return (
      <div className={`m-1 h-3/4 w-3/4 top-0 sm:h-3/4 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
        <ModalLayout TitleDescription="Welcome to my page" addWindowHandler={addWindowHandler} onCloseModal={onCloseModal}>
          <h1 className="text-black font-display p-1 text-2xl">Hey, I'm Miguel </h1>
            <img className='mx-auto' src={Portfolio} alt={Portfolio} />
            <p className="text-black font-display p-1 break-words text-2xl">FRONT END DEVELOPER</p>
            <p className="text-black font-display p-1 break-words text-2xl">As a MIS major with a passion for web development, I am committed to creating visually immersive user experiences through code. I enjoy the challenges that come with web and mobile development, and I'm constantly seeking to improve my skills through ongoing learning and project work. </p>
            <p className="text-black font-display p-1 break-words text-2xl">Outside of coding, I am an avid rock climber and skateboarder, and I have a keen interest in exploring different technologies.</p>      
        </ModalLayout>
     </div>
    )
}

