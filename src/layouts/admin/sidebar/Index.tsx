import { useContext } from "react";
import { AdminContext } from "../../../assets/context/adminLayoutContext";
import Avatar from "./Avatar";
import Category from "./Category";
import SideItems from "./SideItems";
import SidebarToggle from "./SidebarToggle";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsed bg-dark h-100 ${
          showSidebar ? "expanded" : null
        }`}
      >
        <div className="p-1 m-0">
          <SidebarToggle />

          <Avatar
            name={"Hadi Mokhtari"}
            path={"./src/assets/images/user.png"}
          />

          <SideItems
            targetPath="/"
            title={"Dashboard"}
            sectionId={"dashboard_section"}
            icon={"fas fa-tachometer-alt"}
          />

          <Category title={"Retail Management"} />

          <SideItems
            targetPath="/categories"
            title={"Product Categories"}
            sectionId={"manage_product_category"}
            icon={"fas fa-stream"}
          />

          <SideItems
            targetPath="/products"
            title={"Products"}
            sectionId={"manage_product_section"}
            icon={"fas fa-cube"}
          />

          <SideItems
            targetPath="/brands"
            title={"Brands"}
            sectionId={"manage_brand_section"}
            icon={"fas fa-copyright"}
          />

          <SideItems
            targetPath="/warranties"
            title={"Warranties"}
            sectionId={"manage_guarantee_section"}
            icon={"icon fab fa-pagelines"}
          />

          <SideItems
            targetPath="/colors"
            title={"Colors"}
            sectionId={"manage_color_section"}
            icon={"icon fas fa-palette"}
          />

          <SideItems
            targetPath="/discounts"
            title={"Discounts"}
            sectionId={"manage_discount_section"}
            icon={"icon fas fa-percentage"}
          />

          <Category title={"Orders/Carts Management"} />

          <SideItems
            targetPath="/carts"
            title={"Cart"}
            sectionId={"manage_cart_section"}
            icon={"icon fas fa-shopping-basket"}
          />

          <SideItems
            targetPath="/orders"
            title={"Orders"}
            sectionId={"manage_orders_section"}
            icon={"icon fas fa-luggage-cart"}
          />

          <SideItems
            targetPath="/deliveries"
            title={"Deliveries"}
            sectionId={"manage_deliveries_section"}
            icon={"icon fas fa-truck-loading"}
          />

          <Category title={"User Management"} />

          <SideItems
            targetPath="/users"
            title={"User"}
            sectionId={"manage_user_section"}
            icon={"icon fas fa-users"}
          />

          <SideItems
            targetPath="/roles"
            title={"Roles"}
            sectionId={"manage_role_section"}
            icon={"icon fas fa-user-tag"}
          />

          <SideItems
            targetPath="/permissions"
            title={"Permissions"}
            sectionId={"manage_permission_section"}
            icon={"icon fas fa-shield-alt"}
          />

          <Category title={"Contacts"} />

          <SideItems
            targetPath="/questions"
            title={"Questions"}
            sectionId={"manage_question_section"}
            icon={"icon fas fa-question-circle"}
          />

          <SideItems
            targetPath="/comments"
            title={"Comments"}
            sectionId={"manage_comments_section"}
            icon={"icon fas fa-comment"}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
