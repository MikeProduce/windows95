import { ModalLayout } from './ModalLayout.jsx';
import  github from '../images/Microsoft94Icons/github.png'
import  linkld from '../images/Microsoft94Icons/Linkld.png'
import { useWindow } from '../customHook/customHook.jsx';





export const ContactMe = () => {
  const windowName = 'Contact Me!' 
  const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);


    return (
      <div className={`m-1 h-62 w-62 top-0 sm:h-96 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
        <ModalLayout TitleDescription={windowName} addWindowHandler={addWindowHandler} onCloseModal={onCloseModal}>
          <div className='flex'>
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={github} alt={github} />
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={linkld} alt={linkld} />
          </div>
        </ModalLayout>
     </div>
    )
}