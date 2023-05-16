import AddOrders from "./AddOrders";
import OrderTable from "./OrderTable";
import OrderDetail from "./OrderDetail";

const Orders = () => {
  return (
    <div>
      <div
        id="manage_orders_section"
        className="manage_orders_section main_section    "
      >
        <h4 className="text-center my-3">Order Management</h4>
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
              data-bs-target="#add_order_modal"
            >
              <i className="fas fa-plus text-light"></i>
            </button>
          </div>
          <AddOrders />
          <OrderTable />
          <OrderDetail />
        </div>
      </div>
    </div>
  );
};
export default Orders;
