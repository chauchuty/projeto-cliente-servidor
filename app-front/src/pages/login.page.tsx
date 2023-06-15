import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import AppService from "../services/app.service";
import Access from "../types/access.model";
import { useContext, useEffect } from "react";
import { AppContext } from "../hooks/app.context";

function LoginPage() {
    const context = useContext<Access>(AppContext);
    const navigate = useNavigate();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Access>();

    useEffect(() => {
        setValue('email', 'cesar@gmail.com')
        setValue('password', '010203')
    }, [])

    const onSubmit = (access: Access) => {

        AppService.login(access)
            .then(response => {
                context.id = response.data.id
                context.name = response.data.name
                context.email = response.data.email
                context.token = 'Bearer ' + response.data.token
                console.log(context)
                navigate("/dashboard");
            })
            .catch(err => {
                alert('Usuário ou senha inválido!')
                console.log(err.message)
            })
    }

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
                                                <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)} className="user">
                                                <div className="form-group">
                                                    <input
                                                        {...register("email", { required: true })}
                                                        className="form-control mb-1"
                                                        placeholder="Email"
                                                        autoComplete="off" />
                                                    {errors.email && <small className="text-danger">Email é requerido</small>}

                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        {...register("password", { required: true })}
                                                        className="form-control mb-1"
                                                        placeholder="Password"
                                                        autoComplete="off" />
                                                    {errors.password && <small className="text-danger">Senha é requerida</small>}
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Lembre-me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Login
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Esqueceu sua senha?</a>
                                            </div>
                                            <div className="text-center">
                                                <Link to="/signup" className="small">Criar uma Conta</Link>
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

export default LoginPage
