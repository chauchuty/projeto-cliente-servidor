import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../hooks/app.context";
import Ocurrence from "../../types/ocurrence.model";
import LayoutComponent from "../../components/layout/layout.component";
import OccurrenceService from "../../services/occurrence.service";

function NewOcurrencePage() {
    const context = useContext(AppContext)
    const navigate = useNavigate()
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Ocurrence>()

    useEffect(() => {
        
    }, [])


    const onSubmit = (data: any) => {
        OccurrenceService.create(data, context.token || '', context.id || -1)
            .then(response => {
                alert('Cadastrado com sucesso!')
                navigate('/ocurrences')
            })
            .catch(err => {
                alert('Erro ao cadastrar! \n' + err.response.data.message)
            })
    }

    return (
        <LayoutComponent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Data e hora</label>
                    <input {...register("registered_at", { required: true })} type="datetime-local" className="form-control" id="name" />
                    {errors.registered_at &&
                        <div className="form-text text-danger">Data e hora é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Local</label>
                    <input {...register("local", { required: true })} type="text" className="form-control" id="email" />
                    {errors.local &&
                        <div className="form-text text-danger">Local é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Tipo de ocorrência</label>
                    <input {...register("occurrence_type", { required: true })} type="text" className="form-control" id="password" />
                    {errors.occurrence_type &&
                        <div className="form-text text-danger">Tipo de ocorrência é requerida!</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">KM</label>
                    <input {...register("km", { required: true })} type="text" className="form-control" id="password" />
                    {errors.km &&
                        <div className="form-text text-danger">KM é requerida!</div>
                    }
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </LayoutComponent>
    )
}

export default NewOcurrencePage