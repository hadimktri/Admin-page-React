import ModalsContainer from "../../components/ModalsContainer";

const AddBrand = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_brand_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={true}
        title={"Add Brand"}
        id={"add_brand_modal"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand Title"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Brand Title
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand Detail"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  "Brand Detail"
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Image
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image Info"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Image Info
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
export default AddBrand;
