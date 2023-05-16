import UsersTable from "./UsersTable";
import AddUsers from "./AddUsers";

const Users = () => {
  return (
    <>
      <div
        id="manage_user_section"
        className="manage_user_section main_section    "
      >
        <h4 className="text-center my-3">Users Management</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text">Search</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
            <AddUsers />
          </div>
        </div>
        <UsersTable />
      </div>
    </>
  );
};
export default Users;
