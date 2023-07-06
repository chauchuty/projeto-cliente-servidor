import { Link, useNavigate } from "react-router-dom"
import OccurrenceService from "../../services/occurrence.service"
import { useContext } from "react"
import { AppContext } from "../../hooks/app.context"

type TableProps = {
    dataSource: {
        columns: Array<String>
        rows: Array<any>
    }
    hasButton?: boolean
}

function TableComponent(props: TableProps) {
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const onDelete = (id: number) => {
        OccurrenceService.delete(context.token || '', id)
            .then((response) => {
                alert('Deletado com sucesso!')
                navigate('/ocurrences')
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        props.dataSource.columns.map((column, index) => {
                            return <th key={index}>{column}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.dataSource.rows.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {
                                    Object.entries(row).map((column: any, columnIndex: number) => {
                                        return <td key={columnIndex}>{column[1]}</td>;
                                    })

                                }
                                {
                                    props.hasButton && (
                                        <td>
                                            <Link
                                                to={`/ocurrences/edit?registered_at=${row.register_at}&local=${row.local}&occurrence_type=${row.ocurrence_type}&km=${row.km}&user_id=${row.user_id}&id=${row.id}`}
                                                className="small">Editar</Link>
                                            <Link to="#"
                                                onClick={() => onDelete(row.id)}
                                                className="ml-3 text-danger  small">Deletar</Link>
                                        </td>
                                    )
                                }

                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
    )
}

export default TableComponent