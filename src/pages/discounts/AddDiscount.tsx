import ModalsContainer from "../../components/ModalsContainer";

const AddDiscount = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_discount_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={true}
        id="add_discount_modal"
        title="Add New Discount code"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Discount Code"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Discount Code
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Discount Code"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Discount Code
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Discount Percentage"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Discount Percentage{" "}
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiry date"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Expiry date
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  list="brandLists"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  For
                </span>
                <datalist id="brandLists">
                  <option value="Product 1" />
                  <option value="Product 2" />
                  <option value="Product 3" />
                </datalist>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Product 1
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Product 2
                </span>
              </div>
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary ">Save</button>
            </div>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};
export default AddDiscount;
