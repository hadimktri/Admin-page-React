const ColorsTable = () => {

    return (
        <>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Color</th>
                        <th>Color code</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Black</td>
                        <td>#000000</td>
                        <td className="p-2">
                            <div className="w-100 h-100 d-block" style={{ background: '#000 ', color: ' #000' }}>...</div>
                        </td>
                        <td>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="Delete Color"
                                data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Red</td>
                        <td >#f44336 </td>
                        <td className="p-2">
                            <div className="w-100 h-100 d-block" style={{ background: '#f44336', color: '#f44336' }}>...</div>
                        </td>
                        <td>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="Delete Color"
                                data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default ColorsTable