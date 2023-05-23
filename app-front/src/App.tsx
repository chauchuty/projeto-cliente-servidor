function App() {

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-8 offset-2">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control"
                            id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control"
                            id="exampleInputPassword" placeholder="Senha" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Lembre-me</label>
                          </div>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-block">
                          Login
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Esqueceu sua senha?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Cria uma conta!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
