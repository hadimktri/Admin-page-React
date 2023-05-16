import ModalsContainer from "../../components/ModalsContainer";

const OrderDetail = () => {
  return (
    <ModalsContainer
      id="order_details_modal"
      fullScreen={true}
      title={"Orders Detail"}
    >
      <div className="container">
        <div className="row my-1 justify-content-center">
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="text" className="form-control" value="Hadi" disabled />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Paid Date"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Paid amount"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Discount amount"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Discount amount"
              disabled
            />
          </div>
          <div className="col-12"></div>
          <div className="col-12 col-md-10 my-1">
            <input
              type="text"
              className="form-control"
              value="Address"
              disabled
            />
          </div>
          <div className="col-12"></div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Delivery Type"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Phone"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Email"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Card Number"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="text" className="form-control" value="Bank" disabled />
          </div>

          <hr className="mt-3" />
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-1">
              <span className="input-group-text justify-content-center w_15">
                Number
              </span>
              <input
                type="number"
                className="form-control text-center w_15"
                placeholder=""
                value="50"
                disabled
              />
              <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                Product 1 (100$) (Waranty No 1)
                <i className="fas fa-circle mx-1" style={{ color: "#000" }}></i>
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-1">
              <span className="input-group-text justify-content-center w_15">
                Number
              </span>
              <input
                type="number"
                className="form-control text-center w_15"
                placeholder=""
                value="5"
                disabled
              />
              <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                Product 1 (100$) (Waranty No 2)
                <i
                  className="fas fa-circle mx-1"
                  style={{ color: "rgb(236, 16, 16)" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ModalsContainer>
  );
};
export default OrderDetail;
