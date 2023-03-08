import github from '../icons/github.png';
import folder from '../icons/folder.png';
import Aboutme from '../icons/Aboutme.png';
import Resume from '../icons/Resume.png';
import technologies from '../icons/technologies.png';
import shutdown from '../icons/shutdown.png';

export const NavigationModal = ({ isHidden }) => {
  const icons = [
    {
      icon: github,
      label: 'Github',
    },
    {
      icon: folder,
      label: 'Projects',
    },
    {
      icon: Resume,
      label: 'Resume',
    },
    {
      icon: Aboutme,
      label: 'About me',
    },
    {
      icon: technologies,
      label: 'Technologies',
    },
    {
      icon: shutdown,
      label: 'Shut down...',
    },
  ];

  return (
    <div
      className={`absolute bottom-12 bg-grayish border-2 border-t-gray border-l-gray ${
        isHidden ? '' : 'hidden'
      }`}
    >
      <div className="pl-10 relative">
        {icons.map((icon,index) => (
          <button
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
  