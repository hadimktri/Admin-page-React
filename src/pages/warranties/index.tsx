import WarrantyTable from "./WarrantyTable";
import AddWarranty from "./AddWarranty";

const Warranites = () => {
  return (
    <div
      id="manage_warranty_section"
      className="manage_warranty_section main_section"
    >
      <h4 className="text-center my-3">Warranty Management</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="search" />
            <span className="input-group-text">Search</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          <AddWarranty />
        </div>
      </div>

      <WarrantyTable />
    </div>
  );
};

export default Warranites;
