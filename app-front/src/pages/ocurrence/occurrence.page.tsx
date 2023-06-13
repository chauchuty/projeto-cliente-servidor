import { useContext, useEffect, useState } from "react";
import LayoutComponent from "../../components/layout/layout.component";
import TableComponent from "../../components/shared/table.component";
import OcurrenceService from "../../services/occurrence.service";
import { Link } from "react-router-dom";
import { AppContext } from "../../hooks/app.context";

function OcurrencePages() {
    const context = useContext(AppContext)
    const [dataTable, setDataTable] = useState([])

    useEffect(() => {
        OcurrenceService.getAll(context.token || '')
            .then((response) => {
                setDataTable(response.data.map((d: any) => {
                    return {
                        id: d.id,
                        register_at: d.registered_at,
                        local: d.local,
                        ocurrence_type: d.occurrence_type,
                        km: d.km,
                        user_id: d.user_id
                    }
                }))
            })
            .catch(err => alert(err));
    }, [])

    return (
        <LayoutComponent>
            <Link to="/ocurrences/new" className="btn btn-primary float-right">Nova ocorrência</Link>
            <TableComponent dataSource={{
                columns: ['#', 'Registrado em', 'Local', 'Tipo', 'Km', 'Usuário'],
                rows: dataTable
            }} />
        </LayoutComponent>
    )
}

export default OcurrencePages