import { StartMenu } from './Navbar/StartMenu'
import { WindowsModal } from "./modals/windowsModal"
import { ProjectsModal } from "./modals/ProjectsModal"
import { TechStack } from './modals/TechStack'
import {ContactMe } from './modals/ContactMe'
import { UserIcons } from './UserInterface/UserIcons'

function App() {
 

  return (
    <div className='bg-teal h-screen '>
       <UserIcons/>
      <ProjectsModal/>
      <WindowsModal/>
      <TechStack/>
      <StartMenu/>
      < ContactMe />
    </div>
  )
}

export default App
