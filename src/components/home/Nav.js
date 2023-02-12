import { useNavigate } from "react-router";
import { useUserAuth } from "../../contexts/UserAuthContext";

const Nav = () =>{
    const cart = "/img/Cart.png";
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
   
    return(
        
        <>
            <div className="row ">
                <div className="col-6 pt-2">
                    <h2 className="main-heading lh-base">SAYLANI WELFARE</h2>
                     <h6 className="sub-heading">ONLINE DISCOUNT STORE</h6>
                     <p> {user && user.email}</p>
                </div>
                <div className="col-3 cart-icon">
                <img src={cart} alt="Logo" className="logo" />
                </div>
                <div className="col-1 cart-icon">
                    <button onClick={handleLogout}> Logout</button>
                </div>
            </div>
        </>
    );
};

export default Nav;