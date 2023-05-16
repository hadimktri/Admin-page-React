import ModalsContainer from "../../components/ModalsContainer";

const EditCart = () => {
  return (
    <ModalsContainer
      fullScreen={true}
      title={"Cart details"}
      id={"edit_cart_modal"}
    >
      <div className="container">
        <div className="row my-3 justify-content-center">
          <div className="col-12 col-md-4 col-lg-3 my-1">
            <input
              type="text"
              className="form-control"
              list="customer_list"
              placeholder="Customer Name"
            />
            <datalist id="customer_list">
              <option value="Customer 1" />
              <option value="Customer 2" />
            </datalist>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input
              type="text"
              className="form-control"
              list="product_list"
              placeholder="Product Title"
            />
            <datalist id="product_list">
              <option value="product  1" />
              <option value="product  2" />
            </datalist>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <select className="form-control">
              <option value="">Colors</option>
              <option value="1">Color 1</option>
              <option value="2">Color 2</option>
            </select>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <select className="form-control">
              <option value="">Warranty</option>
              <option value="1"> Warranty 1</option>
              <option value="2"> Warranty 2</option>
            </select>
          </div>
          <div className="col-12 col-md-4 col-lg-2 my-1">
            <input type="number" className="form-control" placeholder="Count" />
          </div>
          <div className="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
            <i
              className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text"
              title="Add Attribute"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            ></i>
          </div>
          <hr className="mt-3" />
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-3">
              <span className="input-group-text justify-content-center w_15">
                Count
              </span>
              <input
                type="number"
                className="form-control text-center w_15"
                placeholder=""
                value="50"
              />
              <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                <i
                  className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip"
                  title="Delete from the cart"
                  data-bs-placement="top"
                ></i>
                product A 2 (100$) (Warranty No-1)
                <i
                  className="fas fa-circle mx-1"
                  style={{ color: " #000" }}
                ></i>
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-3">
              <span className="input-group-text justify-content-center w_15">
                count
              </span>
              <input
                type="number"
                className="form-control text-center w_15"
                placeholder=""
                value="5"
              />
              <span className="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                <i
                  className="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip"
                  title="Delete from the cart"
                  data-bs-placement="top"
                ></i>
                product A 2 (100$) (Warranty No-1)
                <i
                  className="fas fa-circle mx-1"
                  style={{ color: "rgb(236, 16, 16)" }}
                ></i>
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="input-group my-3">
              <span className="input-group-text justify-content-center w-75">
                200,000 $
              </span>
              <span className="input-group-text w-25 text-center">Total</span>
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
export default EditCart;
