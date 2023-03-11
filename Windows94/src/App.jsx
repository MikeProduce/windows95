import { StartMenu } from './Navbar/StartMenu'
import { WindowsModal } from "./modals/windowsModal"
import { ProjectsModal } from "./modals/ProjectsModal"
import { TechStack } from './modals/TechStack'


function App() {
 

  return (
    <div className='bg-teal h-screen '>
      <ProjectsModal/>
        <WindowsModal/>
        <TechStack/>
      <StartMenu/>
    </div>
  )
}

export default App
