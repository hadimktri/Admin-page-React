import ModalsContainer from "../../components/ModalsContainer";

const AddProduct = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={true}
        title={"Add New Product"}
        id={"add_product_modal"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <select
                  //  type="text"
                  className="form-control"
                >
                  <option value="1">Choose product group</option>
                  <option value="1"> roup-1</option>
                </select>
                <span className="input-group-text w_6rem justify-content-center">
                  Group
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Group
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Group
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Product Title"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Title
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Price"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Price
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="weight/Kg"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  weight
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <span className="input-group-text justify-content-center">
                  <i className="fas fa-plus text-success hoverable_text pointer"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter part of brand"
                  list="brandLists"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Brand
                </span>
                <datalist id="brandLists">
                  <option value="Samsung" />
                  <option value="Sony" />
                  <option value="Apple" />
                </datalist>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter part of color"
                  list="colorList"
                />
                <datalist id="colorList">
                  <option value="black" />
                  <option value="White" />
                  <option value="red" />
                </datalist>
                <span className="input-group-text w_6rem justify-content-center">
                  color
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3 d-flex">
                <span className="color_tag chips_elem d-flex justify-content-center align-items-center pb-2">
                  <i className="fas fa-times text-danger hoverable_text"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter title"
                  list="guarantiList"
                />
                <datalist id="guarantiList">
                  <option value="Waranty 1" />
                  <option value="Waranty 2" />
                  <option value="Waranty 3" />
                </datalist>
                <span className="input-group-text w_6rem justify-content-center">
                  Waranty
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-8 mb-3">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Waranty
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Waranty
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <textarea
                  // type="text"
                  className="form-control"
                  placeholder="Details"
                  rows={5}
                ></textarea>
                <span className="input-group-text w_6rem justify-content-center">
                  Details
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
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="About Image"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Image I
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Separate With ( - )"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Tags
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder=" Only Number"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Inventory
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Only Number"
                />
                <span className="input-group-text w_6rem justify-content-center">
                  Discount %
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

export default AddProduct;
