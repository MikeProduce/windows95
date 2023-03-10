import { StartMenu } from './Navbar.jsx/StartMenu'
import { WindowsModal } from "./modals/windowsModal"
import { ProjectsModal } from "./modals/ProjectsModal"


function App() {
 

  return (
    <div className='bg-teal h-screen '>
      <ProjectsModal/>
        <WindowsModal/>
      <StartMenu/>
    </div>
  )
}

export default App
