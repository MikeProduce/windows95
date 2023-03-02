export const NavigationModal = ({ isHidden }) => {
    

    return (
      <div className={`absolute bottom-12 bg-grayish border-2 border-t-gray border-l-gray ${isHidden ? '' : 'hidden'}`}>
        <ul className="pl-10 relative">
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Github</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Projects</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Resume</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">About Me</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Technologies</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Suspend</li>
          <li className="hover:bg-navyblue hover:text-white pl-1 pr-5 cursor-pointer font-display text-2xl">Shut Down...</li>
          <li className="absolute inset-y-0 left-0 w-10 bg-darkGray"></li>
        </ul>
      </div>
    );
  };
  //The isHidden prop is used to conditionally add the hidden class to the div element using a ternary operator. 
  //If isHidden is true, the hidden class is added, which will hide the modal. 
  //If isHidden is false, the hidden class is not added, and the modal will be visible.
  