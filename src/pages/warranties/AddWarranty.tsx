import ModalsContainer from "../../components/ModalsContainer";

const AddWarranty = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_warranty_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={true}
        title="Add Warranty"
        id="add_warranty_modal"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Warranty Title
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Warranty detail
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Month"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Warranty time
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
export default AddWarranty;
