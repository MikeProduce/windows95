import { useDispatch } from 'react-redux';
import { addWindow } from '../Redux/windowSlice.jsx';
import { UiImages } from '../JSON/UiImages.json';

export const UserIcons = () => {
    const dispatch = useDispatch();
    const icons = UiImages; //getting the data from the JSON file UiImages to display them on the UI

    const handleaddWindow = (itemName) => {
        dispatch(addWindow({ itemName }));
    }

    return (
        <div className='absolute top-5 left-5'>
            {icons.map(({ icon, label }, index) => (
                <div key={index} onClick={() => handleaddWindow(label)}>
                    <img className='mx-auto h-15 mt-4' src={icon} alt={icon} />
                    <p className='text-black font-display text-xl text-center'>{label}</p>  
                </div>
            ))}
        </div>
    );
};
