import AddDiscount from "./AddDiscount";
import DiscountTable from "./DiscountTable";
const Discounts = () => {
  return (
    <div
      id="manage_discount_section"
      className="manage_discount_section main_section"
    >
      <h4 className="text-center my-3">Discount codes Management</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="search" />
            <span className="input-group-text">Search</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          <AddDiscount />
        </div>
      </div>
      <DiscountTable />
    </div>
  );
};
export default Discounts;
