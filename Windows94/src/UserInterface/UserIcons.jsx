import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice.jsx';
import { UiImages } from '../JSON/UiImages.json';

export const UserIcons = () => {
    const dispatch = useDispatch();
    const icons = UiImages; //getting the data from the JSON file UiImages to display them on the UI

    const handleAddToCart = (itemName) => {
        dispatch(addToCart({ itemName }));
    }

    return (
        <div className='absolute top-5 left-5'>
            {icons.map(({ icon, label }, index) => (
                <div key={index} onClick={() => handleAddToCart(label)}>
                    <img className='mx-auto h-15 mt-4' src={icon} alt={icon} />
                    <p className='text-black font-display text-xl text-center'>{label}</p>  
                </div>
            ))}
        </div>
    );
};
