import { ModalLayout } from './ModalLayout.jsx';
import github from '../images/Microsoft94Icons/github.png'
import linkld from '../images/Microsoft94Icons/Linkld.png'
import resume from '../images/Microsoft94Icons/Resume.png'
import { useWindow } from '../customHook/customHook.jsx';





export const ContactMe = () => {
  const windowName = 'Contact Me!'
  const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);


  return (
    <div className={`m-1 h-62 w-62 top-0 sm:h-96 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
      <ModalLayout TitleDescription={windowName} addWindowHandler={addWindowHandler} onCloseModal={onCloseModal}>
        <div className='flex'>
          <a href="https://github.com/MikeProduce" target="_blank">
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={github} alt={github} />
          </a>
          <a href="https://www.linkedin.com/in/miguel-gomez1994/" target="_blank">
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={linkld} alt={linkld} />
          </a>
          <a class="nav-link" href="https://1drv.ms/b/s!AtsVEnMwMndzlKJGvUA-fVVIF6Nr0w?e=gv5e8T">
            <img className='h-12 m-5 hover:scale-110 cursor-pointer hover:drop-shadow-xl' src={resume} alt={resume} />
          </a>
        </div>
      </ModalLayout>
    </div>
  )
}