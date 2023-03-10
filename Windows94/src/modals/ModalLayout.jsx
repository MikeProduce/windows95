import React from 'react';

export const ModalLayout = ({ onCloseModal, addToCartHandler, TitleDescription, children}) => {

    return (
        <>
            <div className="p-.05 flex justify-between bg-navyblue text-white font-display">
                <span className="ml-1 overflow-hidden text-ellipsis">{TitleDescription}</span>
                <div className="py-1 h-5 flex items-center whitespace-nowrap">
                    <button onClick={addToCartHandler} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-xl font-bold">_</button>
                    <button onClick={onCloseModal} className="bg-grayish p-1 mx-1 h-4 text-black border-2 border-t-gray border-l-gray border-r-darkGray border-b-darkGray flex items-center justify-center text-lg font-bold ">X</button>
                </div>
            </div>
            <div className="bg-grayish flex flex-col flex-1 overflow-hidden text-ellipsis">
            <ul className="flex text-black font-display">
                <li className="mx-1 text-sm"><span className="underline">F</span>ile</li>
                <li className="mx-1 text-sm"><span className="underline">E</span>dit</li>
                <li className="mx-1 text-sm"><span className="underline">V</span>iew</li>
                <li className="mx-1 text-sm"><span className="underline">O</span>ptions</li>
                 <li className="mx-1 text-sm"><span className="underline">H</span>elp</li>
             </ul>
                <div className="mx-1 border-2 border-t-darkGray border-b-gray border-r-gray border-l-darkGray"></div>
                <div className="h-full flex-1 my-1 overflow-y-auto">
                    <div className="h-full bg-white text-center mx-1 py-2 border-2 border-t-black border-l-black border-r-gray border-b-gray break-words whitespace-normal overflow-y-auto">
                        {children}
                    </div>
                </div>
                <div className="font-display mx-1 border-2 border-t-darkGray border-l-darkGray border-r-gray border-b-gray mb-1 text-xl">3 Objects</div>
            </div>
            </>
    )
}
