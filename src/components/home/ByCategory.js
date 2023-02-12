const ByCategory = () => {
    const one = "./img/one.png";
    const two = "./img/two.png";
    const three = "./img/three.png";
    return(
        <>
            <div className="row mt-4 ">
            <h4 className="ByCategory lh-base">Shop by Categery</h4>
            </div>
            <div className="row justify-content-center">
                 <div className="col-3  justify-content-center">
                    <img src={one} alt="Logo" className="logo img-fluid" />
                    <div class="card-body">
                     <a href="#" ><h6 class="card-title">Grocery</h6></a>
                    </div>
                </div>
                <div className="col-3 justify-content-center">
                    <img src={two} alt="Logo" className="logo img-fluid" />
                    <div class="card-body">
                     <a href="#" ><h6 class="card-title">Vegetables</h6></a>
                    </div>
                </div>
                <div className="col-3  justify-content-center">
                    <img src={three} alt="Logo" className="logo img-fluid" />
                    <div class="card-body">
                     <a href="#" ><h6 class="card-title">Fruits</h6></a>
                    </div>
                </div>
            </div>
         </>
    );
};

export default ByCategory;