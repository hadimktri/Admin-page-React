import AddComments from "./AddComment";
import CommentTable from "./CommentTable";

const Comments = () => {
  return (
    <div>
      <div
        id="manage_comments_section"
        className="manage_comments_section main_section    "
      >
        <h4 className="text-center my-3">Comments Management</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
              <span className="input-group-text">Search</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
            <AddComments />
          </div>
        </div>
        <CommentTable />
      </div>
    </div>
  );
};
export default Comments;
