
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Helpdesk from "./pages/helpdesk/Helpdesk";


const App = () => {
  return(
      <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/helpdesk' element={<Helpdesk/>}/>
      </Routes>
      </>
  )
}
export default App;

