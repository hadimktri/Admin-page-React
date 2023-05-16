import { useContext } from "react"
import { AdminContext } from "../../../assets/context/adminLayoutContext"

const SidebarToggle = () => {

    const { setShowSidebar } = useContext(AdminContext)
    
    return (
        <div className="form-check form-switch      d-md-block hiddenable text-end p-1">
            <label className="switch">
                <input
                    type="checkbox" name="graduate"
                    id="handle_toggle_sidemenu"
                    className="form-check-input pointer"
                    onChange={(e) => setShowSidebar(e.target.checked)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default SidebarToggle