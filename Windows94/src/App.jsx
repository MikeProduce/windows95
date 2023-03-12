import { StartMenu } from './Navbar/StartMenu'
import { WindowsModal } from "./modals/windowsModal"
import { ProjectsModal } from "./modals/ProjectsModal"
import { TechStack } from './modals/TechStack'
import {InternetModal } from './modals/Internet'

function App() {
 

  return (
    <div className='bg-teal h-screen '>
      <ProjectsModal/>
      <WindowsModal/>
      <TechStack/>
      <StartMenu/>
      < InternetModal />
    </div>
  )
}

export default App
