import { Link } from "react-router-dom"

function SidebarComponent() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">UTFPR</div>
            </a>


            <hr className="sidebar-divider my-0" />


            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/ocurrences" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Ocorrências</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/mineocurrences" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Minhas Ocorrências</span>
                </Link>
            </li>
        </ul>
    )
}

export default SidebarComponent