import { Dispatch, SetStateAction, createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};
interface type {
  showSidebar: Boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const AdminContext = createContext<type>({
  showSidebar: false,
  setShowSidebar: () => {},
});

const AdminContextContainer = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <AdminContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextContainer;
