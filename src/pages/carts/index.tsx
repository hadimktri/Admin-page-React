import CartTable from "./CartTable";
import EditCart from "./EditCart";

const Carts = () => {
  return (
    <div>
      <div
        id="manage_cart_section"
        className="manage_cart_section main_section"
      >
        <h4 className="text-center my-3">Cart Management</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text">Search</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
            <button
              className="btn btn-success d-flex justify-content-center align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#edit_cart_modal"
            >
              <i className="fas fa-plus text-light"></i>
            </button>
          </div>
        </div>
        <CartTable />
      </div>
      <EditCart />
    </div>
  );
};
export default Carts;
