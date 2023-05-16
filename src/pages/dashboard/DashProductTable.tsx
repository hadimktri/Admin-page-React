const DashProductTable = () => {
    return (
        <div className="col-12 col-lg-6">
            <p className="text-center mt-3 text-dark">Low Inventory Products</p>

            <table className="table table-responsive text-center table-hover table-bordered no_shadow_back_table font_08">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>Group</th>
                        <th>Product</th>
                        <th>Inventory</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        <td>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="ignore" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        <td>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="ignore" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                        <td>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="ignore" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default DashProductTable
