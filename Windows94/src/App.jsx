import { StartMenu } from './Navbar/StartMenu'
import { WindowsModal } from "./modals/windowsModal"
import { ProjectsModal } from "./modals/ProjectsModal"
import { TechStack } from './modals/TechStack'
import {ContactMe } from './modals/ContactMe'
import { UserIcons } from './UserInterface/UserIcons'
import { MyComputer } from './modals/MyComputer'
import { NewFolder } from './modals/NewFolder'
import { Trash } from './modals/Trash'


function App() {

  return (
    <div className='bg-teal h-screen '>
      <UserIcons/>
      <ProjectsModal/>
      <WindowsModal/>
      <TechStack/>
      <StartMenu/>
      <ContactMe/>
      <MyComputer/>
      <NewFolder/>
      <Trash/>
    </div>
  )
}

export default App
