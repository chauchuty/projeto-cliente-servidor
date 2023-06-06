import { useEffect, useState } from "react";
import LayoutComponent from "../components/layout/layout.component";
import TableComponent from "../components/shared/table.component";
import OcurrenceService from "../services/ocurrence.service";

function OcurrencePages() {
    const [dataTable, setDataTable] = useState([])

    useEffect(() => {
        OcurrenceService.getAll()
            .then((response) => {
                setDataTable(response.data.map((d: any) => {
                    return {
                        id: d.id,
                        register_at: d.registered_at,
                        local: d.local,
                        ocurrence_type: d.occurence_type,
                        km: d.km,
                        user_id: d.user_id
                    }
                }))
            })
            .catch(err => alert(err));
    }, [])

    return (
        <LayoutComponent>
            <TableComponent dataSource={{
                columns: ['#', 'Registrado em', 'Local', 'Tipo', 'Km', 'Usuário'],
                rows: dataTable
            }} />
        </LayoutComponent>
    )
}

export default OcurrencePages