import ModalsContainer from "../../components/ModalsContainer";

const AddDeliveries = () => {
  return (
    <ModalsContainer
      fullScreen={true}
      id="add_delivery_modal"
      title="Add Delivery methode"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="input-group my-3">
              <input type="text" className="form-control" placeholder="" />
              <span className="input-group-text w_8rem justify-content-center">
                Title
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group my-3">
              <input type="number" className="form-control" placeholder="$" />
              <span className="input-group-text w_8rem justify-content-center">
                Cost
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Only Number"
              />
              <span className="input-group-text w_8rem justify-content-center">
                Time of shiping
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group my-3">
              <input type="text" className="form-control" placeholder="" />
              <span className="input-group-text w_8rem justify-content-center">
                {" "}
                Shipping Unit
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
};
export default AddDeliveries;
