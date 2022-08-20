
const Home = (props) => {
      console.log('Home', props);
      return (
            <div className="container">
                  <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
                        <div className="col">
                              <div className="card mb-4 rounded-3 shadow-sm">

                                    <div className="card-body">

                                          <img src="https://image01-in.oneplus.net/ebp/202207/18/1-M00-3D-66-CpgM7mLUy_aAYeC3AAKmTGXhHMM216.png" alt="" className="img-fluid" />
                                          <h1 className="card-title pricing-card-title">$200</h1>
                                          <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={()=>props.addToCartHandler({price: 200})}>Add to cart</button>
                                    </div>
                              </div>
                        </div>
                        <div className="col">
                              <div className="card mb-4 rounded-3 shadow-sm">

                                    <div className="card-body">
                                          <img src="https://image01.oneplus.net/ebp/202111/02/1-M00-2F-6B-rB8bwmGBOlSAAfFmAAHpf3oYVyE439.png" alt="" className="img-fluid" />
                                          <h1 className="card-title pricing-card-title">$200</h1>
                                          <button type="button" className="w-100 btn btn-lg btn-primary">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                        <div className="col">
                              <div className="card mb-4 rounded-3 shadow-sm border-primary">

                                    <div className="card-body">
                                          <img src="https://image01.oneplus.net/ebp/202204/20/1-M00-39-A2-rB8bwmJf88eAG5xxAAL7M_wQ9d8738.png" alt="" className="img-fluid" />
                                          <h1 className="card-title pricing-card-title">$200</h1>
                                          <button type="button" className="w-100 btn btn-lg btn-primary">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      )
}

export default Home