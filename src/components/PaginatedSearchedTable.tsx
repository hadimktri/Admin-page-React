import { useEffect, useState } from "react";
type Props = {
  children: JSX.Element | any;
  data: {
    id: string;
    category: string;
    title: string;
    price: string;
    stock: string;
    like_count: string;
  }[];
  dataInfo: { field: string | number; title: string }[];
  additionalField: { title: string; elements: (itemId: number) => string };
  searchParams: { placeholder: string; searchField: string };
  numInPage: number;
};

const PaginatedTable = ({
  children,
  data,
  dataInfo,
  additionalField,
  searchParams,
  numInPage,
}: Props) => {
  const [initData, setInitData] = useState(data);
  const [tableData, setTableData] = useState<object[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    let pCount = Math.ceil(initData.length / numInPage);
    setPageCount(pCount);
    let pArr: number[] = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let end: number = currentPage * numInPage;
    let start: number = end - numInPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(
      data.filter((d: any) => d[searchParams.searchField].includes(searchChar))
    );
    setCurrentPage(1);
  }, [searchChar]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <span className="input-group-text">Search</span>
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e) => setSearchChar(e.target.value)}
            />
          </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>

      <table className="table table-responsive text-center table-hover table-bordered ">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionalField ? <th>{additionalField.title}</th> : null}
          </tr>
        </thead>

        <tbody>
          {tableData.map((d: any) => (
            <tr key={Math.random()}>
              {dataInfo.map((i: any) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}

              {additionalField ? (
                <td>{additionalField.elements(d.id)}</td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>

      {pages.length > 1 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination">
            <li
              className={`page-item pointer ${
                currentPage === 1 ? "disabled" : null
              }`}
            >
              <span className="page-link" aria-label="Next">
                <span
                  aria-hidden="true"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  &laquo;
                </span>
              </span>
            </li>

            {pages.map((page) => (
              <li key={Math.random()} className="page-item pointer">
                <span
                  className={`page-link ${
                    page == currentPage ? "bg-info bg-opacity-10" : null
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              </li>
            ))}

            <li
              className={`page-item pointer ${
                currentPage === pageCount ? "disabled" : null
              }`}
            >
              <span className="page-link" aria-label="Previous">
                <span
                  aria-hidden="true"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  &raquo;
                </span>
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default PaginatedTable;
