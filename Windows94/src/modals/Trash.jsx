import { ModalLayout } from './ModalLayout.jsx';
import { useWindow } from '../customHook/customHook.jsx';




export const Trash = () => {
    const windowName = 'Trash'
    const { addWindowHandler, onCloseModal, modalVisibility } = useWindow(windowName);


      return (
        <div className={`mx-2 h-1/12 top-12 absolute bg-white border-2 border-l-gray border-t-gray border-r-darkGray border-b-darkGray flex flex-col ${modalVisibility}`}>
            <ModalLayout 
                TitleDescription={windowName}
                addWindowHandler={addWindowHandler} 
                onCloseModal={onCloseModal}
                >
                    <p className='font-display text-2xl'>My Code</p>
            </ModalLayout>
        </div>
    );
    
}