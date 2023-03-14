import { useDispatch} from 'react-redux';
import { addToCart} from '../Redux/cartSlice.jsx'
import Computer from '../images/Microsoft94Icons/Computer.png'
import Trash from '../images/Microsoft94Icons/trash.png'
import Folder from '../images/Microsoft94Icons/folder.png'



export const UserIcons = () => {
    const dispatch = useDispatch();

    const Icons = [
      {
        icon: Computer,
        label: 'My Computer',
      },
      {
        icon: Trash,
        label: 'Trash', 
      },
      {
        icon: Folder,
        label: 'New Folder', 
      },
    ];

    const addToCartHandler = (name) => {
        const itemObj = { itemName: name };
        dispatch(addToCart(itemObj));
    }

    return (
      <div className='absolute top-5 left-5'>
      {
        Icons.map((ui, index) => { return(
          <div key={index} onClick={() => addToCartHandler(ui.label)}>
            <img className='mx-auto h-15 mt-4' src={ui.icon} alt={ui.icon} />
            <p className='text-black font-display text-xl text-center'>{ui.label}</p>  
          </div>
        )
        })
      }
      </div>
    )
}