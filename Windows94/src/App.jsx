import { StartMenu } from "./Navbar.jsx/StartMenu"
import windows95 from '../icons/windows95.png'


function App() {
 

  return (
    <div className='h-full w-full bg-teal'>
      <img src={windows95} alt="" />
      <StartMenu/>
    </div>
  )
}

export default App
