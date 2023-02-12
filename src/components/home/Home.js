import ByCategory from "./ByCategory";
import Nav from "./Nav";
import Search from "./Search";
import Slider from "./Slider";

const Home = () =>{
    return(
        <>
        <div className="container justify-content-center">
        <Nav/>
        <Slider/>
        <Search/>
        <ByCategory/>

        </div>
        </>
    );
};

export default Home;