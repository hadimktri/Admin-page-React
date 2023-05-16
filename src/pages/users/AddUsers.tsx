import ModalsContainer from "../../components/ModalsContainer";

const AddUsers = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_user_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer id="add_user_modal" fullScreen={true} title="Add User">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  First Name
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Last NAme
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <input type="number" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  SIN No
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Only Numbers"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Phone Number
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Like:(email@yourhost.com)"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Email
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <span className="input-group-text justify-content-center pointer">
                  <i className="fas fa-eye"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder=""
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Passswrd
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 row px-0 my-3">
              <label> Date Of Birth:</label>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value=""> Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Day
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value="">Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Month
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value="">Choose</option>
                    <option value="1">1368</option>
                    <option value="1">1300</option>
                    <option value="2">1301</option>
                    <option value="3">1302</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Year
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8 row px-0 my-3">
              <label> date of registration:</label>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value="">Choose </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Day
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value="">choose </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Month
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <select className="form-control">
                    <option value="">choose</option>
                    <option value="1">1400</option>
                    <option value="1">1399</option>
                    <option value="2">1398</option>
                    <option value="3">1397</option>
                  </select>
                  <span className="input-group-text w_8rem justify-content-center">
                    Year
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
              <div className="input-group my-1">
                <select className="form-control">
                  <option value="1">male</option>
                  <option value="1">femail</option>
                  <option value="2">Not mentiond</option>
                </select>
                <span className="input-group-text w_8rem justify-content-center">
                  Gender
                </span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8 row px-0 mt-3">
              <label>Address:</label>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <input type="text" className="form-control" placeholder="" />
                  <span className="input-group-text w_8rem justify-content-center">
                    Country
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <input type="text" className="form-control" placeholder="" />
                  <span className="input-group-text w_8rem justify-content-center">
                    Province
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group my-1">
                  <input type="text" className="form-control" placeholder="" />
                  <span className="input-group-text w_8rem justify-content-center">
                    شهر
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 mb-3">
              <div className="input-group my-1">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Asress
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="input-group my-1">
              <input type="file" className="form-control" placeholder="Image" />
              <span className="input-group-text justify-content-center">
                Image
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8 my-1">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder=""
                list="roleLists"
              />
              <span className="input-group-text w_8rem justify-content-center">
                {" "}
                Rols
              </span>
              <datalist id="roleLists">
                <option value="Role no Role no 1" />
                <option value="Role no Role no 2" />
                <option value="Role no Role no 3" />
              </datalist>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <span className="chips_elem">
                <i className="fas fa-times text-danger"></i>
                Role Number 1
              </span>
              <span className="chips_elem">
                <i className="fas fa-times text-danger"></i>
                Role Number 2
              </span>
            </div>
          </div>
          <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
            <button className="btn btn-primary ">Save</button>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};
export default AddUsers;
