interface Props {
  title: string;
}
const Category = ({ title }: Props) => {
  return (
    <div className="py-1 text-start d-flex  no_pointer no_hover sideItem">
      <span className="hiddenable no_wrap ms-2 group_sidebar_title">
        {title}
      </span>
    </div>
  );
};
export default Category;
