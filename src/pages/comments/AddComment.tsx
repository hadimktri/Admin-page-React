import ModalsContainer from "../../components/ModalsContainer";

const AddComments = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_comment_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        id="add_comment_modal"
        fullScreen={false}
        title={"Add comment"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="input-group my-3">
                <textarea rows={5} className="form-control"></textarea>
                <span className="input-group-text w_8rem justify-content-center">
                  Comment
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="input-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  list="productList"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  For
                </span>
                <datalist id="productList">
                  <option value=" product NO 1" />
                  <option value=" product NO 2" />
                  <option value=" product NO 3" />
                </datalist>
              </div>
            </div>
            <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
              <button className="btn btn-primary ">ave</button>
            </div>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
};
export default AddComments;
