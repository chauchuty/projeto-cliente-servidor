type TableProps = {
    dataSource: {
        columns: Array<String>
        rows: Array<any>
    }
}

function TableComponent(props: TableProps) {
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
                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
    )
}

export default TableComponent