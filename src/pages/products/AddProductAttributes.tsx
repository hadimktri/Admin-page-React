import ModalsContainer from "../../components/ModalsContainer";

export default function AddProductAttributes() {
  return (
    <ModalsContainer
      fullScreen={true}
      title="Add Attribute to Product Category"
      id="add_product_attr_modal"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-3">
              <span className="input-group-text w_6rem justify-content-center">
                Number
              </span>
              <input type="text" className="form-control" placeholder="" />
              <span className="input-group-text w_8rem justify-content-center">
                First Attribute
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-3">
              <span className="input-group-text w_6rem justify-content-center">
                Killo
              </span>
              <input type="text" className="form-control" placeholder="" />
              <span className="input-group-text w_8rem justify-content-center">
                Second Attribute
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-3">
              <span className="input-group-text w_6rem justify-content-center">
                MH
              </span>
              <input type="text" className="form-control" placeholder="" />
              <span className="input-group-text w_8rem justify-content-center">
                Third Attribute
              </span>
            </div>
          </div>
          <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
            <button className="btn btn-primary ">Save</button>
          </div>
        </div>
      </div>
    </ModalsContainer>
  );
}
