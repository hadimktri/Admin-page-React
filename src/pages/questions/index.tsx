import AddQuestions from "./AddQuestion";
import QuestionTable from "./QuestionTable";

const Questions = () => {
  return (
    <div
      id="manage_question_section"
      className="manage_question_section main_section"
    >
      <h4 className="text-center my-3">Questions Management</h4>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-text">Search</span>
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          <AddQuestions />
        </div>
      </div>
      <QuestionTable />
    </div>
  );
};
export default Questions;
