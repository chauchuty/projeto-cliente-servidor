import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import User from "../types/user.model";
import UserService from "../services/user.service";
import { useEffect } from "react";

function SignupPage() {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<User>();

  useEffect(() => {
    setValue('name', 'Cesar Mauricio')
    setValue('email', 'cesar@gmail.com')
    setValue('password', '010203')
  }, [])

  const onSubmit = (user: User) => {
    UserService.create(user)
      .then(response => {
        alert("Cadastrado com sucesso!")
        navigate("/login")
      })
      .catch(err => {
        alert("Erro ao cadastrar!")
        console.log(err)
      })
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Cadastrar</h1>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)} className="user">
                        <div className="form-group">
                          <input
                            {...register("name", { required: true })}
                            className="form-control"
                            placeholder="Nome Completo" />
                          {errors.name && <small className="text-danger">Nome é requerido</small>}

                        </div>
                        <div className="form-group">
                          <input
                            {...register("email", { required: true })}
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Email" />
                          {errors.email && <small className="text-danger">Email é requerido</small>}

                        </div>
                        <div className="form-group">
                          <input
                            {...register("password", { required: true })}
                            className="form-control"
                            placeholder="Senha" />
                          {errors.password && <small className="text-danger">Password é requerido</small>}
                        </div>

                        <button type="submit" className="btn btn-success btn-block">
                          Cadastrar
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/login" className="small">Já possuí cadastro?</Link>
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

export default SignupPage
