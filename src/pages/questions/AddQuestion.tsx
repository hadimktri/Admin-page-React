import ModalsContainer from "../../components/ModalsContainer";

const AddQuestions = () => {
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_question_modal"
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        id="add_question_modal"
        title={"Add Question"}
        fullScreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
              <label
                className="form-check-label pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                Question
              </label>
              <input
                className="form-check-input pointer mx-3"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                Response
              </label>
            </div>
            <div className="col-12">
              <div className="input-group my-3">
                <textarea rows={5} className="form-control"></textarea>
                <span className="input-group-text w_8rem justify-content-center">
                  Question
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text justify-content-center">
                <i className="fas fa-plus text-success hoverable_text pointer"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                list="questionGroupList"
              />
              <span className="input-group-text w_8rem justify-content-center">
                Group
              </span>
              <datalist id="questionGroupList">
                <option value="Group 1" />
                <option value="Group 2" />
                <option value="Group 3" />
              </datalist>
            </div>
            <div className="col-12">
              <div className="input-group my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Id"
                  list="questionsList"
                />
                <span className="input-group-text w_8rem justify-content-center">
                  Question No{" "}
                </span>
                <datalist id="questionsList">
                  <option value=" Question No 1" />
                  <option value=" Question No 2" />
                  <option value=" Question No 3" />
                </datalist>
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
export default AddQuestions;
