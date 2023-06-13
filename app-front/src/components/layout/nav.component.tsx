import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../hooks/app.context"
import { useContext, useState } from "react"
import AppService from "../../services/app.service"

function NavComponent() {
    const context = useContext(AppContext)
    const navigate = useNavigate()
    const [email] = useState(context.email)

    const onLogout = () => {
        if (context.token) {
            AppService.logout(context.token, context.id || -1)
                .then(response => {
                    alert('Desconecado com sucesso!')
                    navigate('/login')
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>


                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{email}</span>
                        <img className="img-profile rounded-circle"
                            src="/img/undraw_profile.svg" />
                    </a>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <Link to="/profile" className="dropdown-item">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Perfil
                        </Link>
   
                        <div className="dropdown-divider"></div>
                        <a onClick={onLogout} className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Sair
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default NavComponent