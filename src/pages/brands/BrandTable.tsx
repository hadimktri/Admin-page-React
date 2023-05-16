const BrandTable = () => {
  return (
    <div>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Details</th>
            <th>Logo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>brand 1</td>
            <td>About the Brand</td>
            <td>
              <img src="/src/assets/images/logo.png" width="50" />
            </td>
            <td>
              <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="Edit Brand "
                data-bs-toggle="modal"
                data-bs-placement="top"
                data-bs-target="#add_brand_modal"
              ></i>
              <i
                className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                title="Delete Brand"
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
        <ul className="pagination    ">
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
    </div>
  );
};

export default BrandTable;
