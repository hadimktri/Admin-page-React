import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  sectionId: string;
  icon: string;
  targetPath: string;
}

const SideItems = ({ title, sectionId, icon, targetPath }: Props) => {
  return (
    <NavLink
      to={targetPath}
      className="py-1 text-start ps-4 sidebar_menu_item sideItem text-decoration-none"
      data-section-id={sectionId}
    >
      <i className={`me-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{title}</span>
    </NavLink>
  );
};
export default SideItems;
