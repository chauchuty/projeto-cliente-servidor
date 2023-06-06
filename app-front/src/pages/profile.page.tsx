import { useContext, useEffect } from "react";
import LayoutComponent from "../components/layout/layout.component";
import { useForm } from "react-hook-form";
import User from "../types/user.model";
import UserService from "../services/user.service";
import { AppContext } from "../hooks/app.context";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const context = useContext(AppContext)
    const navigate = useNavigate()
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<User>()

    useEffect(() => {
        UserService.getData(context.token || '')
            .then(response => {
                setValue('name', response.data.name)
                setValue('email', response.data.email)
                setValue('password', response.data.password)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const onSubmit = (user: User) => {
        UserService.update(user, context.token || '')
            .then(response => {
                console.log(response.data)
                alert(response.data.message)
                context.email = response.data.user.email
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <LayoutComponent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome Completo</label>
                    <input {...register("name", { required: true })} type="text" className="form-control" id="name" />
                    {errors.name &&
                        <div className="form-text text-danger">Nome Completo é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register("email", { required: true })} type="email" className="form-control" id="email" />
                    {errors.email &&
                        <div className="form-text text-danger">Email é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input {...register("password", { required: true })} type="text" className="form-control" id="password" />
                    {errors.password &&
                        <div className="form-text text-danger">Senha é requerida!</div>
                    }
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </LayoutComponent>
    )
}

export default ProfilePage