import ModalsContainer from "../../components/ModalsContainer";

const AddColor = () => {
  return (
    <div>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_color_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        fullScreen={false}
        id="add_color_modal"
        title="Add New Color"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="color"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Color
                </span>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="exampleColorInput" className="form-label">
                Choose Color
              </label>
              <input
                type="color"
                className="form-control form-control-color"
                id="exampleColorInput"
                value="#563d7c"
                title="Choose your color"
              />
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </ModalsContainer>
    </div>
  );
};

export default AddColor;
