const Nav = () =>{
    const cart = "/img/Cart.png";
    return(
        
        <>
            <div className="row ">
                <div className="col-6 pt-2">
                    <h2 className="main-heading lh-base">SAYLANI WELFARE</h2>
                     <h6 className="sub-heading">ONLINE DISCOUNT STORE</h6>
                </div>
                <div className="col-6 cart-icon">
                <img src={cart} alt="Logo" className="logo" />
                </div>
            </div>
        </>
    );
};

export default Nav;