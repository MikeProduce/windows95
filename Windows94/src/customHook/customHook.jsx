import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWindow, removeWindow } from '../Redux/windowSlice.jsx';

export const useWindow = (windowName) => {
  const dispatch = useDispatch();
  const [modalVisibility, setModalVisibility] = useState('hidden');
  const { window } = useSelector((state) => state.window);

  const addWindowHandler = () => {
    const itemObj = { itemName: windowName };
    dispatch(addWindow(itemObj));
    setModalVisibility('hidden');
  };

  useEffect(() => {
    const windowObj = window.find((item) => item.itemName === windowName);
    windowObj ? setModalVisibility(windowObj.isHidden ? '' : 'hidden') : null;
  }, [window, windowName]);

  const onCloseModal = () => {
    setModalVisibility('hidden');
    const isModalInWindow = window.some((item) => item.itemName === windowName);
    isModalInWindow ? dispatch(removeWindow(windowName)) : null;
  };

  return {
    addWindowHandler,
    onCloseModal,
    modalVisibility,
  };
};