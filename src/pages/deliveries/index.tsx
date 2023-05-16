import DeliverieTable from "./DeliveriesTable";
import AddDeliveries from "./AddDeliveries";

const Deliveries = () => {
  return (
    <div>
      <div
        id="manage_deliveries_section"
        className="manage_deliveries_section main_section"
      >
        <h4 className="text-center my-3">Shipping Management</h4>
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
              data-bs-target="#add_delivery_modal"
            >
              <i className="fas fa-plus text-light"></i>
            </button>
          </div>
        </div>
        <AddDeliveries />
        <DeliverieTable />
      </div>
    </div>
  );
};
export default Deliveries;
