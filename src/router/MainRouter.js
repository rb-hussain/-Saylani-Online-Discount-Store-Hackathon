import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import WelcomeScreen from "../pages/WelcomeScreen";

const MainRouter = () =>{
    return(
        <>
        <Routes>
        <Route path="/" index element={<WelcomeScreen/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>}/>
            {/* {Protected Route} */}
            {/* <Route path="/" element={<ProtectRoute />}>
            <Route path="/" element={<Home/>} />
            </Route> */}
        </Routes>
        </>
        )};
export default MainRouter;