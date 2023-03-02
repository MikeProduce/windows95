import { StartMenu } from "./Navbar.jsx/StartMenu"
import { WindowsModal } from "./modals/windowsModal"


function App() {
 

  return (
    <div className='bg-teal h-screen'>
      <WindowsModal/>
      <StartMenu/>
    </div>
  )
}

export default App
