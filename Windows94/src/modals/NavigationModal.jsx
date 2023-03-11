import github from '../images/Microsoft94Icons/github.png'
import folder from '../images/Microsoft94Icons/folder.png';
import Aboutme from '../images/Microsoft94Icons/Aboutme.png';
import Resume from '../images/Microsoft94Icons/Resume.png';
import technologies from '../images/Microsoft94Icons/technologies.png';
import shutdown from '../images/Microsoft94Icons/shutdown.png';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeToCart, toggleHidden } from '../Redux/cartSlice.jsx';


export const NavigationModal = ({ isHidden }) => {
  const dispatch = useDispatch();
  
  const icons = [
    {
      icon: github,
      label: 'Github',
      title:'Github'
    },
    {
      icon: folder,
      label: 'Projects',
      title: 'Projects'
    },
    {
      icon: Resume,
      label: 'Resume',
      title: 'Resume'
    },
    {
      icon: Aboutme,
      label: 'About me',
      title: 'Welcome to my page'
    },
    {
      icon: technologies,
      label: 'Technologies',
      title: 'TechStack'
    },
    {
      icon: shutdown,
      label: 'Shut down...',
      title: 'Shut down...',
    },
  ];

  const addToCartHandler = (title) => {
    const itemObj = { itemName: title};
    dispatch(addToCart(itemObj));
} // send the currently clicked button to add to the arr. 

  return (
    <div
      className={`absolute bottom-12 bg-grayish border-2 border-t-gray border-l-gray ${
        isHidden ? '' : 'hidden'
      }`}
    >
      <div className="pl-10 relative">
        {icons.map((icon,index) => (
          <button onClick={() => addToCartHandler(icon.title)}
            className="w-full hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-3xl flex py-2"
            key={index}
          >
            <img className="h-8 my-auto px-2" src={icon.icon} alt={icon.label} />
            {icon.label}
          </button>
        ))}
        <li className="absolute inset-y-0 left-0 w-10 bg-darkGray" />
      </div>
    </div>
  );
};

  //The isHidden prop is used to conditionally add the hidden class to the div element using a ternary operator. 
  //If isHidden is true, the hidden class is added, which will hide the modal. 
  //If isHidden is false, the hidden class is not added, and the modal will be visible.
  


  //notes about how we will intergrate the other modals into this section. 
  // idea - when we click the button we will insert that button into the store(redux);
