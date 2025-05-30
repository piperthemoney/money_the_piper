import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { TbClockHour9 } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import getmarchentsDetail from "../../api/getmarchentDetail";
import TicketTable from "./TicketTable";

function MarchentDetails() {
  const { id } = useParams();
  const [accs, setAccs] = useState([]);
  const [name, setName] = useState("");
  // const [date, setDates] = useState("");
  const [num, setNum] = useState("");
  const [duration, setDuration] = useState("");
  console.log(id);

  const getMarchentsDetail = async () => {
    const res = await getmarchentsDetail(id);
    console.log("codes", res.data);
    setAccs(res.data.codes);
    setName(res.data.merchant);
    // setDates(res.data.purchaseDate);
    setNum(res.data.codeCount);
    setDuration(res.data.lifespan);
    // console.log("d",res.data.Duration);
  };

  useEffect(() => {
    getMarchentsDetail();
  }, []);

  return (
    <div className="p-4">
      <Link to="/" className="flex items-center space-x-2  cursor-pointer">
        <FaArrowLeftLong className="text-2xl" />
        <span className="text-2xl font-bold ps-3 ">Purchase Details</span>
      </Link>

      <div className="my-5 flex justify-between items-center bg-secondary px-6 py-6  w-full rounded-lg">
        <div>
          <h2 className="text-xl font-semibold mb-3 ">Marchant</h2>
          <p className="flex items-center">
            <FaRegUserCircle className="text-2xl" />
            <span className="ps-3 font-medium"> {name}</span>
          </p>
        </div>

        {/* <div className="h-10 border-l-2 border-gray-700"></div> */}

        {/* <div className="">
          <h2 className="text-xl font-semibold mb-3">Purchase Date</h2>
          <p className="flex items-center">
            <MdOutlineCalendarMonth className="text-2xl" />
            <span className="ps-3 font-medium">
              {" "}
              {<ConvertToMMT utc={date} />}
            </span>
          </p>
        </div> */}

        <div className="h-10 border-l-2 border-gray-700"></div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Account Numbers</h2>
          <p className="flex items-center">
            <LuTicket className="text-2xl" />
            <span className="ps-3 font-medium">{num}</span>
          </p>
        </div>

        <div className="h-10 border-l-2 border-gray-700"></div>

        <div>
          <h2 className="text-xl font-bold mb-3">Accounts Duration</h2>
          <p className="flex items-center">
            <TbClockHour9 className="text-2xl" />
            <span className="ps-3 font-medium"> {duration}</span>
          </p>
        </div>
      </div>

      <div className="mt-5">
        <TicketTable accs={accs} name={name} />
      </div>
    </div>
  );
}

export default MarchentDetails;
