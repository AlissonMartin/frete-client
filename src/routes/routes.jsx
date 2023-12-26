import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/Signin";
import PrivateRoutes from "../utils/RouterHandler";
import Dashboard from "../pages/user/Dashboard";
import Schedule from "../pages/user/Schedule/Schedule";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element= {<PrivateRoutes/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
      </Route>
      <Route path="/" element={<SignIn />}></Route>
    </Routes>
  )
}

export default MainRoutes