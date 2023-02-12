import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const GetStarted = () =>{
    const logo = "/img/Logo.png";
    return(
        <>
        <div className="container justify-content-center">
            <div className="row justify-content-center">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="row mt-4 ">
                        <div className="col-12 text-center">
                            <h2 className="main-heading lh-base">SAYLANI WELFARE</h2>
                            <h6 className="sub-heading">ONLINE DISCOUNT STORE</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <button className="Get-Started-btn"> <Link to="/login">Get Started</Link></button>
                </div>
            </div>
        </div>
        </>
    );
};

export default GetStarted;