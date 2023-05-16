import ModalsContainer from "../../components/ModalsContainer";

const AddCategory = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullScreen={true}
        title={"Add Product Category"}
        id={"add_product_category_modal"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <select
                  //  type="text"
                  className="form-control"
                >
                  <option value="1">No Parent</option>
                  <option value="1">Group1</option>
                </select>
                <span className="input-group-text w_6rem justify-content-center">
                  Parent Group
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Title"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Title
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <textarea
                  // type="text"
                  className="form-control"
                  placeholder="Descriptions"
                  rows={5}
                ></textarea>
                <span className="input-group-text w_6rem justify-content-center">
                  Descriptions
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
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
            <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
              <div className="form-check form-switch col-5 col-md-2">
                <input
                  className="form-check-input pointer"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />

                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Active Status
                </label>
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
export default AddCategory;
