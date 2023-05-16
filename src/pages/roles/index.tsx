import AddRoles from "./AddRoles";
import RolesTable from "./RolesTable";

const Roles = () => {
  return (
    <div>
      <div
        id="manage_role_section"
        className="manage_role_section main_section    "
      >
        <h4 className="text-center my-3">Roles Management</h4>
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
            <AddRoles />
          </div>
        </div>
        <RolesTable />
      </div>
    </div>
  );
};
export default Roles;
