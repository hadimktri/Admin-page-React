import ModalsContainer from "../../components/ModalsContainer";

const AddRoles = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_role_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        id="add_role_modal"
        fullScreen={true}
        title={"Add Role"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Role Title
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="" />
                <span className="input-group-text w_8rem justify-content-center">
                  Role descriptions
                </span>
              </div>
            </div>
            <div className="col-12 my-1 mb-3">
              <div className="input-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  list="permissionsList"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Permisssions
                </span>
                <datalist id="permissionsList">
                  <option value=" role no 1" />
                  <option value=" role no 2" />
                  <option value=" role no 3" />
                </datalist>
              </div>
              role no
              <div className="col-12 col-md-6 col-lg-8">
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Permition 1
                </span>
                <span className="chips_elem">
                  <i className="fas fa-times text-danger"></i>
                  Permition 2
                </span>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="form-check form-switch col-5 col-md-4">
                <input
                  className="form-check-input pointer"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked
                />
                <label
                  className="form-check-label pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Status : Active
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
export default AddRoles;
