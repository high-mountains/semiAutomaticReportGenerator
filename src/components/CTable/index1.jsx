import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import PropTypes from "prop-types";

const CTable = (props) => {
  const [page, setPage] = useState({ pn: 1, ps: 50 });
  useEffect(() => {
    setPage({ pn: 1, ps: 50 });
  }, [props]);
  const { pn, ps } = page;
  let s = [];
  for (
    let i = (pn - 1) * ps;
    i < (pn * ps < props.dataSource.length ? pn * ps : props.dataSource.length);
    i++
  ) {
    s.push({ ...props.dataSource[i], no: i + 1 });
  }
  return s.length ? (
    <div className="flex h-full flex-col w-full">
      <Table
        {...props}
        dataSource={s}
        sticky
        pagination={false}
        // loading={props.loading}
        className="h-full overflow-auto pr-1"
      />
      <div className="flex justify-center w-full bg-base-200 rounded-md mt-2">
        <Pagination
          pageSizeOptions={[20, 50, 100, 200, 1000]}
          current={pn}
          pageSize={ps}
          showSizeChanger
          className="p-1"
          defaultPageSize={100}
          onChange={(pn, ps) => setPage({ pn, ps })}
          // hideOnSinglePage
          total={props.dataSource.length}
        />
      </div>
    </div>
  ) : (
    <div className="bg-base-100 rounded-lg flex h-full w-full items-center justify-center">
      No Display Data.
    </div>
  );
};

CTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default CTable;
