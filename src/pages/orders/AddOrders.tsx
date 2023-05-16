import ModalsContainer from "../../components/ModalsContainer";

const AddOrders = () => {
  return (
    <ModalsContainer id="add_order_modal" fullScreen={true} title={"Add Order"}>
      <div className="container">
        <div className="row my-1 justify-content-center">
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              list="cart_list_select"
              placeholder="Choose cart"
            />
            <datalist id="cart_list_select">
              <option value="46 - cart No 1" />
              <option value="58 - cart No 2" />
            </datalist>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Paid Date"
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value="Paid : 5000 $"
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              value=" Discount: 500$ "
              disabled
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Disvount Type"
            />
          </div>
          <div className="col-12"></div>
          <div className="col-12 col-md-10 my-1">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="col-12"></div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <select className="form-control">
              <option value="">Delivery Type</option>
              <option value="1">Express</option>
              <option value="2">Regular</option>
            </select>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="text" className="form-control" placeholder="phone" />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="text" className="form-control" placeholder="email" />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Card Number"
            />
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="text" className="form-control" placeholder="Bank" />
          </div>

          <hr className="mt-3" />
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-1">
              <span className="input-group-text justify-content-center w_15">
                count
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
                count
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
        <div className="btn_box text-center col-12 mt-4">
          <button className="btn btn-primary ">Save</button>
        </div>
      </div>
    </ModalsContainer>
  );
};
export default AddOrders;
