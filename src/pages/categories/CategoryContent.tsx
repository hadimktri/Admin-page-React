import PaginatedSearchedTable from "../../components/PaginatedSearchedTable";
import AddCategory from "./AddCategory";
import AddCategoryAttributes from "./AddCategoryAttributes";

export default function CategoryTable() {
  const data = [
    {
      id: "1",
      category: "aaa",
      title: "bbbq",
      price: "111",
      stock: "5",
      like_count: "1",
    },
    {
      id: "2",
      category: "bbb",
      title: "cccq",
      price: "222",
      stock: "58",
      like_count: "5",
    },
    {
      id: "3",
      category: "ddd",
      title: "fffq",
      price: "333",
      stock: "8",
      like_count: "9",
    },
    {
      id: "4",
      category: "eee",
      title: "gggq",
      price: "333",
      stock: "8",
      like_count: "9",
    },
    {
      id: "5",
      category: "hhh",
      title: "kkkq",
      price: "333",
      stock: "8",
      like_count: "9",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "Title" },
    { field: "category", title: "Category" },
    { field: "price", title: "Price" },
  ];

  const Actions = () => {
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="Sub Group"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="Group Edit"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_modal"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="Add Attribute"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="Delete Group"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };

  const additionalField = {
    title: "Actions",
    elements: (itemId: number) => Actions(itemId),
  };

  const searchParams = {
    placeholder: "Search in titles",
    searchField: "title",
  };

  return (
    <PaginatedSearchedTable
      data={data}
      dataInfo={dataInfo}
      additionalField={additionalField}
      numInPage={2}
      searchParams={searchParams}
    >
      <AddCategory />
      <AddCategoryAttributes />
    </PaginatedSearchedTable>
  );
}
