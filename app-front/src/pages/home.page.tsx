import { useContext } from "react"
import { AppContext } from "../hooks/app.context"
import AppService from "../services/app.service"
import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    const context = useContext(AppContext)

    const onSubmit = () => {
        if (context.token) {
            AppService.logout(context.token, context.id || -1)
                .then(response => {
                    console.log(response.data)
                    alert('Desconecado com sucesso!')
                    navigate('/login')
                })
                .catch(err => console.error(err))
        }
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
                                                <h1 className="h4 text-gray-900 mb-4">Ocorrências</h1>
                                                <h3 className="mb-4">Você está autenticado!</h3>
                                                <button onClick={onSubmit} className="btn btn-danger btn-block">
                                                    Sair
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 offset-lg-2">
                                        <pre>
                                            {JSON.stringify(context, null, 1)}
                                        </pre>
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

export default HomePage
