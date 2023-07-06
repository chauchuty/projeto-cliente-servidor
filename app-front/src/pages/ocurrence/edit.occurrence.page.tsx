import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../../hooks/app.context";
import Ocurrence from "../../types/ocurrence.model";
import LayoutComponent from "../../components/layout/layout.component";
import OccurrenceService from "../../services/occurrence.service";

function EditOccurencePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const context = useContext(AppContext)
    const currentDateTime = new Date().toISOString().slice(0, 16)
    const navigate = useNavigate()
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Ocurrence>()
    const [options, setOptions] = useState([] as any[])

    useEffect(() => {
        
        setValue('local', searchParams.get('local') || '')
        setValue('occurrence_type', Number(searchParams.get('occurrence_type')) || 1)
        setValue('km', Number(searchParams.get('km')) || 1)
        setOptions([
            { value: '1', label: 'Atropelamento' },
            { value: '2', label: 'Deslizamento' },
            { value: '3', label: 'Colisão Frontal' },
            { value: '4', label: 'Capotagem' },
            { value: '5', label: 'Saída da Pista' },
            { value: '6', label: 'Batida em objeto fixo' },
            { value: '7', label: 'Veículo avariado' },
            { value: '8', label: 'Colisão com motocicletas' },
            { value: '9', label: 'Colisão no mesmo sentido ou transversal' },
            { value: '10', label: 'Construção' },
        ])
    }, [])


    const onSubmit = (data: any) => {
        OccurrenceService.update(data, context.token || '', Number(searchParams.get('id')), context.id || -1)
            .then(response => {
                alert('Atualizado com sucesso!')
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
                    <input {...register("registered_at", { required: true })} type="datetime-local" className="form-control" id="name" max={currentDateTime} />
                    {errors.registered_at &&
                        <div className="form-text text-danger">Data e hora é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Local</label>
                    <input {...register("local", { required: true })} type="text" className="form-control" id="email" />
                    {errors.local &&
                        <div className="form-text text-danger">Local é requerido!</div>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de Ocorrência</label>

                    <select {...register("occurrence_type", { required: true })} className="form-control form-select mb-3" aria-label="Default select example">
                        {
                            options.map((o, i) => {
                                return (
                                    <option key={i} value={++i}>{o.label}</option>
                                )
                            })
                        }
                    </select>
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

export default EditOccurencePage