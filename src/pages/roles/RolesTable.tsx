const RolesTable = () => {
  return (
    <>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Details</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td> role No 1</td>
            <td>descriptions about the role</td>
            <td>
              <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Active
                </label>
                <input
                  className="form-check-input pointer mx-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
            <td>
              <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="edit role"
                data-bs-toggle="modal"
                data-bs-placement="top"
                data-bs-target="#add_role_modal"
              ></i>
              <i
                className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                title="delete role"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default RolesTable;
