import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import getmarchents from "../../api/getmarchents";
import { LuTicket } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
// import ConvertToMMT from "../ConvertToMMT";

const MarchentTable = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);
  const { search } = props;
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const getMarchents = async () => {
    setLoading(true);
    const res = await getmarchents();
    console.log(res);
    if (res.code === 200) {
      setLoading(false);
      setRows(res.data.reverse());
    }
  };

  useImperativeHandle(ref, () => ({
    invokeChildFunction() {
      console.log("Child function invoked", search);
      handleSearch(search);
    },
  }));

  const handleSearch = (name) => {
    if (name) {
      const filteredRows = rows.filter((row) =>
        row.merchant.toLowerCase().includes(name.toLowerCase())
      );
      setRows(filteredRows);
    } else {
      getMarchents();
    }
  };

  useEffect(() => {
    getMarchents();
  }, [props]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-secondary p-4  w-full rounded-lg">
      <div className="w-full bg-secondary h-1/3 overflow-y-auto max-h-[70vh]">
        <table className="min-w-full gap-2 ">
          <thead className="border-space-y-5 sticky top-0 z-5">
            <tr className="bg-white text-black text-left rounded-lg">
              <th className="py-4 px-4 font-medium">No</th>
              <th className="py-4 px-4 font-medium">Merchant Name</th>
              <th className="py-4 px-4 font-medium">Accounts Num</th>
              <th className="py-4 px-4 font-medium">Duration</th>
              {/* <th className="py-4 px-4 font-medium">Purchase Date</th> */}
              <th className="py-4 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary">
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4"></td>
              {/* <td className="py-2 px-4"></td> */}
              <td className="py-2 px-4"></td>
            </tr>
            {rows &&
              rows.length !== 0 &&
              rows.map((item, index) => (
                <tr
                  key={index}
                  className="bg-secondary font-semibold text-white hover:bg-black text-[14px]"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.merchant}</td>
                  <td className="py-2 px-4">{item.codeCount} Accs</td>
                  <td className="py-2 px-4">{item.lifespan}</td>
                  {/* <td className="py-2 px-4">
                    {<ConvertToMMT utc={item.purchaseDate} />}
                  </td> */}
                  <td className="py-2 px-4">
                    <button
                      onClick={() => {
                        navigate(`/merchant-detail/${item._id}`);
                      }}
                      className="flex items-center px-4 py-2 text-[14px] gap-4 bg-white text-black py-1 px-3 rounded-lg hover:bg-black hover:text-white hover:border-white border-2"
                    >
                      <LuTicket className="text-2xl" />
                      View Tickets
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

import PropTypes from "prop-types";

MarchentTable.propTypes = {
  search: PropTypes.string,
};
MarchentTable.displayName = "TicketTable";

export default MarchentTable;
